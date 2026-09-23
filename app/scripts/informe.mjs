/**
 * Informe de telemetría en texto plano: últimos 7 y 30 días.
 *
 *     bun run informe            # la D1 de producción (wrangler.cloudflare.jsonc, --remote)
 *     bun run informe --local    # la D1 local de `bun run dev` (wrangler.jsonc)
 *
 * Lee la tabla `events` que llena src/telemetry.ts. Todo va en una sola
 * llamada a `wrangler d1 execute`, que es lo lento.
 */
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const app = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const local = process.argv.includes('--local');
const db = /"database_name"\s*:\s*"([^"]+)"/.exec(readFileSync(resolve(app, 'wrangler.cloudflare.jsonc'), 'utf8'))?.[1];
if (!db) { console.error('informe: no encontré database_name en wrangler.cloudflare.jsonc'); process.exit(1); }

const ahora = Date.now(), DIA = 86400000, PERIODOS = [7, 30];
const APARATOS = ['tv', 'phone', 'tablet', 'desktop'];
// Las tablas del cobro nacen con la primera cuenta; se crean aquí (si no existen) para que
// el informe no falle en una base nueva. Van primero y no se cuentan como resultados.
const CREAR = [
  `CREATE TABLE IF NOT EXISTS purchases (txn_id TEXT PRIMARY KEY, profile_id TEXT NOT NULL, price_id TEXT NOT NULL, customer_id TEXT NOT NULL DEFAULT "", total TEXT NOT NULL DEFAULT "", currency TEXT NOT NULL DEFAULT "", status TEXT NOT NULL, created_at INTEGER NOT NULL, updated_at INTEGER NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS series_sponsors (series_id TEXT PRIMARY KEY, profile_id TEXT NOT NULL, kind TEXT NOT NULL, created_at INTEGER NOT NULL)`
];
// Tres consultas por periodo, en este orden: totales, aparato de la tele, errores.
const sql = [...CREAR, ...PERIODOS.flatMap(d => {
  const desde = ahora - d * DIA;
  return [
    `SELECT COUNT(DISTINCT visitor) AS visitantes, SUM(name='portada') AS portada, SUM(name='mesa_abierta') AS mesas,
      SUM(name='telefono_entro') AS telefonos, SUM(name='espectador_entro') AS espectadores, SUM(name='practica') AS practicas,
      SUM(name='reparto') AS manos, SUM(name='reparto' AND json_extract(data,'$.rol')='practice') AS manos_practica,
      SUM(name='serie_fin') AS series, SUM(name='serie_fin' AND json_extract(data,'$.rol')='practice') AS series_practica,
      SUM(name='calidad_baja') AS calidad_baja, SUM(name='error') AS errores,
      ROUND(AVG(CASE WHEN name='fps' THEN json_extract(data,'$.fps') END),1) AS fps,
      SUM(name='bloqueo') AS bloqueos, SUM(name='cuenta_creada') AS cuentas, SUM(name='desbloquear') AS toques_desbloquear, SUM(name='pago') AS pagos_cliente,
      (SELECT COUNT(*) FROM series_sponsors WHERE kind='trial' AND created_at>=${desde}) AS series_gratis,
      (SELECT COUNT(*) FROM purchases WHERE status='completed' AND created_at>=${desde}) AS compras,
      (SELECT COUNT(*) FROM purchases WHERE status='refunded' AND updated_at>=${desde}) AS reembolsos
     FROM events WHERE ts>=${desde}`,
    `SELECT device, COUNT(*) AS n FROM events WHERE name='mesa_abierta' AND ts>=${desde} GROUP BY device`,
    `SELECT json_extract(data,'$.mensaje') AS mensaje, COUNT(*) AS n, COUNT(DISTINCT visitor) AS visitantes,
      MAX(json_extract(data,'$.archivo')||':'||json_extract(data,'$.linea')) AS donde
     FROM events WHERE name='error' AND ts>=${desde} GROUP BY mensaje ORDER BY n DESC LIMIT 10`
  ];
})].join(';\n');

const args = ['wrangler', 'd1', 'execute', db, local ? '--local' : '--remote', '--json', '--command', sql];
if (!local) args.push('-c', 'wrangler.cloudflare.jsonc');
const r = spawnSync('bunx', args, { cwd: app, encoding: 'utf8', maxBuffer: 64 << 20 });
let res;
try { res = JSON.parse(r.stdout.slice(r.stdout.indexOf('['))); } catch {}
if (r.status !== 0 || !Array.isArray(res) || res.length !== sql.split(';\n').length) {
  console.error(`informe: falló wrangler d1 execute ${db}${local ? ' --local' : ' --remote'}\n${(r.stderr || '') + (r.stdout || '')}`.trim());
  if (/no such table/.test(r.stdout + r.stderr)) console.error('\n(La tabla events nace con el primer POST a /api/t.)');
  process.exit(1);
}
const filas = i => res[i + CREAR.length]?.results ?? [];
const t = PERIODOS.map((_, p) => filas(p * 3)[0] ?? {});
const n = x => Number(x ?? 0);

const ancho = 34, col = v => String(v).padStart(10);
const linea = (etiqueta, valores) => console.log(etiqueta.padEnd(ancho) + valores.map(col).join(''));
const fecha = new Date(ahora).toISOString().slice(0, 16).replace('T', ' ');
console.log(`Mesa · telemetría · ${db} (${local ? 'local' : 'remoto'}) · ${fecha} UTC\n`);
linea('', PERIODOS.map(d => `${d} días`));
linea('Visitantes únicos', t.map(x => n(x.visitantes)));
linea('Portada vista', t.map(x => n(x.portada)));
linea('Mesas abiertas', t.map(x => n(x.mesas)));
linea('Teléfonos que entraron', t.map(x => n(x.telefonos)));
linea('Espectadores que entraron', t.map(x => n(x.espectadores)));
linea('Prácticas empezadas', t.map(x => n(x.practicas)));
linea('Manos repartidas', t.map(x => n(x.manos)));
linea('  de ellas en práctica', t.map(x => n(x.manos_practica)));
linea('Series terminadas', t.map(x => n(x.series)));
linea('  de ellas en práctica', t.map(x => n(x.series_practica)));
linea('Calidad bajada sola (calidad_baja)', t.map(x => n(x.calidad_baja)));
linea('FPS medio (muestra al minuto)', t.map(x => x.fps == null ? '—' : x.fps));
linea('Errores', t.map(x => n(x.errores)));

console.log('\nCobro');
linea('Mesas paradas por el cobro', t.map(x => n(x.bloqueos)));
linea('Cuentas creadas en la mesa', t.map(x => n(x.cuentas)));
linea('Series gratis gastadas', t.map(x => n(x.series_gratis)));
linea('Toques en Desbloquear', t.map(x => n(x.toques_desbloquear)));
linea('Pagos confirmados (cliente)', t.map(x => n(x.pagos_cliente)));
linea('Compras (Paddle)', t.map(x => n(x.compras)));
linea('Reembolsos y contracargos', t.map(x => n(x.reembolsos)));

console.log('\nAparato de la tele (mesas abiertas)');
const aparatos = PERIODOS.map((_, p) => Object.fromEntries(filas(p * 3 + 1).map(f => [f.device, n(f.n)])));
for (const a of APARATOS) linea(`  ${a}`, aparatos.map(m => {
  const total = Object.values(m).reduce((s, v) => s + v, 0);
  return total ? `${Math.round(100 * (m[a] ?? 0) / total)} % (${m[a] ?? 0})` : '—';
}));

PERIODOS.forEach((d, p) => {
  const errs = filas(p * 3 + 2);
  console.log(`\nErrores más comunes · ${d} días`);
  if (!errs.length) { console.log('  (ninguno)'); return; }
  console.log('      n  visit.  dónde                 mensaje');
  for (const e of errs) console.log(`  ${String(n(e.n)).padStart(5)}  ${String(n(e.visitantes)).padStart(6)}  ${String(e.donde ?? '').slice(0, 20).padEnd(20)}  ${String(e.mensaje ?? '').replace(/\s+/g, ' ').slice(0, 110)}`);
});
