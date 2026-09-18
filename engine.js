/* ===== Dominó dominicano — motor de reglas =====
   Doble-seis, 28 fichas, 4 jugadores, 2 parejas, sin pozo.
   Asientos: 0 Sur (tú), 1 Este, 2 Norte (pareja), 3 Oeste. Turno 0→1→2→3.
   Equipos: 0 = asientos 0 y 2, 1 = asientos 1 y 3.
*/
function fullSet(){ const t=[]; for(let a=0;a<=6;a++) for(let b=a;b<=6;b++) t.push([a,b]); return t; }
function pips(t){ return t[0]+t[1]; }
function handPips(h){ return h.reduce((s,t)=>s+pips(t),0); }
function teamOf(seat){ return seat % 2; }
function shuffle(arr, rng){
  for(let i=arr.length-1;i>0;i--){ const j=Math.floor(rng()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; }
  return arr;
}

const DEFAULT_RULES = {
  target: 200,          // puntos para ganar la serie
  capicua: true,        // bonificación por capicúa
  capicuaBonus: 25,
  tranqueTie: 'last',   // 'last' = gana el equipo del último en jugar | 'none' = mano sin puntos
  countAllTiles: false  // false = solo se cuentan las fichas del equipo perdedor
};

function newGame(rules, rng){
  return {
    rules: Object.assign({}, DEFAULT_RULES, rules||{}),
    rng: rng || Math.random,
    scores: [0,0],
    handNo: 0,
    starter: null,       // se resuelve en el primer reparto (quien tenga el 6|6)
    phase: 'idle',
    series: []           // historial de manos
  };
}

function deal(g){
  const tiles = shuffle(fullSet(), g.rng);
  g.hands = [tiles.slice(0,7), tiles.slice(7,14), tiles.slice(14,21), tiles.slice(21,28)];
  g.board = [];
  g.passesInRow = 0;
  g.passedOn = [new Set(), new Set(), new Set(), new Set()];
  g.lastPlayer = null;
  g.handNo += 1;
  g.phase = 'playing';
  g.result = null;
  g.log = [];

  if(g.starter === null){
    // Primera mano de la serie: sale quien tenga el doble seis, y debe salir con él.
    g.turn = g.hands.findIndex(h => h.some(t => t[0]===6 && t[1]===6));
    g.mustOpenWithDoubleSix = true;
  } else {
    g.turn = g.starter;
    g.mustOpenWithDoubleSix = false;
  }
  return g;
}

function ends(g){
  if(g.board.length === 0) return null;
  return [ g.board[0].a, g.board[g.board.length-1].b ];
}

/* Movimientos legales del asiento en turno. Devuelve [{tile, side}] con side 'L' | 'R'. */
function legalMoves(g, seat){
  const hand = g.hands[seat];
  if(g.board.length === 0){
    if(g.mustOpenWithDoubleSix) return hand.filter(t=>t[0]===6&&t[1]===6).map(t=>({tile:t, side:'R'}));
    return hand.map(t=>({tile:t, side:'R'}));
  }
  const [L,R] = ends(g);
  const out = [];
  for(const t of hand){
    if(t[0]===L || t[1]===L) out.push({tile:t, side:'L'});
    if(t[0]===R || t[1]===R) out.push({tile:t, side:'R'});
  }
  return out;
}

function sameTile(a,b){ return a[0]===b[0] && a[1]===b[1]; }

function play(g, seat, tile, side){
  if(g.phase !== 'playing') throw new Error('mano cerrada');
  if(seat !== g.turn) throw new Error('no es su turno');
  const legal = legalMoves(g, seat);
  if(!legal.some(m => sameTile(m.tile,tile) && m.side===side)) throw new Error('jugada ilegal');

  const hand = g.hands[seat];
  hand.splice(hand.findIndex(t=>sameTile(t,tile)), 1);

  let capicua = false;
  if(g.board.length === 0){
    g.board.push({a:tile[0], b:tile[1]});
    g.mustOpenWithDoubleSix = false;
  } else {
    const [L,R] = ends(g);
    // Capicúa: última ficha de la mano que cerraba por ambos extremos, con extremos distintos.
    if(hand.length === 0 && L !== R &&
       (tile[0]===L||tile[1]===L) && (tile[0]===R||tile[1]===R)) capicua = true;
    if(side === 'L'){
      g.board.unshift(tile[1]===L ? {a:tile[0], b:tile[1]} : {a:tile[1], b:tile[0]});
    } else {
      g.board.push(tile[0]===R ? {a:tile[0], b:tile[1]} : {a:tile[1], b:tile[0]});
    }
  }

  g.passesInRow = 0;
  g.lastPlayer = seat;
  g.log.push({type:'play', seat, tile, side});

  if(hand.length === 0) return closeHand(g, {kind:'domino', seat, capicua});
  g.turn = (seat + 1) % 4;
  return checkTranque(g);
}

function pass(g, seat){
  if(g.phase !== 'playing') throw new Error('mano cerrada');
  if(seat !== g.turn) throw new Error('no es su turno');
  if(legalMoves(g, seat).length > 0) throw new Error('tiene ficha, no puede pasar');
  const e = ends(g);
  if(e){ g.passedOn[seat].add(e[0]); g.passedOn[seat].add(e[1]); }
  g.passesInRow += 1;
  g.log.push({type:'pass', seat});
  g.turn = (seat + 1) % 4;
  return checkTranque(g);
}

function checkTranque(g){
  if(g.passesInRow >= 4) return closeHand(g, {kind:'tranque'});
  return g;
}

function closeHand(g, how){
  const teamPips = [
    handPips(g.hands[0]) + handPips(g.hands[2]),
    handPips(g.hands[1]) + handPips(g.hands[3])
  ];
  let winnerTeam = null, points = 0, note = null;

  if(how.kind === 'domino'){
    winnerTeam = teamOf(how.seat);
    points = g.rules.countAllTiles
      ? teamPips[0] + teamPips[1]
      : teamPips[1 - winnerTeam];
    if(how.capicua && g.rules.capicua){ points += g.rules.capicuaBonus; note = 'capicua'; }
    g.starter = how.seat;
  } else {
    if(teamPips[0] === teamPips[1]){
      if(g.rules.tranqueTie === 'last' && g.lastPlayer !== null){
        winnerTeam = teamOf(g.lastPlayer);
        points = g.rules.countAllTiles ? teamPips[0]+teamPips[1] : teamPips[1-winnerTeam];
        note = 'tie-last';
      } else { note = 'tie-none'; }
    } else {
      winnerTeam = teamPips[0] < teamPips[1] ? 0 : 1;
      points = g.rules.countAllTiles ? teamPips[0]+teamPips[1] : teamPips[1-winnerTeam];
    }
    // En tranque sale el que trancó.
    g.starter = g.lastPlayer !== null ? g.lastPlayer : g.turn;
  }

  if(winnerTeam !== null) g.scores[winnerTeam] += points;
  g.result = { kind:how.kind, seat:how.seat ?? null, winnerTeam, points, teamPips, note };
  g.series.push(g.result);
  g.phase = (g.scores[0] >= g.rules.target || g.scores[1] >= g.rules.target) ? 'gameOver' : 'handOver';
  if(g.phase === 'gameOver'){
    const champ = g.scores[0] >= g.rules.target ? 0 : 1;
    g.champion = champ;
    g.zapato = g.scores[1-champ] === 0;   // zapato / chuchazo
  }
  return g;
}

/* ===== Bot: heurística de mesa =====
   1. Bloquear: dejar en el extremo un número que un contrario ya pasó.
   2. No ahogar a la pareja: evitar dejar un número que tu pareja pasó.
   3. Botar peso cuando no hay jugada clara.
   4. Conservar el palo del que más fichas tienes.
*/
function botChoose(g, seat){
  const moves = legalMoves(g, seat);
  if(moves.length === 0) return null;
  const partner = (seat + 2) % 4;
  const opps = [(seat+1)%4, (seat+3)%4];
  const counts = {};
  for(const t of g.hands[seat]){ counts[t[0]]=(counts[t[0]]||0)+1; counts[t[1]]=(counts[t[1]]||0)+1; }

  let best = null, bestScore = -Infinity;
  for(const m of moves){
    const sim = { board: g.board.map(e=>({a:e.a,b:e.b})) };
    const t = m.tile;
    let newEnds;
    if(g.board.length === 0){ newEnds = [t[0], t[1]]; }
    else {
      const [L,R] = ends(g);
      if(m.side === 'L'){ newEnds = [ t[1]===L ? t[0] : t[1], R ]; }
      else { newEnds = [ L, t[0]===R ? t[1] : t[0] ]; }
    }
    let s = 0;
    for(const n of newEnds){
      for(const o of opps) if(g.passedOn[o].has(n)) s += 14;      // ahogar al contrario
      if(g.passedOn[partner].has(n)) s -= 16;                     // no ahogar a la pareja
      s += (counts[n] || 0) * 3;                                  // mantener mi palo abierto
    }
    if(newEnds[0] === newEnds[1]) s += 6;                         // cerrar ambos extremos al mismo número
    s += pips(t) * 0.9;                                           // botar peso
    if(t[0] === t[1]) s += 4;                                     // soltar dobles temprano
    s += g.rng() * 2;                                             // que no sea idéntico cada vez
    if(s > bestScore){ bestScore = s; best = m; }
  }
  return best;
}

if (typeof module !== 'undefined') module.exports = {
  fullSet, pips, handPips, teamOf, newGame, deal, ends, legalMoves, play, pass, botChoose, DEFAULT_RULES, sameTile
};
