/**
 * Desbloquear (o volver a bloquear) una cuenta a mano: para probadores, regalos o
 * soporte cuando alguien pagó y algo falló. Toca la base de producción.
 *
 *   bun run scripts/desbloquear.mjs <usuario>            desbloquea
 *   bun run scripts/desbloquear.mjs <usuario> --quitar   vuelve a bloquear (no toca compras)
 *   bun run scripts/desbloquear.mjs <usuario> --local    contra la base de `wrangler dev`
 */
import {execFileSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const app=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const args=process.argv.slice(2),usuario=(args.find(a=>!a.startsWith('--'))||'').toLowerCase();
if(!/^[a-z0-9_]{3,20}$/.test(usuario)){console.error('Uso: bun run scripts/desbloquear.mjs <usuario> [--quitar] [--local]');process.exit(1);}
const base=readFileSync(resolve(app,'wrangler.cloudflare.jsonc'),'utf8').match(/"database_name"\s*:\s*"([^"]+)"/)?.[1];
if(!base){console.error('No encuentro database_name en wrangler.cloudflare.jsonc');process.exit(1);}
const perfil=`(SELECT id FROM profiles WHERE username='${usuario}')`;
const sql=args.includes('--quitar')
 ?`UPDATE entitlements SET unlocked_at=NULL,unlock_txn=NULL WHERE profile_id=${perfil};`
 :`INSERT OR IGNORE INTO entitlements(profile_id) SELECT id FROM profiles WHERE username='${usuario}'; UPDATE entitlements SET unlocked_at=COALESCE(unlocked_at,${Date.now()}),unlock_txn=COALESCE(unlock_txn,'manual') WHERE profile_id=${perfil};`;
const donde=args.includes('--local')?'--local':'--remote';
execFileSync('bunx',['wrangler','d1','execute',base,donde,'-c','wrangler.cloudflare.jsonc','--command',sql+` SELECT p.username,e.trial_used,e.unlocked_at,e.unlock_txn FROM profiles p LEFT JOIN entitlements e ON e.profile_id=p.id WHERE p.username='${usuario}';`],{cwd:app,stdio:'inherit'});
