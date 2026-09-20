import { DurableObject } from 'cloudflare:workers';
import type { Env } from './env';
import * as logic from './logic.js';
import { accountFor, recordSeries } from './accounts';
import {botThinkingMs,botTurnKey} from './bot-rhythm';
import {chooseMove} from './bot';
import {joinVoice,setVoicePublish} from './voice';
export function freshGame(){return {status:'waiting',seats:[] as string[],state:null,result:null};}
export function resolveMeta(raw:unknown){const m=(raw??{}) as Record<string,any>,arr=Array.isArray(m.players)?m.players:[];const n=(v:unknown,f:number)=>Number.isInteger(v)&&Number(v)>=1?Number(v):f;const min=n(m.minPlayers,n(arr[0],1));return {game:[m.game,m.name,m.title].find(x=>typeof x==='string'&&x.trim())??'Game',minPlayers:min,maxPlayers:Math.max(min,n(m.maxPlayers,n(arr[1],min)))};}
type Member={id:string;publicId:string;name:string;role:string;lastSeen:number;away:boolean;profileId?:string;lastChat?:number};
type Chat={id:string;sender:string;name:string;text:string;role:string;at:number};
type Store={state:any;members:Record<string,Member>;chat:Chat[];muted:string[];featured:boolean;seriesId:string;recorded?:boolean;lastCrowd?:number;botDue?:number;botKey?:string};
export class Room extends DurableObject<Env>{
 constructor(ctx:DurableObjectState,env:Env){super(ctx,env);ctx.setWebSocketAutoResponse(new WebSocketRequestResponsePair('__ping','__pong'));}
 override async fetch(request:Request){
  if(new URL(request.url).pathname==='/voice-token'&&request.method==='POST'){
   const input:any=await request.json();const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(input.token||'')),id=Array.from(new Uint8Array(bytes),x=>x.toString(16).padStart(2,'0')).join(''),g=await this.load(),m=g?.members[id];
   if(!g||!m||m.away||Date.now()-m.lastSeen>30000)return Response.json({error:'Join this table before entering voice.'},{status:403});
   return Response.json(await joinVoice(this.env,input.room,{id:m.publicId,name:m.name,role:m.role,seat:g.state.players.indexOf(id),crowdIndex:this.spectators(g).findIndex(v=>v.id===id),muted:g.muted.includes(m.publicId)}),{headers:{'cache-control':'no-store'}});
  }
  if(request.headers.get('Upgrade')!=='websocket')return new Response('WebSocket required',{status:426});
  const origin=request.headers.get('origin');if(origin&&origin!==new URL(request.url).origin)return new Response('Origin not allowed',{status:403});
  if(this.ctx.getWebSockets().length>=32)return new Response('Table connection limit reached',{status:429});
  const profile=await accountFor(request,this.env),pair=new WebSocketPair();this.ctx.acceptWebSocket(pair[1]);pair[1].serializeAttachment({id:null,roomName:new URL(request.url).pathname.replace(/^\/ws\/?/,'')||'main',profileId:profile?.id||null,profileName:profile?.display_name||null});
  return new Response(null,{status:101,webSocket:pair[0]});
 }
 private send(ws:WebSocket,data:unknown){try{ws.send(JSON.stringify(data));}catch{}}
 private error(ws:WebSocket,error:string){this.send(ws,{type:'error',error});}
 private async load(){const g=await this.ctx.storage.get<Store>('mesa');if(g){g.chat??=[];g.muted??=[];g.featured??=false;g.seriesId??=crypto.randomUUID();for(const m of Object.values(g.members)){m.publicId??=crypto.randomUUID();m.name??=m.role==='host'?'Host':'Neighbor';}}return g;}
 private async save(g:Store){await this.ctx.storage.put('mesa',g);}
 private spectators(g:Store){const online=new Set(this.ctx.getWebSockets().map(s=>s.deserializeAttachment()?.id));return Object.values(g.members).filter(m=>m.role==='spectator'&&!m.away&&Date.now()-m.lastSeen<25000&&online.has(m.id));}
 private broadcast(g:Store){
  const viewers=this.spectators(g);g.lastCrowd=viewers.length;
  for(const ws of this.ctx.getWebSockets()){
   const id=ws.deserializeAttachment()?.id;if(!id||!g.members[id])continue;
   this.send(ws,{type:'state',view:logic.viewFor(g.state,id),presence:g.state.players.map((p:string)=>g.members[p]?(!g.members[p].away&&Date.now()-g.members[p].lastSeen<20000):false),connected:this.ctx.getWebSockets().length,crowd:{count:viewers.length,viewers:viewers.map(m=>({id:m.publicId,name:m.name})),featured:g.featured,chat:g.chat,muted:g.muted,you:g.members[id]!.publicId},meta:logic.meta});
  }
 }
 private async schedule(g:Store,minimumDelay=0){
  const now=Date.now(),s=g.state;let wake=now+1500;
  if(s.phase==='playing'){
   const member=g.members[s.players[s.turn]],covered=s.bots[s.turn]||!member||now-member.lastSeen>=20000;
   if(covered){const key=botTurnKey(s.handNo,s.moves.length,s.turn);if(g.botKey!==key){g.botKey=key;g.botDue=now+Math.max(minimumDelay,botThinkingMs(s.handNo,s.moves.length,s.turn));}wake=Math.min(wake,g.botDue!);}
   else{delete g.botKey;delete g.botDue;}
   await this.save(g);await this.ctx.storage.setAlarm(Math.max(now+50,wake));
  }else{delete g.botKey;delete g.botDue;await this.save(g);if(this.spectators(g).length)await this.ctx.storage.setAlarm(wake);else await this.ctx.storage.deleteAlarm();}
 }
 private async finish(g:Store){
  if(g.state.phase!=='seriesEnd'||g.recorded)return;
  const winner=g.state.result.team,participants=g.state.players.flatMap((id:string,seat:number)=>{const p=g.members[id]?.profileId;return p?[{id:p,won:seat%2===winner,ownScore:g.state.scores[seat%2],opponentScore:g.state.scores[1-seat%2]}]:[];});
  await recordSeries(this.env,g.seriesId,participants);g.recorded=true;
 }
 override async webSocketMessage(ws:WebSocket,raw:string|ArrayBuffer){await this.ctx.blockConcurrencyWhile(async()=>{
  try{
   if(typeof raw!=='string'||raw.length>4096)return this.error(ws,'Message too large.');
   let msg:any;try{msg=JSON.parse(raw);}catch{return this.error(ws,'Invalid message.');}if(!msg||typeof msg!=='object')return this.error(ws,'Invalid message.');
   let g=await this.load();
   if(msg.type==='join'){
    const att=ws.deserializeAttachment();if(att?.id)return this.error(ws,'Already joined.');
    if(typeof msg.token!=='string'||!/^[a-f0-9]{64}$/.test(msg.token))return this.error(ws,'Invalid seat credential. Reload and try again.');
    const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(msg.token));const id=Array.from(new Uint8Array(bytes),x=>x.toString(16).padStart(2,'0')).join('');
    if(!g){if(msg.role!=='host')return this.error(ws,'This table is not open yet. Ask the host to open it.');const state:any=logic.setup([]);state.hostId=id;state.seed=crypto.getRandomValues(new Uint32Array(1))[0];g={state,members:{},chat:[],muted:[],featured:false,seriesId:crypto.randomUUID()};}
    if(!g.members[id]){
     if(Object.keys(g.members).length>=128)return this.error(ws,'This table is full.');
     const role=msg.role==='host'&&g.state.hostId===id?'host':msg.role==='player'?'player':'spectator';
     const name=(typeof msg.name==='string'?msg.name.trim().slice(0,24):'')||att?.profileName||(role==='host'?'Host':'Neighbor');
     if(role==='player'){
      if(g.state.phase!=='lobby')return this.error(ws,'This hand has started. Watch this table, or use your original phone to return.');
      const seat=g.state.bots.findIndex((b:boolean)=>b);if(seat<0)return this.error(ws,'All four seats are taken. You can still watch.');
      if(!msg.name&&!att?.profileName)return this.error(ws,'Tell us your name to take a seat.');
      if(att?.profileId&&Object.values(g.members).some(m=>m.role==='player'&&m.profileId===att.profileId))return this.error(ws,'Your profile already has a seat. Use your original phone.');
      g.state.players[seat]=id;g.state.names[seat]=name;g.state.bots[seat]=false;
     }
     g.members[id]={id,publicId:crypto.randomUUID(),name,role,lastSeen:Date.now(),away:false,...(att?.profileId?{profileId:att.profileId}:{})};
    }
    g.members[id]!.lastSeen=Date.now();g.members[id]!.away=false;
    // Seat ownership and associated profile remain fixed for this series.
    ws.serializeAttachment({...att,id});await this.save(g);this.broadcast(g);await this.schedule(g);return;
   }
   const id=ws.deserializeAttachment()?.id;if(!g||!id||!g.members[id])return this.error(ws,'Join the table first.');const member=g.members[id]!;
   if(msg.type==='heartbeat'){const wasAway=member.away||Date.now()-member.lastSeen>=20000;member.lastSeen=Date.now();member.away=false;await this.save(g);if(wasAway||g.lastCrowd!==this.spectators(g).length){this.broadcast(g);await this.save(g);}return;}
   if(msg.type==='away'){member.away=true;member.lastSeen=Date.now();await this.save(g);this.broadcast(g);await this.schedule(g);return;}
   member.lastSeen=Date.now();member.away=false;
   if(msg.type==='chat'){
    if(g.muted.includes(member.publicId))return this.error(ws,'The host has muted your messages at this table.');
    const text=typeof msg.text==='string'?msg.text.trim().replace(/[\u0000-\u001f]/g,' '):'';
    if(!text||text.length>180)return this.error(ws,'Keep table talk between 1 and 180 characters.');
    if(Date.now()-(member.lastChat||0)<2500)return this.error(ws,'Let the table breathe. Wait a moment between messages.');
    member.lastChat=Date.now();g.chat.push({id:crypto.randomUUID(),sender:member.publicId,name:member.name,text,role:member.role,at:Date.now()});g.chat=g.chat.slice(-40);await this.save(g);this.broadcast(g);return;
   }
   if(msg.type==='feature'||msg.type==='moderate'){
    if(id!==g.state.hostId)return this.error(ws,'Only the table host can do that.');
    if(msg.type==='feature')g.featured=msg.enabled===true;
    else {if(typeof msg.sender!=='string'||!Object.values(g.members).some(m=>m.publicId===msg.sender&&m.id!==g!.state.hostId))return this.error(ws,'Choose a table participant.');g.muted=msg.muted===false?g.muted.filter(x=>x!==msg.sender):[...new Set([...g.muted,msg.sender])];await setVoicePublish(this.env,ws.deserializeAttachment()?.roomName||'main',msg.sender,msg.muted===false);}
    await this.save(g);this.broadcast(g);return;
   }
   if(msg.type!=='action')return this.error(ws,'Unknown action.');
   const check=logic.validateAction(g.state,id,msg.action);if(!check.ok)return this.error(ws,check.error??'Invalid move.');
   if(['start','next','newSeries'].includes(msg.action.type))g.state.seed=crypto.getRandomValues(new Uint32Array(1))[0];
   if(msg.action.type==='newSeries'){g.seriesId=crypto.randomUUID();g.recorded=false;}
   g.state=logic.applyAction(g.state,id,msg.action);
   if(msg.action.type==='start')g.state.names=g.state.names.map((n:string,i:number)=>g!.state.bots[i]?['Don Rafa','Marisol','Tío Luis','Carmen'][i]:n);
   await this.finish(g);await this.save(g);this.broadcast(g);await this.schedule(g,msg.action.type==='start'||msg.action.type==='next'?4200:1500);
  }catch(err){console.error(err);this.error(ws,'The table could not process that request. Please try again.');}
 });}
 override async alarm(){await this.ctx.blockConcurrencyWhile(async()=>{
  const g=await this.load();if(!g)return;let changed=g.lastCrowd!==this.spectators(g).length;
  if(g.state.phase==='playing'){
   const s=g.state,id=s.players[s.turn],m=g.members[id],covered=s.bots[s.turn]||!m||Date.now()-m.lastSeen>=20000;
   if(covered&&g.botKey===botTurnKey(s.handNo,s.moves.length,s.turn)&&Date.now()>=(g.botDue??Infinity)){const a:any=chooseMove(logic.viewFor(s,id) as any);if(logic.validateAction(s,id,a).ok){g.state=logic.applyAction(s,id,a);changed=true;}}
  }
  await this.finish(g);if(changed)this.broadcast(g);await this.save(g);await this.schedule(g);
 });}
 override async webSocketClose(ws:WebSocket){const id=ws.deserializeAttachment()?.id;if(!id)return;await this.ctx.blockConcurrencyWhile(async()=>{const g=await this.load();if(!g||!g.members[id])return;const another=this.ctx.getWebSockets().some(other=>other!==ws&&other.deserializeAttachment()?.id===id);if(!another){g.members[id]!.away=true;g.members[id]!.lastSeen=Date.now();await this.save(g);this.broadcast(g);await this.schedule(g);}});}
 override async webSocketError(ws:WebSocket){await this.webSocketClose(ws);}
}
