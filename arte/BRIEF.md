# Mesa — brief de arte

Para pasar a un generador (Higgsfield, Tripo, Meshy) o a un artista humano.
Copiar y pegar. Todo lo que no esté aquí, decidirlo con criterio.

---

## Qué es Mesa

Dominó dominicano al estilo Jackbox: **una pantalla grande** (televisor o
portátil en la sala) y **cuatro teléfonos como mandos**. Los cuatro jugadores
están en la misma habitación. La pantalla grande muestra la mesa; el teléfono
muestra tu mano y nada más.

Competencia: **DR Dominoes** (Gammes, $5.99) — 3D y voz, sin ranked, sin modo
co-localizado. Nuestra ventaja NO es el 3D: es la sala y la enseñanza. El arte
solo tiene que dejar de ser un problema.

## La escena

Una esquina de barrio dominicano, **de noche**, delante de un colmado.

- Mesa cuadrada de pino, paño rojo, cuatro atriles de madera en los bordes.
- Un bombillo colgando encima de la mesa: **es la luz principal**, cálida,
  amarilla, dura. Todo lo demás cae en penumbra.
- Guirnaldas de bombillitos cruzando la calle.
- El colmado detrás: pared de bloque pintada (turquesa, coral), zinc
  corrugado, tablillas con botellas de colores, cajones plásticos apilados,
  neverita, afiches pegados.
- Enfrente: calle de asfalto, contén, casitas bajas pintadas con techo de
  zinc y ventanas encendidas, palos y palmas, poste con cables, farola.
- Sillas plásticas de patio. Botellas en la mesa y en el piso.

**El tono es cariño, no pobreza.** Cálido, vivido, con orgullo. Ni postal
turística ni miseria.

## Qué hace falta, en orden de importancia

### 1. Cuatro personajes jugando dominó  ← lo que de verdad falta

Cuatro dominicanos sentados a la mesa. Variedad real:

| | Quién | Señas |
|---|---|---|
| 1 | Hombre mayor, 60-70 | Guayabera clara, sombrero de paja, bigote/barba canosa |
| 2 | Hombre joven, 20-30 | Camiseta, gorra hacia atrás |
| 3 | Mujer, 45-60 | Blusa de color, pañuelo en la cabeza, aretes |
| 4 | Hombre, 30-45 | Camisa de color, afro o rapado |

Tonos de piel del Caribe de verdad: del indio claro al prieto, todos cálidos.

**Estilo:** realismo estilizado. Proporciones humanas, no caricatura, pero
formas simplificadas y limpias — se ve a tres metros en un televisor, no en
primer plano. Referencia de registro: personajes de juego de consola
estilizado, no fotorrealismo.

### 2. Props sueltos (ya tenemos nueve; faltan)

Moto de las de reparto · letrero del colmado · radio de pilas grande ·
mecedora de guano · cajón de refrescos lleno de botellas.

### 3. Imágenes de referencia (para el artista humano)

Tres o cuatro vistas de la escena completa, de noche, con el bombillo como
luz principal. No se usan en el juego: sirven para que el artista sepa a qué
apuntar.

---

## Requisitos técnicos — no negociables

El juego corre en el navegador con three.js y **sin internet** (un patio con
wifi y sin datos). Todo se vendoriza.

- **Formato:** glTF 2.0 binario (`.glb`), un solo archivo por modelo.
- **Escala:** metros reales. Una persona de pie mide 1.70-1.80 m.
- **Ejes:** Y arriba, mirando hacia -Z. Origen a los pies, centrado.
- **Triángulos:** ≤ 15.000 por personaje, ≤ 3.000 por prop.
- **Textura:** UN atlas por modelo, ≤ 2048×2048, color base solamente.
  **Sin luz ni sombra pintadas en la textura** — la iluminación se hornea
  aparte y se multiplica encima. Una textura con sombras ya pintadas sale
  doblemente oscura y no sirve.
- **Sin materiales de cristal, sin transparencia, sin emisión.**

### El esqueleto — aquí es donde falló el intento anterior

Compramos un rigueo automático y vino **degenerado**: todos los huesos del
lado izquierdo colapsados sobre el eje del cuerpo (`LeftArm` en x=0.032
cuando debía estar en x≈0.21) y las colas de los huesos a treinta metros. El
personaje se sentaba con la cabeza torcida cien grados. Se validó por NOMBRE
de hueso y nunca se miró una sola POSICIÓN. No vuelve a pasar.

Lo que hace falta:

- Esqueleto humanoide estándar, **pose de bind en T o en A**.
- Jerarquía: cadera → columna (2-3) → cuello → cabeza; clavícula → brazo →
  antebrazo → mano por lado; muslo → pierna → pie por lado. Los dedos son
  opcionales (les pasamos el peso a la mano).
- **Los huesos tienen que estar DENTRO del cuerpo, en su sitio anatómico y
  simétricos respecto al plano medio.** El hombro izquierdo y el derecho a la
  misma distancia del eje, con el signo cambiado.
- Máximo 4 pesos por vértice, normalizados.
- Sin escalas raras en los huesos (escala 1, o al menos uniforme).
- Sin animaciones. Las poses las hacemos nosotros.

**Cómo se valida antes de aceptar nada:** se imprimen las posiciones de
`upperarm_l` y `upperarm_r` y se comprueba que sean simétricas; se comprueba
que la longitud de cada hueso sea razonable (un húmero mide ~0.30 m, no 31 m);
y se renderiza el personaje en pose de reposo mirando de frente. Si la cabeza
no mira al frente, se rechaza.

## Presupuesto

Pendiente de fijar por el dueño del proyecto. Pedir presupuesto antes de
comprometer nada. El personaje es el único renglón caro; los props salen
baratos y ya hay nueve hechos.
