import { useRef, useEffect, useState } from 'react';

export function useScrollReveal(options?: { threshold?: number; rootMargin?: string }) {
   const ref = useRef<HTMLDivElement>(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const element = ref.current;
      if (!element) return;

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
            }
         },
         { threshold: options?.threshold ?? 0.1, rootMargin: options?.rootMargin ?? '0px' }
      );

      observer.observe(element);
      return () => observer.disconnect();
   }, []);

   return { ref, isVisible };
}

export function useStaggerDelay(index: number, baseDelay = 100) {
   return index * baseDelay;
}
