"""
Split an extra voice take into individual bot lines.

Companion to split-bot-voices.py, which cut the original five-line packs. That
one hard-codes the five labels in game order; this one takes whatever labels the
take actually holds, so a pack of three `think` variants and two `play` variants
lands as think-2..4 and play-2..3 beside the originals.

The ffmpeg settings are copied from split-bot-voices.py on purpose: same silence
threshold, same loudnorm target, same 24 kHz mono 64 kbps. A variant that does
not match the original's loudness is worse than no variant — it jumps.

Usage: python3 scripts/add-bot-lines.py <bot> <url> <label> [<label> ...]
"""
from pathlib import Path
import urllib.request, subprocess, re, sys

bot, url, labels = sys.argv[1], sys.argv[2], sys.argv[3:]
raw = Path('qa/voice-packs'); raw.mkdir(parents=True, exist_ok=True)
file = raw / f'{bot}-{labels[0]}.mp3'
if not file.exists():
    urllib.request.urlretrieve(url, file)

duration = float(subprocess.check_output(
    ['ffprobe', '-v', 'error', '-show_entries', 'format=duration',
     '-of', 'default=nw=1:nk=1', str(file)]))
result = subprocess.run(
    ['ffmpeg', '-hide_banner', '-i', str(file),
     '-af', 'silencedetect=noise=-38dB:d=0.7', '-f', 'null', '-'],
    capture_output=True, text=True)
starts = [float(x) for x in re.findall(r'silence_start: ([0-9.]+)', result.stderr)]
ends = [float(x) for x in re.findall(r'silence_end: ([0-9.]+)', result.stderr)]

segments, begin = [], 0
for start, end in zip(starts, ends):
    if start - begin > .2:
        segments.append([max(0, begin - .07), min(duration, start + .12)])
    begin = end
if duration - begin > .25:
    segments.append([max(0, begin - .07), duration])

# A lead-in that is quiet but not quiet ENOUGH for the -38 dB gate comes back
# as a segment of its own, so the count overshoots by one and nothing lands.
# Measuring each candidate tells silence from speech properly: a real phrase
# sits far above -50 dB mean, a misread lead-in sits far below.
def mean_db(start, end):
    out = subprocess.run(['ffmpeg', '-hide_banner', '-ss', str(start), '-i', str(file),
                          '-t', str(end - start), '-af', 'volumedetect', '-f', 'null', '-'],
                         capture_output=True, text=True).stderr
    hit = re.search(r'mean_volume: (-?[0-9.]+) dB', out)
    return float(hit.group(1)) if hit else -99.0

if len(segments) > len(labels):
    scored = [(mean_db(a, b), a, b) for a, b in segments]
    print('  trimming; segment levels:', [round(d, 1) for d, _, _ in scored])
    segments = [[a, b] for d, a, b in scored if d > -50.0]

print(bot, 'duration', round(duration, 2), 'segments', len(segments), 'labels', len(labels))
if len(segments) != len(labels):
    print('  MISMATCH — not writing anything. Segments found:',
          [[round(a, 2), round(b, 2)] for a, b in segments])
    sys.exit(1)

out = Path('public/audio/bots') / bot
out.mkdir(parents=True, exist_ok=True)
for label, (start, end) in zip(labels, segments):
    subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y',
                    '-ss', str(start), '-i', str(file), '-t', str(end - start),
                    '-af', 'loudnorm=I=-19:TP=-4:LRA=5', '-ar', '24000',
                    '-ac', '1', '-b:a', '64k', str(out / (label + '.mp3'))], check=True)
    print('  wrote', out / (label + '.mp3'))
