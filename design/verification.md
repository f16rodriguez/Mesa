# Mesa verification

## Automated rule and room checks
32 tests passed in the real Worker test runtime: 13 domino rules tests, 7 real WebSocket room/privacy tests, 12 scaffold metadata/state tests.

Rules checked: 28 unique tiles, seven per seat, deterministic immutable dealing, double-six opener, no voluntary pass, ownership/turn/end validation, house-rule locking, default and all-hands scoring, configurable capicua bonus, four-pass tranque, tied-tranque choices, blocker opens after tranque, arbitrary winner opener after first hand, target win and zapato, redaction of private hands/seed/deal, fixed-seed full-series tile conservation and chain matching.

Browser playthrough: desktop landing, local QR generation, phone name entry, host sees no hand, seven-tile private phone rack, phone reload recovers seat, legal controls play a whole scored hand, next deal, interactive lesson quiz, desktop/mobile layout without horizontal overflow. Zero browser JavaScript errors in this run.

Resilience: close phone when on turn, wait 22.5 seconds; server bot reduced hand from 7 to 6; reopen with the same private credential and recover the six-tile hand. Cached local practice reloaded with browser offline. Desktop headless requestAnimationFrame measurement: 58 FPS. This is not a hardware certification.

## Limits requiring external review
Actual four-person in-room usability, QR scan on physical cameras, TV viewing distance, low-end phone performance, screen-lock timing across mobile OSes, audio feel, broader browser compatibility, and competitive balance need real-device/player sessions. No assertion that all product-vision features are finished.

## Technical issues resolved during build
Test discovery initially included unrelated bundled package suites; test include now correctly targets the game tests. Local output cleanup encountered NFS open-file placeholders; cleanup retains directory roots and skips .nfs temporary handles. Chromium lacked accessibility/X11 shared libraries in this environment; private extraction allowed the browser test without privileged system installation.
