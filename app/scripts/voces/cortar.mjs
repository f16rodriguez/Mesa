/**
 * Corta tomas de seed_audio en clips de bot SIN ffmpeg: mp3 mono 24 kHz 64 kbps
 * con un codificador en JS, loudness BS.1770 medida con la misma regla que
 * loudnorm (medir.js). Mismas reglas de silencio que add-bot-lines.py.
 *
 *   bun add -d @breezystack/lamejs     # una vez
 *   node scripts/voces/cortar.mjs <bot> <toma.wav> public/audio/bots/<bot> -16.4 -1.5 <etiqueta...>
 *
 * -16.4 LUFS es la mediana MEDIDA de los 25 clips originales; -1.5 dBFS el techo
 * de pico. Con UNA etiqueta y CORTE=a:z (de palabras.py) corta por palabras.
 * Si avisa FLOJO, la toma trae un chasquido suelto: re-generar, no forzar.
 */
import fs from 'node:fs';
import { Mp3Encoder } from '@breezystack/lamejs';
import { lufs, picoDb } from './medir.js';
const [,,bot,wav,destino,objetivo,techo,...etiquetas]=process.argv;
const d=fs.readFileSync(wav);let i=12,ch,sr,off,len;
while(i<d.length-8){const id=d.toString('ascii',i,i+4),sz=d.readUInt32LE(i+4);
  if(id==='fmt '){ch=d.readUInt16LE(i+10);sr=d.readUInt32LE(i+12);}
  if(id==='data'){off=i+8;len=sz;break;}i+=8+sz+(sz&1);}
const n=len/(2*ch),mono=new Float64Array(n),amp=new Float64Array(n);
for(let k=0;k<n;k++){const L=d.readInt16LE(off+k*2*ch)/32768,R=ch>1?d.readInt16LE(off+k*2*ch+2)/32768:L;mono[k]=(L+R)/2;amp[k]=Math.max(Math.abs(L),Math.abs(R));}
const dur=n/sr,th=10**(-38/20),minimo=Math.round(.7*sr),ini=[],fin=[];let run=0,desde=0;
for(let k=0;k<n;k++){if(amp[k]<th){if(!run)desde=k;run++;}else{if(run>=minimo){ini.push(desde/sr);fin.push(k/sr);}run=0;}}
if(run>=minimo)ini.push(desde/sr);
let seg=[],b=0;
// Una sola frase por toma: nada que partir, solo recortar el silencio de las
// puntas con los mismos márgenes que usa el corte de varias frases.
if(etiquetas.length===1&&process.env.CORTE){const [a,z]=process.env.CORTE.split(':').map(Number);seg=[[Math.max(0,a),Math.min(dur,z)]];}
else if(etiquetas.length===1){let a=0,z=n-1;while(a<n&&amp[a]<th)a++;while(z>a&&amp[z]<th)z--;
  if(a>=n){console.log('  TOMA MUDA — no se escribe');process.exit(1);}
  seg=[[Math.max(0,a/sr-.07),Math.min(dur,z/sr+.12)]];}else{for(let k=0;k<Math.min(ini.length,fin.length);k++){if(ini[k]-b>.2)seg.push([Math.max(0,b-.07),Math.min(dur,ini[k]+.12)]);b=fin[k];}
if(dur-b>.25)seg.push([Math.max(0,b-.07),dur]);}
const trozo=([a,z])=>mono.subarray(Math.round(a*sr),Math.round(z*sr));
const mediaDb=x=>{let s=0;for(const v of x)s+=v*v;return 10*Math.log10(s/x.length);};
if(seg.length>etiquetas.length){console.log('  sobran; niveles:',seg.map(s=>mediaDb(trozo(s)).toFixed(1)));seg=seg.filter(s=>mediaDb(trozo(s))>-50);}
console.log(bot,'duración',dur.toFixed(2),'trozos',seg.length,'etiquetas',etiquetas.length);
if(seg.length!==etiquetas.length){console.log('  NO CUADRA — no se escribe nada:',seg.map(s=>s.map(v=>v.toFixed(2))));process.exit(1);}
fs.mkdirSync(destino,{recursive:true});
for(const [k,et] of etiquetas.entries()){
  const x=trozo(seg[k]);let g=+objetivo-lufs(x,sr);const p=picoDb(x)+g;if(p>+techo)g-=p-(+techo);
  const f=10**(g/20),pcm=Int16Array.from(x,v=>Math.max(-32768,Math.min(32767,Math.round(v*f*32767))));
  if(process.env.VERIF){const h=Buffer.alloc(44);h.write('RIFF',0);h.writeUInt32LE(36+pcm.length*2,4);h.write('WAVEfmt ',8);
    h.writeUInt32LE(16,16);h.writeUInt16LE(1,20);h.writeUInt16LE(1,22);h.writeUInt32LE(sr,24);h.writeUInt32LE(sr*2,28);h.writeUInt16LE(2,32);h.writeUInt16LE(16,34);
    h.write('data',36);h.writeUInt32LE(pcm.length*2,40);fs.writeFileSync(`${process.env.VERIF}/${bot}-${et}.wav`,Buffer.concat([h,Buffer.from(pcm.buffer)]));}
  const enc=new Mp3Encoder(1,sr,64),partes=[];
  for(let j=0;j<pcm.length;j+=1152){const c=enc.encodeBuffer(pcm.subarray(j,j+1152));if(c.length)partes.push(Buffer.from(c.buffer,c.byteOffset,c.byteLength));}
  const c=enc.flush();if(c.length)partes.push(Buffer.from(c.buffer,c.byteOffset,c.byteLength));
  fs.writeFileSync(`${destino}/${et}.mp3`,Buffer.concat(partes));
  // Si el techo de pico se comió la ganancia, el clip queda flojo: casi siempre
  // es un chasquido suelto en una toma rota, no voz. Se avisa para re-generar.
  const final=lufs(x,sr)+g,flojo=final<+objetivo-6;
  console.log(`  ${et}.mp3  ${(seg[k][1]-seg[k][0]).toFixed(2)}s  ganancia ${g>=0?'+':''}${g.toFixed(1)} dB  -> ${final.toFixed(1)} LUFS${flojo?'  !! FLOJO: pico suelto, re-generar':''}`);
}
