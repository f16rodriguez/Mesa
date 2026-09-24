import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {clone as cloneSkeleton} from 'three/addons/utils/SkeletonUtils.js';
const TAU=Math.PI*2, v3=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);
import {DIM,seats,chainLayout,openEnds} from './scene-layout.ts';
import {capturePose,applySeatedMotion} from './scene-motion.js';
import {dressColmado} from './colmado-detail.js';
import {armarEsquina} from './esquina.js';
import {armarBarrio} from './barrio.js';
import {servirBebidas} from './bebidas.js';
import {crearAtmosfera} from './atmosfera.js';
import {crearTranseuntes} from './transeuntes.js';
const pips=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];
export async function createWorld(container,{onProgress=()=>{}}={}){
 const scene=new THREE.Scene();scene.background=new THREE.Color('#2a2d4a');scene.fog=new THREE.FogExp2('#5a5670',.017);
 const camera=new THREE.PerspectiveCamera(42,innerWidth/innerHeight,.08,90);camera.position.set(3.1,2.65,4.2);
 let renderer;try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});}catch{throw Error('This device could not start WebGL. Try a recent desktop browser.');}
 // ?hq fuerza la calidad completa aunque el GPU sea por software: sin eso las
 // capturas automáticas salen sin sombras y a 65 % y no sirven para juzgar luz.
 const forzarHQ=new URLSearchParams(location.search).has('hq'),software=!forzarHQ&&/SwiftShader|llvmpipe|Software/i.test((()=>{const gl=renderer.getContext(),ext=gl.getExtension('WEBGL_debug_renderer_info');return ext?gl.getParameter(ext.UNMASKED_RENDERER_WEBGL):'';})());
 renderer.setSize(innerWidth,innerHeight);renderer.setPixelRatio(software?.65:Math.min(devicePixelRatio,1.5,1920/innerWidth));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.24;renderer.shadowMap.enabled=!software;renderer.shadowMap.type=THREE.PCFShadowMap;renderer.info.autoReset=false;container.appendChild(renderer.domElement);
 // Sin mapa de entorno todo MeshStandardMaterial se ve de plástico: no tiene
 // nada que reflejar, así que la madera, la loza y la piel salen planas. Una
 // habitación sintética (va en el bundle, no hay que bajar nada) les da forma
 // y brillo; bajita, porque es de noche y la luz la pone el bombillo.
 /* El entorno ya no es un estudio blanco (eso era lo que hacía que todo se viera de
   computadora): lo arma atmosfera.js con la noche, el bombillo y la luz fría del colmado. */
 const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,.8,-.15);controls.enableDamping=true;controls.dampingFactor=.065;controls.enablePan=false;controls.minDistance=.8;controls.maxDistance=4.6;controls.minPolarAngle=.25;controls.maxPolarAngle=Math.PI*.48;controls.update();
 // Atardecer: el cielo todavía da una luz pareja y lila, pero baja (a 1.05 lo aplastaba todo),
 // así el bombillo sigue siendo la luz que manda en la mesa.
 const CIELO=.5,cielo=new THREE.HemisphereLight('#a3a8d8','#6a4e3c',CIELO);scene.add(cielo);const resplandor=new THREE.DirectionalLight('#ffa06a',.55);resplandor.position.set(-6,2.6,-9);scene.add(resplandor);
 /* El bombillo cuelga a 1,3 m del paño, como en cualquier mesa de dominó: un charco de luz cálida
   sobre la mesa y la gente, y el resto del patio en penumbra. Antes colgaba a 3,7 m y la luz era pareja. */
 const bulbLight=new THREE.SpotLight('#ffc98a',5.2,7,Math.PI*.32,.6,2);bulbLight.position.set(0,DIM.surfaceY+1.26,0);bulbLight.target.position.set(0,0,0);const relleno=new THREE.PointLight('#ffc07a',.45,3.2,2);relleno.position.set(0,DIM.surfaceY+1.2,0);scene.add(relleno);bulbLight.castShadow=true;/* Sombra enfocada (fov ~60° y no 155°): ~1 mm por texel en la mesa. normalBias va en metros
   del mundo en r186: con .035 el paño se probaba 3,5 cm por encima y nada tenía sombra de contacto. */
 bulbLight.shadow.mapSize.set(software?1024:2048,software?1024:2048);bulbLight.shadow.focus=.52;bulbLight.shadow.bias=-.0002;bulbLight.shadow.normalBias=.004;bulbLight.shadow.radius=3;bulbLight.shadow.camera.near=.2;bulbLight.shadow.camera.far=4;scene.add(bulbLight,bulbLight.target);
 /* Adentro, luz fría de tubo fluorescente; afuera, el bombillo cálido: ese contraste es el colmado cuando cae la tarde. */
 const storeGlow=new THREE.PointLight('#cfeee0',13,9,2);storeGlow.position.set(0,2.5,-3.5);scene.add(storeGlow);
 {const tubo=new THREE.Mesh(new THREE.BoxGeometry(1.2,.03,.03),new THREE.MeshStandardMaterial({color:'#e6fff4',emissive:'#e6fff4',emissiveIntensity:4}));tubo.position.set(0,3.12,-3.6);scene.add(tubo);}
 const materials=new Map(),batches=new Map();
 function mat(color,roughness=.85,metalness=0){const key=color+','+roughness+','+metalness;if(!materials.has(key))materials.set(key,new THREE.MeshStandardMaterial({color,roughness,metalness}));return materials.get(key);}
 function staticGeo(geo,material,pos,rot=[0,0,0],scale=[1,1,1]){const key=material.uuid;if(!batches.has(key))batches.set(key,{material,geos:[]});const m=new THREE.Matrix4().compose(v3(...pos),new THREE.Quaternion().setFromEuler(new THREE.Euler(...rot)),v3(...scale));geo.applyMatrix4(m);batches.get(key).geos.push(geo);}
 function box(x,y,z,w,h,d,color,rotation=0){staticGeo(new THREE.BoxGeometry(w,h,d),typeof color==='string'?mat(color):color,[x,y,z],[0,rotation,0]);}
 function cylinder(x,y,z,rt,rb,h,color,segments=10,rot=[0,0,0]){staticGeo(new THREE.CylinderGeometry(rt,rb,h,segments),typeof color==='string'?mat(color):color,[x,y,z],rot);}
 function texture(draw,w=512,h=512){const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());return t;}
 let seed=191;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 const woodtex=texture((c,w,h)=>{c.fillStyle='#65432b';c.fillRect(0,0,w,h);for(let i=0;i<700;i++){c.strokeStyle=`rgba(${random()>.5?'170,122,70':'35,22,14'},${.08+random()*.2})`;c.lineWidth=.3+random()*2;c.beginPath();const y=random()*h;c.moveTo(0,y);for(let x=0;x<w;x+=20)c.lineTo(x,y+Math.sin(x*.013+i)*3);c.stroke();}});
 const wood=new THREE.MeshStandardMaterial({map:woodtex,roughness:.65,color:'#e7bc8c'}),darkwood=mat('#4c3022',.75),teal=mat('#287770'),cream=mat('#d2c5a2'),coral=mat('#3d938e');

 // Loseta hidráulica: el piso de cualquier colmado. Antes era un marrón liso en
 // cuadros de 2 m, que desde la cámara se leía como cartón. Ahora 2×2 losetas de
 // ~45 cm con cuartos de círculo en las esquinas — al juntarse cuatro forman la
 // roseta —, rombo al centro, junta y desgaste. Colores apagados: es de noche y
 // el piso acompaña, no protagoniza. La primera versión, a 30 cm y a todo
 // color, era lo más brillante de la pantalla y le robaba la mesa al juego.
 const groundTex=texture((c,w,h)=>{const s=w/2,crema='#c4b99f',barro='#8d6450',azul='#4f6763',oscuro='#3a3630';
  for(let ty=0;ty<2;ty++)for(let tx=0;tx<2;tx++){const x0=tx*s,y0=ty*s;c.save();c.beginPath();c.rect(x0,y0,s,s);c.clip();
   c.fillStyle=crema;c.fillRect(x0,y0,s,s);
   for(const [cx,cy] of [[x0,y0],[x0+s,y0],[x0,y0+s],[x0+s,y0+s]]){
    c.strokeStyle=barro;c.lineWidth=s*.04;c.beginPath();c.arc(cx,cy,s*.42,0,Math.PI*2);c.stroke();
    c.fillStyle=azul;c.beginPath();c.arc(cx,cy,s*.13,0,Math.PI*2);c.fill();
    c.strokeStyle=crema;c.lineWidth=s*.02;c.beginPath();c.arc(cx,cy,s*.11,0,Math.PI*2);c.stroke();}
   const mx=x0+s/2,my=y0+s/2,rombo=(r,col)=>{c.fillStyle=col;c.beginPath();c.moveTo(mx,my-r);c.lineTo(mx+r,my);c.lineTo(mx,my+r);c.lineTo(mx-r,my);c.closePath();c.fill();};
   rombo(s*.2,barro);rombo(s*.13,crema);rombo(s*.07,oscuro);
   c.restore();c.strokeStyle='#7e7563';c.lineWidth=3;c.strokeRect(x0+1.5,y0+1.5,s-3,s-3);}
  for(let i=0;i<9000;i++){c.fillStyle=random()>.5?'rgba(235,228,205,.07)':'rgba(30,28,24,.09)';c.fillRect(random()*w,random()*h,1+random()*2,1+random()*2);}
  for(let i=0;i<40;i++){const g=c.createRadialGradient(0,0,0,0,0,1),x=random()*w,y=random()*h,r=20+random()*90;
   c.save();c.translate(x,y);c.scale(r,r);g.addColorStop(0,'rgba(40,34,26,.10)');g.addColorStop(1,'rgba(40,34,26,0)');c.fillStyle=g;c.fillRect(-1,-1,2,2);c.restore();}
 },1024,1024);groundTex.wrapS=groundTex.wrapT=THREE.RepeatWrapping;groundTex.repeat.set(20.6/.9,25/.9);
 // El piso de losetas llega hasta el contén; después la calle (antes el piso la tapaba entera).
 box(-5.7,-.10,-4.575,20.6,.2,15.85,new THREE.MeshStandardMaterial({map:groundTex,roughness:.86,color:'#9d937f'}));box(0,-.2,8.5,40,.1,10.3,'#2b3133');box(0,-.075,3.45,40,.15,.2,'#a8a391');
 for(let i=-10;i<11;i++)box(i*1.8,-.146,6.3,.7,.008,.06,'#b9ad83');
 // The colmado is a room: solid walls, inset shelving and an open front.
 box(0,1.6,-5.1,7.5,3.4,.2,teal);box(-3.8,1.6,-3.85,.2,3.4,2.7,teal);box(3.8,1.6,-3.85,.2,3.4,2.7,teal);
 box(-3.48,1.1,-2.52,.7,2.3,.32,teal);box(3.45,1.1,-2.52,.8,2.3,.32,teal);
 box(0,2.95,-2.52,7.5,.42,.35,coral);box(0,3.24,-3.7,8,.12,4.4,'#435451');
 for(let i=0;i<30;i++)box(-4+i*.276,3.15,-3.7,.028,.055,4.6,'#82928a');
 box(0,.70,-4.24,3.9,1.40,.62,wood);box(0,1.43,-4.2,4.08,.10,.78,wood);
 for(let row=0;row<3;row++){box(-.6,1.58+row*.48,-4.78,5.8,.065,.38,wood);box(-.6,1.84+row*.48,-4.98,5.8,.48,.065,'#443e30');}
 box(2.95,1.02,-4.55,1.02,2.1,.8,'#d0ceb8');box(2.95,1.12,-4.11,.84,1.55,.035,'#254c51');
 
 const bottles=[];for(let col=0;col<29;col++)bottles.push({pos:[-3.18+col*.182,2.095,-4.69],scale:.70+(col%5)*.07,color:['#566641','#b0762a','#2e5a45','#7a3024','#c9b36a','#3b4f7a'][(col*7)%6]});
 const bottleGeo=new THREE.LatheGeometry([new THREE.Vector2(0,0),new THREE.Vector2(.036,0),new THREE.Vector2(.043,.025),new THREE.Vector2(.043,.17),new THREE.Vector2(.019,.205),new THREE.Vector2(.017,.285),new THREE.Vector2(.021,.29),new THREE.Vector2(.021,.305),new THREE.Vector2(0,.31)],12);
 bottles.forEach(b=>staticGeo(bottleGeo.clone(),mat(b.color,.3),b.pos,[0,0,0],[b.scale,b.scale,b.scale]));
 // Crates, patio seating, and warm windows down the street.
 for(const [x,z,c] of [[-3.1,-1.9,'#a8483a']]){for(let j=0;j<3;j++){box(x,.19+j*.34,z,.52,.30,.40,c);for(let k=0;k<5;k++)box(x-.2+k*.1,.18+j*.34,z+.204,.055,.16,.015,'#2c3025');}}
 for(let i=0;i<5;i++){const x=-7-i*3.5;box(x,1.5,-3.0,3.1,3.0,3.2,['#d9a35c','#7fb1a4','#d8c7a2','#c98d7c','#a6bf8e'][i]);box(x,2.2,-1.38,1.0,.8,.045,'#b59961');box(x,2.2,-1.35,.045,.86,.055,'#273e37');box(x,.98,-1.38,.9,1.9,.04,'#354e49');}
 for(let i=0;i<4;i++){cylinder(-5-i*5,2.3,-1.0,.08,.09,4.6,'#665443');box(-5-i*5,4.2,-1.0,1.8,.09,.09,'#514b3d');}
 function cable(a,b,mid,color='#202d28'){const curve=new THREE.QuadraticBezierCurve3(v3(...a),v3(...mid),v3(...b));staticGeo(new THREE.TubeGeometry(curve,20,.008,4,false),mat(color),[0,0,0]);}
 /* Guirnaldas de bombillitos sobre el patio: del dintel del colmado a dos palos al frente, y entre
   los palos. Cada bombillito cuelga del cable mismo (antes seguían una curva que no era la del cable). */
 const bombillitos=[];for(const x of [-1.95,1.95]){cylinder(x,1.45,2.55,.035,.045,2.9,'#5b4a38',8);}
 for(const [a,b,sag] of [[[-2.7,2.9,-2.45],[-1.95,2.85,2.55],.5],[[2.7,2.9,-2.45],[1.95,2.85,2.55],.5],[[-1.95,2.85,2.55],[1.95,2.85,2.55],.32]]){const A=v3(...a),B=v3(...b),M=A.clone().lerp(B,.5);M.y-=sag*2;const curva=new THREE.QuadraticBezierCurve3(A,M,B);staticGeo(new THREE.TubeGeometry(curva,24,.006,4,false),mat('#1c2320'),[0,0,0]);const n=Math.round(A.distanceTo(B)/.42);for(let k=1;k<n;k++){const q=curva.getPointAt(k/n);bombillitos.push(q.setY(q.y-.035));}}
 {const g=new THREE.SphereGeometry(.022,10,8);g.scale(1,1.3,1);const colores=['#ffd89a','#ffc27a','#ffe3a8'],m=new THREE.InstancedMesh(g,new THREE.MeshBasicMaterial({color:new THREE.Color(4.5,4.5,4.5)}),bombillitos.length),o=new THREE.Object3D();bombillitos.forEach((q,i)=>{o.position.copy(q);o.updateMatrix();m.setMatrixAt(i,o.matrix);m.setColorAt(i,new THREE.Color(colores[i%colores.length]));});scene.add(m);}
 cable([0,3.22,-1.6],[0,3.19,0],[0,3.02,-.8]);
 // Light catches a little metal awning and the leaves; no flat photo wall.
 const foliage=new THREE.Group();foliage.position.set(4.3,0,-1.7);scene.add(foliage);const trunk=new THREE.Mesh(new THREE.CylinderGeometry(.1,.15,4.5,9),mat('#696047'));trunk.position.y=2.25;foliage.add(trunk);
 for(let i=0;i<9;i++){const leaf=new THREE.Mesh(new THREE.SphereGeometry(1,10,5),mat(i%2?'#4a654c':'#344e3d'));leaf.scale.set(.27,.075,1.5);leaf.position.set(Math.sin(i*TAU/9)*.72,4.35,Math.cos(i*TAU/9)*.72);leaf.rotation.set(.23,i*TAU/9,0);foliage.add(leaf);}
 // Physical game table.
 const barniz=new THREE.MeshPhysicalMaterial({map:woodtex,color:'#d9a877',roughness:.5,clearcoat:.55,clearcoatRoughness:.28});
 const tableTop=new THREE.Mesh(new RoundedBoxGeometry(DIM.tableWidth,DIM.tableThickness,DIM.tableWidth,3,.035),barniz);tableTop.position.y=DIM.tableCenterY;tableTop.castShadow=true;tableTop.receiveShadow=true;scene.add(tableTop);
 /* Paño de verdad: trama fina, un poco de pelusa que brilla a contraluz (sheen) y el
   desgaste de años justo donde se apoyan las manos y se arrastran las fichas. */
 const pañoTex=texture((c,w,h)=>{c.fillStyle='#2f5b47';c.fillRect(0,0,w,h);
  for(let y=0;y<h;y+=2)for(let x=0;x<w;x+=2){const v=(random()-.5)*14,k=((x>>1)+(y>>1))%2?4:-4;c.fillStyle=`rgb(${47+v+k},${91+v+k},${71+v+k})`;c.fillRect(x,y,2,2);}
  for(let i=0;i<4;i++){const a=i*Math.PI/2,cx=w/2+Math.sin(a)*w*.36,cy=h/2+Math.cos(a)*h*.36,g=c.createRadialGradient(cx,cy,0,cx,cy,w*.2);g.addColorStop(0,'rgba(120,150,120,.16)');g.addColorStop(1,'rgba(120,150,120,0)');c.fillStyle=g;c.fillRect(0,0,w,h);}
  const g=c.createRadialGradient(w/2,h/2,w*.1,w/2,h/2,w*.62);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.28)');c.fillStyle=g;c.fillRect(0,0,w,h);},512,512);
 const felt=new THREE.Mesh(new RoundedBoxGeometry(DIM.feltWidth,.012,DIM.feltWidth,2,.02),new THREE.MeshPhysicalMaterial({map:pañoTex,roughness:.97,sheen:.8,sheenRoughness:.55,sheenColor:new THREE.Color('#9fc7a8')}));felt.position.y=DIM.feltCenterY;felt.receiveShadow=true;scene.add(felt);
 const pata=DIM.tableWidth/2-.07;for(const x of [-pata,pata])for(const z of [-pata,pata])box(x,.35,z,.075,.68,.075,darkwood);
 // Parejas a simple vista: cada pareja tiene su color (rojo y azul, los de la
 // bandera) en las sillas, en un filete del paño delante de cada uno y en su
 // etiqueta. Los compañeros se sientan enfrente, así que el paño queda con dos
 // lados rojos enfrentados y dos azules: se lee de un vistazo quién va con quién.
 const TEAM=['#C8402F','#6FB7C9'];  // los de la marca: salsa y cielo
 for(let i=0;i<4;i++){const [x,z,ang]=seats[i],r=DIM.feltWidth/2-.012,band=new THREE.Mesh(new THREE.PlaneGeometry(DIM.feltWidth*.72,.009),new THREE.MeshStandardMaterial({color:TEAM[i%2],roughness:.9}));band.rotation.set(-Math.PI/2,0,ang);band.position.set(x*r/DIM.seatDistance,DIM.surfaceY+.0006,z*r/DIM.seatDistance);band.receiveShadow=true;scene.add(band);}
 // Guano: el asiento tejido de palma de la silla de colmado. Cuadros alternos de
 // tres hebras, en horizontal y en vertical, con variación de tono por hebra.
 const guano=new THREE.MeshStandardMaterial({roughness:.92,map:texture((c,w,h)=>{c.fillStyle='#8f7446';c.fillRect(0,0,w,h);const n=12,t=w/n;
  for(let gy=0;gy<n;gy++)for(let gx=0;gx<n;gx++){const horiz=(gx+gy)%2===0;for(let k=0;k<3;k++){const tono=150+random()*45|0;
   c.fillStyle=`rgb(${tono+30},${tono+8},${tono-45})`;const o=k*t/3+t*.04,g=t/3-t*.08;
   if(horiz)c.fillRect(gx*t+1,gy*t+o,t-2,g);else c.fillRect(gx*t+o,gy*t+1,g,t-2);}}
  c.fillStyle='rgba(40,28,14,.18)';for(let q=0;q<=n;q++){c.fillRect(q*t-1,0,2,h);c.fillRect(0,q*t-1,w,2);}},256,256)});
 for(let i=0;i<4;i++){const [x,z,ang]=seats[i],group=new THREE.Group();group.position.set(x,0,z);group.rotation.y=ang;scene.add(group);const madera=mat(i%2?'#5e9fb2':'#b53f2e',.62);const add=(w,h,d,px,py,pz,m=madera,r=.008)=>{const p=v3(px,py,pz).applyAxisAngle(v3(0,1,0),ang).add(v3(x,0,z));staticGeo(new RoundedBoxGeometry(w,h,d,2,r),m,p.toArray(),[0,ang,0]);};add(DIM.chairSeatWidth-.04,.035,.5,0,DIM.chairSeatY,0,guano,.01);for(const sx of [-1,1])add(.04,.05,.54,sx*(DIM.chairSeatWidth/2-.02),DIM.chairSeatY-.005,0);for(const sz of [-1,1])add(DIM.chairSeatWidth,.05,.04,0,DIM.chairSeatY-.005,sz*.25);for(const lx of [-.24,.24])for(const lz of [-.21,.21])add(.04,DIM.chairSeatY,.04,lx,DIM.chairSeatY/2,lz);for(const lx of [-.24,.24])add(.024,.024,.42,lx,.15,0);add(.48,.024,.024,0,.15,.21);for(const lx of [-.24,.24])add(.04,.52,.04,lx,DIM.chairSeatY+.26,-.23);for(const ty of [.2,.33,.46])add(.46,ty===.46?.07:.045,.022,0,DIM.chairSeatY+ty,-.23);}
 function sign(text,width,height,bg,fg,size=60){const t=texture((c,w,h)=>{c.fillStyle=bg;c.fillRect(0,0,w,h);c.fillStyle=fg;c.textAlign='center';c.textBaseline='middle';c.font=`bold ${size}px Georgia`;c.fillText(text,w/2,h/2);},1024,256);return new THREE.Mesh(new THREE.PlaneGeometry(width,height),new THREE.MeshBasicMaterial({map:t}));}
 const storeSign=sign('COLMADO  LA ESQUINA',4.8,.38,'#a05d42','#f8e8b9',64);storeSign.position.set(0,2.94,-2.33);scene.add(storeSign);
 const tableLogo=sign('MESA',.11,.029,'#284e3e','#81906b',77);{const c=document.createElement('canvas');c.width=512;c.height=136;const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;
  // Impreso en el paño, no una calcomanía: letra de la marca en un verde apenas más claro, sin fondo.
  const pintar=()=>{const g=c.getContext('2d');g.clearRect(0,0,512,136);g.font=`96px ${document.fonts?.check?.('96px Shrikhand')?'Shrikhand':'Georgia'}`;g.textAlign='center';g.textBaseline='middle';g.fillStyle='rgba(170,205,170,.42)';g.fillText('Mesa',256,72);t.needsUpdate=true;};
  pintar();document.fonts?.load?.('96px Shrikhand').then(pintar).catch(()=>{});tableLogo.material=new THREE.MeshStandardMaterial({map:t,transparent:true,depthWrite:false,roughness:1});}tableLogo.rotation.x=-Math.PI/2;tableLogo.position.set(0,DIM.surfaceY+.001,.30);scene.add(tableLogo);
 // Shop fan, rotating in actual scene coordinates.
 const fan=new THREE.Group();fan.position.set(-.9,2.62,-3.45);fan.rotation.x=-Math.PI/2;scene.add(fan);cylinder(-.9,2.90,-3.45,.015,.015,.56,'#777a68',8);cylinder(-.9,3.16,-3.45,.075,.075,.025,'#767763',12);const hub=new THREE.Mesh(new THREE.SphereGeometry(.075,12,8),mat('#41493d'));fan.add(hub);for(let i=0;i<5;i++){const blade=new THREE.Mesh(new THREE.BoxGeometry(.13,.50,.025),mat('#85856e',.88,.05));blade.position.set(Math.sin(i*TAU/5)*.285,Math.cos(i*TAU/5)*.285,0);blade.rotation.z=-i*TAU/5;fan.add(blade);}
 // A quiet moto crossing the street. It is a visible passing prop, not traffic AI.
 const moto=new THREE.Group();moto.position.set(-12,.05,5.2);scene.add(moto);for(const x of [-.36,.36]){const wheel=new THREE.Mesh(new THREE.TorusGeometry(.19,.038,7,14),mat('#182221'));wheel.position.set(x,.2,0);moto.add(wheel);}const bikeBody=new THREE.Mesh(new RoundedBoxGeometry(.65,.17,.20,2,.04),mat('#823e2f',.45,.25));bikeBody.position.y=.49;moto.add(bikeBody);const seatMesh=new THREE.Mesh(new THREE.BoxGeometry(.35,.06,.22),mat('#202725'));seatMesh.position.set(-.08,.61,0);moto.add(seatMesh);const handle=new THREE.Mesh(new THREE.CylinderGeometry(.015,.015,.45,6),mat('#8c9c96',.4,.5));handle.position.set(.32,.59,0);handle.rotation.z=-.3;moto.add(handle);
 // Weathered surfaces and everyday groceries reuse the existing scene assets.
 const colmado=dressColmado({scene,texture,mat,box,cylinder,random,teal,wood,storeSign});
 const esquina=armarEsquina({scene,texture,mat,box,cylinder,staticGeo,random,renderer});
 armarBarrio({scene,random});
 // Merge static architecture by material instead of hundreds of draw calls.
 for(const {material,geos} of batches.values()){const merged=mergeGeometries(geos.some(g=>!g.index)?geos.map(g=>g.index?g.toNonIndexed():g):geos,false);/* RoundedBoxGeometry no tiene índice: si hay mezcla, todo va sin índice */if(merged){const mesh=new THREE.Mesh(merged,material);mesh.receiveShadow=true;merged.computeBoundingBox();mesh.castShadow=merged.boundingBox.distanceToPoint(v3(0,.8,0))<1.6&&merged.boundingBox.getSize(v3()).length()<8;scene.add(mesh);}geos.forEach(g=>g.dispose());}
 const tileGroup=new THREE.Group(),rackGroup=new THREE.Group();scene.add(tileGroup,rackGroup);
 /* Fichas de hueso pulido: base marfil con laca (clearcoat), el lomo un poco más oscuro, los
   puntos negros hundidos y el clavito de bronce en el centro, como las de verdad. */
 const tileGeo=new RoundedBoxGeometry(DIM.tileLength,DIM.tileThickness,DIM.tileWidth,3,.0024),ivory=new THREE.MeshPhysicalMaterial({color:'#ede5d2',roughness:.5,clearcoat:.3,clearcoatRoughness:.4}),dark=new THREE.MeshPhysicalMaterial({color:'#e2dac6',roughness:.42,clearcoat:.7,clearcoatRoughness:.3});
 const clavo=new THREE.MeshStandardMaterial({color:'#b98b3e',roughness:.28,metalness:1}),clavoGeo=new THREE.CylinderGeometry(.0019,.0019,.0009,12);
 const ink=new THREE.MeshStandardMaterial({color:'#0b0a09',roughness:.55}),seamMat=new THREE.MeshStandardMaterial({color:'#2a2622',roughness:.6});
 const pipGeo=new THREE.CylinderGeometry(DIM.pipRadius,DIM.pipRadius,.0007,14),seamGeo=new THREE.BoxGeometry(.0014,.0005,DIM.tileWidth*.8);
 const sharedGeometry=new Set([tileGeo,pipGeo,seamGeo,clavoGeo]),sharedMaterials=new Set([ivory,dark,ink,seamMat,clavo]);
 const fisicos=[barniz,felt.material,ivory,dark].map(m=>[m,{clearcoat:m.clearcoat,sheen:m.sheen}]);
 function domino(a,b,back=false){
  const g=new THREE.Group(),body=new THREE.Mesh(tileGeo,back?dark:ivory);body.castShadow=true;body.receiveShadow=true;g.add(body);
  if(!back){
   const positions=[];[a,b].forEach((n,part)=>pips[n].forEach(k=>positions.push(v3((part===0?-1:1)*DIM.tileLength/4+(k%3-1)*DIM.pipColumnSpacing,DIM.tileThickness/2+.0005, (Math.floor(k/3)-1)*DIM.pipRowSpacing))));
   if(positions.length){const dots=new THREE.InstancedMesh(pipGeo,ink,positions.length),m=new THREE.Matrix4();positions.forEach((p,i)=>dots.setMatrixAt(i,m.makeTranslation(p.x,p.y,p.z)));g.add(dots);}
   const seam=new THREE.Mesh(seamGeo,seamMat);seam.position.y=DIM.tileThickness/2+.0002;g.add(seam);const pin=new THREE.Mesh(clavoGeo,clavo);pin.position.y=DIM.tileThickness/2+.0004;g.add(pin);
  }return g;
 }
 function boardPosition(p){return v3(p.x,DIM.surfaceY+DIM.tileThickness/2+.001,p.z);}
 const ring=new THREE.Mesh(new THREE.TorusGeometry(.20,.006,5,38),new THREE.MeshBasicMaterial({color:'#e8bf70',transparent:true,opacity:.7}));ring.rotation.x=-Math.PI/2;ring.position.y=.027;scene.add(ring);
 const characters=[],templates=[],crowd=[],drinks=[];const loader=new GLTFLoader();let loaded=0,total=4,failed=[];
 drinks.push(...servirBebidas(scene));
 /* Párpados de verdad. Con tan pocos vértices en los ojos, el morph de parpadeo
  solo entrecierra: un párpado del color de la piel de cada quien (guardado en
  el modelo) baja por encima del ojo y lo tapa. Se ubica cada cuadro en el
  vértice del ojo ya deformado por el esqueleto. */
 const _pv=v3(),_pr=v3(),_pu=v3(),_pf=v3(),_pm=new THREE.Matrix4(),_ph=v3(),_pfr=v3();
 function ponerCara(actor){
  let sm=null;actor.root.traverse(o=>{if(o.isSkinnedMesh&&o.morphTargetDictionary&&!sm)sm=o;});
  if(!sm||sm.morphTargetDictionary.parpadeo==null)return;
  actor.cara={mesh:sm,iP:sm.morphTargetDictionary.parpadeo,iS:sm.morphTargetDictionary.sonrisa};
  const pos0=sm.geometry.attributes.position,bocaD=sm.userData?.boca;
  if(bocaD){let m=1e9,kb=0;for(let i=0;i<pos0.count;i++){const d=(pos0.getX(i)-bocaD[0])**2+(pos0.getY(i)-bocaD[1])**2+(pos0.getZ(i)-bocaD[2])**2;if(d<m){m=d;kb=i;}}actor.bocaMundo=out=>{sm.skeleton.update();return sm.getVertexPosition(kb,out).applyMatrix4(sm.matrixWorld);};}
  const ojos=sm.userData?.ojos,color=sm.userData?.parpado;if(!ojos||!color)return;
  const pos=sm.geometry.attributes.position,cerca=o=>{let m=1e9,k=0;for(let i=0;i<pos.count;i++){const d=(pos.getX(i)-o[0])**2+(pos.getY(i)-o[1])**2+(pos.getZ(i)-o[2])**2;if(d<m){m=d;k=i;}}return k;};
  const geo=new THREE.PlaneGeometry(.027,.0125,8,4);geo.translate(0,-.00625,0);
  const pa=geo.attributes.position,cols=[];for(let i=0;i<pa.count;i++){const x=pa.getX(i)/.0135,y=-pa.getY(i)/.0125;pa.setZ(i,.0032*Math.cos(x*Math.PI/2)*(.5+.5*y));const f=y>.85?.45:1;cols.push(f,f,f);}
  geo.setAttribute('color',new THREE.Float32BufferAttribute(cols,3));geo.computeVertexNormals();
  const matP=new THREE.MeshStandardMaterial({color:new THREE.Color().setRGB(...color,THREE.SRGBColorSpace),roughness:.7,vertexColors:true});
  actor.parpados=ojos.map(o=>{const m=new THREE.Mesh(geo,matP);m.visible=false;m.frustumCulled=false;scene.add(m);return {m,k:cerca(o)};});
 }
 function moverParpados(actor){
  const P=actor.parpados;if(!P||!actor.cara)return;const s=actor.parpadeo||0;
  if(s<.03){for(const p of P)p.m.visible=false;return;}
  const sm=actor.cara.mesh;sm.skeleton.update();
  const a=sm.getVertexPosition(P[0].k,_pv).applyMatrix4(sm.matrixWorld).clone(),b=sm.getVertexPosition(P[1].k,_pv).applyMatrix4(sm.matrixWorld).clone();
  actor.head.getWorldPosition(_ph);actor.front.getWorldPosition(_pfr);_pf.subVectors(_pfr,_ph).normalize();
  _pr.subVectors(b,a).normalize();_pu.crossVectors(_pf,_pr).normalize();if(_pu.y<0)_pu.negate();_pr.crossVectors(_pu,_pf).normalize();
  _pm.makeBasis(_pr,_pu,_pf);
  for(const [p,o] of [[P[0],a],[P[1],b]]){p.m.visible=true;p.m.quaternion.setFromRotationMatrix(_pm);p.m.position.copy(o).addScaledVector(_pu,.0052).addScaledVector(_pf,.0024);p.m.scale.set(1,s,1);}
 }
 async function loadPerson(index,name){try{onProgress(`Seating ${['Don Rafa','Marisol','Luis','Carmen'][index]}…`,loaded/total);const gltf=await loader.loadAsync(`/models/${name}.glb`);templates[index]=gltf;
  // La pose de reposo del modelo es de pie: la guarda para la gente que pasa (transeuntes.js).
  gltf.reposo=new Map(capturePose(gltf.scene).map(b=>[b.bone.name,b]));
  const root=gltf.scene,holder=new THREE.Group();holder.add(root);const mixer=new THREE.AnimationMixer(root);if(gltf.animations[0])mixer.clipAction(gltf.animations.find(a=>a.name==='Seated')||gltf.animations[0]).play();mixer.setTime(DIM.neutralPoseTime);root.updateMatrixWorld(true);root.traverse(o=>{if(o.isSkinnedMesh)o.computeBoundingBox();if(o.isMesh){o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;o.material.roughness=.83;}});
  // Keep the models' anatomical scale; anchor the pelvis over the chair and
  // ground the feet at a measured neutral pose, not an arbitrary loop frame.
  const b=new THREE.Box3().setFromObject(root),hips=root.getObjectByName('Hips'),hp=hips?.getWorldPosition(v3())||b.getCenter(v3());root.position.set(-hp.x,-b.min.y,-hp.z);const [x,z,a]=seats[index];holder.position.set(x,0,z);holder.rotation.y=a;scene.add(holder);
  characters[index]={root,holder,index,pose:capturePose(root),head:root.getObjectByName('Head'),neck:root.getObjectByName('neck'),front:root.getObjectByName('headfront'),chest:root.getObjectByName('Spine'),hips:root.getObjectByName('Hips'),lomo:root.getObjectByName('Spine02'),muslos:[root.getObjectByName('LeftUpLeg'),root.getObjectByName('RightUpLeg')],hombros:[[1,root.getObjectByName('LeftShoulder')],[-1,root.getObjectByName('RightShoulder')]],spine:root.getObjectByName('Spine01'),reaction:null,brazos:['Left','Right'].map(lado=>({lado,hombro:root.getObjectByName(lado+'Shoulder'),brazo:root.getObjectByName(lado+'Arm'),antebrazo:root.getObjectByName(lado+'ForeArm'),mano:root.getObjectByName(lado+'Hand')}))};characters[index].bebida=drinks.find(d=>d.index===index);ponerCara(characters[index]);loaded++;onProgress(loaded===4?'The table is ready.':`${loaded} of 4 seats ready`,loaded/total);if(crowd.length===0&&currentCrowd>0)setCrowd(currentCrowd);
 }catch(e){failed.push(name);console.error('Character load failed',name,e);onProgress(`Could not load ${name}. Reload to retry.`,loaded/total);}}
 const ready=Promise.all(['rafa-upright','marisol','luis-upright','carmen'].map((name,i)=>loadPerson(i,name)));
 // La gente que pasa: con los cuerpos de Marisol, Luis y Carmen, otra ropa y otra piel; con el de Don Rafa,
 // el colmadero. En una tele sin GPU, solo el patio.
 let gente=null;ready.then(()=>{if(!disposed)gente=crearTranseuntes({scene,camera,renderer,pocos:software,cuerpos:[['rafa-upright',0],['luis-upright',2],['marisol',1],['carmen',3]].filter(([,i])=>templates[i]).map(([nombre,i])=>({nombre,gltf:templates[i]}))});});
 let foco=null,fin=null,finKey='',extremos=null;
 const atmos=crearAtmosfera({scene,renderer,camera,controls,software,bulbLight});atmos.calidad('high');const habla=new Set(),hablaTipo=new Map(),cabezas=[0,1,2,3].map(()=>v3());const alHablar=e=>{const d=e.detail||{};if(d.active){habla.add(d.seat);hablaTipo.set(d.seat,d.type);}else habla.delete(d.seat);};window.addEventListener('mesa:botvoice',alHablar);
 let currentView=null,currentCrowd=0,boardKey='',lastHand=0,mode='attract',camTween=null,animations=[],lastMove=0,dealUntil=0;
 function clear(group){while(group.children.length){const c=group.children.pop();c.parent=null;c.traverse(o=>{if(o.isMesh&&!sharedGeometry.has(o.geometry))o.geometry.dispose();if(o.isMesh&&!sharedMaterials.has(o.material))o.material.dispose();});}}
 function setCrowd(count){currentCrowd=count;const target=Math.min(8,count);for(let i=crowd.length-1;i>=target;i--){scene.remove(crowd[i].holder);crowd.pop();}
  while(crowd.length<target&&templates.filter(Boolean).length){const idx=crowd.length,source=templates[idx%4]||templates.find(Boolean),root=cloneSkeleton(source.scene),holder=new THREE.Group();holder.add(root);const mixer=new THREE.AnimationMixer(root);if(source.animations[0])mixer.clipAction(source.animations.find(a=>a.name==='Seated')||source.animations[0]).play();mixer.setTime(DIM.neutralPoseTime);root.updateMatrixWorld(true);root.traverse(o=>{if(o.isSkinnedMesh)o.computeBoundingBox();if(o.isMesh){o.castShadow=false;o.frustumCulled=false;}});const b=new THREE.Box3().setFromObject(root),hp=root.getObjectByName('Hips')?.getWorldPosition(v3())||b.getCenter(v3());root.position.x-=hp.x;root.position.y-=b.min.y;root.position.z-=hp.z;holder.position.set(-2.5+(idx%4)*1.66,0,-2.5-Math.floor(idx/4)*.65);holder.rotation.y=0;scene.add(holder);
   const chair=new THREE.Mesh(new THREE.BoxGeometry(.56,.06,.54),cream);chair.position.set(0,DIM.chairSeatY,0);holder.add(chair);crowd.push({root,holder,pose:capturePose(root),head:root.getObjectByName('Head'),neck:root.getObjectByName('neck'),front:root.getObjectByName('headfront'),chest:root.getObjectByName('Spine'),spine:root.getObjectByName('Spine01'),index:idx+4});}
 }
 // A tamaño real una ficha mide 5 cm, así que las vistas de juego van cerca:
 // 'table' encuadra la mesa y a los cuatro; 'overhead' pone el tablero a
 // pantalla llena; 'close' mira por encima del hombro; 'seat', desde la silla.
 /* Corte dramático (dominó, capicúa y tranque): cámara baja, al ras de la mesa, desde la
  diagonal entre dos sillas (ahí no hay nadie sentado) y mirando la ficha que cerró la mano.
  A los 3,4 s vuelve a donde estaba. Antes podía caer dentro del cuerpo de un jugador. */
 /* Al girar y alejar a mano, la cámara no se sale de la esquina: nunca detrás de la fachada del
   colmado (ahí no hay nada armado), ni dentro de las casas de al lado, ni bajo el piso. Se corrige
   la posición después de los controles, así el giro se frena contra el borde en vez de saltar. */
 let libre=false;const _off=v3();
 function dentroDelSet(){const p=camera.position,t=controls.target;
  _off.subVectors(p,t);if(_off.length()>4.6)p.copy(t).addScaledVector(_off.normalize(),4.6);
  p.z=Math.max(p.z,-2.1);p.x=THREE.MathUtils.clamp(p.x,-4.9,4.9);p.y=THREE.MathUtils.clamp(p.y,.35,5.2);}
 let sacudida=-1,vuelta=null,distanciaAntes=controls.minDistance;
 function corte(p,seat,golpe){
  if(document.documentElement.classList.contains('reduced'))return;
  let mejor=v3(1,0,1).normalize(),max=-9;
  for(const [dx,dz] of [[1,1],[1,-1],[-1,1],[-1,-1]]){const d=v3(dx,0,dz).normalize(),k=d.x*p.x+d.z*p.z;if(k>max){max=k;mejor=d;}}
  const pos=p.clone().addScaledVector(mejor,.3);
  pos.x=THREE.MathUtils.clamp(pos.x,-.4,.4);pos.z=THREE.MathUtils.clamp(pos.z,-.4,.4);pos.y=DIM.surfaceY+(golpe?.12:.19);
  if(!vuelta)distanciaAntes=controls.minDistance;controls.minDistance=.1;
  vuelta={pos:vuelta?.pos||camera.position.clone(),target:vuelta?.target||controls.target.clone(),at:clock.elapsedTime+3.4};
  camTween={from:camera.position.clone(),to:pos,fromTarget:controls.target.clone(),toTarget:p.clone().setY(p.y+.01),t:0,dur:.45};
 }
 // Encuadres. A tamaño real una ficha mide 5 cm: las vistas de juego van cerca.
 //  table: la mesa y los cuatro, con el colmado y la gente de fondo arriba.
 //  overhead: el tablero entero, con los atriles.  close: por encima del hombro.
 //  seat: desde la silla de quien juega (su cuerpo se esconde para no taparse).
 function setCamera(which='table'){
  controls.minDistance=which==='seat'||which==='close'?.3:.7;controls.minPolarAngle=which==='overhead'?.01:.25;
  if(camera.aspect<.95&&which==='table')which='overhead';
  let pos,target=v3(0,.80,0);
  if(which==='attract'){pos=v3(.75,1.3,4.4);target=v3(-1,1.4,-1.2);}
  else if(which==='overhead'){pos=v3(.001,1.86,.34);target=v3(0,DIM.surfaceY,.02);}
  else if(which==='seat'){pos=v3(0,1.36,.74);target=v3(0,.82,-.12);}
  else if(which==='close'){pos=v3(.62,1.30,1.0);target=v3(-.03,.85,-.08);}
  else{pos=v3(.8,1.89,1.24);target=v3(0,.9,-.2);}   // ~31° hacia abajo (antes 24°): las fichas se ven menos aplastadas y se leen desde el mueble
  if(which!=='attract'&&which!=='seat'&&camera.aspect<1.3){const k=Math.min(2.4,Math.pow(1.6/camera.aspect,.8));pos=target.clone().add(pos.clone().sub(target).multiplyScalar(k));}
  if(characters[0])characters[0].root.visible=which!=='seat';
  vuelta=null;controls.minDistance=Math.min(controls.minDistance,distanciaAntes);
  camTween={from:camera.position.clone(),to:pos,fromTarget:controls.target.clone(),toTarget:target,t:0};
 }

 /* Los atriles: una sola malla de 28 fichas paradas. Cada puesto tiene sus huecos y, cuando
  alguien juega, las demás se corren a llenar el hueco en un cuarto de segundo (antes todas
  saltaban de golpe). */
 const Yax=v3(0,1,0),_qL=new THREE.Quaternion().setFromAxisAngle(v3(1,0,0),.12),_qA=new THREE.Quaternion().setFromAxisAngle(Yax,Math.PI/2),_qB=new THREE.Quaternion().setFromAxisAngle(v3(0,0,1),Math.PI/2);
 const alturaAtril=DIM.tableCenterY+DIM.tableThickness/2+DIM.tileLength/2*Math.cos(.12)+DIM.tileThickness/2*Math.sin(.12)+.001;
 function poseAtril(seat,x,o){const a=seats[seat][2];o.quaternion.setFromAxisAngle(Yax,a).multiply(_qL).multiply(_qA).multiply(_qB);o.position.set(x,alturaAtril,-DIM.rackRadius).applyAxisAngle(Yax,a);return o;}
 const atril=new THREE.InstancedMesh(tileGeo,dark,28);atril.count=0;atril.castShadow=true;atril.receiveShadow=true;atril.frustumCulled=false;rackGroup.add(atril);
 const huecos=[[],[],[],[]],_o=new THREE.Object3D();let cuentas=[0,0,0,0],revelado='';const ocultos=new Set();
 function moverAtriles(dt){
  let n=0;
  for(let s=0;s<4;s++){const c=ocultos.has(s)?0:cuentas[s],h=huecos[s];
   while(h.length<c)h.push((h.length-(c-1)/2)*DIM.rackSpacing);h.length=c;
   for(let j=0;j<c;j++){const meta=(j-(c-1)/2)*DIM.rackSpacing;h[j]+=(meta-h[j])*(1-Math.exp(-dt*10));poseAtril(s,h[j],_o);_o.updateMatrix();atril.setMatrixAt(n++,_o.matrix);}}
  atril.count=n;atril.instanceMatrix.needsUpdate=true;
 }
 const repartoGroup=new THREE.Group();scene.add(repartoGroup);
 const fichas=new Map();let claveMesa='',paseVisto='';
 /* La pila revuelta: 28 fichas boca abajo, ACOSTADAS en el paño y sin encimarse. Antes dos de cada
    tres iban a una y dos fichas de alto sin nada debajo, y el reparto las sacaba a 6 mm del paño:
    se veían flotando. Muestreo con distancia mínima (una ficha girada cabe en 5,8 cm), siempre igual. */
 const PILA=(()=>{let sem=7;const rnd=()=>(sem=sem*16807%2147483647)/2147483647,out=[];let R=.2;
  for(let i=0;i<28;i++){let ok=false;
   for(let k=0;k<600&&!ok;k++){const a=rnd()*Math.PI*2,r=Math.sqrt(rnd())*R,x=Math.cos(a)*r,z=Math.sin(a)*r*.82;
    if(out.every(q=>Math.hypot(q.x-x,q.z-z)>=.058)){out.push({x,z,ry:rnd()*Math.PI});ok=true;}}
   if(!ok){R+=.012;i--;}}
  return out;})();
 const enPaño=DIM.surfaceY+DIM.tileThickness/2+.0003;
 function pila(){for(let i=0;i<28;i++){const d=domino(0,0,true),q=PILA[i];d.position.set(q.x,enPaño,q.z);d.rotation.y=q.ry;tileGroup.add(d);}}
 const suave=p=>p*p*(3-2*p);
 /* Al cerrar la mano, cada quien acuesta lo que le quedó, boca arriba y hacia el centro, como
  se hace en la mesa de verdad: se cuentan los puntos con los ojos. Empieza cuando termina el
  corte de cámara, un asiento detrás del otro. La ficha arranca parada en el atril con la cara
  hacia su dueño y gira sobre su canto de abajo. */
 const _qVolteo=new THREE.Quaternion().setFromAxisAngle(v3(1,0,0),Math.PI),_qRadial=new THREE.Quaternion().setFromAxisAngle(Yax,-Math.PI/2);
 function ensenarManos(view,espera){
  view.revealed.forEach((mano,s)=>{const c=mano.length,a=seats[s][2];
   mano.forEach((f,j)=>{const x=(j-(c-1)/2)*DIM.rackSpacing,d=domino(f.a,f.b);poseAtril(s,x,_o);
    const qFrom=_o.quaternion.clone().multiply(_qVolteo),from=_o.position.clone();
    const to=v3(x,DIM.surfaceY+DIM.tileThickness/2+.001,-DIM.rackRadius+.047).applyAxisAngle(Yax,a),qTo=new THREE.Quaternion().setFromAxisAngle(Yax,a).multiply(_qRadial);
    d.position.copy(from);d.quaternion.copy(qFrom);d.visible=false;tileGroup.add(d);
    animations.push({obj:d,from,to,qFrom,qTo,elapsed:-(espera+s*.3+j*.055),duration:.42,revela:s,ultima:j===c-1});});});
 }

 function update(view,crowdCount=0){
  currentView=view;
  {const cerrada=view&&(view.phase==='handEnd'||view.phase==='seriesEnd')&&view.result,k=cerrada?view.handNo+':'+view.phase:'';if(k&&k!==finKey)fin={t:clock.elapsedTime+.5,team:view.result.team??null};if(!cerrada)fin=null;finKey=k;}
  if(currentCrowd!==crowdCount)setCrowd(crowdCount);
  // Mano nueva, lobby o portada: se arma de cero. Si no, solo entran las fichas nuevas, y una
  // ficha que va volando no se reinicia porque alguien pasó mientras tanto.
  const clave=!view||view.phase==='lobby'?'pila':'mano'+view.handNo;
  if(clave!==claveMesa){claveMesa=clave;clear(tileGroup);fichas.clear();animations=animations.filter(a=>a.reparto);for(const c of characters)if(c)c.jugada=null;if(clave==='pila')pila();}
  if(view&&view.chain?.length){
   const layout=chainLayout(view.chain,view.moves),ev=view.event,cierre=['domino','capicua','tranque'].includes(ev?.type),ultima=view.moves[view.moves.length-1],golpe=ev?.type==='domino'||ev?.type==='capicua';
   // Al cerrar la mano el evento pasa a ser domino/capicua/tranque: la ficha que la cerró es la última jugada.
   const jugadaId=ev?.type==='play'?ev.tile:cierre&&ultima?.type==='play'?ultima.tile:null;
   view.chain.forEach((tile,i)=>{
    if(fichas.has(tile.id))return;
    const d=domino(tile.x,tile.y),hasta=boardPosition(layout[i]);d.position.copy(hasta);d.rotation.y=layout[i].yaw;d.updateMatrix();tileGroup.add(d);fichas.set(tile.id,d);
    if(tile.id!==jugadaId||tile.seat==null)return;
    // La ficha sale parada del atril de quien juega y se acuesta en el camino.
    poseAtril(tile.seat,0,_o);
    const anim={obj:d,from:_o.position.clone(),to:hasta.clone(),qFrom:_o.quaternion.clone(),qTo:d.quaternion.clone(),elapsed:0,duration:golpe?.7:.55,golpe};
    d.position.copy(anim.from);d.quaternion.copy(anim.qFrom);animations.push(anim);
    if(cierre)corte(hasta,tile.seat,golpe);lastMove=performance.now();
    const c=characters[tile.seat];foco={p:hasta.clone(),t:clock.elapsedTime+anim.duration};
    if(c){c.reaction={time:clock.elapsedTime};c.jugada={t0:clock.elapsedTime,obj:d,anim,hasta:hasta.clone()};}
   });
  }
  // Reparto: las 28 salen del montón y van, ya paradas, a su hueco en el atril de cada quien.
  if(view?.phase==='playing'&&view.handNo!==lastHand&&view.moves.length===0){
   lastHand=view.handNo;clear(repartoGroup);animations=animations.filter(a=>!a.reparto);dealUntil=performance.now()+3300;
   for(let s=0;s<4;s++)huecos[s]=Array.from({length:7},(_,j)=>(j-3)*DIM.rackSpacing);
   for(let i=0;i<28;i++){const seat=i%4,slot=Math.floor(i/4),d=domino(0,0,true),q=PILA[i],start=v3(q.x,enPaño,q.z);
    d.position.copy(start);d.rotation.y=q.ry;repartoGroup.add(d);const meta=poseAtril(seat,(slot-3)*DIM.rackSpacing,new THREE.Object3D());
    animations.push({obj:d,from:start,to:meta.position.clone(),qFrom:d.quaternion.clone(),qTo:meta.quaternion.clone(),elapsed:-i*.065,duration:1.1,reparto:true});}
  }
  // Pase: quien pasa toca la mesa dos veces con los nudillos.
  const u=view?.moves?.[view.moves.length-1],clavePase=view?view.handNo+':'+view.moves.length:'';
  if(u?.type==='pass'&&paseVisto!==clavePase){paseVisto=clavePase;const c=characters[u.seat];if(c)c.toque={t0:clock.elapsedTime};}
  {const cerrada=view&&(view.phase==='handEnd'||view.phase==='seriesEnd')&&view.revealed,k=cerrada?'r'+view.handNo:'';
   if(!cerrada){revelado='';ocultos.clear();}
   else if(k!==revelado){revelado=k;const tipo=view.result?.type;ensenarManos(view,tipo==='domino'||tipo==='capicua'?3.4:tipo==='tranque'?2.5:1.2);}}
  cuentas=[0,1,2,3].map(i=>!view||view.phase==='lobby'?0:(view.counts[i]??0));
  ring.visible=false;
  extremos=view?.phase==='playing'&&view.chain?.length?openEnds(view.chain,view.moves):null;
 }

 const clock=new THREE.Clock();let frame=0,fpsFrames=0,fpsTime=0,fps=60,disposed=false,pausado=false,frameId=null,quality='high',visualTime=null,arranque=performance.now(),bajadaAuto=0,bajadaMin=false;
 const DEBUG=new URLSearchParams(location.search).has('debug'),bulbBase=bulbLight.intensity,_lab=v3(),_centroMesa=v3(0,DIM.surfaceY,0);
 function animate(){
  if(disposed||pausado){frameId=null;return;}
  frameId=requestAnimationFrame(animate);
  const rawDt=clock.getDelta(),dt=Math.min(rawDt,.06),t=visualTime??clock.elapsedTime,now=performance.now();
  fpsFrames++;fpsTime+=rawDt;if(fpsTime>1){fps=fpsFrames/fpsTime;fpsFrames=0;fpsTime=0;
   // Si la tele no da, baja sola la calidad una vez (sin posproceso, sombras más baratas).
   if(!forzarHQ&&!bajadaAuto&&quality==='high'&&now-arranque>9000&&now-arranque<30000&&fps<30){bajadaAuto=now;api.quality('low');dispatchEvent(new CustomEvent('mesa:calidad',{detail:'low'}));}
   // Si ni así da (menos de 20 cuadros), un escalón más: menos píxeles todavía. La mesa se ve más suave, pero fluye.
   else if(!forzarHQ&&quality==='low'&&!bajadaMin&&now-(bajadaAuto||arranque)>9000&&now-(bajadaAuto||arranque)<40000&&fps<20){bajadaMin=true;api.quality('min');dispatchEvent(new CustomEvent('mesa:calidad',{detail:'min'}));}}
  frame++;renderer.info.reset();
  const reduced=document.documentElement.classList.contains('reduced');
  if(vuelta&&clock.elapsedTime>vuelta.at){camTween={from:camera.position.clone(),to:vuelta.pos,fromTarget:controls.target.clone(),toTarget:vuelta.target,t:0,dur:1.2};vuelta=null;controls.minDistance=distanciaAntes;}
  // El golpe del dominó: tiembla la mesa, la cámara, y el bombillo da un chispazo.
  let temblor=0;
  if(sacudida>=0){const e=clock.elapsedTime-sacudida;
   if(e<.5){const amp=.0045*Math.exp(-e*8)*Math.sin(e*TAU*18);tileGroup.position.y=amp;rackGroup.position.y=amp;temblor=reduced?0:.004*Math.exp(-e*9);bulbLight.intensity=bulbBase*(1+.35*Math.exp(-e*14));}
   else{sacudida=-1;tileGroup.position.y=0;rackGroup.position.y=0;bulbLight.intensity=bulbBase;}}
  if(camTween){camTween.t=Math.min(1,camTween.t+dt/(camTween.dur||1.1));const q=suave(camTween.t);camera.position.lerpVectors(camTween.from,camTween.to,q);controls.target.lerpVectors(camTween.fromTarget,camTween.toTarget,q);if(camTween.t===1)camTween=null;}
  if(!reduced){fan.rotation.z=t*3.5;foliage.rotation.z=Math.sin(t*.47)*.009;colmado.update(t);esquina.update(t);}
  const v=currentView;
  const ctx={dt,jugando:v?.phase==='playing',turno:v?.turn,habla,hablaTipo,foco,fin,cabezas:characters.map((c,i)=>c?.head?c.head.getWorldPosition(cabezas[i]):null)};
  if(gente){gente.update(dt,{view:v,habla,cabezas:ctx.cabezas});ctx.saludo=gente.saludo;}
  for(const c of characters){if(!c)continue;applySeatedMotion(c,t,reduced,ctx);moverParpados(c);}
  // El público se mueve a la mitad del ritmo, cada uno en su cuadro: nadie lo nota y la tele respira.
  for(let i=0;i<crowd.length;i++)if((frame+i)%2===0)applySeatedMotion(crowd[i],t,reduced,ctx);
  animations=animations.filter(a=>{
   a.elapsed+=dt;if(a.elapsed<0)return true;
   const p=Math.min(1,a.elapsed/a.duration);
   if(a.revela!=null){a.obj.visible=true;ocultos.add(a.revela);const e=suave(p);a.obj.quaternion.slerpQuaternions(a.qFrom,a.qTo,e);a.obj.position.lerpVectors(a.from,a.to,e);a.obj.position.y+=Math.sin(p*Math.PI)*.012;
    if(p>=1&&a.ultima)dispatchEvent(new CustomEvent('mesa:aterriza',{detail:{revela:true}}));return p<1;}
   if(a.reparto){a.obj.position.lerpVectors(a.from,a.to,suave(p));a.obj.position.y+=Math.sin(p*Math.PI)*.035;a.obj.quaternion.slerpQuaternions(a.qFrom,a.qTo,suave(Math.min(1,Math.max(0,(p-.3)/.7))));return p<1;}
   // Parada en el atril → acostada en el primer 40 % del viaje.
   a.obj.quaternion.slerpQuaternions(a.qFrom,a.qTo,suave(Math.min(1,p/.4)));
   if(a.golpe){const h=Math.min(1,p/.62);a.obj.position.lerpVectors(a.from,a.to,suave(h));a.obj.position.y+=p<.62?Math.sin(h*Math.PI/2)*.17:.17*(1-((p-.62)/.38)**2);}
   else{a.obj.position.lerpVectors(a.from,a.to,suave(p));a.obj.position.y+=Math.sin(p*Math.PI)*.07;}
   if(p>=1&&!a.sono){a.sono=true;if(a.golpe)sacudida=clock.elapsedTime;dispatchEvent(new CustomEvent('mesa:aterriza',{detail:{golpe:!!a.golpe}}));}
   return p<1;});
  const repartiendo=now<dealUntil;rackGroup.visible=!repartiendo;if(!repartiendo&&repartoGroup.children.length)clear(repartoGroup);
  moverAtriles(dt);
  controls.update();if(!camTween&&!vuelta&&!libre)dentroDelSet();atmos.frame(t,dt,{reduced,view:v,ends:extremos,temblor});atmos.render();
  if(frame%2===0){for(const el of document.querySelectorAll('[data-seatlabel]')){const i=Number(el.dataset.seatlabel),[x,z]=seats[i],cab=characters[i]?.head;
   /* El que está de espaldas a la cámara lleva la etiqueta en la espalda: encima de la cabeza
      caía justo sobre la cara del que está enfrente. */
   const deEspaldas=cab&&cab.getWorldPosition(_lab).distanceTo(atmos.vista.position)<_centroMesa.distanceTo(atmos.vista.position)-.2;
   if(deEspaldas)_lab.y-=.3;else if(cab)_lab.y+=.23;else _lab.set(x,1.45,z);
   let p=_lab.project(atmos.vista),abajo=false;
   /* Si no cabe arriba de la cabeza, va debajo de la barbilla (antes, pegada arriba, tapaba los ojos). */
   if(!deEspaldas&&p.y>.8&&cab){cab.getWorldPosition(_lab).y-=.1;p=_lab.project(atmos.vista);abajo=true;}
   const py=Math.min(p.y,.8);el.style.transform=`translate(${(p.x*.5+.5)*innerWidth}px,${(-py*.5+.5)*innerHeight}px) translate(-50%,${deEspaldas?'-50%':abajo?'0':'-100%'})`;el.style.visibility=p.z>1||Math.abs(p.x)>1.1||p.y<-1.15?'hidden':'visible';}}
  if(frame%30===0||frame===1){window.mesaDiagnostics={cam:camera.position.toArray().map(x=>+x.toFixed(2)),fps:Math.round(fps),drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,characters:loaded,crowd:currentCrowd,gente:gente?+gente.ms.toFixed(2):null,visibleCrowd:crowd.length,boardTiles:currentView?.chain.length||0,quality,modelErrors:failed};
   if(DEBUG){window.mesaRigDebug=characters.filter(Boolean).map(c=>({index:c.index,head:c.head?.getWorldPosition(v3()).toArray(),hip:c.hips?.getWorldPosition(v3()).toArray(),rootScale:c.root.scale.toArray()}));const el=document.querySelector('#perf');if(el)el.textContent=`${Math.round(fps)} fps · ${renderer.info.render.calls} draws`;}}
 }
 // Para capturas y pruebas.
 window.mesaCamara=(p,t)=>{camTween=null;vuelta=null;libre=true;controls.minDistance=.1;controls.maxDistance=30;camera.position.set(...p);controls.target.set(...t);controls.update();};   // solo para capturas: sin recinto
 window.mesaCara=(i,p,son)=>{const c=characters[i];if(c)c.caraFija=p==null?null:{p,s:son??0};};
 window.mesaBeber=(i,fijo)=>{const c=characters[i];if(!c||!c.bebida||c.jugada)return;if(c.trago&&fijo!=null&&c.trago.fijo!=null)c.trago.fijo=fijo;else c.trago={t0:clock.elapsedTime,fijo};};
 window.mesaBrazo=i=>{const c=characters[i],b=c?.brazos?.[1];if(!b)return null;const v=o=>o.getWorldPosition(new THREE.Vector3()).toArray();return {codo:v(b.antebrazo),muneca:v(b.mano),vaso:c.bebida?c.bebida.group.position.toArray():null};};
 update(null);animate();
 /* De pie, el panel de fichas tapa la mitad de abajo: la imagen se corre hacia arriba. */
 const encuadre=()=>{if(camera.aspect<.95)camera.setViewOffset(innerWidth,innerHeight*1.24,0,innerHeight*.24,innerWidth,innerHeight);else camera.clearViewOffset();camera.updateProjectionMatrix();};
 const ratio=()=>software?.65:quality==='min'?Math.min(devicePixelRatio,1)*.55:quality==='low'?Math.min(devicePixelRatio,1)*.8:Math.min(devicePixelRatio,1.5,1920/innerWidth);
 const resize=()=>{camera.aspect=innerWidth/innerHeight;encuadre();renderer.setPixelRatio(ratio());renderer.setSize(innerWidth,innerHeight);atmos.resize(innerWidth,innerHeight);};encuadre();window.addEventListener('resize',resize);
 controls.addEventListener('start',()=>{camTween=null;vuelta=null;});
 // Si el contexto WebGL se pierde (pasa en teles) y vuelve, el entorno se regenera.
 renderer.domElement.addEventListener('webglcontextrestored',()=>atmos.entorno?.());
 const api={update,setCrowd,setCamera,ready,
  sampleTime(time){visualTime=time;for(const c of [...characters.filter(Boolean),...crowd])applySeatedMotion(c,time,false);atmos.frame(time,0,{reduced:false,view:currentView,ends:extremos});atmos.render();},
  setMode(m){mode=m;setCamera(m==='attract'?'attract':'table');},
  // Calidad baja: sin posproceso, la sombra del bombillo apagada (no el mapa: apagarlo en caliente congelaba las sombras) y menos píxeles.
  quality(q){quality=q;const baja=q!=='high';bulbLight.castShadow=!baja&&!software;
   /* En una tele floja lo que cuesta es cada píxel: el barniz (clearcoat) y el terciopelo del paño (sheen)
      doblan el sombreado de media pantalla, y cada luz puntual se paga en todos los píxeles. Se apagan,
      y el cielo sube un poco para que no se note el relleno que falta. */
   for(const [m,orig] of fisicos){const cc=baja?0:orig.clearcoat,sh=baja?0:orig.sheen;if(m.clearcoat!==cc||m.sheen!==sh){m.clearcoat=cc;m.sheen=sh;m.needsUpdate=true;}}
   relleno.visible=!baja;cielo.intensity=baja?CIELO+.1:CIELO;
   renderer.setPixelRatio(ratio());atmos.calidad(q);atmos.resize(innerWidth,innerHeight);},
  // En el teléfono, cuando es solo mando, la mesa 3D no se dibuja: batería y calor.
  pause(){pausado=true;},
  resume(){if(!pausado)return;pausado=false;clock.getDelta();if(!frameId)animate();},
  dispose(){disposed=true;gente?.dispose();atmos.dispose();window.removeEventListener('mesa:botvoice',alHablar);if(frameId)cancelAnimationFrame(frameId);window.removeEventListener('resize',resize);controls.dispose();renderer.dispose();container.replaceChildren();}};
 return api;
}
