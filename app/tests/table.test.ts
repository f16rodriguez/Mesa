/**
 * The room's clock: when a bot may take a seat, when the room wakes itself,
 * and what it writes. Pure helpers are checked directly; the Durable Object is
 * driven through `runInDurableObject` with a seeded table, so the timing cases
 * do not have to wait out real seconds.
 */
import {env,runInDurableObject,SELF} from 'cloudflare:test';
import {describe,it,expect} from 'vitest';
import * as L from '../src/logic.js';
import {botTurnKey} from '../src/bot-rhythm';
import {cleanName} from '../src/accounts';
import {AUTO_DEAL_MS,BOT_NAMES,COVER_MS,IDLE_TTL_MS,botMayCover,coverAt,coverMove,nextWake} from '../src/room';

const t=(a:number,b:number)=>({id:`${Math.min(a,b)}-${Math.max(a,b)}`,a:Math.min(a,b),b:Math.max(a,b)});
const member=(id:string,now:number,extra:any={})=>({id,publicId:'pub-'+id,name:id,role:'player',lastSeen:now,away:false,...extra});
/** Two people (seats 0 and 1) and two bots, hand 1 dealt, seat 0 holding the 6-6 and to move. */
function table(now:number,extra:any={}):any{
 let s:any=L.setup(['a','b']);s.hostId='host';s=L.applyAction(s,'host',{type:'start'});
 const six=s.hands.findIndex((h:any[])=>h.some(x=>x.id==='6-6'));[s.hands[0],s.hands[six]]=[s.hands[six],s.hands[0]];s.turn=s.opener=s.lastPlay=0;
 return {state:s,members:{host:{...member('host',now),role:'host'},a:member('a',now),b:member('b',now)},chat:[],muted:[],featured:false,seriesId:crypto.randomUUID(),...extra};
}
const stubFor=(name=crypto.randomUUID()):DurableObjectStub=>(env as any).ROOMS.get((env as any).ROOMS.idFromName(name));
// The pool's generic signature recurses forever on an untyped stub; the room is `any` here anyway.
const run=runInDurableObject as unknown as <R>(stub:DurableObjectStub,fn:(room:any,state:DurableObjectState)=>Promise<R>)=>Promise<R>;
/** Seed the room's storage with `g`, then run `fn` inside it. */
async function inRoom<R>(g:any,fn:(room:any,state:DurableObjectState)=>Promise<R>){
 const stub=stubFor();
 return run(stub,async(room,state)=>{await state.storage.put('mesa',g);return fn(room,state);});
}
const stored=async(state:DurableObjectState)=>(await state.storage.get<any>('mesa'))!;

describe('when a bot may cover a seat',()=>{
 it('waits 20 s after a player goes away, not the moment they glance at another app',()=>{
  const now=Date.now(),g=table(now);
  g.members.a={...g.members.a,away:true,awaySince:now-5000,lastSeen:now-5000};
  expect(botMayCover(g,0,now)).toBe(false);
  expect(coverAt(g,0,now)).toBe(now-5000+COVER_MS);
  expect(botMayCover(g,0,now+15001)).toBe(true);
 });
 it('uses the later of going away and the last thing heard',()=>{
  const now=Date.now(),g=table(now);
  g.members.a={...g.members.a,away:true,awaySince:now-30000,lastSeen:now-2000};
  expect(botMayCover(g,0,now)).toBe(false);
  g.members.a={...g.members.a,away:true,awaySince:now-2000,lastSeen:now-30000};
  expect(botMayCover(g,0,now)).toBe(false);
  g.members.a={...g.members.a,away:false,awaySince:undefined,lastSeen:now-COVER_MS-1};  // silent, phone never said goodbye
  expect(botMayCover(g,0,now)).toBe(true);
 });
 it('never covers when nobody else is waiting, and always covers a bot seat',()=>{
  const now=Date.now(),g=table(now);
  g.members.a={...g.members.a,away:true,awaySince:now-60000,lastSeen:now-60000};
  g.members.b={...g.members.b,away:true,awaySince:now-1000,lastSeen:now-1000};
  expect(coverAt(g,0,now)).toBeNull();
  expect(botMayCover(g,2,now)).toBe(true);
 });
 it('plays the first legal move when the bot picks something the rules refuse',()=>{
  const s=table(Date.now()).state,id=s.players[0];
  expect(coverMove(s,id,()=>({type:'play',tile:'9-9',side:'up'}))).toEqual({type:'play',tile:'6-6',side:'right'});
  expect(coverMove(s,id,()=>({type:'pass'}))).toEqual({type:'play',tile:'6-6',side:'right'});
 });
});

describe('the room clock',()=>{
 it('does not poll while a present human is thinking',()=>{
  const now=Date.now(),g=table(now);
  expect(nextWake(g,now,[])).toBe(now+COVER_MS);            // the only thing that can happen next
  g.members.b.away=true;                                     // and with nobody waiting on seat 0...
  expect(nextWake(g,now,[])).toBe(now+IDLE_TTL_MS);          // ...only the idle clean-up
 });
 it('arms exactly one alarm for a thinking human and writes nothing when it fires early',async()=>{
  const now=Date.now();
  await inRoom(table(now),async(room,state)=>{
   await room.commit(await stored(state));
   const alarm=(await state.storage.getAlarm())!;
   expect(alarm).toBeGreaterThanOrEqual(now+COVER_MS);expect(alarm).toBeLessThan(now+COVER_MS+2000);
   const before=JSON.stringify(await stored(state));let puts=0;const put=state.storage.put.bind(state.storage);
   (state.storage as any).put=(...args:any[])=>{puts++;return (put as any)(...args);};
   await room.alarm();
   expect(puts).toBe(0);
   await room.save(await stored(state));expect(puts).toBe(1);   // the spy does see the room's writes
   (state.storage as any).put=put;expect(JSON.stringify(await stored(state))).toBe(before);
   expect(await state.storage.getAlarm()).toBe(alarm);
  });
 });
 it('lets the bot take a seat that has been away 20 s, and knocks a forced pass in about a second',async()=>{
  const now=Date.now(),g=table(now);
  g.members.a={...g.members.a,away:true,awaySince:now-COVER_MS-1,lastSeen:now-COVER_MS-1};
  await inRoom(g,async(room,state)=>{
   await room.commit(await stored(state));
   let h=await stored(state);expect(h.botKey).toBe(botTurnKey(1,0,0));expect(h.botDue-now).toBeGreaterThanOrEqual(3800);
   h.botDue=Date.now()-1;await state.storage.put('mesa',h);await room.alarm();
   h=await stored(state);expect(h.state.moves).toEqual([{type:'play',seat:0,tile:'6-6',side:'right'}]);
   // Seat 1 is next and present: no bot, the alarm waits for it to go quiet.
   expect(h.botKey).toBeUndefined();
   h.state.turn=2;h.state.hands[2]=[t(0,0)];h.state.left=5;h.state.right=4;await state.storage.put('mesa',h);
   const at=Date.now();await room.commit(await stored(state));h=await stored(state);
   expect(h.botDue-at).toBeGreaterThanOrEqual(900);expect(h.botDue-at).toBeLessThan(1600);
  });
 });
 it('deals the next hand itself 15 s after a hand closes, if someone is seated and there',async()=>{
  const now=Date.now(),g=table(now,{closedAt:now-AUTO_DEAL_MS-1});g.state.phase='handEnd';
  await inRoom(g,async(room,state)=>{
   const seed=(await stored(state)).state.seed;await room.alarm();
   const h=await stored(state);expect(h.state.phase).toBe('playing');expect(h.state.handNo).toBe(2);expect(h.state.seed).not.toBe(seed);expect(h.closedAt).toBeUndefined();
  });
  const empty=table(now,{closedAt:now-AUTO_DEAL_MS-1});empty.state.phase='handEnd';
  for(const id of ['a','b'])empty.members[id]={...empty.members[id],away:true,awaySince:now-1000};
  await inRoom(empty,async(room,state)=>{await room.alarm();expect((await stored(state)).state.phase).toBe('handEnd');});
 });
 it('deletes a table nobody has been seen at for 12 hours',async()=>{
  const old=Date.now()-IDLE_TTL_MS-1000,g=table(old);
  await inRoom(g,async(room,state)=>{await room.alarm();expect(await state.storage.get('mesa')).toBeUndefined();expect(await state.storage.getAlarm()).toBeNull();});
 });
});

describe('names at the table',()=>{
 it('strips control, bidi and zero-width characters and caps at 24 code points',()=>{
  expect(cleanName('  Ana‮​ María\t\n Pérez ')).toBe('Ana María Pérez');
  expect(cleanName('​⁦‮ \u0000')).toBe('');
  expect(cleanName(42)).toBe('');
  const smile='\u{1F600}',capped=cleanName('a'.repeat(23)+smile+'b');
  expect(capped).toBe('a'.repeat(23)+smile);
  expect(Array.from(cleanName(smile.repeat(30)))).toHaveLength(24);
  expect(cleanName(smile.repeat(30))).toBe(smile.repeat(24));
 });
 it('seats a player under a clean name, falls back to Jugador, and names the bots like the client',async()=>{
  const room=crypto.randomUUID(),token=()=>Array.from(crypto.getRandomValues(new Uint8Array(32)),x=>x.toString(16).padStart(2,'0')).join('');
  const open=async(join:any)=>{const r=await SELF.fetch('https://game.test/ws/'+room,{headers:{Upgrade:'websocket'}}),ws=r.webSocket!;ws.accept();const frames:any[]=[];ws.addEventListener('message',e=>{if(e.data!=='__pong')frames.push(JSON.parse(String(e.data)));});ws.send(JSON.stringify({token:token(),...join,type:'join'}));
   const next=async(test:(f:any)=>boolean)=>{for(let i=0;i<300;i++){const x=frames.findIndex(test);if(x>=0)return frames.splice(x,1)[0];await scheduler.wait(10);}throw Error('no frame '+JSON.stringify(frames));};return {ws,next};};
  const host=await open({role:'host'});await host.next(f=>f.type==='state');
  const a=await open({role:'player',name:'‮evil​   name\n'});expect((await a.next(f=>f.type==='state')).view.names[0]).toBe('evil name');
  const b=await open({role:'player',name:'​‍'});expect((await b.next(f=>f.type==='state')).view.names[1]).toBe('Jugador');
  host.ws.send(JSON.stringify({type:'action',action:{type:'start'}}));
  const v=(await host.next(f=>f.type==='state'&&f.view.phase==='playing')).view;
  expect(v.names).toEqual(['evil name','Jugador',BOT_NAMES[2],BOT_NAMES[3]]);expect(BOT_NAMES).toEqual(['Don Rafa','Marisol','Luis','Carmen']);
  [host,a,b].forEach(x=>x.ws.close());
 });
});
