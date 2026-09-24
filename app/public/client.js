import * as rules from './rules.js';
import QRCode from './qr.js';
import {botThinkingMs} from './bot-rhythm.js';
import {botChatter} from './bot-chatter.js';
import {ambiente} from './ambiente.js';
import {chooseMove} from './bot.js';
import {proximityVoice} from './proximity-voice.js';
import {t,idioma,ponerIdioma,LECCIONES} from './textos.js';
import {sonidos,vibrar,VIBRA} from './sonidos.js';
import {telemetria} from './telemetria.js';
// El mismo reloj de pensar que usa el servidor: la voz sabe cuánto le queda al bot.
botChatter.pensar=botThinkingMs;

/* ── Utilidades ───────────────────────────────────────────────────────────── */
const $=s=>document.querySelector(s),app=$('#app'),modal=$('#modal');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// localStorage puede no existir (Safari con cookies bloqueadas, navegadores dentro de apps): nunca debe tumbar la página.
const almacen={get(k,d=null){try{const v=localStorage.getItem(k);return v===null?d:v;}catch{return d;}},set(k,v){try{localStorage.setItem(k,v);}catch{}},del(k){try{localStorage.removeItem(k);}catch{}},json(k,d){try{const v=JSON.parse(localStorage.getItem(k)||'null');return v??d;}catch{return d;}}};
const paths={screen:'M3 4h18v12H3z M8 21h8 M12 16v5',phone:'M7 2h10v20H7z M11 18h2',people:'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M18 8a3 3 0 0 1 0 6 M22 21v-2a4 4 0 0 0-3-4',settings:'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M12 2v3 M12 19v3 M2 12h3 M19 12h3 M5 5l2 2 M17 17l2 2 M5 19l2-2 M17 7l2-2',book:'M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1z M12 5v15',arrow:'M4 12h16 M14 6l6 6-6 6',lock:'M6 10h12v11H6z M8 10V6a4 4 0 0 1 8 0v4',copy:'M8 8h13v13H8z M16 8V3H3v13h5',expand:'M8 3H3v5 M16 3h5v5 M3 16v5h5 M21 16v5h-5',user:'M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M4 21v-3a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v3',camera:'M3 7h4l2-3h6l2 3h4v14H3z M12 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8',chat:'M3 3h18v14H9l-6 4z M7 8h10 M7 12h7',sound:'M11 4 5 9H2v6h3l6 5z M15 8a6 6 0 0 1 0 8 M18 4a11 11 0 0 1 0 16',exit:'M15 3h5v18h-5 M10 17l5-5-5-5 M15 12H3'};
const icon=n=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[n]||paths.arrow}"/></svg>`;
const logo=`<svg viewBox="0 0 25 40" aria-hidden="true"><rect x="2" y="1" width="21" height="38" rx="4" fill="currentColor"/><path d="M5 20h15" stroke="#1a1426" stroke-width=".7"/><g fill="#1a1426"><circle cx="8" cy="9" r="1.5"/><circle cx="17" cy="15" r="1.5"/><circle cx="8" cy="26" r="1.5"/><circle cx="17" cy="26" r="1.5"/><circle cx="8" cy="33" r="1.5"/><circle cx="17" cy="33" r="1.5"/></g></svg>`;
const pipPositions=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];
const half=n=>`<span class="half">${Array.from({length:9},(_,i)=>`<i class="pip ${pipPositions[n]?.includes(i)?'':'blank'}"></i>`).join('')}</span>`;
const tile=(a,b)=>`<span class="tile" role="img" aria-label="${a}–${b}">${half(a)}${half(b)}<i class="clavo"></i></span>`;
const button=(label,action,type='',ico='')=>`<button class="g-button ${type}" data-action="${action}">${ico?icon(ico):''}${label}</button>`;
const BOTS=[0,1,2,3].map(i=>t('bot'+i));
const corto=n=>String(n||'').replace(/^(Don|Doña|Tío|Tía)\s+/i,'').split(/\s+/)[0];
const nombreDe=i=>view?.bots?.[i]&&view.phase==='lobby'?t('bot'+i):view?.names?.[i]||'';
const parejaDe=team=>`${esc(corto(nombreDe(team)))} ${idioma()==='en'?'&amp;':'y'} ${esc(corto(nombreDe(team+2)))}`;
const esTelefono=matchMedia('(pointer:coarse)').matches&&Math.max(innerWidth,innerHeight)<950;
// Los navegadores de las teles (Samsung, LG, Fire TV, Chromecast, Sony, Hisense…) arrancan livianos.
const esTele=/SMART-TV|SmartTV|Tizen|Web0S|webOS|NetCast|AFT[A-Z]|CrKey|BRAVIA|Android TV|GoogleTV|HbbTV|VIDAA|Roku/i.test(navigator.userAgent);

/* ── Estado ───────────────────────────────────────────────────────────────── */
let page='home',view=null,room='',role='host',ws=null,practice=null,selected=null,lesson=0,connected=false,botTimer=null,toastTimer=null,lastEvent='',lastHand=0,world=null,worldPromise=null,profile=null,chatOpen=false,crowd={count:0,chat:[],viewers:[],muted:[],featured:false},lastBubble='',cameraIndex=0,lastMode='',authMode='login';
let sound=almacen.get('mesa-sound')!=='off',ambientOn=almacen.get('mesa-ambience')!=='off',music=null,musicMuted=false,pendiente=false,pendienteTimer=null,wakeLock=null,vozDisponible=false,turnoVisto='',ultimoMensaje=0,finVisto={k:'',t:0},revelado=null,movsVistos='';
const conexion={gen:0,timer:null,intentos:0,nombre:''};
// El desbloqueo: lo que dice el cuarto (mesaInfo) y lo que tiene mi cuenta (pagosCfg.cuenta).
let mesaInfo=null,pagosCfg=null,precioLocal='',bloqueoVisto='';
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
 async start(){if(!this.on||role==='player'||music||(this.audio&&!this.audio.paused))return;await this.cargar();if(!this.lista?.length)return;if(this.audio&&this.audio.paused&&this.audio.currentTime>0&&!this.audio.ended){this.audio.play().catch(()=>{});return;}this.siguiente();},
 siguiente(){clearTimeout(this.timer);const f=this.lista[this.i++%this.lista.length],a=new Audio('/audio/musica/'+encodeURIComponent(f));this.audio?.pause();this.audio=a;a.volume=this.base;a.play().catch(()=>{});a.onended=()=>{this.timer=setTimeout(()=>{if(this.on&&this.audio===a)this.siguiente();},3000+Math.random()*9000);};},
 duck(abajo){if(this.audio)this.audio.volume=abajo?this.base*.35:this.base;},
 stop(){clearTimeout(this.timer);this.audio?.pause();},
 set(v){this.on=v;almacen.set('mesa-radio',v?'on':'off');if(v)this.start();else this.stop();}};
addEventListener('mesa:botvoice',e=>radio.duck(!!e.detail?.active));
const ambience={play(){const c=sonidos.abrir();if(!c)return Promise.resolve();return c.resume().then(()=>ambiente.start(c));},pause(){ambiente.stop();}};
function unlockSound(){const c=sonidos.abrir();if(c&&!botChatter.context)botChatter.context=c;botChatter.unlock();if(ambientOn&&role!=='player'&&page!=='home'||ambientOn&&role!=='player'&&!esTelefono)ambience.play().catch(()=>{});radio.start();chipSonido();}
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
function jugadaBot(v){if(!v.legal.length)return {type:'pass'};return Math.random()<NIVELES[nivel].ruido?masPesada(v):chooseMove(v);}
function practicaGuardada(){const p=almacen.json('mesa-practice',null);return p&&p.phase&&p.phase!=='lobby'?p:null;}
function startPractice(){disconnect();role='practice';room='';view=null;lastHand=0;lastEvent='';crowd={count:0,chat:[],viewers:[],muted:[],featured:false};history.pushState({},'','?practice=1');page='room';practice=rules.setup(['local']);practice.hostId='local';practice.names=[profile?.name||t('tu'),BOTS[1],BOTS[2],BOTS[3]];practice.seed=crypto.getRandomValues(new Uint32Array(1))[0];telemetria.evento('practica',{nivel});action({type:'start'});}
function seguirPractica(){const p=practicaGuardada();if(!p){startPractice();return;}telemetria.evento('practica',{nivel,sigue:1});disconnect();practice=p;role='practice';room='';view=null;lastHand=p.handNo;page='room';history.pushState({},'','?practice=1');receive(rules.viewFor(practice,'local'));scheduleBot();}
function scheduleBot(){clearTimeout(botTimer);if(!practice||page!=='room')return;
 if(practice.phase!=='playing'||practice.turn===0)return;
 const v0=rules.viewFor(practice,practice.players[practice.turn]),pasa=!v0.legal.length;
 botTimer=setTimeout(()=>{if(!practice||practice.phase!=='playing'||page!=='room')return;const id=practice.players[practice.turn],v=rules.viewFor(practice,id);practice=rules.applyAction(practice,id,jugadaBot(v));almacen.set('mesa-practice',JSON.stringify(practice));receive(rules.viewFor(practice,'local'));scheduleBot();},
  // Un pase obligado no se piensa: un segundo y ya.
  pasa?1100:Math.max(practice.moves.length===0?4200:0,botThinkingMs(practice.handNo,practice.moves.length,practice.turn)));}

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
 s.onopen=()=>{if(gen!==conexion.gen)return;ultimoMensaje=Date.now();s.send(JSON.stringify({type:'join',role,token:token(),name:name||profile?.name||almacen.get('mesa-name','')}));pedirWakeLock();};
 s.onmessage=e=>{if(gen!==conexion.gen)return;ultimoMensaje=Date.now();if(e.data==='__pong')return;let m;try{m=JSON.parse(e.data);}catch{return;}
  if(m.type==='error'){soltarPendiente();toast(m.error);if(!view)joinScreen(m.error);return;}
  if(m.type==='state'){const antes=connected;connected=true;conexion.intentos=0;soltarPendiente();crowd=m.crowd||crowd;mesaInfo=m.mesa||null;receive(m.view,m.presence);if(!antes)marcarConexion();}};
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
 if(practice){const check=rules.validateAction(practice,'local',a);if(!check.ok){vibrar(VIBRA.error);return toast(check.error);}practice=rules.applyAction(practice,'local',a);almacen.set('mesa-practice',JSON.stringify(practice));receive(rules.viewFor(practice,'local'));scheduleBot();return;}
 if(pendiente)return;if(!wire({type:'action',action:a}))return;pendiente=true;document.body.classList.add('pendiente');clearTimeout(pendienteTimer);pendienteTimer=setTimeout(soltarPendiente,4000);}
async function pedirWakeLock(){try{if('wakeLock' in navigator&&!wakeLock&&!document.hidden){wakeLock=await navigator.wakeLock.request('screen');wakeLock.addEventListener?.('release',()=>{wakeLock=null;});}}catch{}}
function liberarWakeLock(){try{wakeLock?.release();}catch{}wakeLock=null;}
fetch('/api/voice-config').then(r=>r.ok?r.json():{}).then(c=>{vozDisponible=!!c.available;}).catch(()=>{});

/* ── Mundo 3D ─────────────────────────────────────────────────────────────── */
async function ensureWorld(mode='game'){
 document.body.classList.remove('phone-mode');let container=$('#world');if(!container){container=document.createElement('div');container.id='world';document.body.prepend(container);}
 if(!worldPromise)worldPromise=import('/scene.js?v=noche1').then(m=>m.createWorld(container,{onProgress:(_,f)=>{const el=$('#scene-loading');if(el){const n=Math.round(f*4);el.textContent=f>=1?t('listo'):n?t('sentados',{n}):t('abriendo');el.classList.toggle('ready',f===1);}}})).then(w=>{world=w;world.setMode(lastMode||mode);const cal=almacen.get('mesa-calidad')||(esTele?'low':'');if(cal)world.quality(cal);
  // Una muestra de cómo corre la escena en esta tele, al minuto.
  setTimeout(()=>{const d=window.mesaDiagnostics;if(d&&role!=='player')telemetria.evento('fps',{fps:d.fps,calidad:d.quality,llamadas:d.drawCalls});},60000);world.update(page==='home'?null:view,page==='home'?0:crowd.count);return w;}).catch(e=>{console.error(e);telemetria.error(e,'escena');container.innerHTML=`<div class="loading-error">${esc(e.message)}</div>`;});
 world?.resume?.();
 if(lastMode!==mode){lastMode=mode;cameraIndex=0;world?.setMode(mode);}if(world)world.update(page==='home'?null:view,page==='home'?0:crowd.count);
}
addEventListener('mesa:calidad',e=>{almacen.set('mesa-calidad',e.detail);if(e.detail!=='high')telemetria.evento('calidad_baja',{fps:window.mesaDiagnostics?.fps??0,nivel:e.detail});});
// De mando, el teléfono no dibuja la mesa: la tele ya lo hace, y así no se calienta ni gasta batería.
function hideWorld(){document.body.classList.add('phone-mode');world?.pause?.();ambience.pause();radio.stop();}

/* ── Portada ──────────────────────────────────────────────────────────────── */
const brand=()=>`<button class="game-brand" data-action="home" aria-label="Mesa">${logo}<span class="neon">mesa</span></button>`;
function tools(){return `<div class="game-tools">${button('<span class="tool-label">'+(profile?esc(profile.name):t('miPerfil'))+'</span>','profile','','user')}${button('<span class="tool-label">'+t('ajustes')+'</span>','settings','','settings')}${esTelefono?'':button('','fullscreen','','expand')}</div>`;}
function home(){disconnect();page='home';view=null;practice=null;revelado=null;etiquetas();
 if(esTelefono)hideWorld();else{ensureWorld('attract');world?.update(null,0);}
 const sigue=practicaGuardada();
 app.innerHTML=`<div class="game-shell portada ${esTelefono?'sin-3d':''}"><div class="home-shade"></div>${esTelefono?`<div class="arte-fichas" aria-hidden="true">${tile(6,6)}${tile(5,3)}${tile(1,4)}</div>`:''}<header class="game-top"><div class="game-top-left">${brand()}<span class="location-tag">${t('ubicacion')}</span></div>${tools()}</header>
  <main class="title-screen"><div class="eyebrow">${t('subtitulo')}</div><h1><span>${t('titulo1')}</span><span>${t('titulo2')}</span></h1><p>${t('lema')}</p>
  <div class="title-actions">${esTelefono?button(t('entrarCodigo'),'join','primary','phone'):button(t('abrirMesa'),'host','primary','screen')}${sigue?button(t('seguirPractica'),'continuar','','people'):''}${button(t('practica'),'practice','','people')}${esTelefono?button(t('abrirMesa'),'host','','screen'):button(t('entrarCodigo'),'join','','phone')}</div>
  <div class="title-secondary"><button data-action="school">${t('escuelita')} ↗</button></div></main>
  ${esTelefono?'':`<div id="scene-loading" class="load-status ${world?'ready':''}">${world?t('listo'):t('abriendo')}</div>`}<footer class="game-bottom"><span class="corner-copy">${t('lema2')}</span>${legales()}</footer></div>`;telemetria.evento('portada');}

const legales=()=>{const l=idioma()==='en'?'?lang=en':'';return `<nav class="legales"><a href="/precios.html${l}">${t('precios')}</a><a href="/legal/terminos.html${l}">${t('terminos')}</a><a href="/legal/privacidad.html${l}">${t('privacidad')}</a></nav>`;};

/* ── Recibir estado ───────────────────────────────────────────────────────── */
function receive(v,presence=[]){
 const antes=view;
 if(page==='room'){botChatter.update(v,role,crowd);if(room&&!practice&&vozDisponible)proximityVoice.session({room,role,token:token(),seat:v.seat,crowd});}
 const key=`${v.handNo}-${v.moves.length}-${v.phase}-${v.turn}-${v.scores.join(',')}-${v.names.join('|')}-${v.bots.join('')}-${JSON.stringify(v.settings)}-${presence.join('')}-${v.isHost}-${JSON.stringify(mesaInfo)}-${JSON.stringify(pagosCfg?.cuenta||null)}`,changed=key!==lastEvent;
 view=v;view.presence=presence;if(selected&&!v.legal.some(o=>o.tile===selected))selected=null;
 // Sonidos de la mesa (en la tele). La ficha suena al aterrizar (evento de la escena); aquí va lo demás.
 const mv=`${v.handNo}:${v.moves.length}`;
 if(mv!==movsVistos){const u=v.moves[v.moves.length-1];if(movsVistos&&u?.type==='pass'&&role!=='player')sonidos.toque();movsVistos=mv;}
 if(v.handNo!==lastHand&&v.phase==='playing'){lastHand=v.handNo;if(role!=='player')sonidos.barajar();if(role==='host'||role==='practice')telemetria.evento('reparto',{mano:v.handNo});}
 if(role==='host'&&mesaInfo?.bloqueo&&mesaInfo.bloqueo!==bloqueoVisto)telemetria.evento('bloqueo',{motivo:mesaInfo.bloqueo});bloqueoVisto=mesaInfo?.bloqueo||'';
 if(role!=='player'&&antes&&v.phase==='lobby'&&v.bots.filter(b=>!b).length>antes.bots.filter(b=>!b).length)sonidos.llegada();
 // En el teléfono: cuando pasa a ser tu turno, vibra, suena y la pantalla lo dice en grande.
 if(v.seat>=0&&v.phase==='playing'){const k=`${v.handNo}:${v.moves.length}`;if(v.turn===v.seat&&turnoVisto!==k&&(!antes||antes.turn!==v.seat||antes.handNo!==v.handNo)){turnoVisto=k;vibrar(VIBRA.turno);if(role==='player')sonidos.turno();document.body.classList.remove('te-toca');void document.body.offsetWidth;document.body.classList.add('te-toca');}}
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
function lobbyPanel(){const llenos=view.bots.filter(b=>!b).length;return `<aside class="cartel">${avisoPago()}<div class="eyebrow">${t('mandaleCodigo')}</div><h2>${t('arrimaSilla')}</h2><div class="cartel-cuerpo"><div id="qr" class="qr" aria-label="QR"></div><div><div class="table-code">${esc(room)}</div><p>${t('escaneaTelefono')}</p><button class="text-link" data-action="copy">${icon('copy')} ${t('copiarEnlace')}</button></div></div>
 <div class="sillas">${view.names.map((n,i)=>`<div class="silla pareja-${i%2?'b':'a'} ${view.bots[i]?'libre':'llego'}"><span class="num">${i+1}</span><span>${view.bots[i]?t('sillaLibre',{bot:esc(BOTS[i])}):esc(n)}</span><small>${t('pareja',{x:i%2?'B':'A'})}</small></div>`).join('')}</div>
 ${button(llenos<4?t('repartirConBots'):t('repartir'),'start','primary full')}${button(t('reglasCasa'),'house','full')}<p class="start-caption">${t('tuCompaneroEnfrente')}</p>${mesaInfo?.pagos&&!mesaInfo.bloqueo?`<p class="gratis-nota">${t('gratisNota',{n:mesaInfo.gratis,precio:precio()})}</p>`:''}</aside>`;}
function endCard(){if(!['handEnd','seriesEnd'].includes(view.phase))return '';const r=view.result,falta=espera(),serie=view.phase==='seriesEnd';
 const sello=r.zapato?t('zapato'):r.type==='capicua'?t('capicua'):r.type==='tranque'?t('tranque'):t('domino');
 const quien=r.team===null?t('empate'):serie?t('ganaron',{a:esc(corto(nombreDe(r.team))),b:esc(corto(nombreDe(r.team+2)))}):t('ganan',{a:esc(corto(nombreDe(r.team))),b:esc(corto(nombreDe(r.team+2)))});
 const puedeRepartir=view.canDeal??(view.isHost||view.seat>=0);
 return `<section class="resultado pareja-${r.team===1?'b':r.team===0?'a':'n'}" style="animation-delay:${falta.toFixed(2)}s"><div class="eyebrow">${serie?t('serieCompleta'):t('manoCerrada',{n:view.handNo})}</div><h2 class="sello">${sello}</h2><p class="quien">${quien}</p>${r.team!=null?`<div class="points">${t('puntos',{n:r.points})}</div><p class="detalle">${r.bonus?t('pipsCapicua',{n:r.base,c:r.bonus}):t('pipsDetalle',{n:r.base})}</p>`:''}${!serie&&view.opener!=null?`<p class="sale">${t('sale',{nombre:esc(nombreDe(view.opener))})}</p>`:''}
 ${serie?avisoPago():''}<div class="acciones">${puedeRepartir?button(serie?t('otraSerie'):t('repartirOtra'),serie?'newSeries':'next','primary'):`<p>${t('esperandoReparto')}</p>`}${button(t('verManos'),'reveal')}</div></section>`;}
function renderRoom(){page='room';if(role==='player'&&view.seat>=0){renderPhone();return;}ensureWorld('game');world?.update(view,crowd.count);
 const talkDraft=$('#chat-text')?.value||'',focus=document.activeElement?.id==='chat-text',jugando=view.phase==='playing';
 const habia=['.pizarra','.cartel','.game-hand-dock'].filter(c=>$(c)),kFin=view.handNo+':'+view.phase,kTurno=jugando?view.handNo+':'+view.turn:'',falta=espera();
 app.innerHTML=`<div id="room-root" class="game-shell mesa-tv"><header class="game-top"><div class="game-top-left">${brand()}<div class="hand-mark">${practice?t('practicaEtq'):view.phase==='lobby'?t('tuMesa'):t('mano',{n:String(view.handNo).padStart(2,'0')})}<span class="connection ${connected||practice?'':'off'}">${practice?t('sinPresion'):connected?t('conectado'):t('reconectando')}</span></div></div>${view.phase!=='lobby'?marcador():''}<div class="game-tools">${button('<span class="tool-label">'+t('camara')+'</span>','camera','','camera')}${button('','school','','book')}${button('','settings','','settings')}${esTelefono?'':button('','fullscreen','','expand')}</div></header>
  ${view.isHost&&view.phase==='lobby'&&!practice?lobbyPanel():''}${endCard()}
  ${view.seat>=0&&jugando?`<div class="game-hand-dock">${handPanel()}</div>`:jugando?`<div class="turno-banner pareja-${view.turn%2?'b':'a'}">${turnoTexto()}</div>`:view.phase==='lobby'&&!view.isHost?`<div class="scene-help">${t('haySillaParaTodos')}</div>`:''}
  <div id="crowd-ui"></div><div id="scene-loading" class="load-status ${world?'ready':''}">${world?t('listo'):t('abriendo')}</div>
  <div class="game-bottom">${practice?`<span class="niveles">${Object.keys(NIVELES).map(k=>`<button data-nivel="${k}" class="${nivel===k?'elegido':''}">${t('nivel_'+k)}</button>`).join('')}</span>`:patrocinioTexto()}</div></div>`;
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
 view.names.forEach((n,i)=>{let el=capa.querySelector(`[data-seatlabel="${i}"]`);if(!el){el=document.createElement('div');el.dataset.seatlabel=i;el.style.visibility='hidden';capa.appendChild(el);}
  const humano=!view.bots[i],presente=!humano||view.presence?.[i]!==false;
  for(const [c,on] of [['seat-label',1],['pair-a',i%2===0],['pair-b',i%2===1],['active',view.phase==='playing'&&i===view.turn],['dormido',!presente&&view.phase!=='lobby']])el.classList.toggle(c,!!on);
  const html=`<span class="nombre">${esc(nombreDe(i))}</span><small>${t('pareja',{x:i%2?'B':'A'})}${view.bots[i]?' · BOT':''}${view.phase==='playing'?` · ${view.counts[i]}`:''}</small>${view.result?.pips&&['handEnd','seriesEnd'].includes(view.phase)?`<b class="pips">${view.result.pips[i]}</b>`:''}`;if(el.dataset.html!==html){el.innerHTML=html;el.dataset.html=html;}});}

/* ── La mano (teléfono y dock de práctica) ────────────────────────────────── */
const ordenar=h=>[...h].sort((x,y)=>(Math.max(y.a,y.b)-Math.max(x.a,x.b))||(Math.min(y.a,y.b)-Math.min(x.a,x.b)));
function puntas(){if(!view.chain.length)return '';return `<div class="puntas"><span class="punta izq" title="${view.left}">${half(view.left)}</span><span class="linea"></span><span class="punta der" title="${view.right}">${half(view.right)}</span></div>`;}
function handPanel(){if(view.seat<0||view.phase!=='playing')return '';const miTurno=view.turn===view.seat;
 const opciones=selected?view.legal.filter(o=>o.tile===selected):[];
 let acciones;
 if(selected&&opciones.length>1)acciones=`<p class="pregunta">${t('porCual')}</p><div class="lados">${opciones.map(o=>`<button class="lado ${o.side==='left'?'izq':'der'}" data-play="${o.side}">${half(o.side==='left'?view.left:view.right)}<span>${o.side==='left'?'◀':'▶'}</span></button>`).join('')}</div>`;
 else if(view.canPass)acciones=`<button class="g-button primary paso" data-action="pass">${t('paso')}</button><p class="nota">${view.left===view.right?t('noLlevasUno',{a:view.left}):t('noLlevas',{a:view.left,b:view.right})}</p>`;
 else acciones=miTurno?`<p class="nota">${t('tocaFicha')}</p>`:'';
 return `<section class="hand-panel ${miTurno?'mi-turno':''}"><div class="hand-heading"><h3>${miTurno?t('teToca'):turnoTexto()}</h3>${puntas()}</div><div class="hand-tiles">${ordenar(view.hand).map(x=>{const pega=view.legal.some(o=>o.tile===x.id);return `<button class="tile-button ${miTurno?(pega?'pega':'no-pega'):''} ${selected===x.id?'selected':''}" data-tile="${x.id}" aria-label="${x.a}–${x.b}">${tile(x.a,x.b)}</button>`;}).join('')}</div><div class="hand-actions" aria-live="polite">${acciones}</div></section>`;}
function tocarFicha(id){if(view.turn!==view.seat){vibrar(VIBRA.elegir);return;}const ops=view.legal.filter(o=>o.tile===id);if(!ops.length){vibrar(VIBRA.error);return;}
 // Una sola manera de jugarla (o las dos puntas iguales): se juega de un toque.
 if(ops.length===1||!view.chain.length||view.left===view.right){jugar(id,ops[0].side);return;}
 selected=selected===id?null:id;vibrar(VIBRA.elegir);renderRoom();}
function jugar(id,side){vibrar(VIBRA.jugar);const b=document.querySelector(`[data-tile="${id}"]`);if(b)b.classList.add('lanzada');if(role==='player')sonidos.ficha();selected=null;setTimeout(()=>action({type:'play',tile:id,side}),b?140:0);}
function ultimaJugada(){const u=view.moves[view.moves.length-1];if(!u)return view.opener!=null&&view.phase==='playing'?t('sale3',{nombre:esc(nombreDe(view.opener))}):'';if(u.type==='pass')return t('paso3',{nombre:esc(nombreDe(u.seat))});const [a,b]=String(u.tile).split('-');return t('jugo',{nombre:esc(nombreDe(u.seat)),a,b});}
function renderPhone(){hideWorld();const s=view.seat,mia=s%2,compa=(s+2)%4,jugando=view.phase==='playing';
 const top=`<header class="control-top"><div class="yo"><b>${esc(view.names[s])}</b><span class="pareja pareja-${mia?'b':'a'}">${t('conCompanero',{nombre:esc(corto(nombreDe(compa)))})}</span></div><div class="mini-marcador"><span class="pareja-${mia?'b':'a'}">${t('nosotros')} <b>${view.scores[mia]}</b></span><span class="pareja-${mia?'a':'b'}">${t('ellos')} <b>${view.scores[1-mia]}</b></span></div></header>`;
 let cuerpo;
 if(jugando)cuerpo=`<p class="ultima">${ultimaJugada()}</p>${handPanel()}`;
 else if(view.phase==='lobby')cuerpo=`<div class="phone-wait"><div class="eyebrow">${t('tuSillaLista')}</div><h1>${t('estasEnMesa')}</h1><p>${t('miraArriba')}</p>${cuentaCard()}</div>`;
 else{const r=view.result,gano=r?.team===mia,parejo=r?.team==null;cuerpo=`<div class="phone-wait fin ${parejo?'':gano?'gano':'perdio'}"><div class="eyebrow">${r?.zapato?t('zapato'):r?.type==='capicua'?t('capicua'):r?.type==='tranque'?t('tranque'):t('domino')}</div><h1>${parejo?t('parejo'):gano?t('ganamos'):t('perdimos')}</h1>${!parejo&&gano?`<div class="points">${t('puntos',{n:r.points})}</div>`:''}<p>${r?.pips?t('tusPuntos',{n:r.pips[s]}):''}${view.opener!=null&&view.phase==='handEnd'?'<br>'+t('sale',{nombre:esc(nombreDe(view.opener))}):''}</p>${view.phase==='seriesEnd'?cuentaCard():''}${view.phase!=='playing'?button(view.phase==='seriesEnd'?t('otraSerie'):t('repartirOtra'),view.phase==='seriesEnd'?'newSeries':'next','primary full'):''}</div>`;
  if(r&&finVisto.k!==view.handNo+':'+view.phase){finVisto={k:view.handNo+':'+view.phase,t:performance.now()};if(gano)vibrar(VIBRA.gano);}}
 app.innerHTML=`<main id="room-root" class="phone-only control pareja-${mia?'b':'a'} ${jugando&&view.turn===s?'mi-turno':''}">${top}${cuerpo}<div class="te-toca-flash" aria-hidden="true">${t('teToca')}</div><footer class="phone-bottom"><span class="connection ${connected?'':'off'}">${connected?t('conectado'):t('reconectando')}</span><button data-action="school">${t('unaAyudita')}</button><button data-action="salir">${icon('exit')}</button></footer></main>`;}

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
 root.innerHTML=`<div class="crowd-toggle">${crowd.count||chatOpen?`<button class="g-button" data-action="chat"><span class="crowd-led"></span>${t('mirando',{n:crowd.count})} ${icon('chat')}</button>`:`<button class="g-button solo-icono" data-action="chat" aria-label="Chat">${icon('chat')}</button>`}</div>${chatOpen?`<aside class="crowd-chat"><div class="chat-top"><strong>${t('hablaleMesa')}</strong><button data-action="crowd-mute">${crowdMuted?t('oirPublico'):t('silenciarPublico')}</button></div><div class="chat-messages">${messages.length?messages.map(m=>`<div class="chat-message"><strong>${esc(m.name)}${m.role==='spectator'?t('publico'):''}${m.sender!==crowd.you?`<button data-mute="${esc(m.sender)}">${t('silenciar')}</button>`:''}</strong>${esc(m.text)}</div>`).join(''):`<p class="tiny">${t('diAlgo')}</p>`}</div><form class="chat-form" id="chat-form"><input id="chat-text" name="message" maxlength="180" autocomplete="off" aria-label="Chat" placeholder="${t('dimeAVer')}"><button class="g-button primary" type="submit" aria-label="Enviar">↑</button></form><div style="display:flex;gap:10px;margin-top:10px"><button class="text-link" data-action="watch-link">${t('invitarPublico')} ↗</button></div></aside>`:''}`;
 if($('#chat-text')){$('#chat-text').value=draft;if(focused)$('#chat-text').focus();}const list=$('.chat-messages');if(list)list.scrollTop=list.scrollHeight;
 // Las burbujas van en su propia capa: el siguiente estado ya no las borra antes de tiempo.
 const m=messages[messages.length-1];if(m&&m.id!==lastBubble&&!chatOpen&&Date.now()-m.at<12000){lastBubble=m.id;let capa=$('#burbujas');if(!capa){capa=document.createElement('div');capa.id='burbujas';document.body.appendChild(capa);}const el=document.createElement('div');el.className='chat-bubble';el.innerHTML=`<b>${esc(m.name)} · ${m.role==='spectator'?t('desdePublico'):t('enLaMesa')}</b>${esc(m.text)}`;capa.append(el);setTimeout(()=>el.remove(),6500);}}

/* ── Pantallas de entrar ──────────────────────────────────────────────────── */
function joinScreen(error=''){page='join';if(role==='player'||esTelefono)hideWorld();else ensureWorld('attract');const espectador=role==='spectator';
 app.innerHTML=`<div class="center-screen"><section class="join-screen"><div class="eyebrow">${espectador?t('laEsquinaAbierta'):t('hayUnaSilla')}</div><h1>${espectador?t('veAMirar'):t('bienvenido')}</h1><p>${t('sinCuenta')}</p><form id="join-form"><label class="field">${t('tuNombre')}<input name="name" maxlength="24" autocomplete="given-name" enterkeyhint="go" required value="${esc(profile?.name||almacen.get('mesa-name',''))}" placeholder="${t('comoTeDicen')}"></label><button class="g-button primary full" type="submit">${espectador?t('mirar'):t('sentarme')} ${icon('arrow')}</button><p class="form-error">${esc(error)}</p></form>${espectador?'':`<button class="text-link" data-action="watch">${t('soloMirar')} ↗</button>`}</section></div>`;}
function openModal(title,body){modal.innerHTML=`<div class="modal-top"><h2>${title}</h2><button class="close" data-action="close" aria-label="Cerrar">×</button></div>${body}`;if(!modal.open)modal.showModal();}
function school(){const ls=LECCIONES[idioma()],l=ls[lesson];openModal(t('escuelitaTitulo'),`<div class="school-lessons"><div class="lesson-tabs">${ls.map((x,i)=>`<button class="lesson-tab ${i===lesson?'active':''}" data-lesson="${i}">${i+1}. ${x.tab}</button>`).join('')}</div><h3>${l.title}</h3><p>${l.body}</p><div class="notice">${l.question}</div><div class="hand-tiles">${l.choices.map((c,i)=>c.text?`<button class="g-button full" data-answer="${i}">${c.text}</button>`:`<button class="tile-button" data-answer="${i}" aria-label="${c.a}–${c.b}">${tile(c.a,c.b)}</button>`).join('')}</div><div class="exercise-result" role="status">${t('sinApuesta')}</div><div class="divider"></div><p class="tiny">${role==='player'?t('ayudaTelefono'):t('ayudaMesa')}</p></div>`);}
function settings(){const hayRadio=radio.lista===null||radio.lista.length>0;openModal(t('ponleAmbiente'),`<label class="check"><input id="sound-setting" type="checkbox" ${sound?'checked':''}> ${t('sonidosMesa')}</label><label class="check"><input id="bot-voice-setting" type="checkbox" ${botChatter.enabled?'checked':''}> ${t('vocesBots')}</label><button class="text-link" data-action="bot-voice-demo">${t('oirVoces')} ↗</button><label class="check"><input id="ambient-setting" type="checkbox" ${ambientOn?'checked':''}> ${t('ambienteColmado')}</label>${hayRadio?`<label class="check"><input id="radio-setting" type="checkbox" ${radio.on?'checked':''}> ${t('radioColmado')}</label>`:''}<label class="check"><input id="motion-setting" type="checkbox" ${document.documentElement.classList.contains('reduced')?'checked':''}> ${t('menosMovimiento')}</label>
 <label class="field">${t('calidad')}<select id="quality-setting"><option value="high" ${!['low','min'].includes(almacen.get('mesa-calidad'))?'selected':''}>${t('calidadAlta')}</option><option value="low" ${['low','min'].includes(almacen.get('mesa-calidad'))?'selected':''}>${t('calidadBaja')}</option></select></label>
 <label class="field">${t('idioma')}<select id="idioma-setting"><option value="es" ${idioma()==='es'?'selected':''}>Español</option><option value="en" ${idioma()==='en'?'selected':''}>English</option></select></label>
 <div class="divider"></div><label class="field">${t('tuMusica')}<input id="music-file" type="file" accept="audio/*"></label><p class="account-note">${t('tuMusicaNota')}</p>${music?button(musicMuted?'▶':'■','music'):''}${muted.size?button(t('quitarMutes'),'unmute-all','full'):''}<div class="divider"></div>${button(t('reglasJuego'),'rules','full')}${button(t('miPerfil'),'profile','full')}${button(t('listo2'),'close','primary full')}`);}
function house(){const s=view.settings;openModal(t('tuMesaTusReglas'),`<p class="modal-copy">${t('acuerdenAntes')}</p><form id="house-form"><label class="field">${t('puntosGanar')}<select name="target">${[100,200,300].map(n=>`<option ${s.target===n?'selected':''}>${n}</option>`).join('')}</select></label><label class="field">${t('bonoCapicua')}<select name="capicua">${[0,25,50].map(n=>`<option ${s.capicua===n?'selected':''}>${n}</option>`).join('')}</select></label><label class="field">${t('tranqueParejo')}<select name="tie"><option value="blocker" ${s.tie==='blocker'?'selected':''}>${t('ganaQuienTranco')}</option><option value="none" ${s.tie==='none'?'selected':''}>${t('nadie')}</option></select></label><label class="check"><input name="allPips" type="checkbox" ${s.allPips?'checked':''}> ${t('contarTodas')}</label><label class="check"><input name="capicuaDistinct" type="checkbox" ${s.capicuaDistinct?'checked':''}> ${t('capicuaDistinta')}</label><button class="g-button primary full">${t('ponerReglas')}</button></form>`);}
function rulesModal(){openModal(t('asiSeJuega'),`<p class="modal-copy">${t('reglasIntro')}</p>${[['primeraMano','primeraManoTxt'],['domino','dominoTxt'],['tranque','tranqueTxt'],['capicua','capicuaTxt'],['zapato','zapatoTxt']].map(([a,b])=>`<div class="history-row"><strong>${t(a)}</strong><span>${t(b)}</span></div>`).join('')}<p class="modal-copy" style="margin-top:20px">${t('reglasCierre')}</p>${button(t('volverMesa'),'close','primary full')}`);}
function reveal(){openModal(t('manosAbiertas'),`<div class="reveal-hands">${view.revealed.map((h,i)=>`<div class="reveal-row pareja-${i%2?'b':'a'}"><strong>${esc(nombreDe(i))} · ${view.result.pips[i]}</strong><div>${h.length?ordenar(h).map(x=>tile(x.a,x.b)).join(''):t('sinFichas')}</div></div>`).join('')}</div><div class="divider"></div>${button(t('descargarMano'),'replay','full')}${button(t('volverMesa'),'close','primary full')}`);}

/* ── Cuentas ──────────────────────────────────────────────────────────────── */
async function api(path,input){const r=await fetch('/api/'+path,{method:input?'POST':'GET',credentials:'include',headers:input?{'content-type':'application/json'}:{},body:input?JSON.stringify(input):undefined});let b={};try{b=await r.json();}catch{}if(!r.ok)throw Error(b.error||'Please try again.');return b;}
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
 if(b.dataset.nivel){nivel=b.dataset.nivel;almacen.set('mesa-nivel',nivel);renderRoom();return;}
 if(b.dataset.play){jugar(selected,b.dataset.play);return;}
 if(b.dataset.lesson!==undefined){lesson=Number(b.dataset.lesson);school();return;}
 if(b.dataset.answer!==undefined){const l=LECCIONES[idioma()][lesson],correct=l.choices[Number(b.dataset.answer)].ok;$('.exercise-result').textContent=correct?l.yes:l.no;if(correct){unlockSound();sonidos.ficha();}else vibrar(VIBRA.error);return;}
 if(b.dataset.auth){authMode=b.dataset.auth;showAuth();return;}
 if(b.dataset.mute){muted.add(b.dataset.mute);almacen.set('mesa-muted',JSON.stringify([...muted]));renderCrowd();return;}
 const a=b.dataset.action;if(!a)return;
 if(a==='bot-voice-demo'){const setting=$('#bot-voice-setting');if(setting)setting.checked=true;unlockSound();botChatter.preview();}
 else if(a==='home'){if(page==='room'&&role==='player'&&view?.seat>=0&&!confirm(t('salirSeguro')))return;modal.close();home();}
 else if(a==='salir'){if(!confirm(t('salirSeguro')))return;almacen.del('mesa-seat-'+room+'-'+role);history.pushState({},'','/');home();}
 else if(a==='reintentar'){conexion.intentos=0;connect();}
 else if(a==='host'){role='host';unlockSound();createRoom();}
 else if(a==='practice'){modal.close();role='practice';unlockSound();startPractice();}
 else if(a==='continuar'){modal.close();unlockSound();seguirPractica();}
 else if(a==='join')openModal(t('buscaTuGente'),`<p class="modal-copy">${t('escaneaOCodigo')}</p><form id="link-form"><label class="field">${t('codigoMesa')}<input name="code" class="code-input" required autocomplete="off" autocapitalize="characters" spellcheck="false" enterkeyhint="go" placeholder="ABCD"></label><button class="g-button primary full">${t('entrar')}</button></form>`);
 else if(a==='watch'){role='spectator';history.replaceState({},'',`?room=${room}&role=spectator`);joinScreen();}
 else if(a==='school')school();else if(a==='settings')settings();else if(a==='house')house();else if(a==='rules')rulesModal();else if(a==='close')modal.close();
 else if(['start','next','newSeries','pass'].includes(a)){modal.close();if(a==='pass'){vibrar(VIBRA.paso);if(role==='player')sonidos.toque();}action({type:a});}
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
 else if(a==='logout'){try{await api('logout',{});profile=null;toast(t('sesionCerrada'));authMode='login';showAuth();}catch(err){toast(err.message);}}
 else if(a==='music'){musicMuted=!musicMuted;music.muted=musicMuted;if(!musicMuted)music.play().catch(()=>{});settings();}
 else if(a==='reveal')reveal();
 else if(a==='replay'&&view.replay){const blob=new Blob([JSON.stringify({...view.replay,names:view.names,settings:view.settings},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=`mesa-mano-${view.handNo}.json`;link.click();setTimeout(()=>URL.revokeObjectURL(url),5000);}
});
document.addEventListener('submit',async e=>{
 const f=e.target;if(!['join-form','link-form','house-form','chat-form','auth-form','profile-form'].includes(f.id))return;e.preventDefault();const data=new FormData(f);
 if(f.id==='join-form'){const name=String(data.get('name')).trim();if(!name)return;almacen.set('mesa-name',name);unlockSound();telemetria.evento(role==='spectator'?'espectador_entro':'telefono_entro');connect(name);}
 else if(f.id==='link-form'){const bruto=String(data.get('code')||'').trim();let r=null,papel='player';
  // Cuatro letras es lo normal; también vale un enlace pegado entero.
  const letras=bruto.replace(/[^A-Za-z]/g,'');
  if(/^[A-Za-z]{4}$/.test(bruto)||(!bruto.includes('/')&&letras.length===4))r=letras.toUpperCase();
  else{try{const url=new URL(bruto,location.origin),q2=url.searchParams.get('room');if(q2){r=normSala(q2);papel=url.searchParams.get('role')==='spectator'?'spectator':'player';}}catch{}}
  if(!r||!/^[A-Za-z0-9_-]{1,64}$/.test(r)){toast(t('cuatroLetras'));vibrar(VIBRA.error);return;}
  disconnect();view=null;practice=null;room=r;role=papel;history.pushState({},'',`?room=${room}&role=${role}`);modal.close();joinScreen();}
 else if(f.id==='house-form'){action({type:'settings',settings:{target:Number(data.get('target')),capicua:Number(data.get('capicua')),tie:data.get('tie'),allPips:data.has('allPips'),capicuaDistinct:data.has('capicuaDistinct')}});modal.close();}
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
 if(e.target.id==='idioma-setting'){ponerIdioma(e.target.value);location.reload();}
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

/* ── Arranque ─────────────────────────────────────────────────────────────── */
if(almacen.get('mesa-motion')==='off')document.documentElement.classList.add('reduced');
if(room&&/^[A-Za-z0-9_-]{1,64}$/.test(room)){if(role==='host'||almacen.get('mesa-seat-'+room+'-'+role))connect();else joinScreen();}
else if(q.has('practice')){const p=practicaGuardada();if(p){practice=p;role='practice';page='room';lastHand=p.handNo;receive(rules.viewFor(practice,'local'));scheduleBot();}else startPractice();}
else home();
loadProfile();
if(!esTelefono)radio.cargar();
if('serviceWorker' in navigator)navigator.serviceWorker.register('/sw.js').catch(()=>{});
