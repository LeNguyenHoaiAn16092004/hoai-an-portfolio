/**
 * useMediaQuery — Generic media query hook
 *
 * Usage:
 *   const isMobile = useMediaQuery(mediaQueries.mobile);
 *
 * Notes:
 * - Use this sparingly; prefer CSS for responsive behavior
 * - SSR-safe: returns false initially if window is unavailable
 */

import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    // Add listener; initializer already set the correct initial value.
    // When `query` changes, re-run the effect and refresh via the handler
    // on the next change, or let the component re-render with the new query.
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
