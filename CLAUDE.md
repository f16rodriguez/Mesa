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

Doble seis, 28 fichas, 4 jugadores en 2 parejas cruzadas, sin pozo. Sale el doble
seis en la primera mano; después sale quien ganó (en tranque, quien trancó). Paso
obligado. Dominó = la pareja ganadora suma los pips en manos del contrario. Tranque =
gana la pareja con menos pips, suma los del contrario; empate → gana quien trancó
(configurable). Capicúa +25 (configurable). Serie a 200. Zapato = 200 a 0.
Reglas de casa configurables desde la mesa. Ranked, cuando exista, juega a 200.

## Decisiones de producto ya tomadas

- Nombre: **Mesa**. Pendiente verificar disponibilidad en tiendas/marca.
- Precio: gratis mirar y ser invitado; **$14.99** desbloqueo del anfitrión (una vez);
  **Liga $4.99/mes o $39/año** para lo en línea (ranked, perfil, repeticiones,
  coaching). Precio regional ~50 % en RD/LatAm desde el día uno. Sin anuncios,
  sin cosméticos, sin cobro por mesa.
- Ranked: parejas **asignadas**, no elegidas. Calificar la **decisión**, no solo el
  resultado — el motor conoce todas las alternativas legales de cada jugada.
- Voz en línea: **una sola sala abierta**, sin canal privado de pareja. Mute por
  jugador, pegajoso entre partidas. Espectadores hablan a la mesa; cada jugador
  puede silenciarlos; nunca ven manos.
- Espectadores y "partida de la noche": todo sale del **log de jugadas** (reparto +
  lista de movimientos), no de video. Elegida por el motor con un puntaje de drama.
- Cámara: modo sutil por defecto; los cortes dramáticos, solo en dominó/tranque/capicúa.
- Idiomas: español, inglés, kreyòl. Tablas de cadenas desde ahora, no después.
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
- Los personajes 3D son primitivas de relleno. No invertir en ellos: se reemplazan.
- Sin dependencias nuevas sin motivo. Hoy solo `ws`.
- Commits pequeños, en español, imperativo: "Añade reparto animado en 3D".
