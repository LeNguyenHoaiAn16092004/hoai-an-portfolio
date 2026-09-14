# Visual Assets

All imagery in this portfolio is original and procedural — no external image
files are downloaded, hotlinked, or bundled (except fonts, see below).

## 3D

- `src/3d/Hero3D.tsx` — original layered orbital sculpture built with
  React Three Fiber (`@react-three/fiber`, `@react-three/drei`, `three`).
  No Spline scenes or third-party models are used.

## Project visuals

- `src/components/ProjectVisual.tsx` — original inline-SVG conceptual
  compositions (POS/receipt/table-grid/SQL motifs for the café system;
  phone-frame/expense-row/sync motifs for the expense app). They are
  explicitly tagged CONCEPT and are not screenshots.

## Portrait

No personal portrait asset has been supplied yet. Per the design rules, no
stock photo is used as a stand-in. Supply a portrait file to add an
editorial portrait block; until then the hero uses the procedural artifact.

## Fonts

- Syne, Lora, JetBrains Mono via Google Fonts CDN (`display=swap`).

## Icons / favicon

- `public/favicon.svg`, `public/icons.svg` — original project files.
- Unused template leftovers in `src/assets/` (`hero.png`, `react.svg`,
  `vite.svg`) are not imported and are never bundled.
