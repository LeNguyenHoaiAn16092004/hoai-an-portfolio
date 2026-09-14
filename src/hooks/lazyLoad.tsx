import { Suspense, lazy, type ComponentType } from 'react';

// Documented `any` usage: this is a generic passthrough wrapper that forwards
// props to the wrapped component untouched, so the prop type stays open.
type AnyComponent = ComponentType<any>;

/**
 * lazyLoad — code-split wrapper for modules that use named exports.
 *
 * React.lazy only understands `{ default: Component }`, so the requested
 * named export is mapped to `default` here. Without this mapping, lazily
 * loaded routes resolve to `undefined` and crash at render time.
 */
export function lazyLoad<T extends object>(fn: () => Promise<T>, name: keyof T & string) {
   const LazyComponent = lazy(() => fn().then((mod) => ({ default: mod[name] as AnyComponent })));
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
