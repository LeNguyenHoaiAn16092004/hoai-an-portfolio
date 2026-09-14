# Project Operating Rules

Always read the project documentation before making meaningful changes.

Required documents:

- docs/PROJECT.md
- docs/DESIGN.md
- docs/SPECIFICATION.md
- docs/ARCHITECTURE.md
- docs/DEVICE_SPECIFICATION.md
- docs/MOTION.md
- docs/CONTENT.md
- docs/ROADMAP.md

## Autonomous behavior

Act as the primary software engineer.

Do not ask questions about trivial implementation choices.

Make reasonable decisions using the project documentation.

Ask the user only when a decision materially changes:

- architecture
- security
- product scope
- personal content
- major visual direction

## Scope discipline

Do not add unrelated features.

Do not replace working architecture without a concrete reason.

Do not introduce dependencies without justification.

## Verification

Never mark a task complete immediately after editing code.

After implementation:

1. Run lint.
2. Run build.
3. Run relevant tests.
4. Run the app when UI changes are involved.
5. Inspect the UI in a browser when available.
6. Check relevant device/theme/motion states.
7. Fix issues discovered.
8. Update ROADMAP.md when the task corresponds to a roadmap item.

## Content integrity

Never invent personal facts, project metrics, employers, clients, links, or
achievements.

Use placeholders when verified content is missing.
