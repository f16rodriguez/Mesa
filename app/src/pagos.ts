/**
 * El desbloqueo del anfitrión: tres series gratis por cuenta y después $9.99 una
 * sola vez, cobrado por Paddle (comerciante registrado: impuestos, reembolsos y
 * precio regional son cosa de ellos).
 *
 * Quién paga una mesa: cualquiera sentado en ella, o la tele si tiene sesión. Al
 * empezar una serie el cuarto busca, en ese orden, a alguien con Mesa
 * desbloqueada; si no hay, gasta una serie gratis del primero al que le quede. Una
 * mesa sin nadie de carne y hueso sentado (cuatro bots) no gasta nada.
 *
 * Mientras Paddle no esté configurado (faltan las variables), nada se cobra y
 * nada se bloquea. Y si la base de datos falla al comprobar, la serie va gratis:
 * un cliente que pagó nunca se queda sin jugar por culpa nuestra.
 */
import type {Env} from './env';
import {accountFor,ensureDb} from './accounts';

/** Series gratis por cuenta antes de pagar. */
export const SERIES_GRATIS=3;
export const PRECIO_BASE='$9.99';
export const pagosActivos=(env:Env)=>!!(env.PADDLE_CLIENT_TOKEN&&env.PADDLE_PRICE_ID&&env.PADDLE_WEBHOOK_SECRET);

type Candidato={profileId:string};
export type Patrocinio={profileId:string;nombre:string;tipo:'unlock'|'trial';quedan:number};

/** Lo que una cuenta tiene: si pagó y cuántas series gratis le quedan. */
export async function estadoCuenta(env:Env,profileId:string){
 await ensureDb(env);
 const e=await env.DB.prepare('SELECT trial_used,unlocked_at FROM entitlements WHERE profile_id=?').bind(profileId).first<{trial_used:number;unlocked_at:number|null}>();
 return {desbloqueada:!!e?.unlocked_at,gratisQuedan:Math.max(0,SERIES_GRATIS-(e?.trial_used??0))};
}

/**
 * Decide quién cubre `seriesId` y lo anota. Devuelve null si nadie puede.
 * Repetirla con la misma serie no gasta dos veces: la serie queda apuntada a su
 * patrocinador y la segunda llamada devuelve el mismo.
 */
export async function patrocinar(env:Env,seriesId:string,candidatos:Candidato[]):Promise<Patrocinio|null>{
 const ids=[...new Set(candidatos.map(c=>c.profileId).filter(Boolean))];
 if(!ids.length)return null;
 await ensureDb(env);
 const ya=await env.DB.prepare('SELECT s.profile_id,s.kind,p.display_name,e.trial_used FROM series_sponsors s JOIN profiles p ON p.id=s.profile_id LEFT JOIN entitlements e ON e.profile_id=s.profile_id WHERE s.series_id=?').bind(seriesId).first<any>();
 if(ya)return {profileId:ya.profile_id,nombre:ya.display_name,tipo:ya.kind,quedan:Math.max(0,SERIES_GRATIS-(ya.trial_used??0))};
 const marcas=ids.map(()=>'?').join(',');
 const filas=(await env.DB.prepare(`SELECT p.id,p.display_name,e.trial_used,e.unlocked_at FROM profiles p LEFT JOIN entitlements e ON e.profile_id=p.id WHERE p.id IN (${marcas})`).bind(...ids).all<any>()).results;
 const por=new Map(filas.map(f=>[f.id,f]));
 const orden=ids.map(id=>por.get(id)).filter(Boolean);
 const pago=orden.find(f=>f.unlocked_at);
 if(pago){
  await env.DB.prepare('INSERT OR IGNORE INTO series_sponsors(series_id,profile_id,kind,created_at) VALUES(?,?,?,?)').bind(seriesId,pago.id,'unlock',Date.now()).run();
  return {profileId:pago.id,nombre:pago.display_name,tipo:'unlock',quedan:Math.max(0,SERIES_GRATIS-(pago.trial_used??0))};
 }
 for(const f of orden){
  if((f.trial_used??0)>=SERIES_GRATIS)continue;
  await env.DB.prepare('INSERT OR IGNORE INTO entitlements(profile_id) VALUES(?)').bind(f.id).run();
  // Apuntar la serie y gastar la gratis van juntas: changes() solo es 1 si la
  // serie era nueva, así un reintento no gasta otra. El tope va en el WHERE por si
  // otra mesa gastó la última en el mismo instante.
  const [,gasto]=await env.DB.batch([
   env.DB.prepare('INSERT OR IGNORE INTO series_sponsors(series_id,profile_id,kind,created_at) VALUES(?,?,?,?)').bind(seriesId,f.id,'trial',Date.now()),
   env.DB.prepare('UPDATE entitlements SET trial_used=trial_used+1 WHERE profile_id=? AND changes()=1 AND trial_used<?').bind(f.id,SERIES_GRATIS)
  ]);
  if(gasto?.meta?.changes!==1){await env.DB.prepare('DELETE FROM series_sponsors WHERE series_id=? AND profile_id=? AND kind=?').bind(seriesId,f.id,'trial').run();continue;}
  return {profileId:f.id,nombre:f.display_name,tipo:'trial',quedan:Math.max(0,SERIES_GRATIS-(f.trial_used??0)-1)};
 }
 return null;
}

const enc=(s:string)=>new TextEncoder().encode(s);
const hex=(b:ArrayBuffer)=>Array.from(new Uint8Array(b),x=>x.toString(16).padStart(2,'0')).join('');
function iguales(a:string,b:string){if(a.length!==b.length)return false;let d=0;for(let i=0;i<a.length;i++)d|=a.charCodeAt(i)^b.charCodeAt(i);return d===0;}
/**
 * La firma de Paddle: `Paddle-Signature: ts=<segundos>;h1=<hmac>` (puede traer
 * varios h1 mientras rotan el secreto). Se firma `ts:cuerpo` con HMAC-SHA256. Un
 * aviso de hace más de 5 minutos se rechaza para que no se pueda repetir.
 */
export async function firmaPaddle(secreto:string,cabecera:string|null,cuerpo:string,ahora=Date.now()){
 if(!cabecera)return false;
 const partes=cabecera.split(';').map(p=>p.trim().split('=')),ts=partes.find(p=>p[0]==='ts')?.[1]??'',h1=partes.filter(p=>p[0]==='h1').map(p=>p[1]??'');
 if(!/^\d{1,12}$/.test(ts)||!h1.length||Math.abs(ahora/1000-Number(ts))>300)return false;
 const llave=await crypto.subtle.importKey('raw',enc(secreto),{name:'HMAC',hash:'SHA-256'},false,['sign']);
 const esperada=hex(await crypto.subtle.sign('HMAC',llave,enc(ts+':'+cuerpo)));
 return h1.some(h=>iguales(h.toLowerCase(),esperada));
}

const json=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers:{'content-type':'application/json','cache-control':'no-store','x-content-type-options':'nosniff'}});
const UUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

/**
 * Los avisos de Paddle. Solo dos cosas importan:
 *  - transaction.completed con nuestro precio → la cuenta de custom_data queda desbloqueada;
 *  - adjustment (reembolso o contracargo total, aprobado) → esa compra se anula y, si
 *    era la única, la cuenta vuelve a estar bloqueada.
 * Todo lo demás se contesta 200 y se ignora (si no, Paddle reintenta días). Un
 * fallo de la base contesta 500 para que Paddle reintente.
 */
export async function avisoPaddle(req:Request,env:Env){
 if(req.method!=='POST')return json({error:'Method not allowed'},405);
 if(!env.PADDLE_WEBHOOK_SECRET)return json({error:'Payments are not configured.'},503);
 const cuerpo=await req.text();
 if(cuerpo.length>256*1024)return json({error:'Too large'},413);
 if(!await firmaPaddle(env.PADDLE_WEBHOOK_SECRET,req.headers.get('paddle-signature'),cuerpo))return json({error:'Bad signature'},401);
 let aviso:any;try{aviso=JSON.parse(cuerpo);}catch{return json({error:'Invalid JSON'},400);}
 const tipo=String(aviso?.event_type||''),d=aviso?.data||{},ahora=Date.now();
 await ensureDb(env);
 if(tipo==='transaction.completed'){
  const perfil=String(d.custom_data?.profile_id||''),txn=String(d.id||'');
  if(!UUID.test(perfil)||!/^txn_[a-z0-9]+$/i.test(txn))return json({ok:true,ignorado:'sin perfil'});
  if(!(d.items||[]).some((i:any)=>i?.price?.id===env.PADDLE_PRICE_ID))return json({ok:true,ignorado:'otro precio'});
  if(!await env.DB.prepare('SELECT 1 FROM profiles WHERE id=?').bind(perfil).first())return json({ok:true,ignorado:'perfil desconocido'});
  const total=String(d.details?.totals?.grand_total??d.details?.totals?.total??''),moneda=String(d.currency_code||'');
  await env.DB.batch([
   env.DB.prepare('INSERT INTO purchases(txn_id,profile_id,price_id,customer_id,total,currency,status,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?,?) ON CONFLICT(txn_id) DO NOTHING').bind(txn,perfil,env.PADDLE_PRICE_ID,String(d.customer_id||''),total,moneda,'completed',ahora,ahora),
   env.DB.prepare('INSERT OR IGNORE INTO entitlements(profile_id) VALUES(?)').bind(perfil),
   env.DB.prepare("UPDATE entitlements SET unlocked_at=COALESCE(unlocked_at,?),unlock_txn=COALESCE(unlock_txn,?) WHERE profile_id=? AND EXISTS(SELECT 1 FROM purchases WHERE txn_id=? AND status='completed')").bind(ahora,txn,perfil,txn)
  ]);
  return json({ok:true});
 }
 if(tipo==='adjustment.created'||tipo==='adjustment.updated'){
  const total=d.action==='chargeback'||(d.action==='refund'&&d.type==='full');
  if(!total||d.status!=='approved')return json({ok:true,ignorado:'ajuste que no anula'});
  const txn=String(d.transaction_id||''),compra=await env.DB.prepare('SELECT profile_id FROM purchases WHERE txn_id=?').bind(txn).first<{profile_id:string}>();
  if(!compra)return json({ok:true,ignorado:'compra desconocida'});
  await env.DB.batch([
   env.DB.prepare("UPDATE purchases SET status='refunded',updated_at=? WHERE txn_id=?").bind(ahora,txn),
   env.DB.prepare("UPDATE entitlements SET unlocked_at=NULL,unlock_txn=NULL WHERE profile_id=? AND NOT EXISTS(SELECT 1 FROM purchases WHERE profile_id=? AND status='completed')").bind(compra.profile_id,compra.profile_id)
  ]);
  return json({ok:true});
 }
 return json({ok:true,ignorado:tipo});
}

/** Lo que el cliente necesita para cobrar y lo que tiene la cuenta de quien pregunta.
 *  El client token de Paddle es público por diseño; el secreto del webhook nunca sale. */
export async function configPagos(req:Request,env:Env){
 const activos=pagosActivos(env);let cuenta=null;
 if(activos){try{const p=await accountFor(req,env);if(p)cuenta=await estadoCuenta(env,p.id);}catch(err){console.error('estado de cuenta no disponible',err);}}
 return json({activos,gratis:SERIES_GRATIS,precio:PRECIO_BASE,...(activos?{clientToken:env.PADDLE_CLIENT_TOKEN,priceId:env.PADDLE_PRICE_ID,entorno:env.PADDLE_ENV==='production'?'production':'sandbox'}:{}),cuenta});
}
