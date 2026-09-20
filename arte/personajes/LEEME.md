# Personajes generados

Mallas generadas con Tripo H3.1 multiview a partir de cuatro vistas coherentes
(frente, tres cuartos, perfil, espalda) hechas con Nano Banana. 17 créditos por
persona: 8 de imágenes, 9 de malla.

`chelo.glb` — 13.778 triángulos, textura de color 4096², 1,80 m de alto real
(`auto_size`). De pie, brazos abajo, pose neutra.

## Lo que falta: el esqueleto

La malla viene SIN huesos. Todas las animaciones del juego mueven huesos con
nombre — `upperarm_l`, `hand_r`, `spine_01` — así que no sirve el auto-rig
genérico: los nombres no coincidirían y habría que reescribir la animación.

El plan es TRANSFERIR los pesos desde el esqueleto CC0 de Quaternius
(`arte/blender/ubc/`), que ya tiene esos nombres. La transferencia es por
proximidad, así que los dos cuerpos tienen que estar en la MISMA pose antes:
hay que bajarle los brazos al cuerpo base para que coincida con éste, aplicar
esa pose como reposo, transferir, y recién entonces sentarlo.

Ahí es donde esto puede fallar, y por eso se hace con UNA persona antes de
gastar en las otras tres.

## La referencia

`chelo_ref.png` es la vista de frente. Cualquier personaje nuevo se mide contra
ella: luz plana frontal, fondo gris liso, cuerpo entero con margen, sin
sombrero ni props (el sombrero se le pone aparte, con su hueso).
