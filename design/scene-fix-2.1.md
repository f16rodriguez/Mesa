# Alpha 2.1 — scene correction

## User-reported issues
Incorrect proportions, synchronized matching emotes, unreadable pips, and players passing through the table.

## Root cause
The shared seated clip is 11.37 seconds long and includes a strong forward lean around 8.5 seconds. The measured head-to-hip forward displacement approaches 0.4 m. Offsetting starting frames did not remove the unsafe pose. A previous single-frame visual check therefore missed the later clipping.

## Changes
- Table width reduced from 1.82 m to 1.40 m; surface lowered from approximately .875 m to .782 m.
- Models retain their anatomical scale rather than being rescaled according to an arbitrary moving-frame bounding box.
- Feet grounded and pelvis anchored at a measured upright pose. Chairs widened to .56 m; seat height revised to .51 m.
- Full-body clip playback replaced with independent, bounded head/upper-spine motion. Poses restore their calibrated transforms every frame, preventing accumulated rotations.
- Small action acknowledgments apply only to the acting player. Unsafe reaching and drink pickup are disabled; drink props stay on the table. Hand poses remain somewhat stiff and need future animation work.
- Played dominoes use physically raised, unlit black pip geometry. Pip diameter is approximately 19% of tile width. Removed near-coplanar textured faces and lighting-dependent pip contrast.
- Chain layouts use connected horizontal/vertical turns instead of disconnected parallel rows. Layout bounds and non-overlap tested for all lengths 1–28.
- Table and overhead cameras moved closer; labels follow head anchors. Private rack faces remain hidden from all shared cameras.
- Updated client cache version; title screen reads ALPHA 02.1.

## Verification
48 automated tests passed. Pose regression swept 361 times per character over three minutes: 1,444 total samples. Feet stayed at ground level; sampled upper-body skinned vertices did not enter the tabletop collision volume. Rendered visual samples at 0, 8.5, 37 and 95 seconds and the overhead board view showed upright seated characters and high-contrast pips. These isolated scene samples used a fixed public-board fixture to compare poses and layout, not a live match.

A separate actual browser playthrough passed QR entry, tiles-only phones, full hand scoring, next deal, reconnect, real spectator presence/chat/mute, profile persistence and lessons, with no JavaScript errors. Rendering performance on real hardware remains unverified; the test machine uses slow software WebGL.

No new character/image/video/audio generation jobs were submitted for this correction. Chat/tool analysis and development usage are separate from media generation.
