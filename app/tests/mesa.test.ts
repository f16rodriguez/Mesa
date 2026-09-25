/**
 * Who runs the table and who sits where: the phone that deals without a remote,
 * moving and swapping seats, leaving, arriving mid-hand, the pause after a hand
 * closes and the one-tap rematch.
 */
import {env,runInDurableObject} from 'cloudflare:test';
import {describe,it,expect} from 'vitest';
import * as L from '../src/logic.js';
import {AUTO_DEAL_MS,BOTS_SOLOS_MS,ESPERA_FIN_MS,autoDealAt,vipOf} from '../src/room';

const run=runInDurableObject as unknown as <R>(stub:DurableObjectStub,fn:(room:any,state:DurableObjectState)=>Promise<R>)=>Promise<R>;
const member=(id:string,now:number,extra:any={})=>({id,publicId:'pub-'+id,name:id,role:'player',lastSeen:now,away:false,...extra});
/** A lobby with people in the given seats (the rest bots). */
function lobby(seated:Record<number,string>,now=Date.now()):any{
 const s:any=L.setup([]);s.hostId='host';const members:any={host:{...member('host',now),role:'host'}};
 for(const [i,id] of Object.entries(seated)){s.players[+i]=id;s.bots[+i]=false;s.names[+i]=id;members[id]=member(id,now);}
 return {state:s,members,chat:[],muted:[],featured:false,seriesId:crypto.randomUUID()};
}
const ws=(id:string|null,extra:any={})=>{const sent:any[]=[];let att:any={id,...extra};return {sent,deserializeAttachment:()=>att,serializeAttachment:(a:any)=>{att=a;},send:(x:string)=>sent.push(JSON.parse(x))};};
async function inRoom<R>(g:any,fn:(room:any,state:DurableObjectState)=>Promise<R>){
 const stub=(env as any).ROOMS.get((env as any).ROOMS.idFromName(crypto.randomUUID()));
 return run(stub,async(room,state)=>{await state.storage.put('mesa',g);return fn(room,state);});
}
const stored=async(state:DurableObjectState)=>(await state.storage.get<any>('mesa'))!;
const say=(room:any,socket:any,msg:any)=>room.handle(socket,JSON.stringify(msg),[]);
const lastError=(socket:any)=>socket.sent.filter((m:any)=>m.type==='error').pop()?.error;

describe('the phone that runs the table',()=>{
 it('is the first seated person with a live phone, and can deal and set rules',async()=>{
  const now=Date.now(),g=lobby({1:'ana',3:'beto'},now);
  expect(vipOf(g,now)).toBe('ana');
  g.members.ana={...g.members.ana,away:true,awaySince:now-30000,lastSeen:now-30000};
  expect(vipOf(g,now)).toBe('beto');                                   // Ana's phone is asleep
  await inRoom(lobby({1:'ana',3:'beto'}),async(room,state)=>{
   await room.commit(await stored(state));expect((await stored(state)).state.vip).toBe('ana');
   const beto=ws('beto');await say(room,beto,{type:'action',action:{type:'start'}});
   expect(lastError(beto)).toBe('Only the table host can do that.');
   await say(room,ws('ana'),{type:'action',action:{type:'settings',settings:{target:100,capicua:25,tie:'blocker',allPips:false}}});
   await say(room,ws('ana'),{type:'action',action:{type:'start'}});
   const h=await stored(state);expect(h.state.settings.target).toBe(100);expect(h.state.phase).toBe('playing');
  });
 });
});

describe('uno contra uno',()=>{
 it('lets the table switch to two chairs in the lobby, keeping people, and refuses when too many sit',async()=>{
  await inRoom(lobby({0:'ana',2:'beto'}),async(room,state)=>{
   await room.commit(await stored(state));
   const beto=ws('beto');await say(room,beto,{type:'modo',n:2});expect(lastError(beto)).toBe('Only the table host can do that.');
   await say(room,ws('ana'),{type:'modo',n:2});
   let s=(await stored(state)).state;expect(s.players).toEqual(['ana','beto']);expect(s.names).toEqual(['ana','beto']);
   await say(room,ws('ana'),{type:'action',action:{type:'start'}});
   s=(await stored(state)).state;expect(s.hands.map((h:any[])=>h.length)).toEqual([7,7]);expect(s.pozo.length).toBe(14);
   const late=ws('ana');await say(room,late,{type:'modo',n:4});expect(lastError(late)).toBe('Seats change between series.');
  });
  await inRoom(lobby({0:'ana',1:'beto',3:'caro'}),async(room,state)=>{
   await room.commit(await stored(state));const ana=ws('ana');await say(room,ana,{type:'modo',n:2});
   expect(lastError(ana)).toBe('Only two fit at one against one. Someone has to get up first.');expect((await stored(state)).state.players.length).toBe(4);
  });
 });
 it('never sends the pozo to anyone',async()=>{
  await inRoom(lobby({0:'ana'}),async(room,state)=>{
   await room.commit(await stored(state));await say(room,ws('ana'),{type:'modo',n:2});await say(room,ws('ana'),{type:'action',action:{type:'start'}});
   const g=await stored(state),sock=ws('ana');room.ctx.getWebSockets=()=>[sock];room.broadcast(g);
   const msg=JSON.stringify(sock.sent.at(-1));expect(sock.sent.at(-1).view.pozo).toBe(14);for(const x of g.state.pozo)expect(msg).not.toContain(`"${x.id}"`);
  });
 });
});

describe('seats',()=>{
 it('lets a person move to a free seat and the table phone swap two seats',async()=>{
  await inRoom(lobby({0:'ana',1:'beto'}),async(room,state)=>{
   await room.commit(await stored(state));
   await say(room,ws('beto'),{type:'silla',to:2});                      // Beto moves across from Ana
   let s=(await stored(state)).state;expect(s.players[2]).toBe('beto');expect(s.bots[1]).toBe(true);expect(s.players[1]).toBe('bot-1');
   const beto=ws('beto');await say(room,beto,{type:'cambiar',a:0,b:3});expect(lastError(beto)).toBe('Only the table host can do that.');
   await say(room,ws('ana'),{type:'cambiar',a:0,b:1});                  // Ana (runs the table) moves herself next to Beto
   s=(await stored(state)).state;expect(s.players[1]).toBe('ana');expect(s.players[0]).toBe('bot-0');expect(s.bots[0]).toBe(true);
   const taken=ws('ana');await say(room,taken,{type:'silla',to:2});expect(lastError(taken)).toBe('That seat is taken.');
  });
 });
 it('frees a seat when someone leaves, and a bot plays it mid-series',async()=>{
  const g=lobby({0:'ana',1:'beto'});
  await inRoom(g,async(room,state)=>{
   await room.commit(await stored(state));await say(room,ws('ana'),{type:'action',action:{type:'start'}});
   await say(room,ws('beto'),{type:'liberar',seat:1});
   const h=await stored(state);expect(h.state.bots[1]).toBe(true);expect(h.state.players[1]).toBe('bot-1');expect(h.members.beto.role).toBe('spectator');
   expect(h.state.hands[1]).toHaveLength(7);                            // the tiles stay with the seat
   const intruso=ws('beto');await say(room,intruso,{type:'liberar',seat:0});expect(lastError(intruso)).toBe('Only the table host can do that.');   // watching, Beto can't unseat Ana
  });
 });
 it('seats someone who arrives mid-hand as soon as the hand closes',async()=>{
  const g=lobby({0:'ana'});
  await inRoom(g,async(room,state)=>{
   await room.commit(await stored(state));await say(room,ws('ana'),{type:'action',action:{type:'start'}});
   const token='cd'.repeat(32),bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(token));
   const id=Array.from(new Uint8Array(bytes),x=>x.toString(16).padStart(2,'0')).join('');
   await say(room,ws(null),{type:'join',role:'player',token,name:'Cleo'});
   let h=await stored(state);expect(h.members[id].espera).toBe(true);expect(h.state.players).not.toContain(id);
   h.state.phase='handEnd';h.state.result={team:0,type:'domino',points:10,pips:[0,0,0,0],totals:[0,0]};await state.storage.put('mesa',h);
   await room.commit(await stored(state));
   h=await stored(state);expect(h.state.players[1]).toBe(id);expect(h.state.names[1]).toBe('Cleo');expect(h.members[id].role).toBe('player');
  });
 });
});

describe('after a hand closes',()=>{
 it('keeps an all-bot table dealing while someone watches, and stops when nobody does',()=>{
  const now=Date.now(),g=lobby({},now);
  g.state=L.applyAction(g.state,'host',{type:'start'});g.state.phase='handEnd';g.closedAt=now;
  expect(autoDealAt(g,now)).toBe(now+BOTS_SOLOS_MS);
  g.members.host.lastSeen=now-60000;expect(autoDealAt(g,now)).toBeNull();
  g.state.phase='seriesEnd';g.members.host.lastSeen=now;expect(autoDealAt(g,now)).toBeNull();   // la serie terminó: no se reparte sola
 });
 it('lets nobody deal during the reveal, then deals when everyone says Listo',async()=>{
  const now=Date.now(),g=lobby({0:'ana',2:'beto'},now);
  g.state=L.applyAction(g.state,'host',{type:'start'});g.state.phase='handEnd';g.closedAt=now;
  expect(autoDealAt(g,now)).toBe(now+AUTO_DEAL_MS);
  g.listos=[0,2];expect(autoDealAt(g,now)).toBe(now+ESPERA_FIN_MS);
  await inRoom(lobby({0:'ana',2:'beto'}),async(room,state)=>{
   const h=await stored(state);h.state=L.applyAction(h.state,'host',{type:'start'});h.state.phase='handEnd';h.closedAt=Date.now();await state.storage.put('mesa',h);
   const ana=ws('ana');await say(room,ana,{type:'action',action:{type:'next'}});expect(lastError(ana)).toBe('Let everyone see the hand first.');
   await say(room,ws('ana'),{type:'listo'});await say(room,ws('beto'),{type:'listo'});
   const x=await stored(state);expect(x.listos).toEqual([0,2]);
   x.closedAt=Date.now()-ESPERA_FIN_MS-1;await state.storage.put('mesa',x);await room.alarm();
   expect((await stored(state)).state.handNo).toBe(2);                  // everyone was ready: dealt without waiting 30 s
  });
 });
 it('deals the rematch at once with the same seats, and can go back to the lobby to change partners',async()=>{
  const g=lobby({0:'ana',1:'beto'});
  await inRoom(g,async(room,state)=>{
   const h=await stored(state);h.state=L.applyAction(h.state,'host',{type:'start'});h.state.phase='seriesEnd';h.state.scores=[200,40];h.closedAt=Date.now()-ESPERA_FIN_MS-1;await state.storage.put('mesa',h);
   await say(room,ws('beto'),{type:'action',action:{type:'newSeries'}});
   let x=await stored(state);expect(x.state.phase).toBe('playing');expect(x.state.handNo).toBe(1);expect(x.state.scores).toEqual([0,0]);expect(x.state.players.slice(0,2)).toEqual(['ana','beto']);
   x.state.phase='seriesEnd';await state.storage.put('mesa',x);
   await say(room,ws('ana'),{type:'lobby'});
   x=await stored(state);expect(x.state.phase).toBe('lobby');expect(x.state.players.slice(0,2)).toEqual(['ana','beto']);
  });
 });
});
