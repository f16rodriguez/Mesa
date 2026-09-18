# Mesa — el set 3D se construye aquí, en Blender sin cabeza.
#
#   blender -b -P arte/blender/set.py
#
# Modela el colmado, la calle, la mesa, las sillas y los cuatro personajes.
# La luz NO se finge: Cycles calcula iluminación global de verdad (rebotes,
# sangrado de color, pozos de luz bajo los bombillos) y se hornea en colores
# de vértice sobre mallas densas. Lo estático se pinta con esa luz horneada
# (material sin luces en el juego); lo que convive con las fichas — mesa,
# sillas, gente — hornea solo oclusión y lo ilumina el juego en vivo.
# Exporta public/set.bin. Ejes: three (x,y,z) = blender (x, z, -y).

import bpy, bmesh, struct, json, math, random
from mathutils import Vector, Euler, noise

random.seed(7)
OUT = '/home/user/Mesa/public/set.bin'

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

todos = []     # (ob, lit)  lit=1: mesa/sillas/gente (AO, luz en vivo). 0: horneado total
PINTAR = []    # (ob, colorfn) — se pinta DESPUÉS de aplicar modificadores (denso)

def pieza(bm, nombre, color, rough=.9, metal=0.0, lit=0,
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
    todos.append((ob, lit))
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

def esfera(r, pos, seg=16, esc=(1,1,1)):
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=seg, v_segments=max(6,seg//2), radius=r)
    bmesh.ops.scale(bm, verts=bm.verts, vec=esc)
    bmesh.ops.translate(bm, verts=bm.verts, vec=pos); return bm

def rejilla(nx, ny, sx, sy, pos):
    bm = bmesh.new(); bmesh.ops.create_grid(bm, x_segments=nx, y_segments=ny, size=1)
    bmesh.ops.scale(bm, verts=bm.verts, vec=(sx/2, sy/2, 1))
    bmesh.ops.translate(bm, verts=bm.verts, vec=pos); return bm

def unir(obs, nombre):
    bpy.ops.object.select_all(action='DESELECT')
    for o in obs: o.select_set(True)
    bpy.context.view_layer.objects.active = obs[0]
    bpy.ops.object.join(); obs[0].name = nombre
    global todos
    todos = [(o,l) for (o,l) in todos if vivo(o)]
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
        n  = noise.noise(Vector((co.x*0.7, co.y*0.7, co.z*0.7)))
        n2 = noise.noise(Vector((co.x*2.6+9, co.z*2.6, co.y*2.6)))
        c = mezcla(base, viejo, max(0, min(1, (0.05-n)*1.6))*.6)
        if n2 > 0.46: c = mezcla(c, YESO, .5)
        s = 1 - max(0, -co.z*0.15)
        return (c[0]*s, c[1]*s, c[2]*s)
    return f

CX, CY = -1.3, 7.6      # el colmado en three z -7.6

# ---------------- la calle ----------------
def calle():
    def suelo_color(co):
        n = noise.noise(Vector((co.x*1.7, co.y*1.7, 0)))
        c = mezcla(hexlin('#41382F'), hexlin('#2C2622'), .5+.5*n)
        # la acera del colmado y la placa bajo la mesa, más claras
        if (abs(co.x-CX) < 6.8 and co.y > 3.6) or math.hypot(co.x, co.y) < 5.4:
            c = mezcla(c, hexlin('#8A8172'), .45)
        if noise.noise(Vector((co.x*.35+4, co.y*.35, 1))) > .42:
            c = mezcla(c, hexlin('#241E1A'), .25)    # manchas grandes
        return c
    bm = rejilla(140, 140, 46, 46, (0,0,-1.04))
    pieza(bm, 'sueloCalle', suelo_color, rough=.45, metal=.06)


# ---------------- el colmado ----------------
def colmado():
    PALETA = ['#C8552F','#D9A238','#4F8A3D','#B03A2E','#3E6FA0','#D8C79A']
    for (w,h,px,pz) in [(2.9,4.44,-3.75,1.18),(2.9,4.44,3.75,1.18),(4.6,1.1,0,2.85)]:
        bm = caja((w,.3,h),(CX+px, CY, pz))
        pieza(bm, 'pared', pared_color(TURQ,TURQV), rough=.95, cuts=22, bevel=.015)
    bm = caja((4.6,.08,2.5),(CX, CY+1.15, 1.1))
    pieza(bm, 'fondoInt', hexlin('#4A2A14'), rough=.95, cuts=8)
    for sz in (0.35, 1.0, 1.65):
        bm = caja((4.3,.85,.06),(CX, CY+0.7, sz))
        pieza(bm, 'tablilla', hexlin('#8A5C30'), rough=.85)
    for sz in (0.38, 1.03, 1.68):
        px = -1.9
        while px < 2.0:
            c = hexlin(random.choice(PALETA)); alto = .2+random.random()*.1
            pieza(cilindro(.055,.05,alto,(CX+px, CY+0.7, sz+alto/2), seg=8),
                  'bot', c, rough=.3)
            pieza(cilindro(.022,.018,.07,(CX+px, CY+0.7, sz+alto+.03), seg=8),
                  'botn', c, rough=.3)
            px += .16+random.random()*.1
    for i in range(9):
        pieza(caja((.2,.05,.26),(CX-1.9+i*.47, CY+0.55, 2.05)),
              'funda', hexlin(random.choice(PALETA)), rough=.7)
    bm = caja((4.9,.55,.92),(CX, CY-0.18, -.58))
    pieza(bm, 'mostrador', pared_color(CORAL,CORALV), rough=.9, cuts=10, bevel=.02)
    bm = caja((5.1,.65,.07),(CX, CY-0.18, -.10))
    pieza(bm, 'tope', hexlin('#C9BFA6'), rough=.6, bevel=.015)
    # zinc corrugado
    bm = rejilla(72, 10, 11.6, 3.1, (0,0,0))
    for v in bm.verts: v.co.z += .045*math.sin(v.co.x*2*math.pi/0.36)
    bmesh.ops.transform(bm, verts=bm.verts,
        matrix=Euler((math.radians(-5.2),0,0)).to_matrix().to_4x4())
    bmesh.ops.translate(bm, verts=bm.verts, vec=(CX, CY-0.75, 3.62))
    def zc(co):
        n = noise.noise(Vector(((co.x-CX)*2.2, 0, 0)))
        c = ZINC if n > -0.25 else OXIDO
        k = .8+.2*math.sin((co.x-CX)*2*math.pi/0.36)
        return (c[0]*k, c[1]*k, c[2]*k)
    pieza(bm, 'zinc', zc, rough=.5, metal=.35, solidify=.02)
    for px in (-5.1, 5.1):
        pieza(cilindro(.055,.075,4.5,(CX+px, CY-1.9, 1.2), seg=10), 'puntal', MAD, rough=.8)
    bm = caja((.35,5.4,4.9),(CX-5.45, CY-1.2, 1.4))
    pieza(bm, 'casaCoral', pared_color(CORAL,CORALV), rough=.95, cuts=20, bevel=.02)
    pieza(caja((1.1,.14,2.7),(CX-4.3, CY-0.2, .27)), 'puerta', MADOSC, rough=.85, bevel=.02)
    def calada(co):
        lx, lz = co.x-(CX+4.1), co.z-2.0
        for ox in (-.3,.3):
            for oz in (-.3,.3):
                if (lx-ox)**2+(lz-oz)**2 < .22**2: return hexlin('#241B2E')
        return hexlin('#CFC8B4')
    pieza(caja((1.25,.34,1.25),(CX+4.1, CY-0.02, 2.0)), 'calada', calada, rough=.9, cuts=16)
    # cajas verdes con tablitas
    for (px,py,n) in [(2.6,.9,3),(3.3,1.15,2),(-2.9,1.05,2)]:
        for i in range(n):
            b = Vector((CX+px+(random.random()-.5)*.06, CY-py, -1.04+.26+i*.54))
            parts = []
            for k in range(3):
                parts.append(pieza(caja((.6,.6,.09),(b.x,b.y,b.z-.18+k*.18)),'cs',VERDE,rough=.8))
            for sx,sy in [(-.27,-.27),(.27,-.27),(-.27,.27),(.27,.27)]:
                parts.append(pieza(caja((.06,.06,.5),(b.x+sx,b.y+sy,b.z)),'cp',
                                   hexlin('#2E5C2A'), rough=.8))
            unir(parts,'caja')
    # neverita, guineos, matas, balanza, escoba
    pieza(caja((.85,.65,1.1),(CX-1.95, CY-0.5, -.49)), 'nevera',
          hexlin('#22262A'), rough=.35, metal=.3, bevel=.03)
    for i in range(10):
        pieza(esfera(.075,(CX-1.65+(i%3)*.12-.12, CY-0.3, 2.0-(i//3)*.16),
                     seg=8, esc=(.6,.6,1.6)), 'guineo', hexlin('#C9B03E'), rough=.75)
    for (px,py) in [(-4.6,-1.6),(4.7,-1.5),(3.55,-1.0)]:
        pieza(cilindro(.24,.3,.5,(CX+px, CY+py, -.79), seg=12), 'pote',
              hexlin('#D5CDBB'), rough=.9, bevel=.02)
        for k in range(5):
            pieza(esfera(.26+random.random()*.14,
                         (CX+px+(random.random()-.5)*.5, CY+py+(random.random()-.5)*.4,
                          -.3+random.random()*.55), seg=10, esc=(1,.8,1)),
                  'mata', hexlin('#1E4A34'), rough=1.0, subsurf=1)
    pieza(cilindro(.2,.2,.04,(CX+1.7, CY-0.2, 2.32), seg=14), 'plato',
          hexlin('#8A8478'), rough=.4, metal=.6)
    pieza(cilindro(.022,.022,1.5,(CX+4.85, CY-0.35, -.35), seg=6,
                   rot=(math.radians(12),0,0)), 'palo_escoba', MAD, rough=.8)
    pieza(caja((.16,.12,.3),(CX+4.82, CY-0.18, -.95)), 'escoba',
          hexlin('#C9A96A'), rough=1)
    # cajas sueltas al frente izquierdo, para que la escena tenga capas
    for i in range(2):
        parts = []
        b = Vector((-4.5, -2.1, -1.04+.26+i*.54))
        for k in range(3):
            parts.append(pieza(caja((.6,.6,.09),(b.x,b.y,b.z-.18+k*.18)),'cs',VERDE,rough=.8))
        for sx,sy in [(-.27,-.27),(.27,-.27),(-.27,.27),(.27,.27)]:
            parts.append(pieza(caja((.06,.06,.5),(b.x+sx,b.y+sy,b.z)),'cp',
                               hexlin('#2E5C2A'), rough=.8))
        unir(parts,'cajaSuelta')

# ---------------- la mesa (luz en vivo) ----------------
def mesa():
    M = 3.8
    def fieltro(co):
        n = noise.noise(Vector((co.x*4, co.y*4, 0)))
        return tuple(c*(.9+.1*n) for c in FIELTRO)
    pieza(caja((M,M,.16),(0,0,-.08)), 'panio', fieltro, rough=.98, lit=1, cuts=12, bevel=.03)
    r = M/2+.16
    marcos = []
    for i,(px,py) in enumerate([(0,r),(0,-r),(r,0),(-r,0)]):
        dim = (M+.64,.32,.3) if i<2 else (.32,M+.64,.3)
        marcos.append(pieza(caja(dim,(px,py,-.08)), 'marco', MAD, rough=.6, lit=1, bevel=.03))
    unir(marcos,'marcoMesa')
    perfil = [(.10,0),(.12,.08),(.08,.2),(.11,.34),(.07,.5),(.10,.66),(.06,.8),(.09,.94),(.11,1.0)]
    for sx,sy in [(1,1),(1,-1),(-1,1),(-1,-1)]:
        parts = []
        base = Vector((sx*(M/2-.34), sy*(M/2-.34), -1.04))
        for k in range(len(perfil)-1):
            r1,z1 = perfil[k]; r2,z2 = perfil[k+1]
            parts.append(pieza(cilindro(r1,r2,(z2-z1)*.92,
                (base.x, base.y, base.z+(z1+z2)/2*.92), seg=12), 'pt', MADOSC,
                rough=.6, lit=1))
        unir(parts,'pata')
        todos[-1] = (todos[-1][0], 1) if todos[-1][0].name.startswith('pata') else todos[-1]

# ---------------- la silla plástica ----------------
def silla(nombre, color, px, py, rotz):
    parts = []
    bm = rejilla(10,10,.62,.56,(0,0,0))
    for v in bm.verts:
        v.co.z = .62 - .05*math.exp(-((v.co.x*3)**2+(v.co.y*3)**2)) + .02*(v.co.y/.28)
    parts.append(pieza(bm,'as',color,rough=.55,lit=1,solidify=.025,bevel=.01,subsurf=1))
    for i in range(5):
        x0 = -.22+i*.11
        bm = rejilla(2,8,.075,.5,(0,0,0))
        for v in bm.verts:
            t = (v.co.y+.25)/.5
            v.co.x += x0*(1+.12*t)
            v.co.z = .64 + (v.co.y+.25)
            v.co.y = -.27 - .16*t - .04*math.sin(t*math.pi)
        parts.append(pieza(bm,'tb',color,rough=.55,lit=1,solidify=.02,subsurf=1))
    parts.append(pieza(caja((.6,.06,.08),(0,-.46,1.16)),'riel',color,rough=.55,lit=1,
                       bevel=.02,subsurf=1))
    for sx,sy in [(-.26,-.22),(.26,-.22),(-.28,.24),(.28,.24)]:
        bm = caja((.05,.05,.62),(0,0,0))
        for v in bm.verts:
            k = (v.co.z+.31)/.62
            v.co.x += sx*(1.15-.3*k); v.co.y += sy*(1.15-.3*k); v.co.z += .31
        parts.append(pieza(bm,'pt',color,rough=.55,lit=1,bevel=.012))
    for sx in (-.31,.31):
        parts.append(pieza(caja((.05,.5,.04),(sx,-.02,.88)),'br',color,rough=.55,lit=1,
                           bevel=.015,subsurf=1))
        parts.append(pieza(caja((.05,.04,.24),(sx,.2,.75)),'brs',color,rough=.55,lit=1))
    ob = unir(parts, nombre)
    ob.rotation_euler = (0,0,rotz); ob.location = (px,py,-1.04)
    bpy.context.view_layer.objects.active = ob
    bpy.ops.object.transform_apply(location=True, rotation=True)

# ---------------- la gente ----------------
def personaje(idx, piel, ropa, tipo, patron):
    parts = []
    # torso con cuello: más alto, hombros más finos
    bm = caja((.54,.42,.66),(0,0,1.02))
    parts.append(pieza(bm,'to',patron,rough=.85,lit=1,bevel=.09,subsurf=2))
    parts.append(pieza(cilindro(.085,.1,.16,(0,-.02,1.4), seg=10),'cu',piel,rough=.7,lit=1))
    bm = esfera(.26,(0,-.01,1.66), seg=20)
    parts.append(pieza(bm,'ca',piel,rough=.7,lit=1,subsurf=1))
    for sx in (-.09,.09):
        parts.append(pieza(esfera(.03,(sx,-.235,1.69), seg=8, esc=(1,.5,1.3)),
                           'ojo', hexlin('#1A120C'), rough=.4, lit=1))
    # brazos caídos al lado, antebrazos sobre los brazos de la silla
    for l in (-1,1):
        parts.append(pieza(cilindro(.085,.07,.36,(0,0,0), seg=10,
            rot=(math.radians(-12),math.radians(l*14),0)) if False else
            cilindro(.085,.07,.36,(l*.3,.02,1.12), seg=10,
                     rot=(math.radians(-14),0,math.radians(l*18))),
            'bru', ropa, rough=.85, lit=1, subsurf=1))
        parts.append(pieza(cilindro(.07,.06,.34,(l*.335,-.14,.92), seg=10,
                     rot=(math.radians(-80),0,0)), 'brf', ropa, rough=.85, lit=1, subsurf=1))
        parts.append(pieza(esfera(.075,(l*.335,-.32,.9), seg=10),'ma',piel,rough=.7,lit=1,
                           subsurf=1))
        parts.append(pieza(cilindro(.11,.1,.42,(l*.16,-.2,.6), seg=10,
                     rot=(math.radians(-82),0,0)), 'mu', hexlin('#2E2A33'),
                     rough=.9, lit=1))
        parts.append(pieza(cilindro(.09,.08,.5,(l*.17,-.38,.28), seg=10),
                     'pierna', hexlin('#2E2A33'), rough=.9, lit=1))
        parts.append(pieza(caja((.13,.26,.09),(l*.17,-.46,.05)),'pie',
                     hexlin('#26201A'), rough=.8, lit=1, bevel=.02, subsurf=1))
    if tipo == 'sombrero':
        bm = cilindro(.44,.42,.035,(0,0,1.84), seg=20)
        for v in bm.verts:
            d = math.hypot(v.co.x, v.co.y)
            if d > .3: v.co.z += (d-.3)*.3
        parts.append(pieza(bm,'ala',hexlin('#C9A96A'),rough=.9,lit=1,subsurf=1))
        parts.append(pieza(cilindro(.17,.15,.17,(0,0,1.93), seg=14),'copa',
                     hexlin('#C9A96A'), rough=.9, lit=1, bevel=.03, subsurf=1))
    elif tipo == 'gorra':
        bm = esfera(.27,(0,.01,1.72), seg=14)
        bmesh.ops.bisect_plane(bm, geom=bm.verts[:]+bm.edges[:]+bm.faces[:],
            plane_co=(0,0,1.7), plane_no=(0,0,-1), clear_inner=True)
        parts.append(pieza(bm,'gc',hexlin('#22303A'),rough=.85,lit=1,solidify=.02,subsurf=1))
        parts.append(pieza(caja((.26,.22,.02),(0,-.3,1.72), rot=(math.radians(14),0,0)),
                     'vis', hexlin('#22303A'), rough=.85, lit=1, bevel=.01, subsurf=1))
        parts.append(pieza(esfera(.262,(0,.02,1.62), seg=12, esc=(1,1,.8)),'pelo',
                     hexlin('#201812'), rough=1, lit=1))
    elif tipo == 'panuelo':
        parts.append(pieza(esfera(.27,(0,.01,1.73), seg=14, esc=(1,1,.85)),'pan',
                     hexlin('#D8A03A'), rough=.9, lit=1, subsurf=1))
        parts.append(pieza(esfera(.07,(.16,.13,1.87), seg=8),'nudo',
                     hexlin('#D8A03A'), rough=.9, lit=1))
        for sx in (-.26,.26):
            parts.append(pieza(cilindro(.05,.05,.02,(sx,0,1.53), seg=12,
                         rot=(0,math.radians(90),0)), 'arete',
                         hexlin('#D9B23A'), rough=.3, lit=1))
        parts.append(pieza(caja((.4,.05,.4),(0,-.24,.96)),'del',
                     hexlin('#EDE6D6'), rough=.9, lit=1, bevel=.02, subsurf=1))
    else:
        parts.append(pieza(esfera(.3,(0,.01,1.74), seg=14),'afro', lambda co: tuple(
            c*(.85+.15*noise.noise(Vector((co.x*14,co.y*14,co.z*14))))
            for c in hexlin('#171008')), rough=1, lit=1, subsurf=1))
    unir(parts, 'Personaje%d' % idx)

# los patrones de la ropa, pintados denso después del subsurf
def ropa_guayabera(co):
    base = hexlin('#E6DCC2')
    if abs(co.x) < .02 or abs(abs(co.x)-.12) < .012:
        return mezcla(base, hexlin('#B8AC8E'), .6)     # alforzas
    return base
def ropa_joven(co):
    base = hexlin('#4A86C8')
    if .95 < co.z < 1.08: return hexlin('#D8D2C4')     # franja del pecho
    return base
def ropa_dona(co):
    base = hexlin('#B84A62')
    n = noise.noise(Vector((co.x*26, co.y*26, co.z*26)))
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
SILLA_COL = [CREMA, hexlin('#3F7E72'), hexlin('#D9D3C5'), hexlin('#2F5566')]
for s in range(4):
    d = 3.8/2 + .8
    tx, tz = math.sin(ANG[s])*d, math.cos(ANG[s])*d
    silla('Silla%d' % s, SILLA_COL[s], tx, -tz, ANG[s] + math.pi)
PIELES = [hexlin('#8A5A3B'), hexlin('#A8764E'), hexlin('#6E4529'), hexlin('#5C3A26')]
TIPOS  = ['sombrero','gorra','panuelo','afro']
PATRONES = [ropa_guayabera, ropa_joven, ropa_dona, ropa_afro]
ROPAS  = [hexlin('#E6DCC2'), hexlin('#4A86C8'), hexlin('#B84A62'), hexlin('#D4622A')]
for s in range(4):
    personaje(s, PIELES[s], ROPAS[s], TIPOS[s], PATRONES[s])
# los personajes se exportan en el origen: colocarlos aquí solo para hornear,
# y devolverlos al origen antes de exportar
COLOC = []
for ob,_ in todos:
    if vivo(ob) and ob.name.startswith('Personaje'):
        s = int(ob.name[9:]); d = 3.8/2 + .68
        ob.location = (math.sin(ANG[s])*d, -math.cos(ANG[s])*d, -1.04)
        ob.rotation_euler = (0,0,ANG[s]+math.pi)
        COLOC.append(ob)
bpy.context.view_layer.update()

# ---------------- las luces de verdad ----------------
def punto(pos, w, color, radio=.08):
    li = bpy.data.lights.new('l','POINT'); li.energy = w; li.color = color
    li.shadow_soft_size = radio
    ob = bpy.data.objects.new('l', li); ob.location = pos
    bpy.context.collection.objects.link(ob); return ob

CAL = (1.0,.77,.55)
punto((0, 0, 3.1), 700, CAL, .35)                       # el bombillo de la mesa
punto((-0.15, 1.7, 2.9), 130, (1.0,.72,.48))          # guirnaldas cruzadas
punto((-1.15, 1.7, 2.9), 130, (1.0,.72,.48))
punto((0, -3.0, 3.3), 110, (1.0,.72,.48))             # la de alante
punto((-1.27, 5.3, 3.1), 150, (1.0,.72,.48))          # la del alero
punto((CX, CY-1.3, 2.7), 180, (1.0,.74,.5))           # el porche
li = bpy.data.lights.new('int','AREA'); li.energy = 260; li.color = (1.0,.69,.42)
li.size = 4.2; li.size_y = 2.2
ob = bpy.data.objects.new('int', li)
ob.location = (CX, CY+0.6, 1.3); ob.rotation_euler = (math.radians(-102),0,0)
bpy.context.collection.objects.link(ob)                # el mostrador que brilla
li = bpy.data.lights.new('sol','SUN'); li.energy = 0.3; li.color = (.91,.58,.35)
ob = bpy.data.objects.new('sol', li)
ob.rotation_euler = (math.radians(80), 0, math.radians(-105))
bpy.context.collection.objects.link(ob)                # el último sol, rasante
w = bpy.context.scene.world or bpy.data.worlds.new('w')
bpy.context.scene.world = w; w.use_nodes = True
bg = w.node_tree.nodes['Background']
bg.inputs[0].default_value = (.05,.04,.10,1); bg.inputs[1].default_value = 0.34

# ---------------- hornear ----------------
sc = bpy.context.scene
sc.render.engine = 'CYCLES'; sc.cycles.device = 'CPU'
sc.cycles.sample_clamp_indirect = 4
sc.render.bake.target = 'VERTEX_COLORS'
for ob, lit in todos:
    if not vivo(ob): continue
    at = ob.data.color_attributes.new(name='LUZ', type='FLOAT_COLOR', domain='POINT')
    ob.data.color_attributes.active_color = at
    bpy.ops.object.select_all(action='DESELECT')
    ob.select_set(True); bpy.context.view_layer.objects.active = ob
    ocultos = []
    if ob.name == 'sueloCalle':
        for o2, _ in todos:
            if vivo(o2) and (o2.name.startswith('Personaje') or o2.name.startswith('Silla')):
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

# los personajes vuelven al origen: el juego los coloca
for ob in COLOC:
    ob.location = (0,0,0); ob.rotation_euler = (0,0,0)
bpy.context.view_layer.update()

# ---------------- exportar ----------------
def tono(c):
    # Reinhard suave + sRGB: la luz horneada no se quema ni se apaga
    c = c*1.25 / (1.0 + c*0.45)
    return min(255, int((max(0.0,c))**(1/2.2)*255))

def exportar(path):
    objetos = []; blobs = []
    for ob, lit in todos:
        if not vivo(ob): continue
        me = ob.data; me.calc_loop_triangles()
        nv = len(me.vertices); nt = len(me.loop_triangles)
        base = me.color_attributes.get('Base')
        luz  = me.color_attributes.get('LUZ')
        pos = bytearray(); nor = bytearray(); col = bytearray(); idx = bytearray()
        M = ob.matrix_world
        for i, v in enumerate(me.vertices):
            wpos = M @ v.co
            n = (M.to_3x3() @ v.normal).normalized()
            pos += struct.pack('<3f', wpos.x, wpos.z, -wpos.y)
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
                col += struct.pack('<3B',
                    tono(b[0]*l[0]), tono(b[1]*l[1]), tono(b[2]*l[2]))
        for t in me.loop_triangles:
            idx += struct.pack('<3I', *t.vertices)
        objetos.append({'n': ob.name, 'v': nv, 't': nt, 'l': lit,
                        'r': round(ob.get('rough', .9),3),
                        'm': round(ob.get('metal', 0),3)})
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
