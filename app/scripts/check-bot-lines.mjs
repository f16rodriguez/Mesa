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
// Una tabla por idioma: español en public/audio/bots/<bot>/, inglés en <bot>/en/.
const tabla = nombre => { const i = source.indexOf(`const ${nombre}=`); return i < 0 ? '' : source.slice(i, source.indexOf('\n};', i) + 3); };

let missing = 0, counted = 0;
for (const [nombre, sub] of [['LINES_ES', ''], ['LINES_EN', 'en']]) {
  const block = tabla(nombre);
  if (!block) { console.error(`check-bot-lines: no encontré ${nombre} en bot-chatter.js`); process.exit(1); }
  for (const [, bot, body] of block.matchAll(/(\w+):\{([\s\S]*?)\}(?=,\n|\n\};)/g)) {
    for (const [, file] of body.matchAll(/\['([\w-]+)',/g)) {
      counted++;
      const path = resolve(app, 'public/audio/bots', bot, sub, file + '.mp3');
      if (!existsSync(path)) { console.error(`  MISSING ${bot}/${sub ? sub + '/' : ''}${file}.mp3`); missing++; }
    }
  }
}
// Los pregones de la calle (src/ambiente.js): cada uno con su mp3.
const amb = readFileSync(resolve(app, 'src/ambiente.js'), 'utf8'), lista = /const PREGONES=\[([^\]]*)\]/.exec(amb);
if (!lista) { console.error('check-bot-lines: no encontré PREGONES en ambiente.js'); process.exit(1); }
for (const [, n] of lista[1].matchAll(/'([\w-]+)'/g)) { counted++; if (!existsSync(resolve(app, 'public/audio/calle', `pregon-${n}.mp3`))) { console.error(`  MISSING calle/pregon-${n}.mp3`); missing++; } }
if (!counted) { console.error('check-bot-lines: parsed no lines — the LINES shape changed'); process.exit(1); }
if (missing) { console.error(`\ncheck-bot-lines: ${missing} of ${counted} bot lines have no audio.`); process.exit(1); }
console.log(`bot lines OK — ${counted} clips, all present`);
