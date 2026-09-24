/**
 * La esquina del colmado cuando cae la tarde, sintetizada en el navegador: nunca se repite igual,
 * no pesa nada y funciona sin internet.
 *
 * Capas:
 *  - Tono de la sala: ruido marrón muy grave.
 *  - Calle lejana: banda media que respira despacio.
 *  - El abanico del techo: soplido con el pulso de las aspas.
 *  - La nevera: el compresor que arranca y se apaga solo.
 *  - Los vecinos hablando más allá: murmullo de voces (sin palabras) que van y vienen.
 *  - Grillos: pocos todavía, empiezan con el atardecer.
 *  - La calle: motores, motoconchos (a veces pitando) y algún carro, cada 12–35 s.
 *  - Un perro lejos, de vez en cuando.
 *
 * Aparte, `bocina`: la bachata que suena adentro del colmado, por una bocinita. Solo cuando no
 * hay canciones de verdad en public/audio/musica (esas, si las hay, suenan en su lugar).
 */
const R=Math.random;
function ruidoBlanco(ctx,seg=4){const b=ctx.createBuffer(1,ctx.sampleRate*seg,ctx.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=R()*2-1;return b;}
function ruidoMarron(ctx,seg=6){const b=ctx.createBuffer(1,ctx.sampleRate*seg,ctx.sampleRate),d=b.getChannelData(0);let u=0;for(let i=0;i<d.length;i++){u=(u+.02*(R()*2-1))/1.02;d[i]=u*3.5;}return b;}
export const ambiente={
 ctx:null,master:null,nodos:[],timers:[],on:false,blanco:null,
 start(ctx){
  if(this.on)return;this.on=true;this.ctx=ctx;
  const m=this.master=ctx.createGain();m.gain.value=0;m.connect(ctx.destination);m.gain.setTargetAtTime(1.2,ctx.currentTime,2);
  const fuente=(buf,rate=1)=>{const s=ctx.createBufferSource();s.buffer=buf;s.loop=true;s.playbackRate.value=rate;s.start(ctx.currentTime+R()*.1,R()*buf.duration);this.nodos.push(s);return s;};
  const blanco=this.blanco=ruidoBlanco(ctx),marron=ruidoMarron(ctx);
  // Sala
  {const g=ctx.createGain();g.gain.value=.05;fuente(marron).connect(g).connect(m);}
  // Calle lejana, con un vaivén lento
  {const f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=380;f.Q.value=.6;const g=ctx.createGain();g.gain.value=.02;
   const lfo=ctx.createOscillator(),lg=ctx.createGain();lfo.frequency.value=.037;lg.gain.value=.009;lfo.connect(lg).connect(g.gain);lfo.start();this.nodos.push(lfo);
   fuente(blanco,.93).connect(f).connect(g).connect(m);}
  // Abanico: soplido con pulso de aspas (~3,5 por segundo)
  {const f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=900;f.Q.value=.9;const g=ctx.createGain();g.gain.value=.006;
   const lfo=ctx.createOscillator(),lg=ctx.createGain();lfo.frequency.value=3.5;lg.gain.value=.0025;lfo.connect(lg).connect(g.gain);lfo.start();this.nodos.push(lfo);
   const p=ctx.createStereoPanner();p.pan.value=.1;fuente(blanco,1.07).connect(f).connect(g).connect(p).connect(m);}
  // Grillos: dos, bajitos; la noche todavía no ha caído del todo.
  for(let k=0;k<2;k++)this.grillo(3900+R()*1100,(k%2?1:-1)*(.4+R()*.5),.002+R()*.002);
  this.nevera();this.vecinos();this.calle();this.perro();
 },
 /* Cada grillo es un búfer propio que se repite (17–29 s, distinto para cada
    uno: juntos no se oye el bucle). Sin temporizadores: en una pestaña en
    segundo plano el navegador frena los setTimeout y los grillos se callaban. */
 grillo(freq,pan,vol){
  const ctx=this.ctx,sr=ctx.sampleRate,seg=17+R()*12,b=ctx.createBuffer(1,Math.floor(sr*seg),sr),d=b.getChannelData(0);
  const ritmo=.28+R()*.5,pulsos=2+Math.floor(R()*3),w=2*Math.PI*freq/sr;
  let t=R()*1.5;
  while(t<seg-1){
   const callado=R()<.2,dur=callado?2+R()*6:1.2+R()*2.5;
   if(!callado)for(let u=0;u<dur&&t+u<seg-.1;u+=ritmo*(.9+R()*.2))for(let q=0;q<pulsos;q++){
    const a=Math.floor((t+u+q*.034)*sr),n=Math.floor(.022*sr);
    for(let k=0;k<n&&a+k<d.length;k++){const env=k<.006*sr?k/(.006*sr):1-(k-.006*sr)/(.016*sr);d[a+k]+=Math.sin(w*(a+k))*Math.max(0,env);}}
   t+=dur;}
  const s=ctx.createBufferSource(),g=ctx.createGain(),p=ctx.createStereoPanner();s.buffer=b;s.loop=true;g.gain.value=vol;p.pan.value=pan;
  s.connect(g).connect(p).connect(this.master);s.start(ctx.currentTime+R()*.5);this.nodos.push(s);
 },
 /* La nevera: zumbido de 60 Hz y su armónico, con el compresor que trabaja 40–80 s y descansa 20–40. */
 nevera(){
  const ctx=this.ctx,g=ctx.createGain();g.gain.value=0;const p=ctx.createStereoPanner();p.pan.value=.35;g.connect(p).connect(this.master);
  for(const [f,a] of [[60,.006],[120,.0035],[180,.0012]]){const o=ctx.createOscillator(),og=ctx.createGain();o.frequency.value=f*(1+(R()-.5)*.004);og.gain.value=a;o.connect(og).connect(g);o.start();this.nodos.push(o);}
  const ciclo=prendida=>{if(!this.on)return;g.gain.setTargetAtTime(prendida?1:0,ctx.currentTime,prendida?.6:1.2);this.timers.push(setTimeout(()=>ciclo(!prendida),(prendida?40000+R()*40000:20000+R()*20000)));};
  ciclo(R()<.6);
 },
 /* Los vecinos: cuatro voces sin palabras (una fuente con tono y dos formantes que cambian por
    sílaba), por turnos y a veces encimadas, lejos: filtradas y bajitas. Se hornean 48 s en un
    contexto aparte y se repiten con otra velocidad cada vez, así no se nota el bucle. */
 async vecinos(){
  const ctx=this.ctx,sr=22050,seg=48;
  let off;try{off=new OfflineAudioContext(1,sr*seg,sr);}catch{return;}
  const vocales=[[750,1150],[480,1750],[320,2150],[520,880],[360,780]];
  const mezcla=off.createGain();mezcla.gain.value=1;mezcla.connect(off.destination);
  for(let v=0;v<4;v++){
   const mujer=v%2===1,f0=mujer?195+R()*35:108+R()*25;
   const o=off.createOscillator();o.type='sawtooth';const f1=off.createBiquadFilter(),f2=off.createBiquadFilter();f1.type=f2.type='bandpass';f1.Q.value=5;f2.Q.value=7;
   const g1=off.createGain(),g2=off.createGain();g1.gain.value=1;g2.gain.value=.5;const env=off.createGain();env.gain.value=0;
   o.connect(f1).connect(g1).connect(env);o.connect(f2).connect(g2).connect(env);env.connect(mezcla);
   let t=v*1.3+R()*2;
   while(t<seg-2){
    const frase=1.2+R()*3.2,rate=5.2+R()*1.6,caida=1-.12*R();let u=0,k=0;
    while(u<frase){const d=1/rate*(.75+R()*.5),[a,b]=vocales[Math.floor(R()*vocales.length)],x=t+u,alto=.55+R()*.45;
     o.frequency.setValueAtTime(f0*(1+(R()-.5)*.18)*(1-(1-caida)*u/frase),x);
     f1.frequency.setValueAtTime(a*(mujer?1.15:1),x);f2.frequency.setValueAtTime(b*(mujer?1.15:1),x);
     env.gain.setValueAtTime(0,x);env.gain.linearRampToValueAtTime(alto,x+.03);env.gain.setValueAtTime(alto,x+d*.65);env.gain.linearRampToValueAtTime(0,x+d*.95);
     u+=d;k++;}
    t+=frase+(R()<.3?.2+R()*.6:1.5+R()*4.5);}
   o.start(0);o.stop(seg);
  }
  let buf;try{buf=await off.startRendering();}catch{return;}
  if(!this.on)return;
  const d=buf.getChannelData(0);let pico=0;for(let i=0;i<d.length;i++)pico=Math.max(pico,Math.abs(d[i]));if(pico>0)for(let i=0;i<d.length;i++)d[i]/=pico;
  const s=ctx.createBufferSource();s.buffer=buf;s.loop=true;s.playbackRate.value=.97+R()*.06;
  const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1500;const g=ctx.createGain();g.gain.value=.012;const p=ctx.createStereoPanner();p.pan.value=-.45;
  s.connect(lp).connect(g).connect(p).connect(this.master);s.start(ctx.currentTime+.5,R()*seg);this.nodos.push(s);
 },
 /* La calle: cada 12–35 s pasa algo. Motor de cuatro tiempos, motoconcho de dos tiempos (a veces
    pitando para avisar que va) o un carro, con doppler y de un lado al otro. */
 calle(){
  const ctx=this.ctx;
  this.timers.push(setTimeout(()=>{if(!this.on)return;
   const t0=ctx.currentTime,x=R(),tipo=x<.5?'moto':x<.82?'concho':'carro',D=tipo==='carro'?5+R()*2:6+R()*3,dir=R()<.5?-1:1;
   const base=tipo==='moto'?55+R()*25:tipo==='concho'?105+R()*40:38+R()*12,vol=tipo==='carro'?.02:tipo==='concho'?.016:.022;
   const o=ctx.createOscillator(),o2=ctx.createOscillator(),f=ctx.createBiquadFilter(),g=ctx.createGain(),p=ctx.createStereoPanner();
   o.type=tipo==='carro'?'triangle':'sawtooth';o2.type=tipo==='carro'?'sine':'square';f.type='lowpass';f.frequency.value=tipo==='concho'?1400:tipo==='carro'?320:520;f.Q.value=tipo==='concho'?1:2;
   for(const [osc,mul] of [[o,1],[o2,2.02]]){osc.frequency.setValueAtTime(base*mul*1.06,t0);osc.frequency.linearRampToValueAtTime(base*mul*1.1,t0+D*.45);osc.frequency.exponentialRampToValueAtTime(base*mul*.86,t0+D*.6);osc.frequency.linearRampToValueAtTime(base*mul*.84,t0+D);}
   g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(vol,t0+D*.5);g.gain.linearRampToValueAtTime(0,t0+D);
   p.pan.setValueAtTime(-.9*dir,t0);p.pan.linearRampToValueAtTime(.9*dir,t0+D);
   const m2=ctx.createGain();m2.gain.value=.5;o2.connect(m2).connect(f);o.connect(f).connect(g).connect(p).connect(this.master);
   // Las gomas del carro sobre el asfalto.
   if(tipo==='carro'&&this.blanco){const n=ctx.createBufferSource(),nf=ctx.createBiquadFilter(),ng=ctx.createGain();n.buffer=this.blanco;nf.type='bandpass';nf.frequency.value=520;nf.Q.value=.7;ng.gain.setValueAtTime(0,t0);ng.gain.linearRampToValueAtTime(.012,t0+D*.5);ng.gain.linearRampToValueAtTime(0,t0+D);n.connect(nf).connect(ng).connect(p);n.start(t0,R()*2);n.stop(t0+D+.1);}
   // El motoconcho pita dos veces al pasar.
   if(tipo==='concho'&&R()<.35)for(const k of [0,.2]){const b=ctx.createOscillator(),bf=ctx.createBiquadFilter(),bg=ctx.createGain(),tb=t0+D*.42+k;b.type='square';b.frequency.value=415;bf.type='bandpass';bf.frequency.value=900;bf.Q.value=1.2;bg.gain.setValueAtTime(0,tb);bg.gain.linearRampToValueAtTime(.009,tb+.01);bg.gain.setValueAtTime(.009,tb+.11);bg.gain.linearRampToValueAtTime(0,tb+.13);b.connect(bf).connect(bg).connect(p);b.start(tb);b.stop(tb+.15);}
   o.start(t0);o2.start(t0);o.stop(t0+D+.1);o2.stop(t0+D+.1);
   this.calle();},12000+R()*23000));
 },
 /* Un perro lejos: dos o tres ladridos cortos, cada 50–140 s. */
 perro(){
  const ctx=this.ctx;
  this.timers.push(setTimeout(()=>{if(!this.on)return;
   const n=2+Math.floor(R()*2),pan=(R()-.5)*1.4,f0=420+R()*160,p=ctx.createStereoPanner();p.pan.value=pan;
   const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1700;lp.connect(p).connect(this.master);
   for(let k=0;k<n;k++){const t=ctx.currentTime+.05+k*(.32+R()*.12),o=ctx.createOscillator(),bp=ctx.createBiquadFilter(),g=ctx.createGain();
    o.type='sawtooth';o.frequency.setValueAtTime(f0*1.25,t);o.frequency.exponentialRampToValueAtTime(f0*.8,t+.1);bp.type='bandpass';bp.frequency.value=950;bp.Q.value=1.6;
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.014,t+.008);g.gain.exponentialRampToValueAtTime(.0004,t+.13);
    o.connect(bp).connect(g).connect(lp);o.start(t);o.stop(t+.16);}
   this.perro();},50000+R()*90000));
 },
 stop(){
  if(!this.on)return;this.on=false;for(const t of this.timers)clearTimeout(t);this.timers=[];
  const ctx=this.ctx,m=this.master,nodos=this.nodos;this.nodos=[];
  m.gain.setTargetAtTime(0,ctx.currentTime,.3);
  setTimeout(()=>{for(const n of nodos){try{n.stop();}catch{}}m.disconnect();},1500);
 },
};

/* ── La bocina del colmado ──────────────────────────────────────────────────
   Una bachata que suena adentro: requinto con sus arpegios (a veces en terceras), segunda
   rasgueando, bajo sincopado, bongó en martillo y güira. Cada canción sale con su tonalidad
   y su tempo, en forma de intro, verso y coro; se hornea entera
   (a mano, a 22 kHz: lo que da una bocinita) y se oye por un filtro de bocina chiquita en un cuarto.
   Entre canción y canción, unos segundos de nada, como la radio. */
const hz=m=>440*Math.pow(2,(m-69)/12);
function cuerda(sr,midi,dur,brillo){   // Karplus-Strong: una cuerda de acero pulsada
 const f=hz(midi),n=Math.floor(sr*dur),out=new Float32Array(n),N=Math.max(2,Math.round(sr/f-.5)),b=new Float32Array(N);
 let u=0;for(let i=0;i<N;i++){u+=(R()*2-1-u)*brillo;b[i]=u;}
 const g=Math.min(.9995,Math.pow(.001,1/(dur*1.6*f)));let j=0;
 for(let i=0;i<n;i++){const a=b[j],c=b[(j+1)%N];out[i]=a;b[j]=(a+c)*.5*g;j=(j+1)%N;}
 const fin=Math.floor(sr*.03);for(let i=0;i<fin;i++)out[n-1-i]*=i/fin;
 return out;
}
function cancion(){
 const tempo=124+Math.floor(R()*10),negra=60/tempo,corchea=negra/2,compas=negra*4;
 const tonica=[52,54,55,57,59,50][Math.floor(R()*6)];   // de Mi a Si, menor
 const I=[0,'m'],IV=[5,'m'],V=[7,'7'],VI=[8,'M'],VII=[10,'M'],III=[3,'M'];
 const intro=[I,IV,V,I],verso=[I,I,IV,V,I,I,IV,V],coro=[VI,VII,III,I,VI,VII,V,V],cierre=[I,IV,V,I];
 const acordes=[...intro,...verso,...coro,...verso,...coro,...cierre];
 return {tempo,negra,corchea,compas,tonica,acordes,dur:acordes.length*compas+2.5};
}
// Ceder el hilo sin setTimeout: los temporizadores se frenan en pestañas de fondo, los mensajes no.
const ceder=()=>new Promise(r=>{const m=new MessageChannel();m.port1.onmessage=()=>{m.port1.close();r();};m.port2.postMessage(0);});
/* Se mezcla a mano, en JS, directo en un solo búfer: con nodos de Web Audio (uno por golpe, unos
   1 800 por canción) el render tardaba 10 s porque cada nodo sigue en el grafo hasta el final. */
function ruidoFiltrado(sr,seg,tipo,f0,q){   // ruido pasado por un biquad (RBJ), para güira y cuero
 const n=Math.floor(sr*seg),o=new Float32Array(n),w=2*Math.PI*f0/sr,al=Math.sin(w)/(2*q),cs=Math.cos(w);
 let b0,b1,b2;if(tipo==='bp'){b0=al;b1=0;b2=-al;}else{b0=(1+cs)/2;b1=-(1+cs);b2=(1+cs)/2;}
 const a0=1+al,a1=-2*cs,a2=1-al;let x1=0,x2=0,y1=0,y2=0;
 for(let i=0;i<n;i++){const x=R()*2-1,y=(b0*x+b1*x1+b2*x2-a1*y1-a2*y2)/a0;x2=x1;x1=x;y2=y1;y1=y;o[i]=y;}
 let pk=0;for(const v of o)pk=Math.max(pk,Math.abs(v));for(let i=0;i<n;i++)o[i]/=pk||1;return o;
}
async function hornear(ctx,c){
 const sr=22050,n=Math.ceil(sr*c.dur),mix=new Float32Array(n),T=t=>Math.round(t*sr);
 // Cuerdas a 44,1 kHz (afinan mejor) y bajadas a 22 kHz promediando de a dos.
 const cache=new Map(),nota=(midi,dur,brillo)=>{const k=midi+':'+dur+':'+brillo;if(!cache.has(k)){const d=cuerda(44100,midi,dur,brillo),h=new Float32Array(d.length>>1);for(let i=0;i<h.length;i++)h[i]=(d[2*i]+d[2*i+1])*.5;cache.set(k,h);}return cache.get(k);};
 const tocar=(buf,t,vol,corte=0)=>{const a=T(t),fin=corte?Math.min(buf.length,T(corte+.04)):buf.length,cae=T(corte);for(let i=0;i<fin&&a+i<n;i++){const g=corte&&i>cae?vol*(1-(i-cae)/(fin-cae)):vol;mix[a+i]+=buf[i]*g;}};
 const guira=ruidoFiltrado(sr,1,'bp',4600,1.1),cuero=ruidoFiltrado(sr,.5,'hp',2200,.7);
 const tonos=q=>q==='m'?[0,3,7]:q==='7'?[0,4,7,10]:[0,4,7];
 const enRango=(raiz,q,lo,hi)=>{const out=[];for(let m=lo;m<=hi;m++)if(tonos(q).includes(((m-raiz)%12+12)%12))out.push(m);return out;};
 const escalaMenor=[0,2,3,5,7,8,11];   // armónica: la del requinto en las bajadas
 const patrones=[[0,2,1,3,2,4,3,1],[4,3,2,1,2,3,1,0],[0,1,2,3,4,3,2,1],[1,3,2,4,3,5,4,2]];
 let pat=patrones[0];
 for(let bar=0;bar<c.acordes.length;bar++){const [grado,q]=c.acordes[bar];await ceder();
  const t0=.4+bar*c.compas,raiz=c.tonica+grado,seccion=bar<4?'intro':bar>=c.acordes.length-4?'cierre':((bar-4)%16)<8?'verso':'coro',finFrase=bar%4===3;
  if(bar%4===0)pat=patrones[Math.floor(R()*patrones.length)];
  // Requinto: arpegio en corcheas; en el coro, terceras; al final de la frase, una bajada en semicorcheas.
  const ct=enRango(raiz,q,64,83);
  if(finFrase&&seccion!=='cierre'){for(let k=0;k<4;k++){const i=pat[k]%ct.length;tocar(nota(ct[i],.9,.75),t0+k*c.corchea,.42);}
   const esc=[];for(let m=79;m>=64&&esc.length<8;m--)if(escalaMenor.includes(((m-c.tonica)%12+12)%12))esc.push(m);
   esc.forEach((m,k)=>tocar(nota(m,.6,.8),t0+c.compas*.5+k*c.corchea/2,.34));}
  else for(let k=0;k<8;k++){const i=pat[k]%ct.length;tocar(nota(ct[i],.9,.75),t0+k*c.corchea,.42);if(seccion==='coro'&&k%2===0&&ct[i+1])tocar(nota(ct[i+1],.9,.75),t0+k*c.corchea+.004,.2);}
  if(seccion==='intro')continue;
  // Segunda: rasgueo corto en los tiempos 2 y 4.
  const acorde=enRango(raiz,q,55,67).slice(0,4);
  for(const k of [2,6])acorde.forEach((m,i)=>tocar(nota(m,.5,.5),t0+k*c.corchea+i*.012,.16,.16));
  // Bajo sincopado: tónica, quinta en el "y" del dos, tónica, y la que lleva al próximo acorde.
  let b=raiz-12;while(b>52)b-=12;while(b<40)b+=12;
  for(const [k,m,d] of [[0,b,.42],[3,b+7,.2],[4,b,.36],[7,b+(q==='7'?-2:7),.18]]){const a=T(t0+k*c.corchea),L=T(d),f=hz(m);
   for(let i=0;i<L&&a+i<n;i++){const t=i/sr,env=t<.008?t/.008*.4:t<d*.6?.4-(.26*(t-.008)/(d*.6-.008)):.14*(1-(t-d*.6)/(d*.4));mix[a+i]+=env*(Math.sin(2*Math.PI*f*t)+.22*Math.sin(4*Math.PI*f*t));}}
  // Bongó en martillo: macho seco en el uno, abierto en el tres, dedos en lo demás.
  [[480,1,.1],[340,.42,.08],[340,.55,.08],[340,.42,.08],[520,.9,.14],[340,.42,.08],[340,.55,.08],[340,.42,.08]].forEach(([f,v,d],k)=>{
   const a=T(t0+k*c.corchea),L=T(d);let fase=0;
   for(let i=0;i<L&&a+i<n;i++){const t=i/sr,fr=f*(1+.5*Math.exp(-t/.009));fase+=2*Math.PI*fr/sr;const env=(t<.003?t/.003:Math.exp(-(t-.003)/(d/6.5)))*.34*v;mix[a+i]+=Math.sin(fase)*env;}
   if(k===0){const o=Math.floor(R()*(cuero.length-sr*.04));for(let i=0;i<T(.03)&&a+i<n;i++)mix[a+i]+=cuero[o+i]*.18*Math.exp(-i/sr/.008);}});
  // Güira: corcheas parejas, raspado largo en el uno y el tres.
  for(let k=0;k<8;k++){const a=T(t0+k*c.corchea),largo=k%4===0,v=(largo?1:k%2?.5:.72)*(seccion==='coro'?1.15:1)*.2,at=largo?.02:.003,sos=largo?.1:.012,fin=largo?.16:.05,o=Math.floor(R()*(guira.length-sr*.2));
   for(let i=0;i<T(fin)&&a+i<n;i++){const t=i/sr,env=t<at?t/at:t<sos?1:Math.exp(-(t-sos)/((fin-sos)/5));mix[a+i]+=guira[o+i]*v*env;}}
 }
 let pico=0;for(let i=0;i<n;i++)pico=Math.max(pico,Math.abs(mix[i]));if(pico>0){const k=.85/pico;for(let i=0;i<n;i++)mix[i]*=k;}
 const buf=ctx.createBuffer(1,n,sr);buf.copyToChannel(mix,0);return buf;
}
export const bocina={
 ctx:null,salida:null,volumen:null,fuente:null,siguiente:null,timer:null,on:false,base:.095,
 encender(ctx){
  if(this.on)return;this.on=true;this.ctx=ctx;
  if(!this.salida){
   // Bocinita dentro del colmado: sin graves ni agudos, con su "caja" en 1,2 kHz, algo saturada y con el eco del cuarto.
   const hp=ctx.createBiquadFilter(),lp=ctx.createBiquadFilter(),caja=ctx.createBiquadFilter(),sat=ctx.createWaveShaper(),cuarto=ctx.createDelay(.2),vuelta=ctx.createGain(),apagar=ctx.createBiquadFilter(),mezcla=ctx.createGain(),p=ctx.createStereoPanner();
   hp.type='highpass';hp.frequency.value=190;lp.type='lowpass';lp.frequency.value=4300;caja.type='peaking';caja.frequency.value=1200;caja.Q.value=1;caja.gain.value=5;
   const curva=new Float32Array(1024);for(let i=0;i<1024;i++){const x=i/511.5-1;curva[i]=Math.tanh(1.8*x)/Math.tanh(1.8);}sat.curve=curva;
   cuarto.delayTime.value=.047;vuelta.gain.value=.28;apagar.type='lowpass';apagar.frequency.value=1800;mezcla.gain.value=.3;
   this.volumen=ctx.createGain();this.volumen.gain.value=0;p.pan.value=-.12;
   hp.connect(lp).connect(caja).connect(sat).connect(this.volumen);this.volumen.connect(p);this.volumen.connect(cuarto);cuarto.connect(apagar).connect(vuelta).connect(cuarto);apagar.connect(mezcla).connect(p);p.connect(ctx.destination);
   this.salida=hp;}
  this.volumen.gain.setTargetAtTime(this.base,ctx.currentTime,1.5);
  this.proxima();
 },
 async proxima(){
  if(!this.on)return;
  let buf=null;try{buf=await(this.siguiente||hornear(this.ctx,cancion()));}catch{}
  this.siguiente=null;if(!this.on)return;if(!buf){this.timer=setTimeout(()=>this.proxima(),15000);return;}
  const s=this.ctx.createBufferSource();s.buffer=buf;s.connect(this.salida);s.start();this.fuente=s;
  this.siguiente=hornear(this.ctx,cancion()).catch(()=>null);
  s.onended=()=>{if(this.fuente!==s)return;this.fuente=null;if(this.on)this.timer=setTimeout(()=>this.proxima(),4000+R()*7000);};
 },
 bajar(abajo){if(this.volumen&&this.on)this.volumen.gain.setTargetAtTime(abajo?this.base*.35:this.base,this.ctx.currentTime,.15);},
 apagar(){
  if(!this.on)return;this.on=false;clearTimeout(this.timer);
  const s=this.fuente;this.fuente=null;this.volumen?.gain.setTargetAtTime(0,this.ctx.currentTime,.25);
  if(s)setTimeout(()=>{try{s.stop();}catch{}},900);
 },
};
