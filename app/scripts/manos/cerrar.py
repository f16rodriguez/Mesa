"""
Cierra las manos de los modelos SIN pasar por un exportador: edita las
posiciones y normales de los vértices de los dedos directamente en el binario
del GLB. Todo lo demás (huesos, pieles, clips, texturas) queda byte a byte.

Los modelos no tienen huesos de dedos: la mano es un solo hueso y los dedos
están abiertos en abanico en la malla misma, así que ninguna animación los
puede cerrar. Aquí se curvan en la pose de enlace: los vértices pesados a la
mano que pasan del nudillo giran alrededor del nudillo hacia la palma, más
cuanto más lejos, y se juntan hacia el eje de la mano.

Espacio de la malla glTF: Y arriba, pose T con los brazos en ±X. La palma mira
abajo (-Y); si en algún modelo no, --signo -1 dobla hacia el otro lado.
"""
import json, struct, sys, math

def leer(path):
    d = open(path, 'rb').read()
    n = struct.unpack('<I', d[12:16])[0]
    j = json.loads(d[20:20+n])
    off = 20 + n
    bn = struct.unpack('<I', d[off:off+4])[0]
    return j, bytearray(d[off+8:off+8+bn])

def escribir(path, j, bin_):
    js = json.dumps(j, separators=(',', ':')).encode()
    js += b' ' * ((4 - len(js) % 4) % 4)
    bin_ += b'\0' * ((4 - len(bin_) % 4) % 4)
    total = 12 + 8 + len(js) + 8 + len(bin_)
    out = struct.pack('<4sII', b'glTF', 2, total) + struct.pack('<I4s', len(js), b'JSON') + js + struct.pack('<I4s', len(bin_), b'BIN\0') + bytes(bin_)
    open(path, 'wb').write(out)

COMP = {5120:('b',1),5121:('B',1),5122:('h',2),5123:('H',2),5125:('I',4),5126:('f',4)}
NCOMP = {'SCALAR':1,'VEC2':2,'VEC3':3,'VEC4':4,'MAT4':16}

def acceso(j, bin_, i):
    a = j['accessors'][i]; v = j['bufferViews'][a['bufferView']]
    fmt, sz = COMP[a['componentType']]; n = NCOMP[a['type']]
    base = v.get('byteOffset', 0) + a.get('byteOffset', 0); paso = v.get('byteStride', sz*n)
    norm = a.get('normalized', False)
    def get(k):
        vals = struct.unpack_from('<' + fmt*n, bin_, base + k*paso)
        if norm and fmt in 'BH': vals = tuple(x / (255 if fmt=='B' else 65535) for x in vals)
        return vals
    def put(k, vals): struct.pack_into('<' + fmt*n, bin_, base + k*paso, *vals)
    return a['count'], get, put

def inv4(m):  # inversa de una matriz afín 4x4 en orden de columnas (glTF)
    r = [[m[c*4+r_] for c in range(4)] for r_ in range(4)]
    R = [[r[i][k] for k in range(3)] for i in range(3)]; t = [r[i][3] for i in range(3)]
    det = (R[0][0]*(R[1][1]*R[2][2]-R[1][2]*R[2][1]) - R[0][1]*(R[1][0]*R[2][2]-R[1][2]*R[2][0]) + R[0][2]*(R[1][0]*R[2][1]-R[1][1]*R[2][0]))
    Ri = [[(R[(j_+1)%3][(i+1)%3]*R[(j_+2)%3][(i+2)%3]-R[(j_+1)%3][(i+2)%3]*R[(j_+2)%3][(i+1)%3])/det for j_ in range(3)] for i in range(3)]
    ti = [-sum(Ri[i][k]*t[k] for k in range(3)) for i in range(3)]
    return ti  # solo interesa la traslación: posición del hueso en la pose de enlace

sub = lambda a,b: [a[i]-b[i] for i in range(3)]
add = lambda a,b: [a[i]+b[i] for i in range(3)]
mul = lambda a,s: [x*s for x in a]
dot = lambda a,b: sum(a[i]*b[i] for i in range(3))
cruz = lambda a,b: [a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0]]
def uni(a): l = math.sqrt(dot(a,a)); return [x/l for x in a]
def rota(v, k, t):  # Rodrigues
    c, s = math.cos(t), math.sin(t)
    return add(add(mul(v,c), mul(cruz(k,v),s)), mul(k, dot(k,v)*(1-c)))

def cerrar(src, dst, curva=1.05, junta=.38, nudillo=.52, signo=1):
    j, bin_ = leer(src)
    skin = j['skins'][0]; nombres = [j['nodes'][i].get('name') for i in skin['joints']]
    _, ibm, _ = acceso(j, bin_, skin['inverseBindMatrices'])
    pos_hueso = lambda nombre: inv4(ibm(nombres.index(nombre)))
    prim = [p for m in j['meshes'] for p in m['primitives']][0]; at = prim['attributes']
    n, gpos, ppos = acceso(j, bin_, at['POSITION'])
    _, gnor, pnor = acceso(j, bin_, at['NORMAL']) if 'NORMAL' in at else (0, None, None)
    _, gjoi, _ = acceso(j, bin_, at['JOINTS_0']); _, gwei, _ = acceso(j, bin_, at['WEIGHTS_0'])
    tocados = {}
    for lado in ('Left', 'Right'):
        mano = nombres.index(lado + 'Hand')
        muñeca = pos_hueso(lado + 'Hand'); codo = pos_hueso(lado + 'ForeArm')
        e = uni(sub(muñeca, codo)); arriba = uni(sub([0,1,0], mul(e, e[1])))
        palma = mul(arriba, -signo); eje = uni(cruz(e, palma)); lateral = uni(cruz(e, arriba))
        vs = []
        for k in range(n):
            w = sum(ww for jj, ww in zip(gjoi(k), gwei(k)) if jj == mano)
            if w > .5: vs.append(k)
        largo = max(dot(sub(list(gpos(k)), muñeca), e) for k in vs)
        K = largo * nudillo; pivote = add(muñeca, mul(e, K))
        for k in vs:
            p = list(gpos(k)); rel = sub(p, muñeca); a_ = dot(rel, e)
            if a_ <= K: continue
            t = min(1.0, (a_ - K) / (largo - K)); t = t*t*(3-2*t)
            s_ = dot(rel, lateral)
            p = sub(p, mul(lateral, s_ * junta * t))          # juntar dedos
            q = rota(sub(p, pivote), eje, curva * t)           # curvar hacia la palma
            ppos(k, add(pivote, q))
            if gnor: pnor(k, rota(list(gnor(k)), eje, curva * t))
            tocados[lado] = tocados.get(lado, 0) + 1
    # el accessor de POSITION guarda min/max: hay que rehacerlos o el visor recorta
    a = j['accessors'][at['POSITION']]
    xs = [gpos(k) for k in range(n)]
    a['min'] = [min(v[i] for v in xs) for i in range(3)]; a['max'] = [max(v[i] for v in xs) for i in range(3)]
    escribir(dst, j, bin_)
    return tocados

if __name__ == '__main__':
    src, dst = sys.argv[1], sys.argv[2]
    signo = int(sys.argv[3]) if len(sys.argv) > 3 else 1
    print(src.split('/')[-1], cerrar(src, dst, signo=signo))
