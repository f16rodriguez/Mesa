import * as THREE from 'three';
import {idleMotion,DIM} from './scene-layout.ts';
const X=new THREE.Vector3(1,0,0),Y=new THREE.Vector3(0,1,0),delta=new THREE.Quaternion();
export function capturePose(root){const bones=[];root.traverse(bone=>{if(bone.isBone)bones.push({bone,position:bone.position.clone(),quaternion:bone.quaternion.clone(),scale:bone.scale.clone()});});return bones;}

const _A=new THREE.Vector3(),_B=new THREE.Vector3(),_C=new THREE.Vector3(),_T=new THREE.Vector3();
const _u=new THREE.Vector3(),_v=new THREE.Vector3(),_n=new THREE.Vector3(),_w=new THREE.Vector3();
const _q=new THREE.Quaternion(),_wq=new THREE.Quaternion(),_pq=new THREE.Quaternion(),_hq=new THREE.Quaternion();
const pinza=x=>Math.min(1,Math.max(-1,x)),entre=(x,a,b)=>Math.min(b,Math.max(a,x));
const suave=p=>p*p*(3-2*p);

/** Gira `hueso` en el MUNDO por `q`, y lo escribe en su rotación local. */
function giraEnMundo(hueso,q){
 hueso.getWorldQuaternion(_wq);
 hueso.parent.getWorldQuaternion(_pq);
 hueso.quaternion.copy(_pq.invert()).multiply(q).multiply(_wq);
 hueso.updateMatrixWorld(true);
}

/** Ejes del asiento en el mundo: +X a la izquierda de quien se sienta, +Z hacia la mesa. */
const _ejeX=new THREE.Vector3(),_ejeZ=new THREE.Vector3();
function ejes(actor){actor.holder.getWorldQuaternion(_hq);_ejeX.set(1,0,0).applyQuaternion(_hq);_ejeZ.set(0,0,1).applyQuaternion(_hq);}
function enAsiento(actor,x,y,z,out){return out.set(x,y,z).applyMatrix4(actor.holder.matrixWorld);}
function dirAsiento(x,y,z,out){return out.set(x,y,z).applyQuaternion(_hq).normalize();}

/**
 * IK de dos huesos con POLO: lleva la muñeca a `objetivo` y el codo hacia `polo`.
 *
 * Tres pasos, todos en el mundo:
 *  1. Se dobla el codo sobre SU bisagra (el plano que ya trae la pose sentada)
 *     hasta la distancia hombro-muñeca que hace falta. La bisagra nunca se
 *     inventa, así que el codo no puede doblar al revés — eso era la
 *     "hiperextensión": sin polo, el plano de flexión salía de la pose previa y
 *     al estirar se volteaba.
 *  2. Se apunta el brazo entero para que la muñeca caiga en el objetivo.
 *  3. Se gira todo el brazo alrededor del eje hombro→muñeca hasta que el codo
 *     mira al polo (abajo, afuera y atrás). La muñeca no se mueve: está en el eje.
 *
 * Nunca se estira del todo (RECTO): un brazo de verdad, aun alcanzando, dobla
 * un poco el codo. Un brazo recto de palo es lo que se veía rígido.
 */
const RECTO=.965;
export function alcanzar(brazo,objetivo,polo){
 const sup=brazo.brazo,ant=brazo.antebrazo,mano=brazo.mano;
 if(!sup||!ant||!mano||!sup.parent||!ant.parent)return;
 sup.getWorldPosition(_A);ant.getWorldPosition(_B);mano.getWorldPosition(_C);
 const L1=_A.distanceTo(_B),L2=_B.distanceTo(_C);
 if(L1<1e-5||L2<1e-5)return;
 const d=entre(_A.distanceTo(objetivo),Math.abs(L1-L2)+2e-3,(L1+L2)*RECTO);

 _u.subVectors(_B,_A);_v.subVectors(_C,_B);_n.crossVectors(_u,_v);
 if(_n.lengthSq()<1e-10)_n.copy(_ejeX);else _n.normalize();
 const actual=Math.acos(pinza((L1*L1+L2*L2-_A.distanceToSquared(_C))/(2*L1*L2)));
 const querido=Math.acos(pinza((L1*L1+L2*L2-d*d)/(2*L1*L2)));
 const giro=querido-actual;
 giraEnMundo(ant,_q.setFromAxisAngle(_n,giro));
 mano.getWorldPosition(_C);
 if(Math.abs(_A.distanceTo(_C)-d)>1e-3){giraEnMundo(ant,_q.setFromAxisAngle(_n,-2*giro));mano.getWorldPosition(_C);}

 _u.subVectors(_C,_A).normalize();_v.subVectors(objetivo,_A);
 if(_v.lengthSq()<1e-10)return;_v.normalize();
 giraEnMundo(sup,_q.setFromUnitVectors(_u,_v));

 if(!polo)return;
 ant.getWorldPosition(_B);
 _w.subVectors(_B,_A);_w.addScaledVector(_v,-_w.dot(_v));
 _T.subVectors(polo,_A);_T.addScaledVector(_v,-_T.dot(_v));
 if(_w.lengthSq()<1e-10||_T.lengthSq()<1e-10)return;
 _w.normalize();_T.normalize();
 const ang=Math.atan2(_n.crossVectors(_w,_T).dot(_v),pinza(_w.dot(_T)));
 giraEnMundo(sup,_q.setFromAxisAngle(_v,ang));
}

/**
 * La mano, palma abajo. Los huesos de la mano de estos modelos llevan los
 * dedos en +Y local y la palma en +Z local (medido en el bind: en la pose T
 * las palmas miran al piso y +Z apunta abajo). Se arma la orientación del
 * mundo que se quiere y se escribe entera: si la mano heredara el giro del
 * antebrazo, quedaba de canto, como quien va a dar un golpe de karate.
 *
 * La mitad del giro que haga falta alrededor del antebrazo se la lleva el
 * antebrazo mismo: la pronación la hace el antebrazo, no la muñeca, y así la
 * piel de la muñeca no se retuerce como papel de caramelo.
 */
const _F=new THREE.Vector3(),_N=new THREE.Vector3(),_Xl=new THREE.Vector3(),_m=new THREE.Matrix4(),_Q=new THREE.Quaternion(),_d=new THREE.Quaternion();
function nivelarMano(brazo,dedos,palma){
 const ant=brazo.antebrazo,mano=brazo.mano;if(!ant||!mano||!mano.parent)return;
 _F.copy(dedos).normalize();_Xl.crossVectors(_F,palma);if(_Xl.lengthSq()<1e-8)return;_Xl.normalize();
 _N.crossVectors(_Xl,_F);
 _Q.setFromRotationMatrix(_m.makeBasis(_Xl,_F,_N));
 ant.getWorldPosition(_B);mano.getWorldPosition(_C);_u.subVectors(_C,_B).normalize();
 mano.getWorldQuaternion(_wq);_d.copy(_Q).multiply(_wq.invert());
 const s=_d.x*_u.x+_d.y*_u.y+_d.z*_u.z,torsion=2*Math.atan2(s,_d.w);
 if(Number.isFinite(torsion))giraEnMundo(ant,_q.setFromAxisAngle(_u,entre(torsion*.5,-1.2,1.2)));
 mano.parent.getWorldQuaternion(_pq);
 mano.quaternion.copy(_pq.invert()).multiply(_Q);
 mano.updateMatrixWorld(true);
}

/**
 * Dónde descansan las manos: a los LADOS de las fichas, no encima. Las fichas
 * propias se paran a rackRadius del centro, o sea a (seatDistance-rackRadius)
 * por delante del asiento; siete fichas ocupan ~±10 cm. Las muñecas quedan
 * 7 cm dentro del canto, a ±22 cm, con los antebrazos apoyados, y los dedos
 * se meten apenas hacia dentro sin llegar a la fila. Antes la muñeca caía
 * 2,5 cm pasado el borde y los dedos, 10 cm más allá, atravesaban las fichas.
 */
const _obj=new THREE.Vector3();
function reposoMano(actor,brazo,time){
 const lado=brazo.lado==='Left'?1:-1,v=actor.index*1.7;
 const borde=DIM.seatDistance-DIM.tableWidth/2;
 return enAsiento(actor,
  lado*(.225+Math.sin(v)*.01)+Math.sin(time*.23+v)*.004,
  DIM.surfaceY+.026,
  // El clip sentado trae el tronco algo girado: el hombro izquierdo queda más
  // atrás, así que esa mano se apoya un poco más cerca para que el codo doble igual.
  borde+(lado>0?.05:.075)+Math.cos(v*1.3)*.012+Math.sin(time*.17+v*2)*.004,_obj);
}

/**
 * La jugada: la mano derecha agarra la ficha, la LLEVA hasta el tablero, la
 * suelta y vuelve. La mano sigue a la FICHA MISMA (su posición en cada cuadro),
 * no a una curva con otro reloj: en una tele lenta la mano llegaba antes.
 * La muñeca va un poco atrás y arriba de la ficha: la ficha queda bajo los
 * dedos, que es donde se agarra, no bajo la muñeca.
 */
const _rep=new THREE.Vector3(),_fic=new THREE.Vector3(),_tmp=new THREE.Vector3(),_hor=new THREE.Vector3(),SOBRE=.045,ATRAS=.05,AGARRE=.12,SUELTA=.14,VUELTA=.45,TOPE=4;
function puntoAgarre(actor,pos,out){
 _hor.subVectors(pos,actor.holder.getWorldPosition(_tmp));_hor.y=0;_hor.normalize();
 return out.copy(pos).addScaledVector(_hor,-ATRAS).setY(pos.y+SOBRE);
}
function manoEnJugada(actor,time,reposo){
 const j=actor.jugada;if(!j)return null;
 if(time-j.t0>TOPE){actor.jugada=null;return null;}
 const a=j.anim;
 if(a.elapsed<a.duration){
  puntoAgarre(actor,j.obj.position,_fic);
  return _fic.lerpVectors(reposo,_fic,suave(entre(a.elapsed/AGARRE,0,1)));
 }
 if(j.aterrizo==null)j.aterrizo=time;
 const e=time-j.aterrizo;
 puntoAgarre(actor,j.hasta,_fic);
 if(e<SUELTA)return _fic;
 const v=(e-SUELTA)/VUELTA;
 if(v>=1){actor.jugada=null;return null;}
 return _fic.lerp(reposo,suave(v));
}

/**
 * El trago. Cada quien, cada tanto (40–70 s, distinto por persona) y solo si
 * no le toca, no habla y no está cerrando una mano, estira la derecha a su
 * mesita, agarra el vaso con el pulgar arriba, se lo lleva a la boca, echa la
 * cabeza un poco atrás, bebe, lo baja y vuelve. El vaso va pegado a la MANO
 * real (su hueso, después del IK), no a una curva: nunca se despega.
 * Si en medio le toca jugar, el vaso vuelve a su sitio y la mano juega.
 */
const TRAMOS=[1.0,1.9,3.3,4.3,5.2];
function tragoEn(actor,time,ctx){
 const b=actor.bebida;if(!b)return null;
 if(actor.trago){const e=actor.trago.fijo??time-actor.trago.t0;if(e<0||e>=TRAMOS[4]||actor.jugada){actor.trago=null;dejarVaso(b);return null;}return e;}
 if(!ctx||!ctx.dt)return null;
 const i=actor.index,P=40+((i*17)%4)*9,f=(time+i*13)%P,k=Math.floor((time+i*13)/P);
 if(f<.6&&actor.tragoK!==k&&!actor.jugada&&!(ctx.jugando&&ctx.turno===i)&&!ctx.habla.has(i)&&!(ctx.fin&&time-ctx.fin.t<6)){actor.tragoK=k;actor.trago={t0:time};return 0;}
 return null;
}
function dejarVaso(b){b.group.position.copy(b.home);b.group.quaternion.identity();}
const _boca=new THREE.Vector3(),_agarre=new THREE.Vector3(),_Fa=new THREE.Vector3(),_Fb=new THREE.Vector3(),ALTO_VASO=.045;
function manoEnTrago(actor,e,reposo,out){
 const b=actor.bebida;
 // Pulgar arriba: palma hacia dentro (+X del asiento para la derecha), dedos al frente.
 _Fa.copy(_ejeZ).addScaledVector(Y,.25).normalize();_Fb.copy(_ejeZ).multiplyScalar(.55).addScaledVector(Y,.8).normalize();
 _agarre.copy(b.home);_agarre.y+=ALTO_VASO;_agarre.addScaledVector(_ejeX,-.05).addScaledVector(_Fa,-.035);
 actor.front.getWorldPosition(_boca);_boca.y-=.07;_boca.addScaledVector(_ejeZ,.09).addScaledVector(_ejeX,-.05).addScaledVector(_Fb,-.035);
 let dedos;
 if(e<TRAMOS[0]){out.lerpVectors(reposo,_agarre,suave(e/TRAMOS[0]));dedos=_Fa;}
 else if(e<TRAMOS[1]){const p=suave((e-TRAMOS[0])/(TRAMOS[1]-TRAMOS[0]));out.lerpVectors(_agarre,_boca,p);dedos=_Fa.lerp(_Fb,p).normalize();}
 else if(e<TRAMOS[2]){out.copy(_boca);dedos=_Fb;}
 else if(e<TRAMOS[3]){const p=suave((e-TRAMOS[2])/(TRAMOS[3]-TRAMOS[2]));out.lerpVectors(_boca,_agarre,p);dedos=_Fb.lerp(_Fa,p).normalize();}
 else {out.lerpVectors(_agarre,reposo,suave((e-TRAMOS[3])/(TRAMOS[4]-TRAMOS[3])));dedos=_Fa;}
 return dedos;
}
const _pal=new THREE.Vector3(),_ded=new THREE.Vector3(),_arr=new THREE.Vector3();
function vasoEnMano(actor,e){
 const b=actor.bebida,mano=actor.brazos[1].mano;
 if(e<TRAMOS[0]||e>=TRAMOS[3]){dejarVaso(b);return;}
 mano.getWorldQuaternion(_wq);mano.getWorldPosition(_mano);
 _pal.set(0,0,1).applyQuaternion(_wq);_ded.set(0,1,0).applyQuaternion(_wq);
 // Inclinación al beber: la boca del vaso hacia la cara.
 const d=e<TRAMOS[1]?0:e<TRAMOS[2]?suave(Math.min(1,(e-TRAMOS[1])/.4))*(e>TRAMOS[2]-.4?(TRAMOS[2]-e)/.4:1):0;
 b.group.quaternion.setFromAxisAngle(_ejeX,-.95*d);
 _arr.set(0,1,0).applyQuaternion(b.group.quaternion);
 b.group.position.copy(_mano).addScaledVector(_pal,.05).addScaledVector(_ded,.035).addScaledVector(_arr,-ALTO_VASO);
}

/**
 * Respira. idleMotion trae un vaivén de columna mínimo (y está probado, no se
 * toca); aquí va lo que se VE: el pecho sube y los hombros con él, al ritmo de
 * alguien sentado tranquilo (~14 por minuto, la inspiración más corta que la
 * espiración). Encima, un balanceo lento del tronco: nadie se queda clavado.
 */
function respiracion(actor,time){
 const i=actor.index,f=.23+(i%4)*.012,fase=time*f*Math.PI*2+i*1.9;
 const r=Math.sin(fase),b=r>0?r:r*.7;
 return {b,balanceo:Math.sin(time*.11+i*2.3)*.022+Math.sin(time*.29+i)*.008,ladeo:Math.sin(time*.07+i*1.3)*.014};
}

/**
 * Hacia dónde mira cada quien. La cabeza se reparte entre cuello (40 %) y
 * cabeza; el punto que se mira se suaviza, así los giros duran lo que dura
 * un giro de cabeza de verdad y no saltan.
 *  - Cayó una ficha: todos la miran.
 *  - Habla alguien: los demás lo miran.
 *  - Te toca: miras tus fichas.
 *  - Si no: al que le toca, a la mesa o a tu pareja, cambiando cada pocos segundos.
 */
const _mira=new THREE.Vector3(),_cab=new THREE.Vector3(),_fr=new THREE.Vector3(),_dir=new THREE.Vector3(),_eje=new THREE.Vector3(),_lean=new THREE.Quaternion();
const hash=n=>{const s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s);};
function objetivoMirada(actor,time,ctx,out){
 const i=actor.index;
 if(i>=4||!ctx)return ctx?.foco&&time-ctx.foco.t<2.5?out.copy(ctx.foco.p):out.set(0,DIM.surfaceY,0);
 if(ctx.fin&&time-ctx.fin.t<5){
  const gano=ctx.fin.team!=null&&i%2===ctx.fin.team;
  if(gano&&ctx.cabezas[(i+2)%4])return out.copy(ctx.cabezas[(i+2)%4]);
  return enAsiento(actor,0,DIM.surfaceY,DIM.seatDistance-DIM.rackRadius,out);
 }
 if(actor.trago&&actor.bebida){const e=time-actor.trago.t0;if(e<1.1||(e>3.4&&e<4.3))return out.copy(actor.bebida.home);}
 if(ctx.foco&&time-ctx.foco.t<1.4)return out.copy(ctx.foco.p);
 for(const s of ctx.habla)if(s!==i&&ctx.cabezas[s])return out.copy(ctx.cabezas[s]);
 if(ctx.jugando&&ctx.turno===i){
  const k=Math.floor(time/1.3);
  return enAsiento(actor,(hash(k+i*9)-.5)*.12,DIM.surfaceY+.02,DIM.seatDistance-DIM.rackRadius+.02,out);
 }
 const k=Math.floor((time+i*1.37)/(2.2+i*.35)),r=hash(k*4+i);
 if(ctx.jugando&&r<.45&&ctx.cabezas[ctx.turno]&&ctx.turno!==i)return out.copy(ctx.cabezas[ctx.turno]);
 if(r<.62&&ctx.cabezas[(i+2)%4])return out.copy(ctx.cabezas[(i+2)%4]);
 if(!ctx.jugando&&r<.85&&ctx.cabezas[(i+1+(k%2)*2)%4])return out.copy(ctx.cabezas[(i+1+(k%2)*2)%4]);
 return out.set((hash(k+7)-.5)*.2,DIM.surfaceY,(hash(k+3)-.5)*.2);
}
function mirar(actor,time,ctx){
 const head=actor.head,neck=actor.neck,front=actor.front;if(!head||!front)return;
 objetivoMirada(actor,time,ctx,_mira);
 if(!actor.mirada||!ctx?.dt)actor.mirada=(actor.mirada||new THREE.Vector3()).copy(_mira);
 else actor.mirada.lerp(_mira,1-Math.exp(-ctx.dt*5.5));
 for(const [hueso,parte] of [[neck,.4],[head,1]]){
  if(!hueso)continue;
  head.getWorldPosition(_cab);front.getWorldPosition(_fr);
  _fr.sub(_cab);if(_fr.lengthSq()<1e-10)return;_fr.normalize();
  _dir.subVectors(actor.mirada,_cab);if(_dir.lengthSq()<1e-8)return;_dir.normalize();
  // Guiñada: ángulo con signo de la mirada actual a la querida, en el plano del piso.
  const guiñada=entre(Math.atan2(_fr.z*_dir.x-_fr.x*_dir.z,_fr.x*_dir.x+_fr.z*_dir.z),-1.25,1.25)*parte;
  giraEnMundo(hueso,_q.setFromAxisAngle(Y,guiñada));
  front.getWorldPosition(_fr);_fr.sub(_cab).normalize();
  _eje.crossVectors(_fr,Y);if(_eje.lengthSq()<1e-8)continue;_eje.normalize();
  const cabeceo=entre(Math.asin(pinza(_dir.y))-Math.asin(pinza(_fr.y)),-.75,.55)*parte;
  giraEnMundo(hueso,_q.setFromAxisAngle(_eje,cabeceo));
 }
}

/**
 * Inclinados hacia la mesa, como quien juega. Base de 13°, y cuando la mano
 * tiene que llegar lejos (una punta del tablero al otro lado), el tronco se
 * echa hacia allá y gira un poco en vez de estirar el brazo como un palo.
 */
const INCLINACION=.23;
function inclinar(actor,angulo,giro=0){
 if(!actor.spine||!actor.spine.parent)return;
 _eje.copy(_ejeX);giraEnMundo(actor.spine,_lean.setFromAxisAngle(_eje,angulo));
 if(giro)giraEnMundo(actor.spine,_lean.setFromAxisAngle(Y,giro));
}

const _pol=new THREE.Vector3(),_dd=new THREE.Vector3(),_pp=new THREE.Vector3(),_mano=new THREE.Vector3();
export function applySeatedMotion(actor,time,reduced=false,ctx=null){
 // Restore a calibrated upright pose every frame. Never accumulate rotations
 // or advance the imported full-body clip through its deep forward bow.
 for(const p of actor.pose){p.bone.position.copy(p.position);p.bone.quaternion.copy(p.quaternion);p.bone.scale.copy(p.scale);}
 actor.holder.updateMatrixWorld(true);ejes(actor);
 const motion=idleMotion(actor.index,time,reduced);
 if(actor.spine)actor.spine.quaternion.multiply(delta.setFromAxisAngle(X,motion.breath));
 const vivo=!reduced,r=vivo?respiracion(actor,time):{b:0,balanceo:0,ladeo:0};
 const i=actor.index,jugador=i<4&&actor.brazos;

 // Cómo cierra la mano: la pareja que gana se echa para atrás; la que pierde se encoge.
 let extra=0,fin=0;
 if(jugador&&ctx?.fin&&ctx.fin.team!=null){const e=time-ctx.fin.t;if(e>=0&&e<5){fin=Math.sin(Math.min(1,e/.5)*Math.PI/2)*(e>4?(5-e):1);extra+=(i%2===ctx.fin.team?-.1:.07)*fin;}}
 if(jugador&&ctx?.jugando&&ctx.turno===i)extra+=.04;

 const trago=jugador&&vivo&&actor.front?tragoEn(actor,time,ctx):null;
 // Primero dónde va cada mano, para saber cuánto hay que inclinarse.
 const objetivos=[];
 if(jugador){
  for(const brazo of actor.brazos){
   const reposo=_rep.copy(reposoMano(actor,brazo,time));
   let o=brazo.lado==='Right'?manoEnJugada(actor,time,reposo):null,jugando=!!o,dedos=null;
   if(!o&&trago!=null&&brazo.lado==='Right'){o=_tmp.set(0,0,0);dedos=manoEnTrago(actor,trago,reposo,o).clone();}
   o=(o||reposo).clone();
   if(!jugando&&vivo&&ctx?.habla?.has(i)&&brazo.lado==='Left'){actor.gesto=Math.min(1,(actor.gesto||0)+(ctx.dt||0)*3);}
   else if(brazo.lado==='Left')actor.gesto=Math.max(0,(actor.gesto||0)-(ctx?.dt||1)*2);
   if(brazo.lado==='Left'&&actor.gesto>0){const g=suave(actor.gesto);o.addScaledVector(_ejeZ,.06*g).addScaledVector(_ejeX,-.07*g);o.y+=.07*g+Math.sin(time*5.2)*.012*g;}
   if(brazo.lado==='Right'&&!jugando&&fin&&i%2===ctx.fin.team){const e=time-ctx.fin.t;if(e<1.1)o.y+=Math.max(0,Math.sin(Math.min(1,e/.9)*Math.PI))*.13;}
   objetivos.push({brazo,o,jugando,dedos});
  }
 }
 // Inclinación: base + lo que pida la mano que más lejos tenga que llegar.
 let giro=0;
 if(jugador){
  const der=objetivos.find(x=>x.jugando);
  if(der&&der.brazo.brazo){
   actor.holder.worldToLocal(_pp.copy(der.o));
   const lejos=Math.hypot(_pp.x,_pp.z-.12);
   extra+=entre((lejos-.42)/.55,0,.34);
   giro=entre(Math.atan2(_pp.x,_pp.z)*.3,-.3,.3);
  }
 }
 inclinar(actor,INCLINACION*(actor.brazos?1:.6)+extra,giro);
 if(trago!=null){const w=trago<TRAMOS[1]?Math.sin(Math.min(1,trago/TRAMOS[0])*Math.PI/2)*(1-suave(Math.max(0,trago-TRAMOS[0])/(TRAMOS[1]-TRAMOS[0]))):trago>TRAMOS[2]?Math.sin(Math.min(1,(trago-TRAMOS[2])/(TRAMOS[3]-TRAMOS[2]))*Math.PI):0;if(actor.spine)giraEnMundo(actor.spine,_lean.setFromAxisAngle(_ejeZ,.16*w));}
 if(vivo){
  if(actor.spine)giraEnMundo(actor.spine,_lean.setFromAxisAngle(Y,r.balanceo));
  if(actor.spine)giraEnMundo(actor.spine,_lean.setFromAxisAngle(_ejeZ,r.ladeo));
  if(actor.chest)giraEnMundo(actor.chest,_lean.setFromAxisAngle(_ejeX,-.018*r.b));
  if(actor.hombros)for(const [lado,h] of actor.hombros)if(h)giraEnMundo(h,_lean.setFromAxisAngle(_ejeZ,lado*.03*(r.b+.3)));
 }

 mirar(actor,time,ctx);
 // El vaivén de idleMotion va DESPUÉS de la mirada: antes, la mirada lo corregiría y la cabeza quedaría clavada.
 if(actor.head){
  actor.head.quaternion.multiply(delta.setFromAxisAngle(Y,motion.headYaw*.5));actor.head.quaternion.multiply(delta.setFromAxisAngle(X,motion.headNod));
  actor.head.updateMatrixWorld(true);
 }
 if(vivo&&actor.head){
  // Hablando, la cabeza acompaña las sílabas; perdiendo, niega.
  if(ctx?.habla?.has(i)){const a=.035*(.6+.4*Math.sin(time*1.7));giraEnMundo(actor.head,_lean.setFromAxisAngle(_ejeX,Math.sin(time*6.1)*a*.5+Math.sin(time*3.3)*a*.5));}
  if(fin&&i%2!==ctx.fin.team){const e=time-ctx.fin.t;if(e>.6&&e<2.6)giraEnMundo(actor.head,_lean.setFromAxisAngle(Y,Math.sin((e-.6)*Math.PI*2.4)*.16*(2.6-e)/2));}
 }
 if(trago!=null&&trago>TRAMOS[1]-.2&&trago<TRAMOS[2]+.2&&actor.head){const d=Math.sin(Math.min(1,(trago-TRAMOS[1]+.2)/(TRAMOS[2]-TRAMOS[1]+.4))*Math.PI);giraEnMundo(actor.head,_lean.setFromAxisAngle(_ejeX,-.3*d));}
 // A small, bounded acknowledgment belongs only to the acting player.
 if(vivo&&actor.reaction&&actor.head){const elapsed=time-actor.reaction.time;if(elapsed>=0&&elapsed<1.2){const amount=Math.sin(elapsed/1.2*Math.PI)*.035;giraEnMundo(actor.head,_lean.setFromAxisAngle(_ejeX,amount));}}

 for(const {brazo,o,jugando,dedos} of objetivos){
  const lado=brazo.lado==='Left'?1:-1;
  // Polo: el codo va abajo, afuera y atrás, que es como apoya quien juega.
  // Alcanzando, más afuera y menos atrás: el codo se abre, no se clava en las costillas.
  brazo.brazo.getWorldPosition(_pol);
  _pol.add(dirAsiento(lado*(jugando?.55:.32),-.75,jugando?-.15:-.6,_dd));
  alcanzar(brazo,o,_pol);
  // Palma abajo; los dedos siguen al antebrazo, un poco hacia dentro y hacia la mesa.
  brazo.antebrazo.getWorldPosition(_B);brazo.mano.getWorldPosition(_mano);
  _F.subVectors(_mano,_B);_F.y=0;if(_F.lengthSq()<1e-8)_F.copy(_ejeZ);_F.normalize();
  _F.addScaledVector(_ejeX,-lado*(jugando?0:.12)).normalize();_F.y=jugando?-.55:-.3;
  _N.set(0,-1,0).addScaledVector(_ejeX,-lado*.22);
  if(brazo.lado==='Left'&&actor.gesto>0){const g=suave(actor.gesto);_N.lerp(_dd.copy(_ejeX).multiplyScalar(-1).add(_tmp.set(0,.4,0)),g*.8);_F.y+=.4*g;}
  if(dedos){_F.copy(dedos);_N.copy(_ejeX).addScaledVector(Y,-.15);}
  nivelarMano(brazo,_F,_N);
  if(dedos)vasoEnMano(actor,trago);
  // Quien espera tamborilea: dos golpecitos de dedos cada tantos segundos.
  if(vivo&&!jugando&&!dedos&&brazo.lado==='Right'&&!(ctx?.turno===i&&ctx?.jugando)){
   const P=4.6+i*.9,tau=(time+i*1.3)%P;
   if(tau<.55){brazo.mano.getWorldQuaternion(_wq);_eje.set(1,0,0).applyQuaternion(_wq);giraEnMundo(brazo.mano,_lean.setFromAxisAngle(_eje,-.22*Math.max(0,Math.sin(tau/.55*Math.PI*4))));}
  }
 }
 actor.holder.updateMatrixWorld(true);
}
