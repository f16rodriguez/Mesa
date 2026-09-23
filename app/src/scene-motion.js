import * as THREE from 'three';
import {idleMotion,DIM} from './scene-layout.ts';
const X=new THREE.Vector3(1,0,0),Y=new THREE.Vector3(0,1,0),delta=new THREE.Quaternion();
export function capturePose(root){const bones=[];root.traverse(bone=>{if(bone.isBone)bones.push({bone,position:bone.position.clone(),quaternion:bone.quaternion.clone(),scale:bone.scale.clone()});});return bones;}

const _A=new THREE.Vector3(),_B=new THREE.Vector3(),_C=new THREE.Vector3(),_T=new THREE.Vector3();
const _u=new THREE.Vector3(),_v=new THREE.Vector3(),_n=new THREE.Vector3();
const _q=new THREE.Quaternion(),_wq=new THREE.Quaternion(),_pq=new THREE.Quaternion();
const pinza=x=>Math.min(1,Math.max(-1,x));

/** Gira `hueso` en el MUNDO por `q`, y lo escribe en su rotación local. */
function giraEnMundo(hueso,q){
 hueso.getWorldQuaternion(_wq);
 hueso.parent.getWorldQuaternion(_pq);
 hueso.quaternion.copy(_pq.invert()).multiply(q).multiply(_wq);
 hueso.updateMatrixWorld(true);
}

/**
 * IK de dos huesos: lleva la muñeca hasta `objetivo` doblando hombro y codo.
 *
 * Se resuelve entero en el MUNDO, no en ejes de hueso. Cada esqueleto exporta
 * sus huesos con la orientación que le da la gana, así que "girar el codo .9
 * sobre su X" significa una cosa en un modelo y otra en el siguiente: se
 * adivina mirando renders y se acaba metiendo una mano dentro de la mesa. Un
 * punto en el espacio no se presta a eso.
 *
 * El signo de la flexión tampoco se supone: se prueba, se mide si la muñeca
 * quedó más cerca del objetivo, y si no, se dobla al otro lado.
 */
export function alcanzar(brazo,objetivo){
 const sup=brazo.brazo,ant=brazo.antebrazo,mano=brazo.mano;
 if(!sup||!ant||!mano||!sup.parent||!ant.parent)return;
 sup.getWorldPosition(_A);ant.getWorldPosition(_B);mano.getWorldPosition(_C);
 const L1=_A.distanceTo(_B),L2=_B.distanceTo(_C);
 if(L1<1e-5||L2<1e-5)return;
 _T.copy(objetivo);
 const alcance=L1+L2-1e-3,minimo=Math.abs(L1-L2)+1e-3;
 const d=Math.min(Math.max(_A.distanceTo(_T),minimo),alcance);

 // El codo dobla en el plano hombro-codo-muñeca; su normal es el eje.
 _u.subVectors(_B,_A);_v.subVectors(_C,_B);_n.crossVectors(_u,_v);
 if(_n.lengthSq()<1e-9)_n.set(0,1,0);else _n.normalize();
 const actual=Math.acos(pinza((L1*L1+L2*L2-_A.distanceToSquared(_C))/(2*L1*L2)));
 const querido=Math.acos(pinza((L1*L1+L2*L2-d*d)/(2*L1*L2)));
 const giro=querido-actual;
 giraEnMundo(ant,_q.setFromAxisAngle(_n,giro));
 mano.getWorldPosition(_C);
 if(Math.abs(_A.distanceTo(_C)-d)>1e-3){       // dobló para el lado contrario
  giraEnMundo(ant,_q.setFromAxisAngle(_n,-2*giro));
  mano.getWorldPosition(_C);
 }

 // Con el codo ya en su ángulo, apuntar el brazo entero al objetivo.
 _u.subVectors(_C,_A);_v.subVectors(_T,_A);
 if(_u.lengthSq()<1e-9||_v.lengthSq()<1e-9)return;
 giraEnMundo(sup,_q.setFromUnitVectors(_u.normalize(),_v.normalize()));
}

/**
 * Dónde descansa cada mano: en el borde de la mesa, delante de su dueño.
 *
 * En ejes del asiento, +Z se aleja del centro de la mesa (es el radio que usan
 * los atriles), así que el borde cae en Z negativa: el asiento está a
 * seatDistance del centro y el tablero mide tableWidth de ancho. Un pelín de
 * variación por persona para que cuatro no pongan las manos igual.
 */
const _obj=new THREE.Vector3();
function objetivoMano(actor,brazo){
 // 0.21 m pasado el borde: el antebrazo apoya y la mano queda sobre el paño,
 // no colgando del canto, que es donde la dejaba el primer intento.
 // +Z del asiento mira HACIA la mesa: seats[0] está en z=+1.01 girado PI, así
 // que su +Z local acaba apuntando al origen. El borde queda a
 // seatDistance - tableWidth/2 por delante, y la mano .21 m más adentro.
 // Apenas .06 m pasado el canto: el antebrazo APOYA y el codo queda doblado.
 // Con .21 llegaban al centro con el brazo estirado, que no es como se sienta
 // nadie a jugar dominó — es como se empuja una mesa.
 const borde=(DIM.seatDistance-DIM.tableWidth/2)+.025;
 const v=actor.index*1.7;
 // Con +Z hacia la mesa, la DERECHA de quien está sentado es -X (adelante×arriba),
 // así que la mano izquierda va a +X. Estaba al revés y los cuatro cruzaban
 // las muñecas delante del pecho.
 const lateral=(brazo.lado==='Left'?1:-1)*(.155+Math.sin(v)*.018);
 return _obj.set(lateral,DIM.surfaceY+.03,borde+Math.cos(v*1.3)*.022);
}
/**
 * La jugada: la mano derecha agarra la ficha, la LLEVA hasta el tablero, la
 * suelta y vuelve. Antes la ficha volaba sola desde la silla y las manos ni se
 * enteraban — la animación que más importa en un juego de dominó no existía.
 *
 * La mano sigue a la FICHA MISMA (su posición en cada cuadro), no a una curva
 * recalculada con otro reloj. La ficha avanza con dt recortado a .06 s por
 * cuadro; con un reloj de pared aparte, en una tele lenta a 3 fps la mano
 * acababa su viaje antes de que la ficha llegara a la mitad.
 */
const _rep=new THREE.Vector3(),_fic=new THREE.Vector3(),_tmp=new THREE.Vector3(),SOBRE=.03,AGARRE=.12,SUELTA=.12,VUELTA=.42,TOPE=4;
const suave=p=>p*p*(3-2*p);
function manoEnJugada(actor,brazo,time,reposo){
 const j=actor.jugada;if(!j||brazo.lado!=='Right')return reposo;
 // Red de seguridad: si la jugada siguiente reconstruyó el tablero a mitad de
 // vuelo, la ficha que seguíamos ya no existe y su animación no avanza más.
 if(time-j.t0>TOPE){actor.jugada=null;return reposo;}
 const a=j.anim;
 if(a.elapsed<a.duration){
  _tmp.copy(j.obj.position);_tmp.y+=SOBRE;
  return _fic.lerpVectors(reposo,_tmp,suave(Math.min(1,Math.max(0,a.elapsed)/AGARRE)));
 }
 if(j.aterrizo==null)j.aterrizo=time;
 const e=time-j.aterrizo;
 _tmp.copy(j.hasta);_tmp.y+=SOBRE;
 if(e<SUELTA)return _fic.copy(_tmp);
 const v=(e-SUELTA)/VUELTA;
 if(v>=1){actor.jugada=null;return reposo;}
 return _fic.copy(_tmp).lerp(reposo,suave(v));
}
export function manosEnLaMesa(actor,time=0){
 if(!actor.brazos)return;
 actor.holder.updateMatrixWorld(true);
 for(const brazo of actor.brazos){
  const reposo=_rep.copy(actor.holder.localToWorld(objetivoMano(actor,brazo)));
  alcanzar(brazo,manoEnJugada(actor,brazo,time,reposo));
 }
}

/**
 * Inclinados hacia la mesa, como quien juega y no como quien posa. Se gira el
 * tronco sobre el eje lateral del asiento EN EL MUNDO — igual que el IK, sin
 * adivinar el eje local del hueso. Girar +Y sobre +X lo lleva hacia +Z, que es
 * la mesa. 11°: con menos, los hombros quedaban tan atrás que la única forma de llegar
 * al atril era con el brazo estirado. Así el codo dobla y el antebrazo apoya.
 */
const INCLINACION=.19,_eje=new THREE.Vector3(),_hq=new THREE.Quaternion(),_lean=new THREE.Quaternion();
function inclinar(actor){
 if(!actor.brazos||!actor.spine||!actor.spine.parent)return;
 actor.holder.updateMatrixWorld(true);
 _eje.set(1,0,0).applyQuaternion(actor.holder.getWorldQuaternion(_hq));
 giraEnMundo(actor.spine,_lean.setFromAxisAngle(_eje,INCLINACION));
}

export function applySeatedMotion(actor,time,reduced=false){
 // Restore a calibrated upright pose every frame. Never accumulate rotations
 // or advance the imported full-body clip through its deep forward bow.
 for(const p of actor.pose){p.bone.position.copy(p.position);p.bone.quaternion.copy(p.quaternion);p.bone.scale.copy(p.scale);}
 const motion=idleMotion(actor.index,time,reduced);
 if(actor.spine)actor.spine.quaternion.multiply(delta.setFromAxisAngle(X,motion.breath));
 inclinar(actor);
 if(actor.head){actor.head.quaternion.multiply(delta.setFromAxisAngle(Y,motion.headYaw));actor.head.quaternion.multiply(delta.setFromAxisAngle(X,motion.headNod));}

 // A small, bounded acknowledgment belongs only to the acting player.
 if(!reduced&&actor.reaction){const elapsed=time-actor.reaction.time;if(elapsed>=0&&elapsed<1.2&&actor.head){const amount=Math.sin(elapsed/1.2*Math.PI)*.035;actor.head.quaternion.multiply(delta.setFromAxisAngle(X,amount));}}
 manosEnLaMesa(actor,time);
 actor.holder.updateMatrixWorld(true);
}
