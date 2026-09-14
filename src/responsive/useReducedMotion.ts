/**
 * useReducedMotion — Reports the user's reduced-motion preference
 *
 * Always check this before starting animations in JS.
 * CSS animations should use the @media (prefers-reduced-motion) rule directly.
 */

import { useMediaQuery } from './useMediaQuery';
import { mediaQueries } from './breakpoints';

export function useReducedMotion(): boolean {
  return useMediaQuery(mediaQueries.reducedMotion);
}
