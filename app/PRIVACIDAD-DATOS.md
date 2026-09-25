# Qué datos guarda Mesa: telemetría

Hechos para escribir la política de privacidad. Si cambia `src/telemetry.ts` o
`public/telemetria.js`, este archivo cambia en el mismo commit.

## Para qué

- Saber si la gente llega a jugar: portada → mesa abierta → teléfonos → manos → serie.
- Saber en qué aparato corre la mesa (tele, computadora, teléfono) para decidir dónde
  invertir en rendimiento.
- Ver los errores que les salen a los jugadores y arreglarlos.
- Medir si la escena 3D aguanta en teles de verdad (`fps`, `calidad_baja`).

## Qué se guarda

Una tabla, `events`, en nuestra base D1 de Cloudflare. Una fila por evento, con
estas columnas y ninguna otra:

| Columna   | Qué es |
| --------- | ------ |
| `ts`      | Hora del **servidor** al recibirlo. La hora del teléfono no se guarda. |
| `visitor` | 32 caracteres hexadecimales al azar que inventa el navegador y guarda en `localStorage` (`mesa-visitante`). No sale del nombre, la cuenta, el perfil, el aparato ni la IP, y no se cruza con ellos. Borrar los datos del sitio lo cambia. |
| `name`    | Uno de los catorce eventos de abajo. El servidor rechaza cualquier otro. |
| `device`  | `tv`, `phone`, `tablet` o `desktop`. El servidor lo deduce del User-Agent al recibir la petición y descarta el User-Agent. |
| `data`    | Detalles cortos: 8 campos como máximo, textos de 300 caracteres como máximo. |

Los eventos y lo que llevan en `data` (todos llevan además `rol`: `host`, `player`,
`spectator` o `practice`):

| Evento             | Cuándo | `data` |
| ------------------ | ------ | ------ |
| `portada`          | Se abre la portada | — |
| `mesa_abierta`     | Una pantalla abre una mesa nueva | — |
| `telefono_entro`   | Alguien entra a una mesa para jugar | — (el nombre que escribe **no** se manda) |
| `espectador_entro` | Alguien entra a mirar | — |
| `practica`         | Empieza o sigue una práctica contra bots | nivel, si es continuación |
| `reparto`          | Se reparte una mano (lo manda solo la tele o la práctica) | número de mano |
| `serie_fin`        | Termina una serie | manos jugadas, tantos de cada pareja, si fue zapato |
| `calidad_baja`     | La escena 3D bajó sola la calidad porque no daba | cuadros por segundo |
| `fps`              | Una muestra al minuto de abrir la escena | cuadros por segundo, calidad, llamadas de dibujo |
| `error`            | Un error de JavaScript en el navegador | mensaje, archivo, línea, columna, pila corta, página, tipo |
| `bloqueo`          | La mesa no pudo repartir por el cobro (lo manda la tele) | motivo: sin cuenta o sin series gratis |
| `cuenta_creada`    | Alguien crea su cuenta | si fue sentado en una mesa |
| `desbloquear`      | Alguien toca Desbloquear | si tenía sesión |
| `pago`             | El servidor confirma un desbloqueo pagado | — |
| `lista`            | Alguien abre el aviso de Mesa en línea o de la Liga, o se apunta | paso (abierta o enviada), de qué pantalla (fin de serie, fin de práctica o portada), a cuál lista (`linea` o `liga`) |

Sobre los errores: el mensaje y la pila se cortan a 300 caracteres; la pila va sin
dominio, sin ruta y sin parámetros de la URL (así no lleva el código de la mesa);
el archivo va sin ruta; la página es solo `portada`, `mesa` o `practica`. Son
mensajes técnicos del código, no texto que escribe la gente.

## Qué no se guarda

- **La IP.** Ni en `events` ni en el contador de límite.
- **El User-Agent.** Solo la clase gruesa de aparato.
- Nombres, chat, código de mesa, fichas, jugadas, correo, cuenta ni perfil.
- Cookies: el navegador manda la de sesión con el envío, pero `/api/t` no la lee.
- **Nada va a terceros.** Ni analítica externa ni SDK de nadie.

## Cuánto tiempo

- `events`: **90 días**. Se borra solo: más o menos uno de cada 50 envíos pasa la
  escoba y se lleva todo lo que tenga más de 90 días.
- `event_limits` (visitante + minuto + cuántos eventos mandó): vence a los 2 minutos
  y se borra con la misma escoba.

## No rastrear

Si el navegador tiene **Do Not Track** o **Global Privacy Control** encendido, no
sale ningún evento del embudo, solo errores. Y el visitante de esos errores se
inventa para esa carga de página y no se guarda en `localStorage`.

## Límites

60 eventos por minuto por visitante (el resto se descarta sin avisar), 20 eventos
y 8 KB por envío, 10 errores por carga de página, y el mismo error se cuenta una
sola vez.

## Borrar los datos de alguien

Los datos no están atados a una persona. Si alguien pide borrar los suyos y nos da
su `mesa-visitante` (se ve en las herramientas del navegador):
`DELETE FROM events WHERE visitor = '<id>'`.

## Pendiente de revisar antes de publicar la política

- **Cloudflare procesa la IP** para entregar cada petición, como cualquier proveedor.
- **Workers Logs:** `observability.enabled` está encendido en `wrangler*.jsonc`. Los
  registros de Cloudflare guardan metadatos de cada invocación (y lo que se imprima
  con `console`) con la retención de su plan. Hay que confirmar qué campos de la
  petición entran ahí y por cuánto tiempo, o apagarlo para `/api/t`.
- **Aparte de la telemetría:** el límite de intentos de entrar o registrarse
  (`auth_limits`, en `src/accounts.ts`) guarda un SHA-256 de IP + minuto. Vence a los
  2 minutos y se borra en el siguiente intento de entrar o registrarse de quien sea.
  También va en la política.

# Qué datos guarda Mesa: cuentas y cobro

Aparte de la telemetría. Todo en la misma D1.

- **Cuentas** (`profiles`): usuario, nombre para mostrar, país y rango de edad si la
  persona los pone, clave cifrada (PBKDF2-SHA256, 100.000 vueltas, con sal), fecha de
  alta y el récord de series. Sesiones (`sessions`): un SHA-256 del token, 30 días.
- **Desbloqueo** (`entitlements`): cuántas series gratis gastó la cuenta, cuándo se
  desbloqueó y con qué transacción.
- **Compras** (`purchases`): id de transacción y de cliente de Paddle, precio, total,
  moneda, estado (completada o reembolsada) y fechas. **Ni tarjeta ni dirección ni
  correo**: eso lo tiene Paddle, que es quien vende (comerciante registrado) y tiene su
  propia política de privacidad.
- **Series cubiertas** (`series_sponsors`): qué cuenta cubrió cada serie y si fue
  gratis o pagada.
- **Lista de espera** (`waitlist`, `/api/lista`): correo, idioma (es/en), de qué pantalla
  vino (fin de serie o de práctica) y fecha. Sin IP ni lazo con la cuenta. Es para UN
  correo cuando abra Mesa en línea; salir de la lista = borrar la fila a pedido. El
  límite (`waitlist_limits`) guarda un SHA-256 de la IP por minuto, 2 minutos.
- A Paddle se le manda, al abrir el cobro, el id de la cuenta de Mesa (`custom_data`)
  para saber a quién desbloquear. Nada más.
