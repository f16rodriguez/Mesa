import { DurableObject } from 'cloudflare:workers';
import type { Env } from './env';
import * as logic from './logic.js';
import { accountFor, cleanName, cleanText, recordSeries } from './accounts';
import {botQuickMs,botThinkingMs,botTurnKey} from './bot-rhythm';
import {chooseMove} from './bot';
import {joinVoice,setVoicePublish} from './voice';
import {SERIES_GRATIS,pagosActivos,patrocinar} from './pagos';

/** A seat must be away or silent this long before a bot may play for it. */
export const COVER_MS=20000;
/** A seated human counts as at the table this long after we last heard from them. */
export const PRESENT_MS=20000;
/** Spectators leave the crowd count this long after their last word. */
export const CROWD_MS=25000;
/** A closed hand nobody has dealt on from is dealt by the room after this long. */
export const AUTO_DEAL_MS=30000;
/** Nobody deals for this long after a hand or series closes: the camera cut and the
 *  hands turning face up are the best moment of the night, and one impatient tap
 *  used to wipe them. After it, the hand deals as soon as every seated person says
 *  "Listo", or by itself at AUTO_DEAL_MS. */
export const ESPERA_FIN_MS=6000;
/** A room where nobody has been seen for this long deletes itself. */
export const IDLE_TTL_MS=12*3600*1000;
/** A covered seat with no legal tile knocks this fast: there is nothing to think about. */
export const FORCED_PASS_MS=1000;
/** How often a finished series that did not reach the profile database is retried. */
export const RECORD_RETRY_MS=60000;
/** Before the first bot move of a hand: the deal animation. After a human move: a beat. */
const AFTER_DEAL_MS=4200,AFTER_HUMAN_MS=1500;
/** The same four the client shows in the lobby. */
export const BOT_NAMES=['Don Rafa','Marisol','Luis','Carmen'];

type Member={id:string;publicId:string;name:string;role:string;lastSeen:number;away:boolean;awaySince?:number;profileId?:string;lastChat?:number;
 /** Arrived mid-hand: sits in the first free seat when the hand closes. */
 espera?:boolean};
type Chat={id:string;sender:string;name:string;text:string;role:string;at:number};
type Participant={id:string;won:boolean;ownScore:number;opponentScore:number};
type Store={state:any;members:Record<string,Member>;chat:Chat[];muted:string[];featured:boolean;seriesId:string;
 /** The finished series has been queued for the profile database (not necessarily written yet). */
 recorded?:boolean;
 /** Finished series still to be written to D1, oldest first; retried from the alarm. */
 pendingRecords?:{seriesId:string;participants:Participant[]}[];retryAt?:number;
 /** When the current hand closed, for the automatic deal. */
 closedAt?:number;
 lastCrowd?:number;botDue?:number;botKey?:string;
 /** Quién cubre la serie en curso (nombre, no id: esto se manda a todos). */
 patrocinio?:{nombre:string;tipo:'unlock'|'trial';quedan:number}|null;
 /** Por qué no se pudo repartir: nadie sentado tiene cuenta, o a nadie le quedan series gratis. */
 bloqueo?:'sinCuenta'|'sinSeries';
 /** Seats that said "Listo" for the next hand. */
 listos?:number[]};
type Table={state:any;members:Record<string,Member|undefined>};

const present=(m:Member|undefined,now:number)=>!!m&&!m.away&&now-m.lastSeen<PRESENT_MS;
/** When a seat stops holding off a bot: 20 s after the later of the last thing
 *  we heard from it and the moment it went away. Glancing at another app is
 *  not leaving the table. */
export function goneAt(m:Member){return Math.max(m.lastSeen,m.away?(m.awaySince??m.lastSeen):-Infinity)+COVER_MS;}
function touch(m:Member,now:number){m.lastSeen=now;m.away=false;delete m.awaySince;}
function markAway(m:Member,now:number){if(!m.away){m.away=true;m.awaySince=now;}m.lastSeen=now;}
/**
 * The earliest moment (>= now) a bot may cover `seat`, or null when that cannot
 * happen until something new arrives. A bot seat: now. A HUMAN seat: only once
 * it has been gone COVER_MS, and only while someone else at the table is
 * actually waiting on it.
 *
 * The cover exists so one sleeping phone cannot freeze three other people.
 * That reason disappears the moment nobody else is waiting — and then covering
 * is just the game playing itself while you put the phone down, which is the
 * one thing a table must never do. Thinking for half a minute is normal
 * dominoes; it is not a disconnect.
 */
export function coverAt(g:Table,seat:number,now:number):number|null{
 const s=g.state;if(s.bots[seat])return now;
 if(!s.players.some((p:string,i:number)=>i!==seat&&!s.bots[i]&&present(g.members[p],now)))return null;
 const m=g.members[s.players[seat]];
 return Math.max(now,m?goneAt(m):now);
}
export function botMayCover(g:Table,seat:number,now:number){const t=coverAt(g,seat,now);return t!==null&&t<=now;}
/** When the room should deal a closed hand itself: AUTO_DEAL_MS after it
 *  closed, and only while a seated human is there to play it. */
export function autoDealAt(g:Table&{closedAt?:number;listos?:number[]},now:number):number|null{
 const s=g.state;if(s.phase!=='handEnd'||g.closedAt===undefined)return null;
 const here=s.players.map((p:string,i:number)=>!s.bots[i]&&present(g.members[p],now)?i:-1).filter((i:number)=>i>=0);
 if(!here.length)return null;
 const ready=here.every((i:number)=>(g.listos??[]).includes(i));
 return Math.max(now,g.closedAt+(ready?ESPERA_FIN_MS:AUTO_DEAL_MS));
}
/** The phone that runs the table: the first seat (in order) with a person whose phone is
 *  live; if none is, the first seat with a person. Null with only bots. */
export function vipOf(g:Table,now:number):string|null{
 const s=g.state,humans=s.players.filter((_:string,i:number)=>!s.bots[i]);
 return humans.find((p:string)=>present(g.members[p],now))??humans[0]??null;
}
export const lastActivity=(g:{members:Record<string,Member|undefined>})=>Math.max(0,...Object.values(g.members).map(m=>m?.lastSeen??0));
/**
 * The one time the room must wake next — never a polling tick. A human
 * thinking with a live phone costs nothing; a table everybody left sleeps
 * until the idle TTL deletes it.
 */
export function nextWake(g:Store,now:number,crowd:Member[]){
 const due=[lastActivity(g)+IDLE_TTL_MS],s=g.state;
 if(s.phase==='playing'){if(g.botDue!==undefined)due.push(g.botDue);else{const t=coverAt(g,s.turn,now);if(t!==null)due.push(t);}}
 const deal=autoDealAt(g,now);if(deal!==null)due.push(deal);
 if(g.pendingRecords?.length)due.push(g.retryAt??now);
 for(const m of crowd)due.push(m.lastSeen+CROWD_MS);
 return Math.max(now+50,Math.min(...due));
}
/** What a covered seat plays: the bot's choice if the rules accept it, else the
 *  first legal move (or the pass) — never nothing, so the alarm cannot spin. */
export function coverMove(s:any,id:string,choose:(v:any)=>any=chooseMove):any{
 const view:any=logic.viewFor(s,id),pick=choose(view);
 if(logic.validateAction(s,id,pick).ok)return pick;
 console.error('bot move rejected, falling back to the first legal one',JSON.stringify(pick));
 const o=view.legal[0],fallback=o?{type:'play',tile:o.tile,side:o.side}:{type:'pass'};
 return logic.validateAction(s,id,fallback).ok?fallback:null;
}
/** 32 bytes from the platform CSPRNG, as hex: the key logic.js deals from.
 *  A new one before every deal, so no hand says anything about the next. */
export const freshSeed=()=>Array.from(crypto.getRandomValues(new Uint8Array(32)),x=>x.toString(16).padStart(2,'0')).join('');
export function freshGame(){return {status:'waiting',seats:[] as string[],state:null,result:null};}
export function resolveMeta(raw:unknown){const m=(raw??{}) as Record<string,any>,arr=Array.isArray(m.players)?m.players:[];const n=(v:unknown,f:number)=>Number.isInteger(v)&&Number(v)>=1?Number(v):f;const min=n(m.minPlayers,n(arr[0],1));return {game:[m.game,m.name,m.title].find(x=>typeof x==='string'&&x.trim())??'Game',minPlayers:min,maxPlayers:Math.max(min,n(m.maxPlayers,n(arr[1],min)))};}
type Later=(()=>Promise<unknown>)[];
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
  // A profile is a nicety. If its database is down, sit down as a guest
  // rather than being turned away from the table.
  let profile:any=null;try{profile=await accountFor(request,this.env);}catch(err){console.error('profile lookup failed; joining as a guest',err);}
  const pair=new WebSocketPair();this.ctx.acceptWebSocket(pair[1]);pair[1].serializeAttachment({id:null,roomName:new URL(request.url).pathname.replace(/^\/ws\/?/,'')||'main',profileId:profile?.id||null,profileName:cleanName(profile?.display_name)||null});
  return new Response(null,{status:101,webSocket:pair[0]});
 }
 private send(ws:WebSocket,data:unknown){try{ws.send(JSON.stringify(data));}catch{}}
 private error(ws:WebSocket,error:string){this.send(ws,{type:'error',error});}
 private async load(){const g=await this.ctx.storage.get<Store>('mesa');if(g){g.chat??=[];g.muted??=[];g.featured??=false;g.seriesId??=crypto.randomUUID();for(const m of Object.values(g.members)){m.publicId??=crypto.randomUUID();m.name??=m.role==='host'?'Host':'Neighbor';}}return g;}
 private async save(g:Store){await this.ctx.storage.put('mesa',g);}
 private spectators(g:Store){const online=new Set(this.ctx.getWebSockets().map(s=>s.deserializeAttachment()?.id));return Object.values(g.members).filter(m=>m.role==='spectator'&&!m.away&&Date.now()-m.lastSeen<CROWD_MS&&online.has(m.id));}
 private broadcast(g:Store){
  const now=Date.now(),viewers=this.spectators(g);
  for(const ws of this.ctx.getWebSockets()){
   const id=ws.deserializeAttachment()?.id;if(!id||!g.members[id])continue;
   const auto=autoDealAt(g,now),fin=g.closedAt!==undefined?{espera:Math.max(0,g.closedAt+ESPERA_FIN_MS-now),auto:auto===null?null:Math.max(0,auto-now),listos:g.listos??[]}:null;
   this.send(ws,{type:'state',yo:{espera:!!g.members[id]!.espera},mesa:{pagos:pagosActivos(this.env),gratis:SERIES_GRATIS,patrocinio:g.patrocinio??null,bloqueo:g.bloqueo??null,botMs:g.botDue!==undefined?Math.max(0,g.botDue-now):null,fin},view:logic.viewFor(g.state,id),presence:g.state.players.map((p:string)=>present(g.members[p],now)),connected:this.ctx.getWebSockets().length,crowd:{count:viewers.length,viewers:viewers.map(m=>({id:m.publicId,name:m.name})),featured:g.featured,chat:g.chat,muted:g.muted,you:g.members[id]!.publicId},meta:logic.meta});
  }
 }
 /** Bot turn and hand-closing bookkeeping. Returns whether anything changed. */
 private prepareTimers(g:Store,now:number,minimumDelay:number){
  const s=g.state;let changed=false;
  if(s.phase==='playing'&&botMayCover(g,s.turn,now)){
   const key=botTurnKey(s.handNo,s.moves.length,s.turn);
   if(g.botKey!==key){
    const legal=(logic.viewFor(s,s.players[s.turn]) as any).legal,forced=!legal.length,unica=new Set(legal.map((o:any)=>o.tile)).size===1;
    g.botKey=key;g.botDue=now+Math.max(minimumDelay,forced?FORCED_PASS_MS:unica?botQuickMs(s.handNo,s.moves.length,s.turn):botThinkingMs(s.handNo,s.moves.length,s.turn));changed=true;
   }
  }else if(g.botKey!==undefined||g.botDue!==undefined){delete g.botKey;delete g.botDue;changed=true;}
  if(s.phase==='handEnd'||s.phase==='seriesEnd'){if(g.closedAt===undefined){g.closedAt=now;changed=true;}}
  else if(g.closedAt!==undefined||g.listos){delete g.closedAt;delete g.listos;changed=true;}
  return changed;
 }
 /**
  * Persist (only if something changed), tell everyone, then arm the single
  * next wake-up. Storage first: a table must never show a move it then loses.
  */
 private async commit(g:Store,{dirty=true,broadcast=true,minimumDelay=0}={}){
  const now=Date.now(),crowd=this.spectators(g);
  if(g.lastCrowd!==crowd.length){g.lastCrowd=crowd.length;dirty=true;broadcast=true;}
  if(this.seatWaiting(g)){dirty=true;broadcast=true;}
  const vip=vipOf(g,now);if((g.state.vip??null)!==vip){g.state.vip=vip;dirty=true;broadcast=true;}
  if(this.prepareTimers(g,now,minimumDelay))dirty=true;
  if(dirty)await this.save(g);
  if(broadcast)this.broadcast(g);
  const wake=nextWake(g,now,crowd);
  if(await this.ctx.storage.getAlarm()!==wake)await this.ctx.storage.setAlarm(wake);
 }
 /** People who arrived mid-hand sit down once it closes, in the first free seat. */
 private seatWaiting(g:Store){
  const s=g.state;if(s.phase==='playing')return false;let changed=false;
  for(const m of Object.values(g.members)){
   if(!m.espera)continue;const seat=s.bots.findIndex((b:boolean)=>b);if(seat<0)break;
   s.players[seat]=m.id;s.bots[seat]=false;s.names[seat]=m.name;m.role='player';delete m.espera;changed=true;
  }
  return changed;
 }
 /** The TV, or the phone the room names to run the table. */
 private runs(g:Store,id:string){return id===g.state.hostId||(!!g.state.vip&&id===g.state.vip);}
 /** Queue a just-finished series for the profile database. The write itself
  *  happens after the state is saved, outside the table's lock. */
 private queueSeries(g:Store,now:number){
  if(g.state.phase!=='seriesEnd'||g.recorded)return false;
  g.recorded=true;
  const winner=g.state.result.team,participants:Participant[]=g.state.players.flatMap((id:string,seat:number)=>{const p=g.members[id]?.profileId;return p?[{id:p,won:seat%2===winner,ownScore:g.state.scores[seat%2],opponentScore:g.state.scores[1-seat%2]}]:[];});
  if(!participants.length)return false;
  g.pendingRecords=[...(g.pendingRecords??[]),{seriesId:g.seriesId,participants}].slice(-20);g.retryAt=now+RECORD_RETRY_MS;
  return true;
 }
 /** Write queued series to D1. Safe to repeat: recordSeries ignores a series it already has. */
 private async flushRecords(){
  const queue=(await this.load())?.pendingRecords;if(!queue?.length)return;
  const done=new Set<string>();
  for(const r of queue){try{await recordSeries(this.env,r.seriesId,r.participants);done.add(r.seriesId);}catch(err){console.error('series not recorded yet; will retry',err);break;}}
  await this.ctx.blockConcurrencyWhile(async()=>{
   const g=await this.load();if(!g)return;
   const left=(g.pendingRecords??[]).filter(r=>!done.has(r.seriesId));
   if(left.length){g.pendingRecords=left;g.retryAt=Date.now()+RECORD_RETRY_MS;}else{delete g.pendingRecords;delete g.retryAt;}
   await this.commit(g,{broadcast:false});
  });
 }
 /**
  * ¿Alguien en la mesa cubre esta serie? (ver pagos.ts). Candidatos: la tele si
  * tiene sesión y después cada silla con persona y cuenta. Cuatro bots no gastan.
  * Esta sí consulta D1 dentro del candado: no se puede repartir sin la respuesta.
  */
 private async cubrir(g:Store,serie:string){
  const s=g.state;
  if(!pagosActivos(this.env)){delete g.bloqueo;return true;}
  const personas=s.players.filter((_:string,i:number)=>!s.bots[i]);
  if(!personas.length){delete g.bloqueo;g.patrocinio=null;return true;}
  const candidatos=[s.hostId,...personas].map((id:string)=>g.members[id]?.profileId).filter((p:string|undefined):p is string=>!!p).map((profileId:string)=>({profileId}));
  try{
   const p=await patrocinar(this.env,serie,candidatos);
   if(!p){g.bloqueo=candidatos.length?'sinSeries':'sinCuenta';return false;}
   g.patrocinio={nombre:cleanName(p.nombre)||'Mesa',tipo:p.tipo,quedan:p.quedan};delete g.bloqueo;return true;
  }catch(err){console.error('no se pudo comprobar quién cubre la serie; va gratis',err);delete g.bloqueo;return true;}
 }
 /** External calls (D1, voice) run after the lock is released, one by one. */
 private async runLater(tasks:Later){for(const task of tasks){try{await task();}catch(err){console.error('deferred task failed',err);}}}
 override async webSocketMessage(ws:WebSocket,raw:string|ArrayBuffer){
  const later:Later=[];
  await this.ctx.blockConcurrencyWhile(async()=>{
   try{await this.handle(ws,raw,later);}catch(err){console.error(err);this.error(ws,'The table could not process that request. Please try again.');}
  });
  await this.runLater(later);
 }
 private async handle(ws:WebSocket,raw:string|ArrayBuffer,later:Later){
  if(typeof raw!=='string'||raw.length>4096)return this.error(ws,'Message too large.');
  let msg:any;try{msg=JSON.parse(raw);}catch{return this.error(ws,'Invalid message.');}if(!msg||typeof msg!=='object')return this.error(ws,'Invalid message.');
  let g=await this.load();const now=Date.now();
  if(msg.type==='join'){
   const att=ws.deserializeAttachment();if(att?.id)return this.error(ws,'Already joined.');
   if(typeof msg.token!=='string'||!/^[a-f0-9]{64}$/.test(msg.token))return this.error(ws,'Invalid seat credential. Reload and try again.');
   const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(msg.token));const id=Array.from(new Uint8Array(bytes),x=>x.toString(16).padStart(2,'0')).join('');
   if(!g){if(msg.role!=='host')return this.error(ws,'This table is not open yet. Ask the host to open it.');const state:any=logic.setup([]);state.hostId=id;state.seed=freshSeed();g={state,members:{},chat:[],muted:[],featured:false,seriesId:crypto.randomUUID()};}
   if(!g.members[id]){
    if(Object.keys(g.members).length>=128)return this.error(ws,'This table is full.');
    const role=msg.role==='host'&&g.state.hostId===id?'host':msg.role==='player'?'player':'spectator';
    const name=cleanName(msg.name)||att?.profileName||(role==='player'?'Jugador':role==='host'?'Host':'Neighbor');
    let wait=false;
    if(role==='player'){
     const seat=g.state.bots.findIndex((b:boolean)=>b);if(seat<0)return this.error(ws,'All four seats are taken. You can still watch.');
     if(!msg.name&&!att?.profileName)return this.error(ws,'Tell us your name to take a seat.');
     if(att?.profileId&&Object.values(g.members).some(m=>m.role==='player'&&m.profileId===att.profileId))return this.error(ws,'Your profile already has a seat. Use your original phone.');
     // With a hand in play, a newcomer watches and sits down when it closes.
     if(g.state.phase==='playing')wait=true;else{g.state.players[seat]=id;g.state.names[seat]=name;g.state.bots[seat]=false;}
    }
    g.members[id]={id,publicId:crypto.randomUUID(),name,role:wait?'spectator':role,lastSeen:now,away:false,...(wait?{espera:true}:{}),...(att?.profileId?{profileId:att.profileId}:{})};
   }
   else if(att?.profileId&&!g.members[id]!.profileId&&!Object.values(g.members).some(m=>m.role==='player'&&m.profileId===att.profileId)){
    // Alguien sentado acaba de crear su cuenta o entrar a ella: la silla se queda
    // con la cuenta, y si la mesa estaba parada por eso, se puede volver a repartir.
    g.members[id]!.profileId=att.profileId;delete g.bloqueo;
   }
   touch(g.members[id]!,now);
   // Seat ownership and associated profile remain fixed for this series.
   ws.serializeAttachment({...att,id});await this.commit(g);return;
  }
  const id=ws.deserializeAttachment()?.id;if(!g||!id||!g.members[id])return this.error(ws,'Join the table first.');const member=g.members[id]!;
  if(msg.type==='heartbeat'){
   const back=member.away||now-member.lastSeen>=PRESENT_MS;touch(member,now);
   // A heartbeat only ever pushes deadlines later, so the alarm already armed
   // is early, never late: it re-arms itself. Coming back is different.
   if(back||g.lastCrowd!==this.spectators(g).length)await this.commit(g);else await this.save(g);
   return;
  }
  if(msg.type==='away'){markAway(member,now);await this.commit(g);return;}
  touch(member,now);
  if(msg.type==='chat'){
   if(g.muted.includes(member.publicId))return this.error(ws,'The host has muted your messages at this table.');
   const text=cleanText(msg.text,Infinity);
   if(!text||text.length>180)return this.error(ws,'Keep table talk between 1 and 180 characters.');
   if(now-(member.lastChat||0)<2500)return this.error(ws,'Let the table breathe. Wait a moment between messages.');
   member.lastChat=now;g.chat.push({id:crypto.randomUUID(),sender:member.publicId,name:member.name,text,role:member.role,at:now});g.chat=g.chat.slice(-40);await this.commit(g);return;
  }
  if(msg.type==='listo'){
   const seat=g.state.players.indexOf(id);if(g.state.phase!=='handEnd'||seat<0||g.state.bots[seat])return;
   g.listos=[...new Set([...(g.listos??[]),seat])];await this.commit(g);return;
  }
  if(msg.type==='silla'){
   // Sit in (or move to) a free seat. Seats move in the lobby; with a series going,
   // asking for a seat queues you for the next free one when the hand closes.
   const s=g.state,to=msg.to,from=s.players.indexOf(id);
   if(member.role==='host')return this.error(ws,'Choose a seat.');
   if(s.phase!=='lobby'){if(from>=0)return this.error(ws,'Seats change between series.');member.espera=true;await this.commit(g);return;}
   if(!Number.isInteger(to)||to<0||to>3)return this.error(ws,'Choose a seat.');
   if(!s.bots[to])return this.error(ws,'That seat is taken.');
   s.players[to]=id;s.bots[to]=false;s.names[to]=from>=0?s.names[from]:member.name;
   if(from>=0){s.players[from]='bot-'+from;s.bots[from]=true;s.names[from]='Seat '+(from+1);}else{member.role='player';delete member.espera;}
   await this.commit(g);return;
  }
  if(msg.type==='cambiar'){
   const s=g.state,a=msg.a,b=msg.b;
   if(!this.runs(g,id))return this.error(ws,'Only the table host can do that.');
   if(s.phase!=='lobby')return this.error(ws,'Seats change between series.');
   if(![a,b].every(x=>Number.isInteger(x)&&x>=0&&x<4)||a===b)return this.error(ws,'Choose a seat.');
   for(const k of ['players','names','bots'])[s[k][a],s[k][b]]=[s[k][b],s[k][a]];
   for(const i of [a,b])if(s.bots[i]){s.players[i]='bot-'+i;s.names[i]='Seat '+(i+1);}   // a bot id always matches its seat
   await this.commit(g);return;
  }
  if(msg.type==='liberar'){
   // Leave your seat, or (the TV / the table's phone) free someone else's. Mid-series a
   // bot takes the seat and plays its tiles; in the lobby the chair is simply free.
   const s=g.state,seat=msg.seat;
   if(!Number.isInteger(seat)||seat<0||seat>3||s.bots[seat])return this.error(ws,'Choose a seat.');
   const who=s.players[seat];if(who!==id&&!this.runs(g,id))return this.error(ws,'Only the table host can do that.');
   s.players[seat]='bot-'+seat;s.bots[seat]=true;if(s.phase==='lobby')s.names[seat]='Seat '+(seat+1);
   const m=g.members[who];if(m){m.role='spectator';delete m.espera;}
   await this.commit(g);return;
  }
  if(msg.type==='lobby'){
   // After a series: back to the lobby to change partners, instead of the one-tap rematch.
   if(!this.runs(g,id))return this.error(ws,'Only the table host can do that.');
   if(g.state.phase!=='seriesEnd')return this.error(ws,'Finish the series first.');
   g.state=logic.applyAction(g.state,g.state.hostId,{type:'newSeries'});g.seriesId=crypto.randomUUID();g.recorded=false;delete g.patrocinio;
   await this.commit(g);return;
  }
  if(msg.type==='feature'||msg.type==='moderate'){
   if(id!==g.state.hostId)return this.error(ws,'Only the table host can do that.');
   if(msg.type==='feature')g.featured=msg.enabled===true;
   else{
    if(typeof msg.sender!=='string'||!Object.values(g.members).some(m=>m.publicId===msg.sender&&m.id!==g!.state.hostId))return this.error(ws,'Choose a table participant.');
    const sender:string=msg.sender,allow=msg.muted===false,roomName=ws.deserializeAttachment()?.roomName||'main';
    g.muted=allow?g.muted.filter(x=>x!==sender):[...new Set([...g.muted,sender])];
    later.push(()=>setVoicePublish(this.env,roomName,sender,allow).catch(err=>{console.error(err);this.error(ws,'Voice moderation did not complete.');}));
   }
   await this.commit(g);return;
  }
  if(msg.type!=='action')return this.error(ws,'Unknown action.');
  const check=logic.validateAction(g.state,id,msg.action);if(!check.ok)return this.error(ws,check.error??'Invalid move.');
  const type=msg.action.type,dealing=['start','next','newSeries'].includes(type);
  if((type==='next'||type==='newSeries')&&g.closedAt!==undefined&&now<g.closedAt+ESPERA_FIN_MS)return this.error(ws,'Let everyone see the hand first.');
  if(type==='start'||type==='newSeries'){
   const serie=type==='newSeries'?crypto.randomUUID():g.seriesId;
   if(!await this.cubrir(g,serie)){await this.commit(g);return;}
   if(type==='newSeries'){g.seriesId=serie;g.recorded=false;}
  }
  if(dealing)g.state.seed=freshSeed();
  g.state=logic.applyAction(g.state,id,msg.action);
  // The rematch: same seats, dealt at once (a series used to fall back to the lobby,
  // where only the TV could deal). Changing partners is the 'lobby' message.
  if(type==='newSeries'){g.state.seed=freshSeed();g.state=logic.applyAction(g.state,g.state.hostId,{type:'start'});}
  if(type==='start')g.state.names=g.state.names.map((n:string,i:number)=>g!.state.bots[i]?BOT_NAMES[i]:n);
  const queued=this.queueSeries(g,now);
  await this.commit(g,{minimumDelay:dealing?AFTER_DEAL_MS:AFTER_HUMAN_MS});
  if(queued)later.push(()=>this.flushRecords());
 }
 override async alarm(){
  const later:Later=[];
  await this.ctx.blockConcurrencyWhile(async()=>{
   const g=await this.load();if(!g)return;
   const now=Date.now();
   if(now-lastActivity(g)>=IDLE_TTL_MS){
    // Nobody has been here for half a day: the table goes, storage and all.
    await this.ctx.storage.deleteAlarm();await this.ctx.storage.deleteAll();
    for(const ws of this.ctx.getWebSockets())try{ws.close(1000,'This table closed after 12 hours without anyone.');}catch{}
    return;
   }
   let changed=false,minimumDelay=0;const s=g.state;
   if(s.phase==='playing'&&botMayCover(g,s.turn,now)&&g.botKey===botTurnKey(s.handNo,s.moves.length,s.turn)&&now>=(g.botDue??Infinity)){
    const id=s.players[s.turn],a=coverMove(s,id);
    if(a)g.state=logic.applyAction(s,id,a);
    else{console.error('no legal move for seat',s.turn);g.botDue=now+5000;}   // back off; never spin
    changed=true;
   }else if(s.phase==='handEnd'){
    // Nobody dealt: a TV that fell asleep must not freeze the table.
    const at=autoDealAt(g,now),dealer=s.hostId;
    if(at!==null&&at<=now&&logic.validateAction(s,dealer,{type:'next'}).ok){s.seed=freshSeed();g.state=logic.applyAction(s,dealer,{type:'next'});changed=true;minimumDelay=AFTER_DEAL_MS;}
   }
   const wasRecorded=g.recorded,queued=this.queueSeries(g,now);
   await this.commit(g,{dirty:changed||g.recorded!==wasRecorded,broadcast:changed,minimumDelay});
   if(queued||(g.pendingRecords?.length&&now>=(g.retryAt??0)))later.push(()=>this.flushRecords());
  });
  await this.runLater(later);
 }
 override async webSocketClose(ws:WebSocket){const id=ws.deserializeAttachment()?.id;if(!id)return;await this.ctx.blockConcurrencyWhile(async()=>{const g=await this.load();if(!g||!g.members[id])return;const another=this.ctx.getWebSockets().some(other=>other!==ws&&other.deserializeAttachment()?.id===id);if(!another){markAway(g.members[id]!,Date.now());await this.commit(g);}});}
 override async webSocketError(ws:WebSocket){await this.webSocketClose(ws);}
}
