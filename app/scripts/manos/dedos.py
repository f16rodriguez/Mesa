"""
Les pone dedos a los personajes: dos huesos por mano (Dedos1 y Dedos2, hijos de la mano), en el
binario del GLB como cerrar.py y suavizar.py — lo demás queda byte a byte.

Por qué así y no un hueso por dedo: en los modelos de Meshy los dedos vienen pegados o casi, con
unos 500 vértices la mano entera, y ya van curvados hacia la palma (cerrar.py). Un hueso por dedo
rompería la malla entre dedo y dedo. Lo que se ve desde la tele es la silueta: puño o mano abierta.

Los dos huesos giran sobre el mismo eje, el de los nudillos (a lo ancho de la mano, en el pivote de
cerrar.py: sobre la línea del hueso de la mano, a ~2/3 de lo que sobresale la mano). El peso de cada
vértice de dedo se reparte entre la mano, Dedos1 y Dedos2 según lo lejos que está del nudillo, con la
misma curva suave de cerrar.py: girar Dedos1 un ángulo y Dedos2 otro igual desenrolla el dedo entero
como se enrolló, la punta el doble que la base. En reposo (sin girar) la malla queda EXACTAMENTE como
estaba: nada cambia hasta que el juego abre o cierra la mano.

El eje de giro, en el espacio del hueso, va en los extras del nodo (`eje`): three.js lo deja en
userData. Positivo cierra, negativo abre.

  python scripts/manos/dedos.py public/models/yuni.glb [...]
"""
import sys, struct, math
import numpy as np
from cerrar import leer, escribir, acceso, inv4

def ibm_mat(get, i):
    m = get(i); return np.array(m, dtype=np.float64).reshape(4, 4).T   # glTF: columnas

def poner(path, nudillo=.65):
    j, b = leer(path)
    skin = j['skins'][0]; joints = skin['joints']; nombres = [j['nodes'][i].get('name') for i in joints]
    if any(n and n.endswith('Dedos1') for n in nombres): print(path.split('/')[-1], 'ya tiene dedos'); return
    nib, gib, _ = acceso(j, b, skin['inverseBindMatrices'])
    IBM = [ibm_mat(gib, i) for i in range(nib)]
    pos = lambda nombre: np.array(inv4(gib(nombres.index(nombre))))
    pr = [p for m in j['meshes'] for p in m['primitives']][0]; at = pr['attributes']
    n, gp, _ = acceso(j, b, at['POSITION']); _, gj, pj = acceso(j, b, at['JOINTS_0']); _, gw, pw = acceso(j, b, at['WEIGHTS_0'])
    P = np.array([gp(k) for k in range(n)]); J = np.array([gj(k) for k in range(n)]); W = np.array([gw(k) for k in range(n)])
    nuevos = []   # (nombre, padre_joint_idx, traslacion_local, eje_local, ibm)
    reparto = {}  # vértice -> {joint: peso}
    for lado in ('Left', 'Right'):
        h = nombres.index(lado + 'Hand'); mu = pos(lado + 'Hand'); co = pos(lado + 'ForeArm')
        e = (mu - co) / np.linalg.norm(mu - co)
        arriba = np.array([0, 1., 0]) - e * e[1]; arriba /= np.linalg.norm(arriba)
        wh = (W * (J == h)).sum(1); sel = np.where(wh > .5)[0]
        rel0 = P[sel] - mu; ax = rel0 @ e; K = ax.max() * nudillo; piv = mu + e * K
        # Hacia dónde está la palma: hacia donde se van las puntas (lo más lejos del nudillo).
        lejos = sel[ax > K + .5 * (ax.max() - K)]
        dv = (P[lejos] - piv) @ arriba; palma = -arriba if dv.mean() < 0 else arriba
        eje = np.cross(e, palma); eje /= np.linalg.norm(eje)
        rel = P - piv; r_ax = rel @ e; r_pa = rel @ palma
        perp = rel - np.outer(rel @ eje, eje); r = np.linalg.norm(perp, axis=1)
        ang = np.degrees(np.arctan2(r_pa, r_ax))
        dedo = (wh > 0) & (ang > -35) & (ang < 125) & (r_ax > -.004)
        Lf = r[dedo & (wh > .5)].max()
        for k in np.where(dedo)[0]:
            t = min(1., max(0., (r[k] / Lf - .04) / .96)); s = t * t * (3 - 2 * t); g = 2 * s
            wH, w1, w2 = (1 - g, g, 0.) if g <= 1 else (0., 2 - g, g - 1)
            reparto.setdefault(k, {})[('mano', lado)] = (wh[k], wH, w1, w2)
        # Huesos: la cabeza en el nudillo, sin giro respecto a la mano. Dedos2 cuelga de Dedos1 en el mismo sitio.
        Mh = IBM[h]; piv_local = (Mh @ np.append(piv, 1))[:3]; eje_local = Mh[:3, :3] @ eje; eje_local /= np.linalg.norm(eje_local)
        T = np.eye(4); T[:3, 3] = -piv_local; ibm1 = T @ Mh
        nuevos.append((lado + 'Dedos1', h, piv_local, eje_local, ibm1))
        nuevos.append((lado + 'Dedos2', None, np.zeros(3), eje_local, ibm1))
        print(f"  {lado}: {len(sel)} vértices de mano, {int(dedo.sum())} de dedo; nudillo a {K*100:.1f} cm, dedo {Lf*100:.1f} cm")
    # Nodos nuevos
    base_node = len(j['nodes']); base_joint = len(joints); idx = {}
    for i, (nombre, padre, tl, eje_l, _) in enumerate(nuevos):
        node = {'name': nombre, 'translation': [float(x) for x in tl], 'extras': {'eje': [round(float(x), 6) for x in eje_l]}}
        j['nodes'].append(node); idx[nombre] = base_node + i
    for i, (nombre, padre, *_r) in enumerate(nuevos):
        parent_node = joints[padre] if padre is not None else idx[nuevos[i - 1][0]]
        j['nodes'][parent_node].setdefault('children', []).append(idx[nombre])
        joints.append(idx[nombre])
    jn = {('Left', 1): base_joint, ('Left', 2): base_joint + 1, ('Right', 1): base_joint + 2, ('Right', 2): base_joint + 3}
    # Matrices de enlace: las viejas y las cuatro nuevas, en un bufferView nuevo al final del binario.
    todas = [IBM[i] for i in range(nib)] + [x[4] for x in nuevos]
    datos = b''.join(struct.pack('<16f', *[float(v) for v in M.T.reshape(-1)]) for M in todas)
    b += b'\0' * ((4 - len(b) % 4) % 4); off = len(b); b += datos
    j['bufferViews'].append({'buffer': 0, 'byteOffset': off, 'byteLength': len(datos)})
    a = j['accessors'][skin['inverseBindMatrices']]
    j['accessors'].append({'bufferView': len(j['bufferViews']) - 1, 'componentType': 5126, 'count': len(todas), 'type': 'MAT4'})
    skin['inverseBindMatrices'] = len(j['accessors']) - 1
    j['buffers'][0]['byteLength'] = len(b)
    # Pesos: la parte de la mano se reparte entre mano, Dedos1 y Dedos2; se quedan los cuatro más fuertes.
    for k, d in reparto.items():
        (lado,) = [l for (_, l) in d]; hh, wH, w1, w2 = d[('mano', lado)]
        h = nombres.index(lado + 'Hand'); inf = {}
        for jj, ww in zip(J[k], W[k]):
            if ww > 0 and jj != h: inf[int(jj)] = inf.get(int(jj), 0) + float(ww)
        for jj, ww in ((h, hh * wH), (jn[(lado, 1)], hh * w1), (jn[(lado, 2)], hh * w2)):
            if ww > 1e-6: inf[jj] = inf.get(jj, 0) + ww
        top = sorted(inf.items(), key=lambda x: -x[1])[:4]; s = sum(w for _, w in top)
        top = [(jj, w / s) for jj, w in top] + [(0, 0.)] * (4 - len(top))
        pj(k, tuple(jj for jj, _ in top)); pw(k, tuple(w for _, w in top))
    escribir(path, j, b)
    print(path.split('/')[-1], f'{len(reparto)} vértices repartidos, {len(joints)} huesos')

if __name__ == '__main__':
    for p in sys.argv[1:]: poner(p)
