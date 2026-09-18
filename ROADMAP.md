# Mesa — camino al 75 %

"75 % hecho" quiere decir: un producto que un desconocido puede comprar, instalar en
su sala, y usar con su familia sin que nadie del equipo esté presente — con lo en
línea funcionando aunque todavía sin ranked. Lo que sigue está en orden. Cada hito
cierra antes de abrir el siguiente.

## Hecho — v0.3

- Motor verificado, servidor autoritativo, cuatro teléfonos, mesa 3D
- Bots, reconexión, toma de turno por bot
- Reglas de casa configurables
- Escuelita en el teléfono y en la pantalla grande
- Suite de integración (`npm test`)

## Hito 1 — La prueba del domingo · este fin de semana

Cuatro personas de verdad, una serie completa. Anotar lo que se rompe, sobre todo al
entrar. Arreglar el lunes. **Nada más hasta que esto pase.**

## Hito 2 — Servidor en la nube · 2 días

Hoy el portátil es el servidor y los teléfonos tienen que estar en su wifi. Poner
`server.js` en un host pequeño (Fly, Railway, Render) con HTTPS y un dominio. Los
códigos de sala funcionan desde cualquier red; la mesa puede ser un navegador en
cualquier parte. Es lo que convierte el prototipo en algo que se le puede mandar a
alguien. Sin base de datos todavía: las salas siguen en memoria.

## Hito 3 — Arte · 1–2 semanas, y es dinero

Reemplazar las primitivas: un entorno (patio o colmado) y cuatro personajes
estilizados, más dos variantes de mesa. Comisionar o tienda de assets; pedir
presupuesto antes de comprometerse. Es el mayor costo desconocido del proyecto y el
mayor salto de percepción. Formato glTF, sin animaciones esqueléticas complejas.

## Hito 4 — Sensación · 3–4 días

Reparto y barajado animados en 3D. Sonido: ficha que golpea la mesa, dominó, tranque,
capicúa. Cortes de cámara solo en esos momentos. Confeti no. Esto es lo que hace que
la sala grite.

## Hito 5 — Idiomas · 2 días + traducción

Tabla de cadenas para español, inglés y kreyòl. Selector por teléfono (cada quien en
su idioma; la mesa en el del anfitrión). Kreyòl: verificar con jugadores haitianos si
su ruleset difiere lo suficiente para ser un modo aparte.

## Hito 6 — Cuentas y perfiles · 1 semana

Aquí entra Supabase, **en el proyecto correcto**. Registro ligero (correo o Google),
perfil, historial de series, récord. Los invitados siguen sin cuenta. El desbloqueo
del anfitrión ($14.99) se ata a la cuenta.

## Hito 7 — Juego en línea · 1 semana

Salas privadas por código desde cualquier lugar (ya casi está con el hito 2), salas
públicas con navegador de mesas, y emparejamiento simple. Sin ranked. Aquí empieza
Liga como suscripción aunque solo dé acceso a lo en línea.

## Hito 8 — Voz · 1 semana

WebRTC en malla (4 pares), servidor TURN propio. Una sala abierta, sin canal de
pareja. Mute por jugador, pegajoso. Frases rápidas como respaldo y como puente entre
idiomas.

## Hito 9 — Espectadores y repeticiones · 1–2 semanas

Formato de log de jugadas (reparto + movimientos). Espectar en vivo mostrando solo lo
que la mesa muestra; manos completas solo al cerrar la mano. Espectadores hablan a la
mesa; los jugadores los pueden silenciar. Repetición desde el log con cualquier
cámara. "Partida de la noche" elegida por puntaje de drama, publicada sola.

## Hito 10 — Empaque · 1 semana

PWA instalable para los teléfonos (icono en pantalla de inicio, pantalla completa).
Envoltorio Electron para Steam ($100 de tarifa, recuperable). Precio regional
configurado en las tres tiendas desde el primer día.

**Aquí está el 75 %.** Unas 8–10 semanas de noches y fines de semana, solo, con
sesión de código. Con arte comisionado en paralelo, menos.

## Después del 75 %

- Ranked con parejas asignadas y calificación por decisión — necesita liquidez
- Coaching: "por qué perdiste esa mano", del mismo motor de calificación
- Ruleset haitiano como modo si hace falta
- Anti-abandono y moderación de voz con reportes
- Torneos, temporadas
