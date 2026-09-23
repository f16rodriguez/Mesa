# Cara de frente en ortográfica (pose de enlace), para ubicar ojos y boca en
# coordenadas del modelo: con ortográfica cada píxel es un punto (x,y) exacto.
#   blender -b --python scripts/manos/rostro.py -- modelo.glb salida.png
# Escribe además salida.json con el centro y la escala del encuadre.
import bpy, sys, math, json, mathutils
args=sys.argv[sys.argv.index('--')+1:]; glb, out = args[0], args[1]
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=glb)
sc=bpy.context.scene; sc.render.engine='CYCLES'; sc.cycles.device='CPU'; sc.cycles.samples=16; sc.cycles.use_denoising=False
w=bpy.data.worlds.new('w'); sc.world=w; w.use_nodes=True; w.node_tree.nodes['Background'].inputs[1].default_value=2.2
arm=[o for o in bpy.data.objects if o.type=='ARMATURE'][0]; arm.data.pose_position='REST'
bpy.context.view_layer.update()
cab=arm.matrix_world@arm.data.bones['Head'].head_local
R=600; ESC=.26
sc.render.resolution_x=R; sc.render.resolution_y=R
cam=bpy.data.objects.new('cam',bpy.data.cameras.new('cam')); sc.collection.objects.link(cam); sc.camera=cam
cam.data.type='ORTHO'; cam.data.ortho_scale=ESC
centro=mathutils.Vector((0,cab.y,cab.z+.07))   # Blender: -Y es el frente del glTF (+Z)
cam.location=(centro.x,centro.y-2,centro.z); cam.rotation_euler=(math.pi/2,0,0)
sc.render.filepath=out; bpy.ops.render.render(write_still=True)
# En coordenadas glTF: x = x_blender, y_gltf = z_blender
json.dump({'cx':centro.x,'cy':centro.z,'escala':ESC,'res':R},open(out.replace('.png','.json'),'w'))
