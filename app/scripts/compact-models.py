import pathlib,struct,json,io
from PIL import Image
for path in pathlib.Path('public/models').glob('*.glb'):
 data=path.read_bytes();jlen=struct.unpack_from('<I',data,12)[0];j=json.loads(data[20:20+jlen]);start=20+jlen;blen=struct.unpack_from('<I',data,start)[0];binary=data[start+8:start+8+blen];targets={img['bufferView']:img for img in j.get('images',[]) if 'bufferView' in img};chunks=[];offset=0
 for i,view in enumerate(j['bufferViews']):
  payload=binary[view.get('byteOffset',0):view.get('byteOffset',0)+view['byteLength']]
  if i in targets:
   im=Image.open(io.BytesIO(payload)).convert('RGB');im.thumbnail((1536,1536));buf=io.BytesIO();im.save(buf,format='JPEG',quality=88);payload=buf.getvalue();targets[i]['mimeType']='image/jpeg'
  view['byteOffset']=offset;view['byteLength']=len(payload);view['buffer']=0;payload+=b'\0'*((-len(payload))%4);chunks.append(payload);offset+=len(payload)
 outbin=b''.join(chunks);j['buffers'][0]['byteLength']=len(outbin);outjson=json.dumps(j,separators=(',',':')).encode();outjson+=b' '*((-len(outjson))%4)
 out=struct.pack('<III',0x46546c67,2,12+8+len(outjson)+8+len(outbin))+struct.pack('<II',len(outjson),0x4e4f534a)+outjson+struct.pack('<II',len(outbin),0x004e4942)+outbin;path.write_bytes(out);print(path.name,len(data),'->',len(out))
