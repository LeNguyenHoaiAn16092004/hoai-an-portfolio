import { Suspense, lazy, useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { profile } from '../data/profile';
import { getFeaturedProjects } from '../data/projects';
import { experiments } from '../data/experiments';
import { notes } from '../data/notes';

const Hero3D = lazy(() => import('../3d/Hero3D'));

function formatHcmTime(date: Date): string {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Ho_Chi_Minh',
    }).format(date);
  } catch {
    return '';
  }
}

function StatusMetadata() {
  const [renderedAt] = useState(() => new Date());
  const time = formatHcmTime(renderedAt);

  return (
    <p
      className="text-tertiary"
      style={{
        fontFamily: 'var(--font-technical)',
        fontSize: 'var(--text-xs)',
        letterSpacing: 'var(--tracking-wider)',
        textTransform: 'uppercase',
      }}
    >
      {profile.location}
      {time ? ` — ${time} local` : ''} · Backend · C# · .NET
    </p>
  );
}

export function HomePage() {
  const featured = getFeaturedProjects();
  const latestExperiments = experiments.slice(0, 2);
  const latestNotes = notes.slice(0, 2);

  return (
    <div>
      <section className="anim-slide-up" aria-label="Interactive artifact">
        <div className="hero-3d-container">
          <Suspense
            fallback={
              <div
                style={{
                  height: '400px',
                  backgroundColor: 'var(--color-bg-subtle)',
                  borderRadius: 'var(--radius-lg)',
                }}
              />
            }
          >
            <Hero3D />
          </Suspense>
        </div>
      </section>

      <section style={{ paddingBlock: 'var(--section-gap)', paddingInline: 'var(--page-gutter)' }}>
        <Reveal>
          <p className="section-number" style={{ marginBottom: 'var(--space-4)' }}>
            01 — Identity
          </p>
        </Reveal>
        <Reveal stagger={1}>
          <h1
            className="section-title"
            style={{ marginBottom: 'var(--space-6)', lineHeight: 'var(--leading-tight)' }}
          >
            Hoài An
          </h1>
        </Reveal>
        <Reveal stagger={2}>
          <p
            style={{
              fontSize: 'var(--text-2xl)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-8)',
              fontFamily: 'var(--font-editorial)',
              fontWeight: 'var(--weight-regular)',
            }}
          >
            {profile.shortIntroduction}
          </p>
        </Reveal>
        <Reveal stagger={3}>
          <div className="flex gap-2" style={{ marginBottom: 'var(--space-8)', flexWrap: 'wrap' }}>
            <span className="badge badge--accent">C#</span>
            <span className="badge">.NET</span>
            <span className="badge">SQL Server</span>
            <span className="badge">TypeScript</span>
            <span className="badge">React</span>
          </div>
        </Reveal>
        <Reveal stagger={4}>
          <StatusMetadata />
        </Reveal>
      </section>

      <section
        style={{
          paddingBlock: 'var(--section-gap)',
          paddingInline: 'var(--page-gutter)',
          borderTop: 'var(--border-width-thin) solid var(--color-border-subtle)',
        }}
      >
        <Reveal>
          <p className="section-number" style={{ marginBottom: 'var(--space-2)' }}>
            02 — Selected Work
          </p>
        </Reveal>
        <Reveal stagger={1}>
          <h2
            style={{
              fontSize: 'var(--text-4xl)',
              marginBottom: 'var(--space-8)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--weight-black)',
              lineHeight: 'var(--leading-tight)',
            }}
          >
            Projects
          </h2>
        </Reveal>
        {featured.map((project) => (
          <Reveal key={project.slug} stagger={2}>
            <Link
              to={`/projects/${project.slug}`}
              style={{
                display: 'block',
                padding: 'var(--space-6) 0',
                borderBottom: 'var(--border-width-thin) solid var(--color-border-subtle)',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div className="flex items-center gap-4" style={{ marginBottom: 'var(--space-2)' }}>
                {project.year !== undefined && (
                  <span
                    style={{
                      fontFamily: 'var(--font-technical)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    {String(project.year)}
                  </span>
                )}
                <span className="badge">{project.category}</span>
              </div>
              <h3
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 'var(--weight-bold)',
                }}
              >
                {project.title}
              </h3>
              <p className="text-secondary" style={{ fontSize: 'var(--text-sm)', marginTop: 'var(--space-2)' }}>
                {project.shortDescription}
              </p>
            </Link>
          </Reveal>
        ))}
        <Reveal stagger={3}>
          <Link to="/projects" className="btn btn--lg" style={{ marginTop: 'var(--space-8)' }}>
            View all projects
          </Link>
        </Reveal>
      </section>

      <section
        style={{
          paddingBlock: 'var(--section-gap)',
          paddingInline: 'var(--page-gutter)',
          borderTop: 'var(--border-width-thin) solid var(--color-border-subtle)',
        }}
      >
        <Reveal>
          <p className="section-number" style={{ marginBottom: 'var(--space-2)' }}>
            03 — Profile
          </p>
        </Reveal>
        <Reveal stagger={1}>
          <p
            className="font-editorial"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              maxWidth: 'var(--max-width-text)',
              lineHeight: 'var(--leading-relaxed)',
              marginBottom: 'var(--space-6)',
            }}
          >
            {profile.longIntroduction}
          </p>
        </Reveal>
        <Reveal stagger={2}>
          <Link to="/about" className="text-accent" style={{ fontSize: 'var(--text-sm)' }}>
            More about me →
          </Link>
        </Reveal>
      </section>

      <section
        style={{
          paddingBlock: 'var(--section-gap)',
          paddingInline: 'var(--page-gutter)',
          borderTop: 'var(--border-width-thin) solid var(--color-border-subtle)',
        }}
      >
        <Reveal>
          <p className="section-number" style={{ marginBottom: 'var(--space-2)' }}>
            04 — Thinking
          </p>
        </Reveal>
        <Reveal stagger={1}>
          <div className="flex gap-8" style={{ marginBottom: 'var(--space-8)', flexWrap: 'wrap' }}>
            {latestExperiments.length > 0 && (
              <div>
                <h3
                  style={{
                    fontSize: 'var(--text-xl)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 'var(--weight-bold)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  Lab
                </h3>
                {latestExperiments.map((exp) => (
                  <p key={exp.slug} className="text-tertiary" style={{ fontSize: 'var(--text-sm)' }}>
                    {exp.title}
                  </p>
                ))}
                <Link to="/lab" className="text-accent" style={{ fontSize: 'var(--text-sm)' }}>
                  Experiments and prototypes →
                </Link>
              </div>
            )}
            <div>
              <h3
                style={{
                  fontSize: 'var(--text-xl)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 'var(--weight-bold)',
                  marginBottom: 'var(--space-2)',
                }}
              >
                Notes
              </h3>
              {latestNotes.map((note) => (
                <p key={note.slug} className="text-tertiary" style={{ fontSize: 'var(--text-sm)' }}>
                  {note.title}
                </p>
              ))}
              <Link to="/notes" className="text-accent" style={{ fontSize: 'var(--text-sm)' }}>
                Technical writing →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        style={{
          paddingBlock: 'var(--section-gap)',
          paddingInline: 'var(--page-gutter)',
          borderTop: 'var(--border-width-thin) solid var(--color-border-subtle)',
        }}
      >
        <Reveal>
          <p className="section-number" style={{ marginBottom: 'var(--space-2)' }}>
            05 — Connect
          </p>
        </Reveal>
        <Reveal stagger={1}>
          <h2
            style={{
              fontSize: 'var(--text-4xl)',
              marginBottom: 'var(--space-4)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--weight-black)',
              lineHeight: 'var(--leading-tight)',
            }}
          >
            Get in touch
          </h2>
        </Reveal>
        <Reveal stagger={2}>
          <Link to="/contact" className="btn btn--lg" style={{ marginTop: 'var(--space-4)' }}>
            Contact
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
