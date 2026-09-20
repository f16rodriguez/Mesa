# Getting off Higgsfield

Mesa is a stock Cloudflare Worker: a Durable Object per room, one D1 database,
and a folder of static files. Nothing in `app/src` calls a Higgsfield API. The
hosting dependency is exactly two things, both at deploy time:

1. **The deploy generates its own `wrangler.jsonc`.** The one in `app/` is the
   build and `wrangler dev` config; the platform builds an authoritative one
   from `app/app.manifest.json` and ignores it. So the repo has never contained
   the config a real deploy runs on.
2. **The deploy injects an auth SDK into every HTML page.** Fetch the live site
   and `index.html` comes back with `window.__hfAuthOrigin` and an approval
   client bolted to the top — which is why the hosted URL asks visitors to sign
   in. The `index.html` in this repo is clean; the injection happens on the way
   out.

Neither survives deploying from here. `app/wrangler.cloudflare.jsonc` is that
generated config, written out by hand and verified with `wrangler deploy
--dry-run`: all three bindings resolve and the Worker bundles. Deploying with it
ships the repo's own HTML, so the sign-in wall disappears with it.

## The whole move

Run from `app/`. Everything except step 2 is already done and committed.

```sh
# 1. Log in to the Cloudflare account that will own it.
bunx wrangler login

# 2. Create the database, then paste the uuid it prints into
#    wrangler.cloudflare.jsonc over PUT-THE-D1-DATABASE-ID-HERE.
#    It is an id, not a secret — it belongs in the repo.
bunx wrangler d1 create mesa-profiles

# 3. Build and ship.
bun install
bun run build
bunx wrangler deploy -c wrangler.cloudflare.jsonc

# 4. Voice, once per account. Skip it and the table still plays;
#    only proximity voice stays quiet. These ARE secrets: they are typed
#    into the prompt, never written into a file.
bunx wrangler secret put LIVEKIT_URL        -c wrangler.cloudflare.jsonc
bunx wrangler secret put LIVEKIT_API_KEY    -c wrangler.cloudflare.jsonc
bunx wrangler secret put LIVEKIT_API_SECRET -c wrangler.cloudflare.jsonc
```

Then open the Worker's URL, start a table, and scan the QR with a phone. That
round trip — screen, code, phone, seat — is the only test that proves the
Durable Object, the assets and the WebSocket all landed on the same origin.

To put a real domain on it, add the domain to the same Cloudflare account and
attach it to the Worker under Workers & Pages → mesa → Settings → Domains. No
code change; the QR encodes `location.origin`.

## Two things not to change

- **The `v1` migration tag** in `wrangler.cloudflare.jsonc`. Cloudflare matches
  an existing Durable Object namespace on that tag. A new tag does not migrate
  anything — it orphans every room that has ever been created.
- **The `Room` class name**, for the same reason.

## Still on Higgsfield after this

Only the generated voices. The bot clips under `app/public/audio/bots/` were
made with `seed_audio` and are committed as mp3s, so the app does not need the
account to run — but adding a new line to a bot still means a generation. Node
22 or newer is required for `wrangler`; the sandbox ships Node 20, which is why
the commands above go through `bun --bun x` there.

## Optional, not done

`app/packages/` is 3.1 MB of a vendored UI kit that nothing in the app imports —
grep finds no reference in `src`, `scripts`, `tests`, the build script or any
stylesheet, and the deploy uploads 55 files without it. It can go in one commit
whenever you want the repo lighter. Left in place for now on purpose.
