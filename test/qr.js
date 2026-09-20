/* El QR de la mesa. Se saca del propio table.html — no de una copia — para que
   la prueba cubra el código que se sirve de verdad.
   Las huellas de abajo salieron de comparar módulo a módulo contra la librería
   `qrcode` de Python (nivel M, modo byte): las ocho máscaras salían idénticas.
   Si alguna cambia, o el QR dejó de ser válido o alguien tocó el codificador. */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const html = fs.readFileSync(path.join(__dirname, '..', 'public', 'table.html'), 'utf8');
const i = html.indexOf('const QR = (() => {');
if (i < 0) { console.error('  FALLA — no encontré el módulo QR en table.html'); process.exit(1); }
const fin = html.indexOf('\n})();', i);
const fuente = html.slice(i, fin + 6);
const QR = new Function(fuente + '\nreturn QR;')();

const CASOS = [
  ['http://192.168.1.23:3000/play?s=ABCD', 29,
   'beaea987ee643248498cab3e23b5c8e4809799656f7c5bcc4c0e054d32239d84'],
  ['https://juega.mesa.do/play?s=KXQP', 29,
   '341f6cac3296fe309ea62a2dcbc33108e3eadf505cfa24f64fec9c521a78429e'],
  ['a', 21,
   'e8ab680854e4019c4ac89bd0e19dfe1f7e967f3cafd048091b3e3ec474b6f431'],
];

let fallos = 0;
for (const [texto, lado, huella] of CASOS) {
  let m;
  try { m = QR.matriz(texto); }
  catch (e) { console.error('  FALLA —', texto, e.message); fallos++; continue; }
  const filas = m.map(f => Array.from(f).join(''));
  if (m.length !== lado) {
    console.error('  FALLA — tamaño', m.length, 'esperaba', lado, 'para', texto);
    fallos++; continue;
  }
  const h = crypto.createHash('sha256').update(filas.join('\n')).digest('hex');
  if (h !== huella) {
    console.error('  FALLA — el QR de', texto, 'cambió\n    huella', h);
    fallos++;
  }
  // los tres buscadores, fila a fila: si no están donde manda la norma no hay
  // cámara que lo enganche
  const OJO = ['1111111','1000001','1011101','1011101','1011101','1000001','1111111'];
  const buscador = (ox, oy) => OJO.every((fila, y) =>
    fila === Array.from(m[oy+y]).slice(ox, ox+7).join(''));
  if (!buscador(0,0) || !buscador(lado-7,0) || !buscador(0,lado-7)) {
    console.error('  FALLA — buscadores mal puestos en', texto); fallos++;
  }
}
if (fallos) { console.error('\n  QR: ' + fallos + ' fallo(s).'); process.exit(1); }
console.log('  OK — QR: tres códigos, tamaño y contenido exactos.');
