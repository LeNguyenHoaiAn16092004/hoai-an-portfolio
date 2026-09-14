# Architecture Specification

## Recommended stack

- React
- TypeScript
- Vite
- React Router
- CSS/CSS Modules or another lightweight styling approach
- A motion library only if native CSS/WAAPI is insufficient
- A 3D library only for genuine 3D requirements

Do not introduce a framework or library solely because it is popular.

## Architectural principles

### Content is data

Do not hardcode large amounts of project/article content inside components.

Keep portfolio content in a dedicated data/content layer.

### Components

Organize around reusable visual and functional components.

Avoid:

- giant page components
- duplicate markup
- deeply coupled components

### Suggested source structure

`src/`

- `components/` reusable UI
- `sections/` major page sections
- `pages/` route-level pages
- `data/` project/article/profile data
- `animations/` motion primitives
- `3d/` 3D scenes/components
- `theme/` theme tokens and logic
- `responsive/` capability/device helpers where needed
- `hooks/` reusable hooks
- `utils/` pure utilities
- `styles/` global styles/tokens

Adapt this structure if implementation evidence suggests a simpler structure.

## State

Prefer local React state.

Do not introduce global state management unless a concrete cross-page
requirement exists.

Theme state may be centralized because it is global.

## 3D architecture

Keep 3D isolated from normal content.

Requirements:

- lazy-load expensive scenes
- avoid blocking initial rendering
- provide fallback visual
- detect reduced motion
- adapt quality to device capability
- clean up animation loops/resources
- avoid unnecessary re-renders

## Motion architecture

Create reusable motion primitives rather than repeating ad-hoc animation
logic in every component.

Motion should be declarative where practical.

## Responsive architecture

Use CSS-first responsive behavior.

Use JavaScript/device detection only when CSS cannot solve the requirement.

Do not rely on user-agent sniffing.

Prefer capability detection.

## Foldable architecture

Treat foldable support as progressive enhancement.

The base layout must work without foldable-specific APIs.

If viewport segments/fold information is available, use it to improve layout
and avoid placing critical content across a hinge/fold region.

## Performance

Priorities:

1. Fast initial content
2. Optimized images
3. Lazy loading
4. Code splitting
5. Deferred 3D
6. Minimal JavaScript on simple sections
7. Avoid layout thrashing

## Security

Do not add secrets to the frontend.

Validate external inputs.

Do not trust query parameters or external data.

## Deployment

Deployment provider can be chosen later.

The app should be deployable as a static frontend unless a future feature
creates a genuine backend requirement.
