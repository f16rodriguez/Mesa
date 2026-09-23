/* Los sonidos de la mesa, sintetizados (nada que bajar, funciona sin internet) y en un solo
   AudioContext para todo: fichas, voces y ambiente. Antes eran dos senos cortos por jugada.

   Una ficha de verdad suena a dos cosas duras que chocan: un chasquido de banda ancha de
   pocos milisegundos, un par de resonancias agudas y el golpe sordo de la mesa debajo. */
export const sonidos={ctx:null,bus:null,activo:true,ruido:null,
 abrir(){
  if(!this.ctx){const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;this.ctx=new C();
   const comp=this.ctx.createDynamicsCompressor();comp.threshold.value=-14;comp.knee.value=12;comp.ratio.value=3;comp.attack.value=.003;comp.release.value=.2;comp.connect(this.ctx.destination);
   this.bus=this.ctx.createGain();this.bus.gain.value=.9;this.bus.connect(comp);
   const b=this.ctx.createBuffer(1,this.ctx.sampleRate*.25,this.ctx.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;this.ruido=b;}
  if(this.ctx.state==='suspended')this.ctx.resume().catch(()=>{});
  return this.ctx;
 },
 get suspendido(){return !this.ctx||this.ctx.state!=='running';},
 _chasquido(t,fuerza=1,brillo=1){
  const c=this.ctx,n=c.createBufferSource(),bp=c.createBiquadFilter(),g=c.createGain();n.buffer=this.ruido;
  bp.type='bandpass';bp.frequency.value=(2300+Math.random()*1500)*brillo;bp.Q.value=3.5;
  g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.5*fuerza,t+.0012);g.gain.exponentialRampToValueAtTime(.0008,t+.05);
  n.connect(bp).connect(g).connect(this.bus);n.start(t,Math.random()*.15);n.stop(t+.07);
  for(const [f,a,d] of [[3000+Math.random()*500,.1,.035],[5100+Math.random()*700,.05,.02]]){const o=c.createOscillator(),og=c.createGain();o.frequency.value=f*brillo;og.gain.setValueAtTime(a*fuerza,t);og.gain.exponentialRampToValueAtTime(.0005,t+d);o.connect(og).connect(this.bus);o.start(t);o.stop(t+d+.01);}
 },
 _golpeSordo(t,fuerza=1,f0=190){const c=this.ctx,o=c.createOscillator(),g=c.createGain();o.frequency.setValueAtTime(f0,t);o.frequency.exponentialRampToValueAtTime(f0*.5,t+.07);g.gain.setValueAtTime(.28*fuerza,t);g.gain.exponentialRampToValueAtTime(.0005,t+.09);o.connect(g).connect(this.bus);o.start(t);o.stop(t+.1);},
 /** Una ficha que se pone en la mesa. */
 ficha(){if(!this.activo||!this.abrir())return;const t=this.ctx.currentTime+.005;this._chasquido(t,1);this._golpeSordo(t,.8);},
 /** El dominó: la ficha estrellada, la mesa que retumba y las demás fichas que brincan. */
 golpe(){if(!this.activo||!this.abrir())return;const c=this.ctx,t=c.currentTime+.005;this._chasquido(t,1.7,.85);this._golpeSordo(t,2.2,110);
  const o=c.createOscillator(),g=c.createGain();o.frequency.setValueAtTime(70,t);o.frequency.exponentialRampToValueAtTime(38,t+.25);g.gain.setValueAtTime(.55,t);g.gain.exponentialRampToValueAtTime(.0005,t+.3);o.connect(g).connect(this.bus);o.start(t);o.stop(t+.32);
  for(let i=0;i<9;i++)this._chasquido(t+.03+Math.random()*.12,.18+Math.random()*.15,1.1);},
 /** Paso: dos toques con los nudillos en la madera. */
 toque(){if(!this.activo||!this.abrir())return;const c=this.ctx,t=c.currentTime+.01;
  for(const dt of [0,.15]){const n=c.createBufferSource(),lp=c.createBiquadFilter(),g=c.createGain();n.buffer=this.ruido;lp.type='lowpass';lp.frequency.value=900;g.gain.setValueAtTime(.7,t+dt);g.gain.exponentialRampToValueAtTime(.0005,t+dt+.06);n.connect(lp).connect(g).connect(this.bus);n.start(t+dt,Math.random()*.1);n.stop(t+dt+.08);this._golpeSordo(t+dt,1.3,230);}},
 /** Barajar: el ruido de 28 fichas revolviéndose sobre la mesa. */
 barajar(dur=1.7){if(!this.activo||!this.abrir())return;const c=this.ctx,t=c.currentTime+.02;
  const n=c.createBufferSource(),bp=c.createBiquadFilter(),g=c.createGain();n.buffer=this.ruido;n.loop=true;bp.type='bandpass';bp.frequency.value=1700;bp.Q.value=.8;
  g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.09,t+.15);g.gain.setValueAtTime(.09,t+dur-.3);g.gain.linearRampToValueAtTime(0,t+dur);n.connect(bp).connect(g).connect(this.bus);n.start(t);n.stop(t+dur+.05);
  for(let i=0;i<46;i++)this._chasquido(t+Math.random()*dur,.12+Math.random()*.22,.9+Math.random()*.3);},
 /** Te toca: dos notas cálidas, cortas. */
 turno(){if(!this.activo||!this.abrir())return;const c=this.ctx,t=c.currentTime+.01;
  [[659,0],[988,.11]].forEach(([f,dt])=>{for(const [tipo,a] of [['sine',.16],['triangle',.05]]){const o=c.createOscillator(),g=c.createGain();o.type=tipo;o.frequency.value=f;g.gain.setValueAtTime(0,t+dt);g.gain.linearRampToValueAtTime(a,t+dt+.01);g.gain.exponentialRampToValueAtTime(.0005,t+dt+.5);o.connect(g).connect(this.bus);o.start(t+dt);o.stop(t+dt+.55);}});},
 /** Alguien llegó a la mesa. */
 llegada(){if(!this.activo||!this.abrir())return;const c=this.ctx,t=c.currentTime+.01;[523,784].forEach((f,i)=>{const o=c.createOscillator(),g=c.createGain();o.frequency.value=f;g.gain.setValueAtTime(0,t+i*.08);g.gain.linearRampToValueAtTime(.1,t+i*.08+.01);g.gain.exponentialRampToValueAtTime(.0005,t+i*.08+.3);o.connect(g).connect(this.bus);o.start(t+i*.08);o.stop(t+i*.08+.35);});}
};
/** Vibración en el teléfono (Android; iPhone no tiene, ahí manda lo visual y el sonido). */
export function vibrar(p){try{navigator.vibrate?.(p);}catch{}}
export const VIBRA={elegir:10,jugar:25,error:[60,40,60],turno:[40,60,40],paso:[30,90,30],gano:[40,50,40,50,120]};
