import * as THREE from 'three';
/**
 * Los dedos de cada personaje (scripts/manos/dedos.py): dos huesos por mano, Dedos1 y Dedos2, que
 * giran sobre el eje de los nudillos (en userData.eje). En reposo la mano queda como viene del
 * modelo: los dedos curvados hacia la palma.
 *
 *   abrir(d, x): x = 0 como viene; 1 = abierta del todo (lo que se curvó, desenrollado); entre
 *   medio, relajada; negativo, más cerrada (puño).
 *
 * CURVA es lo que curvó cerrar.py en la punta: girar cada hueso la mitad lo deshace entero.
 */
const CURVA=1.05;
export function dedosDe(root){
 const out={};
 for(const lado of ['Left','Right']){
  const a=root.getObjectByName(lado+'Dedos1'),b=root.getObjectByName(lado+'Dedos2'),e=a?.userData?.eje;
  if(a&&b&&Array.isArray(e))out[lado]={a,b,eje:new THREE.Vector3(...e).normalize(),x:0};
 }
 return out;
}
export function abrir(d,x){
 if(!d||d.x===x)return;d.x=x;const ang=-x*CURVA/2;
 d.a.quaternion.setFromAxisAngle(d.eje,ang);d.b.quaternion.setFromAxisAngle(d.eje,ang);
}
