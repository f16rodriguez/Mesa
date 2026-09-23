"""
Añade gestos a los modelos: dos objetivos de morph, 'parpadeo' y 'sonrisa'.
Los modelos no traen huesos de cara ni blendshapes; la cara está pintada en
la textura. Así que los gestos mueven la piel pintada:

- parpadeo: la franja entre la ceja y el ojo baja y el ojo pintado se comprime
  hasta una línea en el párpado de abajo: la piel del párpado de arriba lo
  tapa. Es como parpadean las caras escaneadas.
- sonrisa: comisuras arriba, afuera y un poco atrás; cachetes arriba. Con peso
  negativo sale la boca caída (perder la mano).

Ojos y boca se ubicaron con render ortográfico de frente en Blender
(rostro.py) y se refinaron por color (iris oscuro, línea de labios); ver
rasgos.json. Se guardan como accesores DISPERSOS: solo los vértices que se
mueven, unos cientos por modelo.

  python3 scripts/manos/gestos.py public/models/luis-upright.glb rasgos.json
"""
import sys, json, struct, math
from cerrar import leer, escribir, acceso

def suave(a, b, x):
    t = min(1., max(0., (x - a) / (b - a))); return t * t * (3 - 2 * t)

def gestos(path, rasgo):
    j, bin_ = leer(path)
    mesh = j['meshes'][0]; pr = mesh['primitives'][0]
    cnt, gpos, _ = acceso(j, bin_, pr['attributes']['POSITION'])
    _, gnor, _ = acceso(j, bin_, pr['attributes']['NORMAL'])
    V = [gpos(k) for k in range(cnt)]; Nn = [gnor(k) for k in range(cnt)]
    cy = rasgo['cy']; cm = .01
    ojos = [((o['c'][0]) * cm, cy + o['c'][1] * cm) for o in rasgo['ojos']]
    boca = [(b[0] * cm, cy + b[1] * cm) for b in rasgo['boca']]
    zc = max(v[2] for v in V if abs(v[1] - ojos[0][1]) < .03)  # la punta de la nariz, más o menos

    # Párpados: posición de cada ojo sobre la superficie y color de la piel del
    # párpado de arriba, muestreado en la textura (para el párpado que se dibuja
    # encima en el juego: con tan pocos vértices el morph solo entrecierra).
    from PIL import Image
    import io
    img = j['images'][j['textures'][j['materials'][pr['material']]['pbrMetallicRoughness']['baseColorTexture']['index']]['source']]
    bv = j['bufferViews'][img['bufferView']]; tex = Image.open(io.BytesIO(bytes(bin_[bv.get('byteOffset', 0):bv.get('byteOffset', 0) + bv['byteLength']]))).convert('RGB')
    _, guv, _ = acceso(j, bin_, pr['attributes']['TEXCOORD_0'])
    extra = {'ojos': [], 'parpado': [0, 0, 0]}; muestras = []
    for (ex, ey) in ojos:
        cerca = [k for k in range(cnt) if abs(V[k][0] - ex) < .012 and abs(V[k][1] - ey) < .006 and Nn[k][2] > .15 and V[k][2] > zc - .07]
        zf = max(V[k][2] for k in cerca) if cerca else zc - .02
        extra['ojos'].append([ex, ey, zf])
        for k in range(cnt):
            x, y, z = V[k]
            if abs(x - ex) < .01 and ey + .006 < y < ey + .011 and Nn[k][2] > .15 and z > zc - .07:
                u, v = guv(k); muestras.append(tex.getpixel((min(tex.width - 1, int(u * tex.width)), min(tex.height - 1, int(v * tex.height)))))
    if not muestras:  # malla muy rala: franja más ancha
        for (ex, ey) in ojos:
            for k in range(cnt):
                x, y, z = V[k]
                if abs(x - ex) < .016 and ey + .004 < y < ey + .018 and Nn[k][2] > .15 and z > zc - .07:
                    u, v = guv(k); muestras.append(tex.getpixel((min(tex.width - 1, int(u * tex.width)), min(tex.height - 1, int(v * tex.height)))))
    if muestras:
        extra['parpado'] = [round(sum(m[i] for m in muestras) / len(muestras) / 255, 3) for i in range(3)]
    mesh.setdefault('extras', {}).update({'ojos': extra['ojos'], 'parpado': extra['parpado']})
    if 'targets' in pr:
        escribir(path, j, bin_); print('  solo extras', extra); return

    def frente(k, x0, y0, r):
        v = V[k]; n = Nn[k]
        return abs(v[0] - x0) < r and abs(v[1] - y0) < r and n[2] > .15 and v[2] > zc - .07

    # --- parpadeo
    parp = {}
    a, b, c = .0125, .0045, .011   # semiancho del ojo, semialto, franja hasta la ceja
    for (ex, ey) in ojos:
        yl = ey - .0015; arriba = ey + b; tope = arriba + c
        for k in range(cnt):
            if not frente(k, ex, ey, .03): continue
            x, y, z = V[k]
            wx = 1 - suave(.8, 1.35, abs(x - ex) / a)
            if wx <= 0 or y < yl - .004 or y > tope: continue
            if y >= yl:
                f = yl + (y - yl) * (.0008 / (arriba - yl)) if y <= arriba else yl + .0008 + (y - arriba) * ((tope - yl - .0008) / c)
                dy = (f - y) * wx
                dz = .0012 * wx * (1 - suave(0, c, y - arriba)) if y > yl else 0
            else:  # el párpado de abajo sube un poco
                dy = (y - (yl - .004)) * .3 * wx; dz = 0
            parp[k] = (0., dy, dz)
    # --- sonrisa
    son = {}
    for i, (mx, my) in enumerate(boca):
        s = -1 if mx < sum(p[0] for p in boca) / 2 else 1
        for k in range(cnt):
            if not frente(k, mx, my, .035): continue
            x, y, z = V[k]
            d2 = (x - mx) ** 2 + (y - my) ** 2; g = math.exp(-d2 / (2 * .0075 ** 2))
            gc = math.exp(-((x - mx - s * .004) ** 2 + (y - my - .016) ** 2) / (2 * .011 ** 2))
            dx, dy, dz = s * .0022 * g, .0028 * g + .0012 * gc, -.0008 * g + .0009 * gc
            if abs(dx) + abs(dy) + abs(dz) < 2e-5: continue
            p = son.get(k, (0, 0, 0)); son[k] = (p[0] + dx, p[1] + dy, p[2] + dz)

    def disperso(d):
        idx = sorted(d); vals = [d[k] for k in idx]
        def vista(raw):
            off = len(bin_) + ((4 - len(bin_) % 4) % 4); bin_.extend(b'\0' * (off - len(bin_))); bin_.extend(raw)
            j['bufferViews'].append({'buffer': 0, 'byteOffset': off, 'byteLength': len(raw)}); return len(j['bufferViews']) - 1
        vi = vista(struct.pack('<%dI' % len(idx), *idx))
        vv = vista(struct.pack('<%df' % (3 * len(vals)), *[c for v in vals for c in v]))
        mn = [min([0.] + [v[i] for v in vals]) for i in range(3)]; mx = [max([0.] + [v[i] for v in vals]) for i in range(3)]
        j['accessors'].append({'componentType': 5126, 'count': cnt, 'type': 'VEC3', 'min': mn, 'max': mx,
                               'sparse': {'count': len(idx), 'indices': {'bufferView': vi, 'componentType': 5125}, 'values': {'bufferView': vv}}})
        return len(j['accessors']) - 1
    pr['targets'] = [{'POSITION': disperso(parp)}, {'POSITION': disperso(son)}]
    mesh['weights'] = [0, 0]; mesh.setdefault('extras', {})['targetNames'] = ['parpadeo', 'sonrisa']
    j['buffers'][0]['byteLength'] = len(bin_)
    escribir(path, j, bin_)
    print(f'  parpadeo {len(parp)} vértices, sonrisa {len(son)}', extra)

if __name__ == '__main__':
    import os
    r = json.load(open(sys.argv[2]))[os.path.basename(sys.argv[1])[:-4]]
    print(sys.argv[1]); gestos(sys.argv[1], r)
