/**
 * breakpoints.ts — Responsive breakpoint constants
 *
 * Values match docs/DEVICE_SPECIFICATION.md:
 *   Mobile:  320–767px
 *   Tablet:  768–1279px
 *   Desktop: 1280px+
 *
 * Usage:
 *   - In CSS: use the media query strings as needed
 *   - In JS: prefer CSS; use these only when CSS is insufficient
 */

export const breakpoints = {
  /** 320px — minimum supported mobile width */
  mobileMin: 320,
  /** 767px — top of mobile range */
  mobileMedium: 767,
  /** 768px — tablet starts */
  tablet: 768,
  /** 1024px — larger tablet / small desktop */
  tabletLarge: 1024,
  /** 1280px — desktop starts */
  desktop: 1280,
  /** 1440px — typical desktop */
  desktopLarge: 1440,
  /** 1920px — wide desktop */
  desktopWide: 1920,
} as const;

export type Breakpoint = keyof typeof breakpoints;

/** Media query strings for use in matchMedia() */
export const mediaQueries = {
  mobile: `(max-width: ${breakpoints.mobileMedium}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.tabletLarge - 1}px)`,
  tabletUp: `(min-width: ${breakpoints.tablet}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
  desktopLarge: `(min-width: ${breakpoints.desktopLarge}px)`,
  desktopWide: `(min-width: ${breakpoints.desktopWide}px)`,
  portrait: '(orientation: portrait)',
  landscape: '(orientation: landscape)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
  darkScheme: '(prefers-color-scheme: dark)',
  hover: '(hover: hover) and (pointer: fine)',
  touch: '(hover: none) and (pointer: coarse)',
} as const;
