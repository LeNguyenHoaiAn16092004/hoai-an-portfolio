import type { ReactNode } from 'react';
import { useReducedMotion } from '../responsive';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface RevealProps {
  children: ReactNode;
  stagger?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
}

/**
 * Reveal — Scroll-triggered reveal wrapper.
 *
 * Applies the `.reveal` / `.visible` motion primitives from global.css
 * when the element enters the viewport. Renders visible immediately when
 * the user prefers reduced motion, so content is never hidden.
 */
export function Reveal({ children, stagger = 0, className = '' }: RevealProps) {
  const { ref, isVisible } = useScrollReveal();
  const reducedMotion = useReducedMotion();
  const visible = isVisible || reducedMotion;
  const staggerClass = stagger > 0 ? ` reveal--stagger-${String(stagger)}` : '';
  const extraClass = className ? ` ${className}` : '';

  return (
    <div ref={ref} className={`reveal${visible ? ' visible' : ''}${staggerClass}${extraClass}`}>
      {children}
    </div>
  );
}
