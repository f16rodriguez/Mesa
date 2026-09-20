import {describe,it,expect,beforeAll} from 'vitest';
// The module reads localStorage as it is defined, so it has to exist first.
beforeAll(()=>{ (globalThis as any).localStorage ??= {getItem:()=>null,setItem:()=>{}}; });
const load=async()=>(await import('../src/bot-chatter.js')).botChatter as any;

describe('bot lines never repeat before the bag is empty',()=>{
 it('plays every variant once before playing any of them twice',async()=>{
  const c=await load();
  // luis has four `think` clips; four pulls must be four different clips
  const seen=new Set<string>();
  for(let i=0;i<4;i++) seen.add(c.next(2,'think')[0]);
  expect(seen.size).toBe(4);
 });

 it('does not repeat across a reshuffle',async()=>{
  const c=await load();
  // Drain and refill many times; the seam between one bag and the next is
  // where a naive shuffle repeats, and it is the repeat a player notices.
  let previous='';
  for(let round=0;round<200;round++){
   for(let i=0;i<4;i++){
    const file=c.next(2,'think')[0];
    expect(file).not.toBe(previous);
    previous=file;
   }
  }
 });

 it('always returns the only clip when a bot has just one',async()=>{
  const c=await load();
  for(let i=0;i<10;i++) expect(c.next(0,'pass')[0]).toBe('pass');
 });

 it('returns a file and its own caption together, never a mismatched pair',async()=>{
  const c=await load();
  const pairs=new Map<string,string>();
  for(let i=0;i<60;i++){ const [file,text]=c.next(2,'play'); 
   if(pairs.has(file)) expect(pairs.get(file)).toBe(text); else pairs.set(file,text); }
  expect(pairs.size).toBe(3);
 });

 it('gives nothing for a bot and type that has no clips',async()=>{
  const c=await load();
  expect(c.next(0,'capicua')).toBeNull();
 });
});
