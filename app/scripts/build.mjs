/**
 * Produce the two things the deploy consumes:
 *
 *   dist/worker/index.js  — the bundled Worker (entry + room + logic)
 *   dist/client/**        — the static files, served before the Worker runs
 *
 * The deploy discovers the entry itself and rewrites `wrangler.jsonc` from
 * trusted metadata, so these PATHS are the contract — not this repo's config.
 * `cloudflare:workers` stays external: it is a runtime module, not a package.
 */

import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const app = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(app, "dist");

await mkdir(dist, { recursive: true });
// Output directories can be mounted in a development workspace. Remove files
// recursively without unlinking mount points.
async function cleanFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.nfs')) continue;
    const path = resolve(dir, entry.name);
    if (entry.isDirectory()) await cleanFiles(path);
    else await rm(path, { force: true });
  }
}
await cleanFiles(dist);

const result = await Bun.build({
  entrypoints: [resolve(app, "src/worker.ts")],
  outdir: resolve(dist, "worker"),
  naming: "index.js",
  target: "browser",
  format: "esm",
  // Keep the runtime module unresolved; bundling it would break the DO class.
  external: ["cloudflare:workers"],
  // Readable stack traces in Workers Logs are worth more than a few saved KB for
  // a game this size.
  minify: false,
  sourcemap: "none",
});

if (!result.success) {
  for (const log of result.logs) console.error(log);
  throw new Error("worker bundle failed");
}

await cp(resolve(app, "src/logic.js"), resolve(app, "public/rules.js"));
const qr = await Bun.build({entrypoints:[resolve(app,'scripts/qr-entry.js')],outdir:resolve(app,'public'),naming:'qr.js',target:'browser',format:'esm',minify:true});
if (!qr.success) throw new Error('QR build failed');
const scene = await Bun.build({ entrypoints:[resolve(app,'src/scene.js')], outdir:resolve(app,'public'), naming:'scene.js', target:'browser', format:'esm', minify:true });
if (!scene.success) { console.error(scene.logs); throw new Error('Scene build failed'); }
// El MISMO bot que juega en el servidor, empaquetado para el navegador: la
// práctica offline jugaba contra la regla vieja de la ficha más pesada, así
// que se entrenaba uno contra un rival que ya no existe en la mesa de verdad.
const bot = await Bun.build({entrypoints:[resolve(app,'src/bot.ts')],outdir:resolve(app,'public'),naming:'bot.js',target:'browser',format:'esm',minify:true});
if(!bot.success){console.error(bot.logs);throw new Error('Bot build failed');}
const rhythm = await Bun.build({entrypoints:[resolve(app,'src/bot-rhythm.ts')],outdir:resolve(app,'public'),naming:'bot-rhythm.js',target:'browser',format:'esm',minify:true});
if(!rhythm.success)throw new Error('Bot timing build failed');
await cp(resolve(app,'src/bot-chatter.js'),resolve(app,'public/bot-chatter.js'));
await cp(resolve(app,'src/ambiente.js'),resolve(app,'public/ambiente.js'));
// La música: lo que haya en public/audio/musica entra solo a la lista. Un
// servidor estático no puede listar carpetas, así que la lista se escribe aquí.
{const dir=resolve(app,'public/audio/musica');await mkdir(dir,{recursive:true});
 const canciones=(await readdir(dir)).filter(f=>/\.(mp3|m4a|ogg|wav)$/i.test(f)).sort();
 await Bun.write(resolve(dir,'lista.json'),JSON.stringify(canciones));console.log(`música: ${canciones.length} canción(es)`);}
await cp(resolve(app,'src/proximity-voice.js'),resolve(app,'public/proximity-voice.js'));
const voice=await Bun.build({entrypoints:[resolve(app,'scripts/voice-entry.js')],outdir:resolve(app,'public'),naming:'voice-sdk.js',target:'browser',format:'esm',minify:true});
if(!voice.success)throw new Error('Voice client build failed');
await cp(resolve(app, "public"), resolve(dist, "client"), { recursive: true });

console.log("built dist/worker/index.js + dist/client/");
