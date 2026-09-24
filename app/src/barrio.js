import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
/**
 * El barrio alrededor de la esquina: que no se acabe el mundo a 20 m.
 *
 * - La calle principal sigue hasta ±84 m y la de al lado hasta −84, con aceras, contenes,
 *   rayas, postes con cables, faroles de sodio y carros parqueados.
 * - Casas de uno a tres pisos a los dos lados de las dos calles: colores del Caribe
 *   desteñidos, ventanas (unas prendidas), galerías con reja, balcones, tinacos y varillas.
 * - Detrás, el resto del barrio y alguna torre, más bajitos hacia donde sale la luna.
 * - Al fondo, lomas en la bruma: la niebla las deja del color del aire.
 *
 * La cámara no ve más allá de 90 m (su plano lejano): todo cabe en 86 m, y las lomas son una
 * cortina a esa distancia que tapa el horizonte por todos lados.
 *
 * Todo sale en tres mallas (paredes con color por vértice, ventanas prendidas y faroles),
 * así cuesta tres llamadas de dibujo. Nada proyecta ni recibe sombra.
 */
export function armarBarrio({scene,random=Math.random}){
 const R=random,paredes=[],luces=[],faroles=[];
 const col=new THREE.Color();
 const pintar=(geo,c,lista=paredes)=>{col.set(c);const n=geo.attributes.position.count,a=new Float32Array(n*3);for(let i=0;i<n;i++){a[i*3]=col.r;a[i*3+1]=col.g;a[i*3+2]=col.b;}geo.setAttribute('color',new THREE.BufferAttribute(a,3));geo.deleteAttribute('uv');lista.push(geo);return geo;};
 const caja=(x,y,z,w,h,d,c,ry=0,lista)=>{const g=new THREE.BoxGeometry(w,h,d);if(ry)g.rotateY(ry);g.translate(x,y,z);return pintar(g,c,lista);};
 const cilindro=(x,y,z,r,h,c,seg=8)=>{const g=new THREE.CylinderGeometry(r,r,h,seg);g.translate(x,y,z);return pintar(g,c);};
 const plano=(x,y,z,w,h,ry,c,lista)=>{const g=new THREE.PlaneGeometry(w,h);g.rotateY(ry);g.translate(x,y,z);return pintar(g,c,lista);};
 const escoger=a=>a[Math.floor(R()*a.length)];
 const COLORES=['#c98a64','#d8b46a','#6fa9a0','#c48d95','#a3b777','#dca16a','#86a3bf','#e2d3b0','#b7a4c9','#e0a58f','#9ec3b0'];
 const BLOQUE=['#9a968c','#8d8a80','#a39d90'],ACERA='#8a8578',CONTEN='#a8a391',ASFALTO='#2b3133',RAYA='#b9ad83',HIERRO='#1b2224',OSCURA='#232c2e';
 const desteñir=c=>'#'+new THREE.Color(c).multiplyScalar(.85).getHexString();

 /* Una casa. (x,z) es el centro de la fachada al nivel de la calle; `ry` la gira para que la
    fachada mire a la calle (0 = mira a +z). ancho a lo largo de la calle, fondo hacia atrás. */
 function casa(x,z,ry,ancho,fondo,pisos,{lejos=false}={}){
  const H=2.9,alto=pisos*H+.3,c=R()<.18?escoger(BLOQUE):desteñir(escoger(COLORES)),dir=new THREE.Vector3(Math.sin(ry),0,Math.cos(ry)),lado=new THREE.Vector3(dir.z,0,-dir.x);
  const en=(u,y,v)=>new THREE.Vector3(x,y,z).addScaledVector(lado,u).addScaledVector(dir,v);
  const centro=en(0,alto/2,-fondo/2);caja(centro.x,centro.y,centro.z,ancho,alto,fondo,c,ry);
  // Pretil del techo.
  const p=en(0,alto+.09,-fondo/2);caja(p.x,p.y,p.z,ancho+.12,.18,fondo+.12,'#d9d2bf',ry);
  // Ventanas por piso; abajo, puerta y a veces cortina metálica.
  const nv=Math.max(1,Math.floor(ancho/1.6));
  for(let f=0;f<pisos;f++)for(let k=0;k<nv;k++){
   const u=-ancho/2+(k+.5)*ancho/nv,y=f*H+1.55,q=en(u,y,lejos?.04:.012),prendida=R()<(lejos?.3:.38);
   if(f===0&&k===Math.floor(nv/2)&&!lejos){const pu=en(u,1.05,.012);plano(pu.x,pu.y,pu.z,.95,2.1,ry,R()<.3?'#7c8680':OSCURA);continue;}
   if(prendida)plano(q.x,q.y,q.z,.72,.9,ry,R()<.22?'#9fc3ff':escoger(['#ffd08a','#ffc27a','#ffe0a8']),luces);else plano(q.x,q.y,q.z,.72,.9,ry,OSCURA);}
  if(lejos){tinaco(en,alto,ancho,fondo);return;}
  // Galería con reja abajo (la mitad), balcón con baranda arriba (si hay segundo piso).
  if(R()<.5){const g=en(0,.5,.55);caja(g.x,1.0,g.z,ancho-.1,.05,.05,HIERRO,ry);for(const s of [-.5,-.25,0,.25,.5]){const b=en(s*(ancho-.1),.5,.55);caja(b.x,.5,b.z,.05,1.0,.05,HIERRO,ry);}
   const t=en(0,2.75,.6);caja(t.x,t.y,t.z,ancho,.12,1.2,'#cfc6b2',ry);}
  if(pisos>1&&R()<.6){const b=en(0,H+.05,.45);caja(b.x,b.y,b.z,ancho*.7,.12,.9,'#cfc6b2',ry);const r=en(0,H+.55,.88);caja(r.x,r.y,r.z,ancho*.7,.05,.05,HIERRO,ry);
   for(let s=0;s<=6;s++){const q=en((s/6-.5)*ancho*.7,H+.33,.88);caja(q.x,q.y,q.z,.03,.5,.03,HIERRO,ry);}}
  tinaco(en,alto,ancho,fondo);
 }
 function tinaco(en,alto,ancho,fondo){
  if(R()<.45){const t=en((R()-.5)*ancho*.5,alto+.7,-fondo*(.3+R()*.4));cilindro(t.x,t.y,t.z,.55,1.1,'#1f2324',10);}
  if(R()<.22)for(let k=0;k<4;k++){const v=en((k%2-.5)*(ancho-.4),alto+.5,-(k<2?.3:fondo-.3));caja(v.x,v.y,v.z,.04,1+R()*.4,.04,'#5a4a3c');}
  if(R()<.15){const a=en(ancho*.3,alto+1.1,-fondo*.5);caja(a.x,a.y,a.z,.03,2,.03,'#3a3f40');caja(a.x,a.y+.6,a.z,.9,.03,.03,'#3a3f40');}
 }
 /** Una fila de casas a lo largo de una calle, de `desde` a `hasta` sobre el eje de la calle. */
 function fila({eje,desde,hasta,fachada,ry,fondo=[6,9],pisos=[1,3]}){
  let s=desde;while(s<hasta-2){const ancho=Math.min(3.4+R()*3.4,hasta-s),m=s+ancho/2,f=fachada+(R()-.5)*.5;
   const p=pisos[0]+Math.floor(R()*(pisos[1]-pisos[0]+1));
   if(eje==='x')casa(m,f,ry,ancho,fondo[0]+R()*(fondo[1]-fondo[0]),p);else casa(f,m,ry,ancho,fondo[0]+R()*(fondo[1]-fondo[0]),p);
   s+=ancho+.12+(R()<.12?.9+R()*1.5:0);}
 }

 // ── El suelo de todo, debajo de lo demás: sin él, más allá se veía el cielo. ──────────
 {const g=new THREE.PlaneGeometry(460,460);g.rotateX(-Math.PI/2);g.translate(0,-.26,0);pintar(g,'#35363a');}

 // ── La calle principal, a los dos lados de lo que ya había (x ±20). ──────────────────
 for(const [a,b] of [[-86,-20],[20,86]]){const m=(a+b)/2,w=b-a;
  caja(m,-.2,6.05,w,.1,5.4,ASFALTO);caja(m,.08,9.6,w,.16,1.8,ACERA);
  for(let x=a+1;x<b;x+=3.6)caja(x,-.146,6.3,1.4,.008,.1,RAYA);}
 // Aceras y contén del lado del colmado: al oeste del piso de losetas y al este de la calle de al lado.
 caja(-51,-.1,.97,70,.2,4.76,ACERA);caja(-51,-.075,3.45,70,.15,.2,CONTEN);
 caja(49.45,-.1,2.18,73.1,.2,2.36,ACERA);caja(49.45,-.075,3.45,73.1,.15,.2,CONTEN);
 // Las casas: enfrente, del lado del colmado al oeste (después de las cinco que ya hay) y al este.
 fila({eje:'x',desde:-84,hasta:-20.3,fachada:10.6,ry:Math.PI});fila({eje:'x',desde:20.3,hasta:84,fachada:10.6,ry:Math.PI});
 fila({eje:'x',desde:-84,hasta:-22.8,fachada:-1.4,ry:0});fila({eje:'x',desde:16.1,hasta:84,fachada:1.0,ry:0});

 // ── La calle de al lado, hacia el fondo (z < −12,5). ─────────────────────────────────
 caja(8.3,-.2,-49.25,7.4,.1,73.5,ASFALTO);caja(4.25,-.1,-49.25,.7,.2,73.5,ACERA);caja(12.3,-.07,-49.25,1.2,.16,73.5,'#8a8578');
 for(let z=-13;z>-85;z-=3.6)caja(8.3,-.146,z,.1,.008,1.4,RAYA);
 // Detrás del colmado, del lado izquierdo de la calle; y del derecho, después de las casas que hay.
 fila({eje:'z',desde:-84,hasta:-5.5,fachada:3.9,ry:Math.PI/2,fondo:[7,9]});
 fila({eje:'z',desde:-84,hasta:-12.2,fachada:12.9,ry:-Math.PI/2,fondo:[7,9]});

 // ── Postes y cables, y faroles de sodio. ─────────────────────────────────────────────
 const cable=(a,b,caida)=>{const m=a.clone().lerp(b,.5);m.y-=caida*2;const g=new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(a,m,b),14,.014,3,false);pintar(g,'#101517');};
 const poste=(x,z)=>{cilindro(x,3.5,z,.1,7,'#6b6457',6);caja(x,6.6,z,1.6,.08,.08,'#4f4a40');};
 const farol=(x,z,hacia)=>{caja(x+hacia.x*.55,6.0,z+hacia.z*.55,Math.abs(hacia.x)?1.1:.06,.06,Math.abs(hacia.z)?1.1:.06,'#4f4a40');const g=new THREE.SphereGeometry(.16,8,6);g.translate(x+hacia.x*1.1,5.9,z+hacia.z*1.1);pintar(g,'#ffb866',faroles);};
 for(const lado of [-1,1]){let prev=lado<0?-14:16;for(let k=1;k<=5;k++){const x=lado<0?-14-k*12:16+k*12;poste(x,9.2);if(k%2===0)farol(x,9.2,new THREE.Vector3(0,0,-1));
  for(const dy of [0,-.25,.3])cable(new THREE.Vector3(prev,6.6+dy,9.2),new THREE.Vector3(x,6.6+dy,9.2),.5);prev=x;}}
 {let prev=-9;for(let k=1;k<=6;k++){const z=-9-k*12;poste(12.4,z);if(k%2===1)farol(12.4,z,new THREE.Vector3(-1,0,0));
  for(const dy of [0,.3])cable(new THREE.Vector3(12.4,6.6+dy,prev),new THREE.Vector3(12.4,6.6+dy,z),.5);prev=z;}}

 // ── Carros parqueados en los contenes. ───────────────────────────────────────────────
 const carro=(x,z,ry)=>{const c=escoger(['#8b2f2a','#c9c6bd','#2f4a6b','#3b3f42','#b58a3a','#e2dfd6','#556b4f']),dir=new THREE.Vector3(Math.sin(ry),0,Math.cos(ry));
  caja(x,.55,z,1.75,.62,4.1,c,ry);const k=dir.clone().multiplyScalar(-.3);caja(x+k.x,1.1,z+k.z,1.55,.52,2.1,'#2a3236',ry);
  const lat=new THREE.Vector3(dir.z,0,-dir.x);for(const [u,v] of [[-.8,1.3],[.8,1.3],[-.8,-1.3],[.8,-1.3]]){const w=new THREE.CylinderGeometry(.32,.32,.22,10);w.rotateZ(Math.PI/2);w.rotateY(ry);const p=new THREE.Vector3(x,.32,z).addScaledVector(lat,u).addScaledVector(dir,v);w.translate(p.x,p.y,p.z);pintar(w,'#141718');}};
 for(const [x,z,ry] of [[-31,4.4,Math.PI/2],[-47,4.4,Math.PI/2],[-72,4.4,-Math.PI/2],[27,4.4,Math.PI/2],[55,4.4,-Math.PI/2],[-58,7.9,Math.PI/2],[38,7.9,-Math.PI/2],[5.6,-24,0],[5.6,-41,Math.PI],[10.8,-31,0],[10.8,-62,Math.PI]])carro(x,z,ry);

 // ── El resto del barrio: manzanas detrás de las filas, más bajas hacia la luna (+z). ─
 const fuera=(x,z)=>(Math.abs(x)<30&&z>-22&&z<24)||(z>-14&&z<20)||(z<-10&&x>-12&&x<30);
 for(let gx=-78;gx<=78;gx+=13)for(let gz=-78;gz<=78;gz+=13){
  const x=gx+(R()-.5)*6,z=gz+(R()-.5)*6;if(fuera(x,z)||Math.hypot(x,z)>80)continue;
  const r=Math.hypot(x,z),torre=r>45&&R()<.07,hacia=Math.atan2(-x,-z),ry=Math.round(hacia/(Math.PI/2))*(Math.PI/2);
  const pisos=torre?5+Math.floor(R()*5):1+Math.floor(R()*(z>0?2:3));
  casa(x,z,ry,6+R()*6,6+R()*5,pisos,{lejos:true});
  if(R()<.35){const a=escoger(['#3f5a3c','#4a6443','#35503a']),cx=x+(R()-.5)*8,cz=z+(R()-.5)*8,s=2+R()*2.5;
   const g=new THREE.IcosahedronGeometry(s,0);g.scale(1,.8,1);g.translate(cx,s*.6+2.5,cz);pintar(g,a);cilindro(cx,1.4,cz,.25,2.8,'#4d4234',5);}
 }
 // Palmas sueltas por encima de los techos.
 for(let k=0;k<14;k++){const a=R()*Math.PI*2,r=32+R()*44,x=Math.cos(a)*r,z=Math.sin(a)*r;if(fuera(x,z))continue;const h=9+R()*5;
  const t=new THREE.CylinderGeometry(.14,.22,h,5);t.translate(x,h/2,z);pintar(t,'#5d5445');
  for(let j=0;j<8;j++){const hoja=new THREE.ConeGeometry(.3,3,3,1);hoja.rotateZ(Math.PI/2+.5);hoja.translate(1.5,0,0);hoja.rotateY(j/8*Math.PI*2);hoja.translate(x,h,z);pintar(hoja,'#34503a');}}

 // ── Las lomas del fondo: una cortina con el borde de arriba quebrado. ────────────────
 {const n=240,pos=[],idx=[];for(let i=0;i<=n;i++){const a=i/n*Math.PI*2,r=86+Math.sin(a*3.1)*1.5,h=6+7*(.5+.5*Math.sin(a*2.3+.7))+3.5*Math.sin(a*5.1+1)**2+1.2*Math.sin(a*13.7+2)+.5*Math.sin(a*31.3);
   pos.push(Math.cos(a)*r,-1,Math.sin(a)*r,Math.cos(a)*r,Math.max(5,h),Math.sin(a)*r);if(i<n){const b=i*2;idx.push(b,b+2,b+1,b+1,b+2,b+3);}}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setIndex(idx);g.computeVertexNormals();pintar(g,'#3d4552');}

 // ── Tres mallas y listo. ─────────────────────────────────────────────────────────────
 const mallas=[];
 // Unas vienen con índice y otras no (el icosaedro): se juntan todas sin índice.
 const juntar=(lista,m)=>{if(!lista.length)return;const planas=lista.map(g=>g.index?g.toNonIndexed():g);
  const geo=mergeGeometries(planas,false);planas.forEach(g=>g.dispose());lista.forEach(g=>g.dispose());if(!geo)return;const mesh=new THREE.Mesh(geo,m);mesh.matrixAutoUpdate=false;scene.add(mesh);mallas.push(mesh);};
 juntar(paredes,new THREE.MeshStandardMaterial({vertexColors:true,roughness:.92,side:THREE.DoubleSide}));
 juntar(luces,new THREE.MeshBasicMaterial({vertexColors:true,color:new THREE.Color(1.9,1.9,1.9)}));
 juntar(faroles,new THREE.MeshBasicMaterial({vertexColors:true,color:new THREE.Color(5,5,5)}));
 return {mallas};
}
