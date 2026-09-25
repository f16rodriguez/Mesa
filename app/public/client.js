import * as rules from './rules.js';
import QRCode from './qr.js';
import {botThinkingMs,botQuickMs} from './bot-rhythm.js';
import {botChatter} from './bot-chatter.js';
import {ambiente,bocina} from './ambiente.js';
import {chooseMove} from './bot.js';
import {proximityVoice} from './proximity-voice.js';
import {t,idioma,ponerIdioma,LECCIONES,traducirError} from './textos.js';
import {sonidos,vibrar,VIBRA} from './sonidos.js';
import {telemetria} from './telemetria.js';
import {personaje,repartoAlAzar,repartoValido} from './personajes.js';
// El mismo reloj de pensar que usa el servidor: la voz sabe cuánto le queda al bot.
botChatter.pensar=botThinkingMs;

/* ── Utilidades ───────────────────────────────────────────────────────────── */
const $=s=>document.querySelector(s),app=$('#app'),modal=$('#modal');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// localStorage puede no existir (Safari con cookies bloqueadas, navegadores dentro de apps): nunca debe tumbar la página.
const almacen={get(k,d=null){try{const v=localStorage.getItem(k);return v===null?d:v;}catch{return d;}},set(k,v){try{localStorage.setItem(k,v);}catch{}},del(k){try{localStorage.removeItem(k);}catch{}},json(k,d){try{const v=JSON.parse(localStorage.getItem(k)||'null');return v??d;}catch{return d;}}};
const paths={screen:'M3 4h18v12H3z M8 21h8 M12 16v5',phone:'M7 2h10v20H7z M11 18h2',people:'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M18 8a3 3 0 0 1 0 6 M22 21v-2a4 4 0 0 0-3-4',settings:'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M12 2v3 M12 19v3 M2 12h3 M19 12h3 M5 5l2 2 M17 17l2 2 M5 19l2-2 M17 7l2-2',book:'M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1z M12 5v15',arrow:'M4 12h16 M14 6l6 6-6 6',lock:'M6 10h12v11H6z M8 10V6a4 4 0 0 1 8 0v4',copy:'M8 8h13v13H8z M16 8V3H3v13h5',expand:'M8 3H3v5 M16 3h5v5 M3 16v5h5 M21 16v5h-5',user:'M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M4 21v-3a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v3',camera:'M3 7h4l2-3h6l2 3h4v14H3z M12 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8',chat:'M3 3h18v14H9l-6 4z M7 8h10 M7 12h7',sound:'M11 4 5 9H2v6h3l6 5z M15 8a6 6 0 0 1 0 8 M18 4a11 11 0 0 1 0 16',exit:'M15 3h5v18h-5 M10 17l5-5-5-5 M15 12H3'};
const icon=n=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[n]||paths.arrow}"/></svg>`;
const pipPositions=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];
const half=n=>`<span class="half">${Array.from({length:9},(_,i)=>`<i class="pip ${pipPositions[n]?.includes(i)?'':'blank'}"></i>`).join('')}</span>`;
const tile=(a,b)=>`<span class="tile" role="img" aria-label="${a}–${b}">${half(a)}${half(b)}<i class="clavo"></i></span>`;
const button=(label,action,type='',ico='')=>`<button class="g-button ${type}" data-action="${action}">${ico?icon(ico):''}${label}</button>`;
/* Quién se sienta a la mesa: la tele escoge cuatro de los diez al abrir (así ya los tiene cargados
  cuando crea la sala) y la sala manda los suyos en view.cast. */
const repartoLocal=(r=>r?repartoValido(r.split(',')):repartoAlAzar())(new URLSearchParams(location.search).get('reparto'));
const reparto=()=>repartoValido(view?.cast||(practice?practice.cast:repartoLocal));
const botDe=i=>personaje(reparto()[i])?.nombre||t('bot'+i);
const corto=n=>String(n||'').replace(/^(Don|Doña|Tío|Tía)\s+/i,'').split(/\s+/)[0];
const nombreDe=i=>view?.bots?.[i]&&view.phase==='lobby'?botDe(i):view?.names?.[i]||'';
/** "Ana, Beto y Cleo" / "Ana, Beto and Cleo". */
const lista=xs=>xs.length<2?xs.join(''):xs.slice(0,-1).join(', ')+(idioma()==='en'?' and ':' y ')+xs[xs.length-1];
/** Quién se para y quién entra al empezar la próxima serie (lo calcula el cuarto: rotacion en room.ts). */
function rotaTexto(){const r=mesaInfo?.rota;if(!r?.entran?.length||view?.phase!=='seriesEnd')return '';const salen=r.salen.map(i=>corto(nombreDe(i)));
 return `<p class="rota">${salen.length?(salen.length===1?t('seParaUno',{nombres:esc(lista(salen))}):t('seParan',{nombres:esc(lista(salen))}))+' ':''}${r.entran.length===1?t('entraUno',{nombres:esc(lista(r.entran))}):t('entran',{nombres:esc(lista(r.entran))})}</p>`;}
/** La fila, en la tele: abajo, en chiquito, mientras haya alguien esperando. */
function filaTV(){const f=mesaInfo?.fila||[];if(!f.length||practice)return '';return `<span class="fila-tv"><b>${t('enLaFilaEtq')}</b> ${f.slice(0,4).map(esc).join(' · ')}${f.length>4?` +${f.length-4}`:''}</span>`;}
/** Uno contra uno: dos sillas, y cada "pareja" es una sola persona. */
const dos=()=>view?.names?.length===2;
const parejaDe=team=>dos()?esc(corto(nombreDe(team))):`${esc(corto(nombreDe(team)))} ${idioma()==='en'?'&amp;':'y'} ${esc(corto(nombreDe(team+2)))}`;
/** 2 contra 2 o 1 contra 1: en el lobby de la tele, en el teléfono que manda y en la práctica. */
const modoMesa=(n,attr='data-modo')=>`<div class="modo-mesa" role="group" aria-label="${t('modoMesa')}">${[4,2].map(k=>`<button class="${n===k?'elegido':''}" ${attr}="${k}" aria-pressed="${n===k}">${k===4?t('dosContraDos'):t('unoContraUno')}</button>`).join('')}</div>`;
const esTelefono=matchMedia('(pointer:coarse)').matches&&Math.max(innerWidth,innerHeight)<950;
// Los navegadores de las teles (Samsung, LG, Fire TV, Chromecast, Sony, Hisense…) arrancan livianos.
const esTele=/SMART-TV|SmartTV|Tizen|Web0S|webOS|NetCast|AFT[A-Z]|CrKey|BRAVIA|Android TV|GoogleTV|HbbTV|VIDAA|Roku/i.test(navigator.userAgent);

/* ── Estado ───────────────────────────────────────────────────────────────── */
let page='home',view=null,room='',role='host',ws=null,practice=null,selected=null,lesson=0,connected=false,botTimer=null,toastTimer=null,lastEvent='',lastHand=0,world=null,worldPromise=null,profile=null,chatOpen=false,crowd={count:0,chat:[],viewers:[],muted:[],featured:false},lastBubble='',cameraIndex=0,lastMode='',authMode='login';
let sound=almacen.get('mesa-sound')!=='off',ambientOn=almacen.get('mesa-ambience')!=='off',music=null,musicMuted=false,pendiente=false,pendienteTimer=null,wakeLock=null,vozDisponible=false,turnoVisto='',ultimoMensaje=0,finVisto={k:'',t:0},revelado=null,movsVistos='';
const conexion={gen:0,timer:null,intentos:0,nombre:''};
// El desbloqueo: lo que dice el cuarto (mesaInfo) y lo que tiene mi cuenta (pagosCfg.cuenta).
let mesaInfo=null,pagosCfg=null,precioLocal='',bloqueoVisto='';
// Lo que el cuarto dice de mí (si espero silla) y los plazos del fin de mano, en reloj local.
let yoInfo=null,finPlazo=null,sillaElegida=null,tocaTimer=null;
// La tele rehace su HTML en cada jugada: esto recuerda qué ya entró, para no repetir la animación.
const visto={fin:'',turno:'',tantos:''};
const muted=new Set(almacen.json('mesa-muted',[]));let crowdMuted=almacen.get('mesa-crowd-muted')==='yes';
const q=new URLSearchParams(location.search);room=normSala(q.get('room')||'');role=q.get('role')||'player';
telemetria.iniciar({rol:()=>role});

/* ── Sonido ───────────────────────────────────────────────────────────────── */
sonidos.activo=sound;
/* Radio del colmado: baraja lo que haya en /audio/musica (lista.json la escribe el build),
   bajito, y se agacha cuando habla alguien. Solo en la tele. */
const radio={lista:null,audio:null,i:0,base:.16,on:almacen.get('mesa-radio')!=='off',timer:null,cargando:false,
 async cargar(){if(this.lista||this.cargando)return this.lista;this.cargando=true;this.lista=await fetch('/audio/musica/lista.json').then(r=>r.ok?r.json():[]).catch(()=>[]);this.cargando=false;for(let k=this.lista.length-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[this.lista[k],this.lista[j]]=[this.lista[j],this.lista[k]];}return this.lista;},
 async start(entrando=false){if(!this.on||role==='player'||music||(this.audio&&!this.audio.paused))return;if(esTelefono&&page==='home'&&!entrando)return;await this.cargar();
  // Sin canciones de verdad en public/audio/musica, suena la bachata sintetizada de la bocina del colmado.
  if(!this.lista?.length){const c=sonidos.abrir();if(c)c.resume().then(()=>{if(this.on&&!music&&role!=='player')bocina.encender(c);}).catch(()=>{});return;}if(this.audio&&this.audio.paused&&this.audio.currentTime>0&&!this.audio.ended){this.audio.play().catch(()=>{});return;}this.siguiente();},
 siguiente(){clearTimeout(this.timer);const f=this.lista[this.i++%this.lista.length],a=new Audio('/audio/musica/'+encodeURIComponent(f));this.audio?.pause();this.audio=a;a.volume=this.base;a.play().catch(()=>{});a.onended=()=>{this.timer=setTimeout(()=>{if(this.on&&this.audio===a)this.siguiente();},3000+Math.random()*9000);};},
 duck(abajo){if(this.audio)this.audio.volume=abajo?this.base*.35:this.base;bocina.bajar(abajo);},
 stop(){clearTimeout(this.timer);this.audio?.pause();bocina.apagar();},
 set(v){this.on=v;almacen.set('mesa-radio',v?'on':'off');if(v)this.start();else this.stop();}};
addEventListener('mesa:botvoice',e=>radio.duck(!!e.detail?.active));
// Un vecino que pasa saluda a la mesa (transeuntes.js): lo dice la tele, no los mandos.
addEventListener('mesa:saludo',e=>{if(role!=='player'&&page==='room')botChatter.saludar(e.detail);});
const ambience={play(){const c=sonidos.abrir();if(!c)return Promise.resolve();return c.resume().then(()=>ambiente.start(c));},pause(){ambiente.stop();}};
/* `entrando`: el toque que abre la práctica o la mesa todavía cae en la portada. En el teléfono la
   portada no suena (ahí es un mando), pero la práctica que se abre sí. */
function unlockSound(entrando=false){const c=sonidos.abrir();if(c&&!botChatter.context)botChatter.context=c;botChatter.unlock();if(ambientOn&&role!=='player'&&(entrando||page!=='home'||!esTelefono))ambience.play().catch(()=>{});radio.start(entrando);chipSonido();}
window.mesaAudio=()=>({ctx:sonidos.ctx?.state??'sin abrir',ambiente:ambiente.on,bocina:bocina.on});
// La primera tecla o toque en cualquier parte desbloquea el audio (una tele recargada directo a su mesa no tiene otro gesto).
addEventListener('pointerdown',()=>{if(sonidos.suspendido)unlockSound();},{capture:true});
addEventListener('keydown',()=>{if(sonidos.suspendido)unlockSound();},{capture:true});
function chipSonido(){const hace=role!=='player'&&sound&&page==='room'&&sonidos.suspendido;let el=$('#chip-sonido');if(hace&&!el){el=document.createElement('button');el.id='chip-sonido';el.className='chip-sonido';el.innerHTML=`${icon('sound')}${t('tocaSonido')}`;document.body.appendChild(el);}if(!hace)el?.remove();}
// El sonido de la ficha va cuando la ficha AterRIZA en la tele, no cuando llega el mensaje.
addEventListener('mesa:aterriza',e=>{if(role==='player')return;if(e.detail?.revela)sonidos.revelar();else if(e.detail?.golpe)sonidos.golpe();else sonidos.ficha();});

/* ── Código de mesa ───────────────────────────────────────────────────────── */
/* El código se dice en voz alta y se teclea en un teléfono: sin I ni O (se leen como 1 y 0).
   Veinticuatro letras en cuatro posiciones son 331.776 mesas posibles. */
const ALFABETO='ABCDEFGHJKLMNPQRSTUVWXYZ';
function nuevoCodigo(){let c='';while(c.length<4)for(const n of crypto.getRandomValues(new Uint8Array(8))){if(n>=240)continue;c+=ALFABETO[n%24];if(c.length===4)break;}return c;}
// Declaración de función, no const: se llama arriba, al cargar el módulo.
function normSala(r){return /^[a-zA-Z]{4}$/.test(r)?r.toUpperCase():r;}

/* ── Práctica ─────────────────────────────────────────────────────────────── */
/* Tres niveles. El "ruido" es la probabilidad de que el bot, ESE turno, suelte la ficha más
   pesada en vez de pensar. Duro es el mismo bot del servidor. */
const NIVELES={facil:{ruido:1},normal:{ruido:.35},duro:{ruido:0}};
let nivel=NIVELES[almacen.get('mesa-nivel')]?almacen.get('mesa-nivel'):'normal';
const masPesada=v=>{const r=v.legal.map(o=>({...o,w:v.hand.find(x=>x.id===o.tile)})).sort((a,b)=>(b.w.a+b.w.b)-(a.w.a+a.w.b));return {type:'play',tile:r[0].tile,side:r[0].side};};
function jugadaBot(v){if(!v.legal.length)return {type:v.canDraw?'draw':'pass'};return Math.random()<NIVELES[nivel].ruido?masPesada(v):chooseMove(v);}
function practicaGuardada(){const p=almacen.json('mesa-practice',null);return p&&p.phase&&p.phase!=='lobby'?p:null;}
let modoPractica=almacen.get('mesa-modo-practica')==='2'?2:4;
function startPractice(){disconnect();role='practice';room='';view=null;lastHand=0;lastEvent='';crowd={count:0,chat:[],viewers:[],muted:[],featured:false};history.pushState({},'','?practice=1');page='room';practice=rules.setup(['local'],modoPractica);practice.hostId='local';practice.cast=repartoLocal.slice();practice.names=[profile?.name||t('tu'),...Array.from({length:modoPractica-1},(_,k)=>personaje(practice.cast[k+1]).nombre)];practice.seed=crypto.getRandomValues(new Uint32Array(1))[0];telemetria.evento('practica',{nivel});action({type:'start'});}
function seguirPractica(){const p=practicaGuardada();if(!p){startPractice();return;}telemetria.evento('practica',{nivel,sigue:1});disconnect();practice=p;role='practice';room='';view=null;lastHand=p.handNo;page='room';history.pushState({},'','?practice=1');receive(rules.viewFor(practice,'local'));scheduleBot();}
function scheduleBot(){clearTimeout(botTimer);if(!practice||page!=='room')return;
 if(practice.phase!=='playing'||practice.turn===0)return;
 const v0=rules.viewFor(practice,practice.players[practice.turn]),pasa=!v0.legal.length,unica=new Set(v0.legal.map(o=>o.tile)).size===1;
 // Un pase obligado no se piensa (un segundo y ya), robar tampoco, y una sola ficha posible se juega de una.
 const n=practice.moves.length,demora=v0.canDraw?750:pasa?1100:Math.max(n===0?4200:0,unica?botQuickMs(practice.handNo,n,practice.turn):botThinkingMs(practice.handNo,n,practice.turn));
 botChatter.botHasta=performance.now()+demora;
 botTimer=setTimeout(()=>{if(!practice||practice.phase!=='playing'||page!=='room')return;const id=practice.players[practice.turn],v=rules.viewFor(practice,id);practice=rules.applyAction(practice,id,jugadaBot(v));almacen.set('mesa-practice',JSON.stringify(practice));receive(rules.viewFor(practice,'local'));scheduleBot();},demora);}

/* ── Conexión ─────────────────────────────────────────────────────────────── */
function token(){const key='mesa-seat-'+room+'-'+role;let x=almacen.get(key);if(!x){x=Array.from(crypto.getRandomValues(new Uint8Array(32)),n=>n.toString(16).padStart(2,'0')).join('');almacen.set(key,x);}return x;}
function cerrarSocket(){conexion.gen++;clearTimeout(conexion.timer);if(ws){ws.onclose=null;ws.onmessage=null;try{ws.close();}catch{}ws=null;}}
function disconnect(){proximityVoice.disconnect();clearTimeout(botTimer);cerrarSocket();connected=false;liberarWakeLock();}
function createRoom(){disconnect();practice=null;view=null;crowd={count:0,chat:[],viewers:[],muted:[],featured:false};room=nuevoCodigo();role='host';telemetria.evento('mesa_abierta');history.pushState({},'',`?room=${room}&role=host`);connect();}
function connect(name=conexion.nombre){
 page='room';conexion.nombre=name;cerrarSocket();
 if(role==='player')hideWorld();else ensureWorld('game');
 if(!view)app.innerHTML=`<div class="center-screen"><div class="join-screen"><div class="eyebrow">MESA</div><h1>${t('conectando')}</h1><p>${t('conectandoMesa')}</p></div></div>`;
 const gen=conexion.gen,s=new WebSocket(`${location.protocol==='https:'?'wss':'ws'}://${location.host}/ws/${encodeURIComponent(room)}`);ws=s;
 s.onopen=()=>{if(gen!==conexion.gen)return;ultimoMensaje=Date.now();s.send(JSON.stringify({type:'join',role,token:token(),...(role==='host'?{cast:repartoLocal}:{}),name:name||profile?.name||almacen.get('mesa-name','')}));pedirWakeLock();};
 s.onmessage=e=>{if(gen!==conexion.gen)return;ultimoMensaje=Date.now();if(e.data==='__pong')return;let m;try{m=JSON.parse(e.data);}catch{return;}
  if(m.type==='error'){soltarPendiente();const e=traducirError(m.error);toast(e);if(!view)joinScreen(e);return;}
  if(m.type==='state'){const antes=connected;connected=true;conexion.intentos=0;soltarPendiente();crowd=m.crowd||crowd;mesaInfo=m.mesa||null;yoInfo=m.yo||null;{const f=m.mesa?.fin,a=performance.now();finPlazo=f?{espera:a+f.espera,auto:f.auto!=null?a+f.auto:null,listos:f.listos||[]}:null;}botChatter.botHasta=m.mesa?.botMs!=null?performance.now()+m.mesa.botMs:0;receive(m.view,m.presence);if(!antes)marcarConexion();}};
 s.onclose=()=>{if(gen!==conexion.gen)return;connected=false;marcarConexion();reconectar();};
 s.onerror=()=>{};
}
function reconectar(){clearTimeout(conexion.timer);if(page!=='room'||!room||practice)return;const n=conexion.intentos++;
 if(n>=6){app.innerHTML=`<div class="center-screen"><div class="join-screen"><div class="eyebrow">MESA</div><h1>${t('sinConexion')}</h1><p>${t('conectandoMesa')}</p><button class="g-button primary full" data-action="reintentar">${t('reintentar')}</button></div></div>`;view=null;return;}
 const espera=Math.min(4000,500*2**n)*(.8+Math.random()*.4);conexion.timer=setTimeout(()=>{if(page==='room')connect();},espera);}
// Pulso: un ping cada 4 s. Si en 12 s no llegó nada, la conexión está muerta aunque el navegador
// no se haya enterado (pasa cuando un iPhone se despierta): se cierra y se reconecta ya.
setInterval(()=>{if(ws?.readyState===1&&!document.hidden){try{ws.send('__ping');}catch{}if(ultimoMensaje&&Date.now()-ultimoMensaje>12000){cerrarSocket();connected=false;marcarConexion();reconectar();}}},4000);
setInterval(()=>{if(ws?.readyState===1&&!document.hidden)wire({type:'heartbeat'},true);},5000);
function marcarConexion(){for(const el of document.querySelectorAll('.connection')){el.textContent=practice?t('sinPresion'):connected?t('conectado'):t('reconectando');el.classList.toggle('off',!connected&&!practice);}}
function wire(msg,silencioso=false){if(ws?.readyState===1){ws.send(JSON.stringify(msg));return true;}if(!silencioso)toast(t('esperaReconexion'));return false;}
function soltarPendiente(){pendiente=false;clearTimeout(pendienteTimer);document.body.classList.remove('pendiente');}
// Un doble toque no manda dos veces: la segunda volvía como "espera tu turno" justo después de jugar.
function action(a){unlockSound();
 if(practice){const check=rules.validateAction(practice,'local',a);if(!check.ok){vibrar(VIBRA.error);return toast(traducirError(check.error));}practice=rules.applyAction(practice,'local',a);if(a.type==='newSeries')practice=rules.applyAction(practice,'local',{type:'start'});almacen.set('mesa-practice',JSON.stringify(practice));receive(rules.viewFor(practice,'local'));scheduleBot();return;}
 if(pendiente)return;if(!wire({type:'action',action:a}))return;pendiente=true;document.body.classList.add('pendiente');clearTimeout(pendienteTimer);pendienteTimer=setTimeout(soltarPendiente,4000);}
async function pedirWakeLock(){try{if('wakeLock' in navigator&&!wakeLock&&!document.hidden){wakeLock=await navigator.wakeLock.request('screen');wakeLock.addEventListener?.('release',()=>{wakeLock=null;});}}catch{}}
function liberarWakeLock(){try{wakeLock?.release();}catch{}wakeLock=null;}
fetch('/api/voice-config').then(r=>r.ok?r.json():{}).then(c=>{vozDisponible=!!c.available;}).catch(()=>{});

/* ── Mundo 3D ─────────────────────────────────────────────────────────────── */
/* La escena es un módulo grande (~840 KB). Si la descarga se corta (un wifi flojo, Safari que corta un
   módulo con poca memoria, un despliegue a medias), Safari dice "Importing a module script failed" y
   recuerda el fallo para esa dirección: se reintenta sola, cada vez con otra dirección. */
let escenaFallo=false;
function importarEscena(intento=0){return import(`/scene.js?v=noche1${intento?'&r='+intento:''}`).catch(e=>{if(intento>=3)throw e;return new Promise(r=>setTimeout(r,1200*(intento+1))).then(()=>importarEscena(intento+1));});}
async function ensureWorld(mode='game'){
 document.body.classList.remove('phone-mode');let container=$('#world');if(!container){container=document.createElement('div');container.id='world';document.body.prepend(container);}
 if(!worldPromise)worldPromise=importarEscena().then(m=>m.createWorld(container,{cast:repartoLocal,onProgress:(_,f)=>{const el=$('#scene-loading');if(el){const n=Math.round(f*4);el.textContent=f>=1?t('listo'):n?t('sentados',{n}):t('abriendo');el.classList.toggle('ready',f===1);}}})).then(w=>{world=w;world.setMode(lastMode||mode);const cal=almacen.get('mesa-calidad')||(esTele?'low':'');if(cal)world.quality(cal);
  // Una muestra de cómo corre la escena en esta tele, al minuto.
  setTimeout(()=>{const d=window.mesaDiagnostics;if(d&&role!=='player')telemetria.evento('fps',{fps:d.fps,calidad:d.quality,llamadas:d.drawCalls});},60000);world.update(page==='home'?null:view,page==='home'?0:crowd.count);return w;}).catch(e=>{console.error(e);telemetria.error(e,'escena');escenaFallo=true;$('#scene-loading')?.remove();container.innerHTML=`<div class="loading-error"><p>${t('escenaNoCargo')}</p><button class="g-button primary" data-action="recargar">${t('reintentar')}</button><small>${esc(e.message)}</small></div>`;});
 world?.resume?.();
 if(lastMode!==mode){lastMode=mode;cameraIndex=0;world?.setMode(mode);}if(world)world.update(page==='home'?null:view,page==='home'?0:crowd.count);
}
addEventListener('mesa:calidad',e=>{almacen.set('mesa-calidad',e.detail);if(e.detail!=='high')telemetria.evento('calidad_baja',{fps:window.mesaDiagnostics?.fps??0,nivel:e.detail});});
// De mando, el teléfono no dibuja la mesa: la tele ya lo hace, y así no se calienta ni gasta batería.
function hideWorld(){document.body.classList.add('phone-mode');world?.pause?.();ambience.pause();radio.stop();}

/* ── Portada ──────────────────────────────────────────────────────────────── */
const brand=()=>`<button class="game-brand" data-action="home" aria-label="Mesa"><img src="/marca/mesa-logo-horizontal-notag-transparent.svg" alt="Mesa" width="1330" height="346"></button>`;
/* El idioma a mano, en pantalla (también sigue en Ajustes): ES · EN, con el que está puesto en negrita. */
const botonIdioma=()=>`<button class="g-button idioma-rapido" data-action="idioma" aria-label="${t('idioma')}" title="${t('idioma')}"><span class="${idioma()==='es'?'puesto':''}">ES</span><span class="sep">·</span><span class="${idioma()==='en'?'puesto':''}">EN</span></button>`;
function cambiarIdioma(l){ponerIdioma(l);const u=new URL(location.href);u.searchParams.delete('lang');location.replace(u);}   // un ?lang= en la dirección mandaba sobre lo elegido y el cambio no pegaba
function tools(){return `<div class="game-tools">${botonIdioma()}${button('<span class="tool-label">'+(profile?esc(profile.name):t('miPerfil'))+'</span>','profile','','user')}${button('<span class="tool-label">'+t('ajustes')+'</span>','settings','','settings')}${esTelefono?'':button('','fullscreen','','expand')}</div>`;}
function home(){disconnect();page='home';view=null;practice=null;revelado=null;etiquetas();
 if(esTelefono)hideWorld();else{dormirMundo();precargarMundo();}
 const sigue=practicaGuardada();
 app.innerHTML=`<div class="game-shell portada"><header class="game-top"><div class="game-top-left"></div>${tools()}</header>
  <main class="title-screen"><h1 class="logo-titulo" aria-label="Mesa. Phones up. Tiles down.">${logoTitulo()}</h1>
  <div class="title-actions">${esTelefono?button(t('entrarCodigo'),'join','primary','phone'):button(t('abrirMesa'),'host','primary','screen')}${sigue?button(t('seguirPractica'),'continuar','','people'):''}${button(t('practica'),'practice','','people')}${esTelefono?button(t('abrirMesa'),'host','','screen'):button(t('entrarCodigo'),'join','','phone')}</div>
  <div class="title-secondary"><button data-action="school">${t('escuelita')}</button></div>${proximo()}</main>
  <footer class="game-bottom">${legales()}<button class="credito-estudio" data-action="creditos" aria-label="${t('unJuegoDe')}"><img src="/marca/three-thirteen-horizontal-light-on-dark.svg" alt="${t('unJuegoDe')}"></button></footer></div>`;telemetria.evento('portada');}
// El logo de la portada se arma solo una vez por sesión: la ficha cae, sube la palabra, sale la
// sombra salsa y aparece el lema. Si el splash del estudio está delante, espera a que se vaya; y no
// se precarga, porque un SVG animado en <img> arranca su reloj en cuanto se carga.
function logoTitulo(){const html=document.documentElement;let ya=true;try{ya=!!sessionStorage.getItem('mesa-logo');}catch{}
 const anima=!ya&&!html.classList.contains('reduced')&&!matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(anima)try{sessionStorage.setItem('mesa-logo','1');}catch{}
 const src=v=>`/marca/mesa-logo-${v}-${anima?'animado':'transparent'}.svg`,
  espera=anima&&html.classList.contains('con-splash'),a=v=>espera?`data-src="${src(v)}"`:`src="${src(v)}"`;
 return `<img class="logo-ancho" ${a('horizontal')} alt="" width="1340" height="424"><img class="logo-alto" ${a('stacked')} alt="" width="960" height="632">`;}
function soltarLogo(){for(const i of document.querySelectorAll('.logo-titulo img[data-src]')){i.src=i.dataset.src;i.removeAttribute('data-src');}}
// La portada ya no enseña la mesa, pero en la tele se va cargando detrás, quieta y sin sonido.
function precargarMundo(){if(worldPromise)return;setTimeout(()=>{if(page!=='home'||worldPromise)return;ensureWorld('attract');dormirMundo();worldPromise?.then(()=>{if(page!=='room')dormirMundo();});},1200);}
const dormirMundo=()=>{document.body.classList.add('phone-mode');world?.pause?.();};

const legales=()=>{const l=idioma()==='en'?'?lang=en':'';return `<nav class="legales"><a href="/preguntas.html${l}">${t('preguntas')}</a><a href="/precios.html${l}">${t('precios')}</a><a href="/legal/terminos.html${l}">${t('terminos')}</a><a href="/legal/privacidad.html${l}">${t('privacidad')}</a></nav>`;};

/* ── Recibir estado ───────────────────────────────────────────────────────── */
function receive(v,presence=[]){
 const antes=view;
 if(page==='room'){botChatter.update(v,role,crowd);if(room&&!practice&&vozDisponible)proximityVoice.session({room,role,token:token(),seat:v.seat,crowd});}
 const key=`${v.handNo}-${v.moves.length}-${v.phase}-${v.turn}-${v.scores.join(',')}-${v.names.join('|')}-${v.bots.join('')}-${JSON.stringify(v.settings)}-${presence.join('')}-${v.isHost}-${JSON.stringify({...mesaInfo,botMs:0,fin:mesaInfo?.fin?{listos:mesaInfo.fin.listos}:null})}-${JSON.stringify(pagosCfg?.cuenta||null)}-${JSON.stringify(yoInfo)}-${v.isVip}`,changed=key!==lastEvent;
 view=v;view.presence=presence;if(selected&&!v.legal.some(o=>o.tile===selected))selected=null;
 // Sonidos de la mesa (en la tele). La ficha suena al aterrizar (evento de la escena); aquí va lo demás.
 const mv=`${v.handNo}:${v.moves.length}`;
 if(mv!==movsVistos){const u=v.moves[v.moves.length-1];if(movsVistos&&u?.type==='pass'&&role!=='player')sonidos.toque();movsVistos=mv;}
 if(v.handNo!==lastHand&&v.phase==='playing'){lastHand=v.handNo;if(role!=='player')sonidos.barajar();if(role==='host'||role==='practice')telemetria.evento('reparto',{mano:v.handNo});}
 if(role==='host'&&mesaInfo?.bloqueo&&mesaInfo.bloqueo!==bloqueoVisto)telemetria.evento('bloqueo',{motivo:mesaInfo.bloqueo});bloqueoVisto=mesaInfo?.bloqueo||'';
 if(role!=='player'&&antes&&v.phase==='lobby'&&v.bots.filter(b=>!b).length>antes.bots.filter(b=>!b).length)sonidos.llegada();
 // En el teléfono: cuando pasa a ser tu turno, vibra, suena y la pantalla lo dice en grande.
 if(v.seat>=0&&v.phase==='playing'){const k=`${v.handNo}:${v.moves.length}`;if(v.turn===v.seat&&turnoVisto!==k&&(!antes||antes.turn!==v.seat||antes.handNo!==v.handNo)){turnoVisto=k;vibrar(VIBRA.turno);if(role==='player')sonidos.turno();document.body.classList.remove('te-toca');void document.body.offsetWidth;document.body.classList.add('te-toca');
  // La clase se quita al terminar: si se queda, cada vez que el teléfono se redibuja el "¡Te toca!" vuelve a salir.
  clearTimeout(tocaTimer);tocaTimer=setTimeout(()=>document.body.classList.remove('te-toca'),1400);}}
 if(changed){lastEvent=key;}
 if(page==='room'){if(changed||!$('#room-root'))renderRoom();else{renderCrowd();world?.update(view,crowd.count);}}
 if(v.phase==='seriesEnd'&&antes&&antes.phase!=='seriesEnd'&&(role==='host'||role==='practice'))telemetria.evento('serie_fin',{manos:v.handNo,a:v.scores[0],b:v.scores[1],zapato:v.result?.zapato?1:0});
 if(v.phase==='seriesEnd')loadProfile();
}

/* ── La tele ──────────────────────────────────────────────────────────────── */
function espera(){const r=view?.result;if(!r||!['handEnd','seriesEnd'].includes(view.phase))return 0;const k=view.handNo+':'+view.phase;if(finVisto.k!==k)finVisto={k,t:performance.now()};const e=['domino','capicua'].includes(r.type)?3.1:r.type==='tranque'?2.2:0;return Math.max(0,e-(performance.now()-finVisto.t)/1000);}
// El marcador no se adelanta al golpe: mientras dura el corte de cámara muestra lo de antes.
function marcador(){const falta=espera(),r=view.result,s=[...view.scores];if(falta>0&&r&&r.team!=null){s[r.team]-=r.points;setTimeout(()=>{if(page==='room')renderRoom();},falta*1000+60);}
 const meta=view.settings.target,pct=i=>Math.min(100,Math.round(s[i]/meta*100));
 const antes=visto.tantos.split(',');visto.tantos=s.join(',');
 return `<div class="pizarra">${[0,1].map(i=>`<div class="equipo pareja-${i?'b':'a'} ${view.phase==='playing'&&view.turn%2===i?'toca':''}"><span class="quienes">${parejaDe(i)}</span><b class="tanto ${antes[i]!==undefined&&antes[i]!==''&&antes[i]!==String(s[i])?'cambio':''}">${s[i]}</b><i class="barra"><i style="width:${pct(i)}%"></i></i></div>`).join(`<span class="meta">${t('aDoscientos',{n:meta})}</span>`)}</div>`;}
function turnoTexto(){if(view.phase!=='playing')return '';const i=view.turn;if(i===view.seat)return `<b>${t('teToca')}</b>`;return `${t('leToca',{nombre:`<b>${esc(nombreDe(i))}</b>`})}${view.bots[i]?` <span class="piensa">${t('pensando')}</span>`:''}`;}
const inviteUrl=(watch=false)=>`${location.origin}/?room=${room}&role=${watch?'spectator':'player'}`;
function lobbyPanel(){const llenos=view.bots.filter(b=>!b).length,sillas=view.names.length;return `<aside class="cartel">${avisoPago()}<div class="eyebrow">${t('mandaleCodigo')}</div><h2>${t('arrimaSilla')}</h2><div class="cartel-cuerpo"><div id="qr" class="qr" aria-label="QR"></div><div><div class="table-code">${esc(room)}</div><p>${t('escaneaTelefono')}</p><button class="text-link" data-action="copy">${icon('copy')} ${t('copiarEnlace')}</button></div></div>
 ${modoMesa(sillas)}<div class="sillas ${sillas===2?'dos':''}">${view.names.map((n,i)=>`<button class="silla pareja-${i%2?'b':'a'} ${view.bots[i]?'libre':'llego'} ${sillaElegida===i?'elegida':''}" data-silla="${i}"><span class="num">${i+1}</span><span>${view.bots[i]?t('sillaLibre',{bot:esc(botDe(i))}):esc(n)}</span>${sillas===2?'':`<small>${t('pareja',{x:i%2?'B':'A'})}</small>`}</button>`).join('')}</div>${notaSillas()}${mesaInfo?.fila?.length?`<p class="nota-silla">${t('enLaFilaN',{nombres:esc(lista(mesaInfo.fila))})}</p>`:''}
 ${button(llenos<sillas?t('repartirConBots'):t('repartir'),'start','primary full')}${button(t('reglasCasa'),'house','full')}<p class="start-caption">${sillas===2?(view.settings.pozo===false?t('unoContraUnoSinPozo'):t('unoContraUnoNota')):t('tuCompaneroEnfrente')}</p>${mesaInfo?.pagos&&!mesaInfo.bloqueo?`<p class="gratis-nota">${t('gratisNota',{n:mesaInfo.gratis,precio:precio()})}</p>`:''}</aside>`;}
function endCard(){if(!['handEnd','seriesEnd'].includes(view.phase))return '';const r=view.result,falta=espera(),serie=view.phase==='seriesEnd';
 const sello=r.zapato?t('zapato'):r.type==='capicua'?t('capicua'):r.type==='tranque'?t('tranque'):t('domino');
 const yoGano=view.seat>=0&&r.team===view.seat%2,quien=r.team===null?t('empate'):dos()?(yoGano?(serie?t('ganasteSerie'):t('ganaste')):serie?t('ganoSerieUno',{a:esc(corto(nombreDe(r.team)))}):t('ganaUno',{a:esc(corto(nombreDe(r.team)))})):serie?t('ganaron',{a:esc(corto(nombreDe(r.team))),b:esc(corto(nombreDe(r.team+2)))}):t('ganan',{a:esc(corto(nombreDe(r.team))),b:esc(corto(nombreDe(r.team+2)))});
 const puedeRepartir=view.canDeal??(view.isHost||view.seat>=0);
 return `<section class="resultado pareja-${r.team===1?'b':r.team===0?'a':'n'}" style="animation-delay:${falta.toFixed(2)}s"><div class="eyebrow">${serie?t('serieCompleta'):t('manoCerrada',{n:view.handNo})}</div><h2 class="sello">${sello}</h2><p class="quien">${quien}</p>${r.team!=null?`<div class="points">${t('puntos',{n:r.points})}</div><p class="detalle">${r.bonus?t('pipsCapicua',{n:r.base,c:r.bonus}):t('pipsDetalle',{n:r.base})}</p>`:''}${!serie&&view.opener!=null?`<p class="sale">${t('sale',{nombre:esc(nombreDe(view.opener))})}</p>`:''}
 ${serie?rotaTexto()+avisoPago():`<p class="listos">${listosTexto()}</p><p class="cuenta" data-cuenta></p>`}<div class="acciones">${puedeRepartir?`<button class="g-button primary" data-action="${serie?'newSeries':'next'}" data-tras-espera ${faltaFin()>0?'disabled':''}>${serie?t('otraSerie'):t('repartirYa')}</button>`:`<p>${t('esperandoReparto')}</p>`}${serie&&(view.isHost||view.isVip)&&!practice?button(dos()?t('cambiarMesa'):t('cambiarParejas'),'lobby'):''}${button(t('verManos'),'reveal')}</div>${serie&&practice?listaCard('fin_practica'):''}</section>`;}
function renderRoom(){page='room';if(role==='player'){if(view.seat>=0)renderPhone();else renderSinSilla();return;}ensureWorld('game');world?.update(view,crowd.count);
 const talkDraft=$('#chat-text')?.value||'',focus=document.activeElement?.id==='chat-text',jugando=view.phase==='playing';
 const habia=['.pizarra','.cartel','.game-hand-dock'].filter(c=>$(c)),kFin=view.handNo+':'+view.phase,kTurno=jugando?view.handNo+':'+view.turn:'',falta=espera();
 app.innerHTML=`<div id="room-root" class="game-shell mesa-tv ${practice?'practica':''}"><header class="game-top"><div class="game-top-left">${brand()}<div class="hand-mark">${practice?t('practicaEtq'):view.phase==='lobby'?t('tuMesa'):t('mano',{n:String(view.handNo).padStart(2,'0')})}<span class="connection ${connected||practice?'':'off'}">${practice?t('sinPresion'):connected?t('conectado'):t('reconectando')}</span></div></div>${view.phase!=='lobby'?marcador():''}<div class="game-tools">${button('<span class="tool-label">'+t('camara')+'</span>','camera','','camera')}${button('','school','','book')}${button('','settings','','settings')}${esTelefono?'':button('','fullscreen','','expand')}</div></header>
  ${view.isHost&&view.phase==='lobby'&&!practice?lobbyPanel():''}${endCard()}
  ${view.seat>=0&&jugando?`<div class="game-hand-dock">${handPanel()}</div>`:jugando?`<div class="turno-banner pareja-${view.turn%2?'b':'a'}">${turnoTexto()}</div>`:view.phase==='lobby'&&!view.isHost?`<div class="scene-help">${t('haySillaParaTodos')}</div>`:''}
  <div id="crowd-ui"></div>${escenaFallo?'':`<div id="scene-loading" class="load-status ${world?'ready':''}">${world?t('listo'):t('abriendo')}</div>`}
  <div class="game-bottom">${practice?`<span class="niveles">${Object.keys(NIVELES).map(k=>`<button data-nivel="${k}" class="${nivel===k?'elegido':''}">${t('nivel_'+k)}</button>`).join('')}</span>${modoMesa(view.names.length,'data-modo-practica').replace('modo-mesa','modo-mesa niveles')}`:patrocinioTexto()+filaTV()}</div></div>`;
 for(const c of habia)$(c)?.classList.add('sin-entrada');
 if(visto.fin===kFin)$('.resultado')?.classList.add('sin-entrada');else if($('.resultado')&&falta<=0)visto.fin=kFin;
 if(visto.turno===kTurno)$('.turno-banner')?.classList.add('sin-entrada');visto.turno=kTurno;
 etiquetas();renderCrowd();chipSonido();
 if($('#chat-text')){$('#chat-text').value=talkDraft;if(focus)$('#chat-text').focus();}
 if($('#qr'))QRCode.toString(inviteUrl(),{type:'svg',margin:1,color:{dark:'#1a1426',light:'#f7ecd6'}}).then(svg=>{if($('#qr'))$('#qr').innerHTML=svg;}).catch(()=>{});
}
/* Etiquetas de los asientos en una capa que no se borra con cada jugada: antes nacían sin
   posición y parpadeaban en la esquina de arriba hasta que la escena las movía. */
function etiquetas(){let capa=$('#etiquetas');if(!capa){capa=document.createElement('div');capa.id='etiquetas';document.body.appendChild(capa);}
 if(!view||page!=='room'||(role==='player'&&view.seat>=0)){capa.innerHTML='';return;}
 // Al pasar de 2 contra 2 a 1 contra 1 sobran dos etiquetas: fuera.
 for(const el of capa.querySelectorAll('[data-seatlabel]'))if(Number(el.dataset.seatlabel)>=view.names.length)el.remove();
 view.names.forEach((n,i)=>{let el=capa.querySelector(`[data-seatlabel="${i}"]`);if(!el){el=document.createElement('div');el.dataset.seatlabel=i;el.style.visibility='hidden';capa.appendChild(el);}
  const humano=!view.bots[i],presente=!humano||view.presence?.[i]!==false;
  for(const [c,on] of [['seat-label',1],['pair-a',i%2===0],['pair-b',i%2===1],['active',view.phase==='playing'&&i===view.turn],['dormido',!presente&&view.phase!=='lobby']])el.classList.toggle(c,!!on);
  const html=`<span class="nombre">${esc(nombreDe(i))}</span><small>${[dos()?'':t('pareja',{x:i%2?'B':'A'}),view.bots[i]?'BOT':'',view.phase==='playing'?String(view.counts[i]):''].filter(Boolean).join(' · ')}</small>${view.result?.pips&&['handEnd','seriesEnd'].includes(view.phase)?`<b class="pips">${view.result.pips[i]}</b>`:''}`;if(el.dataset.html!==html){el.innerHTML=html;el.dataset.html=html;}});}

/* ── La mano (teléfono y dock de práctica) ────────────────────────────────── */
const ordenar=h=>[...h].sort((x,y)=>(Math.max(y.a,y.b)-Math.max(x.a,x.b))||(Math.min(y.a,y.b)-Math.min(x.a,x.b)));
/** Cuántas quedan en el pozo (1 contra 1 que roba), para quien tiene que robar. */
const pozoTexto=()=>dos()&&view.settings?.pozo!==false&&view.phase==='playing'?`<span class="pozo-cuenta">${t('pozoN',{n:view.pozo??0})}</span>`:'';
function puntas(){if(!view.chain.length)return pozoTexto();return `<div class="puntas"><span class="punta izq" title="${view.left}">${half(view.left)}</span><span class="linea"></span><span class="punta der" title="${view.right}">${half(view.right)}</span>${pozoTexto()}</div>`;}
function handPanel(){if(view.seat<0||view.phase!=='playing')return '';const miTurno=view.turn===view.seat;
 const opciones=selected?view.legal.filter(o=>o.tile===selected):[];
 let acciones;
 if(selected&&opciones.length>1)acciones=`<p class="pregunta">${t('porCual')}</p><div class="lados">${opciones.map(o=>`<button class="lado ${o.side==='left'?'izq':'der'}" data-play="${o.side}">${half(o.side==='left'?view.left:view.right)}<span>${o.side==='left'?'◀':'▶'}</span></button>`).join('')}</div>`;
 else if(view.canDraw)acciones=`<button class="g-button primary paso" data-action="draw">${t('robar')}</button><p class="nota">${view.left===view.right?t('noLlevasUno',{a:view.left}):t('noLlevas',{a:view.left,b:view.right})} ${t('quedanPozo',{n:view.pozo})}</p>`;
 else if(view.canPass)acciones=`<button class="g-button primary paso" data-action="pass">${t('paso')}</button><p class="nota">${view.left===view.right?t('noLlevasUno',{a:view.left}):t('noLlevas',{a:view.left,b:view.right})}</p>`;
 else acciones=miTurno?`<p class="nota">${t('tocaFicha')}</p>`:'';
 return `<section class="hand-panel ${miTurno?'mi-turno':''}"><div class="hand-heading"><h3>${miTurno?t('teToca'):turnoTexto()}</h3>${puntas()}</div><div class="hand-tiles">${ordenar(view.hand).map(x=>{const pega=view.legal.some(o=>o.tile===x.id);return `<button class="tile-button ${miTurno?(pega?'pega':'no-pega'):''} ${selected===x.id?'selected':''}" data-tile="${x.id}" aria-label="${x.a}–${x.b}">${tile(x.a,x.b)}</button>`;}).join('')}</div><div class="hand-actions" aria-live="polite">${acciones}</div></section>`;}
function tocarFicha(id){if(view.turn!==view.seat){vibrar(VIBRA.elegir);return;}const ops=view.legal.filter(o=>o.tile===id);if(!ops.length){vibrar(VIBRA.error);return;}
 // Una sola manera de jugarla (o las dos puntas iguales): se juega de un toque.
 if(ops.length===1||!view.chain.length||view.left===view.right){jugar(id,ops[0].side);return;}
 selected=selected===id?null:id;vibrar(VIBRA.elegir);renderRoom();}
function jugar(id,side){vibrar(VIBRA.jugar);const b=document.querySelector(`[data-tile="${id}"]`);if(b)b.classList.add('lanzada');if(role==='player')sonidos.ficha();selected=null;setTimeout(()=>action({type:'play',tile:id,side}),b?140:0);}
function ultimaJugada(){const u=view.moves[view.moves.length-1];if(!u)return view.opener!=null&&view.phase==='playing'?t('sale3',{nombre:esc(nombreDe(view.opener))}):'';
 if(u.type==='draw'){let k=0;for(let i=view.moves.length-1;i>=0&&view.moves[i].type==='draw'&&view.moves[i].seat===u.seat;i--)k++;return k>1?t('roboN',{nombre:esc(nombreDe(u.seat)),n:k}):t('robo3',{nombre:esc(nombreDe(u.seat))});}
 if(u.type==='pass')return t('paso3',{nombre:esc(nombreDe(u.seat))});const [a,b]=String(u.tile).split('-');return t('jugo',{nombre:esc(nombreDe(u.seat)),a,b});}
function renderPhone(){hideWorld();const s=view.seat,mia=s%2,compa=(s+2)%4,jugando=view.phase==='playing',uno=dos(),otro=esc(corto(nombreDe(1-s)));
 const top=`<header class="control-top"><div class="yo"><b>${esc(view.names[s])}</b><span class="pareja pareja-${mia?'b':'a'}">${uno?t('contraX',{nombre:otro}):t('conCompanero',{nombre:esc(corto(nombreDe(compa)))})}</span></div><div class="mini-marcador"><span class="pareja-${mia?'b':'a'}">${uno?t('tu'):t('nosotros')} <b>${view.scores[mia]}</b></span><span class="pareja-${mia?'a':'b'}">${uno?otro:t('ellos')} <b>${view.scores[1-mia]}</b></span></div></header>`;
 let cuerpo;
 if(jugando)cuerpo=`<p class="ultima">${ultimaJugada()}</p>${handPanel()}`;
 else if(view.phase==='lobby')cuerpo=`<div class="phone-wait lobby-tel"><div class="eyebrow">${view.isVip?t('mandasEyebrow'):t('tuSillaLista')}</div><h1>${t('estasEnMesa')}</h1>${sillasTel()}${view.isVip?`<div class="vip-acciones">${modoMesa(view.names.length)}${button(view.bots.filter(b=>!b).length<view.names.length?t('repartirConBots'):t('repartir'),'start','primary full')}${button(t('reglasCasa'),'house','full')}</div>`:`<p>${t('miraArriba')}</p>`}${cuentaCard()}</div>`;
 else if(espera()>0){cuerpo=`<div class="phone-wait"><h1 class="mira-tele">${t('miraTele')}</h1></div>`;setTimeout(()=>{if(page==='room'&&view)renderRoom();},espera()*1000+80);}
 else{const r=view.result,gano=r?.team===mia,parejo=r?.team==null;cuerpo=`<div class="phone-wait fin ${parejo?'':gano?'gano':'perdio'}"><div class="eyebrow">${r?.zapato?t('zapato'):r?.type==='capicua'?t('capicua'):r?.type==='tranque'?t('tranque'):t('domino')}</div><h1>${parejo?t('parejo'):gano?(uno?t('ganaste'):t('ganamos')):(uno?t('perdiste'):t('perdimos'))}</h1>${!parejo&&gano?`<div class="points">${t('puntos',{n:r.points})}</div>`:''}<p>${r?.pips?.[s]?t('tusPuntos',{n:r.pips[s]}):''}${view.opener!=null&&view.phase==='handEnd'?'<br>'+t('sale',{nombre:esc(nombreDe(view.opener))}):''}</p>${view.phase==='seriesEnd'?cuentaCard()+(mesaInfo?.rota?.salen?.includes(s)?`<p class="rota">${t('tePararas',{nombre:esc(mesaInfo.rota.entran[mesaInfo.rota.salen.indexOf(s)]||'')})}</p>`:''):''}${view.phase==='handEnd'?listoTel():`<button class="g-button primary full" data-action="newSeries" data-tras-espera ${faltaFin()>0?'disabled':''}>${t('otraSerie')}</button>${view.isVip?button(uno?t('cambiarMesa'):t('cambiarParejas'),'lobby','full'):''}${listaCard('fin_serie')}`}</div>`;
  if(r&&finVisto.k!==view.handNo+':'+view.phase){finVisto={k:view.handNo+':'+view.phase,t:performance.now()};if(gano)vibrar(VIBRA.gano);}}
 app.innerHTML=`<main id="room-root" class="phone-only control pareja-${mia?'b':'a'} ${jugando&&view.turn===s?'mi-turno':''}">${top}${cuerpo}<div class="te-toca-flash" aria-hidden="true">${t('teToca')}</div><footer class="phone-bottom"><span class="connection ${connected?'':'off'}">${connected?t('conectado'):t('reconectando')}</span><button data-action="school">${t('unaAyudita')}</button><button data-action="salir">${icon('exit')}</button></footer></main>`;}

/* ── Sillas, listos y la cuenta atrás ─────────────────────────────────────── */
/* Quien manda (la tele o el teléfono que el cuarto nombra) toca una silla y luego otra
   para cambiarlas, o libera una. Los demás se cambian a una silla libre. */
const faltaFin=()=>finPlazo?Math.max(0,(finPlazo.espera-performance.now())/1000):0;
const faltaAuto=()=>finPlazo?.auto!=null?Math.max(0,Math.ceil((finPlazo.auto-performance.now())/1000)):null;
const humanos=()=>view.bots.map((b,i)=>b?-1:i).filter(i=>i>=0);
function listosTexto(){if(practice||!finPlazo||view.phase!=='handEnd')return '';const h=humanos(),n=h.filter(i=>finPlazo.listos.includes(i)).length;return h.length?t('listosN',{n,m:h.length}):'';}
function listoTel(){const yaEstoy=finPlazo?.listos?.includes(view.seat);return `<div class="listo-caja">${yaEstoy?`<p class="listo-ya">${t('listoYa')}</p>`:`<button class="g-button primary full" data-action="listo" data-tras-espera ${faltaFin()>0?'disabled':''}>${t('listo')}</button>`}<p class="listos">${listosTexto()}</p><p class="cuenta" data-cuenta></p></div>`;}
function notaSillas(){if(!(view.isHost||view.isVip))return '';const e=sillaElegida;return `<p class="nota-silla">${e==null?t('mandasTu'):t('tocaOtraSilla')}</p>${e!=null&&!view.bots[e]&&e!==view.seat?button(t('liberarSilla'),'liberar-elegida','full'):''}`;}
function sillasTel(){const uno=dos();return `<div class="sillas-tel"><div class="mesita"></div>${view.names.map((_,i)=>{const libre=view.bots[i],mia=i===view.seat;
 return `<button class="silla-tel pareja-${i%2?'b':'a'} ${libre?'libre':''} ${mia?'mia':''} ${sillaElegida===i?'elegida':''}" data-silla="${i}" style="grid-area:s${uno?i*2:i}"><b>${libre?t('libre'):esc(corto(view.names[i]))}</b><small>${mia?t('tu'):uno?'':t('pareja',{x:i%2?'B':'A'})}</small></button>`;}).join('')}</div>${view.isVip?notaSillas():`<p class="nota-silla">${t('tocaSillaLibre')}</p>`}`;}
function tocarSilla(i){if(!view||view.phase!=='lobby'||practice)return;
 if(view.isHost||view.isVip){if(sillaElegida===null){sillaElegida=i;}else if(sillaElegida===i){sillaElegida=null;}else{wire({type:'cambiar',a:sillaElegida,b:i});sillaElegida=null;}vibrar(VIBRA.elegir);renderRoom();return;}
 if(view.bots[i]&&view.seat!==i){vibrar(VIBRA.elegir);wire({type:'silla',to:i});}}
/* Sin silla: la fila. "Se para el que pierde": quien se anota entra cuando se pare el lado que pierda
   la serie, o antes si se libera una silla de bot. El puesto y quién va delante los manda el cuarto. */
function renderSinSilla(){hideWorld();const enFila=yoInfo?.espera,puesto=yoInfo?.puesto||0,fila=mesaInfo?.fila||[],delante=fila.slice(0,Math.max(0,puesto-1));
 const cuerpo=enFila?`<div class="eyebrow">${t('enLaFila')}</div><h1>${puesto===1?t('eresElProximo'):t('vasN',{n:puesto})}</h1><p>${t('filaCuando')}${delante.length?' '+t('delante',{nombres:esc(lista(delante))}):''}</p>${button(t('salirFila'),'fila-salir','full')}`
  :`<div class="eyebrow">${t('sinSilla')}</div><h1>${t('noTienesSilla')}</h1><p>${t('anotateTxt')}${fila.length?' '+t('yaHay',{n:fila.length}):''}</p>${button(t('anotame'),'fila-entrar','primary full')}`;
 app.innerHTML=`<main id="room-root" class="phone-only control"><header class="control-top"><div class="yo"><b>${esc(conexion.nombre||almacen.get('mesa-name',''))}</b><span class="pareja">${t('mirandoUno')}</span></div><div class="mini-marcador"><span class="pareja-a">A <b>${view.scores[0]}</b></span><span class="pareja-b">B <b>${view.scores[1]}</b></span></div></header>
 <div class="phone-wait">${cuerpo}</div>
 <footer class="phone-bottom"><span class="connection ${connected?'':'off'}">${connected?t('conectado'):t('reconectando')}</span><button data-action="school">${t('unaAyudita')}</button><button data-action="salir">${icon('exit')}</button></footer></main>`;}
// La cuenta atrás y los botones que esperan a que pase el momento de la mano.
setInterval(()=>{if(page!=='room')return;const n=faltaAuto();for(const el of document.querySelectorAll('[data-cuenta]'))el.textContent=n==null||!view||view.phase!=='handEnd'?'':t('proximaEn',{n});
 const f=faltaFin();for(const b of document.querySelectorAll('[data-tras-espera]'))b.disabled=f>0;},500);

/* ── El desbloqueo ────────────────────────────────────────────────────────── */
/* Tres series gratis por cuenta y después un solo pago (ver src/pagos.ts). El cuarto
   decide quién cubre cada serie; aquí solo se enseña y se cobra. El cobro es de Paddle:
   su script se baja solo cuando alguien toca "Desbloquear", nunca antes. */
const precio=()=>precioLocal||pagosCfg?.precio||'$9.99';
async function cargarPagos(){try{const r=await fetch('/api/pagos',{credentials:'include'});pagosCfg=r.ok?await r.json():{activos:false};}catch{pagosCfg=pagosCfg||{activos:false};}return pagosCfg;}
function patrocinioTexto(){const p=mesaInfo?.patrocinio;if(!mesaInfo?.pagos||!p||view.phase==='lobby')return '';
 return `<span class="patrocinio">${p.tipo==='unlock'?t('mesaDe',{nombre:esc(p.nombre)}):t('serieGratisDe',{k:mesaInfo.gratis-p.quedan,n:mesaInfo.gratis,nombre:esc(p.nombre)})}</span>`;}
/** En la tele: por qué no se reparte y qué hacer, con el teléfono. */
function avisoPago(){const b=mesaInfo?.pagos&&mesaInfo.bloqueo;if(!b)return '';
 return `<div class="aviso-pago"><h3>${b==='sinCuenta'?t('bloqueoSinCuentaTit'):t('bloqueoSinSeriesTit')}</h3><p>${b==='sinCuenta'?t('bloqueoSinCuenta',{n:mesaInfo.gratis}):t('bloqueoSinSeries',{precio:precio(),n:mesaInfo.gratis})}</p></div>`;}
/** En el teléfono: crear cuenta, cuántas gratis quedan, o desbloquear. */
function cuentaCard(){if(!mesaInfo?.pagos)return '';const b=mesaInfo.bloqueo,c=pagosCfg?.cuenta;let cuerpo;
 if(!profile)cuerpo=`<p>${t('conCuentaGratis',{n:mesaInfo.gratis})}</p><div class="fila">${button(t('crearCuenta'),'cuenta-crear','primary')}${button(t('yaTengoCuenta'),'cuenta-entrar')}</div>`;
 else if(c?.desbloqueada)cuerpo=`<p class="listo">${t('mesaDesbloqueada')}</p>`;
 else cuerpo=`<p>${c?.gratisQuedan?(c.gratisQuedan===1?t('teQueda1'):t('teQuedan',{n:c.gratisQuedan})):b==='sinSeries'?t('desbloqueaUnaVez'):t('seAcabaron')}</p>${button(t('desbloquear',{precio:precio()}),'desbloquear','primary full')}<small>${t('unaVez')} <a href="/legal/reembolsos.html${idioma()==='en'?'?lang=en':''}" target="_blank">${t('reembolso14')}</a></small>`;
 return `<section class="cuenta-mesa ${b?'bloqueada':''}">${b?`<h3>${b==='sinCuenta'?t('bloqueoSinCuentaTit'):t('bloqueoSinSeriesTit')}</h3>`:''}${cuerpo}</section>`;}
/* Lo que viene, en la portada: Mesa en línea y la Liga, cada una con su lista de espera. Quien ya
   se apuntó (en este aparato) ve que ya está, no el botón. */
const proximo=()=>`<section class="proximo" aria-label="${t('proximamente')}">${[['linea','enLineaTit','enLineaTxt','listaBoton','mesa-lista','lista'],['liga','ligaTit','ligaTxt','ligaBoton','mesa-liga','liga']].map(([k,tit,txt,bot,clave,accion])=>`<div class="proximo-card ${k}"><span class="eyebrow">${t('proximamente')}</span><h3>${t(tit)}</h3><p>${t(txt)}</p>${almacen.get(clave)==='si'?`<span class="en-lista">${t('yaEnLista')}</span>`:`<button class="text-link" data-action="${accion}" data-origen="portada">${t(bot)} ${icon('arrow')}</button>`}</div>`).join('')}</section>`;
/* Lista de espera de Mesa en línea: una línea al final de la serie, hasta que se apunte o diga que no. */
function listaCard(origen){if(almacen.get('mesa-lista'))return '';return `<p class="lista-linea"><b>${t('listaTit')}</b> ${t('listaTexto')} <button class="text-link" data-action="lista" data-origen="${origen}">${t('listaBoton')} ${icon('arrow')}</button></p>`;}
function listaModal(origen,cual='linea'){const liga=cual==='liga';telemetria.evento('lista',{paso:'abierta',origen,cual});openModal(liga?t('ligaModal'):t('listaModal'),`<p class="modal-copy">${liga?t('ligaCopia'):t('listaCopia')}</p><form id="lista-form" data-origen="${origen}" data-lista="${cual}"><label class="field">${t('tuCorreo')}<input name="email" type="email" required maxlength="254" autocomplete="email" inputmode="email" autocapitalize="off" spellcheck="false" enterkeyhint="send"></label><button class="g-button primary full" type="submit">${liga?t('ligaBoton'):t('listaBoton')}</button><p class="form-error" id="lista-error"></p></form><p class="tiny">${t('listaNota')} <a href="/legal/privacidad.html${idioma()==='en'?'?lang=en':''}" target="_blank">${t('privacidad')}</a></p><button class="text-link" data-action="lista-no">${t('noGracias')}</button>`);}
let paddleListo=null;
function cargarPaddle(){if(paddleListo)return paddleListo;
 paddleListo=new Promise((ok,mal)=>{const sc=document.createElement('script');sc.src='https://cdn.paddle.com/paddle/v2/paddle.js';sc.async=true;sc.onload=()=>{try{const P=window.Paddle;if(pagosCfg.entorno!=='production')P.Environment.set('sandbox');P.Initialize({token:pagosCfg.clientToken,eventCallback:ev=>{if(ev?.name==='checkout.completed')pagoHecho();}});ok(P);}catch(e){mal(e);}};sc.onerror=()=>{paddleListo=null;mal(Error('paddle'));};document.head.appendChild(sc);});
 return paddleListo;}
async function desbloquear(){telemetria.evento('desbloquear',{cuenta:profile?1:0});
 if(!profile){authMode='signup';showAuth(t('primeroCuenta'));return;}
 const cfg=pagosCfg?.activos?pagosCfg:await cargarPagos();if(!cfg?.activos){toast(t('pagosNoDisponibles'));return;}
 try{const P=await cargarPaddle();
  // El precio en la moneda de quien paga (RD$, MX$…), si Paddle lo sabe.
  P.PricePreview?.({items:[{priceId:cfg.priceId,quantity:1}]}).then(r=>{const x=r?.data?.details?.lineItems?.[0]?.formattedTotals?.total;if(x){precioLocal=x;if(page==='room')renderRoom();}}).catch(()=>{});
  P.Checkout.open({items:[{priceId:cfg.priceId,quantity:1}],customData:{profile_id:profile.id},settings:{displayMode:'overlay',theme:'dark',locale:idioma()==='en'?'en':'es',allowLogout:false}});
 }catch{toast(t('pagosNoCargo'));}}
/* Paddle avisa al servidor por su lado; aquí se espera a que el servidor lo confirme. */
async function pagoHecho(){toast(t('confirmandoPago'));
 for(let i=0;i<30;i++){await new Promise(r=>setTimeout(r,2000));await cargarPagos();if(pagosCfg?.cuenta?.desbloqueada){telemetria.evento('pago');vibrar(VIBRA.gano);toast(t('mesaDesbloqueadaYa'));if(page==='room'&&view)renderRoom();return;}}
 toast(t('pagoTarda'));}

/* ── El público ───────────────────────────────────────────────────────────── */
function visibleMessages(){return (crowd.chat||[]).filter(m=>!muted.has(m.sender)&&!(crowdMuted&&m.role==='spectator'));}
function renderCrowd(){const root=$('#crowd-ui');if(!root||practice)return;const draft=$('#chat-text')?.value||'',focused=document.activeElement?.id==='chat-text',messages=visibleMessages();
 root.innerHTML=`<div class="crowd-toggle">${crowd.count||chatOpen?`<button class="g-button" data-action="chat"><span class="crowd-led"></span>${t('mirando',{n:crowd.count})} ${icon('chat')}</button>`:`<button class="g-button solo-icono" data-action="chat" aria-label="Chat">${icon('chat')}</button>`}</div>${chatOpen?`<aside class="crowd-chat"><div class="chat-top"><strong>${t('hablaleMesa')}</strong><button data-action="crowd-mute">${crowdMuted?t('oirPublico'):t('silenciarPublico')}</button></div><div class="chat-messages">${messages.length?messages.map(m=>`<div class="chat-message"><strong>${esc(m.name)}${m.role==='spectator'?t('publico'):''}${m.sender!==crowd.you?`<button data-mute="${esc(m.sender)}">${t('silenciar')}</button>`:''}</strong>${esc(m.text)}</div>`).join(''):`<p class="tiny">${t('diAlgo')}</p>`}</div><form class="chat-form" id="chat-form"><input id="chat-text" name="message" maxlength="180" autocomplete="off" aria-label="Chat" placeholder="${t('dimeAVer')}"><button class="g-button primary" type="submit" aria-label="${t('enviar')}">↑</button></form><div style="display:flex;gap:10px;margin-top:10px"><button class="text-link" data-action="watch-link">${t('invitarPublico')} ↗</button></div></aside>`:''}`;
 if($('#chat-text')){$('#chat-text').value=draft;if(focused)$('#chat-text').focus();}const list=$('.chat-messages');if(list)list.scrollTop=list.scrollHeight;
 // Las burbujas van en su propia capa: el siguiente estado ya no las borra antes de tiempo.
 const m=messages[messages.length-1];if(m&&m.id!==lastBubble&&!chatOpen&&Date.now()-m.at<12000){lastBubble=m.id;let capa=$('#burbujas');if(!capa){capa=document.createElement('div');capa.id='burbujas';document.body.appendChild(capa);}const el=document.createElement('div');el.className='chat-bubble';el.innerHTML=`<b>${esc(m.name)} · ${m.role==='spectator'?t('desdePublico'):t('enLaMesa')}</b>${esc(m.text)}`;capa.append(el);setTimeout(()=>el.remove(),6500);}}

/* ── Pantallas de entrar ──────────────────────────────────────────────────── */
function joinScreen(error=''){page='join';if(role==='player'||esTelefono)hideWorld();else dormirMundo();const espectador=role==='spectator';
 app.innerHTML=`<div class="center-screen"><section class="join-screen"><div class="eyebrow">${espectador?t('laEsquinaAbierta'):t('hayUnaSilla')}</div><h1>${espectador?t('veAMirar'):t('bienvenido')}</h1><p>${t('sinCuenta')}</p><form id="join-form"><label class="field">${t('tuNombre')}<input name="name" maxlength="24" autocomplete="given-name" enterkeyhint="go" required value="${esc(profile?.name||almacen.get('mesa-name',''))}" placeholder="${t('comoTeDicen')}"></label><button class="g-button primary full" type="submit">${espectador?t('mirar'):t('sentarme')} ${icon('arrow')}</button><p class="form-error">${esc(error)}</p></form>${espectador?'':`<button class="text-link" data-action="watch">${t('soloMirar')} ↗</button>`}</section></div>`;}
function openModal(title,body,clase=''){modal.className=clase;modal.innerHTML=`<div class="modal-top"><h2>${title}</h2><button class="close" data-action="close" aria-label="${t('cerrar')}">×</button></div>${body}`;if(!modal.open)modal.showModal();}
/* La escuelita: once lecciones de cero, en orden, con su dibujo y su pregunta. Lo aprobado se
   guarda en el aparato; se puede saltar a cualquiera con los puntitos de arriba. */
const hecho=()=>new Set(almacen.json('mesa-escuelita',[]));
const ficha=(a,b,h=false)=>tile(a,b).replace('class="tile"',`class="tile${h&&a!==b?' h':''}"`);
const figura=(a,b,pie='')=>`<figure>${ficha(a,b)}${pie?`<figcaption>${pie}</figcaption>`:''}</figure>`;
const fila=(xs,pies=[])=>`<div class="fila-fichas">${xs.map(([a,b],i)=>figura(a,b,pies[i]??'')).join('')}</div>`;
const cadena=(xs,izq,der)=>`<div class="cadena-leccion"><span class="punta-leccion">${t('punta')} <b>${izq}</b></span><div class="cadena">${xs.map(([a,b])=>ficha(a,b,true)).join('')}</div><span class="punta-leccion">${t('punta')} <b>${der}</b></span></div>`;
const mesaDia=()=>`<div class="mesa-dia"><span class="asiento arriba pareja-a">${t('tuPareja')}</span><span class="asiento izq pareja-b">${t('contrario')}</span><span class="asiento der pareja-b">${t('contrario')}</span><span class="asiento abajo pareja-a">${t('tu')}</span><div class="pano-dia">${ficha(6,6)}</div></div>`;
const VISTAS=[
 ()=>fila([[6,6],[5,3],[0,0],[4,1]]),
 ()=>fila([[5,4],[6,6],[0,0]],['= 9','= 12','= 0']),
 mesaDia,
 ()=>`<div class="fila-fichas dorsos">${Array.from({length:7},()=>'<span class="tile dorso"></span>').join('')}</div><p class="pie-vista">${t('tuMano')} · 7</p>`,
 ()=>`${mesaDia()}<p class="pie-vista">↺ ${t('turnoDerecha')}</p>`,
 ()=>cadena([[3,4],[4,4],[4,6]],3,6),
 ()=>`${cadena([[2,6],[6,5]],2,5)}<p class="pie-vista">${t('tuMano')}</p>${fila([[1,3],[4,6],[0,0]])}`,
 ()=>`<p class="pie-vista">${t('contrario')}</p>${fila([[5,4],[6,2]],['= 9','= 8'])}`,
 ()=>`<div class="marcador-dia"><span class="pareja-a">${t('tuPareja')} <b>18</b></span><span class="pareja-b">${t('contrario')} <b>31</b></span></div>`,
 ()=>`${cadena([[3,1],[1,5]],3,5)}<p class="pie-vista">${t('capicua')}</p>${fila([[3,5]])}`,
 ()=>fila([[6,6],[1,0]],['= 12','= 1']),
];
function school(){const ls=LECCIONES[idioma()],total=ls.length,ok=hecho();lesson=Math.max(0,Math.min(lesson,total));
 const puntos=`<div class="leccion-pasos" role="tablist">${ls.map((x,i)=>`<button class="paso-leccion ${i===lesson?'activo':''} ${ok.has(i)?'hecho':''}" data-lesson="${i}" aria-label="${i+1}. ${esc(x.tab)}" title="${esc(x.tab)}"></button>`).join('')}</div>`;
 if(lesson===total){openModal(t('escuelitaTitulo'),`<div class="school-lessons">${puntos}<h3>${t('listoEscuelita')}</h3><div class="leccion-nav">${button(t('anterior'),'leccion-atras')}${role==='player'&&page==='room'?button(t('volverMesa'),'close','primary'):button(t('aPracticar'),'escuelita-practica','primary')}</div></div>`,'escuela');return;}
 const l=ls[lesson];
 openModal(t('escuelitaTitulo'),`<div class="school-lessons">${puntos}<div class="eyebrow">${t('leccionDe',{n:lesson+1,t:total})} · ${esc(l.tab)}</div><h3>${l.title}</h3>${l.body.map(p=>`<p>${p}</p>`).join('')}<div class="leccion-vista">${VISTAS[lesson]?.()??''}</div><div class="notice">${l.question}</div><div class="hand-tiles respuestas">${l.choices.map((c,i)=>c.text?`<button class="g-button" data-answer="${i}">${c.text}</button>`:`<button class="tile-button" data-answer="${i}" aria-label="${c.a}–${c.b}">${tile(c.a,c.b)}</button>`).join('')}</div>${page==='room'?`<p class="tiny">${role==='player'?t('ayudaTelefono'):t('ayudaMesa')}</p>`:''}<div class="leccion-pie"><div class="exercise-result" role="status">${ok.has(lesson)?l.yes:t('sinApuesta')}</div><div class="leccion-nav">${lesson?button(t('anterior'),'leccion-atras'):'<span></span>'}${button(t('siguiente'),'leccion-sigue',ok.has(lesson)?'primary':'')}</div></div></div>`,'escuela');}
function settings(){const hayRadio=true;openModal(t('ponleAmbiente'),`<label class="check"><input id="sound-setting" type="checkbox" ${sound?'checked':''}> ${t('sonidosMesa')}</label><label class="check"><input id="bot-voice-setting" type="checkbox" ${botChatter.enabled?'checked':''}> ${t('vocesBots')}</label><button class="text-link" data-action="bot-voice-demo">${t('oirVoces')} ↗</button><label class="check"><input id="ambient-setting" type="checkbox" ${ambientOn?'checked':''}> ${t('ambienteColmado')}</label>${hayRadio?`<label class="check"><input id="radio-setting" type="checkbox" ${radio.on?'checked':''}> ${t('radioColmado')}</label>`:''}<label class="check"><input id="motion-setting" type="checkbox" ${document.documentElement.classList.contains('reduced')?'checked':''}> ${t('menosMovimiento')}</label>
 <label class="field">${t('calidad')}<select id="quality-setting"><option value="high" ${!['low','min'].includes(almacen.get('mesa-calidad'))?'selected':''}>${t('calidadAlta')}</option><option value="low" ${['low','min'].includes(almacen.get('mesa-calidad'))?'selected':''}>${t('calidadBaja')}</option></select></label>
 <label class="field">${t('idioma')}<select id="idioma-setting"><option value="es" ${idioma()==='es'?'selected':''}>Español</option><option value="en" ${idioma()==='en'?'selected':''}>English</option></select></label>
 <div class="divider"></div><label class="field">${t('tuMusica')}<input id="music-file" type="file" accept="audio/*"></label><p class="account-note">${t('tuMusicaNota')}</p>${music?button(musicMuted?'▶':'■','music'):''}${muted.size?button(t('quitarMutes'),'unmute-all','full'):''}<div class="divider"></div>${button(t('reglasJuego'),'rules','full')}${button(t('miPerfil'),'profile','full')}${button(t('creditos'),'creditos','full')}${button(t('listo2'),'close','primary full')}`);}
function house(){const s=view.settings;openModal(t('tuMesaTusReglas'),`<p class="modal-copy">${t('acuerdenAntes')}</p><form id="house-form"><label class="field">${t('puntosGanar')}<select name="target">${[100,200,300].map(n=>`<option ${s.target===n?'selected':''}>${n}</option>`).join('')}</select></label><label class="field">${t('bonoCapicua')}<select name="capicua">${[0,25,50].map(n=>`<option ${s.capicua===n?'selected':''}>${n}</option>`).join('')}</select></label><label class="field">${t('tranqueParejo')}<select name="tie"><option value="blocker" ${s.tie==='blocker'?'selected':''}>${t('ganaQuienTranco')}</option><option value="none" ${s.tie==='none'?'selected':''}>${t('nadie')}</option></select></label><label class="check"><input name="allPips" type="checkbox" ${s.allPips?'checked':''}> ${t('contarTodas')}</label><label class="check"><input name="capicuaDistinct" type="checkbox" ${s.capicuaDistinct?'checked':''}> ${t('capicuaDistinta')}</label>${dos()?`<label class="check"><input name="pozo" type="checkbox" ${s.pozo!==false?'checked':''}> ${t('seRoba')}</label>`:''}<button class="g-button primary full">${t('ponerReglas')}</button></form>`);}
function creditos(){openModal('',`<div class="acerca"><img class="logo-estudio" src="/marca/three-thirteen-logo-light-on-dark.svg" alt="Three Thirteen Studios"><p class="lugar">${t('mesaDeEstudio')}</p><p class="autor">${t('creadoPor')} Trey Rodriguez</p><p class="derechos">© 2026 Three Thirteen Studios · <a href="https://threethirteenstudios.pages.dev" target="_blank" rel="noopener">threethirteenstudios.pages.dev ↗</a></p><p class="fuentes">${t('fuentesEstudio')}</p><div class="usa"><h3>${t('mesaUsa')}</h3><p>three.js (MIT) · ${t('animaciones')}: Quaternius (CC0)</p></div>${button(t('listo2'),'close','full')}</div>`,'estudio');}
function rulesModal(){openModal(t('asiSeJuega'),`<p class="modal-copy">${t('reglasIntro')}</p>${[['primeraMano','primeraManoTxt'],['domino','dominoTxt'],['tranque','tranqueTxt'],['capicua','capicuaTxt'],['zapato','zapatoTxt'],['unoContraUno','unoContraUnoTxt']].map(([a,b])=>`<div class="history-row"><strong>${t(a)}</strong><span>${t(b)}</span></div>`).join('')}<p class="modal-copy" style="margin-top:20px">${t('reglasCierre')}</p>${button(t('volverMesa'),'close','primary full')}`);}
function reveal(){openModal(t('manosAbiertas'),`<div class="reveal-hands">${view.revealed.map((h,i)=>`<div class="reveal-row pareja-${i%2?'b':'a'}"><strong>${esc(nombreDe(i))} · ${view.result.pips[i]}</strong><div>${h.length?ordenar(h).map(x=>tile(x.a,x.b)).join(''):t('sinFichas')}</div></div>`).join('')}</div><div class="divider"></div>${button(t('descargarMano'),'replay','full')}${button(t('volverMesa'),'close','primary full')}`);}

/* ── Cuentas ──────────────────────────────────────────────────────────────── */
async function api(path,input){const r=await fetch('/api/'+path,{method:input?'POST':'GET',credentials:'include',headers:input?{'content-type':'application/json'}:{},body:input?JSON.stringify(input):undefined});let b={};try{b=await r.json();}catch{}if(!r.ok)throw Error(traducirError(b.error||'Please try again.'));return b;}
async function loadProfile(){try{profile=(await api('me')).profile;}catch{profile=null;}await cargarPagos();if(page==='room'&&view&&mesaInfo?.pagos&&!modal.open)renderRoom();}
async function showProfile(){await loadProfile();if(!profile){showAuth();return;}openModal(t('tuLugar'),`<div class="eyebrow">@${esc(profile.username)} · ${t('miembroDesde',{n:new Date(profile.createdAt).getFullYear()})}</div><div class="profile-stats"><div><b>${profile.games}</b><span>${t('series')}</span></div><div><b>${profile.wins}</b><span>${t('victorias')}</span></div><div><b>${profile.losses}</b><span>${t('derrotas')}</span></div></div><form id="profile-form"><label class="field">${t('nombrePantalla')}<input name="name" value="${esc(profile.name)}" maxlength="24" required></label><label class="field">${t('pais')}<input name="country" value="${esc(profile.country)}" maxlength="40" placeholder="${t('paisEjemplo')}"></label><label class="field">${t('edad')}<select name="ageBand">${['','18–24','25–34','35–44','45–54','55–64','65+'].map(x=>`<option value="${x}" ${profile.ageBand===x?'selected':''}>${x||t('prefieroNo')}</option>`).join('')}</select></label><button class="g-button primary full">${t('guardarPerfil')}</button><p class="form-error" id="account-error"></p></form><button class="text-link" data-action="logout">${t('salirCuenta')}</button>`);}
function showAuth(nota=''){openModal(t('guardaTuSilla'),`<div class="profile-tabs"><button data-auth="login" class="${authMode==='login'?'active':''}">${t('entrarCuenta')}</button><button data-auth="signup" class="${authMode==='signup'?'active':''}">${t('crearPerfil')}</button></div><p class="modal-copy">${nota||t('invitadosPueden')}</p><form id="auth-form">${authMode==='signup'?`<label class="field">${t('nombrePantalla')}<input name="name" maxlength="24" autocomplete="nickname" required></label>`:''}<label class="field">${t('usuario')}<input name="username" minlength="3" maxlength="20" pattern="[A-Za-z0-9_]{3,20}" autocomplete="username" required></label><label class="field">${t('clave')}<input name="password" type="password" minlength="8" maxlength="128" autocomplete="${authMode==='signup'?'new-password':'current-password'}" required></label><button class="g-button primary full">${authMode==='signup'?t('crearPerfil'):t('entrarCuenta')}</button><p class="form-error" id="account-error"></p>${authMode==='signup'?`<p class="tiny acepta">${t('aceptasTerminos',{l:idioma()==='en'?'?lang=en':''})}</p>`:''}</form>`);}
async function copyLink(watch=false){try{await navigator.clipboard.writeText(inviteUrl(watch));toast(watch?t('copiadoPublico'):t('copiado'));}catch{openModal(t('copiado'),`<label class="field"><input readonly value="${esc(inviteUrl(watch))}" onclick="this.select()"></label>`);}}
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3500);}

/* ── Eventos ──────────────────────────────────────────────────────────────── */
document.addEventListener('click',async e=>{
 const b=e.target.closest('button');if(!b||b.disabled)return;
 if(b.id==='chip-sonido'){unlockSound();return;}
 if(b.dataset.tile){tocarFicha(b.dataset.tile);return;}
 if(b.dataset.silla!==undefined){tocarSilla(Number(b.dataset.silla));return;}
 if(b.dataset.nivel){nivel=b.dataset.nivel;almacen.set('mesa-nivel',nivel);renderRoom();return;}
 if(b.dataset.modo){const n=Number(b.dataset.modo);if(view&&n!==view.names.length){vibrar(VIBRA.elegir);sillaElegida=null;wire({type:'modo',n});}return;}
 // En la práctica, cambiar de modo empieza otra serie (sin presión: no hay nada que perder).
 if(b.dataset.modoPractica){const n=Number(b.dataset.modoPractica);if(practice&&n!==view?.names.length){modoPractica=n;almacen.set('mesa-modo-practica',String(n));startPractice();}return;}
 if(b.dataset.play){jugar(selected,b.dataset.play);return;}
 if(b.dataset.lesson!==undefined){lesson=Number(b.dataset.lesson);school();return;}
 if(b.dataset.answer!==undefined){const l=LECCIONES[idioma()][lesson],correct=l.choices[Number(b.dataset.answer)].ok;$('.exercise-result').textContent=correct?l.yes:l.no;b.classList.add(correct?'bien':'mal');if(correct){unlockSound();sonidos.ficha();const h=hecho();h.add(lesson);almacen.set('mesa-escuelita',JSON.stringify([...h]));$('.paso-leccion.activo')?.classList.add('hecho');$('[data-action="leccion-sigue"]')?.classList.add('primary');}else vibrar(VIBRA.error);return;}
 if(b.dataset.auth){authMode=b.dataset.auth;showAuth();return;}
 if(b.dataset.mute){muted.add(b.dataset.mute);almacen.set('mesa-muted',JSON.stringify([...muted]));renderCrowd();return;}
 const a=b.dataset.action;if(!a)return;
 if(a==='bot-voice-demo'){const setting=$('#bot-voice-setting');if(setting)setting.checked=true;unlockSound();botChatter.preview();}
 else if(a==='home'){if(page==='room'&&role==='player'&&view?.seat>=0&&!confirm(t('salirSeguro')))return;modal.close();home();}
 else if(a==='salir'){if(!confirm(t('salirSeguro')))return;if(view?.seat>=0)wire({type:'liberar',seat:view.seat},true);almacen.del('mesa-seat-'+room+'-'+role);history.pushState({},'','/');home();}
 else if(a==='listo'){if(finPlazo&&!finPlazo.listos.includes(view.seat))finPlazo.listos.push(view.seat);vibrar(VIBRA.elegir);wire({type:'listo'});renderRoom();}
 else if(a==='liberar-elegida'){if(sillaElegida!=null)wire({type:'liberar',seat:sillaElegida});sillaElegida=null;renderRoom();}
 else if(a==='lobby'){modal.close();wire({type:'lobby'});}
 else if(a==='fila-entrar'||a==='fila-salir'){vibrar(VIBRA.elegir);wire({type:'fila',en:a==='fila-entrar'});}
 else if(a==='reintentar'){conexion.intentos=0;connect();}
 else if(a==='recargar')location.reload();
 else if(a==='host'){role='host';unlockSound(true);createRoom();}
 else if(a==='practice'){modal.close();role='practice';unlockSound(true);startPractice();}
 else if(a==='continuar'){modal.close();role='practice';unlockSound(true);seguirPractica();}
 else if(a==='join')openModal(t('buscaTuGente'),`<p class="modal-copy">${t('escaneaOCodigo')}</p><form id="link-form"><label class="field">${t('codigoMesa')}<input name="code" class="code-input" required autocomplete="off" autocapitalize="characters" spellcheck="false" enterkeyhint="go" placeholder="ABCD"></label><button class="g-button primary full">${t('entrar')}</button></form>`);
 else if(a==='watch'){role='spectator';history.replaceState({},'',`?room=${room}&role=spectator`);joinScreen();}
 else if(a==='creditos')creditos();
 else if(a==='leccion-sigue'){lesson++;school();$('#modal')?.scrollTo?.(0,0);}
 else if(a==='leccion-atras'){lesson=Math.max(0,lesson-1);school();}
 else if(a==='escuelita-practica'){modal.close();role='practice';nivel='facil';almacen.set('mesa-nivel',nivel);unlockSound(true);startPractice();}
 else if(a==='school')school();else if(a==='settings')settings();else if(a==='idioma')cambiarIdioma(idioma()==='es'?'en':'es');else if(a==='house')house();else if(a==='rules')rulesModal();else if(a==='close')modal.close();
 else if(['start','next','newSeries','pass','draw'].includes(a)){modal.close();if(a==='pass'){vibrar(VIBRA.paso);if(role==='player')sonidos.toque();}if(a==='draw'){vibrar(VIBRA.elegir);if(role==='player')sonidos.ficha();}action({type:a});}
 else if(a==='copy')copyLink();else if(a==='watch-link')copyLink(true);
 else if(a==='chat'){chatOpen=!chatOpen;renderCrowd();}
 else if(a==='unmute-all'){muted.clear();almacen.set('mesa-muted','[]');renderCrowd();settings();}
 else if(a==='crowd-mute'){crowdMuted=!crowdMuted;almacen.set('mesa-crowd-muted',crowdMuted?'yes':'no');renderCrowd();}
 else if(a==='camera'){cameraIndex=(cameraIndex+1)%4;world?.setCamera(['table','overhead','close','seat'][cameraIndex]);toast([t('vistaMesa'),t('vistaTablero'),t('vistaCerca'),t('vistaSilla')][cameraIndex]);}
 else if(a==='fullscreen'){if(document.fullscreenElement)document.exitFullscreen();else document.documentElement.requestFullscreen?.().catch(()=>toast(t('noPantallaCompleta')));}
 else if(a==='profile')showProfile();
 else if(a==='cuenta-crear'){authMode='signup';showAuth(t('conCuentaGratis',{n:mesaInfo?.gratis||3}));}
 else if(a==='cuenta-entrar'){authMode='login';showAuth(t('conCuentaGratis',{n:mesaInfo?.gratis||3}));}
 else if(a==='desbloquear')desbloquear();
 else if(a==='lista'||a==='liga')listaModal(['fin_practica','portada'].includes(b.dataset.origen)?b.dataset.origen:'fin_serie',a==='liga'?'liga':'linea');
 else if(a==='lista-no'){almacen.set('mesa-lista','no');modal.close();if(page==='room'&&view)renderRoom();}
 else if(a==='logout'){try{await api('logout',{});profile=null;toast(t('sesionCerrada'));authMode='login';showAuth();}catch(err){toast(err.message);}}
 else if(a==='music'){musicMuted=!musicMuted;music.muted=musicMuted;if(!musicMuted)music.play().catch(()=>{});settings();}
 else if(a==='reveal')reveal();
 else if(a==='replay'&&view.replay){const blob=new Blob([JSON.stringify({...view.replay,names:view.names,settings:view.settings},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=`mesa-mano-${view.handNo}.json`;link.click();setTimeout(()=>URL.revokeObjectURL(url),5000);}
});
document.addEventListener('submit',async e=>{
 const f=e.target;if(!['join-form','link-form','house-form','chat-form','auth-form','profile-form','lista-form'].includes(f.id))return;e.preventDefault();const data=new FormData(f);
 if(f.id==='join-form'){const name=String(data.get('name')).trim();if(!name)return;almacen.set('mesa-name',name);unlockSound();telemetria.evento(role==='spectator'?'espectador_entro':'telefono_entro');connect(name);}
 else if(f.id==='link-form'){const bruto=String(data.get('code')||'').trim();let r=null,papel='player';
  // Cuatro letras es lo normal; también vale un enlace pegado entero.
  const letras=bruto.replace(/[^A-Za-z]/g,'');
  if(/^[A-Za-z]{4}$/.test(bruto)||(!bruto.includes('/')&&letras.length===4))r=letras.toUpperCase();
  else{try{const url=new URL(bruto,location.origin),q2=url.searchParams.get('room');if(q2){r=normSala(q2);papel=url.searchParams.get('role')==='spectator'?'spectator':'player';}}catch{}}
  if(!r||!/^[A-Za-z0-9_-]{1,64}$/.test(r)){toast(t('cuatroLetras'));vibrar(VIBRA.error);return;}
  disconnect();view=null;practice=null;room=r;role=papel;history.pushState({},'',`?room=${room}&role=${role}`);modal.close();joinScreen();}
 else if(f.id==='lista-form'){const b=f.querySelector('button');b.disabled=true;$('#lista-error').textContent='';const origen=f.dataset.origen,cual=f.dataset.lista==='liga'?'liga':'linea';
  try{await api('lista',{email:String(data.get('email')||'').trim(),lang:idioma(),source:origen,lista:cual});almacen.set(cual==='liga'?'mesa-liga':'mesa-lista','si');telemetria.evento('lista',{paso:'enviada',origen,cual});modal.close();toast(cual==='liga'?t('ligaListo'):t('listaListo'));if(page==='room'&&view)renderRoom();else if(page==='home')home();}
  catch(err){$('#lista-error').textContent=err.message;b.disabled=false;}}
 else if(f.id==='house-form'){action({type:'settings',settings:{target:Number(data.get('target')),capicua:Number(data.get('capicua')),tie:data.get('tie'),allPips:data.has('allPips'),capicuaDistinct:data.has('capicuaDistinct'),...(f.querySelector('[name="pozo"]')?{pozo:data.has('pozo')}:{})}});modal.close();}
 else if(f.id==='chat-form'){const text=String(data.get('message')).trim();if(text){wire({type:'chat',text});$('#chat-text').value='';}}
 else if(f.id==='auth-form'||f.id==='profile-form'){
  const b=f.querySelector('button[type="submit"],button');b.disabled=true;$('#account-error').textContent='';try{
   const payload=f.id==='auth-form'?{username:data.get('username'),password:data.get('password'),name:data.get('name')}:{name:data.get('name'),country:data.get('country'),ageBand:data.get('ageBand'),avatar:profile.avatar};
   profile=(await api(f.id==='auth-form'?authMode:'profile',payload)).profile;almacen.set('mesa-name',profile.name);
   if(f.id==='auth-form'&&authMode==='signup')telemetria.evento('cuenta_creada',{enMesa:page==='room'?1:0});
   if(f.id==='auth-form'&&page==='room'&&room&&!practice){
    // Sentado en una mesa: se reconecta para que el cuarto sepa de la cuenta, y de vuelta a la mesa.
    await cargarPagos();modal.close();conexion.intentos=0;connect();toast(t('perfilListo'));
   }else{await showProfile();toast(f.id==='auth-form'?t('perfilListo'):t('perfilGuardado'));}
  }catch(error){$('#account-error').textContent=error.message;b.disabled=false;}
 }
});
document.addEventListener('input',e=>{if(e.target.classList?.contains('code-input')){const v=e.target.value.replace(/[^A-Za-z]/g,'').toUpperCase();if(!e.target.value.includes('/')&&v.length<=4)e.target.value=v;}});
document.addEventListener('change',e=>{
 if(e.target.id==='bot-voice-setting'){botChatter.setEnabled(e.target.checked);if(e.target.checked)unlockSound();}
 if(e.target.id==='sound-setting'){sound=e.target.checked;sonidos.activo=sound;almacen.set('mesa-sound',sound?'on':'off');if(sound)unlockSound();chipSonido();}
 if(e.target.id==='radio-setting'){radio.set(e.target.checked);if(e.target.checked)unlockSound();}
 if(e.target.id==='ambient-setting'){ambientOn=e.target.checked;almacen.set('mesa-ambience',ambientOn?'on':'off');if(ambientOn)unlockSound();else ambience.pause();}
 if(e.target.id==='motion-setting'){document.documentElement.classList.toggle('reduced',e.target.checked);almacen.set('mesa-motion',e.target.checked?'off':'on');}
 if(e.target.id==='quality-setting'){almacen.set('mesa-calidad',e.target.value);world?.quality(e.target.value);}
 if(e.target.id==='idioma-setting')cambiarIdioma(e.target.value);
 if(e.target.id==='music-file'&&e.target.files[0]){radio.stop();if(music){music.pause();URL.revokeObjectURL(music.src);}music=new Audio(URL.createObjectURL(e.target.files[0]));music.volume=.18;music.loop=true;musicMuted=false;music.play().catch(()=>{});settings();}
});
modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close();}});
document.addEventListener('visibilitychange',()=>{
 if(ws?.readyState===1)wire({type:document.hidden?'away':'heartbeat'},true);
 if(!document.hidden){pedirWakeLock();
  // Al volver: si la conexión se murió mientras el teléfono dormía, se reconecta ya, sin esperar.
  if(page==='room'&&room&&!practice&&(!ws||ws.readyState>1)){conexion.intentos=0;connect();}
  if(ambientOn&&role!=='player'&&!sonidos.suspendido)ambience.play().catch(()=>{});if(!sonidos.suspendido)radio.start();}});
addEventListener('online',()=>{if(page==='room'&&room&&!practice&&!connected){conexion.intentos=0;connect();}});
// Atajos en la tele: C cambia la cámara, F pantalla completa, Enter reparte la siguiente.
document.addEventListener('keydown',e=>{if(e.target.closest?.('input,textarea,select')||modal.open)return;const k=e.key.toLowerCase();
 if(k==='c'&&page==='room'&&role!=='player')$('[data-action="camera"]')?.click();
 else if(k==='f')$('[data-action="fullscreen"]')?.click();
 else if(k==='enter'&&page==='room'&&view&&['handEnd','seriesEnd'].includes(view.phase)&&(view.canDeal??(view.isHost||view.seat>=0)))action({type:view.phase==='seriesEnd'?'newSeries':'next'});});
// En la tele los botones se esconden solos si nadie toca nada: la mesa se ve limpia.
let quieto=null;const despierta=()=>{document.body.classList.remove('quieto');clearTimeout(quieto);if(!esTelefono)quieto=setTimeout(()=>{if(page==='room'&&role!=='player'&&!modal.open)document.body.classList.add('quieto');},4500);};
for(const ev of ['pointermove','pointerdown','keydown'])addEventListener(ev,despierta,{passive:true});
// El botón atrás del teléfono no te saca de la mesa sin preguntar.
window.addEventListener('popstate',()=>{if(page==='room'&&role==='player'&&view?.seat>=0&&!confirm(t('salirSeguro'))){history.pushState({},'',location.href);return;}location.reload();});

/* ── Splash del estudio ───────────────────────────────────────────────────── */
/* Three Thirteen Studios: menos de 4 s, a pantalla completa sobre carbón, y se salta
   con cualquier tecla o toque pasado el primer medio segundo. Con sonido si el
   navegador lo deja; si no, mudo. Si el video no arranca, no se espera por él.
   index.html decide (en <head>) si toca, para que no haya un cuadro de otro color. */
function splash(){
 const caja=$('#splash'),html=document.documentElement;if(!caja||!html.classList.contains('con-splash')){caja?.remove();html.classList.remove('con-splash');return;}
 try{sessionStorage.setItem('mesa-splash','1');}catch{}
 const v=document.createElement('video');v.src='/marca/three-thirteen-splash.mp4';v.playsInline=true;v.setAttribute('playsinline','');v.preload='auto';caja.appendChild(v);
 const t0=performance.now();let hecho=false;
 const cerrar=()=>{if(hecho)return;hecho=true;removeEventListener('pointerdown',saltar,true);removeEventListener('keydown',saltar,true);
  caja.classList.add('activo','fuera');html.classList.remove('con-splash');soltarLogo();setTimeout(()=>{v.pause();caja.remove();},500);};
 const saltar=e=>{if(performance.now()-t0<500)return;e.preventDefault();e.stopPropagation();cerrar();};
 addEventListener('pointerdown',saltar,true);addEventListener('keydown',saltar,true);
 v.addEventListener('ended',cerrar);v.addEventListener('error',cerrar);
 setTimeout(()=>{if(!hecho&&(v.paused||v.currentTime===0))cerrar();},2000);   // no cargó: a la portada
 setTimeout(cerrar,4300);                                                      // tope, pase lo que pase
 v.muted=false;v.play().catch(()=>{v.muted=true;v.play().catch(cerrar);});
}
splash();

/* ── Arranque ─────────────────────────────────────────────────────────────── */
if(almacen.get('mesa-motion')==='off')document.documentElement.classList.add('reduced');
if(room&&/^[A-Za-z0-9_-]{1,64}$/.test(room)){if(role==='host'||almacen.get('mesa-seat-'+room+'-'+role))connect();else joinScreen();}
else if(q.has('practice')){const p=practicaGuardada();if(p){practice=p;role='practice';page='room';lastHand=p.handNo;receive(rules.viewFor(practice,'local'));scheduleBot();}else startPractice();}
else home();
loadProfile();
if(!esTelefono)radio.cargar();
if('serviceWorker' in navigator)navigator.serviceWorker.register('/sw.js').catch(()=>{});
