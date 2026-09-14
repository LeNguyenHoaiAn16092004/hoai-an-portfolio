interface MetaBlockProps {
  label: string;
  value: string;
  sub?: string;
}

/**
 * MetaBlock — Small editorial/technical metadata unit.
 *
 * Monospace label over a value, separated by a thin rule. Used for system
 * metadata, technical profiles, and status blocks — never as a dashboard card.
 */
export function MetaBlock({ label, value, sub }: MetaBlockProps) {
  return (
    <div
      style={{
        borderTop: 'var(--border-width-thin) solid var(--color-border-subtle)',
        paddingTop: 'var(--space-2)',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-technical)',
          fontSize: 'var(--text-xs)',
          letterSpacing: 'var(--tracking-wider)',
          color: 'var(--color-text-tertiary)',
          marginBottom: 'var(--space-1)',
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-technical)',
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--weight-medium)',
          color: 'var(--color-text-primary)',
          lineHeight: 'var(--leading-snug)',
        }}
      >
        {value}
      </p>
      {sub && (
        <p
          style={{
            fontFamily: 'var(--font-technical)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-tertiary)',
            marginTop: 'var(--space-1)',
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
