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
 *  - La calle: carros, alguna moto o motoconcho (a veces pitando) y alguna guagua, cada 9–24 s.
 *  - Un perro lejos cada 25–70 s; a veces le contesta otro.
 *  - El gentío de más allá: muchas voces lejos, sin palabras, con alguna carcajada.
 *  - Pregoneros que pasan por la calle de enfrente (aguacate, maní, mango, frío frío, empanadas).
 *
 * Aparte, `bocina`: la bachata que suena adentro del colmado, por una bocinita. Solo cuando no
 * hay canciones de verdad en public/audio/musica (esas, si las hay, suenan en su lugar).
 */
const R=Math.random;
function ruidoBlanco(ctx,seg=4){const b=ctx.createBuffer(1,ctx.sampleRate*seg,ctx.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=R()*2-1;return b;}
function ruidoRosa(ctx,seg=5){const b=ctx.createBuffer(1,ctx.sampleRate*seg,ctx.sampleRate),d=b.getChannelData(0);let b0=0,b1=0,b2=0;for(let i=0;i<d.length;i++){const w=R()*2-1;b0=.99765*b0+w*.099046;b1=.963*b1+w*.2965164;b2=.57*b2+w*1.0526913;d[i]=(b0+b1+b2+w*.1848)*.2;}return b;}
function ruidoMarron(ctx,seg=6){const b=ctx.createBuffer(1,ctx.sampleRate*seg,ctx.sampleRate),d=b.getChannelData(0);let u=0;for(let i=0;i<d.length;i++){u=(u+.02*(R()*2-1))/1.02;d[i]=u*3.5;}return b;}
/** Los pregones que hay grabados en public/audio/calle/pregon-<nombre>.mp3. */
const PREGONES=['aguacate','mani','mango','frio-frio','empanadas'];
export const ambiente={
 ctx:null,master:null,nodos:[],timers:[],on:false,blanco:null,eco:null,pregones:new Map(),ultimoPregon:'',
 start(ctx){
  if(this.on)return;this.on=true;this.ctx=ctx;
  const m=this.master=ctx.createGain();m.gain.value=0;m.connect(ctx.destination);m.gain.setTargetAtTime(1.2,ctx.currentTime,2);
  const fuente=(buf,rate=1)=>{const s=ctx.createBufferSource();s.buffer=buf;s.loop=true;s.playbackRate.value=rate;s.start(ctx.currentTime+R()*.1,R()*buf.duration);this.nodos.push(s);return s;};
  const blanco=this.blanco=ruidoBlanco(ctx),rosa=ruidoRosa(ctx),marron=ruidoMarron(ctx);
  // Sala
  // El ruido marrón solo cae 6 dB por octava: sin este filtro era la capa que más siseaba.
  {const g=ctx.createGain(),lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=260;lp.Q.value=.5;g.gain.value=.055;fuente(marron).connect(lp).connect(g).connect(m);}
  // Calle lejana, con un vaivén lento
  {const f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=380;f.Q.value=.6;const g=ctx.createGain();g.gain.value=.02;
   const lfo=ctx.createOscillator(),lg=ctx.createGain();lfo.frequency.value=.037;lg.gain.value=.009;lfo.connect(lg).connect(g.gain);lfo.start();this.nodos.push(lfo);
   const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=900;lp.Q.value=.5;fuente(rosa,.93).connect(f).connect(lp).connect(g).connect(m);}
  // Abanico: soplido con pulso de aspas (~3,5 por segundo)
  {const f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=650;f.Q.value=1;const g=ctx.createGain();g.gain.value=.007;
   const lfo=ctx.createOscillator(),lg=ctx.createGain();lfo.frequency.value=3.5;lg.gain.value=.0025;lfo.connect(lg).connect(g.gain);lfo.start();this.nodos.push(lfo);
   const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1300;lp.Q.value=.5;const p=ctx.createStereoPanner();p.pan.value=.1;fuente(rosa,1.07).connect(f).connect(lp).connect(g).connect(p).connect(m);}
  // Grillos: dos, bajitos; la noche todavía no ha caído del todo.
  for(let k=0;k<2;k++)this.grillo(3900+R()*1100,(k%2?1:-1)*(.4+R()*.5),.002+R()*.002);
  // Eco de calle: rebota entre las casas y aleja lo que pasa por él (el gentío, los pregones).
  {const sr=ctx.sampleRate,n=Math.floor(sr*1.1),ir=ctx.createBuffer(2,n,sr);for(let c=0;c<2;c++){const d=ir.getChannelData(c);let lp=0;for(let i=0;i<n;i++){const t=i/sr;lp+=.25*((R()*2-1)-lp);d[i]=lp*Math.exp(-t/.3)*(t<.012?0:1);}for(const [ms,a] of [[23,.5],[41,.35],[67,.25]])d[Math.floor(ms/1000*sr)+c*37]+=a;}
   const eco=this.eco=ctx.createConvolver();eco.buffer=ir;const g=ctx.createGain();g.gain.value=.9;eco.connect(g).connect(m);}
  this.nevera();this.vecinos();this.gentio();this.calle();this.perro();this.timers.push(setTimeout(()=>this.pregonero(),25000+R()*35000));
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
  const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1500;const g=ctx.createGain();g.gain.value=.028;const p=ctx.createStereoPanner();p.pan.value=-.45;
  s.connect(lp).connect(g).connect(p).connect(this.master);s.start(ctx.currentTime+.5,R()*seg);this.nodos.push(s);
 },
 /* La calle: cada 9–24 s pasa algo (rara vez dos motores seguidos). Cada pasada se hornea
    aparte (ver `pasada`) y suena una sola vez. */
 calle(){
  this.timers.push(setTimeout(()=>{if(!this.on)return;
   // Motores, los menos (Trey: sobraban); más carros y alguna guagua.
   const x=R(),tipo=x<.24?'moto':x<.44?'concho':x<.84?'carro':'guagua';
   pasada(22050,tipo,R,ceder).then(b=>{if(this.on)this.sonar(b);});
   if((tipo==='moto'||tipo==='concho')&&R()<.08)this.timers.push(setTimeout(()=>{if(this.on)pasada(22050,'moto',R,ceder).then(b=>{if(this.on)this.sonar(b);});},2000+R()*2500));
   this.calle();},9000+R()*15000));
 },
 /* Un perro lejos, cada 25–70 s; a veces le contesta otro del otro lado. */
 perro(){
  this.timers.push(setTimeout(()=>{if(!this.on)return;
   const pan=(R()-.5)*1.5;ladridos(22050,pan,R,ceder).then(b=>{if(this.on)this.sonar(b);});
   if(R()<.3)this.timers.push(setTimeout(()=>{if(this.on)ladridos(22050,-pan*.8,R,ceder).then(b=>{if(this.on)this.sonar(b);});},1500+R()*1800));
   this.perro();},25000+R()*45000));
 },
 /* El gentío de más allá: diez voces sin palabras, encimadas, con alguna carcajada, pasadas por
    un filtro de lejos y por el eco de la calle. Se hornean 60 s en estéreo y se repiten. */
 async gentio(){
  const ctx=this.ctx,sr=22050,seg=60;let off;try{off=new OfflineAudioContext(2,sr*seg,sr);}catch{return;}
  const vocales=[[750,1150],[480,1750],[320,2150],[520,880],[360,780]],lp=off.createBiquadFilter();lp.type='lowpass';lp.frequency.value=900;lp.Q.value=.4;lp.connect(off.destination);
  for(let v=0;v<10;v++){
   const mujer=v%2===1,f0=mujer?190+R()*45:105+R()*35,o=off.createOscillator();o.type='sawtooth';
   const f1=off.createBiquadFilter(),f2=off.createBiquadFilter();f1.type=f2.type='bandpass';f1.Q.value=4;f2.Q.value=6;
   const g2=off.createGain();g2.gain.value=.45;const env=off.createGain();env.gain.value=0;const pan=off.createStereoPanner();pan.pan.value=(v/9-.5)*1.6;
   o.connect(f1).connect(env);o.connect(f2).connect(g2).connect(env);env.connect(pan).connect(lp);
   let t=R()*4;
   while(t<seg-2){
    if(R()<.07){   // una carcajada: "ja-ja-ja" que sube y se apaga
     const n=4+Math.floor(R()*4),alto=.8+R()*.2;for(let k=0;k<n;k++){const x=t+k*(.15+R()*.03),a=alto*(1-k/(n+1));o.frequency.setValueAtTime(f0*(1.45-k*.04),x);f1.frequency.setValueAtTime(800,x);f2.frequency.setValueAtTime(1250,x);env.gain.setValueAtTime(0,x);env.gain.linearRampToValueAtTime(a,x+.02);env.gain.linearRampToValueAtTime(0,x+.12);}
     t+=n*.17+1+R()*3;continue;}
    const frase=1+R()*3.5,rate=5+R()*1.8;let u=0;
    while(u<frase){const d=1/rate*(.75+R()*.5),[a,b]=vocales[Math.floor(R()*vocales.length)],x=t+u,alto=.45+R()*.45;
     o.frequency.setValueAtTime(f0*(1+(R()-.5)*.2),x);f1.frequency.setValueAtTime(a*(mujer?1.15:1),x);f2.frequency.setValueAtTime(b*(mujer?1.15:1),x);
     env.gain.setValueAtTime(0,x);env.gain.linearRampToValueAtTime(alto,x+.03);env.gain.setValueAtTime(alto,x+d*.65);env.gain.linearRampToValueAtTime(0,x+d*.95);u+=d;}
    t+=frase+(R()<.4?.1+R()*.5:1+R()*4);}
   o.start(0);o.stop(seg);
  }
  let buf;try{buf=await off.startRendering();}catch{return;}
  if(!this.on)return;
  let pico=0;for(let c=0;c<2;c++){const d=buf.getChannelData(c);for(let i=0;i<d.length;i++)pico=Math.max(pico,Math.abs(d[i]));}if(pico>0)for(let c=0;c<2;c++){const d=buf.getChannelData(c);for(let i=0;i<d.length;i++)d[i]/=pico;}
  const src=ctx.createBufferSource();src.buffer=buf;src.loop=true;src.playbackRate.value=.97+R()*.06;
  const seco=ctx.createGain();seco.gain.value=.01;const mojado=ctx.createGain();mojado.gain.value=.04;
  src.connect(seco).connect(this.master);if(this.eco)src.connect(mojado).connect(this.eco);src.start(ctx.currentTime+1,R()*seg);this.nodos.push(src);
 },
 /* Un pregonero que pasa por la calle de enfrente: dos o tres pregones mientras camina de un
    lado al otro, lejos (filtrado y con el eco de las casas). Cada 70–160 s. */
 async pregonero(){
  if(!this.on)return;const ctx=this.ctx;
  const todos=PREGONES.filter(p=>p!==this.ultimoPregon),nombre=todos[Math.floor(R()*todos.length)];this.ultimoPregon=nombre;
  let buf=this.pregones.get(nombre);
  if(!buf){try{const r=await fetch('/audio/calle/pregon-'+nombre+'.mp3');if(r.ok){buf=await ctx.decodeAudioData(await r.arrayBuffer());this.pregones.set(nombre,buf);}}catch{}}
  if(buf&&this.on){
   const veces=2+(R()<.5?1:0),dir=R()<.5?-1:1,paso=buf.duration+2.5+R()*2.5;
   for(let k=0;k<veces;k++){const t=ctx.currentTime+.1+k*paso,u=veces>1?k/(veces-1):.5,cerca=Math.sin(Math.PI*(.2+.6*u));
    const s=ctx.createBufferSource();s.buffer=buf;s.playbackRate.value=.98+R()*.04;const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1700+900*cerca;
    const g=ctx.createGain();g.gain.value=.08*(.55+.45*cerca);const p=ctx.createStereoPanner();p.pan.value=dir*(-.75+1.5*u);
    const envio=ctx.createGain();envio.gain.value=.12*(1.2-cerca*.4);
    s.connect(lp).connect(g).connect(p).connect(this.master);if(this.eco)lp.connect(envio).connect(this.eco);s.start(t);}
  }
  this.timers.push(setTimeout(()=>this.pregonero(),70000+R()*90000));
 },
 /** Suena un búfer estéreo horneado ([izquierda, derecha]) por la mezcla del ambiente. */
 sonar([L,D],sr=22050){
  const ctx=this.ctx;if(!ctx||!L.length)return;
  const b=ctx.createBuffer(2,L.length,sr);b.getChannelData(0).set(L);b.getChannelData(1).set(D);
  const s=ctx.createBufferSource();s.buffer=b;s.connect(this.master);s.start(ctx.currentTime+.05);
 },
 stop(){
  if(!this.on)return;this.on=false;for(const t of this.timers)clearTimeout(t);this.timers=[];
  const ctx=this.ctx,m=this.master,nodos=this.nodos;this.nodos=[];
  m.gain.setTargetAtTime(0,ctx.currentTime,.3);
  setTimeout(()=>{for(const n of nodos){try{n.stop();}catch{}}m.disconnect();},1500);
 },
};

/* ── Lo que pasa por la calle, horneado en JS ───────────────────────────────
   Un motor es un tren de explosiones que golpea las resonancias del tubo de escape: así tiene
   cuerpo en los medios (300 Hz–3 kHz) y se oye hasta en la bocina de un teléfono o de una tele,
   que no dan graves. La pasada se calcula con la calle de verdad: el vehículo va de un lado al
   otro a su velocidad, con doppler, 1/distancia, el aire que se come los agudos de lejos, el
   paneo por dónde va y dos rebotes en las casas de enfrente. */
const VEHICULOS={
 //        velocidad m/s, rpm,        tiempos, cilindros, formantes [Hz, Q, peso],                      ruido, gomas, pico, distancia m
 moto:   {v:[9,14], rpm:[3600,5600],t:4,cil:1,f:[[190,5,.75],[560,5,1],[1500,4,.7],[3000,3,.25]],ruido:.15,goma:0,  pico:.13,d:[5,12]},
 concho: {v:[7,10], rpm:[4600,7000],t:2,cil:1,f:[[260,5,.55],[900,4,1],[2300,3,.7],[4200,2.5,.25]],ruido:.25,goma:0, pico:.12,d:[4,9]},
 carro:  {v:[9,14], rpm:[1500,2500],t:4,cil:4,f:[[110,4,.4],[340,4,.8],[850,3,1],[1900,3,.35]],ruido:.08,goma:.1,pico:.12,d:[6,14]},
 guagua: {v:[6,9],  rpm:[1100,1700],t:4,cil:6,f:[[80,3,.5],[240,4,.8],[700,3,1],[1600,3,.4]],ruido:.12,goma:.12,pico:.14,d:[6,12]},
};
const entre=([a,b],r)=>a+(b-a)*r;
/** Resonador de dos polos con ganancia 1 en su pico: sigue un formante sin clics al moverlo. */
function resonador(sr){let y1=0,y2=0,a1=0,a2=0,g=0;return {fijar(f,q){const r=Math.exp(-Math.PI*f/q/sr),w=2*Math.PI*f/sr;a1=2*r*Math.cos(w);a2=r*r;g=(1-r)*Math.sqrt(1-2*r*Math.cos(2*w)+r*r);},paso(x){const y=g*x+a1*y1-a2*y2;y2=y1;y1=y;return y;}};}
/** Los rebotes en las casas de enfrente, y la bajada de agudos al final (en el sitio). */
function espacio(L,D,sr,taps){const n=L.length,oL=L.slice(),oD=D.slice();for(const [ms,a] of taps){const k=Math.floor(ms/1000*sr);for(let i=k;i<n;i++){oL[i]+=a*D[i-k];oD[i]+=a*L[i-k];}}L.set(oL);D.set(oD);}
// Todo esto corre en el hilo principal, junto al 3D: se calcula por bloques de 32 muestras (lo que
// cambia despacio: distancia, doppler, revoluciones, aire, paneo) y, si se le pasa `ceder`, suelta
// el hilo cada ~0,2 s de audio. Antes una pasada eran 80–200 ms seguidos: un tirón cada tanto.
export async function pasada(sr,tipo,rnd=Math.random,ceder=null){
 const V=VEHICULOS[tipo]||VEHICULOS.moto,v=entre(V.v,rnd()),d=entre(V.d,rnd()),dir=rnd()<.5?-1:1,Lm=46,dur=2*Lm/v,n=Math.floor(dur*sr);
 const nr=V.f.length,pesos=Float64Array.from(V.f,f=>f[2]),A1=new Float64Array(nr),A2=new Float64Array(nr),G=new Float64Array(nr),Y1=new Float64Array(nr),Y2=new Float64Array(nr),rpm0=entre(V.rpm,rnd()*.5),rpm1=entre(V.rpm,.5+rnd()*.5),acelera=tipo!=='guagua'&&rnd()<.55;
 const cambios=acelera?[.25+rnd()*.1,.52+rnd()*.12]:[],moto=tipo==='concho'||tipo==='moto',pito=moto?rnd()<.35:rnd()<.08,tPito=dur*(.38+rnd()*.08);
 const bocinaF=moto?[420+rnd()*80]:[350,440],golpes=moto?[0,.2]:[0],B=32,nb=Math.ceil(n/B);
 // Primera pasada, en el sitio del vehículo: motor, gomas y bocina por separado (con doppler).
 const motor=new Float32Array(n),goma=new Float32Array(n),bocina=new Float32Array(n),bx=new Float32Array(nb),br=new Float32Array(nb);
 let fase=0,pulso=0,envR=0,g1=0,g2=0,g3=0;const pf=[0,0];
 for(let b0=0,bi=0;b0<n;b0+=B,bi++){
  const t=b0/sr,u=t/dur,x=dir*(-Lm+v*t),r=Math.hypot(x,d),dop=343/(343+v*x*dir/r);bx[bi]=x;br[bi]=r;
  // El doppler mueve también los formantes.
  // Resonadores de dos polos con ganancia 1 en su pico (en línea: son lo que más cuesta).
  for(let k=0;k<nr;k++){const f=Math.min(V.f[k][0]*dop,sr*.45),rr=Math.exp(-Math.PI*f/V.f[k][1]/sr),w=2*Math.PI*f/sr;A1[k]=2*rr*Math.cos(w);A2[k]=rr*rr;G[k]=(1-rr)*Math.sqrt(1-2*rr*Math.cos(2*w)+rr*rr);}
  // Revoluciones: crucero con su vaivén, o acelerando con dos cambios de marcha.
  let rpm;if(acelera){let c=0;while(c<cambios.length&&u>=cambios[c])c++;const a=c?cambios[c-1]:0,b=c<cambios.length?cambios[c]:1;rpm=rpm0+(rpm1-rpm0)*Math.min(1,(u-a)/(b-a)*1.3)-(c?120:0);}
  else rpm=(rpm0+rpm1)/2*(1+.04*Math.sin(2*Math.PI*.35*t)+.02*Math.sin(2*Math.PI*1.7*t));
  const paso=rpm/60*V.cil/(V.t/2)*dop/sr,fin=Math.min(n,b0+B);
  for(let i=b0;i<fin;i++){
   fase+=paso;if(fase>=1){fase-=1;pulso=.8+rnd()*.4;envR=1;}
   const ex=pulso+(rnd()*2-1)*V.ruido*(.18+envR);pulso*=.35;envR*=.985;
   let y=0;for(let k=0;k<nr;k++){const o=G[k]*ex+A1[k]*Y1[k]-A2[k]*Y2[k];Y2[k]=Y1[k];Y1[k]=o;y+=o*pesos[k];}motor[i]=y;
   // Gomas en el asfalto: un rugido sordo (200–700 Hz), no un soplido.
   if(V.goma){const w=rnd()*2-1;g1+=.18*(w-g1);g2+=.18*(g1-g2);g3+=.05*(g2-g3);goma[i]=g2-g3;}
   // La bocina, cuando toca: pulsos cuadrados de 0,12 s (dos veces el motor, una el carro).
   if(pito){const tp=i/sr-tPito;if(tp>=0&&tp<.33)for(const t0 of golpes)if(tp>=t0&&tp<t0+.12)for(let j=0;j<bocinaF.length;j++){pf[j]=(pf[j]+bocinaF[j]*dop/sr)%1;bocina[i]+=pf[j]<.5?1:-1;}}
  }
  if(ceder&&(b0&4095)===0)await ceder();
 }
 // Cada fuente a su nivel, medido por su energía (el motor es de pulsos, las gomas de ruido).
 if(ceder)await ceder();
 const rms=a=>{let e=0;for(let i=0;i<n;i++)e+=a[i]*a[i];return Math.sqrt(e/n)||1;},km=1/rms(motor),kg=V.goma/rms(goma);
 // Segunda pasada, en la oreja: aire, 1/distancia, entrada y salida suaves, paneo y dos rebotes.
 const L=new Float32Array(n),D=new Float32Array(n);let lp=0,lpB=0,gS=0;
 for(let b0=0,bi=0;b0<n;b0+=B,bi++){
  const x=bx[bi],r=br[bi],fc=1800+14000*Math.exp(-r/22),a=1-Math.exp(-2*Math.PI*fc/sr),pan=Math.max(-1,Math.min(1,x/Math.max(r,1))),ang=(pan+1)*Math.PI/4,cL=Math.cos(ang),cD=Math.sin(ang),atn=6/Math.max(r,3),fin=Math.min(n,b0+B);
  for(let i=b0;i<fin;i++){
   const u=i/n,y=motor[i]*km+goma[i]*kg;lp+=a*(y-lp);lpB+=.35*(bocina[i]-lpB);
   gS+=.002*(atn*Math.min(1,u*8,(1-u)*8)-gS);const s=(lp+lpB*2.2)*gS;L[i]=s*cL;D[i]=s*cD;
  }
  if(ceder&&(b0&4095)===0)await ceder();
 }
 if(ceder)await ceder();
 let pico=0;for(let i=0;i<n;i++){const a=Math.abs(L[i]),b=Math.abs(D[i]);if(a>pico)pico=a;if(b>pico)pico=b;}
 const k=pico>0?V.pico*(6/Math.max(d,3))/pico:0;for(let i=0;i<n;i++){L[i]*=k;D[i]*=k;}
 if(ceder)await ceder();
 espacio(L,D,sr,[[38+rnd()*20,.22],[95+rnd()*40,.12]]);
 return [L,D];
}
/** Un perro lejos: dos a cuatro ladridos. Cada uno, una voz que sube y cae con sus formantes. */
export async function ladridos(sr,pan=0,rnd=Math.random,ceder=null){
 const cuantos=2+Math.floor(rnd()*3),grande=rnd()<.5,f0=grande?250+rnd()*80:420+rnd()*160,dist=14+rnd()*26;
 const gol=[];let t=.05;for(let k=0;k<cuantos;k++){gol.push([t,.13+rnd()*.09]);t+=(k===1&&rnd()<.4?.6:.26)+rnd()*.16;}
 const n=Math.floor((t+.6)*sr),M=new Float32Array(n),FORM=grande?[[520,1],[1100,.7],[2300,.25]]:[[750,1],[1500,.8],[2900,.3]];
 const peso=f=>FORM.reduce((s,[c,w])=>s+w*Math.exp(-(((f-c)/260)**2)),0)+.05;
 for(const [t0,du] of gol){
  const a=Math.floor(t0*sr),m=Math.floor(du*sr),f1=f0*(.92+rnd()*.16);let ph=0,ruido=0;
  const w=new Float64Array(15);let f=f1,nh=0;
  for(let j=0;j<m&&a+j<n;j++){const u=j/m;
   if(j%32===0){f=f1*(u<.2?1+u*1.2:1.24-.5*(u-.2));nh=0;for(let h=1;h<=14&&h*f<sr*.45;h++){w[h]=peso(h*f)/Math.sqrt(h);nh=h;}}
   const env=Math.min(1,j/(.007*sr))*Math.exp(-Math.max(0,u-.25)*5.5);
   ph+=2*Math.PI*f/sr;let y=0;for(let h=1;h<=nh;h++)y+=Math.sin(h*ph)*w[h];
   ruido+=.3*((rnd()*2-1)-ruido);M[a+j]+=(y+ruido*.9)*env;}
  if(ceder)await ceder();}
 // Lejos: pierde agudos y rebota en las paredes.
 const fc=2600+4000*Math.exp(-dist/20),al=1-Math.exp(-2*Math.PI*fc/sr);let lp=0,pico=0;
 for(let i=0;i<n;i++){lp+=al*(M[i]-lp);M[i]=lp;pico=Math.max(pico,Math.abs(lp));}
 const g=pico>0?.14*(14/dist)/pico:0,ang=(Math.max(-1,Math.min(1,pan))+1)*Math.PI/4,L=new Float32Array(n),D=new Float32Array(n);
 for(let i=0;i<n;i++){L[i]=M[i]*g*Math.cos(ang);D[i]=M[i]*g*Math.sin(ang);}
 espacio(L,D,sr,[[55+rnd()*30,.3],[140+rnd()*50,.16]]);
 return [L,D];
}

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
  for(let k=0;k<8;k++){const a=T(t0+k*c.corchea),largo=k%4===0,v=(largo?1:k%2?.5:.72)*(seccion==='coro'?1.15:1)*.13,at=largo?.02:.003,sos=largo?.1:.012,fin=largo?.16:.05,o=Math.floor(R()*(guira.length-sr*.2));
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
   hp.type='highpass';hp.frequency.value=190;lp.type='lowpass';lp.frequency.value=3800;caja.type='peaking';caja.frequency.value=1200;caja.Q.value=1;caja.gain.value=5;
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
