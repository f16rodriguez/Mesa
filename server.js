/* Mesa — servidor de mesa.
 *
 * Una sola cosa importa aquí: el servidor es la autoridad. El motor corre
 * SOLO en este proceso, y a cada cliente se le manda únicamente lo que su
 * asiento tiene derecho a ver. La vista de mesa (el televisor) nunca recibe
 * fichas de nadie; cada teléfono recibe su propia mano y ninguna otra.
 * Si eso se rompe, se rompe el juego entero.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');
const { WebSocketServer } = require('ws');
const E = require('./engine.js');

const PORT = process.env.PORT || 3000;
// En la nube: URL_PUBLICA=https://juega.midominio.com — es lo que la mesa
// enseña a los teléfonos. Sin ella, seguimos en modo portátil con la IP local.
const URL_PUBLICA = process.env.URL_PUBLICA || null;
const GRACIA_MS = 20000;     // cuánto esperamos a un teléfono dormido antes de que juegue el bot
// Un bot que juega al instante delata que es un bot. Se queda pensando un
// rato, y más si tiene de dónde escoger. Las pruebas lo ponen en cero.
const PIENSA_MIN = process.env.PIENSA_MIN !== undefined ? +process.env.PIENSA_MIN : 700;
const PIENSA_VAR = process.env.PIENSA_VAR !== undefined ? +process.env.PIENSA_VAR : 1100;

/* ---------------- archivos estáticos ---------------- */
const TIPOS = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8',
  '.css':'text/css; charset=utf-8', '.json':'application/json', '.svg':'image/svg+xml',
  '.png':'image/png', '.ico':'image/x-icon' };

const servidor = http.createServer((req, res) => {
  let ruta = decodeURIComponent(req.url.split('?')[0]);
  if (ruta === '/') ruta = '/table.html';
  if (ruta === '/play' || ruta === '/jugar') ruta = '/phone.html';
  const archivo = path.join(__dirname, 'public', path.normalize(ruta).replace(/^(\.\.[/\\])+/, ''));
  if (!archivo.startsWith(path.join(__dirname, 'public'))) { res.writeHead(403).end('no'); return; }
  fs.readFile(archivo, (err, buf) => {
    if (err) { res.writeHead(404, {'Content-Type':'text/plain'}).end('404'); return; }
    res.writeHead(200, { 'Content-Type': TIPOS[path.extname(archivo)] || 'application/octet-stream',
                         'Cache-Control': 'no-cache' });
    res.end(buf);
  });
});

function ipLocal() {
  for (const grupo of Object.values(os.networkInterfaces()))
    for (const i of grupo)
      if (i.family === 'IPv4' && !i.internal) return i.address;
  return 'localhost';
}

/* ---------------- salas ---------------- */
const salas = new Map();
const LETRAS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';   // sin I ni O: se confunden con 1 y 0
function nuevoCodigo() {
  let c;
  do { c = Array.from({length:4}, () => LETRAS[Math.floor(Math.random()*LETRAS.length)]).join(''); }
  while (salas.has(c));
  return c;
}

function crearSala() {
  const sala = {
    codigo: nuevoCodigo(),
    juego: E.newGame({}),
    asientos: Array.from({length:4}, () => ({ nombre:null, token:null, ws:null, visto:0, bot:false })),
    mesas: new Set(),
    fase: 'lobby',            // lobby | jugando | manoCerrada | serieCerrada
    creada: Date.now()
  };
  salas.set(sala.codigo, sala);
  return sala;
}

const NOMBRES_BOT = ['Chelo', 'Yuni', 'Papo', 'Mayo'];
function nombreAsiento(sala, i) {
  const a = sala.asientos[i];
  return a.nombre || (a.bot ? NOMBRES_BOT[i] : 'Asiento ' + (i+1));
}
function todosSentados(sala) { return sala.asientos.every(a => a.nombre || a.bot); }

/* ---------------- lo que ve cada quien ---------------- */
function estadoComun(sala) {
  const g = sala.juego;
  const e = g.board && g.board.length ? E.ends(g) : null;
  return {
    t: 'state',
    codigo: sala.codigo,
    fase: sala.fase,
    board: (g.board || []).map(x => ({ a: x.a, b: x.b })),
    ends: e,
    turno: g.phase === 'playing' ? g.turn : null,
    manoNo: g.handNo,
    scores: g.scores,
    rules: g.rules,
    // cuántas fichas tiene cada quien: información pública en una mesa real
    conteos: (g.hands || [[],[],[],[]]).map(h => h.length),
    nombres: sala.asientos.map((_, i) => nombreAsiento(sala, i)),
    ocupados: sala.asientos.map(a => !!(a.nombre || a.bot)),
    conectados: sala.asientos.map(a => a.bot || !!a.ws),
    bots: sala.asientos.map(a => a.bot),
    pasaron: (g.passedOn || []).map(s => [...(s || [])]),
    pensando: sala.pensando ? sala.pensando.asiento : null,
    resultado: g.result || null,
    campeon: g.champion ?? null,
    zapato: !!g.zapato
  };
}

// La vista de mesa: el tablero y nada más. Sin manos, nunca.
function estadoMesa(sala) { return estadoComun(sala); }

// El teléfono: lo mismo, más SU mano y SUS jugadas legales.
function estadoAsiento(sala, i) {
  const g = sala.juego;
  const base = estadoComun(sala);
  base.asiento = i;
  base.mano = (g.hands && g.hands[i]) ? g.hands[i].map(t => [t[0], t[1]]) : [];
  base.legales = (g.phase === 'playing' && g.turn === i)
    ? E.legalMoves(g, i).map(m => ({ tile: [m.tile[0], m.tile[1]], side: m.side }))
    : [];
  return base;
}

function enviar(ws, obj) {
  if (ws && ws.readyState === 1) { try { ws.send(JSON.stringify(obj)); } catch (e) {} }
}
function difundir(sala) {
  const mesa = estadoMesa(sala);
  for (const ws of sala.mesas) enviar(ws, mesa);
  sala.asientos.forEach((a, i) => { if (a.ws) enviar(a.ws, estadoAsiento(sala, i)); });
}

/* ---------------- reparto y bots ---------------- */
function repartir(sala) {
  E.deal(sala.juego);
  sala.fase = 'jugando';
  difundir(sala);
}

function cerrarSiToca(sala) {
  const g = sala.juego;
  if (g.phase === 'gameOver') sala.fase = 'serieCerrada';
  else if (g.phase === 'handOver') sala.fase = 'manoCerrada';
}

/* Un asiento juega solo cuando es un bot declarado, o cuando su teléfono
   lleva más de GRACIA_MS sin aparecer. Nadie pierde la mano porque se le
   apagó la pantalla. */
function debeJugarElBot(sala, i) {
  const a = sala.asientos[i];
  if (a.bot) return true;
  if (!a.nombre) return true;                       // asiento vacío en una partida ya empezada
  if (a.ws) return false;
  return Date.now() - a.visto > GRACIA_MS;
}

setInterval(() => {
  const ahora = Date.now();
  for (const sala of salas.values()) {
    const g = sala.juego;
    if (sala.fase !== 'jugando' || g.phase !== 'playing') { sala.pensando = null; continue; }
    const i = g.turn;
    if (!debeJugarElBot(sala, i)) {
      if (sala.pensando) { sala.pensando = null; difundir(sala); }
      continue;
    }
    if (!sala.pensando || sala.pensando.asiento !== i) {
      const opciones = E.legalMoves(g, i).length;
      const espera = PIENSA_MIN + Math.random()*PIENSA_VAR + (opciones > 3 ? 450 : 0);
      sala.pensando = { asiento: i, hasta: ahora + espera };
      difundir(sala);                         // la mesa lo muestra pensando
      continue;
    }
    if (ahora < sala.pensando.hasta) continue;
    const m = E.botChoose(g, i);
    try {
      if (m) E.play(g, i, m.tile, m.side); else E.pass(g, i);
    } catch (err) { sala.pensando = null; continue; }
    sala.pensando = null;
    cerrarSiToca(sala);
    difundir(sala);
  }
}, 120);

/* Sala vacía y vieja se recoge sola: esto corre en un portátil, no en un servidor. */
setInterval(() => {
  for (const [codigo, sala] of salas) {
    const viva = sala.mesas.size > 0 || sala.asientos.some(a => a.ws);
    if (!viva && Date.now() - sala.creada > 6 * 3600 * 1000) salas.delete(codigo);
  }
}, 600000);

/* ---------------- websocket ---------------- */
const wss = new WebSocketServer({ server: servidor });

wss.on('connection', (ws) => {
  ws.datos = { sala: null, asiento: null, esMesa: false };

  ws.on('message', (raw) => {
    let msg;
    try { msg = JSON.parse(raw); } catch (e) { return; }
    const d = ws.datos;
    const sala = d.sala ? salas.get(d.sala) : null;

    switch (msg.t) {

      /* La vista de mesa abre la sala. */
      case 'mesa': {
        const s = msg.codigo && salas.get(msg.codigo) ? salas.get(msg.codigo) : crearSala();
        d.sala = s.codigo; d.esMesa = true;
        s.mesas.add(ws);
        enviar(ws, { t:'sala', codigo: s.codigo,
                     url: URL_PUBLICA ? `${URL_PUBLICA}/play` : `http://${ipLocal()}:${PORT}/play` });
        difundir(s);
        break;
      }

      /* Un teléfono entra con el código y se sienta. */
      case 'entrar': {
        const s = salas.get(String(msg.codigo || '').toUpperCase().trim());
        if (!s) { enviar(ws, { t:'err', msg:'No encuentro esa mesa. Revisa el código.' }); return; }
        let i = s.asientos.findIndex(a => !a.nombre && !a.bot);
        if (typeof msg.asiento === 'number' && !s.asientos[msg.asiento].nombre
            && !s.asientos[msg.asiento].bot) i = msg.asiento;
        if (i < 0) { enviar(ws, { t:'err', msg:'La mesa está llena.' }); return; }
        const token = crypto.randomBytes(9).toString('hex');
        s.asientos[i] = { nombre: String(msg.nombre || '').slice(0,14) || ('Asiento ' + (i+1)),
                          token, ws, visto: Date.now(), bot: false };
        d.sala = s.codigo; d.asiento = i;
        enviar(ws, { t:'tu', asiento: i, token, codigo: s.codigo });
        difundir(s);
        break;
      }

      /* El mismo teléfono vuelve tras un refresco o un rato en negro. */
      case 'volver': {
        const s = salas.get(String(msg.codigo || '').toUpperCase().trim());
        if (!s) { enviar(ws, { t:'err', msg:'Esa mesa ya no existe.' }); return; }
        const i = s.asientos.findIndex(a => a.token && a.token === msg.token);
        if (i < 0) { enviar(ws, { t:'err', msg:'Ese asiento ya no es tuyo.' }); return; }
        if (s.asientos[i].ws && s.asientos[i].ws !== ws) try { s.asientos[i].ws.close(); } catch(e){}
        s.asientos[i].ws = ws; s.asientos[i].visto = Date.now(); s.asientos[i].bot = false;
        d.sala = s.codigo; d.asiento = i;
        enviar(ws, { t:'tu', asiento: i, token: s.asientos[i].token, codigo: s.codigo });
        difundir(s);
        break;
      }

      /* Rellenar lo que falte con bots, para probar con dos o tres personas. */
      case 'bots': {
        if (!sala) return;
        sala.asientos.forEach(a => { if (!a.nombre) a.bot = true; });
        difundir(sala);
        break;
      }

      case 'reglas': {
        if (!sala || sala.fase === 'jugando') return;
        const r = sala.juego.rules;
        if (msg.target) r.target = +msg.target;
        if (msg.capicua !== undefined) { r.capicua = !!+msg.capicua; if (+msg.capicua) r.capicuaBonus = +msg.capicua; }
        if (msg.tranqueTie) r.tranqueTie = msg.tranqueTie;
        if (msg.countAllTiles !== undefined) r.countAllTiles = !!msg.countAllTiles;
        difundir(sala);
        break;
      }

      case 'empezar': {
        if (!sala || sala.fase === 'jugando') return;
        if (!todosSentados(sala)) { enviar(ws, { t:'err', msg:'Faltan jugadores.' }); return; }
        if (sala.fase === 'serieCerrada') sala.juego = E.newGame(sala.juego.rules);
        repartir(sala);
        break;
      }

      case 'siguiente': {
        if (!sala) return;
        if (sala.fase === 'serieCerrada') { sala.juego = E.newGame(sala.juego.rules); repartir(sala); }
        else if (sala.fase === 'manoCerrada') repartir(sala);
        break;
      }

      /* Las dos únicas jugadas. El servidor valida; el motor rechaza lo ilegal. */
      case 'jugar': {
        if (!sala || d.asiento === null || sala.fase !== 'jugando') return;
        sala.asientos[d.asiento].visto = Date.now();
        try { E.play(sala.juego, d.asiento, msg.tile, msg.side); }
        catch (err) { enviar(ws, { t:'err', msg: err.message }); difundir(sala); return; }
        cerrarSiToca(sala);
        difundir(sala);
        break;
      }

      case 'paso': {
        if (!sala || d.asiento === null || sala.fase !== 'jugando') return;
        sala.asientos[d.asiento].visto = Date.now();
        const g = sala.juego;
        if (g.turn !== d.asiento) return;
        if (E.legalMoves(g, d.asiento).length > 0) {
          enviar(ws, { t:'err', msg:'Tienes ficha: no puedes pasar.' }); return;
        }
        E.pass(g, d.asiento);
        cerrarSiToca(sala);
        difundir(sala);
        break;
      }

      case 'ping': {
        if (sala && d.asiento !== null) sala.asientos[d.asiento].visto = Date.now();
        enviar(ws, { t:'pong' });
        break;
      }
    }
  });

  ws.on('close', () => {
    const d = ws.datos, sala = d.sala ? salas.get(d.sala) : null;
    if (!sala) return;
    if (d.esMesa) sala.mesas.delete(ws);
    if (d.asiento !== null && sala.asientos[d.asiento].ws === ws) {
      sala.asientos[d.asiento].ws = null;          // el asiento se guarda: el token lo recupera
      sala.asientos[d.asiento].visto = Date.now();
    }
    difundir(sala);
  });
});

servidor.listen(PORT, '0.0.0.0', () => {
  const ip = ipLocal();
  console.log('');
  console.log('  Mesa está servida.');
  console.log('');
  console.log(`  Televisor / portátil :  http://localhost:${PORT}`);
  console.log(`  Teléfonos (mismo wifi):  http://${ip}:${PORT}/play`);
  console.log('');
});

module.exports = { servidor, salas };
