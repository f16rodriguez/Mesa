import {describe,it,expect} from 'vitest';
import * as L from '../src/logic.js';
const initial=()=>{const s:any=L.setup(['a','b','c','d']);s.hostId='host';return s;};
const start=()=>L.applyAction(initial(),'host',{type:'start'}) as any;
const t=(a:number,b:number)=>({id:`${Math.min(a,b)}-${Math.max(a,b)}`,a,b});
const play=(s:any,p:string,a:any)=>{expect(L.validateAction(s,p,a).ok).toBe(true);return L.applyAction(s,p,a) as any;};
describe('Dominican double-six rules',()=>{
 it('deals 28 unique tiles, seven each, without boneyard',()=>{const s=start();expect(s.hands.map((h:any[])=>h.length)).toEqual([7,7,7,7]);expect(new Set(s.hands.flat().map((x:any)=>x.id)).size).toBe(28);expect(s.hands[s.turn].some((x:any)=>x.id==='6-6')).toBe(true);});
 it('is deterministic and leaves input state immutable',()=>{const s=initial(),before=JSON.stringify(s);expect(L.applyAction(s,'host',{type:'start'})).toEqual(L.applyAction(s,'host',{type:'start'}));expect(JSON.stringify(s)).toBe(before);});
 it('requires double six for first opening and refuses voluntary pass',()=>{const s=start(),id=s.players[s.turn],other=s.hands[s.turn].find((x:any)=>x.id!=='6-6');expect(L.validateAction(s,id,{type:'play',tile:other.id,side:'right'}).ok).toBe(false);expect(L.validateAction(s,id,{type:'pass'}).ok).toBe(false);expect(L.validateAction(s,id,{type:'play',tile:'6-6',side:'right'}).ok).toBe(true);});
 it('rejects spectators, wrong turn, wrong end and nonexistent tile',()=>{const s=start();for(const [id,a] of [['spy',{type:'play',tile:'6-6',side:'right'}],[s.players[(s.turn+1)%4],{type:'pass'}],[s.players[s.turn],{type:'play',tile:'6-6',side:'up'}],[s.players[s.turn],{type:'play',tile:'9-9',side:'right'}]])expect(L.validateAction(s,id as string,a).ok).toBe(false);});
 it('lets any seated human deal the next hand or series, but keeps opening and house rules to the host',()=>{
  const base:any=L.setup(['a','b']);base.hostId='host';
  expect(L.validateAction(base,'a',{type:'start'}).ok).toBe(false);
  expect(L.validateAction(base,'a',{type:'settings',settings:base.settings}).ok).toBe(false);
  const ended={...(L.applyAction(base,'host',{type:'start'}) as any),phase:'handEnd'};
  for(const p of ['host','a','b'])expect(L.validateAction(ended,p,{type:'next'}).ok).toBe(true);
  for(const p of ['bot-2','bot-3','spectator'])expect(L.validateAction(ended,p,{type:'next'}).ok).toBe(false);
  const dealt:any=L.applyAction(ended,'b',{type:'next'});expect(dealt.phase).toBe('playing');expect(dealt.handNo).toBe(2);
  const over={...ended,phase:'seriesEnd'};
  expect(L.validateAction(over,'a',{type:'newSeries'}).ok).toBe(true);
  expect(L.validateAction(over,'bot-3',{type:'newSeries'}).ok).toBe(false);
  const fresh:any=L.applyAction(over,'a',{type:'newSeries'});expect(fresh.phase).toBe('lobby');expect(fresh.hostId).toBe('host');
  expect((L.viewFor(ended,'a') as any).canDeal).toBe(true);expect((L.viewFor(ended,'spectator') as any).canDeal).toBe(false);
 });
 it('locks house rules once the hand is dealt',()=>{const s=start();expect(L.validateAction(s,'a',{type:'next'}).ok).toBe(false);expect(L.validateAction(s,'host',{type:'settings',settings:s.settings}).ok).toBe(false);expect(L.validateAction(initial(),'host',{type:'settings',settings:{target:999,capicua:25,tie:'none',allPips:false}}).ok).toBe(false);});
 it('redacts seed, deal, player IDs, and all other hands from player/host/spectator views',()=>{const s=start();for(const id of ['a','host','spectator']){const v:any=L.viewFor(s,id);expect(v.seed).toBeUndefined();expect(v.deal).toBeUndefined();expect(v.hands).toBeUndefined();expect(v.players).toBeUndefined();expect(v.revealed).toBeNull();expect(v.replay).toBeNull();expect(v.hand.length).toBe(id==='a'?7:0);}});
 it('scores domino from opponents only and lets winner open any tile next',()=>{let s=start();s.handNo=2;s.chain=[{...t(1,2),x:1,y:2}];s.left=1;s.right=2;s.turn=0;s.hands=[[t(2,4)],[t(3,6)],[t(5,5)],[t(0,3)]];s=play(s,'a',{type:'play',tile:'2-4',side:'right'});expect(s.phase).toBe('handEnd');expect(s.result.points).toBe(12);expect(s.opener).toBe(0);s=play(s,'host',{type:'next'});expect(s.turn).toBe(0);expect((L.viewFor(s,'a') as any).legal.length).toBe(7);});
 it('awards capicua +25 when final tile fits both pre-play ends',()=>{let s=start();s.chain=[{...t(2,3),x:2,y:3}];s.left=2;s.right=3;s.turn=0;s.hands=[[t(2,3)],[t(1,4)],[t(5,5)],[t(1,6)]];s=play(s,'a',{type:'play',tile:'2-3',side:'right'});expect(s.result.type).toBe('capicua');expect(s.result.points).toBe(37);});
 it('handles all-hands scoring and configurable bonus',()=>{let s=start();s.settings.allPips=true;s.settings.capicua=50;s.chain=[{...t(2,3),x:2,y:3}];s.left=2;s.right=3;s.turn=0;s.hands=[[t(2,3)],[t(1,4)],[t(5,5)],[t(1,6)]];s=play(s,'a',{type:'play',tile:'2-3',side:'right'});expect(s.result.points).toBe(72);});
 it('four legal passes close a tranque and the blocker opens next',()=>{let s=start();s.chain=[{...t(6,6),x:6,y:6}];s.left=6;s.right=6;s.turn=0;s.lastPlay=3;s.hands=[[t(0,1)],[t(3,4)],[t(1,2)],[t(4,5)]];for(let i=0;i<4;i++)s=play(s,s.players[s.turn],{type:'pass'});expect(s.result.type).toBe('tranque');expect(s.result.team).toBe(0);expect(s.result.points).toBe(16);expect(s.opener).toBe(3);});
 it('closes a tranque the moment nobody holds either end, with the player who closed it as blocker',()=>{
  const blocked=(hands:any[][])=>{let s=start();s.chain=[{...t(1,6),x:1,y:6}];s.left=1;s.right=6;s.turn=0;s.lastPlay=3;s.passes=0;s.moves=[];s.hands=hands;return play(s,'a',{type:'play',tile:'1-1',side:'left'});};
  let s=blocked([[t(1,1),t(2,3)],[t(0,2)],[t(3,4)],[t(0,5)]]);
  expect(s.phase).toBe('handEnd');expect(s.result.type).toBe('tranque');expect(s.result.seat).toBe(0);
  expect(s.moves).toEqual([{type:'play',seat:0,tile:'1-1',side:'left'}]);
  expect(s.result.totals).toEqual([12,7]);expect(s.result.team).toBe(1);expect(s.result.points).toBe(12);expect(s.opener).toBe(0);
  s=blocked([[t(1,1),t(2,3)],[t(0,2)],[t(0,4)],[t(3,4)]]);        // 9 against 9: the pair that trancó takes it
  expect(s.result.team).toBe(0);expect(s.result.points).toBe(9);
  s=blocked([[t(1,1),t(2,3)],[t(0,2)],[t(3,4)],[t(5,6)]]);        // seat 3 still has a 6: play on
  expect(s.phase).toBe('playing');expect(s.turn).toBe(1);
 });
 it('settles tied tranque with blocker or no score as configured',()=>{for(const tie of ['blocker','none']){let s=start();s.settings.tie=tie;s.chain=[{...t(6,6),x:6,y:6}];s.left=s.right=6;s.turn=0;s.lastPlay=3;s.hands=[[t(0,1)],[t(0,2)],[t(2,3)],[t(1,3)]];for(let i=0;i<4;i++)s=play(s,s.players[s.turn],{type:'pass'});expect(s.result.team).toBe(tie==='blocker'?1:null);expect(s.result.points).toBe(tie==='blocker'?6:0);expect(s.opener).toBe(3);}});
 it('detects a 200–0 zapato and reveals hands only after closing',()=>{let s=start();s.scores=[198,0];s.chain=[{...t(1,2),x:1,y:2}];s.left=1;s.right=2;s.turn=0;s.hands=[[t(2,4)],[t(3,6)],[t(5,5)],[t(0,3)]];s=play(s,'a',{type:'play',tile:'2-4',side:'right'});expect(L.isGameOver(s).over).toBe(true);expect(s.result.zapato).toBe(true);expect((L.viewFor(s,'spectator') as any).revealed).not.toBeNull();expect((L.viewFor(s,'spectator') as any).replay.deal).toBeDefined();});
 it('completes fixed-seed full series with tile conservation and matching invariant',()=>{for(const seed of [17,8128,625]){let s=initial();s.seed=seed;s=play(s,'host',{type:'start'});let steps=0;while(s.phase!=='seriesEnd'&&steps++<2000){if(s.phase==='handEnd'){s=play(s,'host',{type:'next'});continue;}const p=s.players[s.turn],v:any=L.viewFor(s,p),o=v.legal[0];s=play(s,p,o?{type:'play',...o}:{type:'pass'});expect(s.hands.flat().length+s.chain.length).toBe(28);for(let i=1;i<s.chain.length;i++)expect(s.chain[i-1].y).toBe(s.chain[i].x);}expect(s.phase).toBe('seriesEnd');expect(steps).toBeLessThan(2000);}});
});
describe('a fair deal nobody can reconstruct',()=>{
 const hex=()=>Array.from(crypto.getRandomValues(new Uint8Array(32)),x=>x.toString(16).padStart(2,'0')).join('');
 const dealWith=(seed:unknown)=>{const s:any=initial();s.seed=seed;return L.applyAction(s,'host',{type:'start'}) as any;};
 const seatOf=(s:any,id:string)=>s.hands.findIndex((h:any[])=>h.some(x=>x.id===id));
 it('sends every tile to every seat a quarter of the time over 20k deals',()=>{
  // The old 32-bit LCG put the 6-6 in seat 0 10% of the time and in seat 3 39%,
  // so pair B led the first hand 59% of the time.
  const N=20000,count=Array.from({length:28},()=>[0,0,0,0]),ids=(dealWith(1).hands.flat() as any[]).map(x=>x.id).sort();
  let pairB=0,sameHand=0;
  for(let n=0;n<N;n++){
   const s=dealWith(hex());
   s.hands.forEach((h:any[],seat:number)=>h.forEach(x=>{const row=count[ids.indexOf(x.id)]!;row[seat]=row[seat]!+1;}));
   if(s.turn%2)pairB++;
   if(seatOf(s,'6-6')===seatOf(s,'5-5'))sameHand++;
  }
  const six=count[ids.indexOf('6-6')]!;
  for(const c of six)expect(Math.abs(c/N-0.25)).toBeLessThan(0.02);
  const chi=(row:number[])=>row.reduce((x,c)=>x+(c-N/4)**2/(N/4),0);
  expect(chi(six)).toBeLessThan(16.27);                 // 3 degrees of freedom, p = 0.001
  for(const row of count)expect(chi(row)).toBeLessThan(30.7); // p = 1e-6 per tile: 28 checks, no flakes
  expect(Math.abs(pairB/N-0.5)).toBeLessThan(0.02);
  expect(Math.abs(sameHand/N-6/27)).toBeLessThan(0.02); // the 5-5 lands in one of the 6-6's 6 remaining slots of 27
 });
 it('replays by seed, still accepts an old numeric seed, and moves to a fresh 256-bit seed',()=>{
  const seed=hex(),bytes=seed.match(/../g)!.map(x=>parseInt(x,16));
  expect(dealWith(seed).hands).toEqual(dealWith(seed).hands);
  expect(dealWith(bytes).hands).toEqual(dealWith(seed).hands);
  expect(dealWith(17).hands).toEqual(dealWith(17).hands);
  expect(dealWith(17).hands).not.toEqual(dealWith(18).hands);
  const s=dealWith(17);expect(s.seed).toMatch(/^[0-9a-f]{64}$/);
  // The next deal (a practice game has no server to hand it new bytes) differs.
  s.phase='handEnd';s.opener=0;const again:any=L.applyAction(s,'host',{type:'next'});expect(again.hands).not.toEqual(s.hands);expect(again.seed).not.toBe(s.seed);
 });
 it('shows every hand sorted, so tile order says nothing about the deck',()=>{
  const sorted=(h:any[])=>h.every((x,i)=>!i||Math.max(h[i-1].a,h[i-1].b)>Math.max(x.a,x.b)||(Math.max(h[i-1].a,h[i-1].b)===Math.max(x.a,x.b)&&Math.min(h[i-1].a,h[i-1].b)>Math.min(x.a,x.b)));
  for(let n=0;n<50;n++){
   const s=dealWith(hex());
   for(const p of ['a','b','c','d'])expect(sorted((L.viewFor(s,p) as any).hand)).toBe(true);
   // even a hand stored out of order (a state saved before this change)
   s.hands[0]=[...s.hands[0]].reverse();expect(sorted((L.viewFor(s,'a') as any).hand)).toBe(true);
   const closed={...s,phase:'handEnd'};for(const h of (L.viewFor(closed,'spectator') as any).revealed)expect(sorted(h)).toBe(true);
  }
 });
});
