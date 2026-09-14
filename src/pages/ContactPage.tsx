import type { ReactNode } from 'react';
import { profile } from '../data/profile';
import { Reveal } from '../components/Reveal';

function ContactRow({
  label,
  href,
  children,
}: {
  label: string;
  href?: string;
  children: ReactNode;
}) {
  return (
    <div style={{ marginBottom: 'var(--space-8)' }}>
      <p
        style={{
          fontFamily: 'var(--font-technical)',
          fontSize: 'var(--text-xs)',
          letterSpacing: 'var(--tracking-wider)',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          marginBottom: 'var(--space-2)',
        }}
      >
        {label}
      </p>
      {href ? (
        <a href={href} style={{ color: 'var(--color-text-primary)' }}>
          {children}
        </a>
      ) : (
        <span className="text-tertiary">{children}</span>
      )}
    </div>
  );
}

export function ContactPage() {
  const { links } = profile;

  return (
    <div>
      <section style={{ paddingBlock: 'var(--section-gap)', paddingInline: 'var(--page-gutter)' }}>
        <Reveal>
          <p className="section-number">08</p>
        </Reveal>
        <Reveal stagger={1}>
          <h1 className="section-title" style={{ marginBottom: 'var(--space-8)' }}>
            Contact
          </h1>
        </Reveal>
        <Reveal stagger={2}>
          <p
            className="font-editorial"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-4)',
              maxWidth: 'var(--max-width-text)',
            }}
          >
            The fastest way to reach me is through GitHub. Email will be published here once
            confirmed.
          </p>
          <p
            className="text-tertiary"
            style={{
              fontFamily: 'var(--font-technical)',
              fontSize: 'var(--text-sm)',
              marginBottom: 'var(--space-16)',
            }}
          >
            {profile.location}
          </p>
        </Reveal>
        <Reveal stagger={3}>
          <div style={{ maxWidth: 'var(--max-width-text)' }}>
            {links.github && (
              <ContactRow label="GitHub" href={links.github}>
                {links.github.replace('https://', '')}
              </ContactRow>
            )}
            <ContactRow label="Email">{links.email ?? 'To be published'}</ContactRow>
            {links.linkedin && (
              <ContactRow label="LinkedIn" href={links.linkedin}>
                {links.linkedin.replace('https://', '')}
              </ContactRow>
            )}
            {links.cv && (
              <ContactRow label="CV" href={links.cv}>
                Download CV
              </ContactRow>
            )}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
