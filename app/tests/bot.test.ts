import {describe,it,expect} from 'vitest';
import * as L from '../src/logic.js';
import {chooseMove,readVoids,scoreOption} from '../src/bot';
const t=(a:number,b:number)=>({id:`${Math.min(a,b)}-${Math.max(a,b)}`,a:Math.min(a,b),b:Math.max(a,b)});
const start=(seed=617263)=>{const s:any=L.setup(['a','b','c','d']);s.hostId='host';s.seed=seed;return L.applyAction(s,'host',{type:'start'}) as any;};
const heaviest=(v:any)=>{if(!v.legal.length)return{type:'pass'};const r=v.legal.map((o:any)=>({...o,w:v.hand.find((x:any)=>x.id===o.tile)})).sort((a:any,b:any)=>(b.w.a+b.w.b)-(a.w.a+a.w.b));return{type:'play',tile:r[0].tile,side:r[0].side};};

describe('the bot reads the table',()=>{
 it('infers from a pass that a seat holds neither open end',()=>{
  const voids=readVoids([{type:'play',seat:0,tile:'3-5',side:'right'},{type:'pass',seat:1}] as any);
  expect([...voids[1]!].sort()).toEqual([3,5]);
  expect(voids[0]!.size).toBe(0);
 });

 it('follows the same end orientation as the rules engine',()=>{
  // 3-5 opens (ends 3,5); 5-6 on the right leaves 3 and 6; a pass now means no 3, no 6.
  const voids=readVoids([{type:'play',seat:0,tile:'3-5',side:'right'},{type:'play',seat:1,tile:'5-6',side:'right'},{type:'pass',seat:2}] as any);
  expect([...voids[2]!].sort()).toEqual([3,6]);
 });

 it('goes out when it can, whatever else the position offers',()=>{
  const v:any={hand:[t(2,4)],legal:[{tile:'2-4',side:'right'}],left:1,right:2,counts:[1,4,4,4],moves:[],seat:0,chain:[t(1,2)]};
  expect(chooseMove(v)).toEqual({type:'play',tile:'2-4',side:'right'});
 });

 it('passes only when it has nothing',()=>{
  expect(chooseMove({hand:[t(0,1)],legal:[],left:3,right:5,counts:[1,4,4,4],moves:[],seat:0,chain:[]} as any)).toEqual({type:'pass'});
 });

 it('takes the block over the heavier tile when the two differ',()=>{
  // Ends are 3 and 6. Seat 1 passed on exactly those and is down to one tile.
  // 3-3 is a double, so it holds both ends where they are and shuts seat 1 out.
  // 5-6 is worth nearly twice as much but moves an end to 5 and lets it play.
  // The old heaviest-tile rule takes 5-6 every time; reading the pass beats it.
  const moves=[{type:'play',seat:3,tile:'3-6',side:'right'},{type:'play',seat:0,tile:'6-6',side:'right'},{type:'pass',seat:1}];
  const v:any={hand:[t(3,3),t(5,6)],legal:[{tile:'3-3',side:'left'},{tile:'5-6',side:'right'}],
   left:3,right:6,counts:[2,1,2,3],moves,seat:2,chain:[t(3,6),t(6,6)]};
  const m=chooseMove(v);
  expect(m.type==='play'&&m.tile).toBe('3-3');
  // and the block must be what wins it, not the weight
  expect(scoreOption(v,{tile:'3-3',side:'left'})).toBeGreaterThan(scoreOption(v,{tile:'5-6',side:'right'}));
 });

 it('does not cut its own partner out when it has a choice',()=>{
  // Partner of seat 0 is seat 2, which passed on 1 and 5. Playing to leave 1/5
  // open shuts the partner out; the alternative does not.
  const moves=[{type:'play',seat:3,tile:'1-5',side:'right'},{type:'pass',seat:2}];
  const v:any={hand:[t(1,1),t(5,3)],legal:[{tile:'1-1',side:'left'},{tile:'3-5',side:'right'}],
   left:1,right:5,counts:[2,4,4,4],moves,seat:0,chain:[t(1,5)]};
  const m=chooseMove(v);
  expect(m.type==='play'&&m.tile).toBe('3-5');
 });

 it('is deterministic — the same view always yields the same move',()=>{
  const v:any={hand:[t(3,4),t(3,6),t(0,3)],legal:[{tile:'3-4',side:'left'},{tile:'3-6',side:'left'},{tile:'0-3',side:'left'}],
   left:3,right:2,counts:[3,5,5,5],moves:[],seat:0,chain:[t(3,2)]};
  const first=chooseMove(v);
  for(let i=0;i<20;i++) expect(chooseMove(v)).toEqual(first);
  expect(scoreOption(v,{tile:'3-4',side:'left'})).toBe(scoreOption(v,{tile:'3-4',side:'left'}));
 });

 it('never offers a move the rules engine rejects, across full series',()=>{
  for(const seed of [11,404,9001]){
   let s=start(seed),steps=0;
   while(s.phase!=='seriesEnd'&&steps++<6000){
    if(s.phase==='handEnd'){s=L.applyAction(s,'host',{type:'next'}) as any;continue;}
    const p=s.players[s.turn],v:any=L.viewFor(s,p),a=chooseMove(v);
    const ok=L.validateAction(s,p,a);
    expect(ok.ok,`${JSON.stringify(a)} -> ${(ok as any).error}`).toBe(true);
    s=L.applyAction(s,p,a) as any;
   }
   expect(s.phase).toBe('seriesEnd');
  }
 });

 it('beats the heaviest-tile bot by a wide margin over forty series',()=>{
  let won=0;
  for(let n=0;n<40;n++){
   let s=start(1000+n*7919),steps=0;
   while(s.phase!=='seriesEnd'&&steps++<6000){
    if(s.phase==='handEnd'){s=L.applyAction(s,'host',{type:'next'}) as any;continue;}
    const p=s.players[s.turn],v:any=L.viewFor(s,p);
    s=L.applyAction(s,p,s.turn%2===0?chooseMove(v):heaviest(v)) as any;
   }
   if(s.result.team===0) won++;
  }
  // Measured at 73.5% over 200 series. The floor guards against a regression
  // that quietly turns the bot back into a beginner.
  expect(won/40).toBeGreaterThan(0.6);
 },30000);
});
