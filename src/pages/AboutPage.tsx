/**
 * AboutPage — /about route stub
 * Will be implemented in Phase 5.
 */

export function AboutPage() {
  return (
    <main>
      <section className="container" style={{ paddingBlock: 'var(--section-gap)' }}>
        <p className="font-technical" style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase' }}>
          Phase 5
        </p>
        <h1 style={{ fontSize: 'var(--text-3xl)', marginTop: 'var(--space-4)' }}>About</h1>
        <p style={{ marginTop: 'var(--space-6)', color: 'var(--color-text-tertiary)', fontSize: 'var(--text-sm)' }}>
          About page will be implemented in Phase 5.
        </p>
      </section>
    </main>
  );
}
