"""Builds video.html: the simulation page in video mode, local fonts, frame sequences as the paintings."""
import json, hashlib, re

sim = open('../pub/mesa-en-juego.html').read()
sim = re.sub(r'<link rel="(preconnect|stylesheet)"[^>]*>\n', '', sim)

P = {n: json.load(open(f'planchas/{n}.json')) for n in ('tele', 'arriba')}

# The 1344x752 paintings the page was laid out on -> the 1920x1080 frames (fit on the felt edges).
def ajuste(orig, nuevo):
    ox = [p[0] for p in orig]; nx = [p[0] for p in nuevo]; oy = [p[1] for p in orig]; ny = [p[1] for p in nuevo]
    def fit(a, b):
        n = len(a); ma = sum(a) / n; mb = sum(b) / n
        s = sum((x - ma) * (y - mb) for x, y in zip(a, b)) / sum((x - ma) ** 2 for x in a)
        return s, mb - s * ma
    sx, bx = fit(ox, nx); sy, by = fit(oy, ny)
    return [round(sx, 5), round(sy, 5), round(bx, 2), round(by, 2)]

orig = {'tele': [[453.7, 283.9], [843.1, 284.7], [933, 618.8], [343.7, 615.4]],
        'arriba': [[422, 199], [926, 199], [926, 576], [422, 576]]}
AJ = {n: ajuste(orig[n], P[n]['fieltro0']) for n in P}
print('ajuste', AJ)

semilla = hashlib.sha256(b'mesa-video-212').hexdigest()
datos = {n: {'fps': P[n]['fps'], 'n': P[n]['n'], 'quads': P[n]['quads']} for n in P}

cabeza = f"""<!doctype html><html lang="es"><head><meta charset="utf-8">
<style>
@font-face{{font-family:'Shrikhand';font-weight:400;src:url(fonts/shrikhand-400.woff2) format('woff2')}}
@font-face{{font-family:'DM Sans';font-weight:400 800;src:url(fonts/dm-sans-var.woff2) format('woff2')}}
@font-face{{font-family:'IBM Plex Mono';font-weight:500;src:url(fonts/plex-mono-500.woff2) format('woff2')}}
html,body{{margin:0;background:#0d1510;overflow:hidden}}
[hidden]{{display:none!important}}
.cabeza,.mandos,.notas{{display:none!important}}
.wrap{{max-width:none!important;padding:0!important;display:block!important}}
.escenario{{width:1920px!important;height:1080px!important;aspect-ratio:auto!important;border-radius:0!important;box-shadow:none!important}}
</style>
<script>
const PL={json.dumps(datos)};
window.VIDEO={{ancho:1920,alto:1080,semilla:'{semilla}',azar:212,sonidos:[],logo:'marca/mesa-logo-horizontal-notag-transparent.svg',
 ajuste:{json.dumps(AJ)},
 plancha(n,t){{const P=PL[n],i=Math.floor(t/1000*P.fps)%P.n,k=String(i+1).padStart(4,'0');return {{fondo:`planchas/${{n}}/f${{k}}.jpg`,mascara:`planchas/${{n}}/m${{k}}.png`,quad:P.quads[i]}};}},
 corte(t){{const i=Math.min(120,Math.floor(t/1000*24));return `corte/f${{String(i+1).padStart(4,'0')}}.jpg`;}}}};
</script>
</head><body>
"""
open('video.html', 'w').write(cabeza + sim + '\n</body></html>\n')
print('video.html', len(cabeza + sim))
