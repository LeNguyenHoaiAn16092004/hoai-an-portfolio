import { Link } from 'react-router-dom';

export function NotFoundPage() {
   return (
      <div>
         <section style={{ paddingBlock: 'var(--section-gap)', paddingInline: 'var(--page-gutter)' }}>
            <p className="section-number" style={{ color: 'var(--color-accent)' }}>404</p>
            <h1 className="section-title" style={{ marginTop: 'var(--space-2)' }}>Not Found</h1>
            <p
               className="font-editorial"
               style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--color-text-secondary)',
                  marginTop: 'var(--space-4)',
               }}
            >
               The page you are looking for does not exist.
            </p>
            <Link
               to="/"
               className="btn"
               style={{ marginTop: 'var(--space-8)' }}
            >
               ← Return home
            </Link>
         </section>
      </div>
   );
}
