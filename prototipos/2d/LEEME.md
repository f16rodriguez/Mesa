# Prototipo 2D (plan B)

Lo que se hizo el 25–26 sep 2026 para probar Mesa en 2D pintado. **No es el juego**: el lanzamiento va en 3D
y esto se retoma solo si la prueba en la tele sale mal (ver `CLAUDE.md` y `ROADMAP.md`).

- `mesa-en-juego.html`: simulación con el motor y los bots de verdad sobre las pinturas; cámara de la tele y
  cenital. Publicada en https://claude.ai/artifact/6uu5FvacU1QdNM78kPjoi9 . `motor.js` es `motor-entrada.js`
  empaquetado (motor, bot y `chainLayout` del juego).
- `img/`: pintura de cada vista (`tele.jpg`, `arriba.jpg`) y la misma con el paño recortado (`*-delante.webp`),
  que va encima de las fichas. Pinturas hechas con Higgsfield (gpt_image_2_5).
- `video/`: video de 65 s de una mano real. Las pinturas se animan con Kling 3.0 (inicio = fin, bucle de 10 s),
  `procesar.py` saca cuadro a cuadro el paño y su máscara, `armar.py` arma la página en modo video y
  `render.mjs` la graba cuadro a cuadro con el sonido del juego (`sonidos.js`).

Reglas que salieron de probarlo:
1. **La cabeza del que está de espaldas no tapa el paño.** En la primera pintura tapaba el 31 % del tablero.
2. **Cámara automática**: el reparto abre en la vista de la tele, la cuenta se lee desde arriba y en el juego
   se alterna cada dos vueltas (8 turnos, mínimo 9 s), siempre entre turnos, con fundido.
3. Lo que falta para que sea juego: manos que ponen la ficha y gente que reacciona (títeres por piezas).
