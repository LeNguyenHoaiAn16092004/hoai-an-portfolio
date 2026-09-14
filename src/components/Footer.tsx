import { profile } from '../data/profile';

export function Footer() {
  const { links } = profile;

  return (
    <footer
      style={{
        borderTop: 'var(--border-width-thin) solid var(--color-border-subtle)',
        paddingBlock: 'var(--space-16)',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="container">
        <div className="flex flex-col gap-8" style={{ maxWidth: 'var(--max-width-text)' }}>
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
            {profile.role} — {profile.location}. Backend-focused, building with C# and .NET.
          </p>
          <div
            className="flex gap-4"
            style={{ fontFamily: 'var(--font-technical)', fontSize: 'var(--text-xs)' }}
          >
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  transition: 'color var(--duration-fast) var(--ease-out-soft)',
                }}
              >
                GitHub
              </a>
            )}
            {links.email && (
              <a
                href={`mailto:${links.email}`}
                style={{
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  transition: 'color var(--duration-fast) var(--ease-out-soft)',
                }}
              >
                Email
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
