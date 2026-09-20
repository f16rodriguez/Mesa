/**
 * Head to head, so "better bot" is a number and not an opinion.
 *
 * Team 0 plays the new bot, team 1 plays the old rule (heaviest legal tile).
 * Seats alternate teams, so the pairs are 0+2 against 1+3. Every series runs on
 * a fixed seed, and every action is validated before it is applied — an illegal
 * move from either side fails the run rather than being silently skipped.
 */
import * as L from '../src/logic.js';
import { chooseMove } from '../src/bot.ts';

const heaviest = v => {
  if (!v.legal.length) return { type: 'pass' };
  const r = v.legal.map(o => ({ ...o, w: v.hand.find(t => t.id === o.tile) }))
    .sort((a, b) => (b.w.a + b.w.b) - (a.w.a + a.w.b));
  return { type: 'play', tile: r[0].tile, side: r[0].side };
};

const SERIES = Number(process.argv[2] || 200);
let wins = [0, 0], hands = 0, points = [0, 0];
for (let n = 0; n < SERIES; n++) {
  let s = L.setup(['a', 'b', 'c', 'd']);
  s.hostId = 'host'; s.seed = 1000 + n * 7919;
  s = L.applyAction(s, 'host', { type: 'start' });
  let steps = 0;
  while (s.phase !== 'seriesEnd' && steps++ < 6000) {
    if (s.phase === 'handEnd') { hands++; s = L.applyAction(s, 'host', { type: 'next' }); continue; }
    const p = s.players[s.turn], v = L.viewFor(s, p);
    const a = (s.turn % 2 === 0) ? chooseMove(v) : heaviest(v);
    const ok = L.validateAction(s, p, a);
    if (!ok.ok) { console.error('ILEGAL', s.turn % 2 === 0 ? 'nuevo' : 'viejo', JSON.stringify(a), ok.error); process.exit(1); }
    s = L.applyAction(s, p, a);
  }
  if (s.phase !== 'seriesEnd') { console.error('serie sin terminar en', n); process.exit(1); }
  wins[s.result.team]++; points[0] += s.scores[0]; points[1] += s.scores[1];
}
const pct = (wins[0] / SERIES * 100).toFixed(1);
console.log(`series: ${SERIES}  manos: ${hands}`);
console.log(`nuevo (equipo 0): ${wins[0]}   viejo (equipo 1): ${wins[1]}   -> ${pct}%`);
console.log(`puntos totales   nuevo ${points[0]}   viejo ${points[1]}`);
