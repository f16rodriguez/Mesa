import {SELF,env} from 'cloudflare:test';
import {it,expect,describe} from 'vitest';
import {limpiarCorreo} from '../src/lista';
const DB=(env as any).DB as D1Database;
const post=(body:unknown,{origin='https://game.test',ip=crypto.randomUUID()}={})=>SELF.fetch('https://game.test/api/lista',{method:'POST',headers:{origin,'content-type':'application/json','cf-connecting-ip':ip},body:typeof body==='string'?body:JSON.stringify(body)});
const correo=()=>`ana.${crypto.randomUUID().slice(0,8)}@example.com`;
const fila=(email:string)=>DB.prepare('SELECT * FROM waitlist WHERE email=?').bind(email).first<any>();
// El límite va por minuto de reloj: si la prueba cae en el borde, espera al siguiente.
async function lejosDelBorde(){const r=Date.now()%60000;if(r>56000)await new Promise(ok=>setTimeout(ok,60000-r+100));}

describe('lista de espera /api/lista',()=>{
 it('guarda correo, idioma, origen y fecha; nada más',async()=>{
  const e=correo(),antes=Date.now();
  const r=await post({email:'  '+e.toUpperCase()+' ',lang:'en',source:'fin_practica'},{ip:'203.0.113.9'});
  expect(r.status).toBe(200);expect(await r.json()).toEqual({ok:true});
  const f=await fila(e);
  expect(Object.keys(f).sort()).toEqual(['created_at','email','lang','source']);
  expect(f.lang).toBe('en');expect(f.source).toBe('fin_practica');expect(f.created_at).toBeGreaterThanOrEqual(antes-1000);
  expect(JSON.stringify(f)).not.toContain('203.0.113.9');
 });
 it('apuntarse dos veces no duplica ni cambia la respuesta',async()=>{
  const e=correo();
  const a=await post({email:e,lang:'es',source:'fin_serie'}),b=await post({email:e,lang:'en',source:'fin_practica'});
  expect(await a.json()).toEqual(await b.json());
  const n=await DB.prepare('SELECT COUNT(*) AS n FROM waitlist WHERE email=?').bind(e).first<{n:number}>();
  expect(n?.n).toBe(1);expect((await fila(e)).lang).toBe('es');
 });
 it('idioma y origen desconocidos caen en los de siempre',async()=>{
  const e=correo();await post({email:e,lang:'fr',source:'otra-cosa'});
  const f=await fila(e);expect(f.lang).toBe('es');expect(f.source).toBe('fin_serie');
 });
 it('rechaza correos malos, cuerpos raros, otro origen y otros métodos',async()=>{
  for(const email of ['','ana','ana@','@example.com','ana@example','ana @example.com','ana@exa mple.com','<a>@example.com',42,null])expect((await post({email,lang:'es',source:'fin_serie'})).status).toBe(400);
  expect((await post('no es json')).status).toBe(400);
  expect((await post([correo()])).status).toBe(400);
  expect((await post({email:correo(),pad:'x'.repeat(2000)})).status).toBe(413);
  expect((await post({email:correo()},{origin:'https://evil.test'})).status).toBe(403);
  expect((await SELF.fetch('https://game.test/api/lista')).status).toBe(405);
 });
 it('frena a la misma IP después de 5 por minuto',async()=>{
  await lejosDelBorde();const ip='198.51.100.'+Math.floor(Math.random()*250);
  const s=[];for(let i=0;i<7;i++)s.push((await post({email:correo(),lang:'es',source:'fin_serie'},{ip})).status);
  expect(s.slice(0,5).every(x=>x===200)).toBe(true);expect(s[5]).toBe(429);
  const otra=await post({email:correo()},{ip:ip+'1'});expect(otra.status).toBe(200);
 });
 it('limpiarCorreo',()=>{
  expect(limpiarCorreo(' Ana.Perez+mesa@Gmail.COM ')).toBe('ana.perez+mesa@gmail.com');
  expect(limpiarCorreo('ana@sub.dominio.com.do')).toBe('ana@sub.dominio.com.do');
  expect(limpiarCorreo('a'.repeat(65)+'@example.com')).toBe('');
  expect(limpiarCorreo('ana@-mal.com')).toBe('');
 });
});
