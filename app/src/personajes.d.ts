/**
 * Tipos de `personajes.js` — igual que `logic.d.ts`: el módulo queda en JavaScript porque
 * también lo empaqueta la escena del navegador; el servidor solo usa el reparto.
 */
export type Personaje = { id: string; nombre: string; modelo: string; sexo: 'm' | 'f'; mayor?: boolean };
export const PERSONAJES: Personaje[];
export const COLMADERO: Personaje;
/** La mesa de siempre, para lo que no trae reparto (mesas viejas, pruebas). */
export const MESA_CLASICA: string[];
export function personaje(id: string): Personaje | null;
export function listo(p: Personaje | null): boolean;
export const LUZ_PROPIA: number;
export function clips(p: Personaje | null): Record<string, { duracion: number; paso: number; cadera: number }>;
/** Cuatro distintos al azar, solo entre los que están hechos. */
export function repartoAlAzar(azar?: () => number): string[];
/** Un reparto que llega por la red: cuatro ids conocidos y distintos, o la mesa de siempre. */
export function repartoValido(r: unknown): string[];
