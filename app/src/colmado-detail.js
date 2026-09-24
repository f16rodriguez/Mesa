import * as THREE from 'three';
export function dressColmado({scene,texture,mat,box,cylinder,random,teal,wood,storeSign}){
 const paint=texture((c,w,h)=>{c.fillStyle='#e0d3b4';c.fillRect(0,0,w,h);const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#cac09b18');g.addColorStop(.7,'#14382d00');g.addColorStop(1,'#162d2566');c.fillStyle=g;c.fillRect(0,0,w,h);for(let i=0;i<7000;i++){c.fillStyle=i%3?'#b4ad8618':'#142d2924';c.fillRect(random()*w,random()*h,1+random()*3,1+random()*2);}for(let i=0;i<70;i++){const x=random()*w,y=i<50?h*(.72+random()*.28):random()*h,r=5+random()*14;c.fillStyle=i%3?'rgba(160,145,112,.35)':'rgba(120,110,90,.25)';c.beginPath();for(let j=0;j<8;j++){const a=j*Math.PI/4,rr=r*(.6+random()*.5);c.lineTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr*.65);}c.fill();}c.strokeStyle='#1b372e24';for(let y=48;y<h;y+=57){c.beginPath();c.moveTo(0,y);c.lineTo(w,y);c.stroke();}},1024,1024);
 teal.map=paint;teal.color.set('#f2ecde');teal.needsUpdate=true;wood.color.set('#bca98a');wood.roughness=.84;
 const letrero=()=>{storeSign.material.map=texture((c,w,h)=>{c.fillStyle='#efe3c4';c.fillRect(0,0,w,h);for(let i=0;i<2600;i++){c.fillStyle=i%2?'rgba(120,100,70,.07)':'rgba(255,250,235,.08)';c.fillRect(random()*w,random()*h,2+random()*14,1+random()*2);}
  const fam=document.fonts?.check?.('64px Shrikhand')?'Shrikhand':'Georgia',px=fam==='Shrikhand'?h*.66:h*.56;c.font=`${px}px ${fam}`;c.textAlign='center';c.textBaseline='middle';
  c.fillStyle='#c8402f';c.fillText('Colmado La Esquina',w/2+px*.06,h/2+px*.1);c.fillStyle='#24518a';c.fillText('Colmado La Esquina',w/2,h/2+px*.04);
  c.strokeStyle='#3d938e';c.lineWidth=12;c.strokeRect(6,6,w-12,h-12);for(let i=0;i<1400;i++){c.fillStyle='rgba(239,227,196,.35)';c.fillRect(random()*w,random()*h,1+random()*3,1+random()*2);}},2048,162);
  storeSign.material.emissiveMap=storeSign.material.map;storeSign.material.needsUpdate=true;};
 storeSign.material=new THREE.MeshStandardMaterial({roughness:.9,emissive:'#ffffff',emissiveIntensity:.1});letrero();document.fonts?.load?.('64px Shrikhand').then(letrero).catch(()=>{});

 for(const [x,z]of[[-2.7,-3.5],[2.4,-3.3]]){box(x,.18,z,.51,.35,.40,'#897052');box(x+.05,.47,z-.04,.40,.23,.32,'#a68c62');}
 // Pizarras en tiza. La de la pared dice lo que hay; la de pie, en la acera, lo que viene de
 // verdad (el 1 contra 1 y Mesa en línea), donde la cámara de la mesa la ve. Ranked no se promete.
 const pizarra=(W,H,lineas)=>{const lienzo=document.createElement('canvas');lienzo.width=W;lienzo.height=H;
  const tex=new THREE.CanvasTexture(lienzo);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=4;
  const tiza=()=>{const c=lienzo.getContext('2d'),shr=document.fonts?.check?.('64px Shrikhand'),sans=document.fonts?.check?.('700 40px "DM Sans"')?'"DM Sans",':'';
   c.fillStyle='#233a2d';c.fillRect(0,0,W,H);
   // Lo que se borró antes: nubes de tiza vieja.
   for(let i=0;i<70;i++){c.fillStyle=`rgba(225,225,195,${.015+random()*.03})`;c.beginPath();c.ellipse(random()*W,random()*H,W*(.04+random()*.14),H*(.015+random()*.045),random()*3,0,Math.PI*2);c.fill();}
   c.textAlign='center';c.textBaseline='middle';c.lineCap='round';
   for(const [texto,y,px,tipo,color] of lineas){
    if(texto==='—'){c.strokeStyle='rgba(225,225,195,.45)';c.lineWidth=6;c.beginPath();c.moveTo(W*.17,y+3);c.quadraticCurveTo(W/2,y-5,W*.83,y+1);c.stroke();continue;}
    c.font=tipo==='titulo'?(shr?`${px}px Shrikhand`:`bold ${px*.95}px Georgia`):`${tipo} ${px}px ${sans}sans-serif`;
    const m=c.measureText(texto).width,ancho=W*.84;c.save();c.translate(W/2,y);if(m>ancho)c.scale(ancho/m,1);c.fillStyle=color;
    for(let k=0;k<3;k++){c.globalAlpha=k?.4:.75;c.fillText(texto,(random()-.5)*3,(random()-.5)*3);}c.restore();}
   // Grano de la tiza: poros del pizarrón encima de lo escrito.
   for(let i=0;i<W*H/40;i++){c.fillStyle='rgba(35,58,45,.5)';c.fillRect(random()*W,random()*H,1+random()*2,1+random());}
   c.strokeStyle='#9c8c62';c.lineWidth=W*.04;c.strokeRect(W*.02,W*.02,W-W*.04,H-W*.04);c.strokeStyle='rgba(60,40,20,.35)';c.lineWidth=4;c.strokeRect(W*.04,W*.04,W-W*.08,H-W*.08);
   tex.needsUpdate=true;};
  tiza();Promise.all([document.fonts?.load?.('64px Shrikhand'),document.fonts?.load?.('700 40px "DM Sans"')]).then(tiza).catch(()=>{});
  return new THREE.MeshStandardMaterial({roughness:1,map:tex,emissive:'#ffffff',emissiveMap:tex,emissiveIntensity:.06});};
 const TIZA='#ece7cc',ORO='#e9b35a',CIELO='#a9d3dd';
 {const board=new THREE.Mesh(new THREE.PlaneGeometry(.72,.69),pizarra(768,736,[['HOY HAY',110,74,'titulo',TIZA],['CAFÉ',262,78,800,TIZA],['HIELO · PAN',388,66,800,'#dcd9b8'],['—',478],['REFRESCOS',572,60,700,CIELO]]));
  board.position.set(-3.43,1.60,-2.33);board.rotation.z=.025;scene.add(board);
  // Y su canalita con un pedazo de tiza.
  box(-3.43,1.245,-2.315,.66,.018,.05,'#8a7a55');box(-3.28,1.262,-2.31,.06,.016,.016,'#efeadb');}
 {const en=document.documentElement.lang==='en',pie=new THREE.Group(),madera=mat('#6b4a2e',.8),ANG=.2,ALTO=.8;
  pie.position.set(-2.0,0,-2.1);pie.rotation.y=.5;scene.add(pie);
  const cara=new THREE.Mesh(new THREE.PlaneGeometry(.56,.72),pizarra(560,720,[[en?'COMING':'YA',96,92,'titulo',ORO],[en?'SOON':'VIENE',206,92,'titulo',ORO],['—',282],[en?'1 vs 1':'1 contra 1',372,80,800,TIZA],[en?'Online':'En línea',478,80,800,TIZA],[en?'your people,':'tu gente,',576,50,600,CIELO],[en?'from anywhere':'de donde sea',636,50,600,CIELO]]));
  // Caballete: la cara inclinada hacia atrás, con marco, y dos patas de atrás que la aguantan.
  const frente=new THREE.Group();frente.rotation.x=-ANG;pie.add(frente);cara.position.set(0,ALTO/2+.04,.012);frente.add(cara);
  {const tabla=new THREE.Mesh(new THREE.BoxGeometry(.56,.72,.012),madera);tabla.position.set(0,ALTO/2+.04,0);frente.add(tabla);}
  for(const [x,y,w,h] of [[-.29,ALTO/2+.02,.035,ALTO+.08],[.29,ALTO/2+.02,.035,ALTO+.08],[0,ALTO+.05,.62,.035],[0,.03,.62,.035]]){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,.022),madera);m.position.set(x,y,0);frente.add(m);}
  const atras=new THREE.Group();atras.position.z=-.32;atras.rotation.x=ANG;pie.add(atras);
  for(const x of [-.27,.27]){const m=new THREE.Mesh(new THREE.BoxGeometry(.03,ALTO+.06,.02),madera);m.position.set(x,(ALTO+.06)/2,-.02);atras.add(m);}
  pie.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});}
 const plants=[];
 // A working counter, not an empty bar: bread, jars, a drawer and a notebook.
 box(-1.12,1.59,-4.0,.42,.21,.31,'#677761');box(-1.12,1.61,-3.836,.34,.10,.016,'#414b3d');box(-.38,1.50,-3.98,.30,.018,.22,'#c5b887');
 for(const [x,z,color]of[[.7,-4.03,'#8b7747'],[.98,-4.07,'#637751'],[1.29,-4.02,'#a88b50']]){cylinder(x,1.60,z,.07,.075,.25,color,14);cylinder(x,1.739,z,.077,.077,.028,'#aaa386',12);}
 box(.20,1.51,-4.01,.40,.07,.28,'#6c5838');for(let i=0;i<4;i++){const loaf=new THREE.Mesh(new THREE.SphereGeometry(1,10,6),mat(i%2?'#bca276':'#a98e61'));loaf.scale.set(.055,.035,.115);loaf.position.set(.07+i*.085,1.57,-4.0);loaf.rotation.y=(i-1.5)*.13;scene.add(loaf);}
 const wear=new THREE.MeshBasicMaterial({transparent:true,depthWrite:false,map:texture((c,w,h)=>{for(let i=0;i<90;i++){c.fillStyle=i%2?'#152c2110':'#3036230a';c.beginPath();c.ellipse(w/2+(random()-.5)*w*.45,h/2+(random()-.5)*h*.45,random()*w*.24,random()*h*.18,random()*Math.PI,0,Math.PI*2);c.fill();}},256,256)});for(const [x,z,w,h]of[[-2.4,-2.2,1.1,.9],[2.5,-2.5,1.3,.8],[0,-3.25,2,.6]]){const stain=new THREE.Mesh(new THREE.PlaneGeometry(w,h),wear);stain.rotation.x=-Math.PI/2;stain.position.set(x,.008,z);scene.add(stain);}
 for(const [x,z]of[[-3,-.90],[3.3,-1.5]]){cylinder(x,.18,z,.18,.13,.34,'#87553c',14);cylinder(x,.354,z,.16,.16,.012,'#3f422d',12);const plant=new THREE.Group();plant.position.set(x,.36,z);scene.add(plant);for(let i=0;i<7;i++){const shape=new THREE.Shape();shape.moveTo(0,0);shape.quadraticCurveTo(-.09,.23,0,.55+random()*.12);shape.quadraticCurveTo(.09,.23,0,0);const leaf=new THREE.Mesh(new THREE.ShapeGeometry(shape,5),new THREE.MeshStandardMaterial({color:i%2?'#597d4f':'#3c603e',roughness:1,side:THREE.DoubleSide}));leaf.rotation.set(.3+random()*.4,i*Math.PI*2/7,0);plant.add(leaf);}plants.push(plant);}
 const clothGeo=new THREE.PlaneGeometry(.55,1.30,5,9),cloth=new THREE.Mesh(clothGeo,new THREE.MeshStandardMaterial({color:'#b2a27c',roughness:1,side:THREE.DoubleSide}));cloth.position.set(-2.85,1.75,-3.05);scene.add(cloth);const vertices=clothGeo.attributes.position,base=vertices.array.slice();
 return {update(t){plants.forEach((p,i)=>p.rotation.z=Math.sin(t*.53+i*2.1)*.015);for(let i=0;i<vertices.count;i++){const y=base[i*3+1];vertices.setZ(i,Math.sin(t*1.17+y*3)*.025*(.65-y)/1.3);}vertices.needsUpdate=true;}};
}
