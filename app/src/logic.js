export const meta = { game: 'Mesa', minPlayers: 1, maxPlayers: 4 };
const sum = hand => hand.reduce((n,t)=>n+t.a+t.b,0);
const fail = error => ({ok:false,error});
function options(s, seat) {
  if(s.phase!=='playing'||seat!==s.turn) return [];
  return s.hands[seat].flatMap(t=>{
    if(!s.chain.length) return (s.handNo===1 && (t.a!==6||t.b!==6)) ? [] : [{tile:t.id,side:'right'}];
    const out=[];
    if(t.a===s.left||t.b===s.left) out.push({tile:t.id,side:'left'});
    if(t.a===s.right||t.b===s.right) out.push({tile:t.id,side:'right'});
    return out;
  });
}
export function setup(players) {
  return {version:1,phase:'lobby',hostId:'host',players:Array.from({length:4},(_,i)=>players[i]||'bot-'+i),names:['Seat 1','Seat 2','Seat 3','Seat 4'],bots:[0,1,2,3].map(i=>!players[i]),seed:617263,settings:{target:200,capicua:25,tie:'blocker',allPips:false},scores:[0,0],hands:[[],[],[],[]],chain:[],left:null,right:null,turn:0,opener:0,handNo:0,passes:0,lastPlay:0,event:null,history:[],moves:[],deal:[],result:null};
}
function deal(s) {
  let seed=s.seed>>>0;
  const deck=[];
  for(let a=0;a<=6;a++) for(let b=a;b<=6;b++) deck.push({id:a+'-'+b,a,b});
  for(let i=27;i>0;i--){seed=(Math.imul(seed,1664525)+1013904223)>>>0;const j=seed%(i+1);[deck[i],deck[j]]=[deck[j],deck[i]];}
  const hands=Array.from({length:4},(_,i)=>deck.slice(i*7,i*7+7));
  const opener=s.handNo===0?hands.findIndex(h=>h.some(t=>t.id==='6-6')):s.opener;
  return {...s,seed,phase:'playing',hands,deal:hands.map(h=>h.map(t=>({...t}))),chain:[],left:null,right:null,turn:opener,opener,handNo:s.handNo+1,passes:0,lastPlay:opener,moves:[],result:null,event:{type:'deal',seat:opener}};
}
export function validateAction(s,p,a) {
  if(!s||!a||typeof a!=='object') return fail('Invalid action.');
  const seat=s.players.indexOf(p);
  if(['start','next','settings','newSeries'].includes(a.type)){
    if(p!==s.hostId) return fail('Only the table host can do that.');
    if(a.type==='start'&&s.phase!=='lobby') return fail('The hand has already started.');
    if(a.type==='next'&&s.phase!=='handEnd') return fail('Finish this hand first.');
    if(a.type==='newSeries'&&s.phase!=='seriesEnd') return fail('Finish the series first.');
    if(a.type==='settings'){
      if(s.phase!=='lobby') return fail('House rules are locked after the first deal.');
      const x=a.settings;
      if(!x||![100,200,300].includes(x.target)||![0,25,50].includes(x.capicua)||!['blocker','none'].includes(x.tie)||typeof x.allPips!=='boolean') return fail('Choose valid house rules.');
    }
    return {ok:true};
  }
  if(s.phase!=='playing') return fail('Wait for the next deal.');
  if(seat<0) return fail('Spectators cannot play.');
  if(seat!==s.turn) return fail('Wait for your turn.');
  const legal=options(s,seat);
  if(a.type==='pass') return legal.length?fail('You have a legal tile. Play it instead of passing.'):{ok:true};
  if(a.type!=='play') return fail('Choose a tile or pass.');
  return legal.some(o=>o.tile===a.tile&&o.side===a.side)?{ok:true}:fail('That tile does not fit this end.');
}
function closeHand(s, type, seat, capicua=false) {
  const pips=s.hands.map(sum), totals=[pips[0]+pips[2],pips[1]+pips[3]];
  let team=seat%2;
  if(type==='tranque') team=totals[0]===totals[1]?(s.settings.tie==='blocker'?s.lastPlay%2:null):(totals[0]<totals[1]?0:1);
  const base=team===null?0:(s.settings.allPips?totals[0]+totals[1]:totals[1-team]);
  const bonus=capicua?s.settings.capicua:0, points=base+bonus;
  const scores=[...s.scores]; if(team!==null) scores[team]+=points;
  const series=team!==null&&scores[team]>=s.settings.target;
  const result={type:capicua?'capicua':type,seat,team,base,bonus,points,pips,totals,zapato:series&&scores[1-team]===0};
  const record={handNo:s.handNo,result,deal:s.deal,moves:s.moves};
  return {...s,scores,phase:series?'seriesEnd':'handEnd',opener:type==='tranque'?s.lastPlay:seat,result,event:{type:result.type,seat},history:[...s.history,record].slice(-30)};
}
export function applyAction(state,p,a) {
  const s=JSON.parse(JSON.stringify(state));
  if(a.type==='settings') return {...s,settings:{...a.settings}};
  if(a.type==='start'||a.type==='next') return deal(s);
  if(a.type==='newSeries') return {...setup(s.players),hostId:s.hostId,names:s.names,bots:s.bots,seed:s.seed,settings:s.settings};
  const seat=s.players.indexOf(p);
  if(a.type==='pass'){
    s.passes++;s.moves.push({type:'pass',seat});s.event={type:'pass',seat};
    if(s.passes===4) return closeHand(s,'tranque',s.lastPlay);
    s.turn=(seat+1)%4;return s;
  }
  const index=s.hands[seat].findIndex(t=>t.id===a.tile),tile=s.hands[seat].splice(index,1)[0];
  const capicua=s.chain.length>0&&(tile.a===s.left||tile.b===s.left)&&(tile.a===s.right||tile.b===s.right);
  let x=tile.a,y=tile.b;
  if(!s.chain.length){s.left=x;s.right=y;s.chain.push({...tile,x,y,seat});}
  else if(a.side==='left'){
    if(y!==s.left) [x,y]=[y,x];s.left=x;s.chain.unshift({...tile,x,y,seat});
  }else{
    if(x!==s.right) [x,y]=[y,x];s.right=y;s.chain.push({...tile,x,y,seat});
  }
  s.passes=0;s.lastPlay=seat;s.event={type:'play',seat,tile:tile.id};s.moves.push({type:'play',seat,tile:tile.id,side:a.side});
  if(!s.hands[seat].length) return closeHand(s,'domino',seat,capicua);
  s.turn=(seat+1)%4;return s;
}
export function isGameOver(s) {
  return s.phase==='seriesEnd'?{over:true,winner:String(s.result.team),zapato:s.result.zapato}:{over:false};
}
export function viewFor(s,p) {
  const seat=s.players.indexOf(p),closed=s.phase==='handEnd'||s.phase==='seriesEnd';
  return {phase:s.phase,names:s.names,bots:s.bots,settings:s.settings,scores:s.scores,counts:s.hands.map(h=>h.length),chain:s.chain,left:s.left,right:s.right,turn:s.turn,opener:s.opener,handNo:s.handNo,passes:s.passes,event:s.event,result:s.result,seat,isHost:p===s.hostId,hand:seat<0?[]:s.hands[seat],legal:seat<0?[]:options(s,seat),canPass:seat===s.turn&&s.phase==='playing'&&!options(s,seat).length,moves:s.moves,revealed:closed?s.hands:null,history:s.history.map(h=>({handNo:h.handNo,result:h.result})),replay:closed?s.history[s.history.length-1]:null};
}
