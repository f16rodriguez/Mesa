/**
 * La gente de Mesa. Diez que se sientan a jugar (cuatro por mesa) y el colmadero, que no juega.
 *
 * Cada uno es un GLB en /models/<modelo>.glb (malla, esqueleto y el clip de sentarse) y otro de
 * solo animación en /models/anim/<modelo>.glb (caminar, esperar, saludar, conversar…), hecho en
 * Blender con scripts/manos/animar.py. Lo que se sabe de cada clip (duración y cuánto avanza el
 * paso) está en personajes-clips.json, del mismo script.
 *
 * Los que no están sentados a la mesa son los que pasan por la calle o entran al colmado: así una
 * cara nunca sale dos veces en pantalla.
 */
import CLIPS from './personajes-clips.json';

export const PERSONAJES=[
 {id:'rafa',nombre:'Don Rafa',modelo:'rafa-upright',sexo:'m',mayor:true},
 {id:'marisol',nombre:'Marisol',modelo:'marisol',sexo:'f'},
 {id:'luis',nombre:'Luis',modelo:'luis-upright',sexo:'m'},
 {id:'carmen',nombre:'Carmen',modelo:'carmen',sexo:'f',mayor:true},
 {id:'yuni',nombre:'Yuni',modelo:'yuni',sexo:'m'},
 {id:'tata',nombre:'Doña Tata',modelo:'tata',sexo:'f',mayor:true},
 {id:'papo',nombre:'Papo',modelo:'papo',sexo:'m'},
 {id:'yari',nombre:'Yari',modelo:'yari',sexo:'f'},
 {id:'nando',nombre:'Nando',modelo:'nando',sexo:'m'},
 {id:'chela',nombre:'Chela',modelo:'chela',sexo:'f'},
];
export const COLMADERO={id:'colmadero',nombre:'Kiko',modelo:'colmadero',sexo:'m'};
/** La mesa de siempre, para lo que no trae reparto (mesas viejas, pruebas). */
export const MESA_CLASICA=['rafa','marisol','luis','carmen'];

/* Los modelos traen la textura también como emisiva a 1: se alumbran solos y la ropa sale plana,
  pegada encima de la escena (la camisa blanca, un parche blanco sin un pliegue). A .4 conservan la
  cara legible en la penumbra y la ropa toma la luz del bombillo y las sombras de verdad (.3 desde
  que las normales están suavizadas, scripts/manos/suavizar.py: antes, con menos luz propia, se veían
  las facetas). */
export const LUZ_PROPIA=.3;
const porId=new Map([...PERSONAJES,COLMADERO].map(p=>[p.id,p]));
export const personaje=id=>porId.get(id)||null;
/** Qué hay hecho de cada uno: el juego solo usa a quien ya tiene sus animaciones. */
export const listo=p=>!!(p&&CLIPS[p.modelo]?.Caminar);
export const clips=p=>CLIPS[p?.modelo]||{};

/** Cuatro distintos al azar, solo entre los que están hechos. */
export function repartoAlAzar(azar=Math.random){
 const hay=PERSONAJES.filter(listo).map(p=>p.id);
 if(hay.length<4)return MESA_CLASICA.slice();
 for(let i=hay.length-1;i>0;i--){const j=Math.floor(azar()*(i+1));[hay[i],hay[j]]=[hay[j],hay[i]];}
 return hay.slice(0,4);
}
/** Un reparto que llega por la red: cuatro ids conocidos y distintos, o la mesa de siempre. */
export function repartoValido(r){
 return Array.isArray(r)&&r.length===4&&new Set(r).size===4&&r.every(id=>PERSONAJES.some(p=>p.id===id))?r:MESA_CLASICA.slice();
}
