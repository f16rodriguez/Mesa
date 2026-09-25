"""
La textura de un modelo nuevo a JPEG de 1536 (como los demás): el PNG de 2048 que trae Meshy pesa
7 MB y en la tele ocupa lo mismo en memoria que uno de 1536 bien comprimido se ve igual.

  python scripts/manos/comprimir.py entrada.glb salida.glb
"""
import sys, io
from PIL import Image
from cerrar import leer, escribir

def comprimir(src, dst, lado=1536):
    j, bin_ = leer(src)
    imagenes = {im['bufferView']: im for im in j.get('images', []) if 'bufferView' in im}
    partes = []; off = 0
    for k, v in enumerate(j['bufferViews']):
        o = v.get('byteOffset', 0); dato = bytes(bin_[o:o+v['byteLength']])
        if k in imagenes:
            im = Image.open(io.BytesIO(dato)).convert('RGB'); im.thumbnail((lado, lado), Image.LANCZOS)
            b = io.BytesIO(); im.save(b, format='JPEG', quality=88, optimize=True); dato = b.getvalue()
            imagenes[k]['mimeType'] = 'image/jpeg'
        v['byteOffset'] = off; v['byteLength'] = len(dato); v['buffer'] = 0
        dato += b'\0' * ((-len(dato)) % 4); partes.append(dato); off += len(dato)
    bin_ = bytearray(b''.join(partes)); j['buffers'][0]['byteLength'] = len(bin_)
    escribir(dst, j, bin_)

if __name__ == '__main__':
    comprimir(sys.argv[1], sys.argv[2]); print(sys.argv[2])
