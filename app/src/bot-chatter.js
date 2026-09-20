const CAST=['rafa','marisol','luis','carmen'];
/* Each entry is [file, caption]. The first of every list is the original pack;
   the rest are variants added later. File and caption travel together so what
   is shown always matches what is heard — the old code indexed a flat caption
   array by type, which silently goes wrong the moment one type has two clips.
   Lists may be uneven: a bot with one `think` and four is handled the same. */
const LINES={
 rafa:{think:[['think','Déjame ver un chin.']],play:[['play','Ahí va.']],
       pass:[['pass','Paso.']],win:[['win','¡Dominó!']],block:[['block','Se trancó.']]},
 marisol:{think:[['think','Dame un segundito.']],play:[['play','Vamos allá.']],
       pass:[['pass','Me toca pasar.']],win:[['win','¡Dominó, mi gente!']],block:[['block','Se cerró la mesa.']]},
 luis:{think:[['think','Espérate un chin.'],['think-2','Déjame ver eso.'],['think-3','Ya va, ya va.'],['think-4','Un chin más.']],
       play:[['play','Toma esa.'],['play-2','¡Esa!'],['play-3','Por aquí te va.']],
       pass:[['pass','Paso por aquí.']],win:[['win','¡Dominó!']],block:[['block','Esto se trancó.']]},
 carmen:{think:[['think','Con calma, con calma.']],play:[['play','Ahí te va.']],
       pass:[['pass','No tengo, paso.']],win:[['win','¡Dominó!']],block:[['block','Bueno, se trancó.']]},
};
const POSITIONS=[[0,1.18,1.01],[-1.01,1.18,0],[0,1.18,-1.01],[1.01,1.20,0]];
export const botChatter={
 enabled:localStorage.getItem('mesa-bot-voices')!=='off',context:null,cache:new Map(),lastKey:'',lastSpoke:-Infinity,busy:false,demoing:false,bags:{},lastPick:{},
 /* Pull the next line for a bot, shuffled-bag style: every variant is heard
    once before any is heard twice. Plain random repeats far more often than
    people expect — with four clips it replays the same one a quarter of the
    time — and a table you sit at for an hour notices. The bag also refuses to
    open on whatever it just closed on, so a repeat cannot straddle a reshuffle. */
 next(seat,type){
  const name=CAST[seat],pool=LINES[name]?.[type];
  if(!pool||!pool.length)return null;
  if(pool.length===1)return pool[0];
  const key=name+'/'+type;
  let bag=this.bags[key];
  if(!bag||!bag.length){
   bag=pool.map((_,i)=>i);
   for(let i=bag.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[bag[i],bag[j]]=[bag[j],bag[i]];}
   if(bag[bag.length-1]===this.lastPick[key])[bag[0],bag[bag.length-1]]=[bag[bag.length-1],bag[0]];
   this.bags[key]=bag;
  }
  const i=bag.pop();this.lastPick[key]=i;return pool[i];
 },
 setEnabled(value){this.enabled=value;localStorage.setItem('mesa-bot-voices',value?'on':'off');if(!value&&this.source){try{this.source.stop();}catch{}}},
 unlock(){if(!this.enabled)return;this.context??=new (window.AudioContext||window.webkitAudioContext)();return this.context.resume();},
 position(role,view,crowd){if(!this.context)return;let pos=[0,1.30,1.85],forward=[0,0,-1];if(role==='practice'){pos=POSITIONS[0];}else if(role==='spectator'){const i=Math.max(0,(crowd?.viewers||[]).findIndex(v=>v.id===crowd.you));pos=[-2.5+(i%4)*1.66,1.3,-2.5-Math.floor(i/4)*.65];const length=Math.hypot(pos[0],pos[2]);forward=[-pos[0]/length,0,-pos[2]/length];}const l=this.context.listener;if(l.positionX){l.positionX.value=pos[0];l.positionY.value=pos[1];l.positionZ.value=pos[2];l.forwardX.value=forward[0];l.forwardY.value=0;l.forwardZ.value=forward[2];l.upX.value=0;l.upY.value=1;l.upZ.value=0;}else{l.setPosition(...pos);l.setOrientation(...forward,0,1,0);}},
 async buffer(seat,file){const key=CAST[seat]+'/'+file;if(!this.cache.has(key)){const r=await fetch('/audio/bots/'+key+'.mp3');if(!r.ok)throw Error('Missing bot voice');this.cache.set(key,await this.context.decodeAudioData(await r.arrayBuffer()));}return this.cache.get(key);},
 async play(seat,type,force=false){if(!this.enabled||!this.context||this.context.state!=='running'||this.busy||(!force&&performance.now()-this.lastSpoke<9500))return;
  const line=this.next(seat,type);if(!line)return;const [fileName,text]=line;this.busy=true;
  try{const buffer=await this.buffer(seat,fileName),source=this.context.createBufferSource(),panner=this.context.createPanner(),gain=this.context.createGain();source.buffer=buffer;panner.panningModel='HRTF';panner.distanceModel='inverse';panner.refDistance=1.6;panner.maxDistance=14;panner.rolloffFactor=1.05;const p=POSITIONS[seat];panner.positionX.value=p[0];panner.positionY.value=p[1];panner.positionZ.value=p[2];gain.gain.value=.72;source.connect(panner).connect(gain).connect(this.context.destination);this.source=source;this.lastSpoke=performance.now();const caption=document.createElement('div');caption.className='bot-caption';caption.textContent=CAST[seat][0].toUpperCase()+CAST[seat].slice(1)+': '+text;document.body.appendChild(caption);document.querySelector(`[data-seatlabel="${seat}"]`)?.classList.add('speaking');window.dispatchEvent(new CustomEvent('mesa:botvoice',{detail:{seat,type,active:true}}));
   await new Promise(resolve=>{source.onended=()=>{caption.remove();document.querySelector(`[data-seatlabel="${seat}"]`)?.classList.remove('speaking');window.dispatchEvent(new CustomEvent('mesa:botvoice',{detail:{seat,type,active:false}}));source.disconnect();panner.disconnect();gain.disconnect();resolve();};source.start();});
  }catch(e){console.warn('Bot voice unavailable',e.message);}finally{this.busy=false;this.source=null;}
 },
 update(v,role,crowd){if(role==='player'||!v||!this.enabled||this.demoing)return;this.position(role,v,crowd);const key=v.handNo+':'+v.moves.length+':'+v.phase+':'+v.turn;if(key===this.lastKey)return;this.lastKey=key;const event=v.event||{},seat=event.seat;
  if(['handEnd','seriesEnd'].includes(v.phase)&&Number.isInteger(seat)&&v.bots[seat]){this.play(seat,event.type==='tranque'?'block':'win',true);return;}
  if(v.phase!=='playing')return;
  if(Number.isInteger(seat)&&v.bots[seat]&&event.type==='pass'){this.play(seat,'pass');return;}
  const base=(v.handNo*17+v.moves.length*31+v.turn*19)>>>0;const mixed=Math.imul(base^(base>>>16),0x45d9f3b)>>>0;const pick=(mixed^(mixed>>>16))>>>0;
  if(v.bots[v.turn]&&pick%4===0)this.play(v.turn,'think');else if(Number.isInteger(seat)&&v.bots[seat]&&event.type==='play'&&pick%7===0)this.play(seat,'play');
 },
 async preview(){this.setEnabled(true);await this.unlock();this.demoing=true;this.position('host',null,null);try{for(let i=0;i<4;i++){if(!this.enabled)break;await this.play(i,'think',true);await new Promise(r=>setTimeout(r,600));}}finally{this.demoing=false;}},
};
