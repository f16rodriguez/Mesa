# Mesa — brief de arte

Para pasar a un generador (Higgsfield, Tripo, Meshy) o a un artista humano.
Copiar y pegar.

---

## Qué es Mesa

Dominó dominicano al estilo Jackbox: **una pantalla grande** (televisor o
portátil en la sala) y **cuatro teléfonos como mandos**. Los cuatro jugadores
están en la misma habitación. La pantalla grande muestra la mesa; el teléfono
muestra tu mano y nada más.

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

## El encuadre manda

El plano es **la mesa**. Lo que se ve en pantalla, en orden de importancia:
el paño, la cadena de fichas, los atriles, y las manos y antebrazos entrando
por los bordes del cuadro. Las caras no viven en el plano de juego — aparecen
en los cortes: dominó, tranque, capicúa, zapato.

Lo que hay detrás de la mesa es **fondo**: se ve, da sitio y hora, y no tiene
que reaccionar a nada.

## Qué hace falta

### 1. Planos de fondo (vídeo en bucle, 4K)

La calle detrás de la mesa, de noche, con el bombillo como luz principal.
Tres o cuatro ángulos, uno por posición de cámara. En cada uno pasa algo: un
motor que cruza, alguien que camina por la acera de enfrente, las guirnaldas
parpadeando, humo de un fogón. **Bucle limpio**, sin corte visible.

Sin gente sentada a la mesa y sin mesa: solo el sitio.

### 2. Cortes de emoción (vídeo corto)

Tres a cinco segundos cada uno, sin tablero a la vista:

- **Dominó** — el que gana suelta la última ficha y la mesa estalla
- **Tabana** — la ficha cae de golpe sobre el paño, en primer plano
- **Capicúa** — la ficha entra por las dos puntas, plano cerrado
- **Tranque** — cuatro caras mirándose, nadie puede
- **Zapato** — la celebración grande, 200 a 0
- **Te toca** — alguien levanta la vista

### 3. Cuatro personajes

Para los cortes y para la pantalla de título. Variedad real:

| | Quién | Señas |
|---|---|---|
| 1 | Hombre mayor, 60-70 | Guayabera clara, sombrero de paja, bigote canoso |
| 2 | Hombre joven, 20-30 | Camiseta, gorra hacia atrás |
| 3 | Mujer, 45-60 | Blusa de color, pañuelo en la cabeza, aretes |
| 4 | Hombre, 30-45 | Camisa de color, afro o rapado |

Tonos de piel del Caribe de verdad: del indio claro al prieto, todos cálidos.

**Estilo:** realismo estilizado. Proporciones humanas, formas simplificadas y
limpias. Se ve a tres metros en un televisor.

### 4. Imágenes fijas (4K)

Pantalla de título · fondo del lobby · tarjeta de fin de serie · tienda y
redes.

### 5. Props sueltos en 3D

Moto de reparto · letrero del colmado · radio de pilas · mecedora de guano ·
cajón de refrescos.

---

## Requisitos técnicos

El juego corre en el navegador con three.js y **sin internet** (un patio con
wifi y sin datos). Todo se vendoriza y se sirve desde el propio portátil.

**Vídeo:** MP4 H.264, 16:9. Bucle sin corte. Presupuesto de tamaño: el
paquete entero del juego por debajo de 500 MB.

**Imágenes:** PNG o JPG, 4K, 16:9.

**Modelos 3D:**

- glTF 2.0 binario (`.glb`), un archivo por modelo.
- Escala en metros. Una persona de pie mide 1.70-1.80 m.
- Y arriba, mirando hacia -Z, origen a los pies y centrado.
- ≤ 15.000 triángulos por personaje, ≤ 3.000 por prop.
- UN atlas de textura, ≤ 2048×2048, color base solamente.
  **Sin luz ni sombra pintadas en la textura:** la iluminación se hornea
  aparte y se multiplica encima.
- Sin cristal, sin transparencia, sin emisión.

**Si el modelo lleva esqueleto:**

- Humanoide estándar, **pose de bind en T o en A**.
- Cadera → columna (2-3) → cuello → cabeza; clavícula → brazo → antebrazo →
  mano por lado; muslo → pierna → pie por lado. Dedos opcionales.
- Huesos dentro del cuerpo, en su sitio anatómico y **simétricos respecto al
  plano medio**: el hombro izquierdo y el derecho a la misma distancia del
  eje, con el signo cambiado.
- Máximo 4 pesos por vértice, normalizados. Escala de hueso 1.
- Sin animaciones: las poses se hacen aquí.

**Se acepta contra estas tres pruebas:** que `upperarm_l` y `upperarm_r` sean
simétricos; que cada hueso mida lo que tiene que medir (un húmero ~0.30 m);
y que el personaje renderizado en reposo mire al frente.
