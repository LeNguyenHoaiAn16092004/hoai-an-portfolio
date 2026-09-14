interface ProjectVisualProps {
  variant: 'cafe' | 'expense';
}

/**
 * ProjectVisual — Abstract conceptual visuals for projects.
 *
 * Pure inline SVG, theme-aware via design tokens. These are original
 * conceptual compositions — NOT screenshots. A visible CONCEPT tag marks
 * them as such. Decorative: hidden from assistive technology.
 */
export function ProjectVisual({ variant }: ProjectVisualProps) {
  return (
    <div
      style={{
        position: 'relative',
        border: 'var(--border-width-thin) solid var(--color-border-subtle)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        backgroundColor: 'var(--color-bg-subtle)',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: 'var(--space-2)',
          left: 'var(--space-2)',
          fontFamily: 'var(--font-technical)',
          fontSize: 'var(--text-xs)',
          letterSpacing: 'var(--tracking-wider)',
          color: 'var(--color-text-tertiary)',
          backgroundColor: 'var(--color-bg)',
          border: 'var(--border-width-thin) solid var(--color-border-subtle)',
          borderRadius: 'var(--radius-sm)',
          padding: '2px var(--space-2)',
          zIndex: 1,
        }}
      >
        CONCEPT
      </span>
      {variant === 'cafe' ? <CafeVisual /> : <ExpenseVisual />}
    </div>
  );
}

function CafeVisual() {
  return (
    <svg
      viewBox="0 0 400 300"
      role="presentation"
      aria-hidden="true"
      style={{ display: 'block', width: '100%', height: 'auto' }}
    >
      {/* table grid — occupied tables in accent */}
      <g>
        <rect x="24" y="24" width="52" height="52" fill="var(--color-accent)" opacity="0.85" />
        <rect x="84" y="24" width="52" height="52" fill="none" stroke="var(--color-border-subtle)" strokeWidth="2" />
        <rect x="144" y="24" width="52" height="52" fill="none" stroke="var(--color-border-subtle)" strokeWidth="2" />
        <rect x="24" y="84" width="52" height="52" fill="none" stroke="var(--color-border-subtle)" strokeWidth="2" />
        <rect x="84" y="84" width="52" height="52" fill="var(--color-accent)" opacity="0.55" />
        <rect x="144" y="84" width="52" height="52" fill="none" stroke="var(--color-border-subtle)" strokeWidth="2" />
        <text x="24" y="156" fontFamily="var(--font-technical)" fontSize="10" fill="var(--color-text-tertiary)" letterSpacing="2">
          TABLES — 02 ACTIVE
        </text>
      </g>
      {/* receipt panel */}
      <g>
        <rect x="216" y="24" width="160" height="180" fill="var(--color-bg-surface)" stroke="var(--color-border-subtle)" strokeWidth="2" />
        <rect x="232" y="44" width="90" height="10" fill="var(--color-text-secondary)" />
        <rect x="232" y="66" width="128" height="6" fill="var(--color-border-subtle)" />
        <rect x="232" y="80" width="104" height="6" fill="var(--color-border-subtle)" />
        <rect x="232" y="94" width="118" height="6" fill="var(--color-border-subtle)" />
        <rect x="232" y="108" width="88" height="6" fill="var(--color-border-subtle)" />
        <rect x="232" y="132" width="128" height="2" fill="var(--color-border-subtle)" />
        <rect x="232" y="144" width="70" height="8" fill="var(--color-text-secondary)" />
        <rect x="310" y="140" width="50" height="16" fill="var(--color-accent)" />
        <text x="216" y="224" fontFamily="var(--font-technical)" fontSize="10" fill="var(--color-text-tertiary)" letterSpacing="2">
          BILLING / RECEIPT
        </text>
      </g>
      {/* sql fragment */}
      <g fontFamily="var(--font-technical)" fontSize="11" fill="var(--color-text-secondary)">
        <text x="24" y="196">SELECT * FROM Orders</text>
        <text x="24" y="214">WHERE status = <tspan fill="var(--color-accent)">'OPEN'</tspan>;</text>
        <text x="24" y="232">EXEC sp_close_bill <tspan fill="var(--color-text-tertiary)">@table_04</tspan>;</text>
        <text x="24" y="262" fontSize="10" fill="var(--color-text-tertiary)" letterSpacing="2">
          SQL SERVER — STORED PROCEDURES
        </text>
      </g>
      {/* menu fragment */}
      <g>
        <rect x="216" y="240" width="160" height="2" fill="var(--color-border-subtle)" />
        <text x="216" y="262" fontFamily="var(--font-technical)" fontSize="10" fill="var(--color-text-tertiary)" letterSpacing="2">
          MENU — 24 ITEMS
        </text>
        <rect x="216" y="270" width="120" height="6" fill="var(--color-border-subtle)" />
        <rect x="344" y="270" width="32" height="6" fill="var(--color-accent)" opacity="0.7" />
      </g>
    </svg>
  );
}

function ExpenseVisual() {
  return (
    <svg
      viewBox="0 0 400 300"
      role="presentation"
      aria-hidden="true"
      style={{ display: 'block', width: '100%', height: 'auto' }}
    >
      {/* phone frame */}
      <g>
        <rect x="24" y="16" width="168" height="268" rx="14" fill="var(--color-bg-surface)" stroke="var(--color-border-subtle)" strokeWidth="2" />
        <rect x="44" y="40" width="128" height="14" fill="var(--color-text-secondary)" />
        <rect x="44" y="62" width="80" height="6" fill="var(--color-border-subtle)" />
        {/* expense rows */}
        <g>
          <circle cx="56" cy="104" r="10" fill="none" stroke="var(--color-accent)" strokeWidth="2" />
          <rect x="74" y="96" width="60" height="6" fill="var(--color-border-subtle)" />
          <rect x="74" y="106" width="40" height="6" fill="var(--color-border-subtle)" />
          <rect x="140" y="100" width="32" height="8" fill="var(--color-text-secondary)" />
          <circle cx="56" cy="140" r="10" fill="none" stroke="var(--color-border-subtle)" strokeWidth="2" />
          <rect x="74" y="132" width="60" height="6" fill="var(--color-border-subtle)" />
          <rect x="74" y="142" width="40" height="6" fill="var(--color-border-subtle)" />
          <rect x="140" y="136" width="32" height="8" fill="var(--color-text-secondary)" />
          <circle cx="56" cy="176" r="10" fill="var(--color-accent)" opacity="0.55" />
          <rect x="74" y="168" width="60" height="6" fill="var(--color-border-subtle)" />
          <rect x="74" y="178" width="40" height="6" fill="var(--color-border-subtle)" />
          <rect x="140" y="172" width="32" height="8" fill="var(--color-text-secondary)" />
        </g>
        <rect x="44" y="212" width="128" height="28" fill="var(--color-accent)" />
        <text x="108" y="231" textAnchor="middle" fontFamily="var(--font-technical)" fontSize="11" fill="var(--color-text-inverted)" letterSpacing="2">
          SPLIT
        </text>
        <text x="24" y="262" fontFamily="var(--font-technical)" fontSize="10" fill="var(--color-text-tertiary)" letterSpacing="2" transform="translate(0,22)">
          FLUTTER UI — EXPENSE ROWS
        </text>
      </g>
      {/* sync visual: local node, cloud node, donut */}
      <g>
        <circle cx="292" cy="80" r="34" fill="none" stroke="var(--color-border-subtle)" strokeWidth="10" />
        <circle
          cx="292"
          cy="80"
          r="34"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="10"
          strokeDasharray="140 214"
          strokeLinecap="round"
          transform="rotate(-90 292 80)"
        />
        <text x="292" y="84" textAnchor="middle" fontFamily="var(--font-technical)" fontSize="12" fill="var(--color-text-primary)">
          65%
        </text>
        <text x="292" y="140" textAnchor="middle" fontFamily="var(--font-technical)" fontSize="10" fill="var(--color-text-tertiary)" letterSpacing="2">
          SYNCED
        </text>
        {/* local / cloud nodes */}
        <rect x="224" y="176" width="56" height="40" fill="none" stroke="var(--color-border-subtle)" strokeWidth="2" />
        <text x="252" y="192" textAnchor="middle" fontFamily="var(--font-technical)" fontSize="9" fill="var(--color-text-secondary)">
          LOCAL
        </text>
        <text x="252" y="206" textAnchor="middle" fontFamily="var(--font-technical)" fontSize="9" fill="var(--color-text-tertiary)">
          SQLITE
        </text>
        <rect x="312" y="176" width="56" height="40" fill="var(--color-accent)" opacity="0.85" />
        <text x="340" y="192" textAnchor="middle" fontFamily="var(--font-technical)" fontSize="9" fill="var(--color-text-inverted)">
          CLOUD
        </text>
        <text x="340" y="206" textAnchor="middle" fontFamily="var(--font-technical)" fontSize="9" fill="var(--color-text-inverted)" opacity="0.8">
          SYNC
        </text>
        <line x1="280" y1="196" x2="312" y2="196" stroke="var(--color-accent)" strokeWidth="2" strokeDasharray="4 4" />
        <text x="296" y="260" textAnchor="middle" fontFamily="var(--font-technical)" fontSize="10" fill="var(--color-text-tertiary)" letterSpacing="2">
          OFFLINE-FIRST
        </text>
      </g>
    </svg>
  );
}
