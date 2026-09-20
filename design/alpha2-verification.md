# Alpha 2 verification

41 tests passed (13 pure domino rules, 7 room protocol/privacy, 6 account, 3 crowd, 12 metadata/fresh-state).

Local browser end-to-end smoke passed with zero JS errors: real primary host renderer loaded four characters, live spectator count matched one visible audience member, chat reached host, crowd mute/unmute worked, host spotlight worked, QR guest entry, tiles-only private phone, host redaction, complete scored hand and next deal, reload seat recovery, signup/profile update/reload and lessons. Secondary watcher/account scenes were rendering-stubbed in test harness only, not in the product.

Known limitations: software GPU measured 1–3 FPS, so real hardware performance certification is outstanding. Final smoke showed 52 draws and ~99k triangles with one spectator; software rendering uses reduced pixel ratio and no shadows. No claim that 60fps was achieved. Physical QR cameras and TV browsers still require outside testing. Character interactions are procedural alpha quality, not final hand animation. Live spectator voice, automated night selection and standing crowd remain incomplete.

Visual defect repaired: native Chair_Sit_Idle_M made the male characters slump through the table. Retargeting the upright seated clip onto the original male meshes resolved severe torso clipping in the reviewed frame. The character designs/textures remain distinct. Stage controls and table authority do not depend on animation state.

Profile database writes are authorized server-side. Public profiles omit age band, salt and password hashes. Profile updates ignore user-supplied statistics. Unique series/person result keys plus an atomic insert/counter-update batch make result retries idempotent.
