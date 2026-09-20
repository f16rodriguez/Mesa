# Mesa Build 03 — useful completed work and honest launch gates

## Implemented in this pass

- Traditional placement rebuilt from public move history: fixed central opener, crosswise doubles, correctly oriented matching ends, edge turns and no reflow of previously placed tiles. A stress probe passed 6,000 complete 28-tile sequences / 168,000 prefixes. Both one-sided and mixed-ended growth were exercised.
- Ivory tile backs and bold black dividers. Racks now stand consistently upright on the wooden rim, with private faces never sent to the shared renderer.
- Responsive two-line title and menu controls. Six desktop/mobile/landscape viewport checks passed, including explicit non-overlap of the last main button and secondary links.
- Fan remounted horizontally below the awning, attached by a vertical stem. The awning covers it. It no longer rotates on the wall.
- More worn paint, less polished wood, faded signage, groceries, cartons, sacks, water containers, counter stock, plants, floor wear, and subtle cloth movement. Existing models and scene assets were reused. This is still a game-art alpha, not a claim of finished photorealism.
- Bots think for approximately 3.8–8.6 seconds with varied character/turn rhythms. Timing uses public turn history, not hidden hand contents. The server persists a turn deadline; spectator joins cannot reset it. Measured online turns matched 6,383 / 3,895 / 5,366 ms targets within 8 ms in a local test.
- Four distinct Spanish bot voice packs, five short lines per character, reused as 20 audio files. Contextual, sparse playback; no simultaneous bot lines. Playback is spatialized by seat using HRTF panners and distance attenuation. No per-turn media generation occurs. Bot voices have an independent toggle and preview in Settings. Local phone controllers do not duplicate bot speech.
- Live human proximity-voice integration prepared with LiveKit: room-scoped microphone-only tokens, immutable server-issued seat/crowd metadata, listen-first joining, explicit microphone opt-in, echo/noise handling, HRTF positional playback, personal/crowd mute and host publication control. It is NOT active or end-to-end verified without a configured LiveKit project. The interface states the setup requirement and does not open the microphone when unconfigured.

## Checks

59 automated tests pass. Checks include domino rules, placement stability, character motion bounds, profile/session privacy, room ownership, spectator counts/moderation, bot timing, voice token restrictions and muted-token permissions. Browser checks passed six viewport layouts, all four voice previews, HRTF routing/seat positions, unavailable-service behavior and actual scene rendering with no JavaScript errors. Previous complete gameplay and pose regressions remain in the source.

Software-only rendering in the sandbox is slow; physical laptop/TV GPU performance still needs validation. Do not treat screenshot success as a 60fps certification. Full voice calls across separate networks require the configured service and real microphone/device tests.

## Required production connections

1. Independent public HTTPS hosting/domain, without the Higgsfield preview login gate. User has said they can obtain Cloudflare/domain access; this is not connected yet.
2. Supabase: user has an account; secure connector authorization is pending. A dedicated Mesa project must be identified before any schema/auth migration. Existing D1 profiles remain in use; no Supabase data has been changed.
3. LiveKit: create/connect a project, then set server-only `LIVEKIT_URL`, `LIVEKIT_API_KEY`, and `LIVEKIT_API_SECRET` through secure deployment configuration. Deploy afterward. Add usage limits and test separate networks before public use.
4. Merchant of record: Paddle or Lemon Squeezy account, approved products/prices, webhook verification and entitlement integration. Checkout is not built or active, and no purchases are being accepted.
5. Production account recovery and appropriate privacy/terms, account deletion/export and operational monitoring need completion/review before commercial launch. The current local username/password alpha has no email recovery.

## Full-roadmap work NOT complete

- Public matchmaking and assigned-partner ranked play.
- Calibrated information-aware decision grading, anti-collusion protection and trustworthy ratings.
- Automated Game of the Night selection/publication, full replay viewer and replay persistence. Corner Spotlight remains host-selected; closed-hand JSON export exists.
- Advanced partnership coaching beyond the three basic interactive lessons.
- Full offline multi-device hosting with the promised onboarding.
- Finished reach/grip/drink animations and more varied standing spectators. Unsafe interactions remain disabled.
- Live voice activation and cross-device acceptance tests.
- Payments, regional pricing enforcement and subscription entitlements.

The full scope has not been reduced, and this build is not declared launch-ready. Remaining credits should be preserved for high-value production integration and validation, not additional cast generations or repetitive cosmetic rerolls.
