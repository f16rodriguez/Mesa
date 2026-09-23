# Close-up de la mano izquierda en Cycles (sin GPU) para comparar antes/después:
#   blender -b --python scripts/manos/foto.py -- modelo.glb salida.png
import bpy, sys, mathutils
args=sys.argv[sys.argv.index('--')+1:]; glb, out = args[0], args[1]
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=glb)
sc=bpy.context.scene; sc.render.engine='CYCLES'; sc.cycles.device='CPU'; sc.cycles.samples=24; sc.cycles.use_denoising=False
w=bpy.data.worlds.new('w'); sc.world=w; w.use_nodes=True; w.node_tree.nodes['Background'].inputs[1].default_value=1.2
sol=bpy.data.objects.new('sol',bpy.data.lights.new('sol','SUN')); sol.data.energy=3; sol.rotation_euler=(0.6,0.2,0.4); sc.collection.objects.link(sol)
sc.render.resolution_x=420; sc.render.resolution_y=420; sc.render.filepath=out
bpy.context.view_layer.update()
arm=[o for o in bpy.data.objects if o.type=='ARMATURE'][0]; pb=arm.pose.bones['LeftHand']
cab=arm.matrix_world@pb.head; col=arm.matrix_world@pb.tail; centro=cab+(col-cab).normalized()*0.07
cam=bpy.data.objects.new('cam',bpy.data.cameras.new('cam')); sc.collection.objects.link(cam); sc.camera=cam
cam.location=centro+mathutils.Vector((0.10,-0.22,0.06)); cam.data.lens=60
cam.rotation_euler=(centro-cam.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.render.render(write_still=True)
