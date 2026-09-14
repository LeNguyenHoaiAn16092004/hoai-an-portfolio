
export function Footer() {
   return (
      <footer
         style={{
            borderTop: 'var(--border-width-thin) solid var(--color-border-subtle)',
            paddingBlock: 'var(--space-16)',
            backgroundColor: 'var(--color-bg)',
         }}
      >
         <div className="container">
            <div
               className="flex flex-col gap-8"
               style={{
                  maxWidth: 'var(--max-width-text)',
               }}
            >
               <p
                  className="font-editorial"
                  style={{
                     fontSize: 'var(--text-xl)',
                     fontWeight: 'var(--weight-bold)',
                     color: 'var(--color-text-primary)',
                  }}
               >
                  Hoài An.
               </p>
               <p
                  style={{
                     fontSize: 'var(--text-sm)',
                     color: 'var(--color-text-tertiary)',
                     lineHeight: 'var(--leading-relaxed)',
                  }}
               >
                  Backend / Software Developer based in Vietnam. Building things
                  that matter. [PLACEHOLDER — verify before deployment]
               </p>
               <div
                  className="flex gap-4"
                  style={{
                     fontFamily: 'var(--font-technical)',
                     fontSize: 'var(--text-xs)',
                  }}
               >
                  {[
                     { label: 'Email', href: 'mailto:[PLACEHOLDER — verify email]' },
                     { label: 'GitHub', href: '[PLACEHOLDER — verify GitHub]' },
                     { label: 'LinkedIn', href: '[PLACEHOLDER — verify LinkedIn]' },
                     { label: 'CV', href: '[PLACEHOLDER — verify CV]' },
                  ].map(({ label, href }) => (
                     <a
                        key={label}
                        href={href}
                        style={{
                           color: 'var(--color-text-secondary)',
                           textDecoration: 'none',
                           transition: 'color var(--duration-fast) var(--ease-out-soft)',
                        }}
                     >
                        {label}
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </footer>
   );
}
