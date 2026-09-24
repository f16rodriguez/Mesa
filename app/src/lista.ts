import type {Env} from './env';
import {hash} from './accounts';
/**
 * POST /api/lista — la lista de espera de Mesa en línea. Guarda un correo, el
 * idioma en que escribirle y de qué pantalla vino; nada más (ni IP ni perfil).
 * Se usa para UN correo cuando abra el juego en línea; el detalle para la
 * política está en PRIVACIDAD-DATOS.md.
 *
 * Siempre contesta lo mismo si el correo ya estaba: la lista no le dice a nadie
 * quién más se apuntó.
 */
export const ORIGENES=['fin_serie','fin_practica'] as const;
const MAX_CUERPO=1024,POR_MINUTO=5;
const CORREO=/^[^\s@<>()[\]\\,;:"]{1,64}@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*\.[a-z]{2,24}$/;
const json=(body:unknown,status=200)=>Response.json(body,{status,headers:{'cache-control':'no-store'}});

const TABLAS=[
 'CREATE TABLE IF NOT EXISTS waitlist (email TEXT PRIMARY KEY, lang TEXT NOT NULL, source TEXT NOT NULL, created_at INTEGER NOT NULL)',
 // Mismo truco que auth_limits: una fila por IP (con hash) y minuto.
 'CREATE TABLE IF NOT EXISTS waitlist_limits (key TEXT PRIMARY KEY, count INTEGER NOT NULL, expires_at INTEGER NOT NULL)'
];
export async function ensureLista(env:Env){await env.DB.batch(TABLAS.map(s=>env.DB.prepare(s)));}

/** El correo en minúsculas y sin espacios si parece de verdad, o ''. */
export function limpiarCorreo(raw:unknown){
 if(typeof raw!=='string')return '';
 const c=raw.trim().toLowerCase();
 return c.length<=254&&CORREO.test(c)?c:'';
}

export async function listaRoute(req:Request,env:Env){
 const url=new URL(req.url);
 if(req.method!=='POST')return json({error:'Method not allowed'},405);
 if(req.headers.get('origin')!==url.origin)return json({error:'Please use Mesa on its own domain.'},403);
 if(Number(req.headers.get('content-length')||0)>MAX_CUERPO)return json({error:'Request too large'},413);
 let input:any;try{const body=await req.text();if(body.length>MAX_CUERPO)return json({error:'Request too large'},413);input=JSON.parse(body);}catch{return json({error:'Invalid request'},400);}
 if(!input||typeof input!=='object'||Array.isArray(input))return json({error:'Invalid request'},400);
 const email=limpiarCorreo(input.email);
 if(!email)return json({error:'Check your email.'},400);
 const lang=input.lang==='en'?'en':'es',source=(ORIGENES as readonly string[]).includes(input.source)?input.source:'fin_serie';
 await ensureLista(env);
 const ip=req.headers.get('cf-connecting-ip')||'local',ventana=Math.floor(Date.now()/60000),key=await hash('lista|'+ip+'|'+ventana);
 const rate=await env.DB.prepare('INSERT INTO waitlist_limits(key,count,expires_at) VALUES(?,1,?) ON CONFLICT(key) DO UPDATE SET count=count+1 RETURNING count').bind(key,Date.now()+120000).first<{count:number}>();
 if((rate?.count||0)>POR_MINUTO)return json({error:'Too many attempts. Wait a minute.'},429);
 await env.DB.batch([
  env.DB.prepare('INSERT INTO waitlist(email,lang,source,created_at) VALUES(?,?,?,?) ON CONFLICT(email) DO NOTHING').bind(email,lang,source,Date.now()),
  env.DB.prepare('DELETE FROM waitlist_limits WHERE expires_at<?').bind(Date.now())
 ]);
 return json({ok:true});
}
