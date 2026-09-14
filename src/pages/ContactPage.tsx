/**
 * ContactPage — /contact route stub
 * Will be implemented in Phase 3 (contact section).
 */

export function ContactPage() {
  return (
    <main>
      <section className="container" style={{ paddingBlock: 'var(--section-gap)' }}>
        <p className="font-technical" style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase' }}>
          Contact
        </p>
        <h1 style={{ fontSize: 'var(--text-3xl)', marginTop: 'var(--space-4)' }}>Get in touch</h1>
        <p style={{ marginTop: 'var(--space-6)', color: 'var(--color-text-tertiary)', fontSize: 'var(--text-sm)' }}>
          Contact page will be implemented in Phase 3.
        </p>
      </section>
    </main>
  );
}
