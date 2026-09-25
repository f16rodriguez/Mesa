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
 it('calls it capicúa only when the bonus is on, and can require two different ends',()=>{
  const last=(settings:any,left:number,right:number,tile:any)=>{let s=start();Object.assign(s.settings,settings);s.chain=[{...t(left,right),x:left,y:right}];s.left=left;s.right=right;s.turn=0;s.hands=[[tile],[t(1,4)],[t(5,5)],[t(1,6)]];return play(s,'a',{type:'play',tile:tile.id,side:'right'}).result;};
  let r=last({capicua:0},2,3,t(2,3));                       // fits both ends, but the house plays without the bonus
  expect(r.type).toBe('domino');expect(r.bonus).toBe(0);expect(r.points).toBe(12);
  r=last({},3,3,t(3,4));expect(r.type).toBe('capicua');expect(r.bonus).toBe(25);
  r=last({capicuaDistinct:true},3,3,t(3,4));expect(r.type).toBe('domino');expect(r.bonus).toBe(0);
  r=last({capicuaDistinct:true},2,3,t(2,3));expect(r.type).toBe('capicua');
 });
 it('keeps only the known house rules, each validated',()=>{
  const s=initial(),ok={target:100,capicua:0,tie:'none',allPips:true};
  for(const bad of [null,'x',[],{...ok,target:150},{...ok,capicua:10},{...ok,tie:'split'},{...ok,allPips:'yes'},{...ok,capicuaDistinct:1}])
   expect(L.validateAction(s,'host',{type:'settings',settings:bad}).ok).toBe(false);
  const next:any=play(s,'host',{type:'settings',settings:{...ok,capicuaDistinct:true,huge:'x'.repeat(3000),bots:[false,false,false,false]}});
  expect(next.settings).toEqual({...ok,capicuaDistinct:true,pozo:true});expect(next.bots).toEqual(s.bots);
  // a client that does not know the newer field leaves it as it was
  expect((play(next,'host',{type:'settings',settings:ok}) as any).settings.capicuaDistinct).toBe(true);
  expect((L.applyAction(s,'host',{type:'settings',settings:ok}) as any).settings.capicuaDistinct).toBe(false);
 });
 it('handles all-hands scoring and configurable bonus',()=>{let s=start();s.settings.allPips=true;s.settings.capicua=50;s.chain=[{...t(2,3),x:2,y:3}];s.left=2;s.right=3;s.turn=0;s.hands=[[t(2,3)],[t(1,4)],[t(5,5)],[t(1,6)]];s=play(s,'a',{type:'play',tile:'2-3',side:'right'});expect(s.result.points).toBe(72);});
 it('four legal passes close a tranque and the winning pair opens next',()=>{let s=start();s.chain=[{...t(6,6),x:6,y:6}];s.left=6;s.right=6;s.turn=0;s.lastPlay=3;s.hands=[[t(0,1)],[t(3,4)],[t(1,2)],[t(4,5)]];for(let i=0;i<4;i++)s=play(s,s.players[s.turn],{type:'pass'});expect(s.result.type).toBe('tranque');expect(s.result.team).toBe(0);expect(s.result.points).toBe(16);expect(s.opener).toBe(0);});   // seat 3 trancó and lost: seat 0 (1 pip) leads, not seat 2 (3)
 it('closes a tranque the moment nobody holds either end, with the player who closed it as blocker',()=>{
  const blocked=(hands:any[][])=>{let s=start();s.chain=[{...t(1,6),x:1,y:6}];s.left=1;s.right=6;s.turn=0;s.lastPlay=3;s.passes=0;s.moves=[];s.hands=hands;return play(s,'a',{type:'play',tile:'1-1',side:'left'});};
  let s=blocked([[t(1,1),t(2,3)],[t(0,2)],[t(3,4)],[t(0,5)]]);
  expect(s.phase).toBe('handEnd');expect(s.result.type).toBe('tranque');expect(s.result.seat).toBe(0);
  expect(s.moves).toEqual([{type:'play',seat:0,tile:'1-1',side:'left'}]);
  expect(s.result.totals).toEqual([12,7]);expect(s.result.team).toBe(1);expect(s.result.points).toBe(12);expect(s.opener).toBe(1);   // the blocker lost: seat 1 (2 pips) leads
  s=blocked([[t(1,1),t(2,3)],[t(0,2)],[t(0,4)],[t(3,4)]]);        // 9 against 9: the pair that trancó takes it
  expect(s.result.team).toBe(0);expect(s.result.points).toBe(9);
  s=blocked([[t(1,1),t(2,3)],[t(0,2)],[t(3,4)],[t(5,6)]]);        // seat 3 still has a 6: play on
  expect(s.phase).toBe('playing');expect(s.turn).toBe(1);
 });
 it('settles tied tranque with blocker or no score as configured',()=>{for(const tie of ['blocker','none']){let s=start();s.settings.tie=tie;s.chain=[{...t(6,6),x:6,y:6}];s.left=s.right=6;s.turn=0;s.lastPlay=3;s.opener=2;s.hands=[[t(0,1)],[t(0,2)],[t(2,3)],[t(1,3)]];for(let i=0;i<4;i++)s=play(s,s.players[s.turn],{type:'pass'});expect(s.result.team).toBe(tie==='blocker'?1:null);expect(s.result.points).toBe(tie==='blocker'?6:0);expect(s.opener).toBe(tie==='blocker'?3:2);}});
 it('after a tranque the winning pair leads, the lighter hand first and the next in turn on a tie',()=>{
  const blocked=(hands:any[][])=>{let s=start();s.chain=[{...t(1,6),x:1,y:6}];s.left=1;s.right=6;s.turn=0;s.lastPlay=3;s.passes=0;s.moves=[];s.hands=hands;return play(s,'a',{type:'play',tile:'1-1',side:'left'});};
  expect(blocked([[t(1,1),t(0,2)],[t(3,4)],[t(0,3)],[t(4,5)]]).opener).toBe(0);   // seat 0 trancó and his pair won: he leads
  expect(blocked([[t(1,1),t(4,5)],[t(0,3)],[t(3,4)],[t(0,2)]]).opener).toBe(3);   // pair 1 won: seat 3 has 2 pips, seat 1 has 3
  expect(blocked([[t(1,1),t(4,5)],[t(0,2)],[t(3,4)],[t(0,2)]]).opener).toBe(1);   // 2 against 2: seat 1 is next after the blocker
 });
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
describe('uno contra uno',()=>{
 const two=(pozo=true)=>{const s:any=L.setup(['a'],2);s.hostId='host';s.settings.pozo=pozo;return L.applyAction(s,'host',{type:'start'}) as any;};
 it('seats two, deals seven each and leaves fourteen in the pozo, hidden from every view',()=>{
  const s=two();expect(s.players).toEqual(['a','bot-1']);expect(s.hands.map((h:any[])=>h.length)).toEqual([7,7]);expect(s.pozo.length).toBe(14);
  expect(new Set([...s.hands.flat(),...s.pozo].map((x:any)=>x.id)).size).toBe(28);
  for(const id of ['a','bot-1','host','spectator']){const v:any=L.viewFor(s,id),j=JSON.stringify(v);expect(v.pozo).toBe(14);for(const x of s.pozo)expect(j).not.toContain(`"${x.id}"`);}
 });
 it('opens the first hand with the best double in hand, or the heaviest tile when nobody has one',()=>{
  let s:any=L.setup(['a'],2);s.hostId='host';
  for(let k=0;k<40;k++){s.seed='abre'+k;const d:any=L.applyAction(s,'host',{type:'start'}),mine=d.hands.flat(),doubles=mine.filter((x:any)=>x.a===x.b);
   const want=doubles.length?doubles.sort((x:any,y:any)=>y.a-x.a)[0]:mine.sort((x:any,y:any)=>(y.a+y.b)-(x.a+x.b)||Math.max(y.a,y.b)-Math.max(x.a,x.b))[0];
   expect(d.salida).toBe(want.id);expect(d.hands[d.turn].some((x:any)=>x.id===want.id)).toBe(true);
   const v:any=L.viewFor(d,d.players[d.turn]);expect(v.legal).toEqual([{tile:want.id,side:'right'}]);}
 });
 it('draws one tile per tap only with nothing that fits, and passes only once the pozo is empty',()=>{
  let s=two();s.chain=[{...t(6,6),x:6,y:6}];s.left=6;s.right=6;s.turn=0;s.hands=[[t(0,1),t(2,3)],[t(4,5)]];s.pozo=[t(1,1),t(5,6),t(0,0)];
  expect(L.validateAction(s,'a',{type:'pass'}).error).toBe('Draw from the boneyard first.');
  expect((L.viewFor(s,'a') as any).canDraw).toBe(true);expect((L.viewFor(s,'a') as any).canPass).toBe(false);
  s=play(s,'a',{type:'draw'});expect(s.turn).toBe(0);expect(s.hands[0].length).toBe(3);expect(s.moves.at(-1)).toEqual({type:'draw',seat:0});
  s=play(s,'a',{type:'draw'});expect(L.validateAction(s,'a',{type:'draw'}).error).toBe('You have a legal tile. Play it instead of drawing.');
  s=play(s,'a',{type:'play',tile:'5-6',side:'right'});expect(s.turn).toBe(1);expect(s.pozo.length).toBe(1);
  expect(L.validateAction(s,'bot-1',{type:'draw'}).error).toBe('You have a legal tile. Play it instead of drawing.');
 });
 it('without the pozo, the fourteen sleep: nobody draws and a pass is a pass',()=>{
  let s=two(false);s.chain=[{...t(6,6),x:6,y:6}];s.left=6;s.right=6;s.turn=0;s.hands=[[t(0,1)],[t(4,6)]];
  expect(L.validateAction(s,'a',{type:'draw'}).error).toBe('This table plays without drawing.');
  s=play(s,'a',{type:'pass'});expect(s.turn).toBe(1);expect(s.pozo.length).toBe(14);
 });
 it('scores a dominó from the one opponent and a tranque by pips, winner leading next',()=>{
  let s=two();s.handNo=2;s.chain=[{...t(1,2),x:1,y:2}];s.left=1;s.right=2;s.turn=1;s.hands=[[t(5,5),t(0,3)],[t(2,4)]];
  s=play(s,'bot-1',{type:'play',tile:'2-4',side:'right'});expect(s.result.team).toBe(1);expect(s.result.points).toBe(13);expect(s.scores).toEqual([0,13]);expect(s.opener).toBe(1);
  s=two();s.pozo=[];s.chain=[{...t(6,6),x:6,y:6}];s.left=6;s.right=6;s.turn=0;s.lastPlay=0;s.hands=[[t(0,1)],[t(4,5)]];
  s=play(s,'a',{type:'pass'});s=play(s,'bot-1',{type:'pass'});
  expect(s.result.type).toBe('tranque');expect(s.result.team).toBe(0);expect(s.result.points).toBe(9);expect(s.opener).toBe(0);
 });
 it('closes a true block at once, the next player taking the dead pozo as the rules would make him draw it',()=>{
  let s=two();s.chain=[{...t(6,6),x:6,y:6},{...t(6,5),x:6,y:5}];s.left=6;s.right=5;s.turn=0;
  s.hands=[[t(5,1),t(0,0)],[t(2,3)]];s.pozo=[t(4,4),t(1,2)];
  const all=[t(0,6),t(1,6),t(2,6),t(3,6),t(4,6),t(0,5),t(2,5),t(3,5),t(4,5),t(5,5)].map((x,i)=>({...x,x:x.a,y:x.b,seat:i%2}));s.chain=[...s.chain,...all];
  s=play(s,'a',{type:'play',tile:'1-5',side:'right'});   // the new end is 1 and the pozo still has the 1-2: play on
  expect(s.phase).toBe('playing');
  let u=two();u.chain=[{...t(6,6),x:6,y:6}];u.left=6;u.right=6;u.turn=0;u.hands=[[t(6,0),t(1,1)],[t(2,3)]];u.pozo=[t(4,4),t(2,2)];
  u.chain=[...u.chain,...[t(1,6),t(2,6),t(3,6),t(4,6),t(5,6),t(0,1),t(0,2),t(0,3),t(0,4),t(0,5),t(0,0)].map((x,i)=>({...x,x:x.a,y:x.b,seat:i%2}))];
  u=play(u,'a',{type:'play',tile:'0-6',side:'right'});    // ends 6 and 0: every 6 and every 0 is out
  expect(u.result.type).toBe('tranque');expect(u.pozo.length).toBe(0);expect(u.hands[1].length).toBe(3);expect(u.result.pips).toEqual([2,17]);expect(u.result.team).toBe(0);
 });
 it('switches between dos contra dos and uno contra uno in the lobby, people first',()=>{
  const four:any=L.setup(['a']);four.players[2]='b';four.bots[2]=false;four.names=['Ana','Seat 2','Beto','Seat 4'];
  const t2:any=L.seatsFor(four,2);expect(t2.players).toEqual(['a','b']);expect(t2.names).toEqual(['Ana','Beto']);expect(t2.bots).toEqual([false,false]);
  const back:any=L.seatsFor(t2,4);expect(back.players).toEqual(['a','b','bot-2','bot-3']);expect(back.bots).toEqual([false,false,true,true]);
  four.players[1]='c';four.bots[1]=false;expect(L.seatsFor(four,2)).toBeNull();
  expect(L.seatsFor({...t2,phase:'playing'},4)).toBeNull();
  const again:any=L.applyAction({...t2,phase:'seriesEnd',hostId:'host'},'a',{type:'newSeries'});expect(again.players.length).toBe(2);expect(again.hands.length).toBe(2);
 });
});

