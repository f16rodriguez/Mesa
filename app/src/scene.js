import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {clone as cloneSkeleton} from 'three/addons/utils/SkeletonUtils.js';
const TAU=Math.PI*2, v3=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);
import {DIM,seats,chainLayout} from './scene-layout.ts';
import {capturePose,applySeatedMotion} from './scene-motion.js';
import {dressColmado} from './colmado-detail.js';
const pips=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];
export async function createWorld(container,{onProgress=()=>{}}={}){
 const scene=new THREE.Scene();scene.background=new THREE.Color('#132931');scene.fog=new THREE.FogExp2('#132931',.024);
 const camera=new THREE.PerspectiveCamera(42,innerWidth/innerHeight,.08,90);camera.position.set(3.1,2.65,4.2);
 let renderer;try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});}catch{throw Error('This device could not start WebGL. Try a recent desktop browser.');}
 const software=/SwiftShader|llvmpipe|Software/i.test((()=>{const gl=renderer.getContext(),ext=gl.getExtension('WEBGL_debug_renderer_info');return ext?gl.getParameter(ext.UNMASKED_RENDERER_WEBGL):'';})());
 renderer.setSize(innerWidth,innerHeight);renderer.setPixelRatio(software?.65:Math.min(devicePixelRatio,1.5,1920/innerWidth));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;renderer.shadowMap.enabled=!software;renderer.shadowMap.type=THREE.PCFShadowMap;container.appendChild(renderer.domElement);
 const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,.8,-.15);controls.enableDamping=true;controls.dampingFactor=.065;controls.enablePan=false;controls.minDistance=2.3;controls.maxDistance=8;controls.minPolarAngle=.25;controls.maxPolarAngle=Math.PI*.48;controls.update();
 scene.add(new THREE.HemisphereLight('#b9c9dd','#655244',1.05));const moon=new THREE.DirectionalLight('#b6cbe3',1.0);moon.position.set(-5,9,5);scene.add(moon);
 const bulbLight=new THREE.SpotLight('#ffd19b',36,14,Math.PI*.44,.72,1.8);bulbLight.position.set(0,4.15,.5);bulbLight.target.position.set(0,.2,0);bulbLight.castShadow=true;bulbLight.shadow.mapSize.set(1024,1024);bulbLight.shadow.bias=-.0004;bulbLight.shadow.normalBias=.035;scene.add(bulbLight,bulbLight.target);
 const storeGlow=new THREE.PointLight('#ffbf7d',17,9,2);storeGlow.position.set(0,2.5,-3.5);scene.add(storeGlow);
 const materials=new Map(),batches=new Map();
 function mat(color,roughness=.85,metalness=0){const key=color+','+roughness+','+metalness;if(!materials.has(key))materials.set(key,new THREE.MeshStandardMaterial({color,roughness,metalness}));return materials.get(key);}
 function staticGeo(geo,material,pos,rot=[0,0,0],scale=[1,1,1]){const key=material.uuid;if(!batches.has(key))batches.set(key,{material,geos:[]});const m=new THREE.Matrix4().compose(v3(...pos),new THREE.Quaternion().setFromEuler(new THREE.Euler(...rot)),v3(...scale));geo.applyMatrix4(m);batches.get(key).geos.push(geo);}
 function box(x,y,z,w,h,d,color,rotation=0){staticGeo(new THREE.BoxGeometry(w,h,d),typeof color==='string'?mat(color):color,[x,y,z],[0,rotation,0]);}
 function cylinder(x,y,z,rt,rb,h,color,segments=10,rot=[0,0,0]){staticGeo(new THREE.CylinderGeometry(rt,rb,h,segments),typeof color==='string'?mat(color):color,[x,y,z],rot);}
 function texture(draw,w=512,h=512){const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());return t;}
 let seed=191;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 const woodtex=texture((c,w,h)=>{c.fillStyle='#65432b';c.fillRect(0,0,w,h);for(let i=0;i<700;i++){c.strokeStyle=`rgba(${random()>.5?'170,122,70':'35,22,14'},${.08+random()*.2})`;c.lineWidth=.3+random()*2;c.beginPath();const y=random()*h;c.moveTo(0,y);for(let x=0;x<w;x+=20)c.lineTo(x,y+Math.sin(x*.013+i)*3);c.stroke();}});
 const wood=new THREE.MeshStandardMaterial({map:woodtex,roughness:.65,color:'#e7bc8c'}),darkwood=mat('#4c3022',.75),teal=mat('#287770'),cream=mat('#d2c5a2'),coral=mat('#a65443');
 const groundTex=texture((c,w,h)=>{c.fillStyle='#746f5f';c.fillRect(0,0,w,h);for(let i=0;i<18000;i++){c.fillStyle=`rgba(${random()>.5?'210,203,175':'45,47,41'},.12)`;c.fillRect(random()*w,random()*h,1+random()*3,1+random()*2);}c.strokeStyle='#4f5349';c.lineWidth=2;c.strokeRect(1,1,w-2,h-2);});groundTex.wrapS=groundTex.wrapT=THREE.RepeatWrapping;groundTex.repeat.set(16,12);
 box(0,-.10,0,32,.2,25,new THREE.MeshStandardMaterial({map:groundTex,roughness:1,color:'#c3b59e'}));box(0,-.11,6.3,35,.1,5.5,'#343b3b');box(0,.02,3.45,35,.2,.2,'#aaa592');
 for(let i=-8;i<9;i++)box(i*1.8,-.045,6.3,.7,.012,.045,'#b9ad83');
 // The colmado is a room: solid walls, inset shelving and an open front.
 box(0,1.6,-5.1,7.5,3.4,.2,teal);box(-3.8,1.6,-3.85,.2,3.4,2.7,teal);box(3.8,1.6,-3.85,.2,3.4,2.7,teal);
 box(-3.48,1.1,-2.52,.7,2.3,.32,teal);box(3.45,1.1,-2.52,.8,2.3,.32,teal);
 box(0,2.95,-2.52,7.5,.42,.35,coral);box(0,3.24,-3.7,8,.12,4.4,'#435451');
 for(let i=0;i<30;i++)box(-4+i*.276,3.3,-3.7,.028,.055,4.6,'#82928a');
 box(0,.70,-4.24,3.9,1.40,.62,wood);box(0,1.43,-4.2,4.08,.10,.78,wood);
 for(let row=0;row<3;row++){box(-.6,1.58+row*.48,-4.78,5.8,.065,.38,wood);box(-.6,1.84+row*.48,-4.98,5.8,.48,.065,'#443e30');}
 box(2.95,1.02,-4.55,1.02,2.1,.8,'#d0ceb8');box(2.95,1.12,-4.11,.84,1.55,.035,'#254c51');
 for(let r=0;r<3;r++)box(2.95,.59+r*.51,-4.05,.8,.025,.05,'#b3c5bc');
 const bottles=[];for(let i=0;i<88;i++){const row=Math.floor(i/29),col=i%29;bottles.push({pos:[-3.18+col*.182,1.615+row*.48,-4.69],scale:.70+(i%5)*.07,color:['#566641','#a27735','#293f37','#6b3126'][i%4]});}
 const bottleGeo=new THREE.LatheGeometry([new THREE.Vector2(0,0),new THREE.Vector2(.036,0),new THREE.Vector2(.043,.025),new THREE.Vector2(.043,.17),new THREE.Vector2(.019,.205),new THREE.Vector2(.017,.285),new THREE.Vector2(.021,.29),new THREE.Vector2(.021,.305),new THREE.Vector2(0,.31)],12);
 bottles.forEach(b=>staticGeo(bottleGeo.clone(),mat(b.color,.3),b.pos,[0,0,0],[b.scale,b.scale,b.scale]));
 // Crates, patio seating, and warm windows down the street.
 for(const [x,z,c] of [[-3.1,-1.9,'#a15340'],[3.1,-2.0,'#9d6540'],[-3.2,-2.0,'#5f6e39']]){for(let j=0;j<3;j++){box(x,.19+j*.34,z,.52,.30,.40,c);for(let k=0;k<5;k++)box(x-.2+k*.1,.18+j*.34,z+.204,.055,.16,.015,'#2c3025');}}
 for(let i=0;i<5;i++){const x=-7-i*3.5;box(x,1.5,-3.0,3.1,3.0,3.2,i%2?'#b3694f':'#4c8174');box(x,2.2,-1.38,1.0,.8,.045,'#b59961');box(x,2.2,-1.35,.045,.86,.055,'#273e37');box(x,.98,-1.38,.9,1.9,.04,'#354e49');}
 for(let i=0;i<4;i++){cylinder(-5-i*5,2.3,-2.1,.08,.09,4.6,'#665443');box(-5-i*5,4.2,-2.1,1.8,.09,.09,'#514b3d');}
 function cable(a,b,mid,color='#202d28'){const curve=new THREE.QuadraticBezierCurve3(v3(...a),v3(...mid),v3(...b));staticGeo(new THREE.TubeGeometry(curve,20,.008,4,false),mat(color),[0,0,0]);}
 cable([-8,3.9,-.9],[6,3.9,-.9],[0,2.4,-.9]);
 for(let i=0;i<14;i++){const x=-5+i*.78,y=3.6-.4*Math.sin((i/13)*Math.PI);cylinder(x,y,-.9,.026,.031,.075,new THREE.MeshStandardMaterial({color:'#fff0c1',emissive:'#ffbc63',emissiveIntensity:2}),8);}
 cable([0,5,-1],[0,3.75,.25],[0,4.4,-.1]);cylinder(0,3.67,.25,.08,.05,.10,new THREE.MeshStandardMaterial({color:'#ffe7a6',emissive:'#ffd18b',emissiveIntensity:3}),12);
 // Light catches a little metal awning and the leaves; no flat photo wall.
 const foliage=new THREE.Group();foliage.position.set(4.8,0,-2.8);scene.add(foliage);const trunk=new THREE.Mesh(new THREE.CylinderGeometry(.1,.15,4.5,9),mat('#696047'));trunk.position.y=2.25;foliage.add(trunk);
 for(let i=0;i<9;i++){const leaf=new THREE.Mesh(new THREE.SphereGeometry(1,10,5),mat(i%2?'#4a654c':'#344e3d'));leaf.scale.set(.27,.075,1.5);leaf.position.set(Math.sin(i*TAU/9)*.72,4.35,Math.cos(i*TAU/9)*.72);leaf.rotation.set(.23,i*TAU/9,0);foliage.add(leaf);}
 // Physical game table.
 const tableTop=new THREE.Mesh(new RoundedBoxGeometry(DIM.tableWidth,DIM.tableThickness,DIM.tableWidth,3,.035),wood);tableTop.position.y=DIM.tableCenterY;tableTop.castShadow=true;tableTop.receiveShadow=true;scene.add(tableTop);
 const felt=new THREE.Mesh(new RoundedBoxGeometry(DIM.feltWidth,.012,DIM.feltWidth,2,.02),new THREE.MeshStandardMaterial({color:'#284e3e',roughness:1}));felt.position.y=DIM.feltCenterY;felt.receiveShadow=true;scene.add(felt);
 for(const x of [-.49,.49])for(const z of [-.49,.49])box(x,.35,z,.095,.68,.095,darkwood);
 for(const x of [-.602,.602])for(const z of [-.602,.602])cylinder(x,.771,z,.044,.044,.006,'#231c15',20);
 for(let i=0;i<4;i++){const [x,z,ang]=seats[i],group=new THREE.Group();group.position.set(x,0,z);group.rotation.y=ang;scene.add(group);const chairMat=mat(i%2?'#c8c8b3':'#abbbb3');const add=(w,h,d,px,py,pz)=>{const p=v3(px,py,pz).applyAxisAngle(v3(0,1,0),ang).add(v3(x,0,z));staticGeo(new RoundedBoxGeometry(w,h,d,2,.022),chairMat,p.toArray(),[0,ang,0]);};add(DIM.chairSeatWidth,.06,.54,0,DIM.chairSeatY,0);add(.53,.47,.05,0,.79,-.25);for(const lx of [-.24,.24])for(const lz of [-.21,.21])add(.042,.49,.042,lx,.245,lz);}
 function sign(text,width,height,bg,fg,size=60){const t=texture((c,w,h)=>{c.fillStyle=bg;c.fillRect(0,0,w,h);c.fillStyle=fg;c.textAlign='center';c.textBaseline='middle';c.font=`bold ${size}px Georgia`;c.fillText(text,w/2,h/2);},1024,256);return new THREE.Mesh(new THREE.PlaneGeometry(width,height),new THREE.MeshBasicMaterial({map:t}));}
 const storeSign=sign('COLMADO  LA ESQUINA',4.8,.38,'#a05d42','#f8e8b9',64);storeSign.position.set(0,2.94,-2.33);scene.add(storeSign);
 const tableLogo=sign('MESA',.18,.048,'#284e3e','#81906b',77);tableLogo.rotation.x=-Math.PI/2;tableLogo.position.set(0,DIM.surfaceY+.001,.46);scene.add(tableLogo);
 // Shop fan, rotating in actual scene coordinates.
 const fan=new THREE.Group();fan.position.set(0,2.62,-2.20);fan.rotation.x=-Math.PI/2;scene.add(fan);cylinder(0,2.90,-2.20,.015,.015,.56,'#777a68',8);cylinder(0,3.18,-2.20,.075,.075,.025,'#767763',12);const hub=new THREE.Mesh(new THREE.SphereGeometry(.075,12,8),mat('#41493d'));fan.add(hub);for(let i=0;i<5;i++){const blade=new THREE.Mesh(new THREE.BoxGeometry(.13,.50,.025),mat('#85856e',.88,.05));blade.position.set(Math.sin(i*TAU/5)*.285,Math.cos(i*TAU/5)*.285,0);blade.rotation.z=-i*TAU/5;fan.add(blade);}
 // A quiet moto crossing the street. It is a visible passing prop, not traffic AI.
 const moto=new THREE.Group();moto.position.set(-12,.05,5.2);scene.add(moto);for(const x of [-.36,.36]){const wheel=new THREE.Mesh(new THREE.TorusGeometry(.19,.038,7,14),mat('#182221'));wheel.position.set(x,.2,0);moto.add(wheel);}const bikeBody=new THREE.Mesh(new RoundedBoxGeometry(.65,.17,.20,2,.04),mat('#823e2f',.45,.25));bikeBody.position.y=.49;moto.add(bikeBody);const seatMesh=new THREE.Mesh(new THREE.BoxGeometry(.35,.06,.22),mat('#202725'));seatMesh.position.set(-.08,.61,0);moto.add(seatMesh);const handle=new THREE.Mesh(new THREE.CylinderGeometry(.015,.015,.45,6),mat('#8c9c96',.4,.5));handle.position.set(.32,.59,0);handle.rotation.z=-.3;moto.add(handle);
 // Weathered surfaces and everyday groceries reuse the existing scene assets.
 const colmado=dressColmado({scene,texture,mat,box,cylinder,random,teal,wood,storeSign});
 // Merge static architecture by material instead of hundreds of draw calls.
 for(const {material,geos} of batches.values()){const merged=mergeGeometries(geos,false);if(merged){const mesh=new THREE.Mesh(merged,material);mesh.receiveShadow=true;mesh.castShadow=true;scene.add(mesh);}geos.forEach(g=>g.dispose());}
 const tileGroup=new THREE.Group(),rackGroup=new THREE.Group();scene.add(tileGroup,rackGroup);
 const tileGeo=new RoundedBoxGeometry(DIM.tileLength,DIM.tileThickness,DIM.tileWidth,2,.005),ivory=mat('#f3edda',.75),dark=mat('#d9d4c1',.75);
 const ink=new THREE.MeshBasicMaterial({color:'#090d0c',toneMapped:false}),seamMat=new THREE.MeshBasicMaterial({color:'#111410',toneMapped:false});
 const pipGeo=new THREE.CylinderGeometry(DIM.pipRadius,DIM.pipRadius,.0015,14),seamGeo=new THREE.BoxGeometry(.0035,.001,DIM.tileWidth*.82);
 const sharedGeometry=new Set([tileGeo,pipGeo,seamGeo]),sharedMaterials=new Set([ivory,dark,ink,seamMat]);
 function domino(a,b,back=false){
  const g=new THREE.Group(),body=new THREE.Mesh(tileGeo,back?dark:ivory);body.castShadow=true;body.receiveShadow=true;g.add(body);
  if(!back){
   const positions=[];[a,b].forEach((n,part)=>pips[n].forEach(k=>positions.push(v3((part===0?-1:1)*DIM.tileLength/4+(k%3-1)*DIM.pipColumnSpacing,DIM.tileThickness/2+.002, (Math.floor(k/3)-1)*DIM.pipRowSpacing))));
   if(positions.length){const dots=new THREE.InstancedMesh(pipGeo,ink,positions.length),m=new THREE.Matrix4();positions.forEach((p,i)=>dots.setMatrixAt(i,m.makeTranslation(p.x,p.y,p.z)));g.add(dots);}
   const seam=new THREE.Mesh(seamGeo,seamMat);seam.position.y=DIM.tileThickness/2+.0015;g.add(seam);
  }return g;
 }
 function boardPosition(p){return v3(p.x,DIM.surfaceY+DIM.tileThickness/2+.001,p.z);}
 const ring=new THREE.Mesh(new THREE.TorusGeometry(.20,.006,5,38),new THREE.MeshBasicMaterial({color:'#e8bf70',transparent:true,opacity:.7}));ring.rotation.x=-Math.PI/2;ring.position.y=.027;scene.add(ring);
 const characters=[],templates=[],crowd=[],drinks=[];const loader=new GLTFLoader();let loaded=0,total=4,failed=[];
 function drink(index){const group=new THREE.Group(),type=['coffee','juice','beer','water'][index];if(type==='beer'){const m=new THREE.Mesh(bottleGeo,mat('#62421e',.23,.05));m.scale.setScalar(.85);group.add(m);}else{const cup=new THREE.Mesh(new THREE.CylinderGeometry(.047,.037,.105,18),mat(type==='coffee'?'#e4dfc8':type==='juice'?'#bfa478':'#719b9c',.3));cup.position.y=.055;group.add(cup);const fill=new THREE.Mesh(new THREE.CircleGeometry(.041,20),mat(type==='coffee'?'#24150e':type==='juice'?'#ebbd72':'#9cbfc0',.16));fill.rotation.x=-Math.PI/2;fill.position.y=.110;group.add(fill);if(type==='coffee'){const saucer=new THREE.Mesh(new THREE.CylinderGeometry(.075,.07,.012,20),mat('#ded9c3',.25));group.add(saucer);const handle=new THREE.Mesh(new THREE.TorusGeometry(.024,.006,6,12),mat('#e4dfc8',.3));handle.position.set(.052,.062,0);group.add(handle);}}
  group.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});const [sx,sz,ang]=seats[index],p=v3(-.44,.773,.39).applyAxisAngle(v3(0,1,0),ang).add(v3(sx,0,sz));p.x=THREE.MathUtils.clamp(p.x,-.62,.62);p.z=THREE.MathUtils.clamp(p.z,-.62,.62);group.position.copy(p);scene.add(group);drinks.push({group,home:p,index});
 }
 for(let i=0;i<4;i++)drink(i);
 async function loadPerson(index,name){try{onProgress(`Seating ${['Don Rafa','Marisol','Luis','Carmen'][index]}…`,loaded/total);const gltf=await loader.loadAsync(`/models/${name}.glb`);templates[index]=gltf;
  const root=gltf.scene,holder=new THREE.Group();holder.add(root);const mixer=new THREE.AnimationMixer(root);if(gltf.animations[0])mixer.clipAction(gltf.animations.find(a=>a.name==='Seated')||gltf.animations[0]).play();mixer.setTime(DIM.neutralPoseTime);root.updateMatrixWorld(true);root.traverse(o=>{if(o.isSkinnedMesh)o.computeBoundingBox();if(o.isMesh){o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;o.material.roughness=.83;}});
  // Keep the models' anatomical scale; anchor the pelvis over the chair and
  // ground the feet at a measured neutral pose, not an arbitrary loop frame.
  const b=new THREE.Box3().setFromObject(root),hips=root.getObjectByName('Hips'),hp=hips?.getWorldPosition(v3())||b.getCenter(v3());root.position.set(-hp.x,-b.min.y,-hp.z);const [x,z,a]=seats[index];holder.position.set(x,0,z);holder.rotation.y=a;scene.add(holder);
  characters[index]={root,holder,index,pose:capturePose(root),head:root.getObjectByName('Head'),spine:root.getObjectByName('Spine01'),reaction:null};loaded++;onProgress(loaded===4?'The table is ready.':`${loaded} of 4 seats ready`,loaded/total);if(crowd.length===0&&currentCrowd>0)setCrowd(currentCrowd);
 }catch(e){failed.push(name);console.error('Character load failed',name,e);onProgress(`Could not load ${name}. Reload to retry.`,loaded/total);}}
 const ready=Promise.all(['rafa-upright','marisol','luis-upright','carmen'].map((name,i)=>loadPerson(i,name)));
 let currentView=null,currentCrowd=0,boardKey='',lastHand=0,mode='attract',camTween=null,animations=[],lastMove=0,dealUntil=0;
 function clear(group){while(group.children.length){const c=group.children.pop();c.parent=null;c.traverse(o=>{if(o.isMesh&&!sharedGeometry.has(o.geometry))o.geometry.dispose();if(o.isMesh&&!sharedMaterials.has(o.material))o.material.dispose();});}}
 function setCrowd(count){currentCrowd=count;const target=Math.min(8,count);for(let i=crowd.length-1;i>=target;i--){scene.remove(crowd[i].holder);crowd.pop();}
  while(crowd.length<target&&templates.filter(Boolean).length){const idx=crowd.length,source=templates[idx%4]||templates.find(Boolean),root=cloneSkeleton(source.scene),holder=new THREE.Group();holder.add(root);const mixer=new THREE.AnimationMixer(root);if(source.animations[0])mixer.clipAction(source.animations.find(a=>a.name==='Seated')||source.animations[0]).play();mixer.setTime(DIM.neutralPoseTime);root.updateMatrixWorld(true);root.traverse(o=>{if(o.isSkinnedMesh)o.computeBoundingBox();if(o.isMesh){o.castShadow=false;o.frustumCulled=false;}});const b=new THREE.Box3().setFromObject(root),hp=root.getObjectByName('Hips')?.getWorldPosition(v3())||b.getCenter(v3());root.position.x-=hp.x;root.position.y-=b.min.y;root.position.z-=hp.z;holder.position.set(-2.5+(idx%4)*1.66,0,-2.5-Math.floor(idx/4)*.65);holder.rotation.y=0;scene.add(holder);
   const chair=new THREE.Mesh(new THREE.BoxGeometry(.56,.06,.54),cream);chair.position.set(0,DIM.chairSeatY,0);holder.add(chair);crowd.push({root,holder,pose:capturePose(root),head:root.getObjectByName('Head'),spine:root.getObjectByName('Spine01'),index:idx+4});}
 }
 function setCamera(which='table'){
  controls.minDistance=which==='seat'?.4:1.8;controls.minPolarAngle=which==='overhead'?.01:.25;
  let pos,target=v3(0,.80,0);
  if(which==='attract'){pos=v3(2.9,2.40,3.65);target=v3(0,.90,-.23);}else if(which==='overhead'){pos=v3(.001,3.1,.02);target=v3(0,DIM.surfaceY,0);}else if(which==='seat'){pos=v3(0,1.36,.86);target=v3(0,.83,-.15);}else pos=v3(1.25,2.25,1.90);
  camTween={from:camera.position.clone(),to:pos,fromTarget:controls.target.clone(),toTarget:target,t:0};
 }
 function update(view,crowdCount=0){currentView=view;if(currentCrowd!==crowdCount)setCrowd(crowdCount);
  const nextKey=view?view.handNo+':'+view.moves.length+':'+view.phase:'attract';if(nextKey!==boardKey){boardKey=nextKey;clear(tileGroup);animations=[];const n=view?.chain.length||0;
   if(n){const layout=chainLayout(view.chain,view.moves);view.chain.forEach((tile,i)=>{const d=domino(tile.x,tile.y);d.position.copy(boardPosition(layout[i]));d.rotation.y=layout[i].yaw;tileGroup.add(d);if(view.event?.type==='play'&&tile.id===view.event.tile){const [sx,sz]=seats[tile.seat],from=v3(sx*.55,DIM.surfaceY+.08,sz*.55);animations.push({obj:d,from,to:d.position.clone(),elapsed:0,duration:.45});d.position.copy(from);lastMove=performance.now();const c=characters[tile.seat];if(c)c.reaction={time:clock.elapsedTime};}});}
   else if(!view||view.phase==='lobby'){for(let i=0;i<28;i++){const d=domino(0,0,true);d.position.set(((i*37)%23-11)*.035,DIM.surfaceY+.019+(i%3)*.006,((i*13)%19-9)*.031);d.rotation.y=i*1.73;tileGroup.add(d);}}
   if(view?.phase==='playing'&&view.handNo!==lastHand&&view.moves.length===0){lastHand=view.handNo;dealUntil=performance.now()+3400;for(let i=0;i<28;i++){const d=domino(0,0,true),start=v3(((i*37)%23-11)*.032,DIM.surfaceY+.02,((i*13)%19-9)*.031),[sx,sz]=seats[i%4];d.position.copy(start);tileGroup.add(d);animations.push({obj:d,from:start,to:v3(sx*.57,DIM.surfaceY+.03,sz*.57),elapsed:-i*.065,duration:1.2,remove:true,shuffle:true});}}
  }
  // Rebuilt every update on purpose. It is one InstancedMesh of at most 28
  // instances, so the memo it used to carry saved nothing measurable and could
  // leave the racks showing a count the table had already moved past.
  {clear(rackGroup);const transforms=[];for(let i=0;i<4;i++){const count=!view||view.phase==='lobby'?0:(view.counts[i]??0),[sx,sz,a]=seats[i];for(let j=0;j<count;j++){const d=new THREE.Object3D(),lean=.12;d.quaternion.setFromAxisAngle(v3(0,1,0),a).multiply(new THREE.Quaternion().setFromAxisAngle(v3(1,0,0),lean)).multiply(new THREE.Quaternion().setFromAxisAngle(v3(0,1,0),Math.PI/2)).multiply(new THREE.Quaternion().setFromAxisAngle(v3(0,0,1),Math.PI/2));const rackY=DIM.tableCenterY+DIM.tableThickness/2+DIM.tileLength/2*Math.cos(lean)+DIM.tileThickness/2*Math.sin(lean)+.001;d.position.copy(v3((j-(count-1)/2)*DIM.rackSpacing,rackY,DIM.rackRadius).applyAxisAngle(v3(0,1,0),a));d.updateMatrix();transforms.push(d.matrix.clone());}}if(transforms.length){const batch=new THREE.InstancedMesh(tileGeo,dark,transforms.length);transforms.forEach((m,i)=>batch.setMatrixAt(i,m));batch.castShadow=true;batch.receiveShadow=true;rackGroup.add(batch);}}
  ring.visible=view?.phase==='playing';if(ring.visible){const [x,z]=seats[view.turn];ring.position.set(x,.025,z);}
 }
 const clock=new THREE.Clock();let frame=0,fpsFrames=0,fpsTime=0,fps=60,disposed=false,frameId,quality='high',visualTime=null;
 function animate(){if(disposed)return;frameId=requestAnimationFrame(animate);const rawDt=clock.getDelta(),dt=Math.min(rawDt,.06),t=visualTime??clock.elapsedTime,now=performance.now();fpsFrames++;fpsTime+=rawDt;if(fpsTime>1){fps=fpsFrames/fpsTime;fpsFrames=0;fpsTime=0;}frame++;
  const reduced=document.documentElement.classList.contains('reduced');if(camTween){camTween.t=Math.min(1,camTween.t+dt/1.1);const q=camTween.t*camTween.t*(3-2*camTween.t);camera.position.lerpVectors(camTween.from,camTween.to,q);controls.target.lerpVectors(camTween.fromTarget,camTween.toTarget,q);if(camTween.t===1)camTween=null;}
  if(!reduced){fan.rotation.z=t*3.5;foliage.rotation.z=Math.sin(t*.47)*.009;colmado.update(t);}moto.visible=true;moto.position.set(-4.7,.05,2.80);moto.rotation.y=-.28;
  for(const c of characters.filter(Boolean))applySeatedMotion(c,t,reduced);
  for(const c of crowd)applySeatedMotion(c,t,reduced);
  // Drinks remain physically on the table until reach/grip animation has a
  // separately tested collision-safe implementation. No floating props.
  animations=animations.filter(a=>{a.elapsed+=dt;if(a.elapsed<0)return true;const p=Math.min(1,a.elapsed/a.duration),q=p*p*(3-2*p);a.obj.position.lerpVectors(a.from,a.to,q);a.obj.position.y+=Math.sin(p*Math.PI)*(a.shuffle?.06:.13);if(a.shuffle)a.obj.rotation.y=Math.sin(p*TAU)*.6;if(p===1&&a.remove){tileGroup.remove(a.obj);return false;}return p<1;});
  rackGroup.visible=now>=dealUntil;
  controls.update();renderer.render(scene,camera);
  if(frame%2===0){for(const el of document.querySelectorAll('[data-seatlabel]')){const i=Number(el.dataset.seatlabel),[x,z]=seats[i],anchor=characters[i]?.head?.getWorldPosition(v3()).add(v3(0,.23,0))||v3(x,1.45,z),p=anchor.project(camera);el.style.transform=`translate(${(p.x*.5+.5)*innerWidth}px,${(-p.y*.5+.5)*innerHeight}px) translate(-50%,-100%)`;el.style.visibility=p.z>1||Math.abs(p.x)>1.1||Math.abs(p.y)>1.15?'hidden':'visible';}}
  if(frame%10===0||frame===1){window.mesaRigDebug=characters.filter(Boolean).map(c=>({index:c.index,head:c.head?.getWorldPosition(v3()).toArray(),hip:c.root.getObjectByName('Hips')?.getWorldPosition(v3()).toArray(),rootScale:c.root.scale.toArray()}));window.mesaDiagnostics={fps:Math.round(fps),drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,characters:loaded,crowd:currentCrowd,visibleCrowd:crowd.length,boardTiles:currentView?.chain.length||0,quality,modelErrors:failed};const el=document.querySelector('#perf');if(el)el.textContent=`${Math.round(fps)} fps · ${renderer.info.render.calls} draws`;}
 }
 update(null);animate();
 const resize=()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);};window.addEventListener('resize',resize);
 controls.addEventListener('start',()=>{camTween=null;});
 return {update,setCrowd,setCamera,ready,sampleTime(time){visualTime=time;for(const c of [...characters.filter(Boolean),...crowd])applySeatedMotion(c,time,false);renderer.render(scene,camera);},setMode(m){mode=m;setCamera(m==='attract'?'attract':'table');},quality(q){quality=q;renderer.shadowMap.enabled=q!=='low'&&!software;renderer.setPixelRatio(software?.65:q==='low'?1:Math.min(devicePixelRatio,1.5,1920/innerWidth));},dispose(){disposed=true;cancelAnimationFrame(frameId);window.removeEventListener('resize',resize);controls.dispose();renderer.dispose();container.replaceChildren();}};
}
