/**
 * Every bot line named in bot-chatter.js must exist as an mp3, or the voice
 * fails silently in front of players: the fetch 404s, the catch logs a warning
 * nobody reads, and the bot simply never speaks that line again.
 *
 * Cheap to check here, invisible until a game night otherwise.
 */
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const app = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = readFileSync(resolve(app, 'src/bot-chatter.js'), 'utf8');
const block = source.slice(source.indexOf('const LINES='), source.indexOf('export const botChatter'));

let missing = 0, counted = 0;
for (const [, bot, body] of block.matchAll(/(\w+):\{([\s\S]*?)\}(?=,\n|\n\};)/g)) {
  for (const [, file] of body.matchAll(/\['([\w-]+)',/g)) {
    counted++;
    const path = resolve(app, 'public/audio/bots', bot, file + '.mp3');
    if (!existsSync(path)) { console.error(`  MISSING ${bot}/${file}.mp3`); missing++; }
  }
}
if (!counted) { console.error('check-bot-lines: parsed no lines — the LINES shape changed'); process.exit(1); }
if (missing) { console.error(`\ncheck-bot-lines: ${missing} of ${counted} bot lines have no audio.`); process.exit(1); }
console.log(`bot lines OK — ${counted} clips, all present`);
