# La prueba del domingo — hoja de ruta

Una página. Si algo no está aquí, no hace falta para hoy.

## Lo que hace falta

- El portátil (es la mesa y también el servidor).
- Cuatro teléfonos, **todos en el mismo wifi que el portátil**.
- Una serie completa a 200.

## Arrancar

1. Doble clic en **`arranca.command`**, en la carpeta de Mesa.
   La primera vez macOS avisa que es de un desarrollador sin identificar:
   clic derecho sobre el archivo → **Abrir** → **Abrir**. Solo la primera vez.
2. Si dice que falta Node, sigue lo que pone en pantalla (instalador de
   nodejs.org, botón LTS), cierra la ventana y vuelve a hacer doble clic.
3. Se abre el navegador con la mesa. **Pon el navegador en pantalla completa**
   (`Control` + `Command` + `F`).

## Sentar a los cuatro

En la pantalla sale un **QR grande**. Cada quien le apunta la cámara del
teléfono y entra directo: solo tiene que escribir su nombre. No hay que
teclear ningún código.

Si una cámara no lo engancha, al lado del QR está la dirección
(`http://192.168.x.x:3000/play`) y las cuatro letras de la mesa.

Cuando los cuatro estén sentados, el botón de abajo se enciende: **Empezar**.

Si falta gente y quieres probar igual: **Rellenar lo que falte con bots**.

## Qué anotar mientras juegan

Escribe en el teléfono o en papel, con la hora:

- Cualquiera que **no consiga entrar**, y qué le salió en pantalla.
- Cualquiera que **se caiga** (pantalla en blanco, "desconectado", se quedó
  pegado) — y si volvió solo al desbloquear el teléfono.
- Cualquier jugada que el servidor **no dejó hacer** y el jugador creía legal.
- Cualquier momento en que alguien preguntó **"¿y ahora qué?"**. Eso es un
  fallo de la pantalla, no del jugador.
- El final de la serie: ¿quedó claro quién ganó y por cuánto?

## Lo que ya sabemos que pasa

- **Un teléfono que se duerme** no rompe la mesa: a los 20 s un bot toma el
  turno y lo devuelve cuando el dueño vuelve. Es a propósito.
- **Cerrar la pestaña del teléfono** y volver a abrirla recupera el asiento
  (el token queda guardado). Si alguien lo prueba, mejor.

## Si se cae del todo

Cierra la ventana negra de Terminal y vuelve a hacer doble clic en
`arranca.command`. Los asientos se reclaman solos al recargar los teléfonos.
La serie en curso se pierde: anótalo como fallo.

## Después

Manda las notas tal cual, sin ordenar. El lunes se arregla lo que salga; nada
nuevo entra hasta que esto pase limpio.
