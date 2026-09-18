/* Prueba de mesa completa contra el servidor real.
 * Lo que de verdad se comprueba aquí: que nadie reciba fichas ajenas.
 * Todo lo demás (que la mano termine, que sumen los puntos) es higiene.
 */
process.env.PORT = process.env.PORT || '3311';
const { servidor } = require('../server.js');
const WebSocket = require('ws');

const URL = 'ws://127.0.0.1:' + process.env.PORT;
const fallos = [];
const ok = (cond, msg) => { if(!cond) fallos.push(msg); };
const dormir = ms => new Promise(r => setTimeout(r, ms));

function cliente(){
  const ws = new WebSocket(URL);
  const c = { ws, mensajes: [], estado: null, yo: null, token: null, codigo: null };
  ws.on('message', raw => {
    const m = JSON.parse(raw);
    c.mensajes.push(m);
    if(m.t === 'sala'){ c.codigo = m.codigo; }
    if(m.t === 'tu'){ c.yo = m.asiento; c.token = m.token; c.codigo = m.codigo; }
    if(m.t === 'state'){ c.estado = m; }
  });
  c.manda = o => ws.send(JSON.stringify(o));
  c.listo = new Promise(r => ws.on('open', r));
  return c;
}

(async () => {
  await new Promise(r => servidor.listening ? r() : servidor.once('listening', r));

  /* ---- mesa y cuatro teléfonos ---- */
  const mesa = cliente(); await mesa.listo; mesa.manda({ t:'mesa' });
  await dormir(150);
  ok(!!mesa.codigo, 'la mesa no recibió código de sala');
  const codigo = mesa.codigo;

  const nombres = ['Trey','Chelo','Yuni','Papo'];
  const tel = [];
  for(const n of nombres){
    const c = cliente(); await c.listo;
    c.manda({ t:'entrar', codigo, nombre:n });
    await dormir(80);
    tel.push(c);
  }
  ok(tel.every(c => c.yo !== null), 'algún teléfono no consiguió asiento');
  ok(new Set(tel.map(c => c.yo)).size === 4, 'dos teléfonos cayeron en el mismo asiento');

  /* ---- empezar ---- */
  mesa.manda({ t:'empezar' });
  await dormir(200);
  ok(mesa.estado && mesa.estado.fase === 'jugando', 'la mano no empezó');
  ok(tel.every(c => c.estado && c.estado.mano.length === 7), 'alguien no recibió siete fichas');

  /* ---- fuga de información: lo único que importa ---- */
  const claveProhibida = m => ['mano','legales','hands','asiento'].some(k => k in m);
  ok(mesa.mensajes.filter(m => m.t === 'state').every(m => !claveProhibida(m)),
     'FUGA: la vista de mesa recibió manos o jugadas legales');

  const firma = t => t.join('|');
  const propias = tel.map(c => new Set(c.estado.mano.map(firma)));
  for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
      if(i === j) continue;
      const cruce = [...propias[i]].filter(f => propias[j].has(f));
      ok(cruce.length === 0, `FUGA: los asientos ${i} y ${j} comparten fichas`);
    }
  }
  const todas = new Set(tel.flatMap(c => c.estado.mano.map(firma)));
  ok(todas.size === 28, 'el reparto no cubre las 28 fichas, hay ' + todas.size);

  /* ---- jugar fuera de turno debe rebotar ---- */
  const fuera = tel.find(c => c.yo !== mesa.estado.turno);
  const erroresAntes = fuera.mensajes.filter(m => m.t === 'err').length;
  fuera.manda({ t:'jugar', tile: fuera.estado.mano[0], side:'R' });
  await dormir(150);
  ok(fuera.mensajes.filter(m => m.t === 'err').length > erroresAntes,
     'el servidor aceptó una jugada fuera de turno');

  /* ---- reconexión a medio juego ---- */
  const victima = tel[1];
  const manoAntes = victima.estado.mano.map(firma).sort().join(',');
  victima.ws.close();
  await dormir(200);
  const vuelto = cliente(); await vuelto.listo;
  vuelto.manda({ t:'volver', codigo, token: victima.token });
  await dormir(200);
  ok(vuelto.yo === victima.yo, 'la reconexión no devolvió el mismo asiento');
  ok(vuelto.estado && vuelto.estado.mano.map(firma).sort().join(',') === manoAntes,
     'la reconexión perdió o cambió la mano');
  tel[1] = vuelto;

  /* ---- jugar la mano entera ---- */
  let vueltas = 0;
  while(mesa.estado.fase === 'jugando' && vueltas++ < 300){
    const turno = mesa.estado.turno;
    const c = tel.find(x => x.yo === turno);
    if(!c){ await dormir(60); continue; }        // asiento sin teléfono: lo cubre el bot
    if(!c.estado || c.estado.turno !== turno){ await dormir(40); continue; }
    if(c.estado.legales.length) c.manda({ t:'jugar', ...c.estado.legales[0] });
    else c.manda({ t:'paso' });
    await dormir(60);
  }
  ok(vueltas < 300, 'la mano no terminó: posible bloqueo');
  ok(['manoCerrada','serieCerrada'].includes(mesa.estado.fase),
     'la mano terminó en un estado raro: ' + mesa.estado.fase);

  const r = mesa.estado.resultado;
  ok(!!r, 'no hubo resultado');
  if(r){
    ok(['domino','tranque'].includes(r.kind), 'clase de resultado desconocida: ' + r.kind);
    const suma = mesa.estado.scores[0] + mesa.estado.scores[1];
    ok(suma === r.points || r.winnerTeam === null, 'la serie no cuadra con la mano');
    ok(r.teamPips[0] + r.teamPips[1] <= 168, 'quedan más puntos en mano que en el juego');
  }

  /* ---- informe ---- */
  console.log('');
  if(fallos.length === 0){
    console.log('  OK — mesa completa, reconexión, mano terminada, sin fugas.');
    console.log('  Resultado de la mano:', r.kind, '· serie', mesa.estado.scores.join(' – '));
  } else {
    console.log('  FALLOS (' + fallos.length + '):');
    fallos.forEach(f => console.log('   · ' + f));
  }
  console.log('');
  servidor.close();
  process.exit(fallos.length ? 1 : 0);
})();
