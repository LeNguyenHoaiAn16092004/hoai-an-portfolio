import { Suspense, lazy } from 'react';

export function lazyLoad(
   fn: () => Promise<any>
) {
   const LazyComponent = lazy(fn);
   return function LoadedComponent(props: any) {
      return (
         <Suspense
            fallback={
               <div
                  style={{
                     padding: 'var(--space-16)',
                     textAlign: 'center',
                     fontFamily: 'var(--font-technical)',
                     fontSize: 'var(--text-sm)',
                     color: 'var(--color-text-tertiary)',
                  }}
               >
                  Loading...
               </div>
            }
         >
            <LazyComponent {...props} />
         </Suspense>
      );
   };
}
