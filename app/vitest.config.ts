import { cloudflareTest } from "@cloudflare/vitest-pool-workers";
import { defineConfig } from "vitest/config";

/**
 * Tests run in workerd — the real runtime — not a mock. That matters here: the
 * room's correctness lives in WebSocket hibernation, `ctx.storage` and Durable
 * Object addressing, none of which a fake reproduces faithfully.
 *
 * Bindings come from `wrangler.jsonc`, so the tests exercise the same DO class
 * and migration the local dev server does.
 */
export default defineConfig({
  test: { include: ['tests/**/*.test.ts'] },
  // Paddle vacío aunque haya un .dev.vars con claves: las pruebas que lo necesitan
  // lo encienden ellas mismas (tests/pagos.test.ts); las demás juegan gratis.
  plugins: [cloudflareTest({ wrangler: { configPath: "./wrangler.jsonc" }, miniflare: { bindings: { PADDLE_CLIENT_TOKEN: "", PADDLE_PRICE_ID: "", PADDLE_WEBHOOK_SECRET: "" } } })],
});
