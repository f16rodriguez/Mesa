/**
 * Types for `bot-chatter.js` — the bots' voice, same arrangement as `logic.d.ts`.
 *
 * The module itself stays plain browser JavaScript: `scripts/build.mjs` copies it
 * straight into `public/` and the page loads it as-is, so it may not go through
 * the bundler and may not import anything. It also touches `localStorage`,
 * `AudioContext` and `document`, none of which exist in the Worker lib this
 * project type-checks against — so the declarations below describe the shape the
 * tests and the table call, and stop at the browser boundary.
 */

/** A clip: the file's name under `public/audio/bots/<bot>/`, and its caption. */
export type Line = [file: string, text: string];

export const botChatter: {
  enabled: boolean;
  /** Open bags of unplayed variants, keyed `bot/type`. */
  bags: Record<string, number[]>;
  /** The last index each bag handed out, so a repeat cannot straddle a reshuffle. */
  lastPick: Record<string, number>;

  /** Next clip for a seat's bot, or `null` when that bot has none of that type. */
  next(seat: number, type: string): Line | null;

  setEnabled(value: boolean): void;
  unlock(): Promise<void> | undefined;
  play(seat: number, type: string, force?: boolean): Promise<void>;
  /** Fed the player's view each frame; decides on its own whether anyone speaks. */
  update(view: any, role: string, crowd: any): void;
  preview(): Promise<void>;
};
