# Personajes generados

Mallas generadas con Tripo H3.1 multiview a partir de cuatro vistas coherentes
(frente, tres cuartos, perfil, espalda) hechas con Nano Banana. 17 créditos por
persona: 8 de imágenes, 9 de malla.

`chelo.glb` — 13.778 triángulos, textura de color 4096², 1,80 m de alto real
(`auto_size`). De pie, brazos abajo, pose neutra.

## El esqueleto: resuelto, y por 5 créditos

`chelo_rig.glb` — la misma malla con esqueleto de Meshy (`3d_rigging`, 5
créditos). 22 huesos en convención Mixamo, y TODOS los que mueve el juego
tienen equivalente:

| nuestro | suyo |
|---|---|
| `spine_01`, `spine_02` | `Spine`, `Spine02` |
| `neck_01`, `Head` | `neck`, `Head` |
| `clavicle_l` | `LeftShoulder` |
| `upperarm_l` | `LeftArm` |
| `lowerarm_l` | `LeftForeArm` |
| `hand_l` | `LeftHand` |
| `thigh_l`, `calf_l`, `foot_l`, `ball_l` | `LeftUpLeg`, `LeftLeg`, `LeftFoot`, `LeftToeBase` |
| `pelvis` / `root` | `Hips` |

O sea que la animación entera — el alcance, el trago, la ojeada, la inclinación
— sigue funcionando con sólo RENOMBRAR. No hay dedos, y no importa: los pesos
de los dedos ya los colapsábamos en la mano.

Trae una `Icosphere` suelta sin pesos que hay que borrar al importar.

Esto además SIMPLIFICA el pipeline: la persona generada ya trae ropa, pelo y
cara en su textura, así que se salta todo el modelado de prendas, el pelo
postizo y el pintado de piel de `personaje()`.

## Lo que se descartó: transferir pesos a mano

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
