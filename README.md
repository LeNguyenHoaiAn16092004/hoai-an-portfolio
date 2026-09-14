# Hoài An Portfolio — Agent Project Pack

This repository is designed for autonomous/agent-assisted development in Antigravity.

## Source of truth

Read these documents before making architectural or visual decisions:

1. `docs/PROJECT.md`
2. `docs/DESIGN.md`
3. `docs/SPECIFICATION.md`
4. `docs/ARCHITECTURE.md`
5. `docs/DEVICE_SPECIFICATION.md`
6. `docs/MOTION.md`
7. `docs/CONTENT.md`
8. `docs/ROADMAP.md`

## Agent operating model

The human acts primarily as Product Owner / Reviewer.
The agent handles implementation, testing, debugging, browser verification,
documentation updates, and routine engineering decisions.

The agent should not ask about trivial implementation details. It should ask
only when a decision materially affects architecture, security, scope, content,
or the established design direction.

## Completion standard

A feature is not complete merely because code compiles. It must be verified
for build/lint, browser behavior, responsive behavior, theme behavior,
accessibility, performance, and regression risk where applicable.
