# Arte — dirección visual y brief

## La mesa, según las fotos reales — 18 sep, noche

Cuatro fotos de mesas dominicanas de verdad (stock del dueño; por derechos no se
guardan en el repo) fijaron la mesa: **pino claro, paño rojo, borde ancho con
huecos de vaso en las esquinas, atriles integrados donde se para la mano de cada
quien, patas plegables en X, sillas plásticas verdes**, y la pared del colmado
con afiches pegados y su letrero de PARE. Todo eso ya está modelado en
`arte/blender/set.py`. Las manos escondidas viven en los atriles del borde, no
flotando en el paño.

Decisiones tomadas el 18 sep 2026, ajustadas tras el primer pase de imágenes.
Esto alimenta el hito 3 del `ROADMAP.md` y el brief que se manda a los artistas
esta semana.

## La dirección

- **Set fotorreal, personajes estilizados.** El entorno, los props y la luz van a
  realismo fotográfico: materiales de verdad, desgaste, polvo, luz de atardecer.
  Los personajes van estilizados — proporciones simplificadas y atractivas — pero
  renderizados con materiales y luz realistas para que se sienten dentro del set.
  El contraste es la firma visual. (El primer pase salió ilustración/anime de
  línea limpia: exactamente lo que NO queremos.)
- **Entorno v1:** el frente de un **colmado** al atardecer. Concreto pintado y
  desteñido (turquesa y coral), zinc con vetas de óxido, mostrador abierto, cajas
  plásticas apiladas, matas en potes de pintura. La mesa de dominó delante, bajo
  una guirnalda de bombillas cálidas.
- **Luz y paleta:** atardecer entrando a noche — dorado cayendo a azul profundo,
  bombillas tungsteno, acentos mamey y teal.
- **Personajes:** avatares **seleccionables**, roster de 6 al comisionar (los
  cuatro nombres de bot — Chelo, Yuni, Papo, Mayo — más dos; contrato a precio
  por personaje para extender después). Edades, cuerpos y tonos de piel variados;
  cada uno con UNA prenda o prop de silueta fuerte. Caras simplificadas SIEMPRE:
  la cara realista barata es la que asusta en el televisor.
- **Mesas:** la clásica de madera con patas plegables, y la improvisada de
  colmado (tablero sobre cajas apiladas).

## Consecuencia técnica

Entorno fotorreal en three.js = texturas PBR y luz horneada. El set es estático,
así que corre bien en un navegador; los personajes estilizados mantienen bajo el
presupuesto de polígonos. Sigue siendo glTF, sin animación esquelética compleja.

## Qué se comisiona (glTF)

1. Entorno colmado (modular: pared, mostrador, techo, cajas, matas, guirnalda)
2. 6 personajes con 3–4 poses estáticas o blend shapes simples (sentado, jugada,
   celebración, pensando)
3. 2 mesas + atriles
4. Props: fichas héroe, tapitas, cafecito, papel de anotar

## Primer pase con IA — para qué sirve y para qué no

Las imágenes de Gemini y ChatGPT son (1) para alinearnos, (2) el blanco visual
dentro del brief al artista, y (3) marketing provisional. **No son assets del
juego**: la comisión entrega glTF. Confirmar con el artista que acepta
referencias generadas por IA antes de firmar.

Los prompts van en inglés. Hay DOS bloques de estilo — uno para entorno/props,
otro para personajes — porque la dirección es deliberadamente distinta en cada
mitad. Pegar el que toque al inicio de cada prompt.

## Estado v2: el arte v1 se hace en el motor — 18 sep 2026, tarde

Decisión del dueño: **sin comisión para v1**. El arte v1 es procedural, dentro de
`table.html` — cielo de atardecer, colmado con mostrador iluminado, guirnaldas,
sillas plásticas, y los cuatro personajes (el viejo del sombrero, el joven de la
gorra, la doña del pañuelo, el del afro). Se valida con capturas reales del juego
contra el ancla. El correo de comisión (`correo-brief.md`) queda archivado por si
se retoma después del 75 %.

## Estado: dirección validada, loop cerrado — 18 sep 2026

La prueba de integración pasó: `arte/prueba-integracion-v1.png` (la abuela en el
set fotorreal, misma luz, sin choque de estilos). **No se generan más imágenes.**
Con el ancla, la prueba de integración y el casting descrito en el prompt C, el
brief al artista sale ya. Las láminas B/E/F no hacen falta: el artista trabaja
desde el ancla, y el diseño fino de la mesa y las fichas es suyo — las fichas de
la IA salen mal y da igual, el juego real las coloca el motor.

Qué va en el correo a los 2–3 artistas: las dos imágenes, la lista de assets de
abajo, el tope de presupuesto, formato glTF, y la nota del skybox. Pedir
presupuesto y plazo, no bocetos gratis.

## El ancla visual

`arte/ancla-colmado-v1.png` — keyframe del colmado aprobado el 18 sep (prompt A,
desde ChatGPT). **Toda generación nueva y todo asset comisionado se mide contra
esta imagen.** En Gemini, adjuntarla como referencia con "match this exact style
and scene". Va dentro del brief al artista como el blanco a igualar.

Qué tiene que sobrevivir de ella: la pintura descascarada y el óxido del zinc, el
derrame cálido del interior contra el cielo azul-morado, las sillas plásticas
disparejas, la calle que cae hacia el mar con las luces del pueblo. Ese fondo
lejano, en el juego, es un telón pintado (skybox), no geometría — decirlo en el
brief.

## Bloque de estilo — ENTORNO y PROPS

> Photorealistic environment concept art for a video game. Real-world materials
> with visible age and wear: sun-faded painted concrete, rust-streaked zinc
> roofing, scuffed plastic, dust. Photographic lighting and color, like a 35mm
> film still at dusk — golden hour falling into deep blue, warm tungsten
> string-light bulbs, soft shadows. Dominican Republic, working-class
> neighborhood, loved and lived-in, not run-down. No cartoon outlines, no anime,
> no cel shading, no illustration look. No people. No text, lettering, logos,
> brand names or watermarks.

## Bloque de estilo — PERSONAJES

> Stylized 3D game character designed to stand inside a photorealistic set:
> simplified, appealing proportions and simplified facial planes, but rendered
> with realistic materials and photographic dusk lighting — real fabric weave,
> warm skin shading. Stylized-character-in-real-world contrast. Warm, dignified,
> family-friendly. Dominican Republic. No anime, no cartoon outlines, no cel
> shading, no photorealistic faces. No text, logos or watermarks.

## Prompts

**A. Keyframe maestro — Gemini, 16:9, bloque ENTORNO.** Wide establishing shot
of a small Dominican colmado (corner store) front at dusk, seen from the street.
Weathered painted concrete walls in faded turquoise and coral, zinc roof with
rust streaks, open counter with stocked shelves glowing warm inside, stacked
green plastic beverage crates, a hanging scale, plants in paint-can pots. In
front, a square domino table set for four with worn plastic chairs, under a
zigzag string of warm bulbs. Purple-blue evening sky, first stars. Empty scene.
Cinematic 35mm framing, shallow depth of field.

**B. Referencia de modelado — ChatGPT, 16:9, bloque ENTORNO.** Same colmado
storefront as a photoreal environment reference sheet: three panels on one image
— front elevation, 3/4 view, top-down layout. Neutral overcast light, no depth
of field, no people.

**C. Lineup del roster — ChatGPT, 16:9, bloque PERSONAJES.** Character lineup:
eight distinct Dominican domino players in a row on a plain warm-gray studio
background with soft realistic lighting, full body, equal height scale, neutral
A-pose, front view. Ages 20s–70s, mixed genders, body types, skin tones: a
retired baseball fan in a guayabera; a young barber in streetwear; a grandmother
with reading glasses and gold hoops; a motoconcho driver with his cap; a nurse
just off shift; a college student; a fisherman; a salon owner. Each with one
strong silhouette prop or garment.

**D. Turnaround individual — ChatGPT, cuadrado, bloque PERSONAJES.** Character
reference turnaround for one character: top row front / 3/4 / back views,
consistent proportions, plain background, soft realistic light. Bottom row, same
character: seated holding domino tiles and laughing; mid tile-slam; arms crossed
thinking. The character: [pegar descripción del lineup].

**E. Las dos mesas — ChatGPT, 16:9, bloque ENTORNO.** Photoreal prop sheet, two
domino tables side by side on a plain background, each in 3/4 and top-down view.
LEFT: classic square wooden mesa, paint worn through at the corners, folding
metal legs. RIGHT: improvised colmado table — square board over stacked plastic
beverage crates. Four small wooden tile racks at the edges. Product-photography
lighting.

**F. Fichas y props — Gemini, cuadrado, bloque ENTORNO.** Macro prop sheet in
warm dusk light, shallow depth of field: cream domino tiles with engraved pips
and worn edges, scattered and standing in a wooden rack; hero shot of the
double-six; a bottle cap, a small cup of coffee, a folded scoring paper with a
pencil (no legible writing).

**G. Prueba de integración — Gemini, 16:9, pegar LOS DOS bloques.** One stylized
character (the grandmother from the lineup) seated at the domino table in the
photorealistic colmado scene at dusk, holding her tiles, mid-laugh. The set,
props and lighting fully photorealistic; the character stylized with simplified
proportions but realistic materials, lit by the same string lights. **Correr esta
ANTES de comisionar: es la que prueba que el contraste funciona.**

**H. Key art — Gemini, 16:9, pegar LOS DOS bloques.** Four stylized players
around the domino table in front of the photoreal colmado at dusk, mid-game: one
mid tile-slam, the others reacting — laughing, disbelief, a groan. Camera low
across the tabletop, string-light bokeh above, empty sky in the top third for a
future title. Poster composition.

## Cómo correr el loop

1. 4–6 generaciones por prompt; guardar todo, matar sin piedad.
2. Si algo sale con línea de dibujo o cara de anime, añadir al prompt:
   "photographic, RAW photo look, natural light" (entorno) o reforzar
   "simplified facial planes, no realistic face" (personajes).
3. Gemini para keyframes, macro y las mezclas (devolverle la mejor imagen: "same
   style, now..."); ChatGPT para láminas con layout.
4. Un cambio por iteración.
5. La prueba G decide si la dirección aguanta; las 10–15 sobrevivientes son el
   blanco visual del brief y con eso se piden los presupuestos.
