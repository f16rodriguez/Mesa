/**
 * El saludo de la esquina: la barbilla arriba ("¿qué lo que?") y un par de cabeceos, con la mano que
 * sube abierta hasta el hombro y vuelve a bajar. Lo hacen los que pasan (transeuntes.js) y el bot
 * que contesta sentado (scene-motion.js, solo la cabeza), con las mismas curvas.
 *
 * `e`: segundos desde que empieza. Devuelven radianes (positivo = barbilla arriba) y 0..1 (mano).
 */
const s=x=>{x=Math.min(1,Math.max(0,x));return x*x*(3-2*x);};
const tramos=[[0,0],[.3,0],[.55,.3],[.95,.3],[1.3,-.1],[1.55,.04],[1.8,-.06],[2.15,0]];
export function barbilla(e){
 for(let k=1;k<tramos.length;k++){const [t1,v1]=tramos[k],[t0,v0]=tramos[k-1];if(e<t1)return v0+(v1-v0)*s((e-t0)/(t1-t0));}
 return 0;
}
/** Cuánto está arriba la mano: sube de .25 a .8, se queda, baja de 1.7 a 2.4. */
export function mano(e){return e<1.7?s((e-.25)/.55):1-s((e-1.7)/.7);}
/** Dura esto: después, nada. */
export const DURA=2.4;
