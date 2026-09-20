/** Timing depends only on public turn history, never hidden hand contents. */
export function botThinkingMs(handNo:number,moveCount:number,seat:number){
 const seed=(Math.imul(handNo+1,73856093)^Math.imul(moveCount+3,19349663)^Math.imul(seat+7,83492791))>>>0;
 const ranges=[[4800,8000],[4200,7200],[3800,6500],[5000,8200]] as const;
 const range=ranges[((seat%4)+4)%4]!;
 const endgame=moveCount>=16?400:0;
 return range[0]+seed%(range[1]-range[0]+1)+endgame;
}
export function botTurnKey(handNo:number,moveCount:number,seat:number){return `${handNo}:${moveCount}:${seat}`;}
