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

import bpy, bmesh, struct, json, math, random
from mathutils import Vector, Euler, noise

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

todos = []   # (ob, lit, meta)  meta: {'pa': padre, 'pv': pivote en ejes three}

def pieza(bm, nombre, color, rough=.9, metal=0.0, lit=0, meta=None,
          solidify=None, bevel=None, subsurf=None, cuts=None):
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
    pieza(bm, 'sueloCalle', suelo_color, rough=.45, metal=.06)

# ---------------- el colmado ----------------
def colmado():
    PALETA = ['#C8552F','#D9A238','#4F8A3D','#B03A2E','#3E6FA0','#D8C79A']
    H0, H1 = PISO, 2.45                       # pared de 3.2 m
    AB0, AB1, ABW = 0.20, 1.55, 2.6           # la boca del mostrador
    for (w,px,z0,z1) in [(2.45,-2.6,H0,H1),(2.45,2.6,H0,H1),(ABW,0,AB1,H1)]:
        bm = caja((w,.22,z1-z0),(CX+px, CY, (z0+z1)/2))
        pieza(bm, 'pared', pared_color(TURQ,TURQV), rough=.95, cuts=18, bevel=.012)
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
    pieza(bm, 'mostrador', pared_color(CORAL,CORALV), rough=.9, cuts=8, bevel=.015)
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
    pieza(bm, 'zinc', zc, rough=.5, metal=.35, solidify=.012)
    for px in (-3.7, 3.7):
        pieza(cilindro(.035,.05,3.25,(CX+px, CY-1.3, PISO+1.62), seg=10),'puntal',MAD,rough=.8)
    bm = caja((.25,3.6,3.5),(CX-3.85, CY-0.8, PISO+1.75))
    pieza(bm, 'casaCoral', pared_color(CORAL,CORALV), rough=.95, cuts=16, bevel=.015)
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
    def torre_cajas(px, py, n, nombre):
        parts = []
        for i in range(n):
            b = Vector((px+(random.random()-.5)*.04, py, PISO+.17+i*.35))
            for k in range(3):
                parts.append(pieza(caja((.36,.36,.055),(b.x,b.y,b.z-.11+k*.11)),
                                   'cs', VERDE, rough=.8))
            for sx,sy in [(-.16,-.16),(.16,-.16),(-.16,.16),(.16,.16)]:
                parts.append(pieza(caja((.04,.04,.32),(b.x+sx,b.y+sy,b.z)),
                                   'cp', hexlin('#2E5C2A'), rough=.8))
        return unir(parts, nombre)
    torre_cajas(CX+1.75, CY-.55, 3, 'caja1')
    torre_cajas(CX+2.25, CY-.75, 2, 'caja2')
    torre_cajas(CX-1.9,  CY-.65, 2, 'caja3')
    torre_cajas(-2.5, -1.5, 2, 'cajaSuelta')
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
    pieza(caja((.1,.07,.2),(CX+3.43, CY-0.14, PISO+.1)), 'escoba',
          hexlin('#C9A96A'), rough=1)

# ---------------- la mesa: 1.15 m con borde alzado ----------------
def mesa():
    M = 1.15
    def fieltro(co):
        n = noise.noise(Vector((co.x*9, co.y*9, 0)))
        return tuple(c*(.9+.1*n) for c in FIELTRO)
    pieza(caja((M,M,.045),(0,0,-.0225)), 'panio', fieltro, rough=.98, lit=1,
          cuts=8, bevel=.008)
    # el borde alzado: los rieles suben sobre el paño, como una mesa de dominó real
    r = M/2+.045
    marcos = []
    for i,(px,py) in enumerate([(0,r),(0,-r),(r,0),(-r,0)]):
        dim = (M+.19,.09,.075) if i<2 else (.09,M+.19,.075)
        marcos.append(pieza(caja(dim,(px,py,-.012)), 'marco', MAD, rough=.55, lit=1,
                            bevel=.012))
    unir(marcos,'marcoMesa', lit=1)
    perfil = [(.030,0),(.040,.06),(.026,.16),(.036,.30),(.023,.44),
              (.033,.56),(.020,.66),(.030,.70)]
    for sx,sy in [(1,1),(1,-1),(-1,1),(-1,-1)]:
        parts = []
        bx, by = sx*(M/2-.09), sy*(M/2-.09)
        for k in range(len(perfil)-1):
            r1,z1 = perfil[k]; r2,z2 = perfil[k+1]
            parts.append(pieza(cilindro(r1,r2,(z2-z1),(bx,by,PISO+(z1+z2)/2), seg=12),
                               'pt', MADOSC, rough=.55, lit=1))
        unir(parts,'pata', lit=1)
    for d in [(.9,.05,.04),(.05,.9,.04)]:
        pieza(caja(d,(0,0,PISO+.24)), 'trav', MADOSC, rough=.6, lit=1)

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

# ---------------- la gente: proporciones reales, por partes ----------------
# Sentados, piso local z=0, frente hacia -Y. El juego arma la marioneta:
#   torso (pivote cadera) > cabeza (cuello) y brazos (hombro) > antebrazos (codo)
def personaje(idx, piel, pantalon, tipo, patron):
    P = 'P%d_' % idx
    pv = lambda x,y,z: {'pv': [x, z, -y]}    # pivote ya en ejes three

    parts = []
    parts.append(pieza(caja((.34,.30,.14),(0,-.02,.48)),'pel',pantalon,rough=.9,lit=1,
                       bevel=.04,subsurf=1))
    for l in (-1,1):
        parts.append(pieza(tubo((l*.09,-.04,.50),(l*.10,-.36,.47),.062,.055),'mus',
                           pantalon,rough=.9,lit=1,subsurf=1))
        parts.append(pieza(tubo((l*.10,-.38,.45),(l*.10,-.40,.05),.048,.04),'esp',
                           pantalon,rough=.9,lit=1,subsurf=1))
        parts.append(pieza(caja((.09,.24,.07),(l*.10,-.46,.035)),'zap',
                           hexlin('#26201A'),rough=.6,lit=1,bevel=.015,subsurf=1))
    unir(parts, P+'piernas', lit=1, meta={})

    parts = []
    parts.append(pieza(caja((.40,.26,.52),(0,0,.84)),'to',patron,rough=.85,lit=1,
                       bevel=.07,subsurf=2))
    parts.append(pieza(tubo((0,-.01,1.06),(0,-.02,1.14),.055,.05),'cu',piel,
                       rough=.7,lit=1))
    if tipo == 'panuelo':
        parts.append(pieza(caja((.3,.03,.3),(0,-.145,.82)),'del',hexlin('#EDE6D6'),
                           rough=.9,lit=1,bevel=.012,subsurf=1))
    unir(parts, P+'torso', lit=1, meta=dict(pv(0,0,.55), pa=''))

    parts = []
    parts.append(pieza(esfera(.105,(0,-.005,1.26), seg=18, esc=(.92,1,1.08)),'ca',
                       piel,rough=.7,lit=1,subsurf=1))
    for sx in (-.04,.04):
        parts.append(pieza(esfera(.012,(sx,-.098,1.28), seg=8, esc=(1,.5,1.4)),'ojo',
                           hexlin('#1A120C'),rough=.4,lit=1))
    parts.append(pieza(esfera(.02,(0,-.108,1.245), seg=8, esc=(.8,.7,1)),'nariz',
                       piel,rough=.7,lit=1))
    if tipo == 'sombrero':
        bm = cilindro(.19,.18,.02,(0,0,1.345), seg=18)
        for v in bm.verts:
            d = math.hypot(v.co.x, v.co.y)
            if d > .12: v.co.z += (d-.12)*.35
        parts.append(pieza(bm,'ala',hexlin('#C9A96A'),rough=.9,lit=1,subsurf=1))
        parts.append(pieza(cilindro(.075,.065,.075,(0,0,1.385), seg=14),'copa',
                           hexlin('#C9A96A'),rough=.9,lit=1,bevel=.012,subsurf=1))
        parts.append(pieza(esfera(.107,(0,.01,1.24), seg=12, esc=(.9,.95,.7)),'pelo',
                           hexlin('#9C9890'),rough=1,lit=1))
    elif tipo == 'gorra':
        bm = esfera(.115,(0,.005,1.30), seg=14)
        bmesh.ops.bisect_plane(bm, geom=bm.verts[:]+bm.edges[:]+bm.faces[:],
            plane_co=(0,0,1.295), plane_no=(0,0,-1), clear_inner=True)
        parts.append(pieza(bm,'gc',hexlin('#22303A'),rough=.85,lit=1,
                           solidify=.012,subsurf=1))
        parts.append(pieza(caja((.115,.1,.012),(0,-.135,1.30),
                           rot=(math.radians(12),0,0)),'vis',hexlin('#22303A'),
                           rough=.85,lit=1,bevel=.006,subsurf=1))
        parts.append(pieza(esfera(.112,(0,.01,1.25), seg=12, esc=(1,1,.85)),'pelo',
                           hexlin('#201812'),rough=1,lit=1))
    elif tipo == 'panuelo':
        parts.append(pieza(esfera(.115,(0,.005,1.30), seg=14, esc=(1,1,.9)),'pan',
                           hexlin('#D8A03A'),rough=.9,lit=1,subsurf=1))
        parts.append(pieza(esfera(.035,(.07,.06,1.37), seg=8),'nudo',
                           hexlin('#D8A03A'),rough=.9,lit=1))
        for sx in (-.108,.108):
            parts.append(pieza(cilindro(.022,.022,.008,(sx,0,1.21), seg=10,
                               rot=(0,math.radians(90),0)),'arete',
                               hexlin('#D9B23A'),rough=.3,lit=1))
    else:
        parts.append(pieza(esfera(.15,(0,.005,1.33), seg=14),'afro', lambda co: tuple(
            c*(.85+.15*noise.noise(Vector((co.x*30,co.y*30,co.z*30))))
            for c in hexlin('#171008')), rough=1, lit=1, subsurf=1))
    unir(parts, P+'cabeza', lit=1, meta=dict(pv(0,-.005,1.13), pa=P+'torso'))

    # brazos: hombro > codo. Las manos descansan en el borde de la mesa.
    manga = patron if tipo == 'sombrero' else piel   # la guayabera es manga larga
    for l, lado in ((-1,'L'),(1,'R')):
        parts = []
        parts.append(pieza(esfera(.055,(l*.185,0,1.0), seg=10),'hom',patron,
                           rough=.85,lit=1,subsurf=1))
        parts.append(pieza(tubo((l*.185,0,1.0),(l*.215,-.055,.76),.05,.042),'bru',
                           patron,rough=.85,lit=1,subsurf=1))
        unir(parts, P+'bru'+lado, lit=1, meta=dict(pv(l*.185,0,1.0), pa=P+'torso'))
        parts = []
        parts.append(pieza(tubo((l*.215,-.06,.755),(l*.17,-.37,.77),.04,.033),'ant',
                           manga,rough=.8,lit=1,subsurf=1))
        parts.append(pieza(esfera(.038,(l*.165,-.40,.775), seg=10, esc=(1,1.25,.7)),'ma',
                           piel,rough=.7,lit=1,subsurf=1))
        unir(parts, P+'ant'+lado, lit=1,
             meta=dict(pv(l*.215,-.058,.758), pa=P+'bru'+lado))

# los patrones de la ropa
def ropa_guayabera(co):
    base = hexlin('#E6DCC2')
    if abs(co.x) < .012 or abs(abs(co.x)-.07) < .007:
        return mezcla(base, hexlin('#B8AC8E'), .6)
    return base
def ropa_joven(co):
    base = hexlin('#4A86C8')
    if .78 < co.z < .86: return hexlin('#D8D2C4')
    return base
def ropa_dona(co):
    base = hexlin('#B84A62')
    n = noise.noise(Vector((co.x*48, co.y*48, co.z*48)))
    if n > .52: return mezcla(base, hexlin('#E8935A'), .85)
    if n < -.55: return mezcla(base, hexlin('#EDE6D6'), .8)
    return base
def ropa_afro(co):
    return hexlin('#D4622A')

# ---------------- construir ----------------
limpiar()
calle()
colmado()
mesa()
ANG = [0, math.pi/2, math.pi, -math.pi/2]
D = 1.15/2 + .28
SILLA_COL = [CREMA, hexlin('#3F7E72'), hexlin('#D9D3C5'), hexlin('#2F5566')]
for s in range(4):
    silla('Silla%d' % s, SILLA_COL[s], math.sin(ANG[s])*D, -math.cos(ANG[s])*D,
          ANG[s] + math.pi)
PIELES = [hexlin('#8A5A3B'), hexlin('#A8764E'), hexlin('#6E4529'), hexlin('#5C3A26')]
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
        ob.location = (math.sin(ANG[s])*D, -math.cos(ANG[s])*D, PISO)
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
    ob.location = (0,0,0); ob.rotation_euler = (0,0,0)
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
        M = ob.matrix_world
        for i, v in enumerate(me.vertices):
            wp = M @ v.co
            n = (M.to_3x3() @ v.normal).normalized()
            pos += struct.pack('<3f', wp.x, wp.z, -wp.y)
            nor += struct.pack('<3f', n.x, n.z, -n.y)
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
        if mt.get('pv'): o['pv'] = [round(x,4) for x in mt['pv']]
        if mt.get('pa') is not None and 'pa' in mt: o['pa'] = mt['pa']
        objetos.append(o)
        blobs.append((bytes(pos), bytes(nor), bytes(col), bytes(idx)))
    meta = json.dumps({'objects': objetos}).encode()
    with open(path,'wb') as f:
        f.write(struct.pack('<4sI', b'MESA', len(meta)))
        f.write(meta); f.write(b'\0'*((-f.tell()) % 4))
        for (p,n,c,i) in blobs:
            f.write(p); f.write(n); f.write(c); f.write(b'\0'*((-len(c)) % 4)); f.write(i)
    print('exportado', path, sum(o['v'] for o in objetos), 'vertices,',
          sum(o['t'] for o in objetos), 'triangulos')

exportar(OUT)
