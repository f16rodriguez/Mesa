# Pasa clips de Meshy (caminar, esperar, saludar…) al esqueleto de uno de nuestros personajes y
# los guarda juntos en un GLB de solo animación: huesos con nuestros nombres, sin malla. El juego
# lo carga aparte y reproduce cada clip sobre el esqueleto del personaje, por nombre de hueso.
#
# Por qué no se copia la animación tal cual: el esqueleto que trae cada clip es otro (Meshy lo arma
# de nuevo cada vez) y los nuestros además tienen los brazos alargados (alargar.py). Se copia la
# ROTACIÓN EN EL MUNDO de cada hueso relativa a su reposo, de padres a hijos, y el movimiento de la
# cadera escalado a la altura de cadera de cada quien. El reposo que se exporta queda idéntico al
# del personaje (comprobado nodo por nodo): el clip cae exacto sobre su esqueleto.
#
#   blender -b --python scripts/manos/animar.py -- personaje.glb salida.glb Nombre=clip.glb[:sitio] ...
#
# ":sitio" quita el avance de la cadera (el juego mueve a la persona por su camino). Para los clips
# de caminar se mide además el PASO: cuánto retrocede el pie apoyado en un ciclo, que es lo que la
# persona tiene que avanzar para que los pies no patinen. Todo va a salida.json.
import bpy, sys, json, mathutils
args = sys.argv[sys.argv.index('--') + 1:]
tgt, out, pedidos = args[0], args[1], args[2:]

bpy.ops.wm.read_factory_settings(use_empty=True)
sc = bpy.context.scene
sc.render.fps = 30          # los clips de Meshy vienen a 30 cuadros: uno a uno

def importar(path):
    antes = set(bpy.data.objects)
    bpy.ops.import_scene.gltf(filepath=path, bone_heuristic='BLENDER')
    nuevos = [o for o in bpy.data.objects if o not in antes]
    arm = [o for o in nuevos if o.type == 'ARMATURE'][0]
    for o in nuevos:
        if o.type == 'MESH': bpy.data.objects.remove(o)
    return arm

T = importar(tgt)
for a in list(bpy.data.actions): bpy.data.actions.remove(a)
T.animation_data_create()
for pb in T.pose.bones: pb.rotation_mode = 'QUATERNION'

orden = []
def recorre(b):
    orden.append(b.name)
    for c in b.children: recorre(c)
for b in T.data.bones:
    if b.parent is None: recorre(b)
Tw = T.matrix_world.copy(); Twi = Tw.inverted(); Twq = Tw.to_quaternion()
restT = {n: Tw @ T.data.bones[n].matrix_local for n in orden}
# Los pies: el tobillo y la punta, en el mundo, para medir el paso.
pies = [n for n in ('LeftFoot', 'LeftToeBase', 'RightFoot', 'RightToeBase') if n in T.pose.bones]

resumen = {}
hechas = []
for pedido in pedidos:
    nombre, resto = pedido.split('=', 1)
    sitio = resto.endswith(':sitio'); resto = resto[:-6] if sitio else resto
    # clip.glb[@Acción][#segundos]: otra acción del archivo, o un solo instante (una pose).
    instante = None
    if '#' in resto: resto, t = resto.rsplit('#', 1); instante = float(t)
    accion = None
    if '@' in resto: resto, accion = resto.split('@', 1)
    antes_acc = set(bpy.data.actions)
    S = importar(resto)
    if accion:
        S.animation_data.action = next(a for a in bpy.data.actions if a not in antes_acc and a.name.startswith(accion))
    clip = S.animation_data.action
    f0, f1 = int(round(clip.frame_range[0])), int(round(clip.frame_range[1]))
    if instante is not None: f0 = int(round(instante * sc.render.fps)); f1 = f0 + 1
    nombres = [n for n in orden if n in S.pose.bones]
    Sw = S.matrix_world.copy()
    restS = {n: Sw @ S.data.bones[n].matrix_local for n in nombres}
    k = restT['Hips'].translation.z / restS['Hips'].translation.z
    cad = []
    for f in range(f0, f1 + 1):
        sc.frame_set(f)
        cad.append(((Sw @ S.pose.bones['Hips'].matrix).translation - restS['Hips'].translation) * k)
    n = len(cad); avance = cad[-1] - cad[0]

    T.animation_data.action = nueva = bpy.data.actions.new(nombre); nueva.use_fake_user = True
    for pb in T.pose.bones: pb.rotation_quaternion = (1, 0, 0, 0); pb.location = (0, 0, 0)
    huella = []
    for j, f in enumerate(range(f0, f1 + 1)):
        sc.frame_set(f)
        for nb in nombres:
            pS = Sw @ S.pose.bones[nb].matrix
            q = (pS.to_quaternion() @ restS[nb].to_quaternion().inverted()) @ restT[nb].to_quaternion()
            pb = T.pose.bones[nb]
            # Se arma la matriz en el espacio de la armadura, con escala 1: la armadura trae
            # escala 0,01 (huesos en cm) y armarla en el mundo le metía 100× a cada hueso.
            if nb == 'Hips':
                d = cad[j].copy()
                if sitio:
                    t = j / max(1, n - 1); d.x -= avance.x * t; d.y -= avance.y * t
                pos = Twi @ (restT[nb].translation + d)
            else:
                pos = pb.matrix.translation.copy()
            pb.matrix = mathutils.Matrix.LocRotScale(pos, Twq.inverted() @ q, mathutils.Vector((1, 1, 1)))
            bpy.context.view_layer.update()
            pb.keyframe_insert('rotation_quaternion', frame=f)
            if nb == 'Hips': pb.keyframe_insert('location', frame=f)
        huella.append({p: (Tw @ T.pose.bones[p].matrix).translation.copy() for p in pies})
    # El paso: se suma lo que retrocede (hacia +Y en Blender: el frente del glTF es -Y) el punto
    # más bajo de los pies mientras sigue siendo el mismo pie.
    paso = 0.; antes = None
    for a, b in zip(huella, huella[1:] + huella[:1]):
        bajo = min(pies, key=lambda p: a[p].z); lado = bajo[:4]
        if antes == lado: paso += max(0., b[bajo].y - a[bajo].y)
        antes = lado
    dur = (f1 - f0 + 1) / sc.render.fps
    # 'paso' y 'cadera' en las mismas unidades (las del esqueleto): el juego usa paso/cadera × su cadera en metros.
    resumen[nombre] = {'duracion': round(dur, 4), 'paso': round(paso, 4), 'cadera': round(restT['Hips'].translation.z, 4), 'avance': round(avance.length, 4), 'cuadros': f1 - f0 + 1}
    bpy.data.objects.remove(S)
    hechas.append(nueva)
    print('OK', nombre, resumen[nombre])

for a in list(bpy.data.actions):
    if a not in hechas: bpy.data.actions.remove(a)
T.animation_data.action = hechas[0]
bpy.ops.object.select_all(action='DESELECT')
T.select_set(True); bpy.context.view_layer.objects.active = T
bpy.ops.export_scene.gltf(filepath=out, export_format='GLB', use_selection=True, export_animations=True,
                          export_animation_mode='ACTIONS', export_skins=False, export_morph=False,
                          export_force_sampling=True, export_frame_step=1, export_def_bones=False,
                          export_optimize_animation_size=True)
json.dump(resumen, open(out.replace('.glb', '.json'), 'w'), indent=1)
