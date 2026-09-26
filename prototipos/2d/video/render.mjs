// Frame-by-frame render of video.html, then the soundtrack from the game's own synthesized sounds.
//   node render.mjs [every=1] [maxFrames]     every>1 only saves every Nth frame (preview)
import { chromium } from '/home/user/Mesa/app/node_modules/playwright/index.mjs';
import fs from 'fs';

const FPS = 30, DT = 1000 / FPS, cada = +process.argv[2] || 1, limite = +process.argv[3] || 99999;
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
const errores = [];
p.on('pageerror', e => errores.push(String(e)));
p.on('console', m => { if (m.type() === 'error' && !/favicon/.test(m.text())) errores.push(m.text()); });
await p.goto('http://127.0.0.1:8770/video.html');
await p.waitForFunction(() => window.MESA_VIDEO);
await p.evaluate(() => document.fonts.ready);
const dir = cada > 1 ? 'muestra' : 'cuadros';
fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir);
let f = 0, t0 = Date.now();
for (; f < limite; f++) {
  const fin = await p.evaluate(ms => window.MESA_VIDEO.paso(ms), DT);
  if (f % cada === 0) await p.screenshot({ path: `${dir}/f${String(f).padStart(5, '0')}.jpg`, type: 'jpeg', quality: 93 });
  if (f % 300 === 0) console.log('frame', f, ((Date.now() - t0) / 1000).toFixed(0) + 's');
  if (fin) break;
}
const n = f + 1, dur = n / FPS;
const sonidos = await p.evaluate(() => window.VIDEO.sonidos);
fs.writeFileSync(`${dir}/sonidos.json`, JSON.stringify({ frames: n, dur, sonidos }, null, 1));
console.log('frames', n, 'dur', dur.toFixed(2), 's; sound events', sonidos.length);

if (cada === 1) {
  const b64 = await p.evaluate(async ({ dur, sonidos }) => {
    const { sonidos: SND } = await import('./sonidos.js');
    const sr = 48000, off = new OfflineAudioContext(2, Math.ceil(sr * (dur + .5)), sr);
    let T = 0;
    const px = new Proxy(off, { get(o, k) { if (k === 'currentTime') return T; const v = o[k]; return typeof v === 'function' ? v.bind(o) : v; } });
    const comp = off.createDynamicsCompressor(); comp.threshold.value = -14; comp.knee.value = 12; comp.ratio.value = 3; comp.attack.value = .003; comp.release.value = .2; comp.connect(off.destination);
    const bus = off.createGain(); bus.gain.value = .9; bus.connect(comp);
    const nb = off.createBuffer(1, sr * .25, sr), d = nb.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    Object.assign(SND, { ctx: px, bus, ruido: nb, activo: true });
    const mapa = { ficha: 'ficha', golpe: 'golpe', toc: 'toque', barajar: 'barajar', revelar: 'revelar' }, cache = {};
    const dec = async u => cache[u] ??= await off.decodeAudioData(await (await fetch(u)).arrayBuffer());
    for (const e of sonidos) {
      T = e.t / 1000;
      if (e.voz) { const s = off.createBufferSource(), g = off.createGain(); s.buffer = await dec(`audio/bots/${e.voz}.mp3`); g.gain.value = 1; s.connect(g).connect(bus); s.start(T); }
      else if (e.tipo === 'corte') {
        const s = off.createBufferSource(), bp = off.createBiquadFilter(), g = off.createGain(); s.buffer = nb; s.loop = true; bp.type = 'bandpass'; bp.Q.value = 1.3;
        bp.frequency.setValueAtTime(300, T); bp.frequency.exponentialRampToValueAtTime(3400, T + .35);
        g.gain.setValueAtTime(.001, T); g.gain.exponentialRampToValueAtTime(.3, T + .12); g.gain.exponentialRampToValueAtTime(.001, T + .45);
        s.connect(bp).connect(g).connect(bus); s.start(T); s.stop(T + .5);
      } else if (mapa[e.tipo]) SND[mapa[e.tipo]]();
    }
    // Room tone under everything, and one street vendor far off.
    const L = sr * 6, rb = off.createBuffer(2, L, sr);
    for (let c = 0; c < 2; c++) { const x = rb.getChannelData(c); let v = 0; for (let i = 0; i < L; i++) { v = v * .985 + (Math.random() * 2 - 1) * .015; x[i] = v * 3; } }
    const rs = off.createBufferSource(), lp = off.createBiquadFilter(), rg = off.createGain(); rs.buffer = rb; rs.loop = true; lp.type = 'lowpass'; lp.frequency.value = 700; rg.gain.value = .22;
    rs.connect(lp).connect(rg).connect(off.destination); rs.start(0);
    for (const [u, t, v] of [['audio/calle/pregon-mani.mp3', 11, .2], ['audio/calle/pregon-aguacate.mp3', 38, .14]]) {
      if (t > dur - 4) continue;
      const s = off.createBufferSource(), f = off.createBiquadFilter(), g = off.createGain(), pan = off.createStereoPanner();
      s.buffer = await dec(u); f.type = 'lowpass'; f.frequency.value = 2400; g.gain.value = v; pan.pan.value = .55;
      s.connect(f).connect(g).connect(pan).connect(off.destination); s.start(t);
    }
    const out = await off.startRendering(), ch = [out.getChannelData(0), out.getChannelData(1)], N = out.length;
    const buf = new ArrayBuffer(44 + N * 4), dv = new DataView(buf);
    const w = (o, s) => { for (let i = 0; i < s.length; i++) dv.setUint8(o + i, s.charCodeAt(i)); };
    w(0, 'RIFF'); dv.setUint32(4, 36 + N * 4, true); w(8, 'WAVEfmt '); dv.setUint32(16, 16, true); dv.setUint16(20, 1, true); dv.setUint16(22, 2, true);
    dv.setUint32(24, sr, true); dv.setUint32(28, sr * 4, true); dv.setUint16(32, 4, true); dv.setUint16(34, 16, true); w(36, 'data'); dv.setUint32(40, N * 4, true);
    for (let i = 0, o = 44; i < N; i++) for (let c = 0; c < 2; c++, o += 2) dv.setInt16(o, Math.max(-1, Math.min(1, ch[c][i])) * 32767, true);
    const bytes = new Uint8Array(buf); let s = ''; for (let i = 0; i < bytes.length; i += 32768) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 32768));
    return btoa(s);
  }, { dur, sonidos });
  fs.writeFileSync('audio.wav', Buffer.from(b64, 'base64'));
  console.log('audio.wav written');
}
console.log('errors', errores);
await b.close();
