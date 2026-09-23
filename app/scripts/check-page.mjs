/**
 * Load the built page in a real browser and fail on any error it throws.
 *
 * The bundler PARSES client.js; it never RUNS it. That gap shipped a blank
 * screen: `normSala` was called on line 18 and declared as a `const` on line
 * 42, which parses perfectly and throws "Cannot access before initialization"
 * the instant a browser executes it. client.js is plain JS, so tsc never looks
 * at it either. Four seconds of actually opening the page closes the hole.
 *
 * Needs a Chromium once: `bunx playwright install chromium`. Without it this
 * says so loudly and stands aside rather than pretending to have checked.
 */
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const app = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const client = resolve(app, 'dist/client');

let chromium;
try { ({ chromium } = await import('playwright')); }
catch { try { ({ chromium } = await import('@playwright/test')); } catch {} }
if (!chromium) {
  console.warn('check-page: SIN COMPROBAR — falta playwright. `bunx playwright install chromium`');
  process.exit(0);
}

const tipos = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json',
  '.webmanifest':'application/manifest+json','.mp3':'audio/mpeg','.glb':'model/gltf-binary','.webp':'image/webp'};
const server = Bun.serve({ port: 0, async fetch(req) {
  const p = new URL(req.url).pathname;
  const file = Bun.file(resolve(client, (p === '/' ? '/index.html' : p).slice(1)));
  if (!(await file.exists())) return new Response('no', { status: 404 });
  const ext = '.' + (file.name ?? '').split('.').pop();
  return new Response(file, { headers: { 'content-type': tipos[ext] ?? 'application/octet-stream' } });
}});

// Una comprobación que se cuelga no puede tumbar un despliegue: si en 90 s no
// ha terminado, lo dice y se aparta.
setTimeout(() => { console.warn('check-page: SIN COMPROBAR — no terminó en 90 s'); process.exit(0); }, 90000).unref?.();
const errores = [];
let navegador;
try {
  // MESA_CHROMIUM apunta a un Chromium concreto cuando el de playwright no
  // cuadra con la versión instalada (p. ej. en un sandbox con uno ya puesto).
  navegador = await chromium.launch({ executablePath: process.env.MESA_CHROMIUM || undefined, args: ['--use-gl=angle', '--enable-unsafe-swiftshader'] });
} catch (e) {
  console.warn('check-page: SIN COMPROBAR — no arranca Chromium. `bunx playwright install chromium`');
  server.stop(true); process.exit(0);
}
const pagina = await navegador.newPage();
pagina.on('pageerror', e => errores.push('throw: ' + e.message));
// Un 404 de un asset opcional no es un fallo de carga; un error de consola sí.
pagina.on('console', m => { const t = m.text(); if (m.type() === 'error' && !/404|favicon|ERR_CERT/.test(t)) errores.push('consola: ' + t.slice(0, 160)); });
await pagina.goto(`http://localhost:${server.port}/`, { waitUntil: 'domcontentloaded', timeout: 30000 });
await pagina.waitForTimeout(4000);
const botones = await pagina.evaluate(() => [...document.querySelectorAll('[data-action]')].map(e => e.dataset.action));
await navegador.close(); server.stop(true);

if (errores.length) { console.error('check-page: la portada lanzó errores\n  ' + errores.join('\n  ')); process.exit(1); }
// Una página que carga pero no pinta nada pasa la prueba de errores sin servir.
for (const necesario of ['host', 'practice', 'join']) {
  if (!botones.includes(necesario)) { console.error(`check-page: la portada cargó sin el botón "${necesario}"`); process.exit(1); }
}
console.log(`page OK — portada sin errores, ${botones.length} acciones`);
