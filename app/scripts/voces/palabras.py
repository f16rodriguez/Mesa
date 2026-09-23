# pip install --no-deps vosk cffi tqdm requests  +  modelo vosk-model-small-es-0.42 (alphacephei.com/vosk/models)
# Uso: python3 palabras.py toma.wav 'Texto esperado.'  -> a:z para CORTE
# Dónde empieza y acaba de verdad la frase, según las palabras reconocidas.
# Empieza en la primera palabra oída; acaba en la ÚLTIMA aparición de la última
# palabra esperada (así se cae un "ya" que el modelo añadió al final). Si esa
# palabra no se reconoció, acaba donde acaba el sonido: mejor un pelín de aire
# que cortarle a alguien el "más".
import sys, json, wave, struct, unicodedata, re
from vosk import Model, KaldiRecognizer, SetLogLevel
SetLogLevel(-1); m = Model('vosk-model-small-es-0.42')
llano = lambda t: re.sub(r'[^a-z ]', '', unicodedata.normalize('NFD', t.lower()).encode('ascii','ignore').decode()).split()
wav, esperado = sys.argv[1], sys.argv[2]
w = wave.open(wav); ch, sr, n = w.getnchannels(), w.getframerate(), w.getnframes()
raw = struct.unpack('<%dh' % (n*ch), w.readframes(n))
mono = [sum(raw[i*ch:(i+1)*ch])//ch for i in range(n)]
amp = [max(abs(v) for v in raw[i*ch:(i+1)*ch]) for i in range(n)]
th = 32768 * 10**(-38/20)
fin_sonido = max(i for i in range(n) if amp[i] >= th) / sr
r = KaldiRecognizer(m, sr); r.SetWords(True); pal = []
pcm = struct.pack('<%dh' % n, *mono)
for k in range(0, len(pcm), 8000):
    if r.AcceptWaveform(pcm[k:k+8000]): pal += json.loads(r.Result()).get('result', [])
pal += json.loads(r.FinalResult()).get('result', [])
if not pal: print('NADA'); sys.exit(1)
ultima = llano(esperado)[-1]
fins = [p['end'] for p in pal if llano(p['word'])[:1] == [ultima]]
a = pal[0]['start'] - .07
z = (fins[-1] if fins else fin_sonido) + .12
print(f"{a:.3f}:{z:.3f}", ' '.join(p['word'] for p in pal), '(fin por palabra)' if fins else '(fin por sonido)')
