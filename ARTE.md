# Arte — dirección visual y brief

Decisiones tomadas el 18 sep 2026. Esto alimenta el hito 3 del `ROADMAP.md` y el
brief que se manda a los artistas esta semana.

## La dirección

- **Estilo:** low-poly estilizado y cálido. Siluetas limpias, texturas pintadas a
  mano, geometría suave con facetas visibles. Nada de fotorrealismo. Se lee desde
  el sofá en un televisor.
- **Entorno v1:** el frente de un **colmado** al atardecer. Pared de concreto
  pintada (turquesa y coral desteñidos), techo de zinc, mostrador abierto, cajas
  plásticas apiladas, matas en potes de pintura. La mesa de dominó delante, bajo
  una guirnalda de bombillas cálidas.
- **Luz y paleta:** atardecer entrando a noche — cielo dorado que cae a azul
  profundo, bombillas cálidas, acentos mamey y teal (el mamey ya vive en la
  interfaz del teléfono).
- **Personajes:** avatares **seleccionables**, roster de 6 al comisionar (los
  cuatro nombres de bot — Chelo, Yuni, Papo, Mayo — son los primeros cuatro; dos
  más de arranque; el contrato a precio por personaje para extender después).
  Edades, cuerpos y tonos de piel variados; cada uno con UNA prenda o prop de
  silueta fuerte. Ojo: esto es ~2x el presupuesto de un elenco fijo — decidido
  con esa consecuencia en la mano.
- **Mesas:** dos variantes — la mesa clásica de madera con patas plegables, y la
  improvisada de colmado (tablero sobre cajas apiladas).

## Qué se comisiona (glTF, sin animación esquelética compleja)

1. Entorno colmado (modular: pared, mostrador, techo, cajas, matas, guirnalda)
2. 6 personajes con 3–4 poses estáticas o blend shapes simples (sentado, jugada,
   celebración, pensando)
3. 2 mesas + atriles
4. Set de props: fichas héroe, tapitas, cafecito, papel de anotar

## Primer pase con IA — para qué sirve y para qué no

Las imágenes de Gemini y ChatGPT son (1) para alinearnos entre nosotros, (2) el
blanco visual dentro del brief al artista, y (3) marketing provisional. **No son
assets del juego**: la comisión entrega glTF. Confirmar con el artista que acepta
referencias generadas por IA antes de firmar.

Los prompts van en inglés — los modelos de imagen rinden mejor así. El bloque de
estilo se pega al inicio de cada prompt para mantener consistencia entre
herramientas y sesiones.

## Bloque de estilo (pegar al inicio de TODO prompt)

> Warm stylized low-poly 3D game art, hand-painted textures, clean readable
> silhouettes, softly faceted geometry. Dominican Republic, dusk: golden-hour sky
> fading into deep blue, warm string-light bulbs, mamey-orange and teal accents.
> Family-friendly and inviting. No photorealism, no text, no lettering, no logos,
> no watermarks, no real brand names.

## Prompts

**A. Keyframe maestro — Gemini, 16:9.** Wide establishing shot of a small
Dominican colmado (corner store) front at dusk, seen from the street. Painted
concrete walls in faded turquoise and coral, zinc roof, open counter with stocked
shelves behind, stacked green plastic beverage crates, a hanging scale, plants in
paint-can pots. In front, a square domino table set for four with plastic chairs,
lit by a zigzag string of warm bulbs overhead. Purple-blue evening sky, first
stars. No people. Low-poly stylized game environment concept art.

**B. Referencia de modelado — ChatGPT, 16:9.** Same colmado storefront as a game
environment reference sheet: three panels on one image — front elevation, 3/4
view, top-down layout. Flat neutral lighting, no depth of field, no people.
Label-free. Low-poly game environment art reference.

**C. Lineup del roster — ChatGPT, 16:9.** Character lineup sheet: eight distinct
Dominican domino players standing in a row on a plain warm-gray background, full
body, equal height scale, neutral A-pose, front view. Mix of ages 20s–70s,
genders, body types, skin tones: a retired baseball fan in a guayabera; a young
barber in streetwear; a grandmother with reading glasses and gold hoops; a
motoconcho driver with his cap; a nurse just off shift; a college student; a
fisherman; a salon owner. Each with one strong silhouette prop or garment.
Stylized low-poly game characters, simple painted facial features.

**D. Turnaround individual — ChatGPT, cuadrado, uno por personaje ganador.**
Character reference turnaround sheet for one character: top row front / 3/4 /
back views, consistent proportions, plain background. Bottom row, same character:
seated at a domino table holding tiles and laughing; mid tile-slam; arms crossed
thinking. The character: [pegar descripción del lineup]. Low-poly game character
concept, hand-painted textures.

**E. Las dos mesas — ChatGPT, 16:9.** Game prop concept sheet, two domino tables
side by side on a plain background, each in 3/4 view and top-down view. LEFT: a
classic square wooden mesa, worn painted top, folding metal legs. RIGHT: an
improvised colmado table — square board over stacked plastic beverage crates.
Include four small wooden tile racks at the edges. Low-poly, hand-painted.

**F. Fichas y props — Gemini, cuadrado.** Close-up prop sheet in warm dusk light:
cream domino tiles with engraved pips and slight edge wear, scattered and standing
in a wooden rack; hero shot of the double-six; a bottle cap, a small cup of
coffee, a folded scoring paper with a pencil (no legible writing). Low-poly game
prop concept art.

**G. Key art — Gemini, 16:9, para tienda.** Four players around the domino table
in front of the colmado at dusk, mid-game: one mid tile-slam, the others reacting
big — laughing, disbelief, a groan. Camera low across the tabletop, string-light
bokeh above, empty sky at the top third for a future title. Poster composition.

## Cómo correr el loop

1. 4–6 generaciones por prompt; guardar todo, matar sin piedad.
2. Gemini para keyframes y variaciones (devolverle la mejor imagen: "same style,
   now..."); ChatGPT para láminas con layout (lineups, turnarounds, paneles).
3. Un cambio por iteración, no tres.
4. Las 10–15 sobrevivientes son el blanco visual del brief. Con eso se piden los
   presupuestos.
