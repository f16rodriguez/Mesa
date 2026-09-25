import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {DIM,seats} from './scene-layout.ts';
/**
 * Lo que se toma en la mesa, a tamaño real y en la esquina de la mesa que
 * queda a la derecha de cada quien: en las esquinas no llega la cadena (su
 * límite es feltWidth/2 - 2 cm y la bebida está pasado el paño, en la madera).
 *
 * - Presidente: la jumbo verde de 650 ml, sudada. Etiqueta genérica blanca
 *   con franja roja — se parece, no la copia.
 * - Morir soñando: jugo de naranja con leche en vaso alto, con hielo, espuma, su rueda
 *   de naranja en el borde (lo que lo distingue de un café con leche desde la tele) y
 *   servilleta. Se bebe por el sorbete.
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
/** La rueda de naranja del borde: cáscara, su blanco y los gajos, pintados en un canvas. */
function rodaja(){
 const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d'),m=64;
 g.fillStyle='#e07a16';g.beginPath();g.arc(m,m,64,0,Math.PI*2);g.fill();
 g.fillStyle='#f6e7c6';g.beginPath();g.arc(m,m,56,0,Math.PI*2);g.fill();
 for(let k=0;k<10;k++){const a=k*Math.PI/5;g.fillStyle=k%2?'#f39a2c':'#f7a93f';g.beginPath();g.moveTo(m+Math.cos(a+.05)*6,m+Math.sin(a+.05)*6);g.arc(m,m,51,a+.05,a+Math.PI/5-.05);g.closePath();g.fill();}
 g.fillStyle='#fbe3b4';g.beginPath();g.arc(m,m,5,0,Math.PI*2);g.fill();
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;
}
/** La servilleta de papel del colmado, doblada en cuatro: se queda en la mesa como el plato del café. */
function servilleta(){
 const c=document.createElement('canvas');c.width=c.height=64;const g=c.getContext('2d');
 g.fillStyle='#f3efe6';g.fillRect(0,0,64,64);g.fillStyle='rgba(120,110,90,.16)';g.fillRect(31,0,2,64);g.fillRect(0,31,64,2);
 g.strokeStyle='rgba(120,110,90,.1)';g.lineWidth=1;g.strokeRect(3,3,58,58);
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;
 const m=new THREE.Mesh(new THREE.PlaneGeometry(.1,.1),new THREE.MeshStandardMaterial({map:t,roughness:.95}));m.rotation.set(-Math.PI/2,0,.35);
 const g2=new THREE.Group();g2.add(m);return g2;
}
function morir(){
 // Vaso alto de vidrio grueso: pared y fondo con grosor, y el borde más claro, que es lo que dice "vidrio" desde la tele.
 const g=new THREE.Group(),P=(r,y)=>new THREE.Vector2(r,y),H=.14;
 const vidrio=new THREE.MeshStandardMaterial({color:'#e4eef1',roughness:.05,transparent:true,opacity:.18,depthWrite:false,side:THREE.DoubleSide,envMapIntensity:1.6});
 const vaso=new THREE.Mesh(new THREE.LatheGeometry([P(0,.001),P(.028,0),P(.0295,.004),P(.034,H),P(.0316,H),P(.0272,.012),P(0,.012)],28),vidrio);vaso.renderOrder=2;g.add(vaso);
 const borde=new THREE.Mesh(new THREE.TorusGeometry(.0328,.0014,6,32),new THREE.MeshStandardMaterial({color:'#f4fbfd',roughness:.05,transparent:true,opacity:.6,depthWrite:false}));borde.rotation.x=Math.PI/2;borde.position.y=H;borde.renderOrder=3;g.add(borde);
 // El batido: naranja abajo, crema arriba, y una capa de espuma. Colores por vértice, sin textura.
 const L=.118,perfil=[P(0,.012),P(.0268,.012),P(.0312,L),P(0,L)],jugo=new THREE.LatheGeometry(perfil,28),col=[],a=new THREE.Color('#e5822f'),b=new THREE.Color('#f1b066'),x=new THREE.Color();
 const pos=jugo.attributes.position;for(let k=0;k<pos.count;k++){const t=Math.min(1,Math.max(0,(pos.getY(k)-.012)/(L-.012)));x.copy(a).lerp(b,t);col.push(x.r,x.g,x.b);}
 jugo.setAttribute('color',new THREE.Float32BufferAttribute(col,3));
 g.add(new THREE.Mesh(jugo,new THREE.MeshStandardMaterial({vertexColors:true,roughness:.55})));
 const espuma=new THREE.Mesh(new THREE.CylinderGeometry(.0312,.0312,.006,28),new THREE.MeshStandardMaterial({color:'#f6d6a2',roughness:.8}));espuma.position.y=L+.001;g.add(espuma);
 // Hielo medio hundido en la espuma, redondeado como el de verdad.
 const hielo=new THREE.MeshStandardMaterial({color:'#eef6f9',roughness:.12,transparent:true,opacity:.82});
 for(const [hx,hz,r] of [[.011,.007,.4],[-.008,-.01,1.1],[.003,.013,2.2]]){const h=new THREE.Mesh(new RoundedBoxGeometry(.017,.015,.017,2,.004),hielo);h.position.set(hx,L+.003,hz);h.rotation.set(r*.3,r,r*.2);g.add(h);}
 // La rueda de naranja montada en el borde, del lado de afuera, y el sorbete del otro lado.
 const cascara=new THREE.MeshStandardMaterial({color:'#e07a16',roughness:.6}),cara=new THREE.MeshStandardMaterial({map:rodaja(),roughness:.55});
 const rueda=new THREE.Mesh(new THREE.CylinderGeometry(.023,.023,.005,24),[cascara,cara,cara]);rueda.rotation.set(Math.PI/2,0,.2);rueda.position.set(.036,H-.004,0);g.add(rueda);
 const sorbete=new THREE.Mesh(new THREE.CylinderGeometry(.0032,.0032,.19,8),new THREE.MeshStandardMaterial({color:'#c8392e',roughness:.45}));sorbete.position.set(-.012,.108,.002);sorbete.rotation.z=.07;g.add(sorbete);
 // Se bebe por el sorbete: poca inclinación, y lo que llega a la boca es la punta (a ~.2 del fondo), no el borde.
 return {g,alto:.06,radio:.034,inclina:.3,boca:.14,plato:servilleta(),sobrePlato:.0012};
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
 return {g,alto:.034,radio:.034,inclina:.9,boca:.034,plato,sobrePlato:.008};
}
export function servirBebidas(scene){
 const out=[];
 for(let i=0;i<4;i++){
  const tipo=TIPOS[i],b=tipo==='presidente'?presidente():tipo==='morir'?morir():cafe();
  const [sx,sz,ang]=seats[i],esq=DIM.tableWidth/2-.055,tope=DIM.tableCenterY+DIM.tableThickness/2;
  // Esquina a la derecha de quien se sienta (-X del asiento), del lado de la mesa.
  const home=new THREE.Vector3(-esq,0,DIM.seatDistance-esq).applyAxisAngle(new THREE.Vector3(0,1,0),ang).add(new THREE.Vector3(sx,0,sz));home.y=tope;
  b.g.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
  if(b.plato)home.y+=b.sobrePlato;
  b.g.position.copy(home);scene.add(b.g);
  if(b.plato){b.plato.position.copy(home);b.plato.position.y=tope+b.sobrePlato/2;b.plato.traverse(o=>{if(o.isMesh)o.receiveShadow=true;});scene.add(b.plato);}
  out.push({group:b.g,home,index:i,tipo,alto:b.alto,radio:b.radio,inclina:b.inclina,boca:b.boca});
 }
 return out;
}
