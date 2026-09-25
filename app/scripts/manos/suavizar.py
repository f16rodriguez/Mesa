"""
Suaviza las normales de un personaje, en el binario del GLB (como cerrar.py: todo lo demás queda
byte a byte).

Por qué: los modelos de Meshy traen las normales partidas en casi cada arista (en Yuni, la mitad
de los vértices se apartan más de 30° de la normal media de su posición), así que cada triángulo
se alumbra por su cuenta y la cara sale facetada, como de cartón. Aquí cada vértice toma la media,
pesada por área, de las caras que tocan su POSICIÓN (no su índice: los vértices repetidos por las
costuras de la textura quedan con la misma normal y la costura no se ve en la luz).

  python scripts/manos/suavizar.py public/models/luis-upright.glb [...]
"""
import sys
import numpy as np
from cerrar import leer, escribir, acceso

def suavizar(path):
    j, b = leer(path)
    for malla in j['meshes']:
        for pr in malla['primitives']:
            at = pr['attributes']
            if 'NORMAL' not in at or 'indices' not in pr: continue
            n, gp, _ = acceso(j, b, at['POSITION']); P = np.array([gp(k) for k in range(n)], dtype=np.float64)
            _, gn, pn = acceso(j, b, at['NORMAL']); N0 = np.array([gn(k) for k in range(n)])
            ni, gi, _ = acceso(j, b, pr['indices']); I = np.array([gi(k)[0] for k in range(ni)], dtype=np.int64).reshape(-1, 3)
            caras = np.cross(P[I[:, 1]] - P[I[:, 0]], P[I[:, 2]] - P[I[:, 0]])   # largo = 2 × área: ya viene pesada
            q = np.round(P * 20000).astype(np.int64); _, grupo = np.unique(q, axis=0, return_inverse=True); grupo = grupo.ravel()
            S = np.zeros((grupo.max() + 1, 3))
            for c in range(3): np.add.at(S, grupo[I[:, c]], caras)
            largo = np.linalg.norm(S, axis=1, keepdims=True)
            N = np.where(largo > 1e-12, S / np.maximum(largo, 1e-12), 0)[grupo]
            # Si una posición quedó sin caras (o se anulan), se deja la normal que traía.
            malo = np.linalg.norm(N, axis=1) < .5; N[malo] = N0[malo]
            antes = np.degrees(np.arccos(np.clip(np.einsum('ij,ij->i', N0, N), -1, 1)))
            for k in range(n): pn(k, tuple(float(x) for x in N[k]))
            print(f"{path.split('/')[-1]}: {n} vértices, {len(I)} triángulos; cambio medio {antes.mean():.1f}°, >30° antes {(antes > 30).mean()*100:.0f} %")
    escribir(path, j, b)

if __name__ == '__main__':
    for p in sys.argv[1:]: suavizar(p)
