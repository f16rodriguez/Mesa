export const DIM = {
 tableWidth:1.40, tableCenterY:.724, tableThickness:.09,
 feltWidth:1.17, feltCenterY:.776, surfaceY:.782,
 chairSeatY:.51, chairSeatWidth:.56, seatDistance:1.01,
 tileLength:.12, tileWidth:.06, tileThickness:.025, tileGap:.0035,
 pipRadius:.0068, pipColumnSpacing:.0136, pipRowSpacing:.0175,
 rackRadius:.635, rackSpacing:.065, neutralPoseTime:10.25,
} as const;
export const seats:number[][]=[[0,DIM.seatDistance,Math.PI],[-DIM.seatDistance,0,Math.PI/2],[0,-DIM.seatDistance,0],[DIM.seatDistance,0,-Math.PI/2]];
export type BoardTile={id:string;x:number;y:number};
export type BoardMove={type:string;tile?:string;side?:string};
export type Placement={id:string;x:number;z:number;yaw:number;vertical:boolean;isDouble:boolean;dx:number;dz:number;side:'left'|'right'|'root'};
type End={tile:Placement;dx:number;dz:number};
export function footprint(p:Placement){const w=p.vertical?DIM.tileWidth:DIM.tileLength,d=p.vertical?DIM.tileLength:DIM.tileWidth;return {left:p.x-w/2,right:p.x+w/2,top:p.z-d/2,bottom:p.z+d/2};}
const limit=DIM.feltWidth/2-.022;
function fits(p:Placement,placed:Placement[]){const b=footprint(p);if(Math.max(Math.abs(b.left),Math.abs(b.right),Math.abs(b.top),Math.abs(b.bottom))>limit+1e-8)return false;return placed.every(o=>{const a=footprint(o),gap=.0015;return b.right<=a.left-gap||b.left>=a.right+gap||b.bottom<=a.top-gap||b.top>=a.bottom+gap;});}
function candidates(end:End,tile:BoardTile,side:'left'|'right'):Placement[]{
 const L=DIM.tileLength,W=DIM.tileWidth,G=DIM.tileGap,isDouble=tile.x===tile.y,halfAlong=(isDouble?W:L)/2,prev=end.tile,result:Placement[]=[];
 const dirs=[[end.dx,end.dz],[end.dz,-end.dx],[-end.dz,end.dx]];
 for(let d=0;d<dirs.length;d++){
  const [dx,dz]=dirs[d]!,isTurn=d!==0,prevAlong=(prev.isDouble?W:L)/2,prevCross=(prev.isDouble?L:W)/2;
  const anchorX=prev.x+end.dx*(isTurn?(prev.isDouble?0:L/4):prevAlong),anchorZ=prev.z+end.dz*(isTurn?(prev.isDouble?0:L/4):prevAlong);
  const offsets=isTurn?[0,L/8,-L/8]:[0];
  for(const offset of offsets){const yaw=Math.atan2(-dz!,dx!)+(side==='left'?Math.PI:0)+(isDouble?Math.PI/2:0);result.push({id:tile.id,x:anchorX+dx!*((isTurn?prevCross:0)+G+halfAlong)+end.dx*offset,z:anchorZ+dz!*((isTurn?prevCross:0)+G+halfAlong)+end.dz*offset,yaw,vertical:Math.abs(Math.sin(yaw))>.5,isDouble,dx:dx!,dz:dz!,side});}
 }
 return result;
}
function hasExit(p:Placement,placed:Placement[],side:'left'|'right',isDouble:boolean){const fake={id:'future',x:0,y:isDouble?0:1};return candidates({tile:p,dx:p.dx,dz:p.dz},fake,side).some(n=>fits(n,placed));}
/** Replays only public placement events. Prefixes never reflow: new tiles are
 * added to one open end, while the original tile remains anchored at (0,0).
 * Doubles cross the incoming direction; they do not create extra branches. */
export function chainLayout(chain:BoardTile[],moves:BoardMove[]=[]):Placement[]{
 if(chain.length>28)throw new Error('A double-six chain has at most 28 tiles.');if(!chain.length)return [];
 const byId=new Map(chain.map(t=>[t.id,t])),events=moves.filter(m=>m.type==='play'&&m.tile&&byId.has(m.tile));
 const opener=byId.get(events[0]?.tile||'')||chain[0]!,openerIndex=chain.findIndex(t=>t.id===opener.id),isDouble=opener.x===opener.y;
 const root:Placement={id:opener.id,x:0,z:0,yaw:isDouble?Math.PI/2:0,vertical:isDouble,isDouble,dx:1,dz:0,side:'root'};
 const placed:Placement[]=[root],positions=new Map([[root.id,root]]),ends:{left:End;right:End}={left:{tile:root,dx:-1,dz:0},right:{tile:root,dx:1,dz:0}};
 const order=events.length===chain.length?events.slice(1):[...chain.slice(0,openerIndex).reverse().map(t=>({type:'play',tile:t.id,side:'left'})),...chain.slice(openerIndex+1).map(t=>({type:'play',tile:t.id,side:'right'}))];
 for(const event of order){const tile=byId.get(event.tile!)!;if(positions.has(tile.id))continue;const side: 'left'|'right'=event.side==='left'?'left':event.side==='right'?'right':chain.findIndex(t=>t.id===tile.id)<openerIndex?'left':'right';const options=candidates(ends[side],tile,side).filter(p=>fits(p,placed));
  const chosen=options.find(p=>hasExit(p,[...placed,p],side,false)&&hasExit(p,[...placed,p],side,true))||options.find(p=>hasExit(p,[...placed,p],side,false))||options[0];
  if(!chosen)throw new Error(`No safe placement for ${tile.id} after ${placed.length} tiles`);
  placed.push(chosen);positions.set(tile.id,chosen);ends[side]={tile:chosen,dx:chosen.dx,dz:chosen.dz};
 }
 return chain.map(t=>positions.get(t.id)!);
}
export function idleMotion(index:number,time:number,reduced=false){
 if(reduced)return {breath:0,headYaw:0,headNod:0};const phase=index*2.173+.43;
 return {breath:.0055*Math.sin(time*(.78+index*.093)+phase),headYaw:.087*Math.sin(time*(.213+index*.037)+phase)+.028*Math.sin(time*(.487+index*.029)+phase*1.91),headNod:.009*Math.sin(time*(.267+index*.035)+phase*.71)};
}
