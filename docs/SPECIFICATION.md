# Functional Specification

## Routes

### `/`

Home.

Sections:

1. Navigation
2. Hero
3. Selected work
4. Technical profile / stack
5. Lab preview
6. Notes preview
7. About preview
8. Contact
9. Footer

### `/projects`

Project archive.

Requirements:

- Project list
- Category filter
- Technology filter
- Optional search
- Featured project treatment
- Clear links to case studies

### `/projects/:slug`

Project case study.

Required fields:

- Title
- Year
- Role
- Type
- Summary
- Problem
- Goals
- Solution
- Architecture
- Technology
- Challenges
- Decisions/trade-offs
- Results
- Screenshots/visuals
- Repository link if public
- Demo link if available
- Related/next project

### `/about`

Personal profile, background, education, skills, interests.

### `/lab`

Experimental projects.

Each item may have:

- Title
- Status
- Date
- Objective
- Short explanation
- Visual
- Technologies
- Link/source

### `/notes`

Technical writing archive.

Requirements:

- Categories
- Tags
- Search
- Detail page
- Reading-friendly layout

### `/notes/:slug`

Article detail.

### `/contact`

Contact information and optional form.

## Global features

### Theme

Support:

- Light
- Dark
- System preference

Persist the user's explicit choice locally.

### Responsive behavior

Support:

- Desktop
- Tablet
- Mobile
- Foldable cover-like narrow layout
- Foldable unfolded/wide layout
- Portrait
- Landscape

### Motion

Support:

- Page transitions
- Section reveal
- Staggered content
- Hover/tap feedback
- Scroll-driven motion
- Optional horizontal project sequence
- Subtle parallax

All motion must respect reduced-motion preferences.

### 3D

Potential areas:

- Hero artifact
- Selected project visual
- Experimental Lab pieces

3D must be optional/progressive enhancement.

### Command palette

Optional Phase 3 feature.

Suggested commands:

- Go Home
- Go Projects
- Go About
- Go Lab
- Go Notes
- Go Contact
- Toggle theme
- Open CV
- Open GitHub
- Open LinkedIn

### Keyboard

Support:

- Tab navigation
- Enter/Space activation
- Escape to close overlays
- Command palette shortcut where appropriate

## Project data model

Content should be separated from presentation.

Project records should support:

- slug
- title
- year
- category
- shortDescription
- description
- role
- technologies
- featured
- image
- problem
- solution
- architecture
- challenges
- decisions
- results
- github
- demo
- status

## Error handling

The UI should handle:

- Missing project
- Missing article
- Broken image
- External link failure
- Contact form failure

Do not expose internal errors to users.

## SEO

Support:

- Page titles
- Meta descriptions
- Open Graph metadata
- Canonical URLs where appropriate
- Semantic headings
- Sitemap/robots strategy if deployment requires it

## Analytics

Optional after MVP.

Analytics must not block page rendering and should respect the chosen privacy
policy.
