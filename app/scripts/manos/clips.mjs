// Junta lo que animar.py midió de cada personaje (public/models/anim/<modelo>.json) en
// src/personajes-clips.json, que va dentro del bundle: duración y paso de cada clip.
//   node scripts/manos/clips.mjs
import fs from 'node:fs';
const dir='public/models/anim',out={};
for(const f of fs.readdirSync(dir).filter(f=>f.endsWith('.json')).sort()){
 const d=JSON.parse(fs.readFileSync(`${dir}/${f}`,'utf8')),m=f.replace('.json','');out[m]={};
 for(const [c,v] of Object.entries(d))out[m][c]={duracion:v.duracion,paso:v.paso,cadera:v.cadera};
}
fs.writeFileSync('src/personajes-clips.json',JSON.stringify(out,null,1)+'\n');
console.log('clips:',Object.keys(out).join(', '));
