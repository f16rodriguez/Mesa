# Plan de ejecución — llegar al 75 % · 18 sep 2026

El 75 % ya está definido en `ROADMAP.md`: un desconocido puede comprar Mesa,
instalarla en su sala y usarla con su familia sin nadie del equipo presente, con lo
en línea funcionando y sin ranked. Este plan no cambia esa meta; cambia el orden y
tapa dos huecos para llegar antes.

## Dónde estamos de verdad

- v0.3 verificado hoy: `npm test` en verde — mesa completa, reconexión, mano
  terminada, sin fugas de estado.
- Hasta hoy el código vivía en un zip y en un portátil. Ya está en GitHub. Ese era
  el riesgo número uno y nadie lo tenía en la lista.
- Hito 1 (la prueba del domingo) es este domingo 21. Sigue siendo la puerta: nada
  de features nuevos hasta que pase.

## Cuatro correcciones al ROADMAP

1. **El arte se comisiona HOY, no en el hito 3.** Es espera de calendario (un
   artista trabajando), no trabajo nuestro. El brief y los presupuestos salen esta
   semana; el hito 3 pasa a ser "integrar lo que llegue". El propio roadmap admite
   que en paralelo se ahorra tiempo — pues en paralelo desde el día uno.
2. **La tabla de cadenas se hace ya, no en el hito 5.** `CLAUDE.md` lo dice
   textual: "desde ahora, no después". Cada pantalla que se toque en los hitos 2–4
   sin tabla es texto que luego hay que extraer a mano. La extracción es mecánica y
   barata hoy; la traducción a inglés y kreyòl sí espera al hito 5.
3. **El hito 9 (espectadores y repeticiones) sale de la puerta del 75 %.** La
   definición del 75 % no lo exige: comprar, instalar, jugar en línea. Son 1–2
   semanas que se mueven a después. El log de jugadas (el formato) sí se define en
   el hito 7, porque es barato entonces y caro después.
4. **El pago no tiene hito y "comprar" está en la definición.** Ningún hito habla
   de procesar los $14.99 ni la Liga: pasarela, impuestos, precio regional. Entra
   en el hito 6 como spike el primer día: Merchant of Record (Paddle o Lemon
   Squeezy) contra Stripe crudo. Con precio regional en RD/LatAm desde el día uno,
   el MoR probablemente gana — que el spike lo confirme.

## Calendario

| Semana | Trabajo | Hito |
|---|---|---|
| ya — sáb 20 | Brief de arte a 2–3 artistas con tope de presupuesto. Preparar config de despliegue (Fly/Railway). Pagar los $100 de Steam: la revisión de tienda tarda semanas y corre sola. | prep |
| dom 21 | La prueba del domingo. Cuatro personas, una serie completa, anotar lo que se rompa. | **1** |
| 22–28 sep | Lunes: arreglar lo del domingo. Después: servidor en la nube con HTTPS y dominio; códigos de sala desde cualquier red. Extraer cadenas a tabla. | **2** |
| 29 sep–5 oct | Reparto y barajado animados, sonido, cortes de cámara. Revisar bocetos del artista. | **4** |
| 6–12 oct | Selector de idioma; mandar la tabla a traducir (EN y kreyòl; verificar ruleset haitiano con jugadores). Abrir proyecto Supabase **nuevo** — no el del Hub. Spike de pagos y decisión. | **5** |
| 13–19 oct | Cuentas, perfil, historial. Desbloqueo del anfitrión $14.99 cobrable de verdad, con precio regional. | **6** |
| 20–26 oct | Salas públicas, navegador de mesas, emparejamiento simple. Liga $4.99/mes. Definir el formato del log de jugadas aunque espectar espere. | **7** |
| 27 oct–2 nov | Voz: WebRTC en malla, TURN propio, mute pegajoso, frases rápidas. Lo más arriesgado del plan — si TURN se atasca, lo en línea sale con frases rápidas y la voz entra la semana siguiente. | **8** |
| 3–9 nov | PWA instalable, envoltorio Electron, build a Steam. Integrar el arte comisionado según llegue. | **10** |

**75 % ≈ domingo 9 de noviembre.** Siete semanas y media desde hoy, contra las 8–10
del roadmap en serie — y sin contar que el arte ya no bloquea nada. Si el domingo
descubre algo gordo, todo corre una semana; la puerta manda.

## El sitio web es el canal principal, no un extra

Mesa ya es una aplicación web: el hito 2 la convierte en un sitio con URL. Lo que
falta para "lanzar desde la web" son dos piezas: una página de aterrizaje y el
cobro en la web — y el cobro ya está en el hito 6. Decidido:

- **Dominios:** la página de aterrizaje estática en Netlify (ya hay cuenta y
  flujo por el Hub); el juego en Fly/Railway con WebSocket en un subdominio
  (`juega.` o `play.`). Netlify no puede hostear `server.js` — es estado vivo
  por WebSocket, no serverless.
- **Economía:** venta directa en la web ≈ 95 % de margen contra ~70 % en Steam.
  Steam se queda para descubrimiento y credibilidad; la web para margen y para
  el loop viral que ya existe: el código de sala ES un enlace que se manda por
  WhatsApp. "Mándale el link" es el marketing.
- **Orden:** la web lanza PRIMERO (el cobro del hito 6 la hace vendible; la
  página de aterrizaje son 1–2 días en la semana del hito 7). Steam llega cuando
  su revisión termine — por eso los $100 se pagan esta semana.
- **Pendiente:** verificar dominio y marca "Mesa" (ya estaba en CLAUDE.md);
  decidir el dominio antes del hito 2 para no migrar códigos QR ni enlaces.

## Definición de hecho — se mide, no se opina

Un desconocido, con solo el enlace:

- [ ] crea su cuenta y paga los $14.99 sin ayuda
- [ ] abre una sala y su familia entra desde otras redes, cada quien en su idioma
- [ ] juegan una serie completa a 200 con reglas de casa
- [ ] un teléfono que se duerme vuelve y recupera su mano, por internet
- [ ] se hablan por voz en la sala en línea
- [ ] instala la PWA en su teléfono; la build de Steam está enviada
- [ ] nadie del equipo estuvo presente ni fue necesario

## Riesgos, en orden

1. **Pagos e impuestos** — el hueco más grande del roadmap. El spike del 6 oct lo
   cierra; no dejarlo para el hito 10.
2. **Arte** — mayor costo desconocido. Presupuesto esta semana lo convierte en
   número; si sale caro, primitivas dignas + entorno bueno y personajes después.
3. **Voz** — respaldo definido arriba; no deja que el hito 8 arrastre el 75 %.
4. **Salas en memoria** — con servidor en la nube, cada deploy mata las salas
   vivas. Aceptable hasta el hito 6; desplegar de madrugada y documentarlo.
