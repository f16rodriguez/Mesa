import * as THREE from 'three';
import {idleMotion} from './scene-layout.ts';
const X=new THREE.Vector3(1,0,0),Y=new THREE.Vector3(0,1,0),delta=new THREE.Quaternion();
export function capturePose(root){const bones=[];root.traverse(bone=>{if(bone.isBone)bones.push({bone,position:bone.position.clone(),quaternion:bone.quaternion.clone(),scale:bone.scale.clone()});});return bones;}
export function applySeatedMotion(actor,time,reduced=false){
 // Restore a calibrated upright pose every frame. Never accumulate rotations
 // or advance the imported full-body clip through its deep forward bow.
 for(const p of actor.pose){p.bone.position.copy(p.position);p.bone.quaternion.copy(p.quaternion);p.bone.scale.copy(p.scale);}
 const motion=idleMotion(actor.index,time,reduced);
 if(actor.spine)actor.spine.quaternion.multiply(delta.setFromAxisAngle(X,motion.breath));
 if(actor.head){actor.head.quaternion.multiply(delta.setFromAxisAngle(Y,motion.headYaw));actor.head.quaternion.multiply(delta.setFromAxisAngle(X,motion.headNod));}
 // A small, bounded acknowledgment belongs only to the acting player.
 if(!reduced&&actor.reaction){const elapsed=time-actor.reaction.time;if(elapsed>=0&&elapsed<1.2&&actor.head){const amount=Math.sin(elapsed/1.2*Math.PI)*.035;actor.head.quaternion.multiply(delta.setFromAxisAngle(X,amount));}}
 actor.holder.updateMatrixWorld(true);
}
