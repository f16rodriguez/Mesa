# Persona sentada (clip 'Seated', mismo cuadro que usa el juego) vista de lado
# y de espalda, sin nada del juego encima: para ver si un defecto es del modelo.
#   blender -b --python scripts/manos/sentado.py -- modelo.glb salida.png
import bpy, sys, math
args=sys.argv[sys.argv.index('--')+1:]; glb, out = args[0], args[1]
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=glb)
sc=bpy.context.scene; sc.render.engine='CYCLES'; sc.cycles.device='CPU'; sc.cycles.samples=12; sc.cycles.use_denoising=False
w=bpy.data.worlds.new('w'); sc.world=w; w.use_nodes=True; w.node_tree.nodes['Background'].inputs[1].default_value=1.6
arm=[o for o in bpy.data.objects if o.type=='ARMATURE'][0]
act=next((a for a in bpy.data.actions if a.name.startswith('Seated')), None) or bpy.data.actions[0]
arm.animation_data.action=act; sc.frame_set(int(10.25*sc.render.fps)); bpy.context.view_layer.update()
sc.render.resolution_x=420; sc.render.resolution_y=520
cam=bpy.data.objects.new('cam',bpy.data.cameras.new('cam')); sc.collection.objects.link(cam); sc.camera=cam
cam.data.type='ORTHO'; cam.data.ortho_scale=float(args[2]) if len(args)>2 else 1.5
cad=arm.matrix_world@arm.pose.bones['Hips'].head; alto=float(args[3]) if len(args)>3 else .2
for nombre,(d,rot) in {'lado':((3,0,0),(math.pi/2,0,math.pi/2)),'espalda':((0,3,0),(math.pi/2,0,math.pi))}.items():
    cam.location=(cad.x+d[0],cad.y+d[1],cad.z+alto); cam.rotation_euler=rot
    sc.render.filepath=out.replace('.png',f'_{nombre}.png'); bpy.ops.render.render(write_still=True)
