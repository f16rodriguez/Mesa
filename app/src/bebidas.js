import * as THREE from 'three';
import {DIM,seats} from './scene-layout.ts';
/**
 * Lo que se toma en la mesa, a tamaño real y en la esquina de la mesa que
 * queda a la derecha de cada quien: en las esquinas no llega la cadena (su
 * límite es feltWidth/2 - 2 cm y la bebida está pasado el paño, en la madera).
 *
 * - Presidente: la jumbo verde de 650 ml, sudada. Etiqueta genérica blanca
 *   con franja roja — se parece, no la copia.
 * - Morir soñando: jugo de naranja con leche en vaso alto, con hielo.
 * - Cafecito: taza con plato (un poco más grande que una tacita: desde la tele se tiene que ver).
 *
 * Cada bebida dice dónde se agarra (alto), qué tan ancha es (radio), cuánto se
 * inclina al beber y cuánto sobresale por encima del agarre (boca), que es lo
 * que usa el trago para poner el borde —no la muñeca— en la boca.
 */
const TIPOS=['cafe','morir','presidente','presidente'];
function etiqueta(){
 const c=document.createElement('canvas');c.width=256;c.height=128;const g=c.getContext('2d');
 g.fillStyle='#f1ece0';g.fillRect(0,0,256,128);
 g.fillStyle='#b3262d';g.fillRect(0,10,256,14);g.fillRect(0,104,256,14);
 g.fillStyle='#1f5a36';g.beginPath();g.ellipse(128,64,54,28,0,0,Math.PI*2);g.fill();
 g.fillStyle='#f1ece0';g.beginPath();g.ellipse(128,64,46,21,0,0,Math.PI*2);g.fill();
 g.fillStyle='#b3262d';g.fillRect(92,58,72,12);
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;
}
function presidente(){
 const g=new THREE.Group(),P=(r,y)=>new THREE.Vector2(r,y);
 const perfil=[P(0,0),P(.034,0),P(.037,.006),P(.037,.165),P(.034,.188),P(.022,.222),P(.0145,.252),P(.0138,.274),P(.0158,.279),P(.0158,.29),P(.0112,.29),P(.0106,.268),P(.0112,.24)];   // destapada: el labio y el vidrio por dentro
 const vidrio=new THREE.MeshStandardMaterial({color:'#2d5a26',roughness:.18,metalness:.05,envMapIntensity:1.4});
 g.add(new THREE.Mesh(new THREE.LatheGeometry(perfil,20),vidrio));
 // Sudada: una capa apenas más grande, blanca y rugosa, casi transparente.
 const sudor=new THREE.Mesh(new THREE.LatheGeometry(perfil.slice(1,5).map(v=>P(v.x+.0006,v.y)),20),new THREE.MeshStandardMaterial({color:'#e8f0e4',roughness:.9,transparent:true,opacity:.22,depthWrite:false}));
 g.add(sudor);
 const et=new THREE.Mesh(new THREE.CylinderGeometry(.0376,.0376,.075,24,1,true),new THREE.MeshStandardMaterial({map:etiqueta(),roughness:.6}));et.position.y=.095;g.add(et);
 const cuello=new THREE.Mesh(new THREE.CylinderGeometry(.0149,.0152,.02,16,1,true),new THREE.MeshStandardMaterial({color:'#b3262d',roughness:.5}));cuello.position.y=.262;g.add(cuello);
 const hondo=new THREE.Mesh(new THREE.CircleGeometry(.0112,16),new THREE.MeshBasicMaterial({color:'#0d160c'}));hondo.rotation.x=-Math.PI/2;hondo.position.y=.245;g.add(hondo);   // la oscuridad de adentro, se ve por la boca
 return {g,alto:.11,radio:.037,inclina:1.25,boca:.18};
}
function morir(){
 const g=new THREE.Group();
 const vaso=new THREE.Mesh(new THREE.CylinderGeometry(.034,.029,.14,24,1,true),new THREE.MeshStandardMaterial({color:'#dfe9ec',roughness:.08,transparent:true,opacity:.28,depthWrite:false,side:THREE.DoubleSide}));vaso.position.y=.07;vaso.renderOrder=2;g.add(vaso);
 const fondo=new THREE.Mesh(new THREE.CylinderGeometry(.029,.029,.008,24),new THREE.MeshStandardMaterial({color:'#dfe9ec',roughness:.1,transparent:true,opacity:.5}));fondo.position.y=.004;g.add(fondo);
 const jugo=new THREE.Mesh(new THREE.CylinderGeometry(.0318,.0285,.112,24),new THREE.MeshStandardMaterial({color:'#f2bf86',roughness:.45}));jugo.position.y=.064;g.add(jugo);
 for(const [x,z,r] of [[.01,.006,.4],[-.009,-.008,1.1],[.002,-.012,2]]){const hielo=new THREE.Mesh(new THREE.BoxGeometry(.016,.013,.016),new THREE.MeshStandardMaterial({color:'#f6f3ec',roughness:.15,transparent:true,opacity:.8}));hielo.position.set(x,.121,z);hielo.rotation.set(r,r*.7,0);g.add(hielo);}
 const pajita=new THREE.Mesh(new THREE.CylinderGeometry(.0028,.0028,.19,8),new THREE.MeshStandardMaterial({color:'#c8392e',roughness:.5}));pajita.position.set(.012,.11,.004);pajita.rotation.z=-.16;g.add(pajita);
 return {g,alto:.06,radio:.034,inclina:.85,boca:.09};
}
function cafe(){
 const g=new THREE.Group(),loza=new THREE.MeshStandardMaterial({color:'#efe9da',roughness:.22});
 const plato=new THREE.Mesh(new THREE.CylinderGeometry(.053,.047,.008,28),loza);plato.position.y=.004;g.add(plato);
 // Taza abierta por arriba: con la tapa cerrada el café quedaba debajo y se veía vacía.
 const loza2=new THREE.MeshStandardMaterial({color:'#efe9da',roughness:.22,side:THREE.DoubleSide});
 const taza=new THREE.Mesh(new THREE.CylinderGeometry(.034,.025,.056,24,1,true),loza2);const fondoT=new THREE.Mesh(new THREE.CircleGeometry(.025,20),loza);fondoT.rotation.x=-Math.PI/2;fondoT.position.y=.0085;g.add(fondoT);taza.position.y=.036;g.add(taza);
 const cafe=new THREE.Mesh(new THREE.CircleGeometry(.0318,24),new THREE.MeshStandardMaterial({color:'#2a160c',roughness:.15}));cafe.rotation.x=-Math.PI/2;cafe.position.y=.056;g.add(cafe);
 const asa=new THREE.Mesh(new THREE.TorusGeometry(.014,.004,6,12,Math.PI*1.3),loza);asa.position.set(.036,.038,0);asa.rotation.z=-Math.PI*.65;g.add(asa);
 // El plato se queda en la mesa: se levanta solo la taza.
 g.remove(plato);
 return {g,alto:.034,radio:.034,inclina:.9,boca:.034,plato};
}
export function servirBebidas(scene){
 const out=[];
 for(let i=0;i<4;i++){
  const tipo=TIPOS[i],b=tipo==='presidente'?presidente():tipo==='morir'?morir():cafe();
  const [sx,sz,ang]=seats[i],esq=DIM.tableWidth/2-.055,tope=DIM.tableCenterY+DIM.tableThickness/2;
  // Esquina a la derecha de quien se sienta (-X del asiento), del lado de la mesa.
  const home=new THREE.Vector3(-esq,0,DIM.seatDistance-esq).applyAxisAngle(new THREE.Vector3(0,1,0),ang).add(new THREE.Vector3(sx,0,sz));home.y=tope;
  b.g.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
  if(b.plato)home.y+=.008;
  b.g.position.copy(home);scene.add(b.g);
  if(b.plato){b.plato.position.copy(home);b.plato.position.y=tope+.004;b.plato.traverse(o=>{if(o.isMesh)o.receiveShadow=true;});scene.add(b.plato);}
  out.push({group:b.g,home,index:i,tipo,alto:b.alto,radio:b.radio,inclina:b.inclina,boca:b.boca});
 }
 return out;
}
