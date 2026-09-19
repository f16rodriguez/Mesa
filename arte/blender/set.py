# Mesa — el set 3D a ESCALA REAL, construido en Blender sin cabeza.
#
#   blender -b -P arte/blender/set.py
#
# Unidades = metros. Mesa de dominó de 1.15 m con borde alzado, fichas de
# 7.5 cm, gente de proporciones de verdad sentada en sillas plásticas de
# 45 cm. Cycles hornea iluminación global (rebotes, pozos de luz) en colores
# de vértice. Los personajes se exportan POR PARTES con sus pivotes
# (torso, cabeza, brazos, antebrazos) para que el juego los anime como
# marionetas: alcanzar la ficha, encogerse en el paso, celebrar.
# El tope de la mesa queda en z=0 (el juego pone las fichas ahí);
# el piso en z=-0.75. Ejes: three (x,y,z) = blender (x, z, -y).

import bpy, bmesh, struct, json, math, random, os
from mathutils import Vector, Euler, Matrix, noise

random.seed(7)
OUT = '/home/user/Mesa/public/set.bin'
PISO = -0.75

# ---------------- utilidades ----------------
def hexlin(h):
    return tuple((int(h[i:i+2],16)/255)**2.2 for i in (1,3,5))

def mezcla(a,b,t):
    return (a[0]*(1-t)+b[0]*t, a[1]*(1-t)+b[1]*t, a[2]*(1-t)+b[2]*t)

def vivo(ob):
    try: ob.name; return True
    except ReferenceError: return False

def limpiar():
    bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete()
    for me in list(bpy.data.meshes): bpy.data.meshes.remove(me)
    for li in list(bpy.data.lights): bpy.data.lights.remove(li)

MAT = None
def material_unico():
    global MAT
    if MAT is None:
        MAT = bpy.data.materials.new('m'); MAT.use_nodes = True
    return MAT

todos = []        # (ob, lit, meta)  meta: {'sk': esqueleto al que va skinneado}
esqueletos = {}   # nombre -> {'bones': [...], 'remap': {hueso: indice}}
# de ejes de Blender (z arriba) a ejes de three (y arriba): (x,y,z) -> (x,z,-y)
CONV = Matrix(((1,0,0,0),(0,0,1,0),(0,-1,0,0),(0,0,0,1)))

def pieza(bm, nombre, color, rough=.9, metal=0.0, lit=0, meta=None,
          solidify=None, bevel=None, subsurf=None, cuts=None, tx=None, txs=1.0):
    me = bpy.data.meshes.new(nombre)
    if cuts: bmesh.ops.subdivide_edges(bm, edges=bm.edges, cuts=cuts, use_grid_fill=True)
    bm.to_mesh(me); bm.free()
    ob = bpy.data.objects.new(nombre, me)
    bpy.context.collection.objects.link(ob)
    ob.data.materials.append(material_unico())
    bpy.context.view_layer.objects.active = ob
    if solidify is not None:
        m = ob.modifiers.new('so','SOLIDIFY'); m.thickness = solidify
        bpy.ops.object.modifier_apply(modifier='so')
    if bevel is not None:
        m = ob.modifiers.new('be','BEVEL'); m.width = bevel; m.segments = 2
        m.limit_method = 'ANGLE'; m.angle_limit = math.radians(40)
        bpy.ops.object.modifier_apply(modifier='be')
    if subsurf:
        m = ob.modifiers.new('su','SUBSURF'); m.levels = subsurf
        bpy.ops.object.modifier_apply(modifier='su')
    for p in ob.data.polygons: p.use_smooth = True
    ob['rough'] = rough; ob['metal'] = metal
    if tx: ob['tx'] = tx; ob['txs'] = txs
    at = ob.data.color_attributes.new(name='Base', type='FLOAT_COLOR', domain='POINT')
    for i, v in enumerate(ob.data.vertices):
        c = color(v.co) if callable(color) else color
        at.data[i].color = (c[0], c[1], c[2], 1.0)
    todos.append((ob, lit, meta or {}))
    return ob

def caja(dim, pos, rot=(0,0,0)):
    bm = bmesh.new(); bmesh.ops.create_cube(bm, size=1)
    bmesh.ops.scale(bm, verts=bm.verts, vec=dim)
    if any(rot):
        bmesh.ops.transform(bm, verts=bm.verts, matrix=Euler(rot).to_matrix().to_4x4())
    bmesh.ops.translate(bm, verts=bm.verts, vec=pos); return bm

def cilindro(r1, r2, h, pos, seg=12, rot=(0,0,0)):
    bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=True, segments=seg, radius1=r1, radius2=r2, depth=h)
    if any(rot):
        bmesh.ops.transform(bm, verts=bm.verts, matrix=Euler(rot).to_matrix().to_4x4())
    bmesh.ops.translate(bm, verts=bm.verts, vec=pos); return bm

def tubo(p1, p2, r1, r2, seg=10):
    """cilindro de p1 a p2 — brazos y piernas"""
    p1, p2 = Vector(p1), Vector(p2)
    d = p2 - p1
    bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=True, segments=seg,
                          radius1=r1, radius2=r2, depth=d.length)
    q = Vector((0,0,1)).rotation_difference(d.normalized())
    bmesh.ops.transform(bm, verts=bm.verts, matrix=q.to_matrix().to_4x4())
    bmesh.ops.translate(bm, verts=bm.verts, vec=(p1+p2)/2)
    return bm

def esfera(r, pos, seg=16, esc=(1,1,1)):
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=seg, v_segments=max(6,seg//2), radius=r)
    bmesh.ops.scale(bm, verts=bm.verts, vec=esc)
    bmesh.ops.translate(bm, verts=bm.verts, vec=pos); return bm

def rejilla(nx, ny, sx, sy, pos):
    bm = bmesh.new(); bmesh.ops.create_grid(bm, x_segments=nx, y_segments=ny, size=1)
    bmesh.ops.scale(bm, verts=bm.verts, vec=(sx/2, sy/2, 1))
    bmesh.ops.translate(bm, verts=bm.verts, vec=pos); return bm

def unir(obs, nombre, lit=None, meta=None):
    bpy.ops.object.select_all(action='DESELECT')
    for o in obs: o.select_set(True)
    bpy.context.view_layer.objects.active = obs[0]
    bpy.ops.object.join(); obs[0].name = nombre
    global todos
    guard = {}
    for (o,l,mt) in todos:
        if vivo(o): guard[o.name] = (o, l, mt)
    if nombre in guard and (lit is not None or meta is not None):
        o,l,mt = guard[nombre]
        guard[nombre] = (o, lit if lit is not None else l,
                         meta if meta is not None else mt)
    todos = list(guard.values())
    return obs[0]

# ---------------- paleta ----------------
TURQ  = hexlin('#6FB5A6'); TURQV = hexlin('#4E8A7E'); YESO = hexlin('#C9C0A8')
CORAL = hexlin('#C9765C'); CORALV = hexlin('#9A5440')
ZINC  = hexlin('#8E8674'); OXIDO = hexlin('#7A4526')
MAD   = hexlin('#5C3B22'); MADOSC = hexlin('#3E2614')
VERDE = hexlin('#3E7A38'); FIELTRO = hexlin('#0F4A3C')
CREMA = hexlin('#DCD6C8')

def pared_color(base, viejo):
    def f(co):
        n  = noise.noise(Vector((co.x*1.6, co.y*1.6, co.z*1.6)))
        n2 = noise.noise(Vector((co.x*5.4+9, co.z*5.4, co.y*5.4)))
        c = mezcla(base, viejo, max(0, min(1, (0.05-n)*1.6))*.6)
        if n2 > 0.46: c = mezcla(c, YESO, .5)
        s = 1 - max(0, (PISO+1-co.z)*0.28)
        return (max(0,c[0]*s), max(0,c[1]*s), max(0,c[2]*s))
    return f

CX, CY = -0.8, 4.0     # el colmado: 4 m detrás de la mesa


# ---------------- texturas de detalle (PNG locales, generadas aquí) ----------------
import numpy as np
TEXDIR = '/home/user/Mesa/public/tex'

def _suavizar(a, veces):
    for _ in range(veces):
        a = (a + np.roll(a,1,0) + np.roll(a,-1,0) + np.roll(a,1,1) + np.roll(a,-1,1)) / 5.0
    return a

# Materiales fotográficos (generados con Nano Banana; fuente en arte/materiales).
# El ruido procedimental de aquí abajo NO los pisa. Antes se regeneraban en cada
# build y borraban la foto sin avisar: la textura buena duraba hasta el
# siguiente `blender -b -P set.py` y nadie se enteraba.
RUTA_MATERIALES = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                               '..', 'materiales')
MATERIALES_FOTO = set()
def instalar_materiales():
    import shutil
    if not os.path.isdir(RUTA_MATERIALES): return
    for f in sorted(os.listdir(RUTA_MATERIALES)):
        if not f.endswith('.png'): continue
        MATERIALES_FOTO.add(f[:-4])
        shutil.copyfile(os.path.join(RUTA_MATERIALES, f),
                        os.path.join(TEXDIR, f))
    print('materiales de foto:', ' '.join(sorted(MATERIALES_FOTO)))


def guardar_tex(nombre, w, h, rgb):
    if nombre in MATERIALES_FOTO: return
    img = bpy.data.images.new(nombre, w, h, alpha=False)
    a = np.ones((h, w, 4), dtype=np.float32)
    a[:,:,0] = rgb[0]; a[:,:,1] = rgb[1]; a[:,:,2] = rgb[2]
    img.pixels.foreach_set(a.ravel())
    img.filepath_raw = os.path.join(TEXDIR, nombre + '.png')
    img.file_format = 'PNG'
    img.save()

def generar_texturas():
    os.makedirs(TEXDIR, exist_ok=True)
    rng = np.random.default_rng(7)
    # madera: veta a lo largo con nudos suaves
    w = h = 512
    x = np.linspace(0, 1, w)[None, :].repeat(h, 0)
    ruido = _suavizar(rng.random((h, w)), 6)
    veta = .86 + .14*np.sin(x*90 + ruido*14)**2
    fino = .96 + .04*_suavizar(rng.random((h, w)), 1)
    m = np.clip(veta*fino, .72, 1)
    guardar_tex('madera', w, h, (m, m*.985, m*.96))
    # panio: motas de fieltro
    base = _suavizar(rng.random((h, w)), 3)
    motas = _suavizar(rng.random((h, w)), 10)
    m = .84 + .10*base + .06*motas
    guardar_tex('panio', w, h, (m, m, m))
    # concreto: manchas y grano
    grande = _suavizar(rng.random((h, w)), 14)
    medio = _suavizar(rng.random((h, w)), 6)
    grano = .90 + .10*rng.random((h, w))
    m = np.clip((.60 + .28*grande + .16*medio)*grano, .42, 1.06)
    guardar_tex('concreto', w, h, (m, m*.995, m*1.02))
    # estuco: pared repellada
    m = .90 + .10*_suavizar(rng.random((h, w)), 5)
    guardar_tex('estuco', w, h, (m, m, m))
    # tela: pliegues finos y trama, para que la ropa no sea plástico liso
    fino = _suavizar(rng.random((h, w)), 2)
    pliegue = _suavizar(rng.random((h, w)), 9)
    xs = np.arange(w)[None, :].repeat(h, 0)
    ys = np.arange(h)[:, None].repeat(w, 1)
    trama = 1 + .022*(np.sin(xs*np.pi/3) + np.sin(ys*np.pi/3))
    m = np.clip((.90 + .07*fino + .09*pliegue)*trama, .78, 1.08)
    guardar_tex('tela', w, h, (m, m, m))

instalar_materiales()
generar_texturas()

# recortes del ancla: la foto del dueño vestida sobre el 3D
def texturas_del_ancla():
    ruta = '/home/user/Mesa/arte/ancla-colmado-v1.png'
    if not os.path.exists(ruta): return
    img = bpy.data.images.load(ruta)
    W, H = img.size
    a = np.empty(W*H*4, dtype=np.float32)
    img.pixels.foreach_get(a)
    a = a.reshape(H, W, 4)[::-1]
    def recorte(fx0, fy0, fx1, fy1):
        c = a[int(fy0*H):int(fy1*H), int(fx0*W):int(fx1*W)].copy()
        c = np.concatenate([c, c[:, ::-1]], axis=1)
        c = np.concatenate([c, c[::-1, :]], axis=0)
        return c
    def guardar_np(nombre, c):
        if nombre in MATERIALES_FOTO: return
        out = bpy.data.images.new(nombre, c.shape[1], c.shape[0], alpha=False)
        out.pixels.foreach_set(c[::-1].ravel())
        out.filepath_raw = os.path.join(TEXDIR, nombre + '.png')
        out.file_format = 'PNG'; out.save()
    # detalle de pared: el desgaste de la foto, neutralizado para multiplicar
    c = recorte(.345, .545, .50, .625)
    for k in range(3):
        c[:,:,k] = np.clip(c[:,:,k] / max(c[:,:,k].mean(), 1e-4) * .92, .5, 1.35)
    guardar_np('pared_det', c)
    # detalle del asfalto mojado
    c = recorte(.70, .84, .92, .97)
    for k in range(3):
        c[:,:,k] = np.clip(c[:,:,k] / max(c[:,:,k].mean(), 1e-4) * .92, .5, 1.4)
    guardar_np('calle_det', c)
    # el zinc, con su color de verdad
    guardar_np('zinc_foto', recorte(.37, .095, .54, .185))

texturas_del_ancla()

# los mapas de normales del pack, reescalados y vendorizados
def vendor_normal(src, nombre):
    destino = os.path.join(TEXDIR, nombre + '.png')
    if os.path.exists(destino): return
    if not os.path.exists(src): return
    img = bpy.data.images.load(src)
    img.scale(1024, 1024)
    img.filepath_raw = destino; img.file_format = 'PNG'
    img.save()

_UBC_TEX = '/tmp/claude-0/-home-user/49e6c7df-b939-5d61-8a6d-e9c314c28791/scratchpad/ubc/Universal Base Characters[Standard]/Base Characters/Godot - UE'
vendor_normal(os.path.join(_UBC_TEX, 'T_Superhero_Male_Normal.png'), 'nm_m')
vendor_normal(os.path.join(_UBC_TEX, 'T_Superhero_Female_Normal.png'), 'nm_f')

# ---------------- la calle ----------------
def calle():
    def suelo_color(co):
        n = noise.noise(Vector((co.x*3.2, co.y*3.2, 0)))
        c = mezcla(hexlin('#41382F'), hexlin('#2C2622'), .5+.5*n)
        if (abs(co.x-CX) < 4.4 and co.y > 1.9) or math.hypot(co.x, co.y) < 3.0:
            c = mezcla(c, hexlin('#8A8172'), .45)
        if noise.noise(Vector((co.x*.7+4, co.y*.7, 1))) > .42:
            c = mezcla(c, hexlin('#241E1A'), .25)
        return c
    bm = rejilla(140, 140, 30, 30, (0,0,PISO))
    pieza(bm, 'sueloCalle', suelo_color, rough=.45, metal=.06, tx='concreto', txs=2.4)

# ---------------- el colmado ----------------
def colmado():
    PALETA = ['#C8552F','#D9A238','#4F8A3D','#B03A2E','#3E6FA0','#D8C79A']
    H0, H1 = PISO, 2.45                       # pared de 3.2 m
    AB0, AB1, ABW = 0.20, 1.55, 2.6           # la boca del mostrador
    for (w,px,z0,z1) in [(2.45,-2.6,H0,H1),(2.45,2.6,H0,H1),(ABW,0,AB1,H1)]:
        bm = caja((w,.22,z1-z0),(CX+px, CY, (z0+z1)/2))
        pieza(bm, 'pared', pared_color(TURQ,TURQV), rough=.95, cuts=18, bevel=.012, tx='pared_det', txs=3.1)
    bm = caja((ABW,.06,AB1-AB0),(CX, CY+.7, (AB0+AB1)/2))
    pieza(bm, 'fondoInt', hexlin('#4A2A14'), rough=.95, cuts=6)
    for sz in (0.5, 0.86, 1.22):
        pieza(caja((2.5,.5,.035),(CX, CY+.42, sz)), 'tablilla', hexlin('#8A5C30'), rough=.85)
    for sz in (0.52, 0.88, 1.24):
        px = -1.12
        while px < 1.15:
            c = hexlin(random.choice(PALETA)); alto = .11+random.random()*.05
            pieza(cilindro(.03,.027,alto,(CX+px, CY+.42, sz+alto/2), seg=8),'bot',c,rough=.3)
            pieza(cilindro(.012,.01,.035,(CX+px, CY+.42, sz+alto+.017), seg=8),'botn',c,rough=.3)
            px += .09+random.random()*.05
    for i in range(8):
        pieza(caja((.11,.03,.15),(CX-1.05+i*.3, CY+.32, 1.42)),
              'funda', hexlin(random.choice(PALETA)), rough=.7)
    bm = caja((2.75,.4,AB0-H0),(CX, CY-.12, (H0+AB0)/2))
    pieza(bm, 'mostrador', pared_color(CORAL,CORALV), rough=.9, cuts=8, bevel=.015, tx='pared_det', txs=2.3)
    pieza(caja((2.9,.48,.04),(CX, CY-.12, AB0+.02)), 'tope', hexlin('#C9BFA6'),
          rough=.6, bevel=.01)
    # zinc corrugado
    bm = rejilla(64, 8, 8.3, 1.9, (0,0,0))
    for v in bm.verts: v.co.z += .028*math.sin(v.co.x*2*math.pi/0.24)
    bmesh.ops.transform(bm, verts=bm.verts,
        matrix=Euler((math.radians(-6),0,0)).to_matrix().to_4x4())
    bmesh.ops.translate(bm, verts=bm.verts, vec=(CX, CY-0.45, 2.6))
    def zc(co):
        n = noise.noise(Vector(((co.x-CX)*3.6, 0, 0)))
        c = ZINC if n > -0.25 else OXIDO
        k = .8+.2*math.sin((co.x-CX)*2*math.pi/0.24)
        return (c[0]*k, c[1]*k, c[2]*k)
    pieza(bm, 'zinc', tenir(hexlin('#E8E8E8'), 'zinc_foto'), rough=.5, metal=.35,
          solidify=.012, tx='zinc_foto', txs=1.0)
    for px in (-3.7, 3.7):
        pieza(cilindro(.035,.05,3.25,(CX+px, CY-1.3, PISO+1.62), seg=10),'puntal',MAD,rough=.8)
    bm = caja((.25,3.6,3.5),(CX-3.85, CY-0.8, PISO+1.75))
    pieza(bm, 'casaCoral', pared_color(CORAL,CORALV), rough=.95, cuts=16, bevel=.015, tx='pared_det', txs=2.7)
    pieza(caja((.95,.1,2.05),(CX-3.0, CY-.13, PISO+1.02)), 'puerta', MADOSC,
          rough=.85, bevel=.015)
    def calada(co):
        lx, lz = co.x-(CX+2.85), co.z-1.65
        for ox in (-.19,.19):
            for oz in (-.19,.19):
                if (lx-ox)**2+(lz-oz)**2 < .14**2: return hexlin('#241B2E')
        return hexlin('#CFC8B4')
    pieza(caja((.8,.24,.8),(CX+2.85, CY-0.01, 1.65)), 'calada', calada, rough=.9, cuts=14)
    # cajas plásticas
    # El cajón plástico moldeado, con su reja de huecos, en vez de la plancha
    # de antes. Se apilan de verdad: cada uno encaja sobre el de abajo.
    ALTO_CAJA = .30
    def torre(px, py, n, etq, giro=0.0):
        for k in range(n):
            traste('cajon.glb', '%s_%d' % (etq, k),
                   (px, py, PISO + k*ALTO_CAJA*.92),
                   giro + math.radians(4*k), tri=2200, alto=ALTO_CAJA, lit=0)
    torre(CX+1.75, CY-.55, 3, 'caja1', math.radians(-8))
    torre(CX+2.25, CY-.75, 2, 'caja2', math.radians(12))
    torre(CX-1.9,  CY-.65, 2, 'caja3', math.radians(3))
    torre(-2.5, -1.5, 2, 'cajaSuelta', math.radians(-22))
    pieza(caja((.5,.45,.85),(CX-1.35, CY-.35, PISO+.43)), 'nevera',
          hexlin('#22262A'), rough=.35, metal=.3, bevel=.02)
    for i in range(9):
        pieza(esfera(.045,(CX-1.1+(i%3)*.07-.07, CY-0.2, 1.36-(i//3)*.1),
                     seg=8, esc=(.6,.6,1.6)), 'guineo', hexlin('#C9B03E'), rough=.75)
    for (px,py) in [(-3.2,-1.05),(3.3,-1.0),(2.45,-0.6)]:
        pieza(cilindro(.13,.16,.3,(CX+px, CY+py, PISO+.15), seg=12), 'pote',
              hexlin('#D5CDBB'), rough=.9, bevel=.012)
        for k in range(5):
            pieza(esfera(.14+random.random()*.09,
                         (CX+px+(random.random()-.5)*.3, CY+py+(random.random()-.5)*.22,
                          PISO+.42+random.random()*.35), seg=10, esc=(1,.8,1)),
                  'mata', hexlin('#1E4A34'), rough=1.0, subsurf=1)
    pieza(cilindro(.11,.11,.025,(CX+1.15, CY-0.12, 1.5), seg=14), 'plato',
          hexlin('#8A8478'), rough=.4, metal=.6)
    pieza(cilindro(.013,.013,1.2,(CX+3.45, CY-0.25, PISO+.6), seg=6,
                   rot=(math.radians(10),0,0)), 'paloEscoba', MAD, rough=.8)
    # afiches y calcomanías pegados en la pared
    random.seed(11)
    for i in range(9):
        px = CX + (-2.3 + random.random()*4.2)
        if abs(px-(CX+2.85)) < .55: continue
        pz = 0.6 + random.random()*1.6
        w = .16+random.random()*.22; hgt = .2+random.random()*.3
        c = hexlin(random.choice(PALETA+['#F0EAD8','#F0EAD8']))
        pieza(caja((w,.015,hgt),(px, CY-.12, pz)), 'afiche', c, rough=.85)
    # el letrero de PARE en la esquina
    pieza(cilindro(.018,.022,2.9,(CX+4.35, CY-1.7, PISO+1.45), seg=8), 'paloPare',
          hexlin('#5A5A5A'), rough=.5, metal=.4)
    bm = cilindro(.21,.21,.015,(0,0,0), seg=8, rot=(math.radians(90),0,0))
    bmesh.ops.translate(bm, verts=bm.verts, vec=(CX+4.35, CY-1.72, 2.35))
    pieza(bm, 'pare', hexlin('#A81E14'), rough=.5)
    pieza(caja((.26,.008,.055),(CX+4.35, CY-1.735, 2.35)), 'parePalabra',
          hexlin('#E8E2D2'), rough=.5)
    pieza(caja((.1,.07,.2),(CX+3.43, CY-0.14, PISO+.1)), 'escoba',
          hexlin('#C9A96A'), rough=1)

# ---------------- la mesa de dominó real: pino, paño rojo, atriles ----------------
def mesa():
    M = 1.15
    PINO = tenir(hexlin('#C9A05C'), 'madera')
    PINOSC = tenir(hexlin('#A87E42'), 'madera')
    ROJO = hexlin('#A83228')
    def panio_rojo(co):
        n = noise.noise(Vector((co.x*9, co.y*9, 0)))
        return tuple(c*(.88+.12*n) for c in ROJO)
    pieza(caja((M,M,.045),(0,0,-.0225)), 'panio', tenir(panio_rojo,'panio'),
          rough=.96, lit=1, cuts=8, bevel=.006, tx='panio', txs=1.6)
    # el borde ancho de pino con su lomo
    r = M/2+.06
    marcos = []
    for i,(px,py) in enumerate([(0,r),(0,-r),(r,0),(-r,0)]):
        dim = (M+.24,.12,.07) if i<2 else (.12,M+.24,.07)
        marcos.append(pieza(caja(dim,(px,py,-.014)), 'marco', PINO, rough=.5, lit=1,
                            bevel=.014, tx='madera', txs=1.2))
    # los huecos del vaso en las esquinas
    for sx,sy in [(1,1),(1,-1),(-1,1),(-1,-1)]:
        marcos.append(pieza(cilindro(.042,.042,.012,(sx*r,sy*r,.018), seg=14),
                            'hueco', hexlin('#1A140E'), rough=.9, lit=1))
    # los atriles: la tablita inclinada donde se para la mano de cada quien
    for si in range(4):
        a = [0, math.pi/2, math.pi, -math.pi/2][si]
        bx, by = math.sin(a)*r, -math.cos(a)*r
        for (dz, dd, dimy, dimz) in [(.052, -.022, .016, .075), (.028, .028, .014, .04)]:
            bm = bmesh.new(); bmesh.ops.create_cube(bm, size=1)
            bmesh.ops.scale(bm, verts=bm.verts, vec=(.44, dimy, dimz))
            bmesh.ops.transform(bm, verts=bm.verts,
                matrix=Euler((math.radians(-16),0,0)).to_matrix().to_4x4())
            bmesh.ops.transform(bm, verts=bm.verts,
                matrix=Euler((0,0,a+math.pi)).to_matrix().to_4x4())
            ox, oy = math.sin(a)*(r+dd), -math.cos(a)*(r+dd)
            bmesh.ops.translate(bm, verts=bm.verts, vec=(ox, oy, dz))
            marcos.append(pieza(bm, 'atril', PINOSC, rough=.55, lit=1, bevel=.006, tx='madera', txs=1.2))
    unir(marcos, 'marcoMesa', lit=1)
    # una bebida por jugador, en su hueco de vaso. El juego las mueve: cada
    # tanto alguien agarra la suya y le da un trago.
    huecos = [(1,1), (1,-1), (-1,-1), (-1,1)]     # three (x,z) por asiento
    BEB = ['botella.glb', 'ron.glb', 'botella.glb', 'refresco.glb']
    for si in range(4):
        hx_, hz_ = huecos[si]
        bx, by = hx_*r, -hz_*r
        traste(BEB[si], 'Bebida%d' % si, (bx, by, .02),
               math.radians(37*si), tri=900, alto=.215, rough=.22)
    # el cafecito, que en una mesa dominicana nunca falta
    traste('cafe.glb', 'cafecito', (-r*.78, r*.30, .02), math.radians(-25),
           tri=800, alto=.075, rough=.45)
    # patas en X plegables, de lado a lado
    for sy in (-1,1):
        for lado in (-1,1):
            # La pata medía 1,02 m inclinada 28 grados: la punta salía 6,7 cm
            # POR ENCIMA del tablero y aparecía como un taco de madera clavado
            # en el paño, justo donde dos jugadores ponen la mano. Se acorta
            # para que tape del piso al bajo del tablero y nada más.
            bm = caja((.045,.03,.83),(0,0,0), rot=(0, lado*.5, 0))
            bmesh.ops.translate(bm, verts=bm.verts, vec=(0, sy*(M/2-.14), PISO+.356))
            pieza(bm, 'pataX', PINO, rough=.55, lit=1, bevel=.008, tx='madera', txs=1.2)
        pieza(cilindro(.014,.014,.05,(0, sy*(M/2-.14), PISO+.356), seg=8,
                       rot=(math.radians(90),0,0)), 'perno', hexlin('#6A6258'),
              rough=.4, metal=.6, lit=1)
    for sy in (-1,1):
        pieza(caja((.72,.045,.03),(0, sy*(M/2-.14), PISO+.015)), 'pie',
              PINO, rough=.6, lit=1, bevel=.006)

# ---------------- la silla plástica real (45 cm de asiento) ----------------
def silla(nombre, color, px, py, rotz):
    parts = []
    bm = rejilla(9,9,.44,.42,(0,0,0))
    for v in bm.verts:
        v.co.z = .45 - .03*math.exp(-((v.co.x*4.2)**2+(v.co.y*4.2)**2)) + .012*(v.co.y/.21)
    parts.append(pieza(bm,'as',color,rough=.5,lit=1,solidify=.015,bevel=.006,subsurf=1))
    for i in range(5):
        x0 = -.155+i*.078
        bm = rejilla(2,7,.052,.42,(0,0,0))
        for v in bm.verts:
            t = (v.co.y+.21)/.42
            v.co.x += x0*(1+.1*t)
            v.co.z = .46 + (v.co.y+.21)*1.05
            v.co.y = -.2 - .11*t - .025*math.sin(t*math.pi)
        parts.append(pieza(bm,'tb',color,rough=.5,lit=1,solidify=.013,subsurf=1))
    parts.append(pieza(caja((.42,.045,.055),(0,-.325,.92)),'riel',color,rough=.5,lit=1,
                       bevel=.012,subsurf=1))
    for sx,sy in [(-.18,-.16),(.18,-.16),(-.19,.17),(.19,.17)]:
        bm = caja((.035,.035,.45),(0,0,0))
        for v in bm.verts:
            k = (v.co.z+.225)/.45
            v.co.x += sx*(1.18-.32*k); v.co.y += sy*(1.18-.32*k); v.co.z += .225
        parts.append(pieza(bm,'pt',color,rough=.5,lit=1,bevel=.008))
    for sx in (-.215,.215):
        parts.append(pieza(caja((.035,.34,.028),(sx,-.015,.62)),'br',color,rough=.5,lit=1,
                           bevel=.01,subsurf=1))
        parts.append(pieza(caja((.035,.028,.16),(sx,.14,.53)),'brs',color,rough=.5,lit=1))
    ob = unir(parts, nombre, lit=1)
    ob.rotation_euler = (0,0,rotz); ob.location = (px,py,PISO)
    bpy.context.view_layer.objects.active = ob
    bpy.ops.object.transform_apply(location=True, rotation=True)

# ---------------- lo que hace que la esquina se vea vivida ----------------
def vecindario():
    # una silla vacía como si alguien se paró, un banquito con radio, la
    # neverita de las cervezas y botellas en el piso: la mesa deja de flotar
    traste('nevera.glb', 'neverita', (1.55, 1.9, PISO), math.radians(-24),
           tri=1600, alto=.46, rough=.45)
    pieza(cilindro(.17,.19,.42,(-1.7,1.75,PISO+.21), seg=12), 'banquito',
          MADOSC, rough=.7, lit=1, bevel=.015)
    traste('radio.glb', 'radioViejo', (-1.7, 1.75, PISO+.42), math.radians(18),
           tri=1400, alto=.20, rough=.45)
    traste('botella.glb', 'botSuelo1', (1.15, 1.62, PISO), math.radians(30), tri=700)
    traste('ron.glb',     'botSuelo2', (1.28, 1.74, PISO), math.radians(-50), tri=800)
    traste('refresco.glb','botSuelo3', (-1.35, 2.05, PISO), math.radians(75), tri=700)
    # matas en potes de pintura, que es lo que hay en toda acera
    traste('mata.glb', 'mata1', (-2.25, 1.35, PISO), math.radians(20), tri=1500)
    traste('mata.glb', 'mata2', (2.35, 1.15, PISO), math.radians(-65), tri=1200,
           escala=.82)

# ---------------- la gente: cuerpos CC0 de Quaternius, poseados y partidos ----------------
# Cuerpos base profesionales (arte/blender/ubc, licencia CC0). Se sientan con su
# esqueleto, se parten por pesos de hueso en las piezas de la marioneta, y se
# pintan por región: piel, camisa, pantalón, zapatos. Los sombreros siguen siendo
# nuestros.
RUTA_UBC = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'ubc')

def _dedos(l):
    out = {'lowerarm_'+l, 'hand_'+l}
    for d in ('index','middle','pinky','ring','thumb'):
        for n in ('01','02','03','04_leaf'):
            out.add('%s_%s_%s' % (d, n, l))
    return out

PIEL_G = {'Head','neck_01'} | (_dedos('l') - {'lowerarm_l'}) | (_dedos('r') - {'lowerarm_r'})
PANT_G = {'root','pelvis','thigh_l','thigh_r','calf_l','calf_r'}
ZAP_G  = {'foot_l','foot_r','ball_l','ball_r'}

def huesos_de(arm, conservar):
    """El esqueleto en ejes de three: cada hueso con su padre y su matriz de
    reposo en el mundo. Los huesos que no se conservan (los 40 de los dedos)
    mandan su peso al ancestro mas cercano que si se conserva: los dedos nunca
    se mueven solos, asi que no se pierde nada y el esqueleto baja a 23."""
    bones = arm.data.bones
    conservar = [n for n in conservar if n in bones]
    idx = {n: i for i, n in enumerate(conservar)}

    def sube(b):                      # ancestro mas cercano que se conserva
        while b is not None:
            if b.name in idx: return idx[b.name]
            b = b.parent
        return 0

    salida = []
    for n in conservar:
        b = bones[n]
        M = CONV @ (arm.matrix_world @ b.matrix_local) @ CONV.inverted()
        salida.append({'n': n, 'p': sube(b.parent),
                       'm': [round(M[f][c], 6) for c in range(4) for f in range(4)]})
    salida[0]['p'] = -1
    remap = {b.name: sube(b) for b in bones}
    return {'bones': salida, 'remap': remap}


def pegar_a_hueso(ob, hueso):
    """Pelo, ojos, sombrero: geometria suelta que sigue a un hueso entero."""
    ob.vertex_groups.clear()
    vg = ob.vertex_groups.new(name=hueso)
    vg.add(list(range(len(ob.data.vertices))), 1.0, 'REPLACE')


RUTA_PROPS = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                          '..', 'props')

def traste(archivo, nombre, pos, rotz=0.0, tri=1400, escala=1.0, lit=1,
           rough=.75, alto=None):
    """Un trasto generado (Tripo H3.1) metido en el set como una pieza más.

    Llega con textura y con demasiados triángulos. Aquí se SUELDA (el glTF parte
    los vértices en las costuras de UV y el diezmado por colapso rompe la malla
    justo ahí — sale hecha trizas), se baja al presupuesto del juego, se hornea
    la textura a colores de vértice y se planta de pie donde toque. De ahí en
    adelante es igual que lo modelado a mano: el horneado Cycles le pone la luz
    encima y sale en set.bin."""
    antes = set(bpy.context.scene.objects)
    bpy.ops.import_scene.gltf(filepath=os.path.join(RUTA_PROPS, archivo))
    nuevos = [o for o in bpy.context.scene.objects if o not in antes]
    mallas = [o for o in nuevos if o.type == 'MESH']
    if not mallas: return None
    bpy.ops.object.select_all(action='DESELECT')
    for m in mallas: m.select_set(True)
    bpy.context.view_layer.objects.active = mallas[0]
    if len(mallas) > 1: bpy.ops.object.join()
    ob = bpy.context.view_layer.objects.active
    for o in nuevos:
        if o.type != 'MESH' and vivo(o): bpy.data.objects.remove(o)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)

    try: bpy.ops.mesh.customdata_custom_splitnormals_clear()
    except Exception: pass
    if hasattr(ob.data, 'use_auto_smooth'): ob.data.use_auto_smooth = False
    bm = bmesh.new(); bm.from_mesh(ob.data)
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=1e-4)
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    bm.to_mesh(ob.data); bm.free()

    ob.data.calc_loop_triangles()
    n = len(ob.data.loop_triangles)
    if n > tri:
        m = ob.modifiers.new('dec', 'DECIMATE')
        m.decimate_type = 'COLLAPSE'; m.use_collapse_triangulate = True
        m.ratio = tri / n
        bpy.ops.object.modifier_apply(modifier='dec')

    # hornear la textura al atributo Base: el motor no lee mapas en la gente ni
    # en los trastos, lee color por vértice
    sc_ = bpy.context.scene
    motor, disp, muestras = sc_.render.engine, sc_.cycles.device, sc_.cycles.samples
    dest = sc_.render.bake.target
    sc_.render.engine = 'CYCLES'; sc_.cycles.device = 'CPU'; sc_.cycles.samples = 16
    sc_.render.bake.target = 'VERTEX_COLORS'
    at = ob.data.color_attributes.new(name='Base', type='FLOAT_COLOR', domain='POINT')
    ob.data.color_attributes.active_color = at
    bpy.ops.object.select_all(action='DESELECT')
    ob.select_set(True); bpy.context.view_layer.objects.active = ob
    try:
        bpy.ops.object.bake(type='DIFFUSE', pass_filter={'COLOR'})
    except Exception as e:
        print('albedo falló en', nombre, e)
    sc_.render.engine, sc_.cycles.device, sc_.cycles.samples = motor, disp, muestras
    sc_.render.bake.target = dest

    # de pie, centrado, a escala y en su sitio
    lo = Vector((1e9,)*3); hi = Vector((-1e9,)*3)
    for v in ob.data.vertices:
        for i in range(3):
            lo[i] = min(lo[i], v.co[i]); hi[i] = max(hi[i], v.co[i])
    if alto: escala = escala * (alto / max(1e-6, hi.z - lo.z))
    M = (Matrix.Scale(escala, 4)
         @ Matrix.Translation((-(lo.x+hi.x)/2, -(lo.y+hi.y)/2, -lo.z)))
    ob.data.transform(M)
    ob.name = nombre
    ob.location = pos
    ob.rotation_euler = (0, 0, rotz)
    ob['rough'] = rough; ob['metal'] = 0.0
    for p in ob.data.polygons: p.use_smooth = True
    todos.append((ob, lit, {}))
    return ob


def rotar(pb, nombre, eje, grados):
    b = pb.get(nombre)
    if not b: return
    b.rotation_mode = 'XYZ'
    b.rotation_euler.rotate_axis(eje, math.radians(grados))

_MEDIA_TEX = {}
def media_textura(nombre):
    """Color medio (lineal) de una textura. Sirve para calcular el tinte: el
    motor multiplica textura x color de vértice, así que para que a alguien le
    salga la piel que le toca hay que dividir el tono buscado entre esta media.
    Sin esto, teñir encima de una textura clara deja a todo el mundo pálido."""
    if nombre in _MEDIA_TEX: return _MEDIA_TEX[nombre]
    ruta = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                        '..', '..', 'public', 'tex', nombre + '.png')
    im = bpy.data.images.load(ruta, check_existing=True)
    px = im.pixels[:]                      # RGBA lineal
    n = len(px) // 4
    paso = max(1, n // 20000)
    r = g = b = 0.0; c = 0
    for i in range(0, n, paso):
        j = i * 4
        if px[j+3] < .5: continue
        r += px[j]; g += px[j+1]; b += px[j+2]; c += 1
    out = (r/c, g/c, b/c) if c else (1.0, 1.0, 1.0)
    _MEDIA_TEX[nombre] = out
    print('media de %s = %.3f %.3f %.3f' % ((nombre,) + out))
    return out


def tenir(color, nombre):
    """Con una textura A COLOR, el color de vértice ya no es el color: es un
    TINTE, porque el motor multiplica textura x vértice. Dejar el rojo del paño
    encima de una foto de paño rojo lo manda a negro. Se divide entre la media
    de la textura y así el resultado cae donde se quería."""
    m = media_textura(nombre)
    def conv(c):
        return tuple(min(1.0, c[k] / max(1e-4, m[k])) for k in range(3))
    if callable(color):
        return lambda co: conv(color(co))
    return conv(color)


# Cuánto se cierra el pulgar. Se afinan MIRANDO un primer plano de la mano:
# a ojo desde el código no se sabe hacia dónde mira el eje del hueso.
CURVA_DEDO = float(os.environ.get('CURVA_DEDO', 31))
ADUCCION = {'index': 7.0, 'middle': 1.0, 'ring': -6.0, 'pinky': -13.0}
TH_Z1 = float(os.environ.get('TH_Z1', -34))
TH_X1 = float(os.environ.get('TH_X1', 14))
TH_Z2 = float(os.environ.get('TH_Z2', -26))
TH_Z3 = float(os.environ.get('TH_Z3', -20))


def personaje(idx, piel, pantalon, tipo, camisa_fn):
    P = 'P%d_' % idx
    sexo = 'Female' if tipo == 'panuelo' else 'Male'
    antes = set(bpy.context.scene.objects)
    bpy.ops.import_scene.gltf(
        filepath=os.path.join(RUTA_UBC, 'Superhero_%s_FullBody.gltf' % sexo))
    nuevos = [o for o in bpy.context.scene.objects if o not in antes]
    arm = next(o for o in nuevos if o.type == 'ARMATURE')
    mallas = [o for o in nuevos if o.type == 'MESH']
    # Ojo: 'Eyebrows' contiene 'Eye'. Si entra en la lista de ojos se pinta
    # con la lógica de esclerótica y a cada quien le quedan dos brochazos
    # blancos en la frente. Van aparte, con el color del pelo.
    ojos  = [o for o in mallas if 'Eye' in o.name and 'Eyebrow' not in o.name]
    cejas = [o for o in mallas if 'Eyebrow' in o.name]
    cuerpo = next(o for o in mallas if o not in ojos and o not in cejas)

    # sentarlo con el esqueleto
    arm.location.z = -0.472
    bpy.ops.object.select_all(action='DESELECT')
    arm.select_set(True); bpy.context.view_layer.objects.active = arm
    bpy.ops.object.mode_set(mode='POSE')
    pb = arm.pose.bones
    rotar(pb,'thigh_l','X',-86); rotar(pb,'thigh_r','X',-86)
    rotar(pb,'calf_l','X',86);  rotar(pb,'calf_r','X',86)
    rotar(pb,'foot_l','X',-6);  rotar(pb,'foot_r','X',-6)
    rotar(pb,'spine_01','X',7); rotar(pb,'spine_02','X',4)
    rotar(pb,'neck_01','X',-6)
    # brazos por objetivos: el hueso apunta a donde debe, sin adivinar ejes
    objetivos = []
    def apuntar(hueso, destino):
        e = bpy.data.objects.new('tgt', None)
        e.location = destino
        bpy.context.collection.objects.link(e); objetivos.append(e)
        c = pb[hueso].constraints.new('DAMPED_TRACK')
        c.target = e; c.track_axis = 'TRACK_Y'
    for l, sg in (('l',1),('r',-1)):
        # El atril ocupa el borde de la mesa justo delante: si las manos
        # descansan a ±.18 quedan encima y el antebrazo lo atraviesa. Van
        # por fuera del atril, como se sienta uno de verdad.
        apuntar('upperarm_'+l, (sg*.31, -.17, .62))    # codo abajo y afuera
        apuntar('lowerarm_'+l, (sg*.30, -.42, .80))    # mano al borde, al lado
        # Los dedos solo se doblaban, nunca se juntaban: la mano quedaba
        # abierta en estrella, que es la pose de reposo del rig y no la de
        # alguien con la mano puesta en la mesa. Se cierran hacia el medio.
        for d in ('index','middle','pinky','ring'):
            rotar(pb,'%s_01_%s' % (d,l), 'Z', sg*ADUCCION[d])
            for n in ('01','02','03'):
                rotar(pb,'%s_%s_%s' % (d,n,l), 'X', CURVA_DEDO)
        # El pulgar se quedaba FUERA de este bucle y por eso salía tieso y
        # abierto, apuntando al frente como un dedo de más. No curva como los
        # otros: primero se mete cruzando la palma y luego se dobla.
        rotar(pb,'thumb_01_'+l, 'Z', sg*TH_Z1); rotar(pb,'thumb_01_'+l, 'X', TH_X1)
        rotar(pb,'thumb_02_'+l, 'Z', sg*TH_Z2)
        rotar(pb,'thumb_03_'+l, 'Z', sg*TH_Z3)
    # Los DAMPED_TRACK dejan la pose en el resultado evaluado, no en los canales
    # del hueso. Para convertir esta pose en la pose de REPOSO -- que es el
    # esqueleto que three.js va a mover -- hay que hornearla primero y soltar
    # los constraints, si no la pose se deshace al aplicarla.
    bpy.context.view_layer.update()
    bpy.ops.pose.select_all(action='SELECT')
    bpy.ops.pose.visual_transform_apply()
    for b in pb:
        for c in list(b.constraints): b.constraints.remove(c)
    bpy.ops.object.mode_set(mode='OBJECT')
    bpy.context.view_layer.update()
    for e in objetivos: bpy.data.objects.remove(e)
    objetivos = []

    hw = arm.matrix_world @ pb['Head'].head
    # el pelo del pack viene en reposo: esta matriz lo lleva a la cabeza ya
    # poseada. Tiene que salir ANTES de volver la pose en reposo, porque
    # despues de eso la delta es la identidad.
    Mhead = (arm.matrix_world @ pb['Head'].matrix
             @ arm.data.bones['Head'].matrix_local.inverted())

    # congelar la pose en la geometría
    for m in mallas:
        bpy.context.view_layer.objects.active = m
        for mod in list(m.modifiers):
            if mod.type == 'ARMATURE':
                bpy.ops.object.modifier_apply(modifier=mod.name)

    # La pose sentada pasa a ser la pose de reposo. Asi el esqueleto que se
    # exporta coincide con la geometria ya congelada y el bind es la identidad:
    # three.js recibe malla y huesos en el mismo sitio, sin matrices raras.
    bpy.ops.object.select_all(action='DESELECT')
    arm.select_set(True); bpy.context.view_layer.objects.active = arm
    bpy.ops.object.mode_set(mode='POSE')
    bpy.ops.pose.select_all(action='SELECT')
    bpy.ops.pose.armature_apply()
    bpy.ops.object.mode_set(mode='OBJECT')
    bpy.context.view_layer.update()

    # La manga larga acababa en un aro suelto en la muñeca (el solidify abre el
    # borde y el cuerpo va hundido debajo). Manga corta para todos, que además
    # es lo que se usa en el colmado.
    manga_larga = False

    def dom_verts(ob):
        nom = [g.name for g in ob.vertex_groups]
        out = []
        for v in ob.data.vertices:
            best, bw = 'root', -1.0
            for ge in v.groups:
                if ge.weight > bw: bw, best = ge.weight, nom[ge.group]
            out.append(best)
        return out

    def pintar(ob, color):
        at = ob.data.color_attributes.get('Base') or ob.data.color_attributes.new(
            name='Base', type='FLOAT_COLOR', domain='POINT')
        for i, v in enumerate(ob.data.vertices):
            c = color(v.co) if callable(color) else color
            at.data[i].color = (c[0], c[1], c[2], 1.0)

    # ---- ropa de verdad ----
    # El cuerpo base viene desnudo y musculoso: una camisa pintada encima deja
    # ver pectorales y abdominales, y eso es lo que delata al muñeco. La prenda
    # se MODELA: se copia la región del cuerpo, se suaviza (mata el músculo), se
    # empuja hacia afuera y se le da grosor — así el cuello y el borde de la
    # manga se ven como tela, no como piel pintada.
    def prenda(nombre, grupos, fuera=.023, grosor=.011, suave=7):
        ob = cuerpo.copy(); ob.data = cuerpo.data.copy(); ob.name = nombre
        bpy.context.collection.objects.link(ob)
        doms = dom_verts(ob)
        bm = bmesh.new(); bm.from_mesh(ob.data)
        quitar = [f for f in bm.faces
                  if any(doms[v.index] not in grupos for v in f.verts)]
        bmesh.ops.delete(bm, geom=quitar, context='FACES')
        sueltos = [v for v in bm.verts if not v.link_faces]
        if sueltos: bmesh.ops.delete(bm, geom=sueltos, context='VERTS')
        # El glTF parte los vértices en las costuras de UV: cada copia lleva
        # su propia normal. Al empujar hacia afuera se abrían en grietas y
        # picos — eso era lo que hacía ver la ropa rota. Se sueldan primero.
        bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=3e-4)
        bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
        bm.to_mesh(ob.data); bm.free()
        if len(ob.data.vertices) < 12:
            bpy.data.objects.remove(ob); return None
        bpy.context.view_layer.objects.active = ob
        try:                      # normales partidas heredadas del importador
            bpy.ops.mesh.customdata_custom_splitnormals_clear()
        except Exception: pass
        if hasattr(ob.data, 'use_auto_smooth'): ob.data.use_auto_smooth = False
        m = ob.modifiers.new('sm','SMOOTH'); m.factor = .7; m.iterations = suave
        bpy.ops.object.modifier_apply(modifier='sm')
        m = ob.modifiers.new('di','DISPLACE'); m.mid_level = 0.0; m.strength = fuera
        bpy.ops.object.modifier_apply(modifier='di')
        m = ob.modifiers.new('sm2','SMOOTH'); m.factor = .5; m.iterations = 2
        bpy.ops.object.modifier_apply(modifier='sm2')   # relaja lo que quede
        m = ob.modifiers.new('so','SOLIDIFY'); m.thickness = grosor; m.offset = 0
        bpy.ops.object.modifier_apply(modifier='so')
        for pg in ob.data.polygons: pg.use_smooth = True
        return ob

    TRONCO = {'spine_01','spine_02','spine_03','clavicle_l','clavicle_r'}
    MANGA  = {'upperarm_l','upperarm_r'}
    MANGAL = {'lowerarm_l','lowerarm_r'}
    CADERA = {'pelvis'}
    MUSLO  = {'thigh_l','thigh_r'}
    PANTO  = {'calf_l','calf_r'}

    # pintar el cuerpo (lo que asoma: cara, cuello, manos, antebrazos)
    # La piel ya no es un color plano. La malla trae sus UV y el pack trae la
    # textura de la cara — ojos, nariz, labios, barba — que hasta ahora no
    # estábamos usando: se importó la geometría y se dejaron los mapas atrás.
    # Por eso la gente parecía plástico pintado. Ahora el color de vértice es
    # un TINTE que multiplica esa textura, y así cada quien conserva su tono.
    TEX_PIEL = 'piel_f' if sexo == 'Female' else 'piel_m'
    mtex = media_textura(TEX_PIEL)
    tinte = tuple(min(1.0, piel[k] / max(1e-4, mtex[k])) for k in range(3))
    nombres_vg = [g.name for g in cuerpo.vertex_groups]
    me = cuerpo.data
    base_at = me.color_attributes.new(name='Base', type='FLOAT_COLOR', domain='POINT')
    for i, v in enumerate(me.vertices):
        best, bw = 'root', -1.0
        for ge in v.groups:
            if ge.weight > bw: bw, best = ge.weight, nombres_vg[ge.group]
        if best in PIEL_G: c = tinte
        elif best in ('lowerarm_l','lowerarm_r'):
            c = camisa_fn(v.co) if manga_larga else tinte
        elif best in PANT_G: c = pantalon
        elif best in ZAP_G: c = hexlin('#26201A')
        else: c = camisa_fn(v.co)
        base_at.data[i].color = (c[0], c[1], c[2], 1.0)

    prendas = []
    if tipo == 'panuelo':
        d = prenda(P+'vestido', TRONCO|MANGA|CADERA|MUSLO, fuera=.023, suave=8)
        if d: pintar(d, camisa_fn); prendas.append(d)
        me_ = prenda(P+'medias', MUSLO|PANTO, fuera=.012, grosor=.006, suave=4)
        if me_: pintar(me_, pantalon); prendas.append(me_)
    else:
        reg = TRONCO | MANGA | (MANGAL if manga_larga else set())
        ca = prenda(P+'camisa', reg, fuera=.022, suave=8)
        if ca: pintar(ca, camisa_fn); prendas.append(ca)
        pa = prenda(P+'pantalon', CADERA|MUSLO|PANTO, fuera=.017, suave=6)
        if pa: pintar(pa, pantalon); prendas.append(pa)

    # el cuerpo desnudo asomaba por los hombros. Recortarlo abre huecos donde la
    # tela encoge, así que se hunde: los vértices bajo la ropa se meten hacia
    # adentro y la tela queda sola por fuera.
    if prendas:
        cubierto = TRONCO | MANGA | CADERA | MUSLO | PANTO
        if manga_larga: cubierto |= MANGAL
        dc = dom_verts(cuerpo)
        vg = cuerpo.vertex_groups.new(name='bajo_ropa')
        vg.add([i for i, d in enumerate(dc) if d in cubierto], 1.0, 'REPLACE')
        bpy.context.view_layer.objects.active = cuerpo
        # la tela se suaviza y encoge en los hombros; si el cuerpo de abajo
        # sigue con todo su músculo, asoma en picos. Se le da el mismo
        # suavizado bajo la ropa y recién entonces se hunde.
        m = cuerpo.modifiers.new('suavR','SMOOTH')
        m.factor = .7; m.iterations = 8; m.vertex_group = 'bajo_ropa'
        bpy.ops.object.modifier_apply(modifier='suavR')
        m = cuerpo.modifiers.new('enc','DISPLACE')
        m.mid_level = 0.0; m.strength = -0.016; m.vertex_group = 'bajo_ropa'
        bpy.ops.object.modifier_apply(modifier='enc')
        # el puntero muere al aplicar el modificador: buscarlo por nombre
        cuerpo.vertex_groups.remove(cuerpo.vertex_groups['bajo_ropa'])

    # unir la ropa al cuerpo: el corte por partes la reparte sola
    if prendas:
        bpy.ops.object.select_all(action='DESELECT')
        for pr in prendas: pr.select_set(True)
        cuerpo.select_set(True)
        bpy.context.view_layer.objects.active = cuerpo
        bpy.ops.object.join()

    # ---- partir el cuerpo en mallas de piel y de ropa ----
    # Antes se partia en piezas rigidas de marioneta y el hombro se abria al
    # girar. Ahora el cuerpo entero va SKINNEADO al esqueleto: se parte solo en
    # dos mallas porque cada una necesita su material (la piel lleva mapa de
    # normales, la ropa lleva grano de tela), no porque se muevan por separado.
    nombres_vg = [g.name for g in cuerpo.vertex_groups]
    me = cuerpo.data
    PIEL_BUCKET = PIEL_G | {'lowerarm_l','lowerarm_r'} if not manga_larga else PIEL_G
    dom_at = me.attributes.new('dom', 'INT', 'POINT')
    for i, v in enumerate(me.vertices):
        best, bw = 'root', -1.0
        for ge in v.groups:
            if ge.weight > bw: bw, best = ge.weight, nombres_vg[ge.group]
        dom_at.data[i].value = 0 if best in PIEL_BUCKET else 1

    partes_obj = {}
    for k, parte in enumerate(['piel', 'ropa']):
        me2 = cuerpo.data.copy()
        ob = bpy.data.objects.new('tmp_'+parte, me2)
        bpy.context.collection.objects.link(ob)
        ob.matrix_world = cuerpo.matrix_world.copy()
        # los grupos de vértice viven en el OBJETO, no en la malla: hay que
        # recrearlos en el MISMO orden o los pesos apuntan a otro hueso.
        for g in cuerpo.vertex_groups: ob.vertex_groups.new(name=g.name)
        bm = bmesh.new(); bm.from_mesh(me2)
        capa = bm.verts.layers.int.get('dom')
        caras_fuera = []
        for f in bm.faces:
            votos = {}
            for v in f.verts:
                votos[v[capa]] = votos.get(v[capa], 0) + 1
            gana = min((p for p in votos if votos[p] == max(votos.values())))
            if gana != k: caras_fuera.append(f)
        bmesh.ops.delete(bm, geom=caras_fuera, context='FACES')
        sueltos = [v for v in bm.verts if not v.link_faces]
        if sueltos: bmesh.ops.delete(bm, geom=sueltos, context='VERTS')
        bm.to_mesh(me2); bm.free()
        if len(me2.vertices) == 0:
            bpy.data.objects.remove(ob); continue
        ob.data.materials.clear(); ob.data.materials.append(material_unico())
        for p in ob.data.polygons: p.use_smooth = True
        ob['rough'] = .82; ob['metal'] = 0.0
        if parte == 'ropa':
            ob['tx'] = 'tela'; ob['txs'] = .22      # grano de tela, no plástico
        else:
            # la cara y las manos: textura de piel del pack (que trae ojos,
            # labios y barba pintados) más el mapa de normales
            ob['tx'] = TEX_PIEL
            ob['nm'] = 'nm_f' if sexo == 'Female' else 'nm_m'
        partes_obj[parte] = ob
    # ojos y cejas van con la cabeza, oscuros
    extras_cabeza = []
    # El ojo trae su propia textura en el pack (iris marrón, esclerótica con su
    # sombra) y sus UV. Pintarlo a mano por posición dejaba dos rendijas blancas
    # encendidas sobre la cara, ahora que la piel también lleva textura. Se
    # deja la textura y el color de vértice queda en blanco: solo multiplica.
    for m in ojos:
        at = m.data.color_attributes.new(name='Base', type='FLOAT_COLOR', domain='POINT')
        for i in range(len(m.data.vertices)):
            at.data[i].color = (1.0, 1.0, 1.0, 1.0)
        m['rough'] = .22; m['tx'] = 'ojo'; m['nm'] = 'ojo_nm'
        todos.append((m, 1, {}))
        extras_cabeza.append(m)

    # pelo, cejas y barba: mallas del mismo pack, llevadas a la cabeza poseada
    def postizo(archivo, color):
        antes2 = set(bpy.context.scene.objects)
        bpy.ops.import_scene.gltf(filepath=os.path.join(RUTA_UBC, archivo))
        out = []
        for o in [x for x in bpy.context.scene.objects if x not in antes2]:
            if o.type != 'MESH':
                bpy.data.objects.remove(o); continue
            o.matrix_world = Mhead @ o.matrix_world
            bpy.context.view_layer.objects.active = o
            bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
            o.data.materials.clear(); o.data.materials.append(material_unico())
            at = o.data.color_attributes.new(name='Base', type='FLOAT_COLOR',
                                             domain='POINT')
            for i in range(len(o.data.vertices)):
                at.data[i].color = (color[0], color[1], color[2], 1.0)
            o['rough'] = .95
            for pg in o.data.polygons: pg.use_smooth = True
            todos.append((o, 1, {}))
            out.append(o)
        return out

    # La cana casi blanca le dejaba al viejo un brochazo de pintura en la
    # barbilla. Gris de sal y pimienta: se lee como barba canosa, no como cal.
    CANA  = hexlin('#8E8478')
    NEGRO = hexlin('#1A1208')
    PELOS = {
        'sombrero': [('Hair_Buzzed.gltf', CANA), ('Hair_Beard.gltf', CANA)],
        'gorra':    [('Hair_Buzzed.gltf', NEGRO), ('Hair_Beard.gltf', NEGRO)],
        'panuelo':  [('Hair_Buns.gltf', NEGRO)],
        'afro':     [('Hair_Buzzed.gltf', NEGRO), ('Hair_Beard.gltf', hexlin('#241A0E'))],
    }
    CEJA = {'sombrero': CANA, 'gorra': NEGRO, 'panuelo': NEGRO, 'afro': NEGRO}
    for ce in cejas:
        ce.data.materials.clear(); ce.data.materials.append(material_unico())
        at = ce.data.color_attributes.new(name='Base', type='FLOAT_COLOR',
                                          domain='POINT')
        c = CEJA.get(tipo, NEGRO)
        for i in range(len(ce.data.vertices)): at.data[i].color = (c[0],c[1],c[2],1.0)
        ce['rough'] = .95
        todos.append((ce, 1, {}))
        extras_cabeza.append(ce)
    for archivo, color in PELOS.get(tipo, []):
        extras_cabeza += postizo(archivo, color)

    # lo que corona a cada quien, puesto sobre la cabeza ya poseada
    hx, hy, hz = hw.x, hw.y, hw.z
    if tipo == 'sombrero':
        PAJA = hexlin('#C9A96A'); CINTA = hexlin('#7A5738')
        # ala: no es un disco plano. Cae un poco y se levanta en el filo.
        R0, R1 = .118, .205
        bm = cilindro(R1, R1, .010, (hx,hy,hz+.128), seg=48)
        for v in bm.verts:
            r = math.hypot(v.co.x-hx, v.co.y-hy)
            t = max(0.0, min(1.0, (r-R0)/(R1-R0)))
            v.co.z += -.020*math.sin(t*math.pi) + .034*t*t
        extras_cabeza.append(pieza(bm,'ala',PAJA,rough=.92,lit=1,subsurf=1))
        # copa cónica que de verdad tapa el cráneo, con su cinta y el tope redondo
        extras_cabeza.append(pieza(cilindro(.122,.104,.104,(hx,hy,hz+.178), seg=32),
                             'copa',PAJA,rough=.92,lit=1))
        extras_cabeza.append(pieza(esfera(.104,(hx,hy,hz+.230), seg=24, esc=(1,1,.38)),
                             'tope',PAJA,rough=.92,lit=1,subsurf=1))
        extras_cabeza.append(pieza(cilindro(.1255,.1255,.026,(hx,hy,hz+.143), seg=32),
                             'cinta',CINTA,rough=.85,lit=1))
    elif tipo == 'gorra':
        # La visera estaba a la altura de los ojos y con el paño casi negro
        # parecía una venda. Sube al nacimiento del pelo, más ancha y menos
        # larga, y el azul sube de tono para que se lea como tela.
        PANO = hexlin('#3E5670')
        # Media esfera = bombín, no gorra. La copa va MUCHO más baja y tirada
        # hacia atrás, que es lo que hace que se lea como pelotera.
        bm = esfera(.118,(hx,hy+.016,hz+.118), seg=16)
        for v in bm.verts: v.co.z = hz+.118 + (v.co.z-(hz+.118))*.52
        bmesh.ops.bisect_plane(bm, geom=bm.verts[:]+bm.edges[:]+bm.faces[:],
            plane_co=(hx,hy,hz+.122), plane_no=(0,0,-1), clear_inner=True)
        extras_cabeza.append(pieza(bm,'gc',PANO,rough=.85,lit=1,
                             solidify=.012,subsurf=1))
        vb = caja((.178,.095,.009),(hx,hy-.150,hz+.128),
                  rot=(math.radians(26),0,0))
        for v in vb.verts:                       # las puntas caen, como la real
            t = abs(v.co.x-hx)/.0925
            v.co.z -= .020*t*t
            v.co.y += .012*t*t
        extras_cabeza.append(pieza(vb,'vis',PANO,rough=.85,lit=1,
                             bevel=.005,subsurf=1))
    elif tipo == 'panuelo':
        # el pelo recogido del pack le queda mejor que el pañuelo: se le ve la
        # cara y los moños. Solo los aros de oro.
        for sx in (-.105,.105):
            extras_cabeza.append(pieza(cilindro(.022,.022,.008,(hx+sx,hy,hz+.01), seg=10,
                                 rot=(0,math.radians(90),0)),'arete',
                                 hexlin('#D9B23A'),rough=.3,lit=1))
    else:
        extras_cabeza.append(pieza(esfera(.125,(hx,hy+.012,hz+.155), seg=14, esc=(1,1,.92)),'afro',
            lambda co: tuple(c*(.85+.15*noise.noise(Vector((co.x*30,co.y*30,co.z*30))))
                             for c in hexlin('#171008')), rough=1, lit=1, subsurf=1))

    # ---- el esqueleto que se va a exportar ----
    # Solo los huesos que el juego mueve o que sostienen geometria. Los dedos
    # nunca se mueven por su cuenta: su peso se pasa a la mano y se ahorran 40
    # huesos por persona sin que se note nada.
    HUESOS = ['root','pelvis','spine_01','spine_02','spine_03',
              'clavicle_l','upperarm_l','lowerarm_l','hand_l',
              'clavicle_r','upperarm_r','lowerarm_r','hand_r',
              'neck_01','Head',
              'thigh_l','calf_l','foot_l','ball_l',
              'thigh_r','calf_r','foot_r','ball_r']
    esqueletos[P[:-1]] = huesos_de(arm, HUESOS)

    # ---- registrar: todo lo de esta persona va skinneado al mismo esqueleto ----
    for parte, ob in partes_obj.items():
        ob.name = P + parte
        todos.append((ob, 1, {'sk': P[:-1]}))
    # ojos, pelo, cejas, barba y sombrero cuelgan de la cabeza. Se renombran
    # con el prefijo de la persona: el horneado los sienta en su silla por el
    # nombre, y sin prefijo se quedarían iluminados en el origen.
    Mb = cuerpo.matrix_world.copy()
    for n_, ob in enumerate(extras_cabeza):
        if not vivo(ob): continue
        # El pelo y el sombrero se construyen en coordenadas de mundo, pero las
        # piezas del cuerpo llevan el desplazamiento del esqueleto DENTRO de su
        # matriz de objeto. Al sentarlos para hornear, a los postizos se les
        # volvía a restar ese medio metro y acababan dentro del pecho. Se les
        # pone la misma matriz que al cuerpo, compensando la geometría.
        Mo = ob.matrix_world.copy()
        ob.parent = None
        ob.data.transform(Mb.inverted() @ Mo)
        ob.matrix_world = Mb.copy()
        pegar_a_hueso(ob, 'Head')
        ob.name = '%sx%d' % (P, n_)
        puesto = False
        for j, (o, l_, m_) in enumerate(todos):
            if vivo(o) and o is ob:
                todos[j] = (o, l_, dict(m_, sk=P[:-1])); puesto = True
        if not puesto: todos.append((ob, 1, {'sk': P[:-1]}))
    # limpiar: esqueleto, objetivos y cuerpo original fuera
    for e in objetivos: bpy.data.objects.remove(e)
    bpy.data.objects.remove(arm)
    if vivo(cuerpo): bpy.data.objects.remove(cuerpo)

# los patrones de la ropa (coordenadas del cuerpo ya sentado: pecho ~z 1.2)
# Ojo: estos colores viven en los vértices. Una raya de 1 cm cae entre vértice
# y vértice y sale como manchas en triángulo — la guayabera parecía rota por
# eso, no por la geometría. Variación suave solamente.
def ropa_guayabera(co):
    base = hexlin('#E6DCC2')
    n = noise.noise(Vector((co.x*26, co.y*26, co.z*26)))
    return mezcla(base, hexlin('#D6CBAE'), max(0.0, min(1.0, .5+.5*n))*.22)
def ropa_joven(co):
    base = hexlin('#4A86C8')
    t = max(0.0, min(1.0, (co.z-1.10)/.10))        # degradado, no corte seco
    return mezcla(base, hexlin('#6FA3D8'), t*.55)
def ropa_dona(co):
    base = hexlin('#B84A62')
    n = noise.noise(Vector((co.x*70, co.y*70, co.z*70)))
    if n > .55: return mezcla(base, hexlin('#E8935A'), .30)
    if n < -.58: return mezcla(base, hexlin('#EDE6D6'), .22)
    return base
def ropa_afro(co):
    return hexlin('#D4622A')

# ---------------- construir ----------------
limpiar()
calle()
colmado()
mesa()
vecindario()
ANG = [0, math.pi/2, math.pi, -math.pi/2]
D = 1.15/2 + .28
# Hacia dónde mira la silla generada respecto a su eje Z. Se ajusta MIRANDO una
# vista cenital: la vez pasada el espaldar quedó de frente al jugador.
GIRO_SILLA = 0.0
SILLA_COL = [hexlin('#2E8B4F'), CREMA, hexlin('#2F9556'), hexlin('#237A44')]
for s in range(4):
    # el respaldo va en -Y y el personaje mira a -Y: la silla va media vuelta
    # girada respecto a quien se sienta, o el espaldar le queda de frente
    traste('silla.glb', 'Silla%d' % s, (math.sin(ANG[s])*D, -math.cos(ANG[s])*D, PISO),
           ANG[s] + GIRO_SILLA, tri=2400, alto=.86, rough=.62)
traste('silla.glb', 'SillaVacia', (-0.15, 2.15, PISO),
       math.radians(20) + GIRO_SILLA, tri=2000, alto=.86, rough=.62)
# Tonos del Caribe de verdad: del indio claro al prieto, todos cálidos.
PIELES = [hexlin('#8D5A32'), hexlin('#C1855A'), hexlin('#9E6238'), hexlin('#5A3618')]
TIPOS  = ['sombrero','gorra','panuelo','afro']
PATRONES = [ropa_guayabera, ropa_joven, ropa_dona, ropa_afro]
PANTS  = [hexlin('#8A7B62'), hexlin('#2E3A46'), hexlin('#4A3A50'), hexlin('#2E2A33')]
for s in range(4):
    personaje(s, PIELES[s], PANTS[s], TIPOS[s], PATRONES[s])

# la gente se sienta SOLO para hornear; vuelve al origen antes de exportar
COLOC = []
for ob, lit, mt in todos:
    if vivo(ob) and len(ob.name) > 2 and ob.name[0] == 'P' and ob.name[1].isdigit():
        s = int(ob.name[1])
        ob.location = (math.sin(ANG[s])*D, -math.cos(ANG[s])*D, PISO - 0.472)
        ob.rotation_euler = (0,0,ANG[s]+math.pi)
        COLOC.append(ob)
bpy.context.view_layer.update()

# ---------------- las luces de verdad ----------------
def punto(pos, w, color, radio=.06):
    li = bpy.data.lights.new('l','POINT'); li.energy = w; li.color = color
    li.shadow_soft_size = radio
    ob = bpy.data.objects.new('l', li); ob.location = pos
    bpy.context.collection.objects.link(ob); return ob

CAL = (1.0,.77,.55)
punto((0, 0, 1.95), 150, CAL, .14)                    # el bombillo de la mesa
punto((-0.1, .8, 2.02), 28, (1.0,.72,.48))            # guirnaldas cruzadas
punto((-0.7, .8, 2.02), 28, (1.0,.72,.48))
punto((0, -2.2, 2.14), 24, (1.0,.72,.48))              # la de alante
punto((-0.8, 3.05, 2.2), 34, (1.0,.72,.48))          # la del alero
punto((CX, CY-0.95, 2.1), 60, (1.0,.74,.5))           # el porche
li = bpy.data.lights.new('int','AREA'); li.energy = 90; li.color = (1.0,.69,.42)
li.size = 2.4; li.size_y = 1.2
ob = bpy.data.objects.new('int', li)
ob.location = (CX, CY+0.35, 1.15); ob.rotation_euler = (math.radians(-102),0,0)
bpy.context.collection.objects.link(ob)
li = bpy.data.lights.new('sol','SUN'); li.energy = 0.3; li.color = (.91,.58,.35)
ob = bpy.data.objects.new('sol', li)
ob.rotation_euler = (math.radians(80), 0, math.radians(-105))
bpy.context.collection.objects.link(ob)
w = bpy.context.scene.world or bpy.data.worlds.new('w')
bpy.context.scene.world = w; w.use_nodes = True
bg = w.node_tree.nodes['Background']
bg.inputs[0].default_value = (.05,.04,.10,1); bg.inputs[1].default_value = 0.34

# ---------------- hornear ----------------
sc = bpy.context.scene
sc.render.engine = 'CYCLES'; sc.cycles.device = 'CPU'
sc.cycles.sample_clamp_indirect = 4
sc.render.bake.target = 'VERTEX_COLORS'
for ob, lit, mt in todos:
    if not vivo(ob): continue
    if os.environ.get('RAPIDO'): break
    at = ob.data.color_attributes.new(name='LUZ', type='FLOAT_COLOR', domain='POINT')
    ob.data.color_attributes.active_color = at
    bpy.ops.object.select_all(action='DESELECT')
    ob.select_set(True); bpy.context.view_layer.objects.active = ob
    ocultos = []
    if ob.name == 'sueloCalle':
        for o2, _, _ in todos:
            if vivo(o2) and (o2.name.startswith('P') or o2.name.startswith('Silla')):
                o2.hide_render = True; ocultos.append(o2)
    elif ob.name.startswith('Silla'):
        # la silla se hornea sin su dueño encima, o sale negra
        for o2, _, _ in todos:
            if vivo(o2) and o2.name.startswith('P') and o2.name[1].isdigit():
                o2.hide_render = True; ocultos.append(o2)
    try:
        if lit:
            sc.cycles.samples = 16
            bpy.ops.object.bake(type='AO')
        else:
            sc.cycles.samples = 256 if ob.name == 'sueloCalle' else 48
            bpy.ops.object.bake(type='DIFFUSE', pass_filter={'DIRECT','INDIRECT'})
    except Exception as e:
        print('bake falló en', ob.name, e)
    for o2 in ocultos: o2.hide_render = False

for ob in COLOC:
    ob.location = (0,0,-0.472); ob.rotation_euler = (0,0,0)
bpy.context.view_layer.update()

# ---------------- exportar ----------------
def tono(c):
    c = c*1.25 / (1.0 + c*0.45)
    return min(255, int((max(0.0,c))**(1/2.2)*255))

def exportar(path):
    objetos = []; blobs = []
    for ob, lit, mt in todos:
        if not vivo(ob): continue
        me = ob.data; me.calc_loop_triangles()
        nv = len(me.vertices); nt = len(me.loop_triangles)
        base = me.color_attributes.get('Base')
        luz  = me.color_attributes.get('LUZ')
        pos = bytearray(); nor = bytearray(); col = bytearray(); idx = bytearray()
        uvb = bytearray(); sib = bytearray(); swb = bytearray()
        # pesos de piel: el vértice se reparte entre hasta 4 huesos. Los grupos
        # que apuntan a huesos descartados (dedos) caen sobre el que los
        # sostiene, por eso se suman antes de ordenar.
        esq = esqueletos.get(mt.get('sk')) if mt.get('sk') else None
        if esq:
            remap = esq['remap']; vgn = [g.name for g in ob.vertex_groups]
            for v in me.vertices:
                acc = {}
                for ge in v.groups:
                    if ge.group >= len(vgn): continue
                    j = remap.get(vgn[ge.group])
                    if j is None or ge.weight <= 0: continue
                    acc[j] = acc.get(j, 0.0) + ge.weight
                top = sorted(acc.items(), key=lambda kv: -kv[1])[:4]
                if not top: top = [(0, 1.0)]
                s = sum(w for _, w in top)
                # cuantizar a bytes que sumen 255 exactos: truncar y repartir
                # lo que falta por el mayor resto. Redondear cada uno por su
                # cuenta se pasaba de 255 y reventaba el empaquetado.
                fr = [w/s*255 for _, w in top]
                q = [int(x) for x in fr]
                for k in sorted(range(len(q)), key=lambda k: q[k]-fr[k])[:255-sum(q)]:
                    q[k] += 1
                bs = [0]*4; bw = [0]*4
                for k, (j, _) in enumerate(top):
                    bs[k] = j; bw[k] = q[k]
                sib += struct.pack('<4B', *bs); swb += struct.pack('<4B', *bw)
        tx = ob.get('tx'); nm = ob.get('nm'); txs = ob.get('txs', 1.0)
        uv_mesh = None
        if nm and me.uv_layers.active:
            uv_mesh = [None]*nv
            for loop in me.loops:
                if uv_mesh[loop.vertex_index] is None:
                    uv_mesh[loop.vertex_index] = me.uv_layers.active.data[loop.index].uv[:]
        M = ob.matrix_world
        for i, v in enumerate(me.vertices):
            wp = M @ v.co
            n = (M.to_3x3() @ v.normal).normalized()
            pos += struct.pack('<3f', wp.x, wp.z, -wp.y)
            nor += struct.pack('<3f', n.x, n.z, -n.y)
            if uv_mesh is not None:
                u_, v_ = uv_mesh[i] or (0.0, 0.0)
                uvb += struct.pack('<2f', u_, v_)
            elif tx:
                ax, ay, az = abs(n.x), abs(n.y), abs(n.z)
                if az >= ax and az >= ay: u_, v_ = wp.x, wp.y
                elif ax >= ay:            u_, v_ = wp.y, wp.z
                else:                     u_, v_ = wp.x, wp.z
                uvb += struct.pack('<2f', u_/txs, v_/txs)
            b = base.data[i].color if base else (1,1,1,1)
            l = luz.data[i].color if luz else (1,1,1,1)
            if lit:
                a = .35 + .65*l[0]
                col += struct.pack('<3B',
                    min(255,int((b[0]*a)**(1/2.2)*255)),
                    min(255,int((b[1]*a)**(1/2.2)*255)),
                    min(255,int((b[2]*a)**(1/2.2)*255)))
            else:
                col += struct.pack('<3B', tono(b[0]*l[0]), tono(b[1]*l[1]), tono(b[2]*l[2]))
        for t in me.loop_triangles:
            idx += struct.pack('<3I', *t.vertices)
        o = {'n': ob.name, 'v': nv, 't': nt, 'l': lit,
             'r': round(ob.get('rough', .9),3), 'm': round(ob.get('metal', 0),3)}
        if uvb: o['u'] = 1
        if esq: o['sk'] = mt['sk']
        if tx: o['tx'] = tx
        if nm: o['nm'] = nm
        objetos.append(o)
        blobs.append((bytes(pos), bytes(nor), bytes(col), bytes(uvb),
                      bytes(sib), bytes(swb), bytes(idx)))
    meta = json.dumps({'objects': objetos,
                       'skeletons': {k: v['bones'] for k, v in esqueletos.items()}
                      }).encode()
    with open(path,'wb') as f:
        f.write(struct.pack('<4sI', b'MESA', len(meta)))
        f.write(meta); f.write(b'\0'*((-f.tell()) % 4))
        for (p,n,c,u,si,sw,i) in blobs:
            f.write(p); f.write(n); f.write(c); f.write(b'\0'*((-len(c)) % 4))
            f.write(u); f.write(si); f.write(sw); f.write(i)
    print('exportado', path, sum(o['v'] for o in objetos), 'vertices,',
          sum(o['t'] for o in objetos), 'triangulos')

exportar(OUT)
