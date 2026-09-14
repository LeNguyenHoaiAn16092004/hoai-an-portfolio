import { experiments } from '../data/experiments';
import { Reveal } from '../components/Reveal';

export function LabPage() {
  return (
    <div>
      <section style={{ paddingBlock: 'var(--section-gap)', paddingInline: 'var(--page-gutter)' }}>
        <Reveal>
          <p className="section-number">06</p>
        </Reveal>
        <Reveal stagger={1}>
          <h1 className="section-title" style={{ marginBottom: 'var(--space-8)' }}>
            Lab
          </h1>
        </Reveal>
        <Reveal stagger={2}>
          <p
            className="font-editorial"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-8)',
            }}
          >
            Experiments and unfinished ideas.
          </p>
          <div
            aria-hidden="true"
            style={{
              height: '8px',
              marginBottom: 'var(--space-8)',
              background:
                'repeating-linear-gradient(-45deg, var(--color-accent) 0 12px, transparent 12px 24px)',
              opacity: 0.55,
            }}
          />
          <p
            className="text-tertiary"
            style={{
              fontFamily: 'var(--font-technical)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
              marginBottom: 'var(--space-16)',
            }}
          >
            Bench status: {experiments.length === 0 ? 'empty — awaiting first experiment' : 'open'}
          </p>
        </Reveal>
        {experiments.length === 0 ? (
          <Reveal stagger={3}>
            <div
              style={{
                padding: 'var(--space-16) 0',
                borderTop: 'var(--border-width-thin) solid var(--color-border-subtle)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-technical)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-accent)',
                  letterSpacing: 'var(--tracking-wider)',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Empty bench
              </p>
              <p className="text-secondary" style={{ maxWidth: 'var(--max-width-text)' }}>
                Nothing published yet. The lab opens when there is a real experiment to show —
                prototypes and technical sketches, clearly marked as unfinished.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="flex flex-col gap-4">
            {experiments.map((exp) => (
              <Reveal key={exp.slug}>
                <div
                  style={{
                    padding: 'var(--space-6) 0',
                    borderBottom: 'var(--border-width-thin) solid var(--color-border-subtle)',
                  }}
                >
                  <div
                    className="flex items-center gap-2"
                    style={{ marginBottom: 'var(--space-2)', flexWrap: 'wrap' }}
                  >
                    <span className="badge">{exp.category}</span>
                    <span className="badge badge--accent">{exp.status}</span>
                  </div>
                  <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)' }}>
                    {exp.title}
                  </h2>
                  <p
                    className="text-tertiary"
                    style={{ fontSize: 'var(--text-sm)', marginTop: 'var(--space-1)' }}
                  >
                    {exp.date}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
