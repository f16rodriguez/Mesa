import * as THREE from 'three';import {GLTFLoader}from'three/addons/loaders/GLTFLoader.js';import fs from'node:fs/promises';
globalThis.self=globalThis;const loader=new GLTFLoader();loader.register(parser=>({name:'NO_TEXTURE_PROBE',loadTexture:()=>Promise.resolve(new THREE.Texture())}));
const report=[];
for(const name of ['rafa-upright','marisol','luis-upright','carmen']){
 const bytes=await fs.readFile('public/models/'+name+'.glb'),g=await loader.parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');const root=g.scene,clip=g.animations.find(a=>a.name==='Seated')||g.animations[0],mixer=new THREE.AnimationMixer(root);mixer.clipAction(clip).play();const samples=[];
 for(let t=0;t<clip.duration;t+=.25){mixer.setTime(t);root.updateMatrixWorld(true);const h=root.getObjectByName('Head').getWorldPosition(new THREE.Vector3()),hip=root.getObjectByName('Hips').getWorldPosition(new THREE.Vector3()),delta=h.clone().sub(hip);samples.push({t:Number(t.toFixed(2)),head:h.toArray().map(x=>+x.toFixed(4)),hip:hip.toArray().map(x=>+x.toFixed(4)),upright:+(delta.y/delta.length()).toFixed(4),forward:+Math.abs(delta.z).toFixed(4)});}
 const best=[...samples].sort((a,b)=>b.upright-a.upright)[0],worst=[...samples].sort((a,b)=>a.upright-b.upright)[0];report.push({name,duration:clip.duration,best,worst,samples});console.log(JSON.stringify({name,duration:clip.duration,best,worst}));
}
await fs.mkdir('qa',{recursive:true});await fs.writeFile('qa/seated-probe.json',JSON.stringify(report,null,2));
