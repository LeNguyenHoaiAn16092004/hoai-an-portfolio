# Motion Specification

## Philosophy

Motion should feel physical, editorial, subtle, and intentional.

It should create hierarchy and continuity rather than distract from content.

## Motion hierarchy

### Level 1 — Micro interaction

Approximate duration:

100–250ms

Examples:

- button state
- link underline
- icon movement
- theme control feedback

### Level 2 — Component transition

Approximate duration:

250–600ms

Examples:

- menu open
- card/image transition
- content reveal
- project preview

### Level 3 — Section transition

Approximate duration:

500–1200ms

Examples:

- hero exit
- section reveal
- typography transformation
- horizontal project sequence

### Level 4 — Experimental

Use rarely.

Examples:

- shader transition
- distortion
- complex 3D transformation

## Easing

Prefer natural easing.

Avoid excessive bounce, elastic motion, or game-like movement.

## Scroll motion

Possible:

- reveal
- scale
- opacity
- translation
- subtle parallax
- horizontal project movement

Avoid locking the user's scroll for long periods.

## Typography motion

Large headings may:

- reveal word-by-word
- move along an axis
- change scale
- transition between editorial states

The final text must remain readable without motion.

## 3D interaction

Desktop:

- pointer position may produce subtle rotation
- scroll may produce depth
- hover may create small displacement

Do not use extreme rotation.

Touch:

- replace pointer interaction with tap/swipe or gentle automatic motion
- do not require continuous device movement

## Page transitions

Transitions should be short enough not to feel like loading screens.

Do not delay navigation unnecessarily.

## Reduced motion

When reduced motion is requested:

- use instant/minimal transitions where practical
- remove continuous motion
- remove aggressive parallax
- minimize 3D movement
- preserve content order and state

## Performance rules

Avoid:

- animating layout properties unnecessarily
- continuous JavaScript loops when CSS is sufficient
- huge particle systems
- expensive blur/filter stacks everywhere

Prefer transform/opacity and GPU-friendly techniques when appropriate.

## Animation ownership

Every major animation should have a reason documented in implementation or
design notes.

Examples:

- Hero 3D = establishes identity
- Project horizontal motion = communicates sequence
- Text reveal = controls editorial hierarchy
- Cursor preview = communicates interactivity
