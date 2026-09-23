# Cuerpo entero en Cycles (sin GPU): pose T de enlace y pose sentada del clip,
# para comparar proporciones y ver si el estirado rompe hombro o codo.
#   blender -b --python scripts/manos/cuerpo.py -- modelo.glb salida.png
import bpy, sys, math, mathutils
args=sys.argv[sys.argv.index('--')+1:]; glb, out = args[0], args[1]
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=glb)
sc=bpy.context.scene; sc.render.engine='CYCLES'; sc.cycles.device='CPU'; sc.cycles.samples=12; sc.cycles.use_denoising=False
w=bpy.data.worlds.new('w'); sc.world=w; w.use_nodes=True; w.node_tree.nodes['Background'].inputs[1].default_value=1.3
sol=bpy.data.objects.new('sol',bpy.data.lights.new('sol','SUN')); sol.data.energy=3; sol.rotation_euler=(0.7,0.1,0.5); sc.collection.objects.link(sol)
sc.render.resolution_x=560; sc.render.resolution_y=420; sc.render.film_transparent=False
arm=[o for o in bpy.data.objects if o.type=='ARMATURE'][0]
cam=bpy.data.objects.new('cam',bpy.data.cameras.new('cam')); sc.collection.objects.link(cam); sc.camera=cam
cam.data.type='ORTHO'; cam.data.ortho_scale=2.0
for modo in ('REST','POSE'):
    arm.data.pose_position=modo
    if modo=='POSE':
        act=next((a for a in bpy.data.actions if a.name.startswith('Seated')), None) or bpy.data.actions[0]
        arm.animation_data.action=act; sc.frame_set(int(10.25*sc.render.fps))
    bpy.context.view_layer.update()
    # glTF +Z (frente) es -Y en Blender: la cámara mira desde -Y hacia +Y
    cam.location=(0,-4,0.9 if modo=='REST' else 0.75); cam.rotation_euler=(math.pi/2,0,0)
    sc.render.filepath=out.replace('.png',f'_{modo.lower()}.png')
    bpy.ops.render.render(write_still=True)
