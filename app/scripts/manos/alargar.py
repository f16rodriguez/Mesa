"""
Alarga los brazos de los modelos a proporción de adulto, editando el GLB
directamente (como cerrar.py): vértices, huesos, matrices de enlace y claves
del clip. Todo lo demás queda byte a byte.

Por qué: del hombro a la muñeca medían 36 cm; un adulto de su talla anda por
46–50. Con esos brazos, sentados a una mesa de altura normal, la muñeca apenas
llega al canto con el brazo casi recto (codo a ~150°): ningún IK podía doblar
el codo, y por eso se veían tiesos y "estirados como palos".

Cómo: en la pose de enlace (T, brazos en ±X) el brazo se estira a lo largo de
su eje desde el hombro (factor K), el antebrazo desde el codo (factor K) y la
mano solo se desplaza, sin crecer. Cada vértice se mueve con la mezcla de sus
pesos (skinning lineal de esas tres transformaciones), así hombro y codo
quedan continuos: en el codo el brazo estirado y el antebrazo desplazado
caen en el mismo punto.

  python3 scripts/manos/alargar.py public/models/luis-upright.glb [K]
"""
import sys, struct
from cerrar import leer, escribir, acceso, sub, add, mul, dot

def uni(a):
    l = dot(a, a) ** .5
    return [x / l for x in a]

def pos_enlace(m):  # traslación de la inversa de una IBM (columnas): posición del hueso en el enlace
    R = [[m[c*4+r] for c in range(3)] for r in range(3)]; t = [m[12], m[13], m[14]]
    # la IBM es afín con rotación*escala uniforme: inv = R^-1 (-t); R^-1 = R^T / s^2
    s2 = sum(R[r][0]**2 for r in range(3))
    return [-sum(R[r][i] * t[r] for r in range(3)) / s2 for i in range(3)]

def alargar(path, K=1.28):
    j, bin_ = leer(path)
    nodes = j['nodes']; skin = j['skins'][0]; joints = skin['joints']
    nombre = {n: nodes[n].get('name') for n in joints}
    idx = {nombre[n]: k for k, n in enumerate(joints)}
    _, ibm_get, ibm_put = acceso(j, bin_, skin['inverseBindMatrices'])
    P = {nm: pos_enlace(ibm_get(k)) for nm, k in idx.items()}

    trans = {}  # índice de joint -> función v -> v'
    cambios = []
    for lado in ('Left', 'Right'):
        S, E, W = P[lado+'Arm'], P[lado+'ForeArm'], P[lado+'Hand']
        a1, a2 = uni(sub(E, S)), uni(sub(W, E))
        E2 = add(S, mul(sub(E, S), K)); W2 = add(E2, mul(sub(W, E), K))
        dE, dW = sub(E2, E), sub(W2, W)
        trans[idx[lado+'Arm']] = lambda v, S=S, a1=a1: add(v, mul(a1, (K-1) * max(0., dot(sub(v, S), a1))))
        trans[idx[lado+'ForeArm']] = lambda v, E=E, a2=a2, dE=dE: add(add(v, dE), mul(a2, (K-1) * max(0., dot(sub(v, E), a2))))
        trans[idx[lado+'Hand']] = lambda v, dW=dW: add(v, dW)
        cambios += [(lado+'ForeArm', dE), (lado+'Hand', dW)]
        print(f'  {lado}: hombro→muñeca {dot(sub(W,S),sub(W,S))**.5:.3f} → {dot(sub(W2,S),sub(W2,S))**.5:.3f}')

    # 1) vértices, mezclados por sus pesos
    hechos = set()
    for n in nodes:
        if 'mesh' not in n or 'skin' not in n: continue
        for pr in j['meshes'][n['mesh']]['primitives']:
            at = pr['attributes']
            if at['POSITION'] in hechos: continue
            hechos.add(at['POSITION'])
            cnt, gpos, ppos = acceso(j, bin_, at['POSITION'])
            _, gj, _ = acceso(j, bin_, at['JOINTS_0']); _, gw, _ = acceso(j, bin_, at['WEIGHTS_0'])
            xs = []
            for k in range(cnt):
                v = list(gpos(k)); js, ws = gj(k), gw(k)
                tw = sum(ws) or 1.
                nv = [0., 0., 0.]
                for jj, w in zip(js, ws):
                    if w <= 0: continue
                    f = trans.get(jj)
                    nv = add(nv, mul(f(v) if f else v, w / tw))
                ppos(k, nv); xs.append(nv)
            a = j['accessors'][at['POSITION']]
            a['min'] = [min(v[i] for v in xs) for i in range(3)]; a['max'] = [max(v[i] for v in xs) for i in range(3)]

    # 2) huesos: la traslación local del antebrazo y la mano va a lo largo del hueso padre
    for nm in ('LeftForeArm', 'LeftHand', 'RightForeArm', 'RightHand'):
        nd = nodes[joints[idx[nm]]]
        nd['translation'] = mul(nd.get('translation', [0, 0, 0]), K)

    # 3) matrices de enlace: el hueso se desplazó dE (o dW) en el espacio de la malla
    for nm, d in cambios:
        k = idx[nm]; m = list(ibm_get(k))
        R = [[m[c*4+r] for c in range(3)] for r in range(3)]
        for r in range(3): m[12+r] -= sum(R[r][c] * d[c] for c in range(3))
        ibm_put(k, m)

    # 4) claves de traslación del clip para esos huesos (el clip las fija cuadro a cuadro)
    blancos = {joints[idx[nm]] for nm in ('LeftForeArm', 'LeftHand', 'RightForeArm', 'RightHand')}
    salidas = set()
    for an in j.get('animations', []):
        for c in an['channels']:
            if c['target']['path'] == 'translation' and c['target'].get('node') in blancos:
                salidas.add(an['samplers'][c['sampler']]['output'])
    for acc in salidas:
        cnt, g, p = acceso(j, bin_, acc)
        for k in range(cnt): p(k, mul(list(g(k)), K))
        a = j['accessors'][acc]
        if 'min' in a: a['min'] = [x*K for x in a['min']]; a['max'] = [x*K for x in a['max']]
    escribir(path, j, bin_)

if __name__ == '__main__':
    K = float(sys.argv[2]) if len(sys.argv) > 2 else 1.28
    print(sys.argv[1]); alargar(sys.argv[1], K)
