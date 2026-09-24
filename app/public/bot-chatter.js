const CAST=['rafa','marisol','luis','carmen'];
/* Each entry is [file, caption]. The first of every list is the original pack;
   the rest are variants added later. File and caption travel together so what
   is shown always matches what is heard — the old code indexed a flat caption
   array by type, which silently goes wrong the moment one type has two clips.
   Lists may be uneven: a bot with one `think` and four is handled the same. */
const LINES_ES={
 rafa:{think:[['think','Déjame ver un chin.'],['think-2','Espera, déjame ver.'],['think-3','Un momentico.'],['think-4','Tranquilo, que ya voy.']],
       play:[['play','Ahí va.'],['play-2','Toma eso.'],['play-3','Por aquí va.']],
       pass:[['pass','Paso.']],win:[['win','¡Dominó!']],block:[['block','Se trancó.']],saludo:[['saludo','¡Buenas, buenas!']]},
 marisol:{think:[['think','Dame un segundito.'],['think-2','Ay, déjame ver.'],['think-3','Un segundito más.'],['think-4','Ya casi, ya casi.']],
       play:[['play','Vamos allá.'],['play-2','Ahí te va.'],['play-3','¡Esta!']],
       pass:[['pass','Me toca pasar.']],win:[['win','¡Dominó, mi gente!']],block:[['block','Se cerró la mesa.']],saludo:[['saludo','¡Epa! ¡Buenas!']]},
 luis:{think:[['think','Espérate un chin.'],['think-2','Déjame ver eso.'],['think-3','Ya va, ya va.'],['think-4','Un chin más.']],
       play:[['play','Toma esa.'],['play-2','¡Esa!'],['play-3','Por aquí te va.']],
       pass:[['pass','Paso por aquí.']],win:[['win','¡Dominó!']],block:[['block','Esto se trancó.']],saludo:[['saludo','¡Buenas! ¿Qué lo que?']]},
 carmen:{think:[['think','Con calma, con calma.'],['think-2','Ahorita, ahorita.'],['think-3','Déjame pensar.'],['think-4','Ya mismo.']],
       play:[['play','Ahí te va.'],['play-2','Toma.'],['play-3','Por acá.']],
       pass:[['pass','No tengo, paso.']],win:[['win','¡Dominó!']],block:[['block','Bueno, se trancó.']],saludo:[['saludo','¡Buenas noches, mi amor!']]},
};
/* Las mismas cuatro voces en inglés (clonadas de las tomas en español, así conservan el
   acento), con los mismos nombres de archivo bajo public/audio/bots/<bot>/en/. */
const LINES_EN={
 rafa:{think:[['think','Let me see a sec.'],['think-2','Hold on, let me look.'],['think-3','One moment.'],['think-4',"Easy, I'm coming."]],
       play:[['play','There it goes.'],['play-2','Take that.'],['play-3','Right here.']],
       pass:[['pass','I pass.']],win:[['win','Domino!']],block:[['block',"It's locked."]],saludo:[['saludo','Evening, evening!']]},
 marisol:{think:[['think','Give me a second.'],['think-2','Ay, let me see.'],['think-3','One more second.'],['think-4','Almost, almost.']],
       play:[['play','Here we go.'],['play-2','There you go.'],['play-3','This one!']],
       pass:[['pass','I gotta pass.']],win:[['win','Domino, my people!']],block:[['block',"The table's closed."]],saludo:[['saludo','Hey! Evening!']]},
 luis:{think:[['think','Hold up a sec.'],['think-2','Let me check that.'],['think-3','Coming, coming.'],['think-4','One more sec.']],
       play:[['play','Take that one.'],['play-2','That one!'],['play-3','Right there for you.']],
       pass:[['pass','I pass on this one.']],win:[['win','Domino!']],block:[['block','This is locked up.']],saludo:[['saludo',"Hey! What's good?"]]},
 carmen:{think:[['think','Easy, easy.'],['think-2','In a minute, in a minute.'],['think-3','Let me think.'],['think-4','Right away.']],
       play:[['play','There you go.'],['play-2','Here, take it.'],['play-3','Over here.']],
       pass:[['pass',"Don't have it, I pass."]],win:[['win','Domino!']],block:[['block',"Well, it's locked."]],saludo:[['saludo','Evening, sweetheart!']]},
};
const LINES={es:LINES_ES,en:LINES_EN};
/* Lo que dice el vecino que pasa y saluda (transeuntes.js): a uno de la mesa por su nombre, o a
   todos. Dos voces, hombre y mujer, en public/audio/calle/saludo-<m|f>-<a quién>.mp3 (y en/). */
export const SALUDOS={
 es:{rafa:'¡Buenas, Don Rafa!',marisol:'¡Buenas, Marisol!',luis:'¡Buenas, Luis!',carmen:'¡Buenas noches, doña Carmen!',todos:'¡Buenas noches, mi gente!'},
 en:{rafa:'Evening, Don Rafa!',marisol:'Hey, Marisol!',luis:"What's up, Luis!",carmen:'Good evening, Doña Carmen!',todos:'Evening, everybody!'},
};
/** El idioma de la página (lo pone textos.js); sin página, español. */
const lengua=()=>typeof document!=='undefined'&&document.documentElement?.lang==='en'?'en':'es';
const POSITIONS=[[0,1.18,1.01],[1.01,1.20,0],[0,1.18,-1.01],[-1.01,1.18,0]];
export const botChatter={
 enabled:(()=>{try{return localStorage.getItem('mesa-bot-voices')!=='off';}catch{return true;}})(),context:null,cache:new Map(),lastKey:'',lastSpoke:-Infinity,busy:false,demoing:false,bags:{},lastPick:{},
 /* Pull the next line for a bot, shuffled-bag style: every variant is heard
    once before any is heard twice. Plain random repeats far more often than
    people expect — with four clips it replays the same one a quarter of the
    time — and a table you sit at for an hour notices. The bag also refuses to
    open on whatever it just closed on, so a repeat cannot straddle a reshuffle. */
 next(seat,type){
  const lang=lengua(),name=CAST[seat],pool=LINES[lang][name]?.[type];
  if(!pool||!pool.length)return null;
  if(pool.length===1)return pool[0];
  const key=lang+'/'+name+'/'+type;
  let bag=this.bags[key];
  if(!bag||!bag.length){
   bag=pool.map((_,i)=>i);
   for(let i=bag.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[bag[i],bag[j]]=[bag[j],bag[i]];}
   if(bag[bag.length-1]===this.lastPick[key])[bag[0],bag[bag.length-1]]=[bag[bag.length-1],bag[0]];
   this.bags[key]=bag;
  }
  const i=bag.pop();this.lastPick[key]=i;return pool[i];
 },
 setEnabled(value){this.enabled=value;try{localStorage.setItem('mesa-bot-voices',value?'on':'off');}catch{}if(!value&&this.source){try{this.source.stop();}catch{}}},
 unlock(){if(!this.enabled)return;this.context??=new (window.AudioContext||window.webkitAudioContext)();return this.context.resume();},
 position(role,view,crowd){if(!this.context)return;let pos=[0,1.30,1.85],forward=[0,0,-1];if(role==='practice'){pos=POSITIONS[0];}else if(role==='spectator'){const i=Math.max(0,(crowd?.viewers||[]).findIndex(v=>v.id===crowd.you));pos=[-2.5+(i%4)*1.66,1.3,-2.5-Math.floor(i/4)*.65];const length=Math.hypot(pos[0],pos[2]);forward=[-pos[0]/length,0,-pos[2]/length];}const l=this.context.listener;if(l.positionX){l.positionX.value=pos[0];l.positionY.value=pos[1];l.positionZ.value=pos[2];l.forwardX.value=forward[0];l.forwardY.value=0;l.forwardZ.value=forward[2];l.upX.value=0;l.upY.value=1;l.upZ.value=0;}else{l.setPosition(...pos);l.setOrientation(...forward,0,1,0);}},
 async buffer(seat,file){const key=CAST[seat]+'/'+(lengua()==='en'?'en/':'')+file;if(!this.cache.has(key)){const r=await fetch('/audio/bots/'+key+'.mp3');if(!r.ok)throw Error('Missing bot voice');this.cache.set(key,await this.context.decodeAudioData(await r.arrayBuffer()));}return this.cache.get(key);},
 async play(seat,type,force=false,antesDe=0){if(!this.enabled||!this.context||this.context.state!=='running'||this.busy||(!force&&performance.now()-this.lastSpoke<9500))return;
  const line=this.next(seat,type);if(!line)return;const [fileName,text]=line;this.busy=true;
  try{const buffer=await this.buffer(seat,fileName);
   // Una línea de pensar que acabaría DESPUÉS de que el bot juegue se calla:
   // "un momentico" dicho con la ficha ya en el aire no tiene sentido.
   if(antesDe&&performance.now()+buffer.duration*1000>antesDe)return;
   const source=this.context.createBufferSource(),panner=this.context.createPanner(),gain=this.context.createGain();source.buffer=buffer;/* equalpower y no HRTF: el HRTF filtra la voz como si saliera de un auricular — parte del "teléfono". */panner.panningModel='equalpower';panner.distanceModel='inverse';panner.refDistance=1.6;panner.maxDistance=14;panner.rolloffFactor=1.05;const p=POSITIONS[seat];panner.positionX.value=p[0];panner.positionY.value=p[1];panner.positionZ.value=p[2];/* Rampa de entrada y salida. Sin ella la voz arranca y corta en seco sobre
     lo que quede de ruido en el clip, y suena a algo que alguien enciende y
     apaga. 25 ms para entrar; para salir hasta 120 ms, sin comerse el clip. */
   const t0=this.context.currentTime,dur=buffer.duration,V=.72,ENTRA=.025,SALE=Math.min(.12,dur*.25);
   gain.gain.setValueAtTime(0,t0);gain.gain.linearRampToValueAtTime(V,t0+ENTRA);
   gain.gain.setValueAtTime(V,Math.max(t0+ENTRA,t0+dur-SALE));gain.gain.linearRampToValueAtTime(0,t0+dur);source.connect(panner).connect(gain).connect(this.context.destination);this.source=source;this.lastSpoke=performance.now();const caption=document.createElement('div');caption.className='bot-caption';caption.textContent=CAST[seat][0].toUpperCase()+CAST[seat].slice(1)+': '+text;document.body.appendChild(caption);document.querySelector(`[data-seatlabel="${seat}"]`)?.classList.add('speaking');window.dispatchEvent(new CustomEvent('mesa:botvoice',{detail:{seat,type,active:true}}));
   await new Promise(resolve=>{source.onended=()=>{caption.remove();document.querySelector(`[data-seatlabel="${seat}"]`)?.classList.remove('speaking');window.dispatchEvent(new CustomEvent('mesa:botvoice',{detail:{seat,type,active:false}}));source.disconnect();panner.disconnect();gain.disconnect();resolve();};source.start(t0);});
  }catch(e){console.warn('Bot voice unavailable',e.message);}finally{this.busy=false;this.source=null;}
 },
 update(v,role,crowd){if(v?.bots)this.bots=v.bots;if(role==='player'||!v||!this.enabled||this.demoing)return;this.position(role,v,crowd);const key=v.handNo+':'+v.moves.length+':'+v.phase+':'+v.turn;if(key===this.lastKey)return;this.lastKey=key;const event=v.event||{},seat=event.seat;
  // Al cerrar la mano alguien lo canta: el bot que dio dominó (o trancó); si fue una persona, su
  // pareja si es bot. Antes, si ganaba una persona, la mesa se quedaba callada.
  if(['handEnd','seriesEnd'].includes(v.phase)&&Number.isInteger(seat)){const quien=v.bots[seat]?seat:v.bots[(seat+2)%4]&&event.type!=='tranque'?(seat+2)%4:null;if(quien!=null)this.play(quien,event.type==='tranque'?'block':'win',true);return;}
  if(v.phase!=='playing')return;
  if(Number.isInteger(seat)&&v.bots[seat]&&event.type==='pass'){this.play(seat,'pass');return;}
  const base=(v.handNo*17+v.moves.length*31+v.turn*19)>>>0;const mixed=Math.imul(base^(base>>>16),0x45d9f3b)>>>0;const pick=(mixed^(mixed>>>16))>>>0;
  if(v.bots[v.turn]&&v.moves.length>0&&pick%4===0){   // en la primera jugada todavía se está repartiendo: callado
   // A los 0.9 s, cuando la ficha del anterior ya cayó y no encima de ella; y
   // solo si al bot le queda pensar para decirlo entero con 1.4 s de sobra.
   const turno=key,piensa=this.pensar?this.pensar(v.handNo,v.moves.length,v.turn):4000,ya=performance.now();
   // Si el servidor (o la práctica) dijo cuándo juega el bot, eso manda sobre la predicción.
   setTimeout(()=>{if(this.lastKey!==turno)return;const hasta=this.botHasta>performance.now()?this.botHasta:ya+piensa;this.play(v.turn,'think',false,hasta-1400);},900);}else if(Number.isInteger(seat)&&v.bots[seat]&&event.type==='play'&&pick%7===0)this.play(seat,'play');
 },
 /* Alguien que pasa saluda. Suena donde está parado; después, el bot saludado (o uno
    cualquiera, si saludó a todos) contesta. Si ya alguien está hablando, no se dice nada. */
 async saludar({seat=null,voz='m',pos=[1.2,1.6,-1.8]}={}){
  if(!this.enabled||!this.context||this.context.state!=='running'||this.busy)return;
  const lang=lengua(),quien=seat==null?'todos':CAST[seat],file=`/audio/calle/${lang==='en'?'en/':''}saludo-${voz}-${quien}.mp3`;this.busy=true;let dijo=false;
  try{if(!this.cache.has(file)){const r=await fetch(file);if(!r.ok)throw Error('Missing greeting');this.cache.set(file,await this.context.decodeAudioData(await r.arrayBuffer()));}
   const buffer=this.cache.get(file),source=this.context.createBufferSource(),panner=this.context.createPanner(),gain=this.context.createGain();source.buffer=buffer;
   panner.panningModel='equalpower';panner.distanceModel='inverse';panner.refDistance=1.6;panner.maxDistance=14;panner.rolloffFactor=1.05;[panner.positionX.value,panner.positionY.value,panner.positionZ.value]=pos;
   const t0=this.context.currentTime,dur=buffer.duration,V=.8;gain.gain.setValueAtTime(0,t0);gain.gain.linearRampToValueAtTime(V,t0+.025);gain.gain.setValueAtTime(V,Math.max(t0+.025,t0+dur-Math.min(.12,dur*.25)));gain.gain.linearRampToValueAtTime(0,t0+dur);
   source.connect(panner).connect(gain).connect(this.context.destination);this.lastSpoke=performance.now();
   const caption=document.createElement('div');caption.className='bot-caption';caption.textContent=(lang==='en'?'Neighbor':voz==='f'?'Vecina':'Vecino')+': '+SALUDOS[lang][quien];document.body.appendChild(caption);
   window.dispatchEvent(new CustomEvent('mesa:botvoice',{detail:{seat:-1,type:'saludo',active:true}}));
   await new Promise(ok=>{source.onended=()=>{caption.remove();window.dispatchEvent(new CustomEvent('mesa:botvoice',{detail:{seat:-1,type:'saludo',active:false}}));source.disconnect();panner.disconnect();gain.disconnect();ok();};source.start(t0);});dijo=true;
  }catch(e){console.warn('Greeting unavailable',e.message);}finally{this.busy=false;}
  if(!dijo)return;
  const bots=[0,1,2,3].filter(s=>this.bots?.[s]),contesta=seat!=null?(this.bots?.[seat]?seat:null):bots.length?bots[Math.floor(Math.random()*bots.length)]:null;
  if(contesta!=null){await new Promise(ok=>setTimeout(ok,280));this.play(contesta,'saludo',true);}
 },
 async preview(){this.setEnabled(true);await this.unlock();this.demoing=true;this.position('host',null,null);try{for(let i=0;i<4;i++){if(!this.enabled)break;await this.play(i,'think',true);await new Promise(r=>setTimeout(r,600));}}finally{this.demoing=false;}},
};
