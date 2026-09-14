/**
 * HomePage — / route
 *
 * Phase 0 stub. Will be implemented in Phase 3.
 * Sections: Navigation, Hero, Projects, Skills, Lab, Notes, About, Contact, Footer
 */

export function HomePage() {
  return (
    <main>
      <section className="container" style={{ paddingBlock: 'var(--section-gap)' }}>
        <p className="font-technical" style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase' }}>
          Phase 0 — Foundation
        </p>
        <h1 style={{ fontSize: 'var(--text-4xl)', marginTop: 'var(--space-4)', letterSpacing: 'var(--tracking-tight)' }}>
          Hoài An
        </h1>
        <p style={{ fontSize: 'var(--text-lg)', marginTop: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>
          Backend / Software Developer — Vietnam
        </p>
        <p className="font-editorial" style={{ marginTop: 'var(--space-8)', color: 'var(--color-text-tertiary)', fontSize: 'var(--text-sm)' }}>
          Home page content will be implemented in Phase 3.
        </p>
      </section>
    </main>
  );
}
