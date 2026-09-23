/**
 * El desbloqueo: la firma de Paddle, el aviso que desbloquea y el que reembolsa,
 * las tres series gratis y la puerta del cuarto al empezar una serie.
 */
import {env,runInDurableObject} from 'cloudflare:test';
import {describe,it,expect} from 'vitest';
import * as L from '../src/logic.js';
import {ensureDb} from '../src/accounts';
import {SERIES_GRATIS,avisoPaddle,estadoCuenta,firmaPaddle,patrocinar} from '../src/pagos';

const SECRETO='pdl_ntfset_prueba',PRECIO='pri_01prueba';
const conPagos=(e:any)=>({...e,PADDLE_CLIENT_TOKEN:'test_token',PADDLE_PRICE_ID:PRECIO,PADDLE_WEBHOOK_SECRET:SECRETO});
const hex=(b:ArrayBuffer)=>Array.from(new Uint8Array(b),x=>x.toString(16).padStart(2,'0')).join('');
async function firmar(cuerpo:string,ts=Math.floor(Date.now()/1000),secreto=SECRETO){
 const k=await crypto.subtle.importKey('raw',new TextEncoder().encode(secreto),{name:'HMAC',hash:'SHA-256'},false,['sign']);
 return `ts=${ts};h1=${hex(await crypto.subtle.sign('HMAC',k,new TextEncoder().encode(ts+':'+cuerpo)))}`;
}
async function perfil(nombre='Ana'){await ensureDb(env as any);const id=crypto.randomUUID();
 await (env as any).DB.prepare('INSERT INTO profiles(id,username,display_name,password_hash,salt,created_at) VALUES(?,?,?,?,?,?)').bind(id,('u'+id.replaceAll('-','')).slice(0,18),nombre,'x','y',Date.now()).run();return id;}
async function aviso(evento:any,firma?:string){const cuerpo=JSON.stringify(evento);
 return avisoPaddle(new Request('https://game.test/api/paddle',{method:'POST',body:cuerpo,headers:{'paddle-signature':firma??await firmar(cuerpo)}}),conPagos(env));}
const compra=(profileId:string,txn='txn_'+crypto.randomUUID().replaceAll('-',''),precio=PRECIO)=>({event_type:'transaction.completed',data:{id:txn,status:'completed',customer_id:'ctm_1',currency_code:'USD',custom_data:{profile_id:profileId},items:[{price:{id:precio},quantity:1}],details:{totals:{grand_total:'999'}}}});
const reembolso=(txn:string,extra:any={})=>({event_type:'adjustment.updated',data:{transaction_id:txn,action:'refund',type:'full',status:'approved',...extra}});

describe('la firma de Paddle',()=>{
 it('acepta la buena y rechaza secreto ajeno, aviso viejo y cabecera rota',async()=>{
  const cuerpo='{"a":1}';
  expect(await firmaPaddle(SECRETO,await firmar(cuerpo),cuerpo)).toBe(true);
  expect(await firmaPaddle(SECRETO,await firmar(cuerpo,undefined,'otro'),cuerpo)).toBe(false);
  expect(await firmaPaddle(SECRETO,await firmar(cuerpo),cuerpo+' ')).toBe(false);
  expect(await firmaPaddle(SECRETO,await firmar(cuerpo,Math.floor(Date.now()/1000)-600),cuerpo)).toBe(false);
  expect(await firmaPaddle(SECRETO,null,cuerpo)).toBe(false);
  expect(await firmaPaddle(SECRETO,'ts=abc;h1=00',cuerpo)).toBe(false);
  // Mientras rotan el secreto llegan dos h1: basta con que uno cuadre.
  const buena=(await firmar(cuerpo)).split(';')[1];
  expect(await firmaPaddle(SECRETO,`ts=${Math.floor(Date.now()/1000)};h1=deadbeef;${buena}`,cuerpo)).toBe(true);
 });
});

describe('los avisos de Paddle',()=>{
 it('desbloquea con nuestro precio, una sola vez aunque el aviso se repita',async()=>{
  const id=await perfil(),ev=compra(id);
  expect((await aviso(ev)).status).toBe(200);expect((await aviso(ev)).status).toBe(200);
  expect(await estadoCuenta(env as any,id)).toEqual({desbloqueada:true,gratisQuedan:SERIES_GRATIS});
  const n:any=await (env as any).DB.prepare('SELECT count(*) n FROM purchases WHERE profile_id=?').bind(id).first();expect(n.n).toBe(1);
 });
 it('no desbloquea con firma mala, otro precio ni perfil desconocido',async()=>{
  const id=await perfil();
  expect((await aviso(compra(id),'ts=1;h1=00')).status).toBe(401);
  expect((await aviso(compra(id,undefined,'pri_otro'))).status).toBe(200);
  expect((await aviso(compra(crypto.randomUUID()))).status).toBe(200);
  expect((await estadoCuenta(env as any,id)).desbloqueada).toBe(false);
 });
 it('un reembolso total aprobado quita el desbloqueo; uno parcial o pendiente no',async()=>{
  const id=await perfil(),ev=compra(id),txn=ev.data.id;await aviso(ev);
  await aviso(reembolso(txn,{type:'partial'}));await aviso(reembolso(txn,{status:'pending_approval'}));
  expect((await estadoCuenta(env as any,id)).desbloqueada).toBe(true);
  await aviso(reembolso(txn));
  expect((await estadoCuenta(env as any,id)).desbloqueada).toBe(false);
  // Y el aviso de la compra, si llega repetido después, no la revive.
  await aviso(ev);expect((await estadoCuenta(env as any,id)).desbloqueada).toBe(false);
 });
 it('un contracargo también la quita, pero no si hay otra compra buena',async()=>{
  const id=await perfil(),a=compra(id),b=compra(id);await aviso(a);await aviso(b);
  await aviso({event_type:'adjustment.created',data:{transaction_id:a.data.id,action:'chargeback',status:'approved'}});
  expect((await estadoCuenta(env as any,id)).desbloqueada).toBe(true);
 });
});

describe('las series gratis',()=>{
 it('gasta una por serie, tres en total, y no gasta dos veces la misma serie',async()=>{
  const id=await perfil('Fe');
  for(let i=0;i<SERIES_GRATIS;i++){const s=crypto.randomUUID(),p=await patrocinar(env as any,s,[{profileId:id}]);
   expect(p).toMatchObject({profileId:id,nombre:'Fe',tipo:'trial',quedan:SERIES_GRATIS-1-i});
   expect((await patrocinar(env as any,s,[{profileId:id}]))?.profileId).toBe(id);}
  expect((await estadoCuenta(env as any,id)).gratisQuedan).toBe(0);
  expect(await patrocinar(env as any,crypto.randomUUID(),[{profileId:id}])).toBeNull();
 });
 it('prefiere a quien pagó y, si no, al primero al que le quedan',async()=>{
  const gastado=await perfil(),nuevo=await perfil('Luis'),pago=await perfil('Marisol');
  await (env as any).DB.prepare('INSERT INTO entitlements(profile_id,trial_used) VALUES(?,?)').bind(gastado,SERIES_GRATIS).run();
  expect((await patrocinar(env as any,crypto.randomUUID(),[{profileId:gastado},{profileId:nuevo}]))?.profileId).toBe(nuevo);
  await aviso(compra(pago));
  const p=await patrocinar(env as any,crypto.randomUUID(),[{profileId:nuevo},{profileId:pago}]);
  expect(p).toMatchObject({profileId:pago,tipo:'unlock'});
  expect((await estadoCuenta(env as any,nuevo)).gratisQuedan).toBe(SERIES_GRATIS-1);   // la de Marisol no le costó a Luis
 });
});

describe('la puerta del cuarto',()=>{
 const run=runInDurableObject as unknown as <R>(stub:DurableObjectStub,fn:(room:any,state:DurableObjectState)=>Promise<R>)=>Promise<R>;
 const ws=(id:string)=>({deserializeAttachment:()=>({id}),serializeAttachment(){},send(){}});
 function lobby(sentados:{id:string,profileId?:string}[]){
  const s:any=L.setup([]);s.hostId='host';const now=Date.now(),members:any={host:{id:'host',publicId:'p-host',name:'Host',role:'host',lastSeen:now,away:false}};
  sentados.forEach((x,i)=>{s.players[i]=x.id;s.bots[i]=false;s.names[i]=x.id;members[x.id]={id:x.id,publicId:'p-'+x.id,name:x.id,role:'player',lastSeen:now,away:false,...(x.profileId?{profileId:x.profileId}:{})};});
  return {state:s,members,chat:[],muted:[],featured:false,seriesId:crypto.randomUUID()};
 }
 async function repartir(g:any,pagos=true){
  const stub=(env as any).ROOMS.get((env as any).ROOMS.idFromName(crypto.randomUUID()));
  return run(stub,async(room,state)=>{if(pagos)room.env=conPagos(room.env);await state.storage.put('mesa',g);
   await room.handle(ws('host'),JSON.stringify({type:'action',action:{type:'start'}}),[]);return (await state.storage.get<any>('mesa'));});
 }
 it('sin Paddle configurado no se cobra nada',async()=>{expect((await repartir(lobby([{id:'a'}]),false)).state.phase).toBe('playing');});
 it('para en el lobby si nadie sentado tiene cuenta',async()=>{
  const h=await repartir(lobby([{id:'a'}]));expect(h.state.phase).toBe('lobby');expect(h.bloqueo).toBe('sinCuenta');
 });
 it('reparte gastando una serie gratis de quien está sentado',async()=>{
  const id=await perfil('Fe'),h=await repartir(lobby([{id:'a'},{id:'b',profileId:id}]));
  expect(h.state.phase).toBe('playing');expect(h.patrocinio).toEqual({nombre:'Fe',tipo:'trial',quedan:SERIES_GRATIS-1});expect(h.bloqueo).toBeUndefined();
 });
 it('cuatro bots no gastan nada',async()=>{expect((await repartir(lobby([]))).state.phase).toBe('playing');});
 it('a quien se le acabaron las gratis, la mesa le pide el desbloqueo',async()=>{
  const id=await perfil();await ensureDb(env as any);
  await (env as any).DB.prepare('INSERT INTO entitlements(profile_id,trial_used) VALUES(?,?)').bind(id,SERIES_GRATIS).run();
  const h=await repartir(lobby([{id:'a',profileId:id}]));expect(h.state.phase).toBe('lobby');expect(h.bloqueo).toBe('sinSeries');
 });
 it('si la base falla, la serie va gratis',async()=>{
  const id=await perfil(),g=lobby([{id:'a',profileId:id}]);
  const stub=(env as any).ROOMS.get((env as any).ROOMS.idFromName(crypto.randomUUID()));
  const h=await run(stub,async(room,state)=>{room.env={...conPagos(room.env),DB:{prepare(){throw Error('D1 is down');},batch(){throw Error('D1 is down');}}};await state.storage.put('mesa',g);
   await room.handle(ws('host'),JSON.stringify({type:'action',action:{type:'start'}}),[]);return state.storage.get<any>('mesa');});
  expect(h.state.phase).toBe('playing');
 });
 it('otra serie sin gratis se queda en el final de la serie, con la misma serie',async()=>{
  const id=await perfil(),g:any=lobby([{id:'a',profileId:id}]);
  await (env as any).DB.prepare('INSERT INTO entitlements(profile_id,trial_used) VALUES(?,?)').bind(id,SERIES_GRATIS).run();
  g.state.phase='seriesEnd';g.state.result={team:0,type:'domino',points:30,pips:[0,0,0,0]};const antes=g.seriesId;
  const stub=(env as any).ROOMS.get((env as any).ROOMS.idFromName(crypto.randomUUID()));
  const h=await run(stub,async(room,state)=>{room.env=conPagos(room.env);await state.storage.put('mesa',g);
   await room.handle(ws('a'),JSON.stringify({type:'action',action:{type:'newSeries'}}),[]);return state.storage.get<any>('mesa');});
  expect(h.state.phase).toBe('seriesEnd');expect(h.bloqueo).toBe('sinSeries');expect(h.seriesId).toBe(antes);
 });
});
