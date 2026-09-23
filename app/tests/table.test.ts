/**
 * What other people see of a name typed on a phone.
 */
import {SELF} from 'cloudflare:test';
import {describe,it,expect} from 'vitest';
import {cleanName} from '../src/accounts';
import {BOT_NAMES} from '../src/room';

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
