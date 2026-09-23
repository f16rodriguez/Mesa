/**
 * Telemetría de Mesa: errores del cliente y un embudo mínimo, sin terceros.
 * Todo va a POST /api/t (src/telemetry.ts) y termina en nuestra D1. Qué se
 * guarda, por qué y cuánto tiempo: PRIVACIDAD-DATOS.md.
 *
 * Nunca lanza. No hace nada fuera de http(s) ni sin fetch. Con Do Not Track o
 * Global Privacy Control solo salen errores, con un visitante que no se guarda.
 * Importarlo ya captura window 'error' y 'unhandledrejection' (máximo 10 por
 * carga, sin repetir el mismo). Junta eventos y los manda por sendBeacon cada
 * ~10 s, al esconderse la página y en pagehide.
 *
 * ── Cómo se conecta en client.js (lo que falta hacer allá) ────────────────
 *
 *  1. Arriba, con los demás imports:
 *       import {telemetria} from './telemetria.js';
 *
 *  2. Justo después de la línea de Estado que lee `q` (room=normSala(…);role=…):
 *       telemetria.iniciar({rol:()=>role});
 *     Va una función porque `role` cambia sin recargar (host, player,
 *     spectator, practice). Cada evento lleva el rol del momento.
 *
 *  3. home(), al final:
 *       telemetria.evento('portada');
 *
 *  4. createRoom(), después de `role='host';`:
 *       telemetria.evento('mesa_abierta');
 *     (Solo aquí: una tele que recarga directo a ?room=…&role=host es la misma mesa.)
 *
 *  5. submit de 'join-form', antes de connect(name):
 *       telemetria.evento(role==='spectator'?'espectador_entro':'telefono_entro');
 *
 *  6. startPractice():  telemetria.evento('practica',{nivel});
 *     seguirPractica(): telemetria.evento('practica',{nivel,sigue:1});
 *
 *  7. receive(), dentro de `if(v.handNo!==lastHand&&v.phase==='playing'){…}`:
 *       if(role==='host'||role==='practice')telemetria.evento('reparto',{mano:v.handNo});
 *     Solo la tele o la práctica: si no, cada teléfono contaría la misma mano.
 *
 *  8. receive(), antes de `if(v.phase==='seriesEnd')loadProfile();`:
 *       if(v.phase==='seriesEnd'&&antes&&antes.phase!=='seriesEnd'&&(role==='host'||role==='practice'))
 *        telemetria.evento('serie_fin',{manos:v.handNo,a:v.scores[0],b:v.scores[1],zapato:v.result?.zapato?1:0});
 *     (`antes` exige haber visto el cambio en vivo: recargar en el cartel final no cuenta otra serie.)
 *
 *  9. El listener de 'mesa:calidad' (la escena lo dispara cuando baja sola a 'low'):
 *       addEventListener('mesa:calidad',e=>{almacen.set('mesa-calidad',e.detail);
 *        if(e.detail==='low')telemetria.evento('calidad_baja',{fps:window.mesaDiagnostics?.fps??0});});
 *
 * 10. ensureWorld(), en el .then(w=>{world=w;…}) una muestra al minuto:
 *       setTimeout(()=>{const d=window.mesaDiagnostics;if(d&&role!=='player')telemetria.evento('fps',{fps:d.fps,calidad:d.quality,llamadas:d.drawCalls});},60000);
 *     y en su .catch(e=>{console.error(e);…}), que se traga el error:
 *       telemetria.error(e,'escena');
 *
 * sw.js ya lleva '/telemetria.js' en FILES, así el import no tumba la mesa sin internet.
 */
const NOMBRES=new Set(['portada','mesa_abierta','telefono_entro','espectador_entro','practica','reparto','serie_fin','error','calidad_baja','fps']);
const CLAVE=/^[a-z][a-z0-9_]{0,31}$/i,MAX_ERRORES=10,POR_LOTE=20,MAX_COLA=100,CADA=10000,MAX_BYTES=7800;
const activo=(()=>{try{return typeof window!=='undefined'&&typeof fetch==='function'&&/^https?:$/.test(location.protocol);}catch{return false;}})();
const noRastrear=(()=>{try{return navigator.doNotTrack==='1'||window.doNotTrack==='1'||!!navigator.globalPrivacyControl;}catch{return false;}})();
let rol='',idVisitante='',cola=[],timer=null,errores=0;const vistos=new Set();

const hex=()=>{try{return Array.from(crypto.getRandomValues(new Uint8Array(16)),n=>n.toString(16).padStart(2,'0')).join('');}catch{let s='';while(s.length<32)s+=Math.floor(Math.random()*16).toString(16);return s;}};
// Con DNT/GPC el visitante vive solo en memoria: sirve para el límite del servidor y se va con la página.
function visitante(){if(idVisitante)return idVisitante;let v='';if(!noRastrear){try{v=localStorage.getItem('mesa-visitante')||'';}catch{}}
 if(!/^[0-9a-f]{32}$/.test(v)){v=hex();if(!noRastrear){try{localStorage.setItem('mesa-visitante',v);}catch{}}}return idVisitante=v;}
function rolActual(){try{return String((typeof rol==='function'?rol():rol)||'').slice(0,20);}catch{return '';}}
function pagina(){try{const q=new URLSearchParams(location.search);return q.has('room')?'mesa':q.has('practice')?'practica':location.pathname==='/'?'portada':location.pathname.slice(0,40);}catch{return '';}}
const base=u=>String(u||'').split(/[?#]/)[0].split('/').pop().slice(0,80);
const bytes=s=>{try{return new TextEncoder().encode(s).length;}catch{return s.length*3;}};
// Lo mismo que valida el servidor: 8 claves, textos de 300, números finitos. Un lote malo se pierde entero.
function limpiar(datos){const d={};let n=0;if(!datos||typeof datos!=='object')return d;
 for(const [k,v] of Object.entries(datos)){if(n>=8)break;if(!CLAVE.test(k))continue;
  if(typeof v==='string')d[k]=v.slice(0,300);else if(typeof v==='number'&&Number.isFinite(v))d[k]=v;else if(typeof v==='boolean')d[k]=v?1:0;else continue;n++;}
 return d;}

function mandar(cuerpo){
 // text/plain: el beacon sale sin preflight en todos los navegadores; el servidor lo lee como JSON igual.
 try{if(navigator.sendBeacon?.('/api/t',new Blob([cuerpo],{type:'text/plain;charset=UTF-8'})))return;}catch{}
 try{fetch('/api/t',{method:'POST',body:cuerpo,keepalive:true,headers:{'content-type':'text/plain;charset=UTF-8'}}).catch(()=>{});}catch{}}
function enviar(){try{clearTimeout(timer);timer=null;if(!activo||!cola.length)return;const v=visitante();
 while(cola.length){const lote=[];let cuerpo='';
  while(cola.length&&lote.length<POR_LOTE){const prueba=JSON.stringify({v,e:[...lote,cola[0]]});
   if(bytes(prueba)>MAX_BYTES){if(!lote.length)cola.shift();break;}lote.push(cola.shift());cuerpo=prueba;}
  if(lote.length)mandar(cuerpo);}}catch{cola=[];}}
function poner(n,datos){const d=limpiar(datos);if(!('rol' in d)&&Object.keys(d).length<8){const r=rolActual();if(r)d.rol=r;}
 if(cola.length>=MAX_COLA)return;cola.push({n,t:Date.now(),d});
 if(cola.length>=POR_LOTE)enviar();else if(!timer)timer=setTimeout(enviar,CADA);}

function evento(nombre,datos){try{if(!activo||!NOMBRES.has(nombre)||noRastrear&&nombre!=='error')return;
 if(nombre==='error'){if(errores>=MAX_ERRORES)return;errores++;}poner(nombre,datos);}catch{}}

// La pila sin dominio, ruta ni query (?room=… es el código de la mesa): solo archivo:línea:columna.
function pilaCorta(pila,mensaje){if(typeof pila!=='string')return '';const l=pila.split('\n').map(x=>x.trim()).filter(Boolean);if(l[0]&&mensaje&&l[0].includes(mensaje))l.shift();
 return l.map(x=>x.replace(/(?:blob:)?(?:https?|file):\/\/[^\s)]*\//g,'').replace(/\?[^\s):]*/g,'')).join(' | ').slice(0,300);}
function primerMarco(pila){const m=/([^\/\s()@]+\.m?js)(?:\?[^:\s)]*)?:(\d+):(\d+)/.exec(String(pila||''));return m?{archivo:m[1],linea:+m[2],columna:+m[3]}:{};}
function reportar(err,{archivo,linea,columna,tipo}={}){try{if(!activo||errores>=MAX_ERRORES)return;
 const mensaje=String((err&&typeof err==='object'&&'message' in err?err.message:err)??'').slice(0,300)||'(sin mensaje)',pila=err&&typeof err==='object'?err.stack:'',marco=archivo?{}:primerMarco(pila);
 const d={mensaje,archivo:base(archivo||marco.archivo),linea:Number(linea||marco.linea)||0,columna:Number(columna||marco.columna)||0,pila:pilaCorta(pila,mensaje),rol:rolActual(),pagina:pagina(),tipo:String(tipo||'capturado').slice(0,20)};
 // Mismo criterio que el servidor: mensaje y archivo. Un bucle de dibujo no se come el tope de 10.
 const k=d.mensaje+'|'+d.archivo;if(vistos.has(k))return;vistos.add(k);evento('error',d);}catch{}}

if(activo)try{
 addEventListener('error',e=>{try{if(e&&(e.error!==undefined||e.message))reportar(e.error??e.message,{archivo:e.filename,linea:e.lineno,columna:e.colno,tipo:'error'});}catch{}});
 addEventListener('unhandledrejection',e=>reportar(e?.reason,{tipo:'promesa'}));
 document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')enviar();});
 addEventListener('pagehide',enviar);
}catch{}

export const telemetria={
 /** Dice quién es esta pantalla. `rol` puede ser un texto o una función que lo devuelva al momento. */
 iniciar(opciones){try{rol=opciones?.rol??'';}catch{}},
 /** Un paso del embudo. `datos`: objeto plano, hasta 8 claves, textos de 300, números. */
 evento,
 /** Un error que el código atrapó (y por eso window 'error' no ve). `donde` queda como tipo. */
 error(err,donde){reportar(err,{tipo:donde});},
 /** Manda ya lo que haya en cola. */
 enviar
};
