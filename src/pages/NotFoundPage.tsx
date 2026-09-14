/**
 * NotFoundPage — Displayed for any unmatched route
 */

import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <main>
      <section className="container" style={{ paddingBlock: 'var(--section-gap)' }}>
        <p className="font-technical" style={{ color: 'var(--color-accent)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase' }}>
          404
        </p>
        <h1 style={{ fontSize: 'var(--text-3xl)', marginTop: 'var(--space-4)' }}>Page not found</h1>
        <p style={{ marginTop: 'var(--space-6)', color: 'var(--color-text-secondary)', fontSize: 'var(--text-base)' }}>
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            marginTop: 'var(--space-8)',
            fontSize: 'var(--text-sm)',
            fontFamily: 'var(--font-technical)',
            color: 'var(--color-accent)',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
          }}
        >
          ← Return home
        </Link>
      </section>
    </main>
  );
}
