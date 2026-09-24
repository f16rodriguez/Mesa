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
  return {version:1,phase:'lobby',hostId:'host',players:Array.from({length:4},(_,i)=>players[i]||'bot-'+i),names:['Seat 1','Seat 2','Seat 3','Seat 4'],bots:[0,1,2,3].map(i=>!players[i]),seed:617263,settings:{target:200,capicua:25,tie:'blocker',allPips:false,capicuaDistinct:false},scores:[0,0],hands:[[],[],[],[]],chain:[],left:null,right:null,turn:0,opener:0,handNo:0,passes:0,lastPlay:0,event:null,history:[],moves:[],deal:[],result:null};
}
/*
 * The shuffle. A table is only fair if nobody can predict or reconstruct the
 * deal, so this is ChaCha20 (RFC 8439) keyed with the room's 256-bit seed, and
 * Fisher-Yates draws each index by rejection sampling, never `% n` on a raw
 * word (that alone biases the deal). The old 32-bit LCG put the 6-6 in seat 3
 * almost four times as often as in seat 0, and a player could recover the seed
 * from their own hand. Pure and deterministic: the same seed replays the same
 * deal, which is what the tests and the saved practice game rely on.
 */
const rotl=(x,n)=>(x<<n)|(x>>>(32-n));
function chacha20(key,counter,nonce) {
  const init=[0x61707865,0x3320646e,0x79622d32,0x6b206574,...key,counter>>>0,...nonce],x=init.slice();
  const q=(a,b,c,d)=>{x[a]=(x[a]+x[b])|0;x[d]=rotl(x[d]^x[a],16);x[c]=(x[c]+x[d])|0;x[b]=rotl(x[b]^x[c],12);x[a]=(x[a]+x[b])|0;x[d]=rotl(x[d]^x[a],8);x[c]=(x[c]+x[d])|0;x[b]=rotl(x[b]^x[c],7);};
  for(let i=0;i<10;i++){q(0,4,8,12);q(1,5,9,13);q(2,6,10,14);q(3,7,11,15);q(0,5,10,15);q(1,6,11,12);q(2,7,8,13);q(3,4,9,14);}
  return x.map((v,i)=>(v+init[i])>>>0);
}
const NONCE=[0x6173656d,0x696d6f64,0x73656f6e]; // "mesadominoes" in ASCII: the dealing stream
/** 64 hex characters (32 random bytes from the room) are the key as-is; a byte
 *  array is read the same way. Anything else — a 32-bit number from a saved
 *  practice game or a test — is folded and run through one ChaCha block, so it
 *  still yields a full, well-mixed key (with only the entropy it came with). */
function seedKey(seed) {
  if(Array.isArray(seed)&&seed.length===32&&seed.every(b=>Number.isInteger(b)&&b>=0&&b<256)) seed=seed.map(b=>(b+256).toString(16).slice(1)).join('');
  if(typeof seed==='string'&&/^[0-9a-f]{64}$/i.test(seed)) return Array.from({length:8},(_,w)=>parseInt(seed.slice(w*8,w*8+8).match(/../g).reverse().join(''),16)>>>0);
  const text=String(seed),key=[0x243f6a88,0x85a308d3,0x13198a2e,0x03707344,0xa4093822,0x299f31d0,0x082efa98,0xec4e6c89];
  for(let i=0;i<text.length;i++) key[i%8]=Math.imul(key[i%8]^text.charCodeAt(i),0x01000193)>>>0;
  return chacha20(key,text.length,NONCE).slice(0,8);
}
function randomStream(seed) {
  const key=seedKey(seed);let block=[],i=16,counter=0;
  return ()=>{if(i===16){block=chacha20(key,counter++,NONCE);i=0;}return block[i++];};
}
/** Uniform in [0,n): words at or past the last multiple of n are redrawn. */
function below(next,n) {
  const limit=Math.floor(4294967296/n)*n;let u=next();
  while(u>=limit) u=next();
  return u%n;
}
/** Highest pip first, then the other end: a hand's order says nothing about the deck. */
const byPips=hand=>[...hand].sort((x,y)=>Math.max(y.a,y.b)-Math.max(x.a,x.b)||Math.min(y.a,y.b)-Math.min(x.a,x.b));
function deal(s) {
  const next=randomStream(s.seed),deck=[];
  for(let a=0;a<=6;a++) for(let b=a;b<=6;b++) deck.push({id:a+'-'+b,a,b});
  for(let i=27;i>0;i--){const j=below(next,i+1);[deck[i],deck[j]]=[deck[j],deck[i]];}
  // The next seed comes from further down the same stream: a practice game (no
  // server to hand it fresh bytes) still deals a new, unpredictable hand.
  const seed=Array.from({length:8},()=>next().toString(16).padStart(8,'0')).join('');
  const hands=Array.from({length:4},(_,i)=>byPips(deck.slice(i*7,i*7+7)));
  const opener=s.handNo===0?hands.findIndex(h=>h.some(t=>t.id==='6-6')):s.opener;
  return {...s,seed,phase:'playing',hands,deal:hands.map(h=>h.map(t=>({...t}))),chain:[],left:null,right:null,turn:opener,opener,handNo:s.handNo+1,passes:0,lastPlay:opener,moves:[],result:null,event:{type:'deal',seat:opener}};
}
/** The host, or anyone sitting at the table who is not a bot. */
const canDeal=(s,p)=>{const seat=s.players.indexOf(p);return p===s.hostId||(seat>=0&&!s.bots[seat]);};
/** Who runs the table: the TV (host) and the phone the room names as `vip` — the first
 *  person seated with a live phone, so nobody needs a remote to deal or set rules. */
const runs=(s,p)=>p===s.hostId||(!!s.vip&&p===s.vip);
export function validateAction(s,p,a) {
  if(!s||!a||typeof a!=='object') return fail('Invalid action.');
  const seat=s.players.indexOf(p);
  if(['start','next','settings','newSeries'].includes(a.type)){
    // Opening the table and its house rules belong to the host. Dealing the
    // next hand does not: a TV that went to sleep must not freeze four people.
    if(!runs(s,p)&&!(['next','newSeries'].includes(a.type)&&canDeal(s,p))) return fail('Only the table host can do that.');
    if(a.type==='start'&&s.phase!=='lobby') return fail('The hand has already started.');
    if(a.type==='next'&&s.phase!=='handEnd') return fail('Finish this hand first.');
    if(a.type==='newSeries'&&s.phase!=='seriesEnd') return fail('Finish the series first.');
    if(a.type==='settings'){
      if(s.phase!=='lobby') return fail('House rules are locked after the first deal.');
      const x=a.settings;
      if(!x||typeof x!=='object'||![100,200,300].includes(x.target)||![0,25,50].includes(x.capicua)||!['blocker','none'].includes(x.tie)||typeof x.allPips!=='boolean'||!['boolean','undefined'].includes(typeof x.capicuaDistinct)) return fail('Choose valid house rules.');
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
/**
 * Who leads the next hand. After a dominó, the one who went out. After a
 * tranque, the pair that WON it: the blocker if it was his pair, otherwise the
 * winning pair's player with fewer pips (the one next in turn on a tie). A tied
 * tranque that nobody takes leaves the lead where it was this hand.
 */
function nextOpener(s, type, seat, team, pips) {
  if(type!=='tranque') return seat;
  if(team===null) return s.opener;
  if(seat%2===team) return seat;
  const a=(seat+1)%4, b=(seat+3)%4;
  return pips[b]<pips[a]?b:a;
}
function closeHand(s, type, seat, capicua=false) {
  const pips=s.hands.map(sum), totals=[pips[0]+pips[2],pips[1]+pips[3]];
  let team=seat%2;
  if(type==='tranque') team=totals[0]===totals[1]?(s.settings.tie==='blocker'?s.lastPlay%2:null):(totals[0]<totals[1]?0:1);
  const base=team===null?0:(s.settings.allPips?totals[0]+totals[1]:totals[1-team]);
  const bonus=capicua?s.settings.capicua:0, points=base+bonus;
  // 'capicua' is what cues the dramatic cut; with the bonus off it is a plain dominó.
  const scores=[...s.scores]; if(team!==null) scores[team]+=points;
  const series=team!==null&&scores[team]>=s.settings.target;
  const result={type:bonus>0?'capicua':type,seat,team,base,bonus,points,pips,totals,zapato:series&&scores[1-team]===0};
  const record={handNo:s.handNo,result,deal:s.deal,moves:s.moves};
  return {...s,scores,phase:series?'seriesEnd':'handEnd',opener:nextOpener(s,type,seat,team,pips),result,event:{type:result.type,seat},history:[...s.history,record].slice(-30)};
}
export function applyAction(state,p,a) {
  const s=JSON.parse(JSON.stringify(state));
  // Field by field: whatever else a client packs into `settings` never reaches
  // the state, the storage or the other phones. An older client that does not
  // know capicuaDistinct leaves it as it was.
  if(a.type==='settings'){const x=a.settings;return {...s,settings:{target:x.target,capicua:x.capicua,tie:x.tie,allPips:x.allPips,capicuaDistinct:typeof x.capicuaDistinct==='boolean'?x.capicuaDistinct:s.settings.capicuaDistinct===true}};}
  if(a.type==='start'||a.type==='next') return deal(s);
  if(a.type==='newSeries') return {...setup(s.players),hostId:s.hostId,names:s.names,bots:s.bots,seed:s.seed,settings:s.settings};
  const seat=s.players.indexOf(p);
  if(a.type==='pass'){
    s.passes++;s.moves.push({type:'pass',seat});s.event={type:'pass',seat};
    if(s.passes===4) return closeHand(s,'tranque',s.lastPlay);
    s.turn=(seat+1)%4;return s;
  }
  const index=s.hands[seat].findIndex(t=>t.id===a.tile),tile=s.hands[seat].splice(index,1)[0];
  // Capicúa: the last tile fits both ends. Some houses also want the two ends
  // to differ (closing on a 3 at both ends does not count): capicuaDistinct.
  const capicua=s.chain.length>0&&(tile.a===s.left||tile.b===s.left)&&(tile.a===s.right||tile.b===s.right)&&!(s.settings.capicuaDistinct&&s.left===s.right);
  let x=tile.a,y=tile.b;
  if(!s.chain.length){s.left=x;s.right=y;s.chain.push({...tile,x,y,seat});}
  else if(a.side==='left'){
    if(y!==s.left) [x,y]=[y,x];s.left=x;s.chain.unshift({...tile,x,y,seat});
  }else{
    if(x!==s.right) [x,y]=[y,x];s.right=y;s.chain.push({...tile,x,y,seat});
  }
  s.passes=0;s.lastPlay=seat;s.event={type:'play',seat,tile:tile.id};s.moves.push({type:'play',seat,tile:tile.id,side:a.side});
  if(!s.hands[seat].length) return closeHand(s,'domino',seat,capicua);
  // Trancado: no tile left in any hand fits either end. Close it now instead
  // of making four people press "paso" in turn; whoever just played trancó.
  if(!s.hands.some(h=>h.some(t=>t.a===s.left||t.b===s.left||t.a===s.right||t.b===s.right))) return closeHand(s,'tranque',seat);
  s.turn=(seat+1)%4;return s;
}
export function isGameOver(s) {
  return s.phase==='seriesEnd'?{over:true,winner:String(s.result.team),zapato:s.result.zapato}:{over:false};
}
export function viewFor(s,p) {
  const seat=s.players.indexOf(p),closed=s.phase==='handEnd'||s.phase==='seriesEnd';
  return {phase:s.phase,names:s.names,bots:s.bots,settings:s.settings,scores:s.scores,counts:s.hands.map(h=>h.length),chain:s.chain,left:s.left,right:s.right,turn:s.turn,opener:s.opener,handNo:s.handNo,passes:s.passes,event:s.event,result:s.result,seat,isHost:p===s.hostId,isVip:!!s.vip&&p===s.vip,canDeal:canDeal(s,p),hand:seat<0?[]:byPips(s.hands[seat]),legal:seat<0?[]:options(s,seat),canPass:seat===s.turn&&s.phase==='playing'&&!options(s,seat).length,moves:s.moves,revealed:closed?s.hands.map(byPips):null,history:s.history.map(h=>({handNo:h.handNo,result:h.result})),replay:closed?s.history[s.history.length-1]:null};
}
