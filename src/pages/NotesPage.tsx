/**
 * NotesPage — /notes route stub
 * Will be implemented in Phase 7.
 */

export function NotesPage() {
  return (
    <main>
      <section className="container" style={{ paddingBlock: 'var(--section-gap)' }}>
        <p className="font-technical" style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase' }}>
          Phase 7
        </p>
        <h1 style={{ fontSize: 'var(--text-3xl)', marginTop: 'var(--space-4)' }}>Notes</h1>
        <p style={{ marginTop: 'var(--space-6)', color: 'var(--color-text-tertiary)', fontSize: 'var(--text-sm)' }}>
          Technical notes archive will be implemented in Phase 7.
        </p>
      </section>
    </main>
  );
}
