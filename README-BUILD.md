# Mesa — Build 03

See `design/build-03-readiness.md` for completed features, verification and unresolved full-launch gates.

New in this pass: anchored traditional domino placement with crosswise doubles; responsive menu fixes; worn colmado detail and correctly mounted fan; varied 3.8–8.6-second bot thinking; four reusable Spanish bot voice packs with spatial playback. Settings includes a voice preview and independent bot-chatter control.

Live proximity voice has a server/client LiveKit integration, but it is not active until a production project is configured. Set `LIVEKIT_URL`, `LIVEKIT_API_KEY`, and `LIVEKIT_API_SECRET` as server-only deployment secrets. Keys never belong in the browser or source. Voice starts in listen-only mode; microphone permission is requested only when the user explicitly enables it. Real multi-device/network tests are still required.

This remains a development build, not a completed commercial release. The full roadmap, production hosting, recovery, payments and final performance validation remain outstanding.


Dominican partnership dominoes in a real-time 3D colmado, with a shared host screen, tiles-only phones, bots, optional persistent profiles and a live spectator crowd with text chat.

## Local run

Install Bun and Node.js, then run inside `app/`:

```sh
bun install
bun run build
bun run dev
```

This runs the static game client, authoritative room Durable Objects and local D1 profile database. No Higgsfield generation SDK or generation key is used at runtime. Generated character/ambience assets are already included.

```sh
bun run test
```

41 tests cover rules, privacy, room ownership, account/session persistence, private age redaction, verified/idempotent series stats, spectator deduplication, text chat cooldown, host moderation and spotlight authority.

For the browser checks, install Playwright Chromium and its system libraries. Run `scripts/smoke-alpha2.mjs` against a local server on port 8788 (or set `MESA_URL`). The primary host is rendered with actual WebGL; secondary watcher/account renders are stubbed in the test harness to avoid multiple software GPU scenes. UI and networking remain real. The older Alpha 1 browser scripts are retained as historical tests and do not match the current scene UI.

## Play

- Solo: A quiet practice hand.
- Shared table: Start a table, then scan the QR on each phone and enter a name. Empty seats can use bots.
- Spectators: Open the watching/chat panel on the host display and copy Invite spectators. A new distinct spectator adds an audience member in the scene.
- Corner Spotlight: the host may feature a live table. This is not an automatic nightly winner selection system.
- Profiles: My profile → create an optional Mesa account. Sign in before joining a table to record casual series results. Guest invitations still only require a name inside Mesa.
- Sound: table effects, environmental ambience and user-supplied music are separate. Add a local Suno music file in Settings.

## Scene

The renderer uses original textured rigged humanoid GLBs, a calibrated upright seated pose with independent bounded idle motion, a modeled colmado/table/street and public-state domino animation. Alpha 2.1 removes the unsafe full-body bowing loop and disables reaching/drinking until separately collision-tested replacements are ready. Pips are high-contrast geometry above the tile surface, and the chain uses connected turns. Hidden racks contain opaque backs only; private hands are never rendered into the shared 3D scene. Phones joining as players do not load the scene renderer.

Up to eight visible audience avatars represent distinct live spectators. The actual count is shown independently; rooms are capped at 32 WebSocket connections in this alpha. Personal mutes, crowd mute and host moderation affect text chat. Live voice is not implemented.

## Performance and remaining work

Software-only WebGL in the build environment rendered at about 1–3 FPS. This is NOT a verified 60fps release. Batching/instancing, texture compression, renderer-specific resolution limits, and no software-rendered shadows reduce cost. Real laptop/TV GPU testing is required. Reaching/grip/sipping is disabled in Alpha 2.1 while collision-safe replacement interactions are developed.

Other incomplete systems: spatial voice, richer standing crowds and group reactions, automatic Games of the Night, replay viewer, decision-based ranked matchmaking, advanced coaching, payments and multi-device offline hosting. Email password recovery is not enabled; users must save passwords securely. Age is an optional private band.

## Hosting

The current `higgsfield.app` preview redirects signed-out visitors to platform login before Mesa. That hosting gate remains a blocker for fully account-free public invitations on this domain.

Independent hosting requires a Cloudflare Worker, static assets, a Room Durable Object and a D1 database. `app/wrangler.jsonc` is the local example. Set a unique Worker name and real D1 database identifier in your own deployment configuration, without committing credentials. The account tables are created idempotently by the account service. Configure HTTPS, then test anonymous page access, WebSocket origin handling, profile cookies, QR join and device reconnects before public launch.

Passwords are salted PBKDF2 hashes; sessions use HttpOnly Secure SameSite cookies. Statistical fields are not client editable. This alpha still needs independent security/accessibility and real-device review before selling access.
