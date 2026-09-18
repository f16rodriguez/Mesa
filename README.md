# Mesa

Dominó dominicano para una pantalla y cuatro teléfonos. Prototipo co-localizado:
todos en la misma sala, la mesa en un televisor o portátil, la mano de cada quien
en su propio teléfono.

## Correrlo

```bash
npm install
npm start
```

Dos direcciones aparecen en la consola:

- **La mesa** — `http://localhost:3000` en el portátil. Conéctalo al televisor por HDMI
  o cast. Sale un código de cuatro letras.
- **Los teléfonos** — `http://<tu-ip>:3000/play`, en el mismo wifi. Escriben el código,
  su nombre, y se sientan.

No hay base de datos, ni cuentas, ni nada que desplegar. El portátil es el servidor.
Si el wifi no tiene internet, da igual: three.js está vendorizado y no se carga
ninguna fuente de fuera.

Con menos de cuatro personas, **Rellenar lo que falte con bots** completa la mesa.

```bash
npm test     # cuatro asientos, reconexión, mano completa, y la prueba de fugas
```

## Cómo está armado

```
server.js          el árbitro: rooms, asientos, y el motor
engine.js          las reglas, sin nada de red ni de pantalla
public/table.html  la mesa en 3D (three.js, vendorizado)
public/phone.html  el mando: tu mano y nada más
test/fourseats.js  la prueba de integración
```

**El servidor es la autoridad.** El motor corre solo en `server.js`. A la vista de
mesa nunca se le manda una ficha de nadie; a cada teléfono se le manda su mano y
ninguna otra. `estadoMesa()` y `estadoAsiento()` son los dos únicos sitios donde se
decide quién ve qué — si tocas eso, corre `npm test`, que comprueba exactamente eso.

Esto no es paranoia de más: sin ello, la partida en línea y el ranked salen rotos de
fábrica, y arreglarlo después es rehacer el cliente.

## Las reglas

Doble seis, 28 fichas, cuatro jugadores en dos parejas, sin pozo. Sale el doble seis
la primera mano; después sale quien ganó. Paso obligado si no tienes ficha. Dominó,
tranque, capicúa, zapato. Serie a 200.

Configurables desde la mesa: puntos de la serie (100/200), capicúa (no / +25 / +50),
qué pasa en un tranque empatado, y si se cuentan solo las fichas del contrario o las
cuatro manos.

El motor se verificó sobre 43.743 manos simuladas: ni una jugada ilegal, ni una
cadena rota, ni un bloqueo, y los 168 puntos de pips cuadran en cada turno.

## Teléfonos que se duermen

Es lo que más rompe una mesa real, así que está resuelto desde el principio:

- El asiento se guarda con un token en `localStorage`. Refrescar, salir de la app o
  quedarse sin pantalla no pierde el sitio — al volver, se reclama solo.
- Si un asiento lleva más de 20 segundos sin aparecer, **el bot juega por él** y la
  mesa sigue. Cuando el teléfono vuelve, recupera su mano y su turno.
- El bot bloquea el número que un contrario ya pasó, evita ahogar a su pareja, y bota
  peso cuando no hay lectura. No es fuerte; juega como alguien de la mesa, no al azar.

## La escuelita

En el teléfono, **¿Cómo se juega?** (en la pantalla de entrar y en el lobby) abre un
tutorial de seis pasos con una mano de verdad delante: se toca, no se lee. Enseña lo
que hay que enseñar el domingo — que el teléfono ES tu mano, que solo se juega por
las dos puntas, qué pasa cuando una ficha pega por los dos lados, y que Paso solo se
enciende cuando de verdad no puedes. Dos minutos.

En la pantalla grande, **Cómo se juega — explicarlo aquí** abre la misma lección en
seis pasos, pero para mirarla en grupo: la mesa en 3D se mueve con cada paso y sirve
de pizarra mientras uno explica señalando. Se avanza con las flechas y se sale con Esc.
Úsala primero, con los cuatro mirando; la del teléfono queda para el que llegue tarde.

Las reglas de conteo (dominó, tranque, capicúa, zapato) están también en el lobby,
para quien las quiera mientras los demás se sientan.

## Lo que NO hay, a propósito

Nada de esto está, y ninguno hace falta para probar la idea este fin de semana:

- juego en línea, salas públicas, ranked, perfiles
- voz, espectadores, repeticiones
- arte de verdad (los jugadores son primitivas)
- inglés, kreyòl
- cualquier cosa que necesite una cuenta o un despliegue

## El domingo

Siéntate con cuatro personas de verdad y juega una serie entera. Lo que hay que mirar
no es si funciona — funciona — sino:

1. ¿Alguien mira su teléfono cuando no le toca? Si sí, la pantalla grande no está
   diciendo lo suficiente.
2. ¿Cuánto tardan en sentarse los cuatro desde cero? Si pasa de un minuto, el problema
   está en entrar, no en el juego.
3. ¿Se pelean con el botón de escoger extremo? Es la única interacción del juego que no
   existe en una mesa física.
4. ¿Alguien se quedó sin entender por qué no podía jugar una ficha?
5. ¿Se rieron?

Anota lo que se rompa. Eso es el lunes.
