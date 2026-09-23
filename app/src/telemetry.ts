import type {Env} from './env';
/**
 * POST /api/t — telemetría propia: errores del cliente y un embudo mínimo,
 * guardados en la misma D1. Sin terceros.
 *
 * Lo que NO se guarda es tan importante como lo que sí: ni IP ni User-Agent.
 * Del UA sale una clase gruesa de aparato (tv, phone, tablet, desktop) y el
 * resto se tira. El visitante es un número al azar que inventa el navegador,
 * sin lazo con el perfil. El detalle para la política: PRIVACIDAD-DATOS.md.
 *
 * El cliente (public/telemetria.js) manda lotes chicos por sendBeacon y no lee
 * la respuesta: todo lo que pasa después de validar se traga y contesta 204.
 */
export const NOMBRES=['portada','mesa_abierta','telefono_entro','espectador_entro','practica','reparto','serie_fin','error','calidad_baja','fps','bloqueo','cuenta_creada','desbloquear','pago'] as const;
const VALIDOS=new Set<string>(NOMBRES);
const MAX_CUERPO=8192,MAX_EVENTOS=20,MAX_CLAVES=8,MAX_TEXTO=300,POR_MINUTO=60,RETENCION=90*86400000;
const VISITANTE=/^[0-9a-f]{32}$/,CLAVE=/^[a-z][a-z0-9_]{0,31}$/i;
type Evento={n:string,d:Record<string,string|number>};
type Lote={v:string,e:Evento[]};
const vacia=(status:number)=>new Response(null,{status,headers:{'cache-control':'no-store'}});

const TABLAS=[
 'CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY, ts INTEGER NOT NULL, visitor TEXT NOT NULL, name TEXT NOT NULL, device TEXT NOT NULL, data TEXT NOT NULL)',
 'CREATE INDEX IF NOT EXISTS events_name_ts ON events(name,ts)',
 // Mismo truco que auth_limits: una fila por visitante y minuto.
 'CREATE TABLE IF NOT EXISTS event_limits (key TEXT PRIMARY KEY, count INTEGER NOT NULL, expires_at INTEGER NOT NULL)'
];
export async function ensureEventos(env:Env){await env.DB.batch(TABLAS.map(s=>env.DB.prepare(s)));}

/** Clase gruesa del aparato. El UA entra aquí y no sale para ningún otro lado. */
export function aparato(ua:string){
 // AFT va aparte y sin /i: son los Fire TV (AFTMM, AFTT…) y "after" no es uno.
 if(/smart-?tv|tizen|web[o0]s|netcast|hbbtv|crkey|bravia|android ?tv|google ?tv|\broku\b/i.test(ua)||/\bAFT[A-Z]/.test(ua))return 'tv';
 if(/ipad|tablet|playbook|kindle|silk\//i.test(ua)||/android/i.test(ua)&&!/mobi/i.test(ua))return 'tablet';
 if(/mobi|iphone|ipod|windows phone|blackberry|opera mini/i.test(ua))return 'phone';
 return 'desktop';
}

/** El lote si cuadra entero, o null. Estricto a propósito: el cliente es nuestro y ya limpia. */
export function validar(input:unknown):Lote|null{
 if(!input||typeof input!=='object'||Array.isArray(input))return null;
 const {v,e,...resto}=input as any;
 if(Object.keys(resto).length||typeof v!=='string'||!VISITANTE.test(v)||!Array.isArray(e)||!e.length||e.length>MAX_EVENTOS)return null;
 const eventos:Evento[]=[];
 for(const x of e){
  if(!x||typeof x!=='object'||Array.isArray(x))return null;
  const {n,t,d,...otro}=x;
  if(Object.keys(otro).length||typeof n!=='string'||!VALIDOS.has(n)||typeof t!=='number'||!Number.isFinite(t))return null;
  if(d!==undefined&&(!d||typeof d!=='object'||Array.isArray(d)))return null;
  const datos=d??{},claves=Object.keys(datos);
  if(claves.length>MAX_CLAVES)return null;
  for(const k of claves){const y=datos[k];if(!CLAVE.test(k)||(typeof y==='string'?y.length>MAX_TEXTO:!(typeof y==='number'&&Number.isFinite(y))))return null;}
  eventos.push({n,d:datos});
 }
 return {v,e:eventos};
}

/**
 * Retención: 90 días. El borrado filtra por nombre para ir por el índice
 * (name, ts) en vez de recorrer la tabla entera; si un nombre sale de NOMBRES,
 * sus filas viejas hay que borrarlas a mano.
 */
export async function limpiar(env:Env,ahora=Date.now()){await env.DB.batch([
 env.DB.prepare(`DELETE FROM events WHERE name IN (${NOMBRES.map(()=>'?').join(',')}) AND ts<?`).bind(...NOMBRES,ahora-RETENCION),
 env.DB.prepare('DELETE FROM event_limits WHERE expires_at<?').bind(ahora)
]);}

async function guardar(env:Env,lote:Lote,device:string){
 const ahora=Date.now(),ventana=Math.floor(ahora/60000),vistos=new Set<string>();
 // Un error que se repite en el mismo lote (un bucle de dibujo) cuenta una vez.
 const eventos=lote.e.filter(x=>{if(x.n!=='error')return true;const k=`${x.d.mensaje??''}\n${x.d.archivo??''}`;if(vistos.has(k))return false;vistos.add(k);return true;});
 // Tablas y contador en un solo viaje. Cuenta lo que se intentó, no lo guardado:
 // quien se pasa de 60 en un minuto no guarda nada más hasta el siguiente.
 const r=await env.DB.batch([...TABLAS.map(s=>env.DB.prepare(s)),
  env.DB.prepare('INSERT INTO event_limits(key,count,expires_at) VALUES(?,?,?) ON CONFLICT(key) DO UPDATE SET count=count+excluded.count RETURNING count').bind(lote.v+':'+ventana,eventos.length,(ventana+2)*60000)]);
 const total=Number((r[r.length-1]?.results?.[0] as {count?:number}|undefined)?.count??eventos.length);
 const caben=Math.min(eventos.length,Math.max(0,POR_MINUTO-(total-eventos.length)));
 if(caben)await env.DB.batch(eventos.slice(0,caben).map(x=>env.DB.prepare('INSERT INTO events(ts,visitor,name,device,data) VALUES(?,?,?,?,?)').bind(ahora,lote.v,x.n,device,JSON.stringify(x.d))));
 if(Math.random()<1/50)await limpiar(env,ahora);
}

export async function telemetryRoute(req:Request,env:Env):Promise<Response>{
 if(req.method!=='POST')return vacia(405);
 // sendBeacon manda Origin en un POST; si viene de otro sitio, fuera. Si no viene, se acepta.
 const origen=req.headers.get('origin');if(origen&&origen!==new URL(req.url).origin)return vacia(403);
 if(Number(req.headers.get('content-length')||0)>MAX_CUERPO)return vacia(413);
 let lote:Lote|null;
 try{const cuerpo=await req.arrayBuffer();if(cuerpo.byteLength>MAX_CUERPO)return vacia(413);lote=validar(JSON.parse(new TextDecoder().decode(cuerpo)));}catch{return vacia(400);}
 if(!lote)return vacia(400);
 try{await guardar(env,lote,aparato(req.headers.get('user-agent')||''));}catch(error){console.error('telemetría: lote perdido',error);}
 return vacia(204);
}
