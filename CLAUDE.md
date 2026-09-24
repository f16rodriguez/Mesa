# Mesa — instrucciones para la sesión de código

Dominó dominicano al estilo Jackbox: una pantalla grande, cuatro teléfonos como mandos.
Producto de sala primero; en línea, ranked y espectadores después. Compite contra
DR Dominoes (Gammes, $5.99, 3D + voz, sin ranked, sin modo co-localizado).
La ventaja nuestra es la sala y la enseñanza, no el 3D.

## Invariantes — no se negocian

1. **El servidor es la única autoridad.** El motor (`engine.js`) corre solo en
   `server.js`. Los clientes renderizan estado; nunca calculan reglas.
2. **Nadie recibe fichas ajenas.** `estadoMesa()` manda tablero y conteos, nunca
   manos. `estadoAsiento(i)` manda la mano de `i` y nada más. Son las dos únicas
   funciones que deciden quién ve qué. Si las tocas, `npm test` debe seguir en verde:
   esa prueba escanea los mensajes buscando fugas.
3. **Todo corre sin internet.** three.js vendorizado, cero fuentes ni CDNs externos.
   El caso de uso es un patio con wifi y sin datos.
4. **Un teléfono dormido nunca mata la mesa.** Token de asiento en localStorage,
   reconexión automática, bot toma el turno tras 20 s y lo devuelve al volver.
5. **Paso solo se enciende cuando no hay jugada legal.** El servidor lo valida.

## Reglas del juego (decididas, no reabrir)

Doble seis, 28 fichas, 4 jugadores en 2 parejas cruzadas, sin pozo. El turno pasa a
la derecha (contra el reloj). Sale el doble seis en la primera mano; después sale
quien ganó; en tranque, la pareja que lo ganó (el que trancó si fue su pareja; si
no, el de la pareja ganadora con menos puntos). Ambas cosas cambiadas el 24 sep 2026
por la auditoría de reglas, con visto bueno de Trey. Paso
obligado. Dominó = la pareja ganadora suma los pips en manos del contrario. Tranque =
gana la pareja con menos pips, suma los del contrario; empate → gana quien trancó
(configurable). Capicúa +25 (configurable). Serie a 200. Zapato = 200 a 0.
Reglas de casa configurables desde la mesa. Ranked, cuando exista, juega a 200.

## Decisiones de producto ya tomadas

- Nombre: **Mesa**. Pendiente verificar disponibilidad en tiendas/marca.
- Precio: gratis mirar, practicar y ser invitado. El anfitrión tiene **3 series
  gratis** y después paga **$9.99** una sola vez (decidido el 23 sep 2026; antes
  era $14.99). Cobro por **Paddle** (comerciante registrado: impuestos, reembolsos,
  precio regional). **Liga $4.99/mes o $39/año** para lo en línea (ranked, perfil,
  repeticiones, coaching) — después del lanzamiento. Precio regional ~50 % en
  RD/LatAm desde el día uno. Sin anuncios, sin cosméticos, sin cobro por mesa.
- Kreyòl: fuera por ahora (decidido el 23 sep 2026). Español e inglés.
- **Steam no va primero** (dicho por Trey el 24 sep 2026): sale primero la versión web
  (navegador en la tele, teléfonos como mandos). El arte de Steam queda en `marketing/steam/`.
- **Marca inclusiva** (decidido el 24 sep 2026): la interfaz, las páginas y la tarjeta
  para compartir no dicen "dominicano". Mesa es **dominó**, para todo el que lo juega
  (Caribe, Latinoamérica, la diáspora). Tampoco "en parejas": viene el 1 contra 1.
  Las reglas, el colmado y la gente de la mesa siguen igual; lo que cambia es cómo
  nos presentamos.
- Ranked: parejas **asignadas**, no elegidas. Calificar la **decisión**, no solo el
  resultado — el motor conoce todas las alternativas legales de cada jugada.
- Voz en línea: **una sola sala abierta**, sin canal privado de pareja. Mute por
  jugador, pegajoso entre partidas. Espectadores hablan a la mesa; cada jugador
  puede silenciarlos; nunca ven manos.
- Espectadores y "partida de la noche": todo sale del **log de jugadas** (reparto +
  lista de movimientos), no de video. Elegida por el motor con un puntaje de drama.
- Cámara: modo sutil por defecto; los cortes dramáticos, solo en dominó/tranque/capicúa.
- Idiomas: español e inglés (kreyòl, más adelante). Tablas de cadenas en `app/public/textos.js`.
- **Three Thirteen Studios** (el estudio, de Trey Rodriguez) firma Mesa en tres sitios y
  nada más: el splash al abrir la portada (video de 3,5 s, se salta tocando, una vez por
  sesión, nunca al entrar por QR o enlace de mesa), el logo horizontal abajo en la
  portada y la pantalla de Créditos. Sus colores (carbón `#1C1E1A`, marfil `#F3EEE3`,
  ocre `#C8923A`, ladrillo `#A5432E`) y sus letras (Archivo, Archivo Narrow, IBM Plex
  Mono) solo van ahí; el resto de Mesa conserva su propia cara. Recursos en
  `app/public/marca/`.
- **La cara de Mesa** (paquete de marca del 24 sep 2026, maestros en `marketing/`): limpia
  y sobria, nada de neón ni arcade. Paleta en `app/public/mesa.css` (`--felt`, `--felt-deep`,
  `--ivory`, `--ink`, `--salsa`, `--gold`, `--sky`, `--wood`…): ~70 % paño, 20 % marfil,
  10 % acentos; rojo y oro son para momentos, no para superficies (salvo el botón
  primario). Pareja A = salsa, pareja B = cielo, también en 3D. Letras: Shrikhand solo en
  momentos grandes (nunca < 32 px, siempre con la sombra salsa dura corrida `.043em`),
  DM Sans para la interfaz, IBM Plex Mono para puntos, códigos y rótulos. La portada es
  el logo sobre el paño, sin la mesa 3D detrás (la tele la carga escondida).
- **La esquina es al atardecer** (decidido el 24 sep 2026, con las fotos de referencia de
  Trey): cielo naranja detrás del colmado, lila y luna saliendo sobre la calle, bombillo y
  tubo ya prendidos. El colmado queda en la esquina de verdad (calle de al lado), con
  fachada turquesa y crema, letrero pintado a mano, toldo, segundo piso con tinaco y
  varillas. Todo en `app/src/esquina.js` y `atmosfera.js`. El sonido (`app/src/ambiente.js`)
  es sintetizado: calle, vecinos, nevera, perro, y la bachata de la bocina del colmado; si
  se ponen canciones con licencia en `app/public/audio/musica/`, suenan esas en su lugar.
- Lo que va en `ROADMAP.md` está ordenado. No adelantar ranked: necesita liquidez.

## Estructura

```
server.js          rooms, asientos, filtrado de estado, bots, reconexión
engine.js          reglas puras; sin red ni DOM; verificado con 43.743 manos simuladas
public/table.html  vista de mesa (three.js), lobby, escuelita en pantalla grande
public/phone.html  mando: entrar, lobby, mano, escuelita en el teléfono
test/fourseats.js  integración: 4 teléfonos + mesa contra el servidor real
```

`npm start` → `http://localhost:3000` (mesa) y `http://<ip>:3000/play` (teléfonos).
`npm test` antes de cada commit.

## Cómo trabajar aquí

- Cambios de reglas → primero `engine.js`, luego correr la simulación (ver
  `test/` o pedir una) y solo después tocar clientes.
- Nuevo estado que un cliente necesita → añadirlo en `estadoComun`, `estadoMesa` o
  `estadoAsiento` según quién tenga derecho a verlo. Pensarlo dos veces.
- Interfaz en español rioplatense no: **español dominicano** natural ("te toca",
  "sale", "trancó", "paso"). Nada de "usted". Sin emojis.
- Componentes de ficha (DOM y textura 3D) ya existen; reutilizar, no duplicar.
- El arte v1 se construye por script en Blender: `arte/blender/set.py` arma el
  set a escala real (metros), sienta cuerpos humanos CC0 de Quaternius, les
  MODELA la ropa (cáscara de tela suavizada, desplazada y con grosor, con el
  cuerpo hundido debajo) y les pone pelo, cejas y barba del mismo pack
  (`arte/blender/ubc/`, dominio público), hornea iluminación global Cycles en
  colores de vértice y exporta `public/set.bin`. Regenerar:
  `blender -b -P arte/blender/set.py` (con `RAPIDO=1` salta el horneado para
  iterar pose). Mejorar el arte = mejorar ese script, con capturas del juego
  real.
- **La gente va skinneada, no es una marioneta.** La pose sentada se hornea y
  pasa a ser la pose de REPOSO del esqueleto, así el bind es la identidad y la
  malla cae exactamente sobre los huesos. Se exportan 23 huesos por persona
  (los 40 de los dedos mandan su peso a la mano) más `skinIndex`/`skinWeight`
  por vértice. El cuerpo se parte en dos mallas, piel y ropa, y es SOLO porque
  cada una necesita su material — no porque se muevan por separado.
- En `table.html` la malla de una persona cuelga de la RAÍZ de la escena con
  matriz identidad: quien la mueve es el esqueleto, que sí cuelga de
  `figuras[s]`. Si colgara de la figura, el asiento se aplicaría dos veces.
  Las mallas van con `frustumCulled = false` (su caja vive en el origen).
- Las poses del juego se escriben en ejes de la PERSONA y `girarFig` las
  convierte al espacio local del hueso: el hueso del brazo apunta a lo largo
  del brazo, no al mundo. Para volver a la pose sentada, `reposo(hueso)` —
  nunca `quaternion.identity()`.
- La jugada es la animación que importa: IK de dos huesos con polo lleva la
  muñeca, `nivelarMano` la mantiene nivelada (si hereda el giro del codo la
  ficha sale de lado) y la ficha se cuelga de la MUÑECA de verdad, no de la
  curva teórica, así nunca se despega de la palma.
- Sin dependencias nuevas sin motivo. Hoy solo `ws`.
- Commits pequeños, en español, imperativo: "Añade reparto animado en 3D".
