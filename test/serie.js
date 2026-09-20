/* La serie completa, que es lo que se juega el domingo: cuatro teléfonos, mano
 * tras mano hasta 200, con las cosas que SÍ van a pasar en un patio — uno que
 * se duerme y lo cubre el bot, uno que recarga la página, uno que llega tarde a
 * una mesa llena, alguien que escribe mal el código, y la pantalla de la mesa
 * que se recarga a media serie.
 *
 * `fourseats.js` prueba una mano. Esta prueba el rato entero.
 */
process.env.PORT = process.env.PORT || '3411';
process.env.PIENSA_MIN = '0';
process.env.PIENSA_VAR = '0';
process.env.GRACIA_MS = '350';        // el relevo del bot, en pequeño
const { servidor } = require('../server.js');
const WebSocket = require('ws');

const URL = 'ws://127.0.0.1:' + process.env.PORT;
const fallos = [];
const ok = (cond, msg) => { if (!cond) fallos.push(msg); };
const dormir = ms => new Promise(r => setTimeout(r, ms));
const firma = t => t.join('|');

function cliente() {
  const ws = new WebSocket(URL);
  const c = { ws, estado: null, yo: null, token: null, codigo: null,
              errores: 0, fugas: [], vistos: 0 };
  ws.on('message', raw => {
    const m = JSON.parse(raw);
    if (m.t === 'sala') c.codigo = m.codigo;
    if (m.t === 'tu') { c.yo = m.asiento; c.token = m.token; c.codigo = m.codigo; }
    if (m.t === 'err') c.errores++;
    if (m.t === 'state') { c.estado = m; c.vistos++; if (c.revisa) c.revisa(m); }
  });
  c.manda = o => { if (ws.readyState === 1) ws.send(JSON.stringify(o)); };
  c.listo = new Promise(r => ws.on('open', r));
  return c;
}

(async () => {
  await new Promise(r => servidor.listening ? r() : servidor.once('listening', r));

  let mesa = cliente(); await mesa.listo;
  // la vista de mesa NUNCA puede ver una mano, en ningún momento de la serie
  mesa.revisa = m => {
    if (['mano', 'legales', 'hands'].some(k => k in m)) mesa.fugas.push(m.manoNo);
  };
  mesa.manda({ t: 'mesa' });
  await dormir(150);
  const codigo = mesa.codigo;
  ok(!!codigo, 'la mesa no recibió código');

  /* ---- código equivocado: no entra y no rompe nada ---- */
  const perdido = cliente(); await perdido.listo;
  perdido.manda({ t: 'entrar', codigo: 'ZZZZ', nombre: 'Nadie' });
  await dormir(120);
  ok(perdido.yo === null, 'entró con un código que no existe');
  ok(perdido.errores > 0, 'el código equivocado no avisó de nada');
  perdido.ws.close();

  /* ---- los cuatro ---- */
  const tel = [];
  for (const n of ['Trey', 'Chelo', 'Yuni', 'Papo']) {
    const c = cliente(); await c.listo;
    c.manda({ t: 'entrar', codigo, nombre: n });
    await dormir(70);
    // cada teléfono comprueba que solo le llega SU mano
    c.revisa = m => { if (m.hands || m.manos) c.fugas.push(m.manoNo); };
    tel.push(c);
  }
  ok(tel.every(c => c.yo !== null), 'algún teléfono se quedó sin asiento');

  /* ---- el quinto llega a una mesa llena ---- */
  const quinto = cliente(); await quinto.listo;
  quinto.manda({ t: 'entrar', codigo, nombre: 'Tarde' });
  await dormir(150);
  ok(quinto.yo === null, 'un quinto jugador consiguió asiento en una mesa de cuatro');
  ok(quinto.errores > 0, 'la mesa llena no avisó al que llegó tarde');
  quinto.ws.close();

  mesa.manda({ t: 'empezar' });
  await dormir(200);
  ok(mesa.estado && mesa.estado.fase === 'jugando', 'la serie no empezó');

  const objetivo = mesa.estado.rules.target;
  const fichasDe = c => c.estado.mano.map(firma).sort().join(',');

  /* ---- la serie entera ---- */
  let vueltas = 0, manosJugadas = 0, dormido = false, recargado = false;
  let manoPrevia = mesa.estado.manoNo;
  const LIMITE = 12000;
  while (vueltas++ < LIMITE) {
    const e = mesa.estado;
    if (!e) { await dormir(20); continue; }

    if (e.fase === 'serieCerrada') break;
    if (e.fase === 'manoCerrada') {
      manosJugadas++;
      mesa.manda({ t: 'siguiente' });
      await dormir(120);
      continue;
    }
    if (e.manoNo !== manoPrevia) { manoPrevia = e.manoNo; }
    if (e.fase !== 'jugando') { await dormir(25); continue; }

    const turno = e.turno;
    const c = tel.find(x => x.yo === turno);

    // a media serie: uno se duerme y lo cubre el bot (una sola vez)
    if (!dormido && manosJugadas >= 1 && c && c.yo === 2) {
      dormido = true;
      const antes = e.manoNo;
      await dormir(900);                       // más que GRACIA_MS: entra el bot
      ok(mesa.estado.turno !== turno || mesa.estado.manoNo !== antes,
         'el bot no relevó al teléfono dormido: la mesa se quedó parada');
      continue;
    }

    // y otro recarga la página: mismo token, mismo asiento, misma mano
    if (!recargado && manosJugadas >= 2) {
      recargado = true;
      const v = tel[3], mano = fichasDe(v), asiento = v.yo, tk = v.token;
      v.ws.close();
      await dormir(150);
      const nuevo = cliente(); await nuevo.listo;
      nuevo.revisa = m => { if (m.hands || m.manos) nuevo.fugas.push(m.manoNo); };
      nuevo.manda({ t: 'volver', codigo, token: tk });
      await dormir(250);
      ok(nuevo.yo === asiento, 'recargar la página cambió de asiento');
      ok(nuevo.estado && fichasDe(nuevo) === mano, 'recargar la página cambió la mano');
      tel[3] = nuevo;
      continue;
    }

    if (!c || !c.estado || c.estado.turno !== turno) { await dormir(20); continue; }
    if (c.estado.legales && c.estado.legales.length) c.manda({ t: 'jugar', ...c.estado.legales[0] });
    else c.manda({ t: 'paso' });
    await dormir(18);
  }

  ok(vueltas < LIMITE, 'la serie no terminó: algo se quedó bloqueado');
  const fin = mesa.estado;
  ok(fin.fase === 'serieCerrada', 'la serie acabó en un estado raro: ' + fin.fase);
  ok(Math.max(fin.scores[0], fin.scores[1]) >= objetivo,
     'la serie cerró sin que nadie llegara a ' + objetivo);
  ok(manosJugadas >= 1, 'la serie cerró en cero manos');
  ok(dormido, 'nunca se probó el relevo del bot');
  ok(recargado, 'nunca se probó recargar la página');

  /* ---- la pantalla de la mesa se recarga al final ---- */
  mesa.ws.close();
  await dormir(150);
  const mesa2 = cliente(); await mesa2.listo;
  mesa2.revisa = m => { if (['mano','legales','hands'].some(k => k in m)) mesa2.fugas.push(m.manoNo); };
  mesa2.manda({ t: 'mesa', codigo });
  await dormir(250);
  ok(mesa2.codigo === codigo, 'recargar la pantalla de la mesa perdió la sala');
  ok(mesa2.estado && mesa2.estado.scores.join(',') === fin.scores.join(','),
     'recargar la pantalla de la mesa perdió el marcador');

  /* ---- ninguna fuga en toda la serie ---- */
  ok(mesa.fugas.length === 0, 'FUGA: la vista de mesa vio manos en ' + mesa.fugas.length + ' estados');
  ok(mesa2.fugas.length === 0, 'FUGA: la mesa recargada vio manos');
  tel.forEach((c, i) => ok(c.fugas.length === 0, 'FUGA: el teléfono ' + i + ' vio manos ajenas'));

  console.log('');
  if (fallos.length === 0) {
    console.log('  OK — serie completa: ' + manosJugadas + ' manos hasta ' +
                fin.scores.join(' – ') + ', con relevo de bot, recarga de teléfono,');
    console.log('       recarga de la mesa, código malo y quinto jugador. Sin fugas.');
  } else {
    console.log('  FALLOS (' + fallos.length + '):');
    fallos.forEach(f => console.log('   · ' + f));
  }
  console.log('');
  servidor.close();
  process.exit(fallos.length ? 1 : 0);
})();
