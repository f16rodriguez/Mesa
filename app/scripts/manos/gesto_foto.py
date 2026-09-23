# Cara de frente con un gesto aplicado (clave de forma a un peso), para verificar.
#   blender -b --python scripts/manos/gesto_foto.py -- modelo.glb salida.png parpadeo=1 sonrisa=0
import bpy, sys, math, mathutils
args=sys.argv[sys.argv.index('--')+1:]; glb, out = args[0], args[1]; pesos=dict(a.split('=') for a in args[2:])
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=glb)
sc=bpy.context.scene; sc.render.engine='CYCLES'; sc.cycles.device='CPU'; sc.cycles.samples=16; sc.cycles.use_denoising=False
w=bpy.data.worlds.new('w'); sc.world=w; w.use_nodes=True; w.node_tree.nodes['Background'].inputs[1].default_value=2.2
arm=[o for o in bpy.data.objects if o.type=='ARMATURE'][0]; arm.data.pose_position='REST'
for o in bpy.data.objects:
    if o.type=='MESH' and o.data.shape_keys:
        for kb in o.data.shape_keys.key_blocks:
            if kb.name in pesos: kb.slider_min=-1; kb.value=float(pesos[kb.name])
bpy.context.view_layer.update()
cab=arm.matrix_world@arm.data.bones['Head'].head_local
sc.render.resolution_x=400; sc.render.resolution_y=400
cam=bpy.data.objects.new('cam',bpy.data.cameras.new('cam')); sc.collection.objects.link(cam); sc.camera=cam
cam.data.type='ORTHO'; cam.data.ortho_scale=.2
cam.location=(0,cab.y-2,cab.z+.05); cam.rotation_euler=(math.pi/2,0,0)
sc.render.filepath=out; bpy.ops.render.render(write_still=True)
