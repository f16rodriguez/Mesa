import type {Env} from './env';
const COOKIE='mesa_session';
const hex=(b:ArrayBuffer)=>Array.from(new Uint8Array(b),x=>x.toString(16).padStart(2,'0')).join('');
/**
 * Text one person typed that everyone else at the table will see. Control
 * characters become spaces; format characters go (bidi overrides and isolates
 * can reorder a whole scoreboard, zero-width ones make two names look alike),
 * as do private-use and lone surrogates; whitespace runs collapse to one
 * space. Capped in code points, so a surrogate pair is never cut in half.
 * Returns '' when nothing visible is left — the caller picks the fallback.
 */
export function cleanText(raw:unknown,max:number){
 if(typeof raw!=='string')return '';
 const text=raw.normalize('NFC').replace(/[\p{Cc}\p{Zl}\p{Zp}]/gu,' ').replace(/[\p{Cf}\p{Co}\p{Cs}]/gu,'').replace(/[\s\p{Zs}]+/gu,' ').trim();
 return Array.from(text).slice(0,max).join('').trim();
}
/** A display name: cleanText, at most 24 code points. */
export const cleanName=(raw:unknown)=>cleanText(raw,24);
export const hash=async(s:string)=>hex(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)));
async function passwordHash(password:string,salt:string){const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveBits']);return hex(await crypto.subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',salt:new TextEncoder().encode(salt),iterations:100000},key,256));}
export async function ensureDb(env:Env){await env.DB.batch([
 env.DB.prepare('CREATE TABLE IF NOT EXISTS profiles (id TEXT PRIMARY KEY, username TEXT UNIQUE NOT NULL, display_name TEXT NOT NULL, country TEXT NOT NULL DEFAULT "", age_band TEXT NOT NULL DEFAULT "", avatar INTEGER NOT NULL DEFAULT 0, password_hash TEXT NOT NULL, salt TEXT NOT NULL, created_at INTEGER NOT NULL, games INTEGER NOT NULL DEFAULT 0, wins INTEGER NOT NULL DEFAULT 0, losses INTEGER NOT NULL DEFAULT 0)'),
 env.DB.prepare('CREATE TABLE IF NOT EXISTS sessions (token_hash TEXT PRIMARY KEY, profile_id TEXT NOT NULL, expires_at INTEGER NOT NULL)'),
 env.DB.prepare('CREATE TABLE IF NOT EXISTS auth_limits (key TEXT PRIMARY KEY, count INTEGER NOT NULL, expires_at INTEGER NOT NULL)'),
 env.DB.prepare('CREATE TABLE IF NOT EXISTS series_results (series_id TEXT NOT NULL, profile_id TEXT NOT NULL, won INTEGER NOT NULL, opponent_score INTEGER NOT NULL, own_score INTEGER NOT NULL, created_at INTEGER NOT NULL, PRIMARY KEY(series_id,profile_id))')
]);}
function safeProfile(p:any,own=false){if(!p)return null;return {id:p.id,username:p.username,name:p.display_name,country:p.country,avatar:p.avatar,createdAt:p.created_at,games:p.games,wins:p.wins,losses:p.losses,...(own?{ageBand:p.age_band}:{})};}
export async function accountFor(req:Request,env:Env){const token=req.headers.get('cookie')?.split(';').map(x=>x.trim()).find(x=>x.startsWith(COOKIE+'='))?.slice(COOKIE.length+1);if(!token||!/^[a-f0-9]{64}$/.test(token))return null;await ensureDb(env);return env.DB.prepare('SELECT p.* FROM profiles p JOIN sessions s ON p.id=s.profile_id WHERE s.token_hash=? AND s.expires_at>?').bind(await hash(token),Date.now()).first<any>();}
function json(body:any,status=200,cookie?:string){const h:Record<string,string>={'content-type':'application/json','cache-control':'no-store','x-content-type-options':'nosniff'};if(cookie)h['set-cookie']=cookie;return new Response(JSON.stringify(body),{status,headers:h});}
async function session(p:any,env:Env){const token=hex(crypto.getRandomValues(new Uint8Array(32)).buffer);await env.DB.prepare('INSERT INTO sessions(token_hash,profile_id,expires_at) VALUES(?,?,?)').bind(await hash(token),p.id,Date.now()+30*86400000).run();return json({profile:safeProfile(p,true)},200,`${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000`);}
export async function accountRoute(req:Request,env:Env){const url=new URL(req.url),route=url.pathname;
 if(req.method==='GET'){
   if(route==='/api/me')return json({profile:safeProfile(await accountFor(req,env),true)});
   if(route==='/api/profile'){await ensureDb(env);const id=url.searchParams.get('id')||'';if(!/^[a-f0-9-]{36}$/.test(id))return json({error:'Profile not found'},404);return json({profile:safeProfile(await env.DB.prepare('SELECT * FROM profiles WHERE id=?').bind(id).first())});}
   return json({error:'Not found'},404);
 }
 if(req.method!=='POST')return json({error:'Method not allowed'},405);
 if(req.headers.get('origin')!==url.origin)return json({error:'Please use Mesa on its own domain.'},403);
 if(Number(req.headers.get('content-length')||0)>4096)return json({error:'Request too large'},413);
 let input:any;try{const body=await req.text();if(body.length>4096)return json({error:'Request too large'},413);input=JSON.parse(body);}catch{return json({error:'Invalid request'},400);}
 await ensureDb(env);
 if(route==='/api/logout'){const token=req.headers.get('cookie')?.split(';').map(x=>x.trim()).find(x=>x.startsWith(COOKIE+'='))?.slice(COOKIE.length+1);if(token)await env.DB.prepare('DELETE FROM sessions WHERE token_hash=?').bind(await hash(token)).run();return json({ok:true},200,`${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`);}
 if(route==='/api/profile'){
   const p=await accountFor(req,env);if(!p)return json({error:'Sign in to save your profile.'},401);
   const name=cleanText(input.name,25),country=cleanText(input.country,41);
   const ageBand=['','18–24','25–34','35–44','45–54','55–64','65+'].includes(input.ageBand)?input.ageBand:'';
   if(!name||Array.from(name).length>24||Array.from(country).length>40||!Number.isInteger(input.avatar)||input.avatar<0||input.avatar>3)return json({error:'Check your name, country and character.'},400);
   await env.DB.prepare('UPDATE profiles SET display_name=?,country=?,age_band=?,avatar=? WHERE id=?').bind(name,country,ageBand,input.avatar,p.id).run();return json({profile:safeProfile({...p,display_name:name,country,age_band:ageBand,avatar:input.avatar},true)});
 }
 if(!['/api/signup','/api/login'].includes(route))return json({error:'Not found'},404);
 const username=typeof input.username==='string'?input.username.toLowerCase().trim():'',password=typeof input.password==='string'?input.password:'';
 if(!/^[a-z0-9_]{3,20}$/.test(username)||password.length<12||password.length>128)return json({error:'Use a 3–20 character username and a password of at least 12 characters.'},400);
 const ip=req.headers.get('cf-connecting-ip')||'local',window=Math.floor(Date.now()/60000),key=await hash(ip+'|'+window);
 const rate=await env.DB.prepare('INSERT INTO auth_limits(key,count,expires_at) VALUES(?,1,?) ON CONFLICT(key) DO UPDATE SET count=count+1 RETURNING count').bind(key,Date.now()+120000).first<{count:number}>();
 if((rate?.count||0)>8)return json({error:'Too many attempts. Wait a minute.'},429);
 await env.DB.prepare('DELETE FROM auth_limits WHERE expires_at<?').bind(Date.now()).run();
 const existing=await env.DB.prepare('SELECT * FROM profiles WHERE username=?').bind(username).first<any>();
 if(route==='/api/login'){if(!existing||existing.password_hash!==await passwordHash(password,existing.salt))return json({error:'Username or password is incorrect.'},401);return session(existing,env);}
 if(existing)return json({error:'That username is already taken.'},409);
 const id=crypto.randomUUID(),salt=crypto.randomUUID(),name=cleanName(input.name)||username;
 const created=Date.now(),ph=await passwordHash(password,salt);
 await env.DB.prepare('INSERT INTO profiles(id,username,display_name,password_hash,salt,created_at) VALUES(?,?,?,?,?,?)').bind(id,username,name||username,ph,salt,created).run();
 return session({id,username,display_name:name||username,country:'',age_band:'',avatar:0,created_at:created,games:0,wins:0,losses:0},env);
}
export async function recordSeries(env:Env,seriesId:string,participants:{id:string,won:boolean,ownScore:number,opponentScore:number}[]){
 if(!participants.length)return;await ensureDb(env);
 for(const p of participants){
  // The unique result insert and counter update are one atomic batch. The
  // immediately preceding insert's changes() prevents double counting retries.
  await env.DB.batch([
   env.DB.prepare('INSERT OR IGNORE INTO series_results(series_id,profile_id,won,opponent_score,own_score,created_at) VALUES(?,?,?,?,?,?)').bind(seriesId,p.id,p.won?1:0,p.opponentScore,p.ownScore,Date.now()),
   env.DB.prepare('UPDATE profiles SET games=games+1,wins=wins+?,losses=losses+? WHERE id=? AND changes()=1').bind(p.won?1:0,p.won?0:1,p.id)
  ]);
 }
}
