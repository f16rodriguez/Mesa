import {describe,it,expect}from'vitest';import{botQuickMs,botThinkingMs,botTurnKey}from'../src/bot-rhythm';
describe('unhurried bot rhythm',()=>{
 it('uses varied delays between 3.8 and 8.6 seconds',()=>{const values=new Set<number>();for(let h=1;h<8;h++)for(let m=0;m<40;m++)for(let s=0;s<4;s++){const d=botThinkingMs(h,m,s);expect(d).toBeGreaterThanOrEqual(3800);expect(d).toBeLessThanOrEqual(8600);values.add(d);}expect(values.size).toBeGreaterThan(100);});
 it('does not reset the identity of a turn when a spectator joins',()=>{expect(botTurnKey(2,11,3)).toBe(botTurnKey(2,11,3));expect(botTurnKey(2,11,3)).not.toBe(botTurnKey(2,12,0));expect(botThinkingMs(2,11,3)).toBe(botThinkingMs(2,11,3));});
 it('slaps down an only tile in 0.9 to 1.6 seconds, the same every time',()=>{const values=new Set<number>();for(let h=1;h<8;h++)for(let m=0;m<40;m++)for(let s=0;s<4;s++){const d=botQuickMs(h,m,s);expect(d).toBeGreaterThanOrEqual(900);expect(d).toBeLessThanOrEqual(1600);values.add(d);}expect(values.size).toBeGreaterThan(50);expect(botQuickMs(3,9,1)).toBe(botQuickMs(3,9,1));});
});
