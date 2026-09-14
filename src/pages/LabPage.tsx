/**
 * LabPage — /lab route stub
 * Will be implemented in Phase 6.
 */

export function LabPage() {
  return (
    <main>
      <section className="container" style={{ paddingBlock: 'var(--section-gap)' }}>
        <p className="font-technical" style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase' }}>
          Phase 6
        </p>
        <h1 style={{ fontSize: 'var(--text-3xl)', marginTop: 'var(--space-4)' }}>Lab</h1>
        <p style={{ marginTop: 'var(--space-6)', color: 'var(--color-text-tertiary)', fontSize: 'var(--text-sm)' }}>
          Experiments archive will be implemented in Phase 6.
        </p>
      </section>
    </main>
  );
}
