# Personajes generados

Mallas generadas con Tripo H3.1 multiview a partir de cuatro vistas coherentes
(frente, tres cuartos, perfil, espalda) hechas con Nano Banana. 17 créditos por
persona: 8 de imágenes, 9 de malla.

`chelo.glb` — 13.778 triángulos, textura de color 4096², 1,80 m de alto real
(`auto_size`). De pie, brazos abajo, pose neutra.

## El esqueleto de Meshy está ROTO. Medido, no opinado.

`chelo_rig.glb` trae 22 huesos con nombres correctos — y por eso lo di por
bueno, que fue el error: comprobé los NOMBRES y no comprobé una sola POSICIÓN.

Posiciones reales de los huesos del lado izquierdo en el rig de origen:

| hueso | x |
|---|---|
| `LeftArm` | 0,032 |
| `LeftForeArm` | 0,069 |
| `LeftHand` | 0,112 |
| `LeftUpLeg` | 0,035 |
| `LeftFoot` | −0,030 |

Todos pegados al EJE del cuerpo. Un hombro izquierdo de verdad está en x≈0,18
— el del cuerpo CC0 está en 0,212. Y las colas son peores: la de `LeftArm` cae
a 31 metros. El esqueleto es degenerado: no tiene separación de miembros, así
que el brazo pivota desde el centro del pecho y la malla se desgarra.

Los 5 créditos se perdieron. La lección no: **comprobar posiciones, no nombres.**

## El plan bueno, y es gratis: transferir pesos

El esqueleto CC0 de Quaternius (`arte/blender/ubc/`) SÍ tiene las articulaciones
donde van y ya usa nuestros nombres. Se le transfieren los pesos a la malla
generada con el modificador Data Transfer (por superficie más cercana) y se
liga a ESE esqueleto. Así toda la animación sigue funcionando sin tocarla.

Los dos cuerpos tienen que estar en la misma pose antes de transferir: el
generado está de pie con los brazos abajo, el base en A. Hay que bajarle los
brazos al base, aplicar esa pose como reposo, y recién entonces transferir.

## Lo que NO se hace

Volver a pagar rigging esperando otro resultado. El mismo modelo sobre la misma
malla da el mismo esqueleto.

## El mapa de nombres, que sigue sirviendo

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
