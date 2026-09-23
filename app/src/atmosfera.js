import * as THREE from 'three';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {ShaderPass} from 'three/addons/postprocessing/ShaderPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {DIM,seats} from './scene-layout.ts';

/**
 * La noche del colmado: todo lo que no es la mesa ni la gente, pero que decide
 * si esto se siente como un patio de barrio a las once o como una maqueta.
 *
 *  - Cielo de noche con estrellas y luna, y la calle de enfrente: casas de
 *    colores con ventanas prendidas, postes, cables, palmas y un farol de sodio.
 *    Antes, detrás de la gente había un color plano.
 *  - El bombillo cuelga bajo sobre la mesa, como en cualquier mesa de dominó,
 *    con su halo y unas palomillas dándole vueltas.
 *  - Posproceso barato: bloom solo en lo que brilla de verdad (bombillos,
 *    ventanas), viñeta y un grano fino. En calidad baja o GPU por software se
 *    salta entero y se dibuja directo.
 *  - La cámara respira: un vaivén mínimo, como una cámara en mano muy quieta.
 *  - La mesa habla: un resplandor cálido en el paño delante de a quien le toca
 *    y dos marcas en las puntas abiertas de la cadena.
 */
const R=(()=>{let s=7;return()=>{s=(Math.imul(s,1664525)+1013904223)>>>0;return s/4294967296;};})();

function textura(draw,w=256,h=256){const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;}
function halo(color='255,214,150'){return textura((g,w,h)=>{const r=g.createRadialGradient(w/2,h/2,0,w/2,h/2,w/2);r.addColorStop(0,`rgba(${color},1)`);r.addColorStop(.18,`rgba(${color},.55)`);r.addColorStop(.5,`rgba(${color},.12)`);r.addColorStop(1,`rgba(${color},0)`);g.fillStyle=r;g.fillRect(0,0,w,h);});}

function cielo(scene){
 const g=new THREE.Group();
 const domo=new THREE.Mesh(new THREE.SphereGeometry(80,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,fog:false,
  vertexShader:`varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  fragmentShader:`varying vec3 vP;
   void main(){float h=vP.y;
    vec3 zen=vec3(.004,.008,.022),hor=vec3(.035,.05,.075),ciudad=vec3(.16,.075,.035);
    vec3 c=mix(hor,zen,smoothstep(0.,.5,h));
    c+=ciudad*pow(max(0.,1.-max(h,0.)*7.),3.)*.9;
    if(h<0.)c=hor*.5;
    gl_FragColor=vec4(c,1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`}));
 domo.renderOrder=-10;g.add(domo);
 // Estrellas: unas mil, más apagadas cerca del horizonte (la luz del barrio).
 const n=900,pos=new Float32Array(n*3),col=new Float32Array(n*3);
 for(let i=0;i<n;i++){const u=R(),th=R()*Math.PI*2,y=.12+u*.88,r=Math.sqrt(1-y*y),k=.3+.7*R()*y;pos.set([Math.cos(th)*r*75,y*75,Math.sin(th)*r*75],i*3);col.set([k*.85,k*.9,k],i*3);}
 const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(pos,3));geo.setAttribute('color',new THREE.BufferAttribute(col,3));
 g.add(new THREE.Points(geo,new THREE.PointsMaterial({size:1.6,sizeAttenuation:false,vertexColors:true,fog:false,depthWrite:false,transparent:true,opacity:.85})));
 // Luna sobre la calle, con su halo.
 const luna=new THREE.Mesh(new THREE.CircleGeometry(1.6,32),new THREE.MeshBasicMaterial({color:'#f3ecd2',fog:false}));luna.position.set(-22,24,52);luna.lookAt(0,1,0);g.add(luna);
 const hl=new THREE.Sprite(new THREE.SpriteMaterial({map:halo('210,220,255'),fog:false,transparent:true,opacity:.35,depthWrite:false,blending:THREE.AdditiveBlending}));hl.scale.setScalar(14);hl.position.copy(luna.position);g.add(hl);
 scene.add(g);return g;
}

/** La calle de enfrente, al otro lado de la acera: casas bajas de colores con
 *  ventanas encendidas, postes con cables, palmas y un farol de sodio. Todo en
 *  pocas mallas (se funden por material). */
function calle(scene){
 // De noche las fachadas casi no se ven: el color va apagado y lo que manda es la luz de las ventanas.
 const porMaterial=new Map(),mat=(c,e=0,ei=0)=>{const k=c+e+ei;if(!porMaterial.has(k))porMaterial.set(k,{m:new THREE.MeshStandardMaterial({color:e?c:new THREE.Color(c).multiplyScalar(.5),roughness:.9,emissive:e||'#000',emissiveIntensity:ei}),g:[]});return porMaterial.get(k);};
 const poner=(geo,m,x,y,z,ry=0)=>{geo.rotateY(ry);geo.translate(x,y,z);m.g.push(geo);};
 const colores=['#b8654a','#c9a14f','#4f8a84','#a8566b','#7f9a57','#c47f45','#5f7ea0'];
 let x=-20;
 while(x<20){
  const w=3.4+R()*2.6,h=3+R()*2.8,z=10.5+R()*.8,c=colores[Math.floor(R()*colores.length)];
  poner(new THREE.BoxGeometry(w,h,2.4),mat(c),x+w/2,h/2,z+1.2);
  poner(new THREE.BoxGeometry(w+.12,.18,2.6),mat('#d9d2bf'),x+w/2,h+.09,z+1.2);
  // Ventanas y puerta: unas prendidas (amarillo cálido o azul de televisor), otras no.
  const nv=Math.max(1,Math.floor(w/1.5));
  for(let i=0;i<nv;i++){const vx=x+(i+.5)*w/nv,prendida=R()<.62,tv=R()<.22;
   const m=prendida?mat(tv?'#9fc3ff':'#ffd08a',tv?'#6f9cff':'#ffb35a',tv?2.4:3.2):mat('#1e2a2e');
   poner(new THREE.PlaneGeometry(.75,.95),m,vx,1.55,z-.005,Math.PI);
   if(h>4.2)poner(new THREE.PlaneGeometry(.7,.8),R()<.5?mat('#ffd08a','#ffb35a',1.8):mat('#1e2a2e'),vx,h-1.1,z-.005,Math.PI);
   poner(new THREE.BoxGeometry(.9,.06,.12),mat('#2c3432'),vx,2.08,z-.06);}
  // Rejas de hierro de las galerías: unas barras finas.
  for(let b=0;b<Math.floor(w/.22);b++)poner(new THREE.BoxGeometry(.018,.9,.018),mat('#1b2224'),x+.11+b*.22,.45,z-.55);
  poner(new THREE.BoxGeometry(w,.04,.04),mat('#1b2224'),x+w/2,.9,z-.55);
  x+=w+.15;
 }
 // Acera de enfrente.
 poner(new THREE.BoxGeometry(44,.16,1.8),mat('#8a8578'),0,.08,9.6);
 // Postes y cables, con el farol de sodio.
 const postes=[-14,-4,6,16];
 for(const px of postes){poner(new THREE.CylinderGeometry(.09,.12,7,8),mat('#6b6457'),px,3.5,9.2);poner(new THREE.BoxGeometry(1.6,.08,.08),mat('#4f4a40'),px,6.6,9.2);}
 for(let i=0;i<postes.length-1;i++)for(const dy of [0,-.25,.3]){const a=new THREE.Vector3(postes[i],6.6+dy,9.2),b=new THREE.Vector3(postes[i+1],6.6+dy,9.2),m=a.clone().lerp(b,.5);m.y-=.55;poner(new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(a,m,b),16,.012,4),mat('#101517'),0,0,0);}
 // Palmas: tronco curvo y un penacho de hojas en silueta.
 for(const [px,pz,h] of [[-9,12.8,7.5],[11,13.1,8.4],[2.5,13.4,6.4]]){
  const curva=new THREE.CatmullRomCurve3([new THREE.Vector3(px,0,pz),new THREE.Vector3(px+.3,h*.5,pz),new THREE.Vector3(px+.8,h,pz-.2)]);
  poner(new THREE.TubeGeometry(curva,12,.16,6),mat('#5d5445'),0,0,0);
  for(let k=0;k<9;k++){const a=k/9*Math.PI*2,hoja=new THREE.ConeGeometry(.28,2.6,4,1);hoja.rotateZ(Math.PI/2+.55);hoja.translate(1.3,0,0);hoja.rotateY(a);poner(hoja,mat('#233428'),px+.8,h,pz-.2);}
 }
 const merged=[];
 for(const {m,g} of porMaterial.values()){const geo=mergeGeometries(g,false);g.forEach(x=>x.dispose());if(!geo)continue;const mesh=new THREE.Mesh(geo,m);mesh.receiveShadow=true;scene.add(mesh);merged.push(mesh);}
 // El farol: luz naranja de sodio sobre la calle, sin sombra (es barata).
 const farol=new THREE.PointLight('#ff9d4d',9,14,1.8);farol.position.set(6,5.9,8.6);scene.add(farol);
 const bomb=new THREE.Mesh(new THREE.SphereGeometry(.14,12,8),new THREE.MeshStandardMaterial({color:'#ffcf94',emissive:'#ff9a45',emissiveIntensity:5}));bomb.position.copy(farol.position);scene.add(bomb);
 const brazo=new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,1.3,6),new THREE.MeshStandardMaterial({color:'#4f4a40'}));brazo.rotation.z=Math.PI/2;brazo.position.set(6,6.05,8.9);scene.add(brazo);
 return {merged,farol};
}

/** El bombillo sobre la mesa, con halo y palomillas. */
function bombillo(scene,pos){
 const g=new THREE.Group();g.position.copy(pos);scene.add(g);
 const vidrio=new THREE.Mesh(new THREE.SphereGeometry(.038,16,12),new THREE.MeshStandardMaterial({color:'#fff4d6',emissive:'#ffd08a',emissiveIntensity:9}));vidrio.scale.y=1.25;g.add(vidrio);
 const socket=new THREE.Mesh(new THREE.CylinderGeometry(.018,.02,.05,10),new THREE.MeshStandardMaterial({color:'#2b2a26',roughness:.6}));socket.position.y=.065;g.add(socket);
 const cordon=new THREE.Mesh(new THREE.CylinderGeometry(.004,.004,1.1,5),new THREE.MeshStandardMaterial({color:'#15181a'}));cordon.position.y=.64;g.add(cordon);
 const h=new THREE.Sprite(new THREE.SpriteMaterial({map:halo(),transparent:true,opacity:.55,depthWrite:false,blending:THREE.AdditiveBlending}));h.scale.setScalar(.75);g.add(h);
 // Palomillas: puntitos oscuros que giran alrededor, cada una en su órbita.
 const polillas=[];const pm=new THREE.SpriteMaterial({color:'#3b3026',transparent:true,opacity:.85,depthWrite:false});
 for(let i=0;i<6;i++){const s=new THREE.Sprite(pm);s.scale.setScalar(.012+R()*.008);g.add(s);polillas.push({s,r:.07+R()*.12,w:2+R()*4,f:R()*6,y:.05+R()*.08,k:1.3+R()});}
 return {g,halo:h,polillas};
}

/* Entorno de noche para los reflejos (PMREM): cielo oscuro, el bombillo cálido arriba, la luz
   fría del colmado hacia atrás y el sodio de la calle en el horizonte. El RoomEnvironment de
   antes era un estudio blanco: daba brillos de caja de luz y todo se veía de computadora. */
function escenaEntorno(){
 const e=new THREE.Scene();
 e.add(new THREE.Mesh(new THREE.SphereGeometry(10,24,12),new THREE.ShaderMaterial({side:THREE.BackSide,vertexShader:`varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 vP;void main(){gl_FragColor=vec4(mix(vec3(.07,.1,.13),vec3(.012,.02,.04),smoothstep(-.1,.6,vP.y)),1.);}`})));
 const luz=(c,k,w,h,pos,mira)=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(k),side:THREE.DoubleSide}));m.position.set(...pos);m.lookAt(...mira);e.add(m);};
 luz('#ffcf94',8,1.2,1.2,[0,6,0],[0,0,0]);luz('#bfe3d6',2,5,2,[0,2.5,-8],[0,1,0]);luz('#ff9a3c',.6,18,.8,[0,.6,9],[0,1,0]);
 return e;
}
export function crearAtmosfera({scene,renderer,camera,controls,software,bulbLight}){
 function entorno(){const pm=new THREE.PMREMGenerator(renderer),fuente=escenaEntorno(),rt=pm.fromScene(fuente,.02);scene.environment?.dispose?.();scene.environment=rt.texture;scene.environmentIntensity=.6;pm.dispose();fuente.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});}
 entorno();
 scene.background=new THREE.Color('#05080f');
 scene.fog=new THREE.FogExp2('#0b1419',.035);
 const sky=cielo(scene),street=calle(scene);
 const bulbPos=new THREE.Vector3(0,DIM.surfaceY+1.3,0),bulb=bombillo(scene,bulbPos);

 // Resplandor del turno: una mancha cálida en el paño delante de a quien le toca.
 const glowTex=textura((g,w,h)=>{const r=g.createRadialGradient(w/2,h*.62,0,w/2,h*.62,w/2);r.addColorStop(0,'rgba(255,196,110,.95)');r.addColorStop(.45,'rgba(255,170,80,.35)');r.addColorStop(1,'rgba(255,150,60,0)');g.fillStyle=r;g.fillRect(0,0,w,h);},256,128);
 const turno=new THREE.Mesh(new THREE.PlaneGeometry(.62,.26),new THREE.MeshBasicMaterial({map:glowTex,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending,toneMapped:false}));
 turno.rotation.x=-Math.PI/2;turno.position.y=DIM.surfaceY+.0012;turno.renderOrder=3;scene.add(turno);
 const turnoEstado={i:-1,ang:0,alfa:0,objetivo:0,pos:new THREE.Vector3()};

 // Puntas abiertas: un anillo que late en cada punta de la cadena.
// Punta izquierda ámbar, derecha turquesa: los mismos colores de los botones del teléfono,
 // así "juégala por aquí" se ve en la mesa y no es un "izquierda" abstracto.
 const puntaTex=rgb=>textura((g,w,h)=>{g.strokeStyle=`rgba(${rgb},1)`;g.lineWidth=w*.09;g.beginPath();g.arc(w/2,h/2,w*.36,0,Math.PI*2);g.stroke();const r=g.createRadialGradient(w/2,h/2,0,w/2,h/2,w/2);r.addColorStop(0,`rgba(${rgb},.5)`);r.addColorStop(1,`rgba(${rgb},0)`);g.fillStyle=r;g.fillRect(0,0,w,h);},128,128);
 const puntas=['255,181,71','45,225,194'].map(rgb=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(.036,.036),new THREE.MeshBasicMaterial({map:puntaTex(rgb),transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending,toneMapped:false}));m.rotation.x=-Math.PI/2;m.position.y=DIM.surfaceY+.0015;m.renderOrder=3;scene.add(m);return m;});
 let extremos=null;

 // La cámara que de verdad dibuja: sigue a la de los controles con un vaivén mínimo.
 const vista=camera.clone();
 const _d=new THREE.Vector3(),_t=new THREE.Vector3();

 // Posproceso.
 let composer=null,bloom=null,grado=null,usar=false;
 function armar(){
  if(composer)return;
  const size=renderer.getDrawingBufferSize(new THREE.Vector2());
  const rt=new THREE.WebGLRenderTarget(size.x,size.y,{type:THREE.HalfFloatType,samples:4});
  composer=new EffectComposer(renderer,rt);
  composer.addPass(new RenderPass(scene,vista));
  bloom=new UnrealBloomPass(new THREE.Vector2(size.x/2,size.y/2),.4,.5,2);composer.addPass(bloom);
  grado=new ShaderPass({uniforms:{tDiffuse:{value:null},uTiempo:{value:0},uVineta:{value:.34},uGrano:{value:.018}},
   vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
   fragmentShader:`uniform sampler2D tDiffuse;uniform float uTiempo,uVineta,uGrano;varying vec2 vUv;
    float azar(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uTiempo*43.7)*43758.5453);}
    void main(){vec4 c=texture2D(tDiffuse,vUv);
     vec2 q=vUv-.5;float v=1.-uVineta*smoothstep(.25,.85,length(q*vec2(1.15,1.)));
     c.rgb*=v;
     // Sombras un pelín más frías y luces más cálidas: noche con bombillo.
     float l=dot(c.rgb,vec3(.2126,.7152,.0722));
     c.rgb*=mix(vec3(.93,.97,1.05),vec3(1.04,1.,.94),smoothstep(.02,.4,l));
     c.rgb+=(azar(vUv*vec2(1920.,1080.))-.5)*uGrano*(.4+l);
     gl_FragColor=c;}`});
  composer.addPass(grado);
  composer.addPass(new OutputPass());
 }
 function calidad(q){usar=!software&&q==='high';if(usar)armar();bulb.halo.visible=true;street.farol.visible=q==='high';}
 function resize(w,h){if(composer){composer.setPixelRatio(renderer.getPixelRatio());composer.setSize(w,h);}vista.aspect=camera.aspect;vista.updateProjectionMatrix();}

 const luzBase=bulbLight?bulbLight.position.clone():null,_b=new THREE.Vector3();
 function frame(t,dt,{reduced,view,ends,temblor=0}){
  // Cámara con vaivén: posición y mirada, en fracciones de centímetro.
  vista.copy(camera);
  if(!reduced){_d.set(Math.sin(t*.11)*.012+Math.sin(t*.037)*.008,Math.sin(t*.083+1)*.007,Math.cos(t*.097)*.01);if(temblor)_d.add(_t.set(Math.sin(t*97)*temblor,Math.sin(t*113)*temblor*.6,Math.cos(t*89)*temblor));vista.position.add(_d);_t.copy(controls.target).addScaledVector(_d,.35);vista.lookAt(_t);}
  // El bombillo se mece en su cordón (1,1 m, ~2,2 s de período): la luz y las sombras respiran.
  if(!reduced){const a=.012*Math.sin(t*2.86),b=.008*Math.sin(t*2.3+1.3);_b.set(Math.sin(a)*1.1,0,Math.sin(b)*1.1);bulb.g.position.copy(bulbPos).add(_b);bulb.g.rotation.set(b,0,-a);if(bulbLight)bulbLight.position.copy(luzBase).add(_b);}
  vista.updateMatrixWorld();
  // Bombillo: un parpadeo de voltaje casi imperceptible, palomillas dando vueltas.
  bulb.halo.material.opacity=.5+.05*Math.sin(t*23)*Math.sin(t*1.7)+(reduced?0:.03*Math.sin(t*3.1));
  if(!reduced)for(const p of bulb.polillas){const a=t*p.w+p.f;p.s.position.set(Math.cos(a)*p.r,p.y+Math.sin(a*p.k)*.05,Math.sin(a*1.3)*p.r);}
  // Turno: el resplandor se desliza al asiento de quien juega.
  const jugando=view?.phase==='playing';
  if(jugando&&view.turn!=null){const [sx,sz,ang]=seats[view.turn],r=DIM.boardLimit+.075;
   if(turnoEstado.i!==view.turn){turnoEstado.i=view.turn;turnoEstado.destino=new THREE.Vector3(sx*r/DIM.seatDistance,0,sz*r/DIM.seatDistance);turnoEstado.angDestino=ang;}
   turnoEstado.pos.lerp(turnoEstado.destino,1-Math.exp(-dt*6));
   let da=turnoEstado.angDestino-turnoEstado.ang;da=Math.atan2(Math.sin(da),Math.cos(da));turnoEstado.ang+=da*(1-Math.exp(-dt*6));
   turnoEstado.objetivo=.8+(reduced?0:.12*Math.sin(t*2.2));
  }else turnoEstado.objetivo=0;
  turnoEstado.alfa+=(turnoEstado.objetivo-turnoEstado.alfa)*(1-Math.exp(-dt*4));
  turno.material.opacity=turnoEstado.alfa;turno.visible=turnoEstado.alfa>.01;
  turno.position.set(turnoEstado.pos.x,DIM.surfaceY+.0012,turnoEstado.pos.z);turno.rotation.set(-Math.PI/2,0,turnoEstado.ang);
  // Puntas abiertas.
  for(let k=0;k<2;k++){const m=puntas[k],e=jugando&&ends?ends[k]:null;
   if(!e){m.material.opacity=Math.max(0,m.material.opacity-dt*3);m.visible=m.material.opacity>.01;continue;}
   m.visible=true;m.position.set(e.x,DIM.surfaceY+.0015,e.z);const late=reduced?1:1+.12*Math.sin(t*3.4+k*1.3);m.scale.setScalar(late);
   m.material.opacity=Math.min(.9,m.material.opacity+dt*3);}
  if(grado)grado.uniforms.uTiempo.value=t%100;
 }
 function render(){if(usar&&composer)composer.render();else renderer.render(scene,vista);}
 function dispose(){composer?.dispose();}
 return {vista,frame,render,resize,calidad,dispose,bulbPos,entorno};
}
