/* La mesa tiene que abrir aunque el wifi del patio no tenga datos: se guarda lo que hace falta
   para arrancar y lo demás se va guardando a medida que se usa. Primero la red, después la caché. */
const CACHE='mesa-noche-v1';
const FILES=['/','/index.html','/client.js','/mesa.css','/fonts/fonts.css','/fonts/dm-sans-40fe3c.woff2','/fonts/fraunces-39ce20.woff2','/fonts/bungee-70057b.woff2','/fonts/yellowtail-44d54f.woff2','/textos.js','/sonidos.js','/bot.js','/bot-rhythm.js','/bot-chatter.js','/ambiente.js','/proximity-voice.js','/rules.js','/qr.js','/scene.js','/telemetria.js','/icono.svg','/manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);
 if(e.request.method!=='GET'||u.origin!==location.origin||u.pathname.startsWith('/ws')||u.pathname.startsWith('/api/'))return;
 // La música y las voces llegan por pedazos (206): esas no se guardan, las sirve el navegador.
 if(e.request.headers.has('range')||u.pathname.startsWith('/audio/musica/'))return;
 e.respondWith(fetch(e.request).then(r=>{if(r.ok&&r.status===200){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});}return r;})
  .catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||(e.request.mode==='navigate'?caches.match('/'):Response.error()))));});
