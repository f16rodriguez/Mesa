# Verifica que cada clip DIGA su subtítulo. Uso: python3 oir.py lista.tsv  (ruta.wav<TAB>texto por línea)
# Transcribe cada trozo EXACTO que se codificó y lo compara con su subtítulo.
import sys, json, wave, unicodedata, re
from vosk import Model, KaldiRecognizer, SetLogLevel
SetLogLevel(-1)
m = Model('vosk-model-small-es-0.42')
llano = lambda t: re.sub(r'[^a-z ñ]', '', unicodedata.normalize('NFD', t.lower()).encode('ascii','ignore').decode().replace('n~','ñ')).split()
for linea in open(sys.argv[1], encoding='utf-8'):
    f, esperado = linea.rstrip('\n').split('\t')
    w = wave.open(f); r = KaldiRecognizer(m, w.getframerate())
    while (d := w.readframes(4000)): r.AcceptWaveform(d)
    oido = json.loads(r.FinalResult())['text']
    e, o = llano(esperado), llano(oido)
    comunes = sum(min(e.count(x), o.count(x)) for x in set(e))
    nota = comunes / max(len(e), 1)
    marca = 'OK ' if nota >= .6 and len(o) <= len(e) + 1 else '???'
    print(f"{marca} {f.split('/')[-1]:22} esperado «{esperado}»  oído «{oido}»")
