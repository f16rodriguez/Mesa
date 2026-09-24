import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

/**
 * La esquina al caer la tarde: lo que hace que la mesa esté frente a un colmado de barrio y no
 * en un escenario. Sacado de las fotos de referencia (El Tanque, Pelle, Real II, La Venganza):
 *
 *  - Fachada en dos colores (turquesa abajo, crema arriba), toldo a rayas con festón.
 *  - Segundo piso de bloques con balcón de hierro, tinaco y las varillas esperando el tercero.
 *  - Adentro, anaqueles repletos, tiras de picaderas colgando y la nevera prendida.
 *  - Afuera, la nevera del hielo, los botellones en su rack, sillas plásticas apiladas, un motor
 *    parado en el contén pintado y el poste de la esquina con su maraña de cables.
 *  - La calle de al lado: el colmado queda de verdad en la esquina.
 *
 * Todo va por los mismos ayudantes de scene.js, así que se funde por material: pocas llamadas
 * de dibujo, que las teles flojas no dan para más. Colores de sol viejo, nada de feria.
 */
export function armarEsquina({scene,texture,mat,box,cylinder,staticGeo,random}){
 const v3=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);
 const desteñido=(c,w,h,base,claro,oscuro,n=5000)=>{c.fillStyle=base;c.fillRect(0,0,w,h);for(let i=0;i<n;i++){c.fillStyle=random()>.5?claro:oscuro;c.fillRect(random()*w,random()*h,1+random()*4,1+random()*3);}};

 // Rótulos pintados a mano: con Shrikhand cuando cargue (la letra de la marca), Georgia mientras tanto.
 const rotulos=[];
 function rotulo(texto,{w=1024,h=256,fondo='#efe3c4',tinta='#24518a',sombra='#c8402f',borde=null,px=.62}={}){
  const lienzo=document.createElement('canvas');lienzo.width=w;lienzo.height=h;const t=new THREE.CanvasTexture(lienzo);t.colorSpace=THREE.SRGBColorSpace;
  const pintar=()=>{const c=lienzo.getContext('2d'),fam=document.fonts?.check?.('64px Shrikhand')?'Shrikhand':'Georgia';
   if(fondo){c.fillStyle=fondo;c.fillRect(0,0,w,h);for(let i=0;i<w*1.2;i++){c.fillStyle=i%2?'rgba(120,100,70,.07)':'rgba(255,250,235,.08)';c.fillRect(Math.random()*w,Math.random()*h,2+Math.random()*12,1+Math.random()*2);}}else c.clearRect(0,0,w,h);
   let size=h*px;c.font=`${size}px ${fam}`;const ancho=c.measureText(texto).width;if(ancho>w*.9){size*=w*.9/ancho;c.font=`${size}px ${fam}`;}
   c.textAlign='center';c.textBaseline='middle';const o=size*.06;
   if(sombra){c.fillStyle=sombra;c.fillText(texto,w/2+o,h/2+o+size*.04);}
   c.fillStyle=tinta;c.fillText(texto,w/2,h/2+size*.04);
   if(borde){c.strokeStyle=borde;c.lineWidth=h*.07;c.strokeRect(c.lineWidth/2,c.lineWidth/2,w-c.lineWidth,h-c.lineWidth);}
   // El sol se come la pintura: poros claros encima de todo.
   for(let i=0;i<w*.5;i++){c.fillStyle=fondo?'rgba(239,227,196,.3)':'rgba(0,0,0,0)';c.fillRect(Math.random()*w,Math.random()*h,1+Math.random()*3,1+Math.random()*2);}
   t.needsUpdate=true;};
  pintar();rotulos.push(pintar);return t;
 }
 document.fonts?.load?.('64px Shrikhand').then(()=>rotulos.forEach(p=>p())).catch(()=>{});

 // ── La fachada ──────────────────────────────────────────────────────────────
 const crema=new THREE.MeshStandardMaterial({roughness:.93,map:texture((c,w,h)=>{desteñido(c,w,h,'#e3d6b8','rgba(255,250,236,.10)','rgba(120,100,70,.08)');
  const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'rgba(90,70,50,.12)');g.addColorStop(.18,'rgba(90,70,50,0)');g.addColorStop(.8,'rgba(90,70,50,0)');g.addColorStop(1,'rgba(90,70,50,.2)');c.fillStyle=g;c.fillRect(0,0,w,h);
  for(let i=0;i<22;i++){const x=random()*w,l=h*(.08+random()*.3),gg=c.createLinearGradient(0,0,0,l);gg.addColorStop(0,'rgba(80,70,55,.2)');gg.addColorStop(1,'rgba(80,70,55,0)');c.fillStyle=gg;c.fillRect(x,0,3+random()*8,l);}},512,512)});
 const turquesa=new THREE.MeshStandardMaterial({roughness:.9,map:texture((c,w,h)=>{desteñido(c,w,h,'#3f9a96','rgba(200,240,230,.10)','rgba(20,50,50,.10)');
  for(let i=0;i<50;i++){c.fillStyle='rgba(225,218,195,.55)';c.beginPath();c.ellipse(random()*w,random()*h,2+random()*9,1+random()*5,random()*3,0,Math.PI*2);c.fill();}},256,256)});
 // Franja turquesa de 1,25 m en todo lo que da a la calle.
 box(-3.48,.625,-2.355,.702,1.25,.012,turquesa);box(3.45,.625,-2.355,.802,1.25,.012,turquesa);
 box(-3.906,.625,-3.85,.012,1.25,2.72,turquesa);box(3.906,.625,-3.85,.012,1.25,2.72,turquesa);

 // Toldo de lona a rayas con festón, justo debajo del letrero.
 const RAYAS=22,verde='#3d8a5c',crudo='#e8dfc8';
 const lona=texture((c,w,h)=>{for(let i=0;i<RAYAS;i++){c.fillStyle=i%2?crudo:verde;c.fillRect(i*w/RAYAS,0,Math.ceil(w/RAYAS),h);}
  for(let i=0;i<2500;i++){c.fillStyle=random()>.5?'rgba(255,250,235,.06)':'rgba(20,30,20,.07)';c.fillRect(random()*w,random()*h,2,2);}
  const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'rgba(0,0,0,.14)');g.addColorStop(1,'rgba(40,30,20,0)');c.fillStyle=g;c.fillRect(0,0,w,h);},1024,128);
 staticGeo(new THREE.PlaneGeometry(7.3,.86),new THREE.MeshStandardMaterial({map:lona,roughness:.95,side:THREE.DoubleSide}),[0,2.59,-1.955],[-1.237,0,0]);
 const feston=texture((c,w,h)=>{const sw=w/RAYAS;for(let i=0;i<RAYAS;i++){c.fillStyle=i%2?crudo:verde;c.fillRect(i*sw,0,Math.ceil(sw),h*.5);c.beginPath();c.arc(i*sw+sw/2,h*.5,sw/2-.5,0,Math.PI);c.fill();}},1024,64);
 staticGeo(new THREE.PlaneGeometry(7.3,.2),new THREE.MeshStandardMaterial({map:feston,roughness:.95,side:THREE.DoubleSide,alphaTest:.5}),[0,2.35,-1.548]);

 // Del lado de la calle de al lado: una ventana con reja y lo que vende, pintado en la pared.
 {const reja=new THREE.MeshStandardMaterial({roughness:.8,map:texture((c,w,h)=>{c.fillStyle='#2a3332';c.fillRect(0,0,w,h);const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#cfe8e0');g.addColorStop(1,'#8fb3aa');c.fillStyle=g;c.fillRect(14,14,w-28,h-28);
   c.strokeStyle='#1f2525';c.lineWidth=7;for(let x=30;x<w-20;x+=26){c.beginPath();c.moveTo(x,14);c.lineTo(x,h-14);c.stroke();}for(const y of [h*.33,h*.66]){c.beginPath();c.moveTo(14,y);c.lineTo(w-14,y);c.stroke();}c.strokeStyle='#e8e0cc';c.lineWidth=12;c.strokeRect(6,6,w-12,h-12);},256,256),emissive:'#ffffff',emissiveIntensity:.12});
  reja.emissiveMap=reja.map;staticGeo(new THREE.PlaneGeometry(1.1,1.0),reja,[3.915,1.75,-4.3],[0,Math.PI/2,0]);
  const lado=new THREE.Mesh(new THREE.PlaneGeometry(2.2,.36),new THREE.MeshStandardMaterial({map:rotulo('Víveres · Bebidas · Hielo',{w:1536,h:252,fondo:null,tinta:'#24518a',sombra:'#c8402f'}),transparent:true,roughness:.9}));
  lado.position.set(3.915,2.55,-3.75);lado.rotation.y=Math.PI/2;scene.add(lado);}

 // ── Segundo piso ────────────────────────────────────────────────────────────
 const Y0=3.3,H2=2.75,zF=-2.7,techo=Y0+H2;
 box(0,Y0+H2/2,-5.2,8.2,H2,.2,crema);box(-4,Y0+H2/2,-3.95,.2,H2,2.7,crema);box(4,Y0+H2/2,-3.95,.2,H2,2.7,crema);box(0,Y0+H2/2,zF,8.2,H2,.2,crema);
 box(0,techo-.08,-3.95,8.44,.16,2.95,'#d3c9b0');
 box(0,Y0+.06,zF+.12,8.3,.1,.06,'#3d938e');
 // Persianas de las ventanas y la puerta del balcón, con la luz de adentro ya prendida.
 const persiana=new THREE.MeshStandardMaterial({roughness:.7,map:texture((c,w,h)=>{c.fillStyle='#2d3a3a';c.fillRect(0,0,w,h);const n=15,paso=(h-24)/n;
  for(let i=0;i<n;i++){const y=12+i*paso;c.fillStyle='#7aa39d';c.fillRect(12,y,w-24,paso*.72);c.fillStyle='rgba(0,0,0,.25)';c.fillRect(12,y+paso*.62,w-24,paso*.1);}c.strokeStyle='#e8e0cc';c.lineWidth=12;c.strokeRect(6,6,w-12,h-12);},256,256)});
 staticGeo(new THREE.PlaneGeometry(1.2,1.25),persiana,[-2.5,4.6,zF+.107]);
 const tele=new THREE.MeshStandardMaterial({roughness:.7,map:persiana.map,emissive:'#8fb0ff',emissiveMap:persiana.map,emissiveIntensity:.25});
 const ventanaTele=new THREE.Mesh(new THREE.PlaneGeometry(1.2,1.25),tele);ventanaTele.position.set(2.5,4.6,zF+.107);scene.add(ventanaTele);
 const puerta=new THREE.MeshStandardMaterial({roughness:.8,emissive:'#ffffff',emissiveIntensity:.55,map:texture((c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#f0c27f');g.addColorStop(1,'#b87a44');c.fillStyle=g;c.fillRect(0,0,w,h);
  c.strokeStyle='#1d2222';c.lineWidth=6;for(let x=18;x<w;x+=22){c.beginPath();c.moveTo(x,0);c.lineTo(x,h);c.stroke();}for(let y=h*.2;y<h;y+=h*.2){c.beginPath();c.moveTo(0,y);c.lineTo(w,y);c.stroke();}
  c.lineWidth=5;for(let k=0;k<4;k++){c.beginPath();c.arc(w/2,h*.1+k*h*.2,18,0,Math.PI*2);c.stroke();}c.strokeStyle='#e8e0cc';c.lineWidth=14;c.strokeRect(7,7,w-14,h-14);},128,256)});
 puerta.emissiveMap=puerta.map;staticGeo(new THREE.PlaneGeometry(1.0,2.1),puerta,[0,Y0+1.08,zF+.107]);
 // Balcón: la losa ya sale hasta el frente; baranda de hierro fino.
 const hierro='#262c2b';
 for(const y of [3.38,4.22])box(0,y,-1.56,8,.04,.04,hierro);
 for(let x=-3.94;x<=3.95;x+=.14)box(x,3.8,-1.56,.018,.84,.018,hierro);
 for(const sx of [-3.97,3.97]){for(const y of [3.38,4.22])box(sx,y,-2.08,.04,.04,1.04,hierro);for(let z=-2.55;z<=-1.6;z+=.14)box(sx,3.8,z,.018,.84,.018,hierro);}
 for(const [x,z] of [[-3.3,-1.8],[3.25,-1.85],[1.5,-1.78]]){cylinder(x,3.46,z,.13,.1,.24,'#9a5a3c',12);for(let k=0;k<4;k++)staticGeo(new THREE.SphereGeometry(1,8,6),mat(k%2?'#5b7f4f':'#44663e',.95),[x+(k-1.5)*.06,3.66+(k%2)*.05,z+(k%3-1)*.04],[0,0,0],[.12,.14,.1]);}
 // Tinaco negro en el techo y las varillas de las columnas, esperando el tercer piso.
 cylinder(2.5,techo+.52,-4.3,.5,.55,1.0,'#1f2322',18);cylinder(2.5,techo+1.06,-4.3,.2,.22,.08,'#2b302f',12);
 cylinder(-1.8,techo+.35,-4.6,.035,.035,.7,'#8d8f89',8);
 for(const [x,z] of [[-3.95,-2.75],[3.95,-2.75],[-3.95,-5.15],[3.95,-5.15]])for(const [dx,dz] of [[-.05,-.05],[.05,-.05],[-.05,.05],[.05,.05]])cylinder(x+dx,techo+.42,z+dz,.007,.007,.84,'#6b4a35',4);

 // ── Adentro ─────────────────────────────────────────────────────────────────
 // Un anaquel más arriba en la pared del fondo y los de la pared izquierda, pintados de verde.
 const tabla=mat('#8a6a48',.8),verdeAnaquel=mat('#4f7f55',.85);
 for(const y of [.55,1.0,1.45,1.9,2.35,2.8])box(-3.53,y,-3.85,.34,.04,2.2,verdeAnaquel);
 for(const z of [-4.94,-2.76])box(-3.53,1.65,z,.34,2.3,.04,verdeAnaquel);
 // Mercancía: cajas y latas de colores, en dos mallas instanciadas. La etiqueta es una franja más clara.
 const etiqueta=texture((c,w,h)=>{c.fillStyle='#bdbdbd';c.fillRect(0,0,w,h);c.fillStyle='#ffffff';c.fillRect(0,h*.34,w,h*.34);c.fillStyle='#6a6a6a';c.fillRect(0,h*.33,w,h*.02);c.fillRect(0,h*.67,w,h*.02);},64,64);
 const productoMat=new THREE.MeshStandardMaterial({map:etiqueta,roughness:.62});
 const paleta=['#c8402f','#e3ae55','#f3eee3','#2f6fa8','#3f8a5a','#e07a2e','#d65a7a','#f1d24a','#6fb7c9','#8a3b3b','#ffffff','#1f5f9e'];
 const cajas=[],latas=[];
 const llenar=(a,b,y,fijo,prof,eje)=>{let p=a;while(p<b){const w=.07+random()*.12,h=.12+random()*.17,d=Math.min(prof,.1+random()*.12),lata=random()<.35,
   col=new THREE.Color(paleta[Math.floor(random()*paleta.length)]).multiplyScalar(.7+random()*.22);
   if(p+w>b)break;const pos=eje==='x'?v3(p+w/2,y+h/2,fijo):v3(fijo,y+h/2,p+w/2);
   (lata?latas:cajas).push({pos,s:lata?v3(w*.85,h*.8,w*.85):eje==='x'?v3(w,h,d):v3(d,h,w),col});p+=w+.012;}};
 for(const y of [1.6125,2.5725])llenar(-3.4,2.2,y,-4.8,.3,'x');
 for(const y of [.57,1.02,1.47,1.92,2.37,2.82])llenar(-4.9,-2.8,y,-3.55,.28,'z');
 for(const [geo,lista] of [[new THREE.BoxGeometry(1,1,1),cajas],[new THREE.CylinderGeometry(.5,.5,1,10),latas]]){
  const m=new THREE.InstancedMesh(geo,productoMat,lista.length),o=new THREE.Object3D();
  lista.forEach((p,i)=>{o.position.copy(p.pos);o.scale.copy(p.s);o.rotation.set(0,(random()-.5)*.12,0);o.updateMatrix();m.setMatrixAt(i,o.matrix);m.setColorAt(i,p.col);});
  m.frustumCulled=false;scene.add(m);}
 // El frente del mostrador: vitrinas de vidrio con picaderas y dulces, prendidas por dentro.
 {const W=1024,H=368,vitrinas=[[.05,.47],[.53,.95]],dibujar=(c,luz)=>{c.fillStyle=luz?'#000':'#5b3b24';c.fillRect(0,0,W,H);
   if(!luz){for(let i=0;i<500;i++){c.fillStyle=i%2?'rgba(150,100,60,.25)':'rgba(30,18,10,.25)';c.fillRect(Math.random()*W,Math.random()*H,20+Math.random()*80,1+Math.random()*2);}c.fillStyle='#3a2616';c.fillRect(0,H*.88,W,H*.12);}
   for(const [a,b] of vitrinas){const x0=a*W,x1=b*W,y0=H*.12,y1=H*.82;c.fillStyle=luz?'#6e6a60':'#d9d3c1';c.fillRect(x0,y0,x1-x0,y1-y0);
    for(let f=0;f<2;f++){const fy=y0+(f+.5)*(y1-y0)/2;c.fillStyle=luz?'#6f6a60':'#b9b3a2';c.fillRect(x0,fy+(y1-y0)*.2,x1-x0,4);
     // Fundas de picaderas (anchas, con la boca arrugada) y potes de dulces (redondos, con tapa).
     const base=fy+(y1-y0)*.2;c.globalAlpha=luz?.7:1;
     for(let x=x0+10;x<x1-60;){const pote=Math.random()<.3,col=paleta[Math.floor(Math.random()*paleta.length)];
      if(pote){const r=18+Math.random()*6;c.fillStyle=luz?'#9a9a9a':'rgba(235,240,240,.9)';c.fillRect(x,base-r*2.4,r*2,r*2.4);c.fillStyle=col;for(let k=0;k<7;k++){c.beginPath();c.arc(x+5+Math.random()*(r*2-10),base-6-Math.random()*r*1.8,5,0,Math.PI*2);c.fill();}c.fillStyle='#c8402f';c.fillRect(x-2,base-r*2.4-8,r*2+4,9);x+=r*2+8;}
      else{const w=46+Math.random()*34,h=(y1-y0)*(.2+Math.random()*.1);c.fillStyle=col;c.beginPath();c.moveTo(x,base);c.lineTo(x+3,base-h);for(let k=0;k<=6;k++)c.lineTo(x+3+k*(w-6)/6,base-h-(k%2?5:0));c.lineTo(x+w,base);c.closePath();c.fill();c.fillStyle='rgba(255,255,255,.7)';c.fillRect(x+w*.2,base-h*.62,w*.6,h*.22);c.fillStyle='rgba(255,255,255,.25)';c.fillRect(x+4,base-h+8,5,h-14);x+=w+5;}}
     c.globalAlpha=1;}
    if(!luz){c.fillStyle='rgba(255,255,255,.22)';c.beginPath();c.moveTo(x0+20,y0);c.lineTo(x0+70,y0);c.lineTo(x0+20,y1);c.lineTo(x0-10+20,y1);c.fill();c.strokeStyle='#3a2616';c.lineWidth=10;c.strokeRect(x0,y0,x1-x0,y1-y0);}}};
  const mk=luz=>texture(c=>dibujar(c,luz),W,H),m=new THREE.MeshStandardMaterial({map:mk(false),emissive:'#fff4de',emissiveMap:mk(true),emissiveIntensity:.2,roughness:.55});
  const frente=new THREE.Mesh(new THREE.PlaneGeometry(3.9,1.4),m);frente.position.set(0,.70,-3.924);scene.add(frente);}
 // Tiras de picaderas colgando a los lados del mostrador.
 const tira=texture((c,w,h)=>{const n=7,ph=h/n;c.fillStyle='#8a7a5a';c.fillRect(w/2-2,0,4,h);
  for(let i=0;i<n;i++){const y=i*ph+4;c.fillStyle=paleta[(i*5+3)%paleta.length];c.fillRect(6,y,w-12,ph-8);c.fillStyle='rgba(255,255,255,.3)';c.fillRect(10,y+6,w*.16,ph-20);c.fillStyle='rgba(255,255,255,.75)';c.fillRect(w*.3,y+ph*.36,w*.4,ph*.16);}},64,448);
 const tiraMat=new THREE.MeshStandardMaterial({map:tira,roughness:.45,alphaTest:.5,side:THREE.DoubleSide});
 for(const x of [-1.74,-1.52,1.52,1.74])staticGeo(new THREE.PlaneGeometry(.15,.86),tiraMat,[x,2.66,-3.86],[0,(random()-.5)*.5,0]);
 // La nevera, prendida: filas de refrescos y cervezas detrás del vidrio, y su letrero.
 const nevera=new THREE.Mesh(new THREE.PlaneGeometry(.8,1.5),new THREE.MeshBasicMaterial({color:new THREE.Color(1.05,1.08,1.1),map:texture((c,w,h)=>{c.fillStyle='#dcecef';c.fillRect(0,0,w,h);const filas=5;
  for(let f=0;f<filas;f++){const fh=h/filas,y0=f*fh;c.fillStyle='rgba(140,160,165,.9)';c.fillRect(0,y0+fh*.88,w,5);for(let i=0;i<8;i++){const bw=(w-20)/8,x=10+i*bw;c.fillStyle=['#c8402f','#2c7a3f','#e3ae55','#7a3a1c','#2f6fa8','#f3eee3','#e07a2e'][(i+f*3)%7];c.fillRect(x+bw*.15,y0+fh*.3,bw*.7,fh*.56);c.fillRect(x+bw*.36,y0+fh*.12,bw*.28,fh*.2);}}
  const g=c.createLinearGradient(0,0,w,0);g.addColorStop(0,'rgba(255,255,255,.3)');g.addColorStop(.35,'rgba(255,255,255,0)');c.fillStyle=g;c.fillRect(0,0,w,h);c.strokeStyle='#9aa8aa';c.lineWidth=10;c.strokeRect(0,0,w,h);},256,480)}));
 nevera.position.set(2.95,1.12,-4.09);scene.add(nevera);
 const fria=new THREE.Mesh(new THREE.PlaneGeometry(.9,.2),new THREE.MeshBasicMaterial({map:rotulo('Bien fría',{w:720,h:160,fondo:'#b8372b',tinta:'#f3eee3',sombra:null,px:.62}),color:new THREE.Color(1.1,1.1,1.1)}));
 fria.position.set(2.95,2.17,-4.14);scene.add(fria);

 // ── Afuera, frente al colmado ───────────────────────────────────────────────
 // La nevera del hielo.
 box(2.45,.4,-1.86,1.0,.8,.6,'#e7ebe8');box(2.45,.83,-1.86,1.04,.06,.64,'#d4dad8');box(2.45,.12,-1.555,.96,.1,.012,'#b9c0bd');
 {const h=new THREE.Mesh(new THREE.PlaneGeometry(.62,.19),new THREE.MeshStandardMaterial({map:rotulo('HIELO',{w:640,h:196,fondo:null,tinta:'#1f5f9e',sombra:'#c8402f',px:.7}),transparent:true,roughness:.8}));h.position.set(2.45,.55,-1.553);scene.add(h);}
 // Botellones de agua en su rack azul, con el fondo redondo mirando a la calle.
 {const azul=mat('#2d63a8',.5),agua=new THREE.MeshStandardMaterial({color:'#8cc0e6',roughness:.12,transparent:true,opacity:.84}),rx=3.35,rz=-2.0;
  for(let c=0;c<2;c++)for(let f=0;f<3;f++){const x=rx-.2+c*.4,y=.21+f*.4;staticGeo(new THREE.CylinderGeometry(.155,.155,.4,16),agua,[x,y,rz],[Math.PI/2,0,0]);staticGeo(new THREE.CylinderGeometry(.05,.05,.1,10),agua,[x,y,rz-.25],[Math.PI/2,0,0]);}
  for(const y of [0,.4,.8,1.2])box(rx,y+.012,rz,.84,.024,.46,azul);for(const x of [rx-.41,rx,rx+.41])box(x,.61,rz,.03,1.22,.46,azul);}
 // Sillas plásticas: una pila contra la pared y una suelta, blancas.
 const silla=(x,y0,z,ry,color)=>{const m=mat(color,.5),add=(geo,px,py,pz,rx=0)=>{geo.rotateX(rx);const p=v3(px,py,pz).applyAxisAngle(v3(0,1,0),ry);staticGeo(geo,m,[x+p.x,y0+p.y,z+p.z],[0,ry,0]);};
  add(new RoundedBoxGeometry(.46,.035,.43,2,.015),0,.43,0);add(new RoundedBoxGeometry(.44,.42,.03,2,.012),0,.71,-.22,-.16);
  for(const sx of [-.2,.2]){add(new THREE.CylinderGeometry(.018,.024,.43,6),sx,.215,.17,.12);add(new THREE.CylinderGeometry(.018,.024,.45,6),sx,.22,-.19,-.14);add(new THREE.BoxGeometry(.03,.18,.3),sx*1.1,.54,-.02);}};
 for(let k=0;k<4;k++)silla(-3.42,k*.075,-1.32-k*.012,.3,'#ecece6');
 silla(3.55,0,.55,-1.9,'#ecece6');
 // Un motor parado en el contén.
 {const x=-3.25,z=2.85,ry=.3,add=(geo,m,px,py,pz,rx=0,rz=0)=>{geo.rotateX(rx);geo.rotateZ(rz);const p=v3(px,py,pz).applyAxisAngle(v3(0,1,0),ry);staticGeo(geo,m,[x+p.x,p.y,z+p.z],[0,ry,0]);};
  const goma=mat('#171b1b',.8),cromo=mat('#9aa3a0',.35,.6),pintura=mat('#a8382c',.45,.1),negro=mat('#1e2222',.7);
  for(const px of [-.52,.5]){add(new THREE.TorusGeometry(.26,.055,8,18),goma,px,.3,0);add(new THREE.CylinderGeometry(.09,.09,.08,10),cromo,px,.3,0,Math.PI/2);}
  add(new RoundedBoxGeometry(.6,.22,.24,2,.05),pintura,-.02,.53,0,0,-.08);add(new RoundedBoxGeometry(.55,.08,.26,2,.03),negro,-.28,.68,0);
  add(new RoundedBoxGeometry(.28,.34,.2,2,.05),pintura,.37,.64,0,0,-.35);add(new THREE.CylinderGeometry(.018,.018,.62,6),cromo,.44,.92,0,Math.PI/2);
  add(new THREE.CylinderGeometry(.02,.02,.62,6),cromo,.47,.6,0,0,.35);add(new THREE.CylinderGeometry(.03,.035,.45,8),cromo,-.35,.3,.13,0,Math.PI/2+.1);
  add(new RoundedBoxGeometry(.3,.03,.22,1,.01),cromo,-.6,.73,0);}
 // El contén pintado de amarillo a tramos.
 for(let x=-9;x<4.4;x+=2)box(x+.5,-.074,3.45,1.0,.152,.202,'#d6b24e');

 // ── La calle de al lado ─────────────────────────────────────────────────────
 box(8.3,-.2,-4.575,7.4,.1,15.85,'#2b3133');box(4.6,-.075,-4.575,.2,.15,15.85,'#a8a391');box(12.3,-.07,-4.575,1.2,.16,15.85,'#8a8578');
 for(let z=-11;z<3;z+=1.8)box(8.3,-.146,z,.06,.008,.7,'#b9ad83');
 {const luz=new THREE.MeshStandardMaterial({color:'#ffd08a',emissive:'#ffb35a',emissiveIntensity:2.2}),apagada=mat('#2a3436',.8),cols=['#d8a25a','#8fb8a8','#e0d2b0','#c9897d','#b9c47a'];
  let z=-12,i=0;while(z<2.4){const L=3+random()*1.6,h=3+random()*2.6,c=cols[i++%cols.length];
   box(14.4,h/2,z+L/2,3.0,h,L,c);box(14.4,h+.08,z+L/2,3.1,.16,L+.1,'#ddd4bf');
   const nv=Math.max(1,Math.floor(L/1.5));for(let k=0;k<nv;k++){const wz=z+(k+.5)*L/nv;staticGeo(new THREE.PlaneGeometry(.75,.95),random()<.4?luz:apagada,[12.885,1.55,wz],[0,-Math.PI/2,0]);if(h>4.2)staticGeo(new THREE.PlaneGeometry(.7,.8),random()<.35?luz:apagada,[12.885,h-1.1,wz],[0,-Math.PI/2,0]);}
   z+=L+.15;}}

 // ── Los vecinos de la izquierda: una cortina metálica cerrada y la banca ────
 {const cortina=new THREE.MeshStandardMaterial({roughness:.6,metalness:.3,map:texture((c,w,h)=>{c.fillStyle='#8f9a94';c.fillRect(0,0,w,h);for(let y=0;y<h;y+=8){c.fillStyle='rgba(40,45,44,.35)';c.fillRect(0,y,w,2);c.fillStyle='rgba(230,235,230,.18)';c.fillRect(0,y+3,w,2);}
   for(let i=0;i<40;i++){c.fillStyle='rgba(120,70,40,.18)';c.fillRect(random()*w,random()*h,4+random()*20,2+random()*10);}},256,256)});
  staticGeo(new THREE.PlaneGeometry(2.3,2.1),cortina,[-7,1.05,-1.365]);box(-7,2.2,-1.33,2.45,.2,.1,'#6d7571');
  const banca=new THREE.Mesh(new THREE.PlaneGeometry(1.7,.42),new THREE.MeshStandardMaterial({map:rotulo('Banca La Suerte',{w:1024,h:252,fondo:'#2f7a4d',tinta:'#f3eee3',sombra:'#1b2c22',borde:'#e3ae55',px:.52}),roughness:.85,emissive:'#ffffff',emissiveIntensity:.08}));
  banca.material.emissiveMap=banca.material.map;banca.position.set(-10.5,2.72,-1.36);scene.add(banca);}

 // ── El poste de la esquina y su maraña de cables ────────────────────────────
 const P=v3(4.3,0,3.0);
 cylinder(P.x,3.9,P.z,.11,.16,7.8,'#8e8a80',10);box(P.x,7.25,P.z,.1,.1,1.7,'#5c574c');cylinder(P.x+.28,6.3,P.z,.2,.2,.62,'#6d7470',12);
 const cable=(a,b,caida,color='#141819',grosor=.011)=>{const m=a.clone().lerp(b,.5);m.y-=caida*2;staticGeo(new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(a,m,b),22,grosor,4,false),mat(color),[0,0,0]);};
 for(const dz of [-.6,0,.6])cable(v3(P.x,7.3,P.z+dz),v3(6,6.6,9.2+dz*.4),.25);
 for(const dz of [-.5,.5])cable(v3(P.x,7.3,P.z+dz),v3(-5,4.2,-1.0+dz*.6),.55);
 cable(v3(P.x,6.4,P.z),v3(3.95,5.7,-2.72),.35);cable(v3(P.x,6.2,P.z),v3(3.95,5.5,-2.72),.5,'#1d2121',.008);
 cable(v3(P.x,5.9,P.z),v3(4.35,5.4,-9),.4,'#1d2121',.009);cable(v3(P.x,5.7,P.z),v3(4.35,5.2,-9),.6,'#20241f',.007);
 // Un rollo de cable de tele colgando del poste, como en todos.
 {const curva=new THREE.CatmullRomCurve3(Array.from({length:14},(_,k)=>{const a=k/13*Math.PI*4;return v3(P.x+.16+Math.cos(a)*.14,5.2-k*.018+Math.sin(a)*.14,P.z+Math.sin(a)*.05);}));staticGeo(new THREE.TubeGeometry(curva,60,.008,4,false),mat('#141819'),[0,0,0]);}

 // Vida: la tele del segundo piso cambia de luz cada tanto.
 let proximo=0;
 return {update(t){if(t>proximo){proximo=t+.25+Math.random()*1.4;tele.emissiveIntensity=.12+Math.random()*.45;tele.emissive.setHSL(.58+Math.random()*.08,.5,.55+Math.random()*.2);}}};
}
