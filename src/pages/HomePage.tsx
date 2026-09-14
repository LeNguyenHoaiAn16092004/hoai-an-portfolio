export function HomePage() {
   return (
      <div>
         <section
            style={{
               paddingBlock: 'var(--section-gap)',
               paddingInline: 'var(--page-gutter)',
            }}
         >
            <p className="section-number" style={{ marginBottom: 'var(--space-4)' }}>
               01 — Identity
            </p>
            <h1 className="section-title" style={{ marginBottom: 'var(--space-6)' }}>
               Hoài An
            </h1>
            <p
               style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--space-8)',
                  fontFamily: 'var(--font-editorial)',
               }}
            >
               Backend / Software Developer — Vietnam
            </p>
            <div className="flex gap-4" style={{ marginBottom: 'var(--space-16)' }}>
               <span className="badge badge--accent">Backend</span>
               <span className="badge">TypeScript</span>
               <span className="badge">React</span>
               <span className="badge">.NET</span>
            </div>
            <p
               className="font-editorial"
               style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--color-text-tertiary)',
                  maxWidth: 'var(--max-width-text)',
               }}
            >
               I build things that work.
            </p>
         </section>

         <section
            style={{
               paddingBlock: 'var(--section-gap)',
               paddingInline: 'var(--page-gutter)',
               borderTop: 'var(--border-width-thin) solid var(--color-border-subtle)',
            }}
         >
            <p className="section-number" style={{ marginBottom: 'var(--space-2)' }}>
               02 — Selected Work
            </p>
            <h2
               style={{
                  fontSize: 'var(--text-3xl)',
                  marginBottom: 'var(--space-8)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 'var(--weight-black)',
               }}
            >
               Projects
            </h2>
            <div
               style={{
                  fontFamily: 'var(--font-technical)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-tertiary)',
               }}
            >
               <p>View all projects →</p>
            </div>
         </section>

         <section
            style={{
               paddingBlock: 'var(--section-gap)',
               paddingInline: 'var(--page-gutter)',
               borderTop: 'var(--border-width-thin) solid var(--color-border-subtle)',
            }}
         >
            <p className="section-number" style={{ marginBottom: 'var(--space-2)' }}>
               03 — Thinking
            </p>
            <div className="flex gap-8" style={{ marginBottom: 'var(--space-8)' }}>
               <div>
                  <h3
                     style={{
                        fontSize: 'var(--text-xl)',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 'var(--weight-bold)',
                        marginBottom: 'var(--space-2)',
                     }}
                  >
                     Lab
                  </h3>
                  <p className="text-tertiary" style={{ fontSize: 'var(--text-sm)' }}>
                     Experiments and prototypes →
                  </p>
               </div>
               <div>
                  <h3
                     style={{
                        fontSize: 'var(--text-xl)',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 'var(--weight-bold)',
                        marginBottom: 'var(--space-2)',
                     }}
                  >
                     Notes
                  </h3>
                  <p className="text-tertiary" style={{ fontSize: 'var(--text-sm)' }}>
                     Technical writing →
                  </p>
               </div>
            </div>
         </section>

         <section
            style={{
               paddingBlock: 'var(--section-gap)',
               paddingInline: 'var(--page-gutter)',
               borderTop: 'var(--border-width-thin) solid var(--color-border-subtle)',
            }}
         >
            <p className="section-number" style={{ marginBottom: 'var(--space-2)' }}>
               04 — Connect
            </p>
            <h2
               style={{
                  fontSize: 'var(--text-3xl)',
                  marginBottom: 'var(--space-4)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 'var(--weight-black)',
               }}
            >
               Get in touch
            </h2>
            <a
               href="/contact"
               className="btn btn--lg"
               style={{ marginTop: 'var(--space-4)' }}
            >
               Contact
            </a>
         </section>
      </div>
   );
}
