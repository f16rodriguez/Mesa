import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {clone as cloneSkeleton} from 'three/addons/utils/SkeletonUtils.js';
import {MOSTRADOR} from './scene-layout.ts';
import {PERSONAJES,COLMADERO as KIKO,LUZ_PROPIA,listo,clips} from './personajes.js';

/**
 * La gente que pasa por la esquina, y el colmadero.
 *
 * - Enfrente y por la calle de al lado pasa gente cada rato (se ve al girar la cámara).
 * - Por el patio, detrás de la mesa, cruza alguien o entra un cliente al colmado, compra y se
 *   va. El colmadero, detrás del mostrador, lo atiende. De vez en cuando el cliente se para,
 *   saluda a uno de la mesa por su nombre y el bot le contesta (el sonido lo pone client.js al
 *   oír `mesa:saludo`).
 *
 * Son personajes enteros (personajes.js), cada uno con su cara y su ropa: los que NO están
 * sentados a la mesa, así ninguna cara sale dos veces. Se mueven con clips de verdad (caminar,
 * esperar, saludar, conversar) pasados a su esqueleto en Blender (scripts/manos/animar.py); el
 * paso se reproduce a la velocidad a la que avanzan, para que los pies no patinen. Encima del clip
 * solo se pone la cabeza (mira a quien saluda) y, al despachar, el brazo que alcanza.
 */
const v3=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);
const suave=p=>p<=0?0:p>=1?1:p*p*(3-2*p);
const paso=(x,borde,ancho)=>suave((x-borde+ancho)/(2*ancho));
const azar=(a,b)=>a+Math.random()*(b-a),uno=l=>l[Math.floor(Math.random()*l.length)];

/** La altura del piso: el patio a 0, las calles 15 cm abajo, la acera de enfrente 16 cm arriba. */
export function suelo(x,z){
 if(z>3.3)return -.15*paso(z,3.5,.12)+.31*paso(z,8.7,.12);
 return -.15*paso(x,4.65,.12)+.16*paso(x,11.7,.12);
}

// ── Cargar a cada quien (malla + animaciones), una vez y solo cuando hace falta ────────
const cargador=new GLTFLoader(),cache=new Map();
/** El personaje y sus clips, cargados una sola vez: la mesa (scene.js) sienta a los suyos de aquí mismo. */
export function cargar(p){
 if(!cache.has(p.modelo))cache.set(p.modelo,Promise.all([cargador.loadAsync(`/models/${p.modelo}.glb`),cargador.loadAsync(`/models/anim/${p.modelo}.glb`)]).then(([g,a])=>{
  const acciones={};
  // Solo rotaciones y el movimiento de la cadera: el resto de las pistas repite el reposo.
  for(const c of a.animations){c.tracks=c.tracks.filter(t=>t.name.endsWith('.quaternion')||t.name==='Hips.position');acciones[c.name]=c;}
  return {p,gltf:g,acciones,datos:clips(p)};
 }).catch(e=>{cache.delete(p.modelo);throw e;}));
 return cache.get(p.modelo);
}

// ── La cabeza y el brazo, encima del clip ─────────────────────────────────────────────
const _a=v3(),_b=v3(),_u=v3(),_d=v3(),_p=v3(),_s=v3(),_q=new THREE.Quaternion(),_q2=new THREE.Quaternion(),_wq=new THREE.Quaternion(),_pq=new THREE.Quaternion(),_hq=new THREE.Quaternion();
function giraEnMundo(h,q){h.matrixWorld.decompose(_p,_wq,_s);h.parent.matrixWorld.decompose(_p,_pq,_s);h.quaternion.copy(_pq.invert()).multiply(q).multiply(_wq);h.updateMatrixWorld(true);}
/** Lleva el tramo hueso→hijo hacia `dir` (mundo), en la proporción k (0 = como está). */
function apuntar(h,hijo,dir,k){_a.setFromMatrixPosition(h.matrixWorld);_b.setFromMatrixPosition(hijo.matrixWorld);_u.subVectors(_b,_a).normalize();giraEnMundo(h,_q2.identity().slerp(_q.setFromUnitVectors(_u,dir),k));}
function cabeza(g,peso){
 const H=g.h;if(!H.Head||!H.headfront||peso<=0)return;
 for(const [hueso,parte] of [[H.neck,.45],[H.Head,1]]){if(!hueso)continue;
  _a.setFromMatrixPosition(H.Head.matrixWorld);_b.setFromMatrixPosition(H.headfront.matrixWorld);_u.subVectors(_b,_a).normalize();
  _d.subVectors(g.mirar,_a).normalize();const ang=_u.angleTo(_d);if(ang<1e-3)continue;
  giraEnMundo(hueso,_q2.identity().slerp(_q.setFromUnitVectors(_u,_d),peso*parte*Math.min(ang,1.1)/ang));}
}
/** En el clip Dar (Interact), cuándo está el brazo estirado del todo, en segundos. */
const DAR_PICO=1;
/** El brazo derecho que alcanza: arriba a un anaquel (alto 1) o al frente, a dar o recibir (0). */
function alcanzar(g){
 const k=suave(g.alcanza),a=g.alcanzaAlto||0,H=g.h;if(k<=0||!H.RightArm)return;
 g.holder.getWorldQuaternion(_hq);
 apuntar(H.RightArm,H.RightForeArm,_d.set(-.16,-.3+.85*a,.9).normalize().applyQuaternion(_hq),k);
 apuntar(H.RightForeArm,H.RightHand,_d.set(-.06,-.05+.75*a,1).normalize().applyQuaternion(_hq),k);
}

// ── Los caminos ──────────────────────────────────────────────────────────────────────
const P=(...ps)=>ps.map(([x,z])=>v3(x,0,z));
/* Por el patio, de la calle de al lado (derecha) a la acera de los vecinos (izquierda), por
   detrás de la silla del que se sienta de espaldas al colmado: libra la nevera del hielo, el
   anuncio, las cajas y las matas. */
const PATIO_DER=P([10,-.25],[6.5,-.3],[4.6,-.4],[3.3,-.62],[2.25,-1.1],[1.2,-1.8]);
const PATIO_MEDIO=P([1.2,-1.8],[.35,-2.15],[-.6,-2.05],[-1.35,-1.65]);
const PATIO_IZQ=P([-1.35,-1.65],[-2.35,-1.0],[-2.65,.2],[-4.5,.95],[-9,1.15],[-17,1.2]);
/* El colmadero, detrás del mostrador (entre el tope y el primer anaquel); el cliente, delante,
   frente a él. Se calcula del mostrador de scene-layout.ts. */
const TOPE_ATRAS=MOSTRADOR.z+.04-(MOSTRADOR.fondo+.16)/2,TOPE_DELANTE=MOSTRADOR.z+.04+(MOSTRADOR.fondo+.16)/2;
const COLMADERO=v3(-.6,0,TOPE_ATRAS-.19),EN_MOSTRADOR=v3(-.6,0,TOPE_DELANTE+.42);
const AL_MOSTRADOR=P([1.2,-1.8],[.45,-2.4],[-.2,EN_MOSTRADOR.z+.2],[EN_MOSTRADOR.x,EN_MOSTRADOR.z]);
const DEL_MOSTRADOR_IZQ=P([EN_MOSTRADOR.x,EN_MOSTRADOR.z],[-1.0,-2.62],[-1.28,-2.1],[-1.35,-1.65]);
const unir=(...tramos)=>tramos.reduce((a,t)=>a.concat(a.length?t.slice(1):t),[]);
const vuelta=ps=>ps.slice().reverse();
const CALLE={
 enfrente:()=>{const z=azar(9.45,10.05),ps=P([-34,z],[-12,z+azar(-.1,.1)],[12,z+azar(-.1,.1)],[34,z]);return Math.random()<.5?ps:vuelta(ps);},
 lateral:()=>{const x=azar(12.15,12.45),ps=P([x,-36],[x,-10],[x,1.2],[x+1.2,2.25],[20,2.3],[36,2.4]);return Math.random()<.5?ps:vuelta(ps);},
};

// ── Los vecinos ──────────────────────────────────────────────────────────────────────
export function crearTranseuntes({scene,camera,enMesa=()=>[],pocos=false}){
 const gente=[],listosYa=new Map(),frustum=new THREE.Frustum(),_m=new THREE.Matrix4(),_esfera=new THREE.Sphere(v3(),1.3);
 let colmadero=null,ms=0,reloj=0,proxCalle=azar(8,16),proxPatio=azar(20,35),ultimoSaludo=-1e9,saludo=null,apagado=false,forzar=false,cargando=false;

 function armar(t){
  const root=cloneSkeleton(t.gltf.scene),holder=new THREE.Group();holder.add(root);
  const h={};let malla=null;
  root.traverse(o=>{if(o.isBone)h[o.name]=o;if(o.isSkinnedMesh)malla=o;});
  if(!malla||!h.Hips)return null;
  malla.material=malla.material.clone();malla.material.roughness=.83;malla.material.specularIntensity=.25;malla.material.emissiveIntensity=LUZ_PROPIA;
  malla.castShadow=false;malla.receiveShadow=true;malla.morphTargetInfluences?.fill(0);
  holder.updateMatrixWorld(true);
  // De pie en reposo: la cadera sobre el origen y la suela en y=0.
  malla.computeBoundingBox();const caja=malla.boundingBox.clone().applyMatrix4(malla.matrixWorld),hp=v3().setFromMatrixPosition(h.Hips.matrixWorld);
  root.position.set(-hp.x,-caja.min.y,-hp.z);holder.updateMatrixWorld(true);
  malla.computeBoundingSphere();malla.boundingSphere.radius*=1.3;
  const mixer=new THREE.AnimationMixer(root),acc={};
  for(const [n,c] of Object.entries(t.acciones))acc[n]=mixer.clipAction(c);
  // A qué velocidad avanza el clip de caminar (m/s), medido en su propio esqueleto.
  const d=t.datos.Caminar,vClip=d?d.paso/d.duracion:1.1;
  return {t,p:t.p,root,holder,h,malla,mixer,acc,actual:null,vClip,marcha:0,t:0,alcanza:0,alcanzaAlto:0,mirar:v3(0,1.4,5),mira:0,yaw:0};
 }
 /** Cambia de clip con un cruce suave. Saludar y Dar van una sola vez y se quedan en su último cuadro. */
 function jugar(g,nombre,cruce=.4){
  if(g.actual===nombre)return;const a=g.acc[nombre]||g.acc.Esperar;if(!a)return;
  a.reset();a.setEffectiveTimeScale(1);a.setEffectiveWeight(1);
  if(nombre==='Saludar'||nombre==='Dar'){a.setLoop(THREE.LoopOnce,1);a.clampWhenFinished=true;}
  a.fadeIn(cruce).play();
  const antes=g.actual&&g.acc[g.actual];if(antes&&antes!==a)antes.fadeOut(cruce);
  g.actual=nombre;
 }

 /* Quién puede salir: los que no están sentados a la mesa ni andando ya por ahí. */
 function libres(){const mesa=new Set(enMesa()),fuera=new Set(gente.map(g=>g.p.id));return PERSONAJES.filter(p=>listo(p)&&!mesa.has(p.id)&&!fuera.has(p.id));}
 /** Una plantilla ya cargada de alguien libre; de paso, deja cargando a otro (de a uno). */
 function plantilla(){
  const hay=libres(),cargados=hay.filter(p=>listosYa.has(p.modelo)),falta=hay.filter(p=>!listosYa.has(p.modelo));
  if(falta.length&&!cargando){cargando=true;const p=uno(falta);cargar(p).then(t=>listosYa.set(p.modelo,t)).catch(e=>console.warn('Transeúnte sin cargar',p.id,e)).finally(()=>{cargando=false;});}
  return cargados.length?listosYa.get(uno(cargados).modelo):null;
 }
 function nuevo(){
  const t=plantilla();if(!t)return null;
  const g=armar(t);if(!g)return null;
  g.velocidad=g.vClip*(g.p.mayor?azar(.8,.9):azar(.95,1.08));
  scene.add(g.holder);return g;
 }
 function soltar(g){scene.remove(g.holder);g.mixer.stopAllAction();const i=gente.indexOf(g);if(i>=0)gente.splice(i,1);}

 /* Un guion: tramos de camino y paradas, uno tras otro. */
 function ruta(puntos){const c=new THREE.CatmullRomCurve3(puntos,false,'centripetal',.5);return {tipo:'ruta',curva:c,largo:c.getLength(),d:0};}
 function poner(g,guion,zona){
  g.guion=guion;g.i=0;g.zona=zona;g.malla.castShadow=zona==='patio';
  const c=guion[0].curva,p=c.getPointAt(0),d=c.getTangentAt(0);g.yaw=Math.atan2(d.x,d.z);g.holder.position.set(p.x,suelo(p.x,p.z),p.z);g.holder.rotation.y=g.yaw;
  jugar(g,'Caminar',0);g.acc.Caminar?.setEffectiveTimeScale(g.velocidad/g.vClip);
  gente.push(g);
 }
 const giroHacia=(g,yaw,dt,vel=2.6)=>{let d=yaw-g.yaw;d=Math.atan2(Math.sin(d),Math.cos(d));g.yaw+=Math.max(-vel*dt,Math.min(vel*dt,d));g.holder.rotation.y=g.yaw;return Math.abs(d);};
 function andar(g,dt,estado){
  let tramo=g.guion[g.i];if(!tramo){if(!g.fijo){soltar(g);return;}g.guion=[vigilar()];g.i=0;tramo=g.guion[0];tramo.t0=g.t;}
  g.t+=dt;
  if(tramo.tipo==='ruta'){
   const sigue=g.guion[g.i+1],para=sigue&&sigue.tipo!=='ruta',falta=tramo.largo-tramo.d;
   const meta=para?Math.min(1,falta/.6):1;g.marcha+=(meta-g.marcha)*Math.min(1,dt*(meta<g.marcha?5:2.2));
   const v=g.velocidad*Math.max(g.marcha,para?.15:.25);tramo.d=Math.min(tramo.largo,tramo.d+v*dt);
   // El clip de caminar va a la velocidad a la que avanza: los pies no patinan.
   jugar(g,'Caminar',.35);g.acc.Caminar?.setEffectiveTimeScale(Math.max(.3,v/g.vClip));
   const u=tramo.d/tramo.largo,p=tramo.curva.getPointAt(u),d=tramo.curva.getTangentAt(u);
   g.holder.position.set(p.x,suelo(p.x,p.z),p.z);giroHacia(g,Math.atan2(d.x,d.z),dt);
   g.mira=Math.max(0,g.mira-dt*2);
   if(tramo.d>=tramo.largo-1e-3){g.i++;if(g.guion[g.i])g.guion[g.i].t0=g.t;}
  }else if(tramo.tipo==='quieto'){
   g.marcha=0;const e=g.t-(tramo.t0??g.t);
   if(tramo.saludo)saludar(g,tramo,e,estado);
   jugar(g,tramo.clip||'Esperar',.45);
   if(tramo.yaw!=null)giroHacia(g,tramo.yaw,dt,2);
   if(tramo.miraA?.h?.Head)tramo.mira=tramo.miraA.h.Head.getWorldPosition(tramo.mira||v3());
   else if(tramo.vigila)tramo.mira=vigilando(tramo,estado);
   if(tramo.mira){g.mirar.lerp(tramo.mira,1-Math.exp(-dt*3));g.mira=Math.min(1,g.mira+dt*2);}else g.mira=Math.max(0,g.mira-dt*2);
   if(tramo.atender&&!tramo.pedido){tramo.pedido=true;if(colmadero)servir(colmadero,g);}
   // Alcanzar (un anaquel, o dar y recibir): sube y baja suave dentro del tramo.
   if(tramo.brazo){const k=Math.min(1,e/.6,(tramo.dur-e)/.6);g.alcanza=Math.max(0,k);g.alcanzaAlto=tramo.brazo.alto;
    const o=tramo.brazo.entrega;if(o&&gente.includes(o)){o.alcanza=g.alcanza;o.alcanzaAlto=.1;}}
   // Kiko da con su clip (Dar): el brazo llega al frente a ~1 s, y ahí el cliente estira el suyo a tomarlo.
   const r=tramo.recibe;if(r&&gente.includes(r)){r.alcanza=Math.max(0,1-Math.abs(e-DAR_PICO)/.55);r.alcanzaAlto=.1;}
   if(e>=tramo.dur){g.i++;if(g.guion[g.i])g.guion[g.i].t0=g.t;if(tramo.brazo){g.alcanza=0;if(tramo.brazo.entrega)tramo.brazo.entrega.alcanza=0;}if(r)r.alcanza=0;}
  }
 }

 /* El saludo. Se decide al llegar: solo con la mesa tranquila (en el lobby o jugando, que no
    esté cerrando mano ni hablando nadie). Si no, sigue de largo. */
 function saludar(g,tramo,e,estado){
  if(!tramo.decidido){tramo.decidido=true;const v=estado?.view;
   const ok=v&&(v.phase==='lobby'||v.phase==='playing')&&(forzar||!estado.habla?.size&&reloj>150&&reloj-ultimoSaludo>420);forzar=false;
   if(!ok){tramo.dur=0;return;}
   const bots=[0,1,2,3].filter(s=>v.bots?.[s]),seat=bots.length&&Math.random()<.8?uno(bots):null;
   tramo.seat=seat;ultimoSaludo=reloj;
   const hacia=seat==null?v3(0,1.2,0):(estado.cabezas?.[seat]?.clone()||v3(0,1.2,0));
   tramo.mira=hacia.clone();tramo.yaw=Math.atan2(hacia.x-g.holder.position.x,hacia.z-g.holder.position.z);
   tramo.clip='Saludar';
  }
  if(tramo.dur===0)return;
  if(!tramo.dicho&&e>.5){tramo.dicho=true;const cab=g.h.Head.getWorldPosition(v3());
   saludo={seat:tramo.seat,p:cab,t0:reloj,hasta:reloj+5};
   dispatchEvent(new CustomEvent('mesa:saludo',{detail:{seat:tramo.seat,voz:g.p.sexo,pos:cab.toArray()}}));}
 }

 /* El colmadero: detrás del mostrador. Vigila la mesa y la calle; cuando llega alguien, lo
    mira, se vira al anaquel, estira el brazo y se lo da (y el otro lo recibe). */
 function ponerColmadero(t){
  const g=armar(t);if(!g)return;
  g.fijo=true;g.zona='colmado';colmadero=g;g.malla.castShadow=true;
  g.holder.position.copy(COLMADERO);g.yaw=0;g.holder.rotation.y=0;g.mirar.set(0,.8,0);
  g.guion=[vigilar()];g.i=0;g.guion[0].t0=0;jugar(g,'Esperar',0);scene.add(g.holder);
 }
 function vigilar(){return {tipo:'quieto',dur:1e9,yaw:0,vigila:true};}
 function vigilando(tramo,estado){
  if(tramo.cambio&&reloj<tramo.cambio)return tramo.mira;
  tramo.cambio=reloj+azar(3,6.5);const v=estado?.view,r=Math.random(),cab=estado?.cabezas,alguien=gente.find(g=>g.zona==='patio');
  if(alguien&&r<.25)return alguien.h.Head.getWorldPosition(v3());
  if(v?.phase==='playing'&&r<.55&&cab?.[v.turn])return cab[v.turn].clone();
  if(r<.8)return v3(azar(-.3,.3),.8,azar(-.3,.3));
  return v3(azar(-4,4),1.5,6);
 }
 function servir(c,cliente){
  const quieto=(dur,o)=>({tipo:'quieto',dur,...o}),anaquel=v3(COLMADERO.x+azar(-.5,.5),1.72,-4.8);
  // Lo mira, se vira al anaquel de atrás, estira el brazo, se vira y se lo da por encima del mostrador
  // (con el clip 'Dar', de la librería de Quaternius; si no lo tiene, con el brazo armado a mano).
  const dar=c.acc.Dar?quieto(2.1,{yaw:0,miraA:cliente,clip:'Dar',recibe:cliente}):quieto(2.4,{yaw:0,miraA:cliente,brazo:{alto:.15,entrega:cliente}});
  c.guion=[quieto(1.4,{yaw:0,miraA:cliente}),quieto(.9,{yaw:Math.PI,mira:anaquel}),quieto(2.2,{yaw:Math.PI,mira:anaquel,brazo:{alto:1}}),
   quieto(.9,{yaw:0,miraA:cliente}),dar,quieto(4,{yaw:0,miraA:cliente,clip:'Conversar'})];
  c.i=0;c.guion[0].t0=c.t;
 }
 function cliente(){
  const derecha=Math.random()<.6,saluda=Math.random()<.5,guion=[];
  // Entra por la derecha (la calle de al lado) o por la izquierda (la acera de los vecinos).
  guion.push(ruta(derecha?PATIO_DER:vuelta(PATIO_IZQ)));
  if(saluda)guion.push({tipo:'quieto',dur:3.6,saludo:true});
  guion.push(ruta(derecha?AL_MOSTRADOR:vuelta(DEL_MOSTRADOR_IZQ)));
  // En el mostrador, de cara al colmadero, que lo atiende; conversa un rato.
  guion.push({tipo:'quieto',dur:azar(14,24),yaw:Math.PI,clip:'Conversar',...(colmadero?{miraA:colmadero,atender:true}:{mira:v3(-.6,1.35,-4.6)})});
  if(Math.random()<.6)guion.push(ruta(unir(DEL_MOSTRADOR_IZQ,PATIO_IZQ)));
  else guion.push(ruta(unir(vuelta(AL_MOSTRADOR),vuelta(PATIO_DER))));
  return guion;
 }
 function deCamino(){const ps=unir(PATIO_DER,PATIO_MEDIO,PATIO_IZQ);return [ruta(Math.random()<.5?ps:vuelta(ps))];}

 // El colmadero se carga al rato de estar la mesa: no le quita tiempo a la carga.
 setTimeout(()=>{if(!apagado&&listo(KIKO))cargar(KIKO).then(t=>{if(!apagado)ponerColmadero(t);}).catch(e=>console.warn('Sin colmadero',e));},4000);

 function update(dt,estado){
  if(apagado)return;dt*=window.mesaPrisa||1;reloj+=dt;   // mesaPrisa: solo para pruebas en máquinas lentas
  if(saludo){saludo.e=reloj-saludo.t0;if(reloj>saludo.hasta)saludo=null;}
  const reducido=document.documentElement.classList.contains('reduced');
  if(!reducido&&!pocos&&reloj>proxCalle){proxCalle=reloj+azar(14,32);
   if(gente.filter(g=>g.zona==='calle').length<2){const g=nuevo();if(g)poner(g,[ruta(uno([CALLE.enfrente,CALLE.enfrente,CALLE.lateral])())],'calle');}}
  if(!reducido&&reloj>proxPatio&&!gente.some(g=>g.zona==='patio')){
   const g=nuevo();if(g){proxPatio=reloj+azar(50,110);poner(g,Math.random()<.65?cliente():deCamino(),'patio');}else proxPatio=reloj+3;}
  camera.updateMatrixWorld();frustum.setFromProjectionMatrix(_m.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse));
  const t0=performance.now();
  for(const g of colmadero?[colmadero,...gente]:gente.slice()){
   andar(g,dt,estado);if(!g.fijo&&!gente.includes(g))continue;
   g.mixer.update(dt);
   // Fuera de cuadro el clip igual corre (es barato), pero no se le pone cabeza ni brazo.
   _esfera.center.copy(g.holder.position).y+=.9;
   if(frustum.intersectsSphere(_esfera)){g.holder.updateMatrixWorld(true);cabeza(g,suave(g.mira));alcanzar(g);}
  }
  ms+=(performance.now()-t0-ms)*.05;
 }
 // Para capturas y pruebas: saca a alguien ya (tipo cliente, saluda, calle, cruza, posa).
 window.mesaTranseunte=(tipo='cliente',_,donde)=>{const g=nuevo();if(!g)return false;
  if(tipo==='posa'){const [x,z,yaw=0]=donde;poner(g,[ruta(P([x-Math.sin(yaw)*.3,z-Math.cos(yaw)*.3],[x,z])),{tipo:'quieto',dur:1e4}],'patio');return true;}
  const s=tipo==='calle'?[ruta(CALLE.enfrente())]:tipo==='cruza'?deCamino():cliente();
  if(tipo==='saluda'){if(!s.some(t=>t.saludo))s.splice(1,0,{tipo:'quieto',dur:3.6,saludo:true});forzar=true;}
  poner(g,s,tipo==='calle'?'calle':'patio');return true;};
 window.mesaServir=()=>{const g=gente[gente.length-1];if(!colmadero||!g)return false;servir(colmadero,g);return true;};
 window.mesaKiko=()=>colmadero&&{clip:colmadero.actual,tramo:colmadero.i};
 window.mesaGente=()=>gente.map(g=>({quien:g.p.id,pos:g.holder.position.toArray().map(x=>+x.toFixed(2)),clip:g.actual,marcha:+g.marcha.toFixed(2),tramo:g.i}));
 return {update,get saludo(){return saludo;},get ms(){return ms;},andando:()=>gente.map(g=>g.p.id),dispose(){apagado=true;for(const g of gente.slice())soltar(g);if(colmadero)scene.remove(colmadero.holder);}};
}
