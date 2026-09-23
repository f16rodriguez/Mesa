/**
 * Ambiente de colmado de noche, sintetizado en el navegador: nunca se repite,
 * no pesa nada y funciona sin internet. Reemplaza street.mp3, que eran 30 s en
 * bucle a -52 dB y a volumen .2: en la práctica, silencio. Sin cama de fondo
 * cada voz traía su propio ruido y sonaba a "alguien descolgando el teléfono".
 *
 * Capas:
 *  - Tono de la sala: ruido marrón muy grave.
 *  - Calle lejana: banda media que respira despacio.
 *  - El abanico del techo: soplido con el pulso de las aspas.
 *  - Grillos: varios, cada uno a su ritmo y en su lado, con pausas al azar.
 *  - De vez en cuando, un motor que pasa por la calle (al azar, 40–120 s).
 */
const R=Math.random;
function ruidoBlanco(ctx,seg=4){const b=ctx.createBuffer(1,ctx.sampleRate*seg,ctx.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=R()*2-1;return b;}
function ruidoMarron(ctx,seg=6){const b=ctx.createBuffer(1,ctx.sampleRate*seg,ctx.sampleRate),d=b.getChannelData(0);let u=0;for(let i=0;i<d.length;i++){u=(u+.02*(R()*2-1))/1.02;d[i]=u*3.5;}return b;}
export const ambiente={
 ctx:null,master:null,nodos:[],timers:[],on:false,
 start(ctx){
  if(this.on)return;this.on=true;this.ctx=ctx;
  const m=this.master=ctx.createGain();m.gain.value=0;m.connect(ctx.destination);m.gain.setTargetAtTime(1.2,ctx.currentTime,2);
  const fuente=(buf,rate=1)=>{const s=ctx.createBufferSource();s.buffer=buf;s.loop=true;s.playbackRate.value=rate;s.start(ctx.currentTime+R()*.1,R()*buf.duration);this.nodos.push(s);return s;};
  const blanco=ruidoBlanco(ctx),marron=ruidoMarron(ctx);
  // Sala
  {const g=ctx.createGain();g.gain.value=.05;fuente(marron).connect(g).connect(m);}
  // Calle lejana, con un vaivén lento
  {const f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=380;f.Q.value=.6;const g=ctx.createGain();g.gain.value=.018;
   const lfo=ctx.createOscillator(),lg=ctx.createGain();lfo.frequency.value=.037;lg.gain.value=.009;lfo.connect(lg).connect(g.gain);lfo.start();this.nodos.push(lfo);
   fuente(blanco,.93).connect(f).connect(g).connect(m);}
  // Abanico: soplido con pulso de aspas (~3,5 por segundo)
  {const f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=900;f.Q.value=.9;const g=ctx.createGain();g.gain.value=.006;
   const lfo=ctx.createOscillator(),lg=ctx.createGain();lfo.frequency.value=3.5;lg.gain.value=.0025;lfo.connect(lg).connect(g.gain);lfo.start();this.nodos.push(lfo);
   const p=ctx.createStereoPanner();p.pan.value=.1;fuente(blanco,1.07).connect(f).connect(g).connect(p).connect(m);}
  // Grillos
  for(let k=0;k<4;k++)this.grillo(3900+R()*1100,(k%2?1:-1)*(.35+R()*.55),.0035+R()*.004);
  this.moto();
 },
 grillo(freq,pan,vol){
  const ctx=this.ctx,o=ctx.createOscillator(),g=ctx.createGain(),p=ctx.createStereoPanner();o.frequency.value=freq;g.gain.value=0;p.pan.value=pan;
  o.connect(g).connect(p).connect(this.master);o.start();this.nodos.push(o);
  const ritmo=.28+R()*.5,pulsos=2+Math.floor(R()*3);
  const tanda=()=>{if(!this.on)return;const t0=ctx.currentTime+.05;
   // Tandas de chirridos; de vez en cuando se calla un rato.
   const callado=R()<.12,dur=callado?2+R()*6:1.2+R()*2.5;
   if(!callado)for(let t=0;t<dur;t+=ritmo*(.9+R()*.2))for(let q=0;q<pulsos;q++){const a=t0+t+q*.034;g.gain.setValueAtTime(0,a);g.gain.linearRampToValueAtTime(vol,a+.006);g.gain.linearRampToValueAtTime(0,a+.022);}
   this.timers.push(setTimeout(tanda,dur*1000));};
  this.timers.push(setTimeout(tanda,R()*1500));
 },
 moto(){
  const ctx=this.ctx,espera=40000+R()*80000;
  this.timers.push(setTimeout(()=>{if(!this.on)return;
   const t0=ctx.currentTime,D=6+R()*3,dir=R()<.5?-1:1,base=55+R()*25;
   const o=ctx.createOscillator(),o2=ctx.createOscillator(),f=ctx.createBiquadFilter(),g=ctx.createGain(),p=ctx.createStereoPanner();
   o.type='sawtooth';o2.type='square';f.type='lowpass';f.frequency.value=520;f.Q.value=2;
   // Doppler: sube al acercarse, baja al alejarse.
   for(const [osc,mul] of [[o,1],[o2,2.02]]){osc.frequency.setValueAtTime(base*mul*1.06,t0);osc.frequency.linearRampToValueAtTime(base*mul*1.1,t0+D*.45);osc.frequency.exponentialRampToValueAtTime(base*mul*.86,t0+D*.6);osc.frequency.linearRampToValueAtTime(base*mul*.84,t0+D);}
   g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(.022,t0+D*.5);g.gain.linearRampToValueAtTime(0,t0+D);
   p.pan.setValueAtTime(-.9*dir,t0);p.pan.linearRampToValueAtTime(.9*dir,t0+D);
   const m2=ctx.createGain();m2.gain.value=.5;o2.connect(m2).connect(f);o.connect(f).connect(g).connect(p).connect(this.master);
   o.start(t0);o2.start(t0);o.stop(t0+D+.1);o2.stop(t0+D+.1);
   this.moto();},espera));
 },
 stop(){
  if(!this.on)return;this.on=false;for(const t of this.timers)clearTimeout(t);this.timers=[];
  const ctx=this.ctx,m=this.master,nodos=this.nodos;this.nodos=[];
  m.gain.setTargetAtTime(0,ctx.currentTime,.3);
  setTimeout(()=>{for(const n of nodos){try{n.stop();}catch{}}m.disconnect();},1500);
 },
};
