# Mesa — room-first dominoes

## Profile and delivery
Mode S. Turn-based, discrete chain, disembodied hand, fixed-pair competitive social/calculation game. Emergent hands, finite series, minutes per hand and hours per evening. Desktop shared display and mobile touch private controllers; keyboard and pointer supported with native buttons. English interface with Dominican terminology. No gamepad claim. 28 game entities; worst case 28 board tiles plus four racks. DOM event-driven rendering, no continuous game loop. Target 60fps, <100ms input acknowledgment; mobile art compressed below 600KB. No account for guests.

## Experience and pillars
The player feels invited into a familiar Dominican evening because the game keeps everyone's attention at one shared table while making learning private and safe. Mechanics: settled double-six rules; story: tension of a closing hand; aesthetics: warm street, green felt, ivory dominoes; technology: authoritative room and redacted private views. Every pillar reinforces face-to-face play rather than individual feeds.

## Formal elements and loops
Four players across two fixed pairs; host is a non-playing display. Goal: 200 points by default. Actions: join, play matching tile at selected end, forced pass, learn, deal next hand. Resources: seven tiles and hidden information. Conflict: opponents, uncertain partner intentions, end control. Boundary: hand then series. Outcome: domino or blocked hand awards points, series target wins. Curves: entry 6, joining 3, shuffle 7, middle 5, last tiles 8, scoring 10, next deal 4. Long curve repeats with rising series stakes. No rewards currency or store.

Patterns: matching ends, forced pass, partner inference, counting visible pips, holding an end-control tile. Short loop select/place; medium loop read partners and close hand; long loop improve and win series. Uncertainty: hidden hands, opponent decisions, analytic alternatives; present at turn, hand, series. Neutral scoring loop: lead confers no dealing advantage, hence comeback possible.

## Verbs, consequences, information
Play acts on left/right ends or empty chain, changes legality for every subsequent player. Pass publicly signals lack of either end. Join occupies a fixed seat. Learn offers an optional no-stakes exercise. Deal resets hands but keeps score and correct opener. Counts, board, scores, turn and moves are public; only own tiles are private; seeds and original deals remain server-only until hand closes. Spectators and host never receive live private hands. Cryptographically random per-connection credentials are not public player identifiers. Server owns randomness. Server validates phase, ownership, turns, matching and mandatory pass. Bot choices read only their own hand and public state.

## Rules
28 unique double-six tiles; seven each, no boneyard. First opener 6-6 holder and must play 6-6. Later winner opens; blocker (last successful play) opens after tranque. Domino awards opponents' pips; capicua when final tile could fit either current open end awards configurable 25. Tranque after four passes compares pair sums, winner takes opponents' sum. Ties configurable blocker team or no score. Target 100/200/300; all-hands scoring optional. House rules locked after first deal. Zapato is series win against zero.

## Prototype question and analytic checks
Question: does hiding hands while exposing only legal options retain meaningful end-control decisions? Three analytic iterations: (1) matching only gives two endpoints; holding 6-1 versus playing 6-4 leaves distinct legal futures, (2) exposing legal set but not other hands keeps those futures distinct without illegal moves, (3) forced-pass signal adds inference without leaking exact tiles. Reference and alternative routes choose different valid ends; contrast spends a control tile, leaves high-pip liability. At score 60–140, an opponent hand with 40+ pips plus capicua can reverse the lead across two hands; no score-dependent dealing bias. Known deterministic rule fixtures and full-hand routes will validate production behavior. Human fun and physical device performance need external review, not claimed proven.

## Architecture and reference route
Adapt shipped room infrastructure for separate display/guest roles, cryptographic reconnect tokens, durable alarm-driven bots and 20-second disconnect coverage. Pure deterministic rules. Private room link, max 4 seats, spectators read public view. Reference route: launch > create table > QR join > name > fill empty seats > deal > legal play/pass > scoring > next hand > series. Local practice runs identical rules on-device; cached practice can run offline after first visit. Cross-device offline LAN transport is not provided by a public cloud Worker and must not be advertised as complete.

## Art direction — frozen STYLE FORMULA
Cinematic photographic realism with tactile, lived-in Caribbean materials and gently rounded physical objects, never cartoon outlines. The environment uses deep turquoise painted walls, faded coral accents, and warm brown wood; game tiles are luminous ivory with dark ink pips, while golden amber marks moments of attention. A bare tungsten bulb and soft practical string lights create a proud, affectionate Dominican evening, with restrained film grain and deep natural shadows. Maintain readable foreground silhouettes and a consistent seated table-height perspective.

## Boundaries and release truth
This build delivers the core room game and practice. Real payment/account entitlements, full no-internet cross-device play, 4K multi-angle looping films, filmed face reactions/forearms, licensed or Suno-generated music, voice, ranked grading, public matchmaking and nightly replay publishing are not claimed complete. No fake payment buttons. Later online stages remain visibly planned. Host creation free during early access, planned prices informational only.
