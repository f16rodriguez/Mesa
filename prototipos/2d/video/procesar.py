"""Animated plate -> frame sequence for the video render.

For every frame: the painting as JPG (1920x1080), a mask PNG whose alpha is everything that is NOT
felt (people, arms, cups, the rim: they go in front of the tiles), and the felt quad fitted on that
frame, so the tiles stay glued to the table even if the animation drifts a pixel or two.

  python procesar.py tele  plate.mp4
  python procesar.py arriba plate.mp4   (flipped top to bottom: Luis sits at the bottom)
"""
import sys, os, json
import numpy as np, cv2
from PIL import Image

W, H = 1920, 1080

def fieltro(rgb):
    r, g, b = [rgb[:, :, i].astype(np.int16) for i in range(3)]
    lum = r * .3 + g * .59 + b * .11
    ok = ((g >= r + 8) & (g >= b - 2) & (lum > 25) & (lum < 185)).astype(np.uint8)
    n, lab, st, _ = cv2.connectedComponentsWithStats(ok, connectivity=4)
    k = 1 + int(np.argmax(st[1:, cv2.CC_STAT_AREA]))
    m = (lab == k).astype(np.uint8)
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (7, 7)))
    # Small specks of darker paint inside the felt are felt too; arms and cups (big holes) are not.
    inv = (1 - m).astype(np.uint8)
    n2, lab2, st2, _ = cv2.connectedComponentsWithStats(inv, connectivity=4)
    for i in range(1, n2):
        x, y, w, h, a = st2[i]
        if a < 350 and x > 0 and y > 0 and x + w < W and y + h < H:
            m[lab2 == i] = 1
    return m

def robusto(y, x):
    keep = np.ones(len(y), bool)
    for _ in range(6):
        A = np.polyfit(y[keep], x[keep], 1)
        res = np.abs(np.polyval(A, y) - x)
        keep = res < max(2, np.percentile(res[keep], 70))
    return A

def bordes(m):
    ys, xs = np.nonzero(m)
    L, R, T, B = [], [], [], []
    # Only the middle 70% of each edge: cups, bottles and elbows sit on the corners.
    y0, y1 = ys.min(), ys.max(); x0, x1 = xs.min(), xs.max()
    for y in range(int(y0 + .15 * (y1 - y0)), int(y1 - .15 * (y1 - y0))):
        row = np.flatnonzero(m[y])
        if len(row) > 80: L.append((y, row.min())); R.append((y, row.max()))
    for x in range(int(x0 + .15 * (x1 - x0)), int(x1 - .15 * (x1 - x0))):
        col = np.flatnonzero(m[:, x])
        if len(col) > 80: T.append((x, col.min())); B.append((x, col.max()))
    f = lambda P: robusto(np.array([p[0] for p in P], float), np.array([p[1] for p in P], float))
    # Top and bottom edges are level in both paintings. Hands and elbows only ever cut into the
    # felt, so the edge is the outermost value that enough columns agree on.
    top = float(np.percentile([p[1] for p in T], 12)); bot = float(np.percentile([p[1] for p in B], 88))
    return f(L), f(R), np.array([0., top]), np.array([0., bot])

def cruce(aV, aH):
    y = 0.
    for _ in range(60):
        x = aV[0] * y + aV[1]; y = aH[0] * x + aH[1]
    return [float(x), float(y)]

def quad(m, modo):
    aL, aR, aT, aB = bordes(m)
    q = [cruce(aL, aT), cruce(aR, aT), cruce(aR, aB), cruce(aL, aB)]
    if modo == 'arriba':
        T = (q[0][1] + q[1][1]) / 2; B = (q[2][1] + q[3][1]) / 2
        cx = (q[0][0] + q[1][0] + q[2][0] + q[3][0]) / 4; h = (B - T) / 2
        return q, [[cx - h, T], [cx + h, T], [cx + h, B], [cx - h, B]]
    return q, q

def main(modo, mp4):
    out = f'planchas/{modo}'; os.makedirs(out, exist_ok=True)
    cap = cv2.VideoCapture(mp4); fps = cap.get(cv2.CAP_PROP_FPS)
    quads, fieltros, i = [], [], 0
    while True:
        ok, bgr = cap.read()
        if not ok: break
        bgr = cv2.resize(bgr, (W, H), interpolation=cv2.INTER_AREA)
        if modo == 'arriba': bgr = cv2.flip(bgr, 0)
        rgb = cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB)
        m = fieltro(rgb)
        fel, q = quad(m, modo)
        quads.append(q); fieltros.append(fel)
        a = cv2.GaussianBlur(((1 - m) * 255).astype(np.uint8), (3, 3), .7)
        i += 1
        Image.fromarray(rgb).save(f'{out}/f{i:04d}.jpg', quality=90)
        Image.fromarray(np.dstack([np.zeros_like(a), a]), 'LA').save(f'{out}/m{i:04d}.png', optimize=False, compress_level=6)
    Q = np.array(quads)
    dev = np.abs(Q - np.median(Q, 0)).max()
    # Steady camera: one quad for every frame (fitting noise would make the tiles shimmer).
    # Drifting camera: a short moving average keeps them glued without the jitter.
    if dev < 2.5: Qs = np.repeat(np.median(Q, 0)[None], len(Q), 0)
    else:
        k = 7; pad = np.concatenate([Q[-k:], Q, Q[:k]]); Qs = np.array([pad[j:j + 2 * k + 1].mean(0) for j in range(len(Q))])
    info = {'fps': fps, 'n': i, 'quads': Qs.round(2).tolist(), 'fieltro0': fieltros[0], 'desvio': float(dev)}
    json.dump(info, open(f'{out}.json', 'w'))
    print(modo, i, 'frames', round(fps, 2), 'fps; max quad drift', round(float(dev), 2), 'px; frame 0 felt', [[round(v) for v in p] for p in fieltros[0]])

if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
