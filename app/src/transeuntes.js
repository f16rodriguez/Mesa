import * as THREE from 'three';
import {clone as cloneSkeleton} from 'three/addons/utils/SkeletonUtils.js';
import {MOSTRADOR} from './scene-layout.ts';

/**
 * La gente que pasa por la esquina.
 *
 * - Enfrente y por la calle de al lado pasa gente cada rato (se ve al girar la cámara).
 * - Por el patio, detrás de la mesa, cruza alguien o entra un cliente al colmado, compra
 *   y se va. El colmadero (el cuerpo de Don Rafa, con otra ropa y gorra) está detrás del
 *   mostrador: vigila la mesa y la calle, y atiende al que llega. De vez en cuando ese cliente se para, saluda a uno de la mesa por su nombre
 *   y el bot le contesta (el sonido lo pone client.js al oír `mesa:saludo`).
 *
 * Los cuerpos son los mismos cuatro modelos de la mesa (sin Don Rafa: su pantalón se
 * confunde con la piel), sin animación de caminar: la marcha se arma aquí, apuntando cada
 * hueso en el mundo desde la pose de reposo del modelo, que es de pie. Para que no parezcan
 * gemelos de los que juegan, cada uno lleva otra ropa y otro tono de piel: un shader tiñe la
 * textura original con una máscara por cuerpo (camisa, pantalón, piel), así cien vecinos
 * distintos cuestan una sola textura. A los hombres, a veces, una gorra.
 */
const v3=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z),GRADO=Math.PI/180,TAU=Math.PI*2;
const suave=p=>p<=0?0:p>=1?1:p*p*(3-2*p);
const paso=(x,borde,ancho)=>suave((x-borde+ancho)/(2*ancho));
const azar=(a,b)=>a+Math.random()*(b-a),uno=l=>l[Math.floor(Math.random()*l.length)];

/** La altura del piso: el patio a 0, las calles 15 cm abajo, la acera de enfrente 16 cm arriba. */
export function suelo(x,z){
 if(z>3.3)return -.15*paso(z,3.5,.12)+.31*paso(z,8.7,.12);
 return -.15*paso(x,4.65,.12)+.16*paso(x,11.7,.12);
}

// ── La ropa ──────────────────────────────────────────────────────────────────────────
/* Qué es camisa, pantalón y piel en cada textura, por tono (grados), saturación y valor.
   Los bordes son suaves: un píxel a medio camino se tiñe a medias. */
const REGLAS={
 // El pantalón de Luis es blanco: sin tono, claro. La cara queda fuera de camisa y pantalón (ver `cabeza`).
 'luis-upright':{voz:'m',camisa:[[188,256],[.28,1.1],[.08,1.1]],pantalon:[[-400,400],[-.1,.28],[.44,1.1]],piel:[[-16,32],[.3,.82],[.14,1.1]]},
 marisol:{voz:'f',camisa:[[-20,24],[.62,1.1],[.2,1.1]],pantalon:[[188,256],[.16,1.1],[.03,.86]],piel:[[-6,40],[.16,.64],[.2,1.1]]},
 carmen:{voz:'f',camisa:[[30,60],[.46,1.1],[.36,1.1]],pantalon:[[58,150],[.08,1.1],[.03,.62]],piel:[[-10,30],[.2,.66],[.16,1.1]]},
 // Don Rafa solo hace de colmadero: camisa blanca, pantalón marrón oscuro (más oscuro que la piel).
 'rafa-upright':{voz:'m',camisa:[[-400,400],[-.1,.35],[.52,1.1]],pantalon:[[-14,34],[.25,.85],[.02,.35]],piel:[[-16,32],[.3,.85],[.37,1.1]]},
};
const CAMISAS=['#e9e6de','#a1302a','#3e6a47','#c99a3a','#6f9fc8','#232326','#7c7f82','#d88c9b','#24345a','#d8694f','#2f7f7a','#9b88ba','#e3c7a0','#5b3a5e'];
const PANTALONES=['#27324d','#1d1d20','#b6a37d','#5c5f63','#5b7596','#55573a','#4f3b2c','#8a2f2a'];
const FALDAS=['#27324d','#1d1d20','#6b2f3a','#3e5a47','#d9d3c6','#5b7596','#7a5a3a'];
/* La piel se multiplica: más oscura o más clara, nunca igual (sería la cara del que juega). */
const PIELES=[[.8,.75,.71],[.66,.6,.56],[.52,.46,.42],[1.12,1.08,1.05],[.72,.66,.62]];
/* Lo que se parece a la ropa que ya lleva ese cuerpo en la mesa: así no parece su gemelo. */
const EVITAR={'luis-upright':['#6f9fc8','#24345a','#e9e6de','#b6a37d'],marisol:['#d8694f','#e3c7a0','#a1302a','#c99a3a','#27324d','#5b7596'],carmen:['#c99a3a','#e3c7a0','#3e5a47','#55573a']};
const GORRAS=['#1f2a44','#a1302a','#1d1d20','#e9e6de','#2f5e3b','#c99a3a'];

/* Se tiñe lo difuso y también lo emisivo: estos modelos se alumbran solos con su propia
   textura (emissive 1 con el mismo atlas), y sin eso la ropa de antes brillaba por debajo. */
const TENIR=/* glsl */`
vec3 tenir( vec3 c, vec4 tela ) {
 float luz = dot( c, vec3( .2126, .7152, .0722 ) );
 c = mix( c, min( colCamisa * ( luz / lums.x ), vec3( 1.2 ) ), tela.r );
 c = mix( c, min( colPantalon * ( luz / lums.y ), vec3( 1.2 ) ), tela.g );
 return mix( c, c * tonoPiel, tela.b );
}`;
const TINTE=/* glsl */`
#ifdef USE_MAP
 vec4 sampledDiffuseColor = texture2D( map, vMapUv );
 diffuseColor *= vec4( tenir( sampledDiffuseColor.rgb, texture2D( mascara, vMapUv ) ), sampledDiffuseColor.a );
#endif`;
const TINTE_EMISIVO=/* glsl */`
#ifdef USE_EMISSIVEMAP
 vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
 totalEmissiveRadiance *= tenir( emissiveColor.rgb, texture2D( mascara, vEmissiveMapUv ) );
#endif`;

const aLineal=new Float32Array(256).map((_,i)=>{const c=i/255;return c<=.04045?c/12.92:((c+.055)/1.055)**2.4;});
const ceder=()=>new Promise(ok=>setTimeout(ok,0));
function banda(x,[a,b],e){return suave((x-a+e)/(2*e))*(1-suave((x-b+e)/(2*e)));}

/** Dónde cae la cabeza en la textura: los triángulos que mueve el hueso de la cabeza. Ahí no
    hay ropa (los ojos y los dientes son blancos como un pantalón). */
function cabeza(malla,N){
 const cv=document.createElement('canvas');cv.width=cv.height=N;const c=cv.getContext('2d',{willReadFrequently:true});
 const g=malla.geometry,uv=g.attributes.uv,si=g.attributes.skinIndex,sw=g.attributes.skinWeight,idx=g.index,k=malla.skeleton.bones.findIndex(b=>b.name==='Head');
 if(k<0||!uv||!idx)return null;
 const peso=i=>{let w=0;for(let j=0;j<4;j++)if(si.getComponent(i,j)===k)w+=sw.getComponent(i,j);return w;};
 c.fillStyle=c.strokeStyle='#fff';c.lineWidth=2;
 // Las UV de estos modelos pasan de 0–1 (la textura se repite): cada triángulo se lleva a la
 // primera baldosa y se dibuja también corrido, por si queda partido en el borde.
 for(let t=0;t<idx.count;t+=3){const v=[idx.getX(t),idx.getX(t+1),idx.getX(t+2)];if(peso(v[0])+peso(v[1])+peso(v[2])<1.5)continue;
  const ou=Math.floor(Math.min(...v.map(i=>uv.getX(i)))),ov=Math.floor(Math.min(...v.map(i=>uv.getY(i))));
  for(const [du,dv] of [[0,0],[-1,0],[0,-1],[-1,-1]]){c.beginPath();v.forEach((i,j)=>{const x=(uv.getX(i)-ou+du)*N,y=(uv.getY(i)-ov+dv)*N;j?c.lineTo(x,y):c.moveTo(x,y);});c.closePath();c.fill();c.stroke();}}
 return c.getImageData(0,0,N,N).data;
}
/** La máscara de un cuerpo: R camisa, G pantalón, B piel. Se calcula una vez, por pedazos. */
async function mascara(img,reglas,malla,repite){
 const N=512,cv=document.createElement('canvas');cv.width=cv.height=N;
 const c=cv.getContext('2d',{willReadFrequently:true});c.drawImage(img,0,0,N,N);
 const src=c.getImageData(0,0,N,N).data,out=new Uint8Array(N*N*4),lum=[0,0,0,0],cab=cabeza(malla,N);await ceder();
 const clase=(h,s,v,[H,S,V])=>{const hh=H[0]<0&&h>180?h-360:h;return banda(hh,H,5)*banda(s,S,.04)*banda(v,V,.04);};
 for(let y0=0;y0<N;y0+=64){
  for(let i=y0*N;i<(y0+64)*N;i++){
   const r=src[i*4]/255,g=src[i*4+1]/255,b=src[i*4+2]/255,mx=Math.max(r,g,b),mn=Math.min(r,g,b),d=mx-mn,v=mx,s=mx>0?d/mx:0;
   let h=0;if(d>1e-5)h=mx===r?((g-b)/d+6)%6*60:mx===g?((b-r)/d+2)*60:((r-g)/d+4)*60;
   const fuera=cab?1-cab[i*4]/255:1,cam=clase(h,s,v,reglas.camisa)*fuera,pan=clase(h,s,v,reglas.pantalon)*(1-cam)*fuera,piel=clase(h,s,v,reglas.piel)*(1-cam-pan);
   out[i*4]=cam*255;out[i*4+1]=pan*255;out[i*4+2]=Math.max(0,piel)*255;out[i*4+3]=255;
   const L=.2126*aLineal[src[i*4]]+.7152*aLineal[src[i*4+1]]+.0722*aLineal[src[i*4+2]];
   lum[0]+=L*cam;lum[1]+=cam;lum[2]+=L*pan;lum[3]+=pan;
  }
  await ceder();
 }
 // Cierre (dilatar y erosionar, 3 píxeles): las arrugas oscuras y las motas que no cayeron en
 // ninguna clase quedan adentro de la tela, y no salen pintadas del color de antes.
 const tmp=new Uint8Array(N*N);
 for(let k=0;k<3;k++){for(const [op,dir] of [[Math.max,1],[Math.max,N],[Math.min,1],[Math.min,N]]){
   for(let i=0;i<N*N;i++){const x=dir===1?i%N:Math.floor(i/N);let m=out[i*4+k];for(let d=-3;d<=3;d++){const xx=x+d;if(d&&xx>=0&&xx<N)m=op(m,out[(i+d*dir)*4+k]);}tmp[i]=m;}
   for(let i=0;i<N*N;i++)out[i*4+k]=tmp[i];}
  await ceder();}
 const tex=new THREE.DataTexture(out,N,N);tex.wrapS=repite.wrapS;tex.wrapT=repite.wrapT;tex.generateMipmaps=true;tex.minFilter=THREE.LinearMipmapLinearFilter;tex.magFilter=THREE.LinearFilter;tex.needsUpdate=true;
 return {tex,lums:new THREE.Vector2(lum[1]?lum[0]/lum[1]:.2,lum[3]?lum[2]/lum[3]:.2)};
}

function vestir(base,cuerpo){
 const m=base.clone(),u={mascara:{value:cuerpo.mascara},lums:{value:cuerpo.lums},colCamisa:{value:new THREE.Color()},colPantalon:{value:new THREE.Color()},tonoPiel:{value:new THREE.Color(1,1,1)}};
 m.onBeforeCompile=sh=>{Object.assign(sh.uniforms,u);sh.fragmentShader=sh.fragmentShader.replace('void main() {','uniform sampler2D mascara;\nuniform vec2 lums;\nuniform vec3 colCamisa;\nuniform vec3 colPantalon;\nuniform vec3 tonoPiel;\n'+TENIR+'\nvoid main() {').replace('#include <map_fragment>',TINTE).replace('#include <emissivemap_fragment>',TINTE_EMISIVO);};
 m.customProgramCacheKey=()=>'transeunte';
 return {m,u};
}

// ── El paso ──────────────────────────────────────────────────────────────────────────
/* Un ciclo de marcha (fase 0 = el talón izquierdo toca el piso), en grados. Cadera: el muslo
   hacia adelante; rodilla: cuánto se dobla; pie: la punta hacia arriba respecto al piso. */
function ciclo(llaves){const n=llaves.length;return f=>{f-=Math.floor(f);let i=n-1;for(let k=0;k<n;k++)if(llaves[k][0]<=f)i=k;
 const a=llaves[i],b=llaves[(i+1)%n],t1=b[0]+(i+1===n?1:0),t=(f-a[0])/(t1-a[0]),p0=llaves[(i-1+n)%n][1],p1=a[1],p2=b[1],p3=llaves[(i+2)%n][1];
 return .5*(2*p1+(-p0+p2)*t+(2*p0-5*p1+4*p2-p3)*t*t+(-p0+3*p1-3*p2+p3)*t*t*t);};}
const CADERA=ciclo([[0,23],[.12,19],[.3,6],[.5,-9],[.62,-12],[.75,2],[.88,21]]);
const RODILLA=ciclo([[0,4],[.12,15],[.28,7],[.45,5],[.6,33],[.72,58],[.86,26],[.95,4]]);
const PIE=ciclo([[0,14],[.08,5],[.14,0],[.42,0],[.52,-9],[.62,-30],[.7,-16],[.8,1],[.92,9]]);

const _p=v3(),_s=v3(),_a=v3(),_b=v3(),_u=v3(),_d=v3(),_X=v3(),_Y=v3(0,1,0),_Z=v3(),EJE_X=v3(1,0,0);
const _q=new THREE.Quaternion(),_q2=new THREE.Quaternion(),_wq=new THREE.Quaternion(),_pq=new THREE.Quaternion(),_hq=new THREE.Quaternion();
/** Gira un hueso en el MUNDO y lo escribe en su rotación local (las matrices ya están al día). */
function giraEnMundo(h,q){h.matrixWorld.decompose(_p,_wq,_s);h.parent.matrixWorld.decompose(_p,_pq,_s);h.quaternion.copy(_pq.invert()).multiply(q).multiply(_wq);h.updateMatrixWorld(true);}
function ponerEnMundo(h,q){h.parent.matrixWorld.decompose(_p,_pq,_s);h.quaternion.copy(_pq.invert()).multiply(q);h.updateMatrixWorld(true);}
/** Apunta el hueso para que el tramo hasta `hijo` vaya en `dir` (mundo, unitario). */
function apuntar(h,hijo,dir){_a.setFromMatrixPosition(h.matrixWorld);_b.setFromMatrixPosition(hijo.matrixWorld);_u.subVectors(_b,_a).normalize();giraEnMundo(h,_q.setFromUnitVectors(_u,dir));}
/** Una dirección en ejes de la persona (x a su izquierda, y arriba, z al frente) al mundo. */
const enMundo=(x,y,z)=>_d.set(x,y,z).normalize().applyQuaternion(_hq);

/* Pose. `m` es cuánto camina (0 quieto, 1 marcha plena), `f` la fase del ciclo. */
function posar(g){
 const H=g.h,m=g.marcha,f=g.fase;
 for(const [b,p,q,s] of g.rest){b.position.copy(p);b.quaternion.copy(q);b.scale.copy(s);}
 const bamboleo=m*.016*Math.sin(TAU*(f-.05))+(1-m)*.012*Math.sin(g.t*.7);
 g.root.position.set(g.base.x+bamboleo,g.base.y,g.base.z);
 g.holder.updateMatrixWorld(true);g.holder.matrixWorld.decompose(_p,_hq,_s);
 _X.set(1,0,0).applyQuaternion(_hq);_Z.set(0,0,1).applyQuaternion(_hq);
 // La pelvis gira con el paso y el pecho al revés; se camina un poquito echado para adelante.
 const giro=-5*GRADO*Math.cos(TAU*f)*m;
 giraEnMundo(H.Hips,_q.setFromAxisAngle(_Y,giro));
 giraEnMundo(H.Hips,_q.setFromAxisAngle(_X,(3.5*m+.5)*GRADO));
 if(H.Spine)giraEnMundo(H.Spine,_q.setFromAxisAngle(_Y,-giro*1.4));
 // Las clavículas bajan: la pose de reposo tiene los brazos abiertos.
 for(const [lado,cl] of [[1,H.LeftShoulder],[-1,H.RightShoulder]])if(cl)giraEnMundo(cl,_q.setFromAxisAngle(_Z,-lado*7*GRADO));
 // Piernas.
 for(const [lado,S,fase] of [[1,'Left',f],[-1,'Right',f+.5]]){
  const cad=(m*CADERA(fase)+(1-m)*(lado>0?1.5:-1))*GRADO,rod=(m*RODILLA(fase)+(1-m)*4)*GRADO,pie=m*PIE(fase)*GRADO,abre=lado*(.03+.02*(1-m));
  apuntar(H[S+'UpLeg'],H[S+'Leg'],enMundo(abre,-Math.cos(cad),Math.sin(cad)));
  apuntar(H[S+'Leg'],H[S+'Foot'],enMundo(abre*.6,-Math.cos(cad-rod),Math.sin(cad-rod)));
  _q2.setFromAxisAngle(_Y,-lado*9*GRADO);_q.setFromAxisAngle(EJE_X,-pie).multiply(_q2).multiply(g.pieReposo[lado>0?0:1]);
  ponerEnMundo(H[S+'Foot'],_q.premultiply(_hq));
  if(pie<0&&H[S+'ToeBase'])giraEnMundo(H[S+'ToeBase'],_q.setFromAxisAngle(_X,.8*pie));
 }
 // Brazos: van al revés de la pierna de su lado; el codo, algo doblado.
 for(const [lado,S,fase] of [[1,'Left',f],[-1,'Right',f+.5]]){
  if(lado<0&&(g.saluda>0||g.alcanza>0))continue;
  const s=(m*-.72*(CADERA(fase)-5)+(1-m)*-2+(g.brazos||0))*GRADO,fl=(16+(1-m)*-4+10*Math.max(0,s/(12*GRADO)))*GRADO,ab=(9+(1-m)*-2)*GRADO;
  apuntar(H[S+'Arm'],H[S+'ForeArm'],enMundo(lado*Math.sin(ab)*Math.cos(s),-Math.cos(ab)*Math.cos(s),Math.sin(s)));
  apuntar(H[S+'ForeArm'],H[S+'Hand'],enMundo(lado*Math.sin(ab)*Math.cos(s+fl),-Math.cos(ab)*Math.cos(s+fl),Math.sin(s+fl)));
 }
 // Saludo con la mano derecha: brazo afuera y arriba, antebrazo parado que va y viene.
 if(g.saluda>0){const k=g.saluda,osc=Math.sin(g.t*TAU*1.8)*.38*k;
  apuntar(H.RightArm,H.RightForeArm,enMundo(-.75*k-(1-k)*.15,.25*k-(1-k)*.98,.3*k+.05));
  apuntar(H.RightForeArm,H.RightHand,enMundo(-Math.sin(osc)-.15,Math.cos(osc)*k-(1-k)*.9,.18));}
 // Alcanzar con la derecha: arriba a un anaquel (alto 1) o al frente, a dar o recibir algo (alto 0).
 if(g.alcanza>0&&!(g.saluda>0)){const k=suave(g.alcanza),a=g.alcanzaAlto||0;
  apuntar(H.RightArm,H.RightForeArm,enMundo(-.16*k-.14*(1-k),-.98*(1-k)+(-.3+.85*a)*k,.9*k));
  apuntar(H.RightForeArm,H.RightHand,enMundo(-.06*k-.12*(1-k),-.9*(1-k)+(-.05+.75*a)*k,.2+.8*k));}
 // La cabeza mira adonde va, o a quien saluda.
 if(H.Head&&H.headfront){
  const obj=g.mirar;
  for(const [hueso,parte] of [[H.neck,.45],[H.Head,1]]){if(!hueso)continue;
   _a.setFromMatrixPosition(H.Head.matrixWorld);_b.setFromMatrixPosition(H.headfront.matrixWorld);_u.subVectors(_b,_a).normalize();
   _d.subVectors(obj,_a).normalize();const ang=_u.angleTo(_d);if(ang<1e-3)continue;
   _q.setFromUnitVectors(_u,_d);giraEnMundo(hueso,_q2.identity().slerp(_q,Math.min(1,parte*Math.min(ang,1.1)/ang)));}
 }
 // Al piso: lo más bajo de los dos pies toca el suelo.
 let min=Infinity;for(const [hueso,local] of g.apoyos){_a.copy(local).applyMatrix4(hueso.matrixWorld);if(_a.y<min)min=_a.y;}
 g.root.position.y-=(min-g.holder.position.y)/g.holder.scale.y;g.root.updateMatrixWorld(true);
}

// ── Los caminos ──────────────────────────────────────────────────────────────────────
const P=(...ps)=>ps.map(([x,z])=>v3(x,0,z));
/* Por el patio, de la calle de al lado (derecha) a la acera de los vecinos (izquierda), por
   detrás de la silla de Luis: libra la nevera del hielo, el anuncio, las cajas y las matas. */
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
export function crearTranseuntes({scene,camera,renderer,cuerpos,pocos=false}){
 const listos=[],rigs=[],gente=[],frustum=new THREE.Frustum(),_m=new THREE.Matrix4(),_esfera=new THREE.Sphere(v3(),1.25);
 let colmadero=null,ms=0,reloj=0,proxCalle=azar(6,14),proxPatio=azar(20,35),ultimoSaludo=-1e9,saludo=null,apagado=false,forzar=false;

 /* Prepara cada cuerpo en segundo plano: su máscara, su pose de pie y cuánto avanza por paso. */
 (async()=>{for(const c of cuerpos){if(apagado)return;const reglas=REGLAS[c.nombre];if(!reglas||!c.gltf)continue;
  let malla=null;c.gltf.scene.traverse(o=>{if(o.isSkinnedMesh&&!malla)malla=o;});const img=malla?.material?.map?.image;if(!img)continue;
  try{const {tex,lums}=await mascara(img,reglas,malla,malla.material.map),cuerpo={...c,reglas,voz:reglas.voz,material:malla.material,mascara:tex,lums,zCiclo:null};
   /* Un vecino ya armado por cuerpo, y el shader compilado, desde ahora: si no, el primero que
      pasa en plena partida trae un tirón (clonar, calibrar el paso, compilar). */
   await ceder();const g=armar(cuerpo);
   if(c.nombre==='rafa-upright'){if(g)ponerColmadero(g);}
   else{if(g){rigs.push(g);if(rigs.length===1)await renderer?.compileAsync?.(g.holder,camera,scene).catch(()=>{});}listos.push(cuerpo);}}catch(e){console.warn('Transeúnte sin ropa',c.nombre,e);}
  await ceder();}})();

 function armar(cuerpo){
  const root=cloneSkeleton(cuerpo.gltf.scene),holder=new THREE.Group();holder.add(root);
  root.position.set(0,0,0);root.rotation.set(0,0,0);root.scale.set(1,1,1);
  const h={},rest=[];let malla=null;
  root.traverse(o=>{if(o.isBone){h[o.name]=o;const r=cuerpo.gltf.reposo?.get(o.name);if(r){o.position.copy(r.position);o.quaternion.copy(r.quaternion);o.scale.copy(r.scale);rest.push([o,r.position,r.quaternion,r.scale]);}}if(o.isSkinnedMesh)malla=o;});
  if(!malla||!h.Hips||!h.LeftFoot||!h.RightFoot)return null;
  const {m,u}=vestir(cuerpo.material,cuerpo);malla.material=m;malla.castShadow=false;malla.receiveShadow=true;malla.frustumCulled=true;malla.morphTargetInfluences?.fill(0);
  holder.updateMatrixWorld(true);
  // De pie en reposo: la cadera sobre el origen y la suela en y=0.
  malla.computeBoundingBox();const caja=malla.boundingBox.clone().applyMatrix4(malla.matrixWorld),hp=v3().setFromMatrixPosition(h.Hips.matrixWorld);
  const base=v3(-hp.x,-caja.min.y,-hp.z);root.position.copy(base);holder.updateMatrixWorld(true);
  malla.computeBoundingSphere();malla.boundingSphere.radius*=1.25;
  // Dónde apoya cada pie: el talón debajo del tobillo y la punta delante del dedo.
  const apoyos=[];for(const S of ['Left','Right']){const pie=h[S+'Foot'],dedo=h[S+'ToeBase']||pie,t=v3().setFromMatrixPosition(pie.matrixWorld),d=v3().setFromMatrixPosition(dedo.matrixWorld);
   apoyos.push([pie,pie.worldToLocal(v3(t.x,0,t.z-.05))],[dedo,dedo.worldToLocal(v3(d.x,0,d.z+.06))]);}
  const pieReposo=[h.LeftFoot,h.RightFoot].map(b=>b.getWorldQuaternion(new THREE.Quaternion()));
  // La gorra, colgada de la cabeza: se ubica con la cabeza en reposo.
  let gorra=null;if(cuerpo.voz==='m'&&h.Head){gorra=hacerGorra(malla,h.Head);}
  const g={cuerpo,root,holder,h,rest,malla,u,base,apoyos,pieReposo,gorra,marcha:0,fase:0,t:0,saluda:0,alcanza:0,alcanzaAlto:0,brazos:0,mirar:v3(),yaw:0,libre:true};
  if(cuerpo.zCiclo==null)cuerpo.zCiclo=calibrar(g);
  return g;
 }
 function hacerGorra(malla,cabeza){
  // La parte de arriba de la cabeza, de los vértices que mueve la cabeza.
  const pos=malla.geometry.attributes.position,si=malla.geometry.attributes.skinIndex,sw=malla.geometry.attributes.skinWeight,k=malla.skeleton.bones.indexOf(cabeza);if(k<0)return null;
  const caja=new THREE.Box3(),p=v3();for(let i=0;i<pos.count;i++){let w=0;for(let j=0;j<4;j++)if(si.getComponent(i,j)===k)w+=sw.getComponent(i,j);if(w>.6){malla.getVertexPosition(i,p);caja.expandByPoint(p.applyMatrix4(malla.matrixWorld));}}
  if(caja.isEmpty())return null;
  const c=caja.getCenter(v3()),t=caja.getSize(v3()),r=Math.max(t.x,t.z*.8)/2*1.02;
  const grupo=new THREE.Group(),mat=new THREE.MeshStandardMaterial({color:'#1f2a44',roughness:.85});
  const copa=new THREE.Mesh(new THREE.SphereGeometry(1,18,8,0,TAU,0,Math.PI*.5),mat);copa.scale.set(r*1.06,r*1.05,r*1.12);grupo.add(copa);
  const visera=new THREE.Mesh(new THREE.CylinderGeometry(1,1,.012,18,1,false,-Math.PI*.5,Math.PI),mat);visera.scale.set(r*.98,1,r*1.05);visera.position.set(0,.006,r*.86);visera.rotation.x=.14;grupo.add(visera);
  grupo.position.set(c.x,caja.max.y-r*.85,c.z-t.z*.06);
  // De mundo (en reposo) al espacio de la cabeza.
  cabeza.updateWorldMatrix(true,false);const inv=cabeza.matrixWorld.clone().invert();grupo.updateMatrix();grupo.matrix.premultiply(inv);grupo.matrix.decompose(grupo.position,grupo.quaternion,grupo.scale);
  cabeza.add(grupo);return grupo;
 }
 /* Cuánto avanza el cuerpo en un ciclo sin que el pie que apoya patine: se recorre el ciclo
    y se suma lo que retrocede el punto más bajo mientras sigue siendo el mismo. */
 function calibrar(g){
  g.mirar.set(0,1.5,5);g.marcha=1;let total=0,pieAntes=-1;const zAntes=[0,0,0,0],z=[0,0,0,0];
  for(let i=0;i<=96;i++){g.fase=i/96;posar(g);let min=Infinity,cual=0;
   g.apoyos.forEach(([h,l],j)=>{_a.copy(l).applyMatrix4(h.matrixWorld);z[j]=_a.z;if(_a.y<min){min=_a.y;cual=j;}});
   const pie=cual>>1;if(pie===pieAntes)total+=Math.max(0,zAntes[cual]-z[cual]);pieAntes=pie;zAntes.splice(0,4,...z);}
  g.marcha=0;g.fase=0;return Math.min(1.7,Math.max(.9,total));
 }

 function vestirDeNuevo(g){
  const falda=g.cuerpo.nombre==='carmen',no=EVITAR[g.cuerpo.nombre]||[],de=l=>uno(l.filter(c=>!no.includes(c)));
  g.u.colCamisa.value.set(de(CAMISAS));g.u.colPantalon.value.set(de(falda?FALDAS:PANTALONES));g.u.tonoPiel.value.setRGB(...uno(PIELES));
  if(g.gorra){g.gorra.visible=Math.random()<.65;g.gorra.children.forEach(c=>c.material.color.set(uno(GORRAS)));}
  const alto=azar(.95,1.05);g.holder.scale.set(alto*azar(1,1.1),alto,alto*azar(1,1.06));
 }
 function sacar(nombre){
  const opciones=listos.filter(c=>!nombre||c.nombre===nombre);if(!opciones.length)return null;
  const cuerpo=uno(opciones);let g=rigs.find(r=>r.libre&&r.cuerpo===cuerpo);
  if(!g){if(rigs.length>=5)return null;g=armar(cuerpo);if(!g)return null;rigs.push(g);}
  g.libre=false;vestirDeNuevo(g);g.marcha=0;g.fase=Math.random();g.saluda=0;g.alcanza=0;g.t=0;scene.add(g.holder);return g;
 }
 function soltar(g){g.libre=true;scene.remove(g.holder);const i=gente.indexOf(g);if(i>=0)gente.splice(i,1);}

 /* Un guion: tramos de camino y paradas, uno tras otro. */
 function ruta(puntos,v){const c=new THREE.CatmullRomCurve3(puntos,false,'centripetal',.5);return {tipo:'ruta',curva:c,largo:c.getLength(),d:0,v};}
 function poner(g,guion,zona){
  g.guion=guion;g.i=0;g.zona=zona;g.malla.castShadow=zona==='patio';g.velocidad=g.cuerpo.nombre==='carmen'?azar(.9,1.05):azar(1.02,1.28);
  for(const t of guion)if(t.tipo==='ruta')t.v=g.velocidad;
  const c=guion[0].curva,p=c.getPointAt(0),d=c.getTangentAt(0);g.yaw=Math.atan2(d.x,d.z);g.holder.position.set(p.x,suelo(p.x,p.z),p.z);g.holder.rotation.y=g.yaw;
  gente.push(g);
 }
 const giroHacia=(g,yaw,dt,vel=3.2)=>{let d=yaw-g.yaw;d=Math.atan2(Math.sin(d),Math.cos(d));g.yaw+=Math.max(-vel*dt,Math.min(vel*dt,d));g.holder.rotation.y=g.yaw;return Math.abs(d);};
 function andar(g,dt,estado){
  let tramo=g.guion[g.i];if(!tramo){if(!g.fijo){soltar(g);return;}g.guion=[vigilar()];g.i=0;tramo=g.guion[0];tramo.t0=g.t;}
  g.t+=dt;
  if(tramo.tipo==='ruta'){
   const sigue=g.guion[g.i+1],para=sigue&&sigue.tipo!=='ruta',falta=tramo.largo-tramo.d;
   const meta=para?Math.min(1,falta/.55):1;g.marcha+=(Math.min(meta,1)-g.marcha)*Math.min(1,dt*(meta<g.marcha?6:2.2));
   const avance=tramo.v*Math.max(g.marcha,para?.12:0)*dt;tramo.d=Math.min(tramo.largo,tramo.d+avance);g.fase+=avance/g.cuerpo.zCiclo;
   const u=tramo.d/tramo.largo,p=tramo.curva.getPointAt(u),d=tramo.curva.getTangentAt(u);
   g.holder.position.set(p.x,suelo(p.x,p.z),p.z);giroHacia(g,Math.atan2(d.x,d.z),dt);
   g.mirar.lerp(_b.set(p.x+d.x*6,1.45+suelo(p.x,p.z)-.25,p.z+d.z*6),1-Math.exp(-dt*5));
   if(tramo.d>=tramo.largo-1e-3){g.i++;if(g.guion[g.i])g.guion[g.i].t0=g.t;}
  }else if(tramo.tipo==='quieto'){
   g.marcha=Math.max(0,g.marcha-dt*4);const e=g.t-(tramo.t0??g.t);
   if(tramo.yaw!=null)giroHacia(g,tramo.yaw,dt,2.2);
   if(tramo.miraA?.h?.Head)tramo.mira=tramo.miraA.h.Head.getWorldPosition(tramo.mira||v3());
   else if(tramo.vigila)tramo.mira=vigilando(tramo,estado);
   if(tramo.mira)g.mirar.lerp(tramo.mira,1-Math.exp(-dt*3));
   if(tramo.atender&&!tramo.pedido){tramo.pedido=true;if(colmadero)servir(colmadero,g);}
   // Alcanzar (un anaquel, o dar y recibir): sube y baja suave dentro del tramo.
   if(tramo.brazo){const k=Math.min(1,e/.6,(tramo.dur-e)/.6);g.alcanza=Math.max(0,k);g.alcanzaAlto=tramo.brazo.alto;
    const o=tramo.brazo.entrega;if(o&&!o.libre){o.alcanza=g.alcanza;o.alcanzaAlto=.1;}}
   if(tramo.saludo)saludar(g,tramo,e,estado);
   if(e>=tramo.dur){g.i++;if(g.guion[g.i])g.guion[g.i].t0=g.t;g.saluda=0;if(tramo.brazo){g.alcanza=0;if(tramo.brazo.entrega)tramo.brazo.entrega.alcanza=0;}}
  }
 }

 /* El saludo. Se decide al llegar: solo con la mesa tranquila (en el lobby o jugando, que no
    esté cerrando mano ni hablando nadie). Si no, sigue de largo. */
 function saludar(g,tramo,e,estado){
  if(!tramo.decidido){tramo.decidido=true;const v=estado?.view;
   const ok=v&&(v.phase==='lobby'||v.phase==='playing')&&(forzar||!estado.habla?.size&&reloj>150&&reloj-ultimoSaludo>420);forzar=false;
   if(!ok){tramo.dur=0;return;}
   const bots=[0,1,2,3].filter(s=>v.bots?.[s]),seat=bots.length&&Math.random()<.8?uno(bots):null;
   tramo.seat=seat;tramo.cabeza=estado.cabezas?.[seat??2]?.clone()||v3(0,1.2,0);ultimoSaludo=reloj;
   const hacia=seat==null?v3(0,1.2,0):tramo.cabeza;tramo.mira=hacia.clone();tramo.yaw=Math.atan2(hacia.x-g.holder.position.x,hacia.z-g.holder.position.z);
  }
  if(tramo.dur===0)return;
  g.saluda=e<.35?0:Math.min(1,(e-.35)/.35)*(e>2.6?Math.max(0,1-(e-2.6)/.4):1);
  if(!tramo.dicho&&e>.45){tramo.dicho=true;const cab=g.h.Head.getWorldPosition(v3());
   saludo={seat:tramo.seat,p:cab,t0:reloj,hasta:reloj+5};
   dispatchEvent(new CustomEvent('mesa:saludo',{detail:{seat:tramo.seat,voz:g.cuerpo.voz,pos:cab.toArray()}}));}
 }

 /* El colmadero: detrás del mostrador. Vigila la mesa y la calle; cuando llega alguien, lo
    mira, se vira al anaquel, estira el brazo y se lo da (y el otro lo recibe). */
 function ponerColmadero(g){
  g.libre=false;g.fijo=true;g.zona='colmado';colmadero=g;g.velocidad=.8;
  g.u.colCamisa.value.set('#3e6a47');g.u.colPantalon.value.set('#23262d');g.u.tonoPiel.value.setRGB(.74,.68,.64);
  if(g.gorra){g.gorra.visible=true;g.gorra.children.forEach(c=>c.material.color.set('#a1302a'));}
  g.holder.scale.set(1.04,1.03,1.04);g.malla.castShadow=true;
  g.holder.position.copy(COLMADERO);g.yaw=0;g.holder.rotation.y=g.yaw;g.mirar.set(0,.8,0);
  g.guion=[vigilar()];g.i=0;g.guion[0].t0=0;scene.add(g.holder);
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
  // Lo mira, se vira al anaquel de atrás, estira el brazo, se vira y se lo da por encima del mostrador.
  c.guion=[quieto(1.4,{yaw:0,miraA:cliente}),quieto(.9,{yaw:Math.PI,mira:anaquel}),quieto(2.2,{yaw:Math.PI,mira:anaquel,brazo:{alto:1}}),
   quieto(.9,{yaw:0,miraA:cliente}),quieto(2.4,{yaw:0,miraA:cliente,brazo:{alto:.15,entrega:cliente}}),quieto(4,{yaw:0,miraA:cliente})];
  c.i=0;c.guion[0].t0=c.t;
 }
 function cliente(g){
  const derecha=Math.random()<.6,saluda=Math.random()<.5,guion=[];
  // Entra por la derecha (la calle de al lado) o por la izquierda (la acera de los vecinos).
  guion.push(ruta(derecha?PATIO_DER:vuelta(PATIO_IZQ),1));
  if(saluda)guion.push({tipo:'quieto',dur:3.2,saludo:true});
  guion.push(ruta(derecha?AL_MOSTRADOR:vuelta(DEL_MOSTRADOR_IZQ),1));
  // En el mostrador, de cara al colmadero, que lo atiende.
  guion.push({tipo:'quieto',dur:azar(14,24),yaw:Math.PI,...(colmadero?{miraA:colmadero,atender:true}:{mira:v3(-.6,1.35,-4.6)})});
  if(Math.random()<.6)guion.push(ruta(unir(DEL_MOSTRADOR_IZQ,PATIO_IZQ),1));
  else guion.push(ruta(unir(vuelta(AL_MOSTRADOR),vuelta(PATIO_DER)),1));
  return guion;
 }
 function deCamino(){const ps=unir(PATIO_DER,PATIO_MEDIO,PATIO_IZQ);return [ruta(Math.random()<.5?ps:vuelta(ps),1)];}

 function update(dt,estado){
  if(apagado||!listos.length)return;dt*=window.mesaPrisa||1;reloj+=dt;   // mesaPrisa: solo para pruebas en máquinas lentas
  if(saludo){saludo.e=reloj-saludo.t0;if(reloj>saludo.hasta)saludo=null;}
  const reducido=document.documentElement.classList.contains('reduced');
  if(!reducido&&!pocos&&reloj>proxCalle){proxCalle=reloj+azar(14,32);
   if(gente.filter(g=>g.zona==='calle').length<2){const g=sacar();if(g)poner(g,[ruta(uno([CALLE.enfrente,CALLE.enfrente,CALLE.lateral])(),1)],'calle');}}
  if(!reducido&&reloj>proxPatio&&!gente.some(g=>g.zona==='patio')){proxPatio=reloj+azar(50,110);
   const g=sacar();if(g)poner(g,Math.random()<.65?cliente(g):deCamino(),'patio');}
  camera.updateMatrixWorld();frustum.setFromProjectionMatrix(_m.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse));
  const t0=performance.now();
  for(const g of colmadero?[colmadero,...gente]:gente.slice()){andar(g,dt,estado);if(g.libre)continue;
   _esfera.center.copy(g.holder.position).y+=.9;
   if(frustum.intersectsSphere(_esfera))posar(g);}
  ms+=(performance.now()-t0-ms)*.05;
 }
 // Para capturas y pruebas: saca a alguien ya, y dice dónde anda cada quien.
 window.mesaTranseunte=(tipo='cliente',nombre,donde)=>{if(tipo==='posa'){const g=sacar(nombre);if(!g)return false;const [x,z,yaw=0]=donde;poner(g,[ruta(P([x-Math.sin(yaw)*.3,z-Math.cos(yaw)*.3],[x,z]),1),{tipo:'quieto',dur:1e4}],'patio');return true;}
  const g=sacar(nombre);if(!g)return false;poner(g,tipo==='cliente'?cliente(g):tipo==='saluda'?(()=>{const s=cliente(g);if(!s.some(t=>t.saludo))s.splice(1,0,{tipo:'quieto',dur:3.2,saludo:true});forzar=true;return s;})():tipo==='calle'?[ruta(CALLE.enfrente(),1)]:deCamino(),tipo==='calle'?'calle':'patio');return true;};
 window.mesaGente=()=>gente.map(g=>({cuerpo:g.cuerpo.nombre,pos:g.holder.position.toArray().map(x=>+x.toFixed(2)),marcha:+g.marcha.toFixed(2),tramo:g.i}));
 return {update,get saludo(){return saludo;},get ms(){return ms;},get listos(){return listos.length;},dispose(){apagado=true;for(const g of rigs)scene.remove(g.holder);if(colmadero)scene.remove(colmadero.holder);}};
}
