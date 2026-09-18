# Mesa — el set 3D se construye aquí, en Blender sin cabeza.
#
#   blender -b -P arte/blender/set.py
#
# Modela el colmado, la mesa, las sillas plásticas y los cuatro personajes,
# hornea oclusión ambiental (Cycles) en colores de vértice, y exporta
# public/set.bin — un binario propio que table.html carga sin dependencias.
# Ejes: Blender Z arriba → three.js Y arriba (x, z, -y). El frente de un
# personaje es -Y aquí, que cae en +Z allá.

import bpy, bmesh, struct, json, math, random
from mathutils import Vector, noise

random.seed(7)
OUT = '/home/user/Mesa/public/set.bin'

# ---------------- utilidades ----------------
def hexlin(h):
    r = int(h[1:3],16)/255; g = int(h[3:5],16)/255; b = int(h[5:7],16)/255
    return (r**2.2, g**2.2, b**2.2)

def limpiar():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()
    for me in list(bpy.data.meshes): bpy.data.meshes.remove(me)

def obj_de_bm(bm, nombre, color, rough=.9, metal=0.0):
    """color: tupla lineal o función(co)->tupla."""
    me = bpy.data.meshes.new(nombre)
    bm.to_mesh(me); bm.free()
    ob = bpy.data.objects.new(nombre, me)
    bpy.context.collection.objects.link(ob)
    at = me.color_attributes.new(name='Base', type='FLOAT_COLOR', domain='POINT')
    for i, v in enumerate(me.vertices):
        c = color(v.co) if callable(color) else color
        at.data[i].color = (c[0], c[1], c[2], 1.0)
    ob['rough'] = rough; ob['metal'] = metal
    mat = bpy.data.materials.get('m') or bpy.data.materials.new('m')
    ob.data.materials.append(mat)
    return ob

def caja(dim, pos, rot=(0,0,0)):
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1)
    bmesh.ops.scale(bm, verts=bm.verts, vec=dim)
    if any(rot):
        import mathutils
        m = mathutils.Euler(rot).to_matrix().to_4x4()
        bmesh.ops.transform(bm, verts=bm.verts, matrix=m)
    bmesh.ops.translate(bm, verts=bm.verts, vec=pos)
    return bm

def cilindro(r1, r2, h, pos, seg=12, rot=(0,0,0)):
    bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=True, segments=seg,
                          radius1=r1, radius2=r2, depth=h)
    if any(rot):
        import mathutils
        m = mathutils.Euler(rot).to_matrix().to_4x4()
        bmesh.ops.transform(bm, verts=bm.verts, matrix=m)
    bmesh.ops.translate(bm, verts=bm.verts, vec=pos)
    return bm

def esfera(r, pos, seg=16, esc=(1,1,1)):
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=seg, v_segments=max(6,seg//2), radius=r)
    bmesh.ops.scale(bm, verts=bm.verts, vec=esc)
    bmesh.ops.translate(bm, verts=bm.verts, vec=pos)
    return bm

def rejilla(nx, ny, sx, sy, pos):
    bm = bmesh.new()
    bmesh.ops.create_grid(bm, x_segments=nx, y_segments=ny, size=1)
    bmesh.ops.scale(bm, verts=bm.verts, vec=(sx/2, sy/2, 1))
    bmesh.ops.translate(bm, verts=bm.verts, vec=pos)
    return bm

def unir(obs, nombre):
    bpy.ops.object.select_all(action='DESELECT')
    for o in obs: o.select_set(True)
    bpy.context.view_layer.objects.active = obs[0]
    bpy.ops.object.join()
    obs[0].name = nombre
    return obs[0]

def modificar(ob, solidify=None, bevel=None, subsurf=None):
    bpy.context.view_layer.objects.active = ob
    if solidify is not None:
        m = ob.modifiers.new('so','SOLIDIFY'); m.thickness = solidify
        bpy.ops.object.modifier_apply(modifier='so')
    if bevel is not None:
        m = ob.modifiers.new('be','BEVEL'); m.width = bevel; m.segments = 2
        m.limit_method = 'ANGLE'; m.angle_limit = math.radians(40)
        bpy.ops.object.modifier_apply(modifier='be')
    if subsurf:
        m = ob.modifiers.new('su','SUBSURF'); m.levels = subsurf; m.render_levels = subsurf
        bpy.ops.object.modifier_apply(modifier='su')

def suavizar(ob):
    for p in ob.data.polygons: p.use_smooth = True

# ---------------- paleta ----------------
TURQ  = hexlin('#8FD0C2'); TURQV = hexlin('#578F82'); YESO = hexlin('#C9C0A8')
CORAL = hexlin('#C9765C'); CORALV = hexlin('#9A5440')
ZINC  = hexlin('#8E8674'); OXIDO = hexlin('#7A4526')
MAD   = hexlin('#5C3B22'); MADOSC = hexlin('#3E2614')
VERDE = hexlin('#3E7A38'); FIELTRO = hexlin('#0F4A3C')
CREMA = hexlin('#DCD6C8')

def mezcla(a, b, t):
    return (a[0]*(1-t)+b[0]*t, a[1]*(1-t)+b[1]*t, a[2]*(1-t)+b[2]*t)

def pared_color(base, viejo):
    def f(co):
        n = noise.noise(Vector((co.x*0.7, co.y*0.7, co.z*0.7)))
        n2 = noise.noise(Vector((co.x*2.6+9, co.z*2.6, co.y*2.6)))
        c = mezcla(base, viejo, max(0, min(1, (0.05-n)*1.6)) * .6)
        if n2 > 0.46: c = mezcla(c, YESO, .5)     # parches de repello
        s = 1 - max(0, -co.z*0.15)                # zócalo más sucio
        return (c[0]*s, c[1]*s, c[2]*s)
    return f

todos = []          # (objeto, es_personaje)

def registrar(ob, per=False):
    suavizar(ob); todos.append((ob, per)); return ob

# ---------------- el colmado ----------------
def colmado():
    CX, CY = -1.3, 7.6            # three (x, z=-y): el colmado vive en y+7.6
    obs = []
    # pared con la boca recortada (tres piezas), subdividida para el color
    for (w, h, px, pz) in [(2.9,4.44,-3.75,1.18),(2.9,4.44,3.75,1.18),(4.6,1.1,0,2.85)]:
        bm = caja((w,.3,h),(CX+px, CY, pz))
        bmesh.ops.subdivide_edges(bm, edges=bm.edges, cuts=6, use_grid_fill=True)
        ob = obj_de_bm(bm, 'pared', pared_color(TURQ,TURQV), rough=.95)
        modificar(ob, bevel=.015); obs.append(ob)
    # interior: fondo, tablillas y botellas de verdad
    bm = caja((4.6,.08,2.5),(CX, CY+1.15, 1.1))
    obs.append(obj_de_bm(bm,'fondoInt', hexlin('#4A2A14'), rough=.95))
    for sz in (0.35, 1.0, 1.65):
        bm = caja((4.3,.85,.06),(CX, CY+0.7, sz))
        obs.append(obj_de_bm(bm,'tablilla', hexlin('#8A5C30'), rough=.85))
    PALETA = ['#C8552F','#D9A238','#4F8A3D','#B03A2E','#3E6FA0','#D8C79A']
    for sz in (0.38, 1.03, 1.68):
        px = -1.9
        while px < 2.0:
            c = hexlin(random.choice(PALETA))
            alto = .2 + random.random()*.1
            b1 = cilindro(.055,.05, alto, (CX+px, CY+0.7, sz+alto/2), seg=8)
            b2 = cilindro(.022,.018,.07,(CX+px, CY+0.7, sz+alto+.03), seg=8)
            o1 = obj_de_bm(b1,'bot', c, rough=.3)
            o2 = obj_de_bm(b2,'botn', c, rough=.3)
            obs += [o1,o2]
            px += .16 + random.random()*.1
    # fundas colgando del techo interior
    for i in range(9):
        px = -1.9+i*.47
        c = hexlin(random.choice(PALETA))
        bm = caja((.2,.05,.26),(CX+px, CY+0.55, 2.05))
        obs.append(obj_de_bm(bm,'funda', c, rough=.7))
    # mostrador coral con tope claro
    bm = caja((4.9,.55,.92),(CX, CY-0.18, -.58))
    bmesh.ops.subdivide_edges(bm, edges=bm.edges, cuts=4, use_grid_fill=True)
    ob = obj_de_bm(bm,'mostrador', pared_color(CORAL,CORALV), rough=.9)
    modificar(ob, bevel=.02); obs.append(ob)
    bm = caja((5.1,.65,.07),(CX, CY-0.18, -.10))
    ob = obj_de_bm(bm,'tope', hexlin('#C9BFA6'), rough=.6)
    modificar(ob, bevel=.015); obs.append(ob)
    # zinc corrugado de verdad, inclinado
    bm = rejilla(72, 10, 11.6, 3.1, (0,0,0))
    for v in bm.verts:
        v.co.z += .045*math.sin(v.co.x*2*math.pi/0.36)
    import mathutils
    m = mathutils.Euler((math.radians(-5.2),0,0)).to_matrix().to_4x4()
    bmesh.ops.transform(bm, verts=bm.verts, matrix=m)
    bmesh.ops.translate(bm, verts=bm.verts, vec=(CX, CY-0.75, 3.62))
    def zc(co):
        n = noise.noise(Vector((co.x*2.2, 0, 0)))
        c = ZINC if n > -0.25 else OXIDO
        k = .8 + .2*math.sin(co.x*2*math.pi/0.36)
        return (c[0]*k, c[1]*k, c[2]*k)
    ob = obj_de_bm(bm,'zinc', zc, rough=.5, metal=.35)
    modificar(ob, solidify=.02); obs.append(ob)
    # puntales, casa coral vecina, puerta, calada
    for px in (-5.1, 5.1):
        bm = cilindro(.055,.075, 4.5, (CX+px, CY-1.9, 1.2), seg=10)
        ob = obj_de_bm(bm,'puntal', MAD, rough=.8); obs.append(ob)
    bm = caja((.35,5.4,4.9),(CX-5.45, CY-1.2, 1.4))
    bmesh.ops.subdivide_edges(bm, edges=bm.edges, cuts=6, use_grid_fill=True)
    ob = obj_de_bm(bm,'casaCoral', pared_color(CORAL,CORALV), rough=.95)
    modificar(ob, bevel=.02); obs.append(ob)
    bm = caja((1.1,.14,2.7),(CX-4.3, CY-0.2, .27))
    ob = obj_de_bm(bm,'puerta', MADOSC, rough=.85)
    modificar(ob, bevel=.02); obs.append(ob)
    bm = caja((1.25,.34,1.25),(CX+4.1, CY-0.02, 2.0))
    def calada(co):
        lx = co.x-(CX+4.1); lz = co.z-2.0
        for ox in (-.3,.3):
            for oz in (-.3,.3):
                if (lx-ox)**2+(lz-oz)**2 < .22**2: return hexlin('#241B2E')
        return hexlin('#CFC8B4')
    bm2 = caja((1.25,.34,1.25),(CX+4.1, CY-0.02, 2.0))
    bmesh.ops.subdivide_edges(bm2, edges=bm2.edges, cuts=16, use_grid_fill=True)
    bm.free()
    obs.append(obj_de_bm(bm2,'calada', calada, rough=.9))
    # cajas verdes con tablitas (rejilla de verdad)
    for (px,py,n) in [(2.6,.9,3),(3.3,1.15,2),(-2.9,1.05,2)]:
        for i in range(n):
            base = Vector((CX+px+(random.random()-.5)*.06, CY-py, -1.04+.26+i*.54))
            parts = []
            for k in range(3):
                bm = caja((.6,.6,.09),(base.x, base.y, base.z-.18+k*.18))
                parts.append(obj_de_bm(bm,'cs', VERDE, rough=.8))
            for sx,sy in [(-.27,-.27),(.27,-.27),(-.27,.27),(.27,.27)]:
                bm = caja((.06,.06,.5),(base.x+sx, base.y+sy, base.z))
                parts.append(obj_de_bm(bm,'cp', hexlin('#2E5C2A'), rough=.8))
            ob = unir(parts,'caja'); modificar(ob, bevel=.008); obs.append(ob)
    # neverita, guineos, matas, balanza
    bm = caja((.85,.65,1.1),(CX-1.95, CY-0.5, -.49))
    ob = obj_de_bm(bm,'nevera', hexlin('#22262A'), rough=.35, metal=.3)
    modificar(ob, bevel=.03); obs.append(ob)
    for i in range(10):
        px = CX-1.65 + (i%3)*.12-.12; pz = 2.0-(i//3)*.16
        bm = esfera(.075,(px, CY-0.05, pz), seg=8, esc=(.6,.6,1.6))
        obs.append(obj_de_bm(bm,'guineo', hexlin('#C9B03E'), rough=.75))
    for (px,py) in [(-4.6,-1.6),(4.7,-1.5),(3.55,-1.0)]:
        bm = cilindro(.24,.3,.5,(CX+px, CY+py, -.79), seg=12)
        ob = obj_de_bm(bm,'pote', hexlin('#D5CDBB'), rough=.9)
        modificar(ob, bevel=.02); obs.append(ob)
        for k in range(5):
            bm = esfera(.26+random.random()*.14,
                        (CX+px+(random.random()-.5)*.5, CY+py+(random.random()-.5)*.4,
                         -.3+random.random()*.55), seg=10, esc=(1,.8,1))
            ob = obj_de_bm(bm,'mata', hexlin('#1E4A34'), rough=1.0)
            modificar(ob, subsurf=1); obs.append(ob)
    bm = cilindro(.2,.2,.04,(CX+1.7, CY-0.2, 2.32), seg=14)
    obs.append(obj_de_bm(bm,'plato', hexlin('#8A8478'), rough=.4, metal=.6))
    for ob in obs: registrar(ob)

# ---------------- la mesa ----------------
def mesa():
    MESA = 3.8
    bm = caja((MESA,MESA,.16),(0,0,-.08))
    ob = obj_de_bm(bm,'panio', lambda co: tuple(
        c*(.9+.1*noise.noise(Vector((co.x*4,co.y*4,0)))) for c in FIELTRO), rough=.98)
    modificar(ob, bevel=.03); registrar(ob)
    r = MESA/2+.16
    marcos = []
    for i,(px,py) in enumerate([(0,r),(0,-r),(r,0),(-r,0)]):
        dim = (MESA+.64,.32,.3) if i<2 else (.32,MESA+.64,.3)
        bm = caja(dim,(px,py,-.08))
        marcos.append(obj_de_bm(bm,'marco', MAD, rough=.6))
    ob = unir(marcos,'marcoMesa'); modificar(ob, bevel=.03); registrar(ob)
    # patas torneadas: perfil de radios apilados
    perfil = [(.10,0),(.12,.08),(.08,.2),(.11,.34),(.07,.5),(.10,.66),(.06,.8),(.09,.94),(.11,1.0)]
    for sx,sy in [(1,1),(1,-1),(-1,1),(-1,-1)]:
        parts = []
        base = Vector((sx*(MESA/2-.34), sy*(MESA/2-.34), -1.04))
        for k in range(len(perfil)-1):
            r1,z1 = perfil[k]; r2,z2 = perfil[k+1]
            bm = cilindro(r1, r2, (z2-z1)*0.92, (base.x, base.y, base.z+(z1+z2)/2*0.92), seg=12)
            parts.append(obj_de_bm(bm,'pt', MADOSC, rough=.6))
        ob = unir(parts,'pata'); modificar(ob, subsurf=1); registrar(ob)

# ---------------- la silla plástica (monobloc) ----------------
def silla(nombre, color, px, py, rotz):
    parts = []
    # asiento curvo con caída atrás
    bm = rejilla(10,10,.62,.56,(0,0,0))
    for v in bm.verts:
        v.co.z = .62 - .05*math.exp(-((v.co.x*3)**2+(v.co.y*3)**2)) + .02*(v.co.y/.28)
    ob = obj_de_bm(bm,'as', color, rough=.55)
    modificar(ob, solidify=.025, bevel=.01, subsurf=1); parts.append(ob)
    # respaldo: cinco tablillas curvadas + marco + riel
    for i in range(5):
        x0 = -.22+i*.11
        bm = rejilla(2,8,.075,.5,(0,0,0))
        for v in bm.verts:
            t = (v.co.y+.25)/.5
            v.co.x += x0*(1+.12*t)
            v.co.z = .64 + (v.co.y+.25)  # sube
            v.co.y = -.27 - .16*t - .04*math.sin(t*math.pi)
        ob = obj_de_bm(bm,'tb', color, rough=.55)
        modificar(ob, solidify=.02, subsurf=1); parts.append(ob)
    bm = caja((.6,.06,.08),(0,-.46,1.16))
    ob = obj_de_bm(bm,'riel', color, rough=.55)
    modificar(ob, bevel=.02, subsurf=1); parts.append(ob)
    # patas abiertas y brazos
    for sx,sy in [(-.26,-.22),(.26,-.22),(-.28,.24),(.28,.24)]:
        bm = caja((.05,.05,.62),(0,0,0))
        for v in bm.verts:
            k = (v.co.z+.31)/.62
            v.co.x += sx*(1.15-.3*k); v.co.y += sy*(1.15-.3*k); v.co.z += .31
        ob = obj_de_bm(bm,'pt', color, rough=.55)
        modificar(ob, bevel=.012); parts.append(ob)
    for sx in (-.31,.31):
        bm = caja((.05,.5,.04),(sx,-.02,.88))
        ob = obj_de_bm(bm,'br', color, rough=.55)
        modificar(ob, bevel=.015, subsurf=1); parts.append(ob)
        bm = caja((.05,.04,.24),(sx,.2,.75))
        parts.append(obj_de_bm(bm,'brs', color, rough=.55))
    ob = unir(parts, nombre)
    ob.rotation_euler = (0,0,rotz)
    ob.location = (px,py,-1.04)
    bpy.context.view_layer.objects.active = ob
    bpy.ops.object.transform_apply(location=True, rotation=True)
    registrar(ob)

# ---------------- la gente ----------------
def brazo_de(l, ropa):
    parts = []
    bm = cilindro(.09,.075,.34,(l*.3,0,0), seg=10, rot=(0,math.radians(l*30),0))
    bmesh.ops.translate(bm, verts=bm.verts, vec=(0,.02,1.18))
    parts.append(('up',bm,ropa))
    bm = cilindro(.075,.065,.34,(0,0,0), seg=10, rot=(math.radians(-78),0,0))
    bmesh.ops.translate(bm, verts=bm.verts, vec=(l*.4,-.19,1.02))
    parts.append(('fo',bm,ropa))
    return parts

def personaje(idx, piel, ropa, tipo):
    parts = []
    # torso suave
    bm = caja((.62,.44,.62),(0,0,.98))
    ob = obj_de_bm(bm,'to', ropa, rough=.85)
    modificar(ob, bevel=.1, subsurf=2); parts.append(ob)
    # cabeza + cuello
    bm = esfera(.235,(0,0,1.55), seg=20)
    ob = obj_de_bm(bm,'ca', piel, rough=.7)
    modificar(ob, subsurf=1); parts.append(ob)
    bm = cilindro(.09,.1,.12,(0,0,1.32), seg=10)
    parts.append(obj_de_bm(bm,'cu', piel, rough=.7))
    # ojos sencillos, mirando a la mesa (-Y)
    for sx in (-.085,.085):
        bm = esfera(.028,(sx,-.21,1.58), seg=8, esc=(1,.5,1.3))
        parts.append(obj_de_bm(bm,'ojo', hexlin('#1A120C'), rough=.4))
    # brazos y manos hacia la mesa
    for l in (-1,1):
        for (_,bm,c) in brazo_de(l, ropa):
            ob = obj_de_bm(bm,'br', c, rough=.85)
            modificar(ob, subsurf=1); parts.append(ob)
        bm = esfera(.075,(l*.4,-.38,.98), seg=10)
        ob = obj_de_bm(bm,'ma', piel, rough=.7)
        modificar(ob, subsurf=1); parts.append(ob)
    # muslos bajo la mesa
    for l in (-1,1):
        bm = cilindro(.11,.1,.4,(0,0,0), seg=10, rot=(math.radians(-85),0,0))
        bmesh.ops.translate(bm, verts=bm.verts, vec=(l*.17,-.22,.58))
        parts.append(obj_de_bm(bm,'mu', hexlin('#2E2A33'), rough=.9))
    # lo que corona a cada quien
    if tipo == 'sombrero':
        bm = cilindro(.42,.4,.035,(0,0,1.72), seg=20)
        for v in bm.verts:
            d = math.hypot(v.co.x, v.co.y)
            if d > .3: v.co.z += (d-.3)*.25
        ob = obj_de_bm(bm,'ala', hexlin('#C9A96A'), rough=.9)
        modificar(ob, subsurf=1); parts.append(ob)
        bm = cilindro(.17,.15,.17,(0,0,1.8), seg=14)
        ob = obj_de_bm(bm,'copa', hexlin('#C9A96A'), rough=.9)
        modificar(ob, bevel=.03, subsurf=1); parts.append(ob)
    elif tipo == 'gorra':
        bm = esfera(.25,(0,0,1.6), seg=14)
        bmesh.ops.bisect_plane(bm, geom=bm.verts[:]+bm.edges[:]+bm.faces[:],
                               plane_co=(0,0,1.6), plane_no=(0,0,-1), clear_inner=True)
        ob = obj_de_bm(bm,'gc', hexlin('#22303A'), rough=.85)
        modificar(ob, solidify=.02, subsurf=1); parts.append(ob)
        bm = caja((.28,.2,.02),(0,-.3,1.63), rot=(math.radians(8),0,0))
        ob = obj_de_bm(bm,'vis', hexlin('#22303A'), rough=.85)
        modificar(ob, bevel=.01, subsurf=1); parts.append(ob)
        bm = esfera(.245,(0,.02,1.52), seg=12, esc=(1,1,.8))
        parts.append(obj_de_bm(bm,'pelo', hexlin('#201812'), rough=1))
    elif tipo == 'panuelo':
        bm = esfera(.25,(0,.01,1.62), seg=14, esc=(1,1,.85))
        ob = obj_de_bm(bm,'pan', hexlin('#D8A03A'), rough=.9)
        modificar(ob, subsurf=1); parts.append(ob)
        bm = esfera(.07,(.15,.12,1.76), seg=8)
        parts.append(obj_de_bm(bm,'nudo', hexlin('#D8A03A'), rough=.9))
        for sx in (-.24,.24):
            bm = cilindro(.05,.05,.02,(sx,0,1.42), seg=12, rot=(0,math.radians(90),0))
            parts.append(obj_de_bm(bm,'arete', hexlin('#D9B23A'), rough=.3))
        bm = caja((.42,.05,.42),(0,-.26,.92))
        ob = obj_de_bm(bm,'del', hexlin('#EDE6D6'), rough=.9)
        modificar(ob, bevel=.02, subsurf=1); parts.append(ob)
    else:  # afro
        bm = esfera(.28,(0,.01,1.62), seg=14)
        ob = obj_de_bm(bm,'afro', lambda co: tuple(
            c*(.85+.15*noise.noise(Vector((co.x*14,co.y*14,co.z*14)))) for c in hexlin('#171008')),
            rough=1)
        modificar(ob, subsurf=1); parts.append(ob)
    ob = unir(parts, 'Personaje%d' % idx)
    registrar(ob, per=True)

# ---------------- construir ----------------
limpiar()
colmado()
mesa()
ANG = [0, math.pi/2, math.pi, -math.pi/2]     # three: seat s en (sin a, cos a)
SILLA_COL = [CREMA, hexlin('#3F7E72'), hexlin('#D9D3C5'), hexlin('#2F5566')]
for s in range(4):
    d = 3.8/2 + .8
    tx, tz = math.sin(ANG[s])*d, math.cos(ANG[s])*d    # three x,z
    bx, by = tx, -tz                                   # blender x,y
    silla('Silla%d' % s, SILLA_COL[s], bx, by, ANG[s] + math.pi)
PIELES = [hexlin('#8A5A3B'), hexlin('#A8764E'), hexlin('#6E4529'), hexlin('#5C3A26')]
ROPAS  = [hexlin('#E6DCC2'), hexlin('#4A86C8'), hexlin('#B84A62'), hexlin('#D4622A')]
TIPOS  = ['sombrero','gorra','panuelo','afro']
for s in range(4):
    personaje(s, PIELES[s], ROPAS[s], TIPOS[s])

# ---------------- hornear oclusión ----------------
sc = bpy.context.scene
sc.render.engine = 'CYCLES'
sc.cycles.samples = 12
sc.cycles.device = 'CPU'
sc.render.bake.target = 'VERTEX_COLORS'
for ob, per in todos:
    ao = ob.data.color_attributes.new(name='AO', type='FLOAT_COLOR', domain='POINT')
    ob.data.color_attributes.active_color = ao
    bpy.ops.object.select_all(action='DESELECT')
    ob.select_set(True); bpy.context.view_layer.objects.active = ob
    try:
        bpy.ops.object.bake(type='AO')
    except Exception as e:
        print('bake falló en', ob.name, e)

# ---------------- exportar ----------------
def exportar(path):
    objetos = []
    blobs = []
    for ob, per in todos:
        me = ob.data
        me.calc_loop_triangles()
        nv = len(me.vertices); nt = len(me.loop_triangles)
        base = me.color_attributes.get('Base')
        ao   = me.color_attributes.get('AO')
        pos = bytearray(); nor = bytearray(); col = bytearray(); idx = bytearray()
        M = ob.matrix_world
        for i, v in enumerate(me.vertices):
            w = M @ v.co
            n = (M.to_3x3() @ v.normal).normalized()
            pos += struct.pack('<3f', w.x, w.z, -w.y)          # three: x, z, -y
            nor += struct.pack('<3f', n.x, n.z, -n.y)
            b = base.data[i].color if base else (1,1,1,1)
            a = ao.data[i].color[0] if ao else 1.0
            a = .35 + .65*a                                     # AO suave, no negro
            col += struct.pack('<3B',
                min(255,int((b[0]*a)**(1/2.2)*255)),
                min(255,int((b[1]*a)**(1/2.2)*255)),
                min(255,int((b[2]*a)**(1/2.2)*255)))
        for t in me.loop_triangles:
            idx += struct.pack('<3I', *t.vertices)
        objetos.append({'n': ob.name, 'v': nv, 't': nt,
                        'r': round(ob.get('rough', .9), 3),
                        'm': round(ob.get('metal', 0), 3)})
        blobs.append((bytes(pos), bytes(nor), bytes(col), bytes(idx)))
    meta = json.dumps({'objects': objetos}).encode()
    with open(path, 'wb') as f:
        f.write(struct.pack('<4sI', b'MESA', len(meta)))
        f.write(meta)
        pad = (-f.tell()) % 4; f.write(b'\0'*pad)
        for (p, n, c, i) in blobs:
            f.write(p); f.write(n)
            f.write(c); f.write(b'\0'*((-len(c)) % 4))
            f.write(i)
    print('exportado', path, sum(o['v'] for o in objetos), 'vertices,',
          sum(o['t'] for o in objetos), 'triangulos')

exportar(OUT)
