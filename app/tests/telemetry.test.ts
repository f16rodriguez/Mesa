import {SELF,env} from 'cloudflare:test';
import {it,expect,describe} from 'vitest';
import {aparato,limpiar,ensureEventos} from '../src/telemetry';
const DB=(env as any).DB as D1Database;
const UA={
 tv:'Mozilla/5.0 (SMART-TV; LINUX; Tizen 6.0) AppleWebKit/537.36 (KHTML, like Gecko) 85.0.4183.93/6.0 TV Safari/537.36',
 phone:'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
 desktop:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
};
const visitante=()=>crypto.randomUUID().replaceAll('-','');
const post=(body:unknown,headers:Record<string,string>={})=>SELF.fetch('https://game.test/api/t',{method:'POST',headers:{origin:'https://game.test','content-type':'text/plain;charset=UTF-8','user-agent':UA.desktop,...headers},body:typeof body==='string'?body:JSON.stringify(body)});
const filas=async(v:string)=>(await DB.prepare('SELECT * FROM events WHERE visitor=? ORDER BY id').bind(v).all<any>()).results;
const lote=(v:string,n:number,nombre='reparto')=>({v,e:Array.from({length:n},(_,i)=>({n:nombre,t:Date.now(),d:{mano:i}}))});
// El límite va por minuto de reloj: si la prueba cae en el borde, espera al siguiente.
async function lejosDelBorde(){const r=Date.now()%60000;if(r>56000)await new Promise(ok=>setTimeout(ok,60000-r+100));}

describe('telemetría /api/t',()=>{
 it('guarda un lote válido con la clase de aparato, hora del servidor y sin IP ni UA',async()=>{
  const v=visitante(),antes=Date.now();
  const r=await post({v,e:[{n:'mesa_abierta',t:1},{n:'reparto',t:2,d:{mano:3,rol:'host'}}]},{'user-agent':UA.tv,'cf-connecting-ip':'203.0.113.77'});
  expect(r.status).toBe(204);
  const f=await filas(v);
  expect(f.map(x=>x.name)).toEqual(['mesa_abierta','reparto']);
  expect(f.every(x=>x.device==='tv')).toBe(true);
  expect(Object.keys(f[0]).sort()).toEqual(['data','device','id','name','ts','visitor']);
  expect(f[0].ts).toBeGreaterThanOrEqual(antes-1000);
  expect(JSON.parse(f[1].data)).toEqual({mano:3,rol:'host'});
  expect(JSON.parse(f[0].data)).toEqual({});
  const todo=JSON.stringify(f);
  expect(todo).not.toContain('203.0.113.77');
  expect(todo).not.toContain('Tizen');
  expect(todo).not.toContain('Mozilla');
 });
 it('clasifica el aparato por el User-Agent',()=>{
  expect(aparato(UA.tv)).toBe('tv');
  expect(aparato('Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36 WebAppManager')).toBe('tv');
  expect(aparato('Mozilla/5.0 (Linux; Android 9; AFTMM Build/PS7285) AppleWebKit/537.36 (KHTML, like Gecko) Silk/112.3.1 like Chrome/112.0.5615.213 Safari/537.36')).toBe('tv');
  expect(aparato('Mozilla/5.0 (X11; Linux armv7l) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 CrKey/1.56.500000 DeviceType/AndroidTV')).toBe('tv');
  expect(aparato('Mozilla/5.0 (Linux; Android 10; BRAVIA 4K VH2 Build/QTG3.200305.006.S292) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0 Safari/537.36')).toBe('tv');
  expect(aparato('Mozilla/5.0 (Linux; Android 12; SHIELD Android TV Build/SR1A.211012.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0 Safari/537.36')).toBe('tv');
  expect(aparato(UA.phone)).toBe('phone');
  expect(aparato('Mozilla/5.0 (Linux; Android 14; SM-A546B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36')).toBe('phone');
  expect(aparato('Mozilla/5.0 (iPad; CPU OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1')).toBe('tablet');
  expect(aparato('Mozilla/5.0 (Linux; Android 13; SM-X200) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36')).toBe('tablet');
  expect(aparato(UA.desktop)).toBe('desktop');
  expect(aparato('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0 after-hours')).toBe('desktop');
  expect(aparato('')).toBe('desktop');
 });
 it('rechaza lo que no cuadra y no guarda nada',async()=>{
  const v=visitante(),t=Date.now(),ev=(x:object)=>({v,e:[{n:'portada',t,...x}]});
  const malos:unknown[]=[
   {v:'xyz',e:[{n:'portada',t}]},
   {v:v.slice(1),e:[{n:'portada',t}]},
   {v:v.toUpperCase().replace(/[0-9]/g,'A'),e:[{n:'portada',t}]},
   {v,e:[]},
   {v,e:{n:'portada',t}},
   lote(v,21),
   ev({n:'compra'}),
   ev({n:'__proto__'}),
   ev({t:'ayer'}),
   {v,e:[{n:'portada'}]},
   ev({x:1}),
   ev({d:[1,2]}),
   ev({d:'hola'}),
   ev({d:null}),
   ev({d:{a:{b:1}}}),
   ev({d:{a:true}}),
   ev({d:{a:null}}),
   ev({d:{a:'x'.repeat(301)}}),
   ev({d:{'1a':1}}),
   ev({d:{__proto__x:1}}),
   ev({d:Object.fromEntries(Array.from({length:9},(_,i)=>['k'+i,i]))}),
   {v,e:[{n:'portada',t}],extra:1},
   [{v,e:[{n:'portada',t}]}],
   `{"v":"${v}","e":[{"n":"fps","t":1,"d":{"fps":1e999}}]}`,
   '{no es json',
   ''
  ];
  for(const m of malos){const r=await post(m);expect(r.status,JSON.stringify(m)).toBe(400);}
  // Justo en el límite sí pasa: 8 claves y textos de 300.
  const justo=Object.fromEntries(Array.from({length:8},(_,i)=>['k'+i,'y'.repeat(300)]));
  expect((await post(ev({n:'error',d:justo}))).status).toBe(204);
  expect((await filas(v)).length).toBe(1);
 });
 it('corta cuerpos grandes, otros métodos y otros orígenes',async()=>{
  const v=visitante();
  expect((await post(JSON.stringify({v,e:[{n:'portada',t:1}]})+' '.repeat(9000))).status).toBe(413);
  expect((await SELF.fetch('https://game.test/api/t')).status).toBe(405);
  expect((await post({v,e:[{n:'portada',t:1}]},{origin:'https://otro.test'})).status).toBe(403);
  // Sin Origin (navegadores viejos con sendBeacon) se acepta.
  expect((await SELF.fetch('https://game.test/api/t',{method:'POST',body:JSON.stringify({v,e:[{n:'portada',t:1}]})})).status).toBe(204);
  expect((await filas(v)).length).toBe(1);
 });
 it('limita a 60 eventos por minuto por visitante y bota el resto en silencio',async()=>{
  await lejosDelBorde();
  const v=visitante(),otro=visitante();
  for(const n of [20,20,15])expect((await post(lote(v,n))).status).toBe(204);
  expect((await filas(v)).length).toBe(55);
  expect((await post(lote(v,20))).status).toBe(204);
  expect((await filas(v)).length).toBe(60);
  expect((await post(lote(v,3))).status).toBe(204);
  expect((await filas(v)).length).toBe(60);
  expect((await post(lote(otro,2))).status).toBe(204);
  expect((await filas(otro)).length).toBe(2);
 });
 it('cuenta una vez el mismo error repetido en un lote',async()=>{
  const v=visitante(),t=Date.now(),e=(mensaje:string,archivo:string,linea:number)=>({n:'error',t,d:{mensaje,archivo,linea}});
  expect((await post({v,e:[e('x is undefined','client.js',10),e('x is undefined','client.js',10),e('x is undefined','scene.js',4),e('otro','client.js',10)]})).status).toBe(204);
  const f=await filas(v);
  expect(f.map(x=>JSON.parse(x.data).archivo+':'+JSON.parse(x.data).mensaje)).toEqual(['client.js:x is undefined','scene.js:x is undefined','client.js:otro']);
 });
 it('borra lo que pasa de 90 días',async()=>{
  await ensureEventos(env as any);const v=visitante(),dia=86400000,ahora=Date.now();
  await DB.batch([91,89].map(d=>DB.prepare('INSERT INTO events(ts,visitor,name,device,data) VALUES(?,?,?,?,?)').bind(ahora-d*dia,v,'portada','phone','{}')));
  await limpiar(env as any,ahora);
  expect((await filas(v)).map(x=>Math.round((ahora-x.ts)/dia))).toEqual([89]);
 });
 it('no se mete con las otras rutas /api/',async()=>{
  const voz=await SELF.fetch('https://game.test/api/voice-config');expect(voz.status).toBe(200);expect(((await voz.json()) as any).proximity).toBe(true);
  const yo=await SELF.fetch('https://game.test/api/me');expect(yo.status).toBe(200);expect(((await yo.json()) as any).profile).toBeNull();
  expect((await SELF.fetch('https://game.test/api/tt',{method:'POST',headers:{origin:'https://game.test'},body:'{}'})).status).toBe(404);
 });
});
