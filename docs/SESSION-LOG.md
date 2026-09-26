# Registro de sesiones

## 26 sep 2026

```
CONTINUATION BRIEF · Mesa · 26 sep 2026
Read first: CLAUDE.md (Decisiones de producto), ROADMAP.md ("Camino al lanzamiento"), prototipos/2d/LEEME.md only if 2D comes back
Repo: f16rodriguez/Mesa · branch claude/75-percent-completion-plan-dc5zq8 · live: mesa.trey16.workers.dev
Where we are: 3D build live and complete for the room; painted cut-ins shipped; waiting on Trey's TV test.
Decided this session (and where it's recorded):
- 3D for launch; 2D is plan B, only if the TV test is bad → CLAUDE.md
- No budget: AI + Claude only, no animator → CLAUDE.md
- Painted cut-ins on dominó/capicúa, all 10 characters → CLAUDE.md, app/public/cortes/
- Launch path and owners → ROADMAP.md
- 2D rules (auto camera, near player's head below the felt) → prototipos/2d/LEEME.md
Open questions for Trey:
- TV test result: device, smoothness, load time, how the cut-in looks
- Bots tranque 32% of hands: audit or accept?
Next 3 steps:
1. Trey: TV test; start Paddle verification and the name/trademark check
2. If smooth: 5+ real-table playtests, fix what breaks; turn Paddle keys on when approved
3. If choppy: 2D plan B, starting with the Don Rafa puppet test
Watch out for: payments are OFF until Paddle keys are set; deploy = GitHub Actions desplegar.yml on this branch;
run the full build + vitest before pushing; don't commit the rebuilt qr.js/voice-sdk.js (bundler noise).
Start with: Model Sonnet · medium (debrief + launch prep). Opus · high for 3D performance work or the puppet system.
```
