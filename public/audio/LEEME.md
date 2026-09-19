# Sonido

Todo lo que suene aquí va **vendorizado**: el juego tiene que sonar en un patio
con wifi y sin datos. Nada de streaming, nada de CDN.

## Lo que ya suena sin poner un archivo

La mesa se sintetiza en el navegador (Web Audio), así que funciona desde el
primer día y no pesa nada:

- **golpe(fuerza)** — la ficha contra el paño. 0.35 al posarla, 1 en la tabana.
- **vidrio()** — la botella que vuelve a su hueco.
- **revoltura()** — el reparto.

## Lo que hay que traer (MP3, opcional)

Si el archivo no está, se salta sin quejarse. Nombres exactos:

| archivo | qué es | cómo se usa |
|---|---|---|
| `musica.mp3` | la pista de fondo (Suno) | en bucle, volumen .34 |
| `ambiente.mp3` | la calle de noche: tráfico lejano, chicharras | en bucle, volumen .30 |
| `moto.mp3` | un motor que pasa | suelto, cada 22–60 s, paneado al azar |
| `gente.mp3` | conversación lejana, muy baja | suelto |
| `perro.mp3` | un perro | suelto |

Mono o estéreo, 44.1 kHz. Los sueltos, cortos (2–6 s) y con silencio al
principio y al final para que entren sin golpe.

El sonido no arranca hasta el primer clic de verdad — el navegador no deja.
