# Device Specification

## Principle

The website must be a responsive experience, not a desktop site squeezed into
smaller screens.

## Device classes

### Desktop

Typical widths:

- 1280+
- 1440+
- 1920+

Experience:

- Full 3D
- Rich motion
- Hover interactions
- Custom cursor
- Asymmetric layouts
- Large editorial compositions

### Tablet

Typical widths:

- 768–1279

Experience:

- Reduced 3D complexity
- Reduced hover dependence
- Touch-first interactions
- More compact editorial layout

### Mobile

Typical widths:

- 320–767

Experience:

- Fast
- Readable
- Touch-first
- Reduced 3D
- Reduced parallax
- No essential hover interactions
- Simplified navigation

### Foldable cover/narrow mode

Treat narrow folded view like a mobile layout.

Priorities:

- readable typography
- touch targets
- compact navigation
- no horizontal overflow

### Foldable unfolded/wide mode

When the browser exposes useful viewport/fold information:

- take advantage of additional width
- preserve readable line lengths
- optionally use left/right editorial composition
- avoid placing critical content directly under a hinge/fold

Do not make foldable APIs a hard dependency.

## Orientation

Support:

- portrait
- landscape

Do not assume a device's orientation from its device model.

## Input capabilities

### Mouse/trackpad

Can enable:

- custom cursor
- hover previews
- subtle pointer-reactive 3D

### Touch

Must support:

- tap
- swipe where applicable
- normal scrolling

Never require hover to reveal critical content.

### Keyboard

Must support:

- navigation
- visible focus
- Escape for overlays

## Motion capability

If `prefers-reduced-motion` is enabled:

- disable or substantially reduce nonessential motion
- disable aggressive parallax
- reduce 3D rotation
- avoid auto-moving content
- keep state changes understandable

## Performance tiers

### High capability

Desktop/laptop with strong GPU:

- full 3D
- high visual quality
- richer motion

### Medium capability

Tablet/average laptop:

- medium 3D quality
- reduced particle/object complexity
- moderate motion

### Low capability

Mobile/low-power:

- static or lightweight 3D fallback
- minimal expensive effects
- prioritize content and input responsiveness

## Testing matrix

Minimum manual/automated coverage should include:

- 360x800
- 390x844
- 430x932
- 768x1024
- 1024x768
- 1280x720
- 1440x900
- 1920x1080

Also test:

- portrait
- landscape
- light
- dark
- reduced motion
- touch
- keyboard

## No horizontal overflow

There must be no unintended horizontal page scrolling on any supported
device class.
