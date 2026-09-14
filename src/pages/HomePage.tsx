export function HomePage() {
   return (
      <div>
         <section
            style={{
               paddingBlock: 'var(--section-gap)',
               paddingInline: 'var(--page-gutter)',
            }}
         >
            <p
               className="section-number"
               style={{
                  marginBottom: 'var(--space-4)',
                  letterSpacing: 'var(--tracking-widest)',
               }}
            >
               01 — Identity
            </p>
            <h1
               className="section-title"
               style={{
                  marginBottom: 'var(--space-6)',
                  lineHeight: 'var(--leading-tight)',
               }}
            >
               Hoài An
            </h1>
            <p
               style={{
                  fontSize: 'var(--text-2xl)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--space-8)',
                  fontFamily: 'var(--font-editorial)',
                  fontWeight: 'var(--weight-regular)',
               }}
            >
               Backend / Software Developer — Vietnam
            </p>
            <div className="flex gap-2" style={{ marginBottom: 'var(--space-16)' }}>
               <span className="badge badge--accent">Backend</span>
               <span className="badge">TypeScript</span>
               <span className="badge">React</span>
               <span className="badge">.NET</span>
               <span className="badge">Systems</span>
            </div>
            <p
               className="font-editorial"
               style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--color-text-tertiary)',
                  maxWidth: 'var(--max-width-text)',
                  lineHeight: 'var(--leading-relaxed)',
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
                  fontSize: 'var(--text-4xl)',
                  marginBottom: 'var(--space-8)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 'var(--weight-black)',
                  lineHeight: 'var(--leading-tight)',
               }}
            >
               Projects
            </h2>
            <p
               className="text-secondary"
               style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'var(--text-lg)',
                  marginBottom: 'var(--space-8)',
               }}
            >
               Selected work and engineering artifacts.
            </p>
            <a href="/projects" className="btn btn--lg">
               View all projects
            </a>
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
                  fontSize: 'var(--text-4xl)',
                  marginBottom: 'var(--space-4)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 'var(--weight-black)',
                  lineHeight: 'var(--leading-tight)',
               }}
            >
               Get in touch
            </h2>
            <a href="/contact" className="btn btn--lg" style={{ marginTop: 'var(--space-4)' }}>
               Contact
            </a>
         </section>
      </div>
   );
}
