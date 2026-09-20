import type{Env}from'./env';
import{AccessToken,RoomServiceClient,TrackSource}from'livekit-server-sdk';
export function voiceConfigured(env:Env){return Boolean(env.LIVEKIT_URL&&/^wss:\/\/|^https:\/\//.test(env.LIVEKIT_URL)&&env.LIVEKIT_API_KEY&&env.LIVEKIT_API_SECRET);}
export async function joinVoice(env:Env,room:string,member:{id:string;name:string;role:string;seat:number;crowdIndex:number;muted:boolean}){
 if(!voiceConfigured(env))throw Error('Voice service not configured');
 const metadata={role:member.role,seat:member.seat,crowdIndex:member.crowdIndex};
 const access=new AccessToken(env.LIVEKIT_API_KEY!,env.LIVEKIT_API_SECRET!,{identity:member.id,name:member.name,metadata:JSON.stringify(metadata),ttl:900});
 access.addGrant({roomJoin:true,room:'mesa-'+room,canSubscribe:true,canPublish:!member.muted,canPublishData:false,canUpdateOwnMetadata:false,...(!member.muted?{canPublishSources:[TrackSource.MICROPHONE]}:{})});
 return {url:env.LIVEKIT_URL,token:await access.toJwt(),identity:member.id,metadata};
}
export async function setVoicePublish(env:Env,room:string,identity:string,canPublish:boolean){
 if(!voiceConfigured(env))return;
 const service=new RoomServiceClient(env.LIVEKIT_URL!.replace(/^wss:/,'https:'),env.LIVEKIT_API_KEY!,env.LIVEKIT_API_SECRET!);
 try{await service.updateParticipant('mesa-'+room,identity,{permission:{canSubscribe:true,canPublish,canPublishData:false,canPublishSources:canPublish?[TrackSource.MICROPHONE]:[]}});}catch(e:any){if(e?.status===404||e?.code==='not_found')return;throw Error('Voice moderation did not complete.');}
}
export async function voiceRoute(req:Request,env:Env){
 const url=new URL(req.url);if(url.pathname==='/api/voice-config'&&req.method==='GET')return Response.json({available:voiceConfigured(env),proximity:true});
 if(url.pathname!=='/api/voice-token'||req.method!=='POST')return Response.json({error:'Not found'},{status:404});
 if(req.headers.get('origin')!==url.origin)return Response.json({error:'Origin not allowed'},{status:403});
 if(!voiceConfigured(env))return Response.json({error:'Live voice needs the production voice service connected. No microphone has been opened.'},{status:503});
 let input:any;try{const text=await req.text();if(text.length>4096)throw 0;input=JSON.parse(text);}catch{return Response.json({error:'Invalid request'},{status:400});}
 if(!/^[a-zA-Z0-9_-]{1,64}$/.test(input.room||'')||!/^[a-f0-9]{64}$/.test(input.token||''))return Response.json({error:'Join a table first.'},{status:400});
 return env.ROOMS.get(env.ROOMS.idFromName(input.room)).fetch(new Request('https://mesa-internal/voice-token',{method:'POST',body:JSON.stringify(input)}));
}
