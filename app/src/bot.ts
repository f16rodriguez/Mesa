/**
 * How a bot decides. Pure and deterministic: same view in, same move out, no
 * clock and no randomness — the room persists state and re-derives bot turns
 * from it, so anything else desyncs the table.
 *
 * It is handed `viewFor(state, seatPlayer)` and nothing else, which is the same
 * redacted view a phone gets. A bot therefore cannot cheat by construction: it
 * never sees another hand, the deal or the seed.
 *
 * The previous bot sorted legal moves by pip weight and played the heaviest.
 * That is a beginner's rule, and at a table where three seats are usually bots
 * it is the first thing a Dominican player notices. What a real player uses,
 * all of it derivable from the public record:
 *
 *   - who passed, and on which two numbers — a pass is a public declaration
 *     that a seat holds neither open end. This is the most valuable read in the
 *     game and it is free;
 *   - how many of each number are still unseen;
 *   - how many tiles each seat has left;
 *   - whether a play leaves the bot itself able to move next turn.
 */
export type Tile = { id: string; a: number; b: number };
export type Option = { tile: string; side: 'left' | 'right' };
export type Move = { type: 'play'; seat: number; tile: string; side: 'left' | 'right' } | { type: 'pass'; seat: number } | { type: 'draw'; seat: number };
export type View = {
  hand: Tile[]; legal: Option[]; left: number | null; right: number | null;
  counts: number[]; moves: Move[]; seat: number; chain: { a: number; b: number }[];
  /** Uno contra uno: tiles left in the pozo, and whether this seat must draw now. */
  pozo?: number; canDraw?: boolean;
};

/** At two without a pozo most hands end trancadas and the pips left decide them: dumping weight
 *  matters far more than at four (measured: 48 % against a heaviest-first player at 0.4, 65 % at 4–8). */
const PESO2 = 5;
const pips = (t: string) => t.split('-').map(Number) as [number, number];

/**
 * Replay the hand's public moves to recover, for each seat, the numbers it has
 * declared it does not hold. A seat that passed while the ends showed 3 and 5
 * has no 3 and no 5 — for the rest of the hand, because hands only shrink.
 *
 * The end-orientation here has to match `applyAction` in logic.js exactly, or
 * every read built on it is wrong in a way nothing would catch.
 */
export function readVoids(moves: Move[], seats = 4): Set<number>[] {
  const voids = Array.from({ length: seats }, () => new Set<number>());
  let L: number | null = null, R: number | null = null;
  for (const m of moves) {
    if (m.type === 'pass') { if (L !== null) { voids[m.seat]!.add(L); voids[m.seat]!.add(R!); } continue; }
    // A draw is a new, unseen tile in that hand: what it had declared no longer holds.
    if (m.type === 'draw') { voids[m.seat]!.clear(); continue; }
    const [a, b] = pips(m.tile);
    if (L === null) { L = a; R = b; continue; }
    if (m.side === 'left') L = b === L ? a : b; else R = a === R ? b : a;
  }
  return voids;
}

/** Occurrences of each number the bot can see — its own hand plus the chain. A
 *  number appears 8 times across the 28 tiles (7 tiles, twice in its double). */
function seenCounts(hand: Tile[], chain: { a: number; b: number }[]): number[] {
  const seen = [0, 0, 0, 0, 0, 0, 0];
  for (const t of [...hand, ...chain]) { seen[t.a]!++; seen[t.b]!++; }
  return seen;
}

const weight = (tiles: { a: number; b: number }[]) => tiles.reduce((n, t) => n + t.a + t.b, 0);
const idOf = (a: number, b: number) => `${Math.min(a, b)}-${Math.max(a, b)}`;
/** Every tile showing either end is in `onTable`: nobody can play again. */
function blocks(L: number, R: number, onTable: Set<string>) {
  for (const end of [L, R]) for (let k = 0; k <= 6; k++) if (!onTable.has(idOf(end, k))) return false;
  return true;
}

/** The ends after playing `o`, following logic.js's orientation rules. */
function endsAfter(v: View, o: Option): [number, number] {
  const [a, b] = pips(o.tile);
  if (v.left === null) return [a, b];
  return o.side === 'left' ? [b === v.left ? a : b, v.right!] : [v.left, a === v.right ? b : a];
}

export function scoreOption(v: View, o: Option): number {
  const [a, b] = pips(o.tile);
  const rest = v.hand.filter(t => t.id !== o.tile);
  const [L, R] = endsAfter(v, o);
  const n = v.counts.length, voids = readVoids(v.moves, n);
  const seen = seenCounts(v.hand, v.chain);
  // Uno contra uno has no partner: -1, and every read about one is skipped.
  const partner = n === 4 ? (v.seat + 2) % 4 : -1, opponents = n === 4 ? [(v.seat + 1) % 4, (v.seat + 3) % 4] : [1 - v.seat];
  const shut = (s: number) => voids[s]!.has(L) && voids[s]!.has(R);
  let score = 0;

  // Going out ends the hand and scores it. Nothing outranks it.
  if (rest.length === 0) return 1e6;

  // Trancar. When every tile carrying either new end is already on the table,
  // this play closes the hand on the spot and the pair with fewer pips takes
  // it. Our own pips we know; the unseen rest is split by how many tiles each
  // seat still holds. A tie counts as ours: by default it goes to whoever trancó.
  if (blocks(L, R, new Set([...v.chain.map(t => idOf(t.a, t.b)), o.tile]))) {
    const mine = weight(rest), unseen = 168 - weight(v.chain) - (a + b) - mine;
    // Unseen pips split by where the unseen tiles are. At two, the pozo goes to the
    // opponent (he draws it all before passing); tiles sleeping without a pozo count for nobody.
    const tiles = 28 - v.chain.length - 1 - rest.length, pozo = v.pozo ?? 0;
    const share = (seats: number[]) => tiles ? unseen * seats.reduce((k, s) => k + v.counts[s]!, 0) / tiles : 0;
    const partnerShare = partner >= 0 ? share([partner]) : 0, theirs = share(opponents) + (tiles ? unseen * pozo / tiles : 0);
    score += mine + partnerShare <= theirs ? 200 : -200;
  }

  // Staying able to move. A bot that plays itself into passing hands the hand
  // to the other pair, and this is the most common way a hand is thrown away.
  score += rest.filter(t => t.a === L || t.b === L || t.a === R || t.b === R).length * 6;

  // Closing both ends against an opponent, worth more the fewer tiles they hold
  // — shutting out someone down to their last tile is often the whole hand.
  for (const s of opponents) if (shut(s)) score += 30 + Math.max(0, 7 - v.counts[s]!) * 6;

  // Never do that to your own partner. Cutting your partner out of the hand is
  // the cardinal sin of partnership dominoes.
  if (partner >= 0 && shut(partner)) score -= 60;

  // Softer versions of the same two reads, per end.
  for (const end of [L, R]) {
    if (partner >= 0 && voids[partner]!.has(end)) score -= 9;
    for (const s of opponents) if (voids[s]!.has(end)) score += 7;
  }

  // Weight is a liability: a tranque is scored on the pips left in your hand.
  score += (a + b) * (n === 2 && !v.pozo ? PESO2 : 0.4);

  // Doubles are the hardest tiles to place, and a double whose number is dying
  // is how you get stuck holding it. The more of that number is already seen,
  // the more urgent it is to let the double go now.
  if (a === b) score += seen[a]! * 1.2;

  return score;
}

/** Deterministic: ties break on tile id, then side, so replays are stable. */
export function chooseMove(v: View): { type: 'pass' | 'draw' } | { type: 'play'; tile: string; side: 'left' | 'right' } {
  if (!v.legal.length) return { type: v.canDraw ? 'draw' : 'pass' };
  let best = v.legal[0]!, bestScore = -Infinity;
  for (const o of [...v.legal].sort((x, y) => x.tile === y.tile ? x.side.localeCompare(y.side) : x.tile.localeCompare(y.tile))) {
    const s = scoreOption(v, o);
    if (s > bestScore) { bestScore = s; best = o; }
  }
  return { type: 'play', tile: best.tile, side: best.side };
}
