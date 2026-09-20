from pathlib import Path
import urllib.request,subprocess,re,json
packs={
'rafa':'https://d8j0ntlcm91z4.cloudfront.net/user_3BHaOz2Qec0i8nF6PTar14QwVpn/hf_20260920_130115_31f51796-a1e2-4f3e-a9b6-d8d0433cfa73.wav',
'marisol':'https://d8j0ntlcm91z4.cloudfront.net/user_3BHaOz2Qec0i8nF6PTar14QwVpn/hf_20260920_130115_f8d77d42-34cb-4e7a-bbf3-94afcbc47956.wav',
'luis':'https://d8j0ntlcm91z4.cloudfront.net/user_3BHaOz2Qec0i8nF6PTar14QwVpn/hf_20260920_130115_412ba5c1-790e-472b-a04f-e4eadd26d2a3.wav',
'carmen':'https://d8j0ntlcm91z4.cloudfront.net/user_3BHaOz2Qec0i8nF6PTar14QwVpn/hf_20260920_130115_54e88614-96ae-4af0-8cb9-4a766b4d8475.wav'}
raw=Path('qa/voice-packs');raw.mkdir(parents=True,exist_ok=True)
for name,url in packs.items():
 file=raw/(name+'.wav')
 if not file.exists():urllib.request.urlretrieve(url,file)
 duration=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','default=nw=1:nk=1',str(file)]))
 result=subprocess.run(['ffmpeg','-hide_banner','-i',str(file),'-af','silencedetect=noise=-38dB:d=0.7','-f','null','-'],capture_output=True,text=True)
 starts=[float(x) for x in re.findall(r'silence_start: ([0-9.]+)',result.stderr)];ends=[float(x) for x in re.findall(r'silence_end: ([0-9.]+)',result.stderr)]
 segments=[];begin=0
 for start,end in zip(starts,ends):
  if start-begin>.2:segments.append([max(0,begin-.07),min(duration,start+.12)])
  begin=end
 if duration-begin>.25:segments.append([max(0,begin-.07),duration])
 print(name,'duration',duration,'segments',segments)
 if len(segments)!=5:continue
 out=Path('public/audio/bots')/name;out.mkdir(parents=True,exist_ok=True)
 for label,(start,end) in zip(['think','play','pass','win','block'],segments):subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-ss',str(start),'-i',str(file),'-t',str(end-start),'-af','loudnorm=I=-19:TP=-4:LRA=5','-ar','24000','-ac','1','-b:a','64k',str(out/(label+'.mp3'))],check=True)
