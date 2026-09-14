import { Suspense, lazy, useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { MetaBlock } from '../components/MetaBlock';
import { ProjectVisual } from '../components/ProjectVisual';
import { profile } from '../data/profile';
import { getFeaturedProjects } from '../data/projects';
import { experiments } from '../data/experiments';
import { notes } from '../data/notes';

const Hero3D = lazy(() => import('../3d/Hero3D'));

const PROJECT_KEYWORDS: Record<string, string[]> = {
  'cafe-management-system': ['SQL', 'BILLING', 'REPORTING'],
  'group-expense-app': ['OFFLINE', 'SYNC', 'EXPENSES'],
};

const PROJECT_VISUALS: Record<string, 'cafe' | 'expense'> = {
  'cafe-management-system': 'cafe',
  'group-expense-app': 'expense',
};

const CURRENTLY = [
  { index: '01', text: 'Building backend systems' },
  { index: '02', text: 'Working with C# / .NET' },
  { index: '03', text: 'Exploring databases and system design' },
  { index: '04', text: 'Learning through projects' },
];

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

export function HomePage() {
  const [renderedAt] = useState(() => new Date());
  const hcmTime = formatHcmTime(renderedAt);
  const featured = getFeaturedProjects();
  const latestExperiments = experiments.slice(0, 2);
  const latestNotes = notes.slice(0, 2);

  return (
    <div>
      {/* ── HERO — asymmetric two-zone composition ─────────────────── */}
      <section aria-label="Introduction">
        <div className="hero-grid">
          <div style={{ minWidth: 0 }}>
            <Reveal>
              <p
                style={{
                  fontFamily: 'var(--font-technical)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: 'var(--tracking-widest)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                <span className="status-dot" aria-hidden="true" />
                SYSTEM_READY · NODE_001
                <span aria-hidden="true" style={{ float: 'right', color: 'var(--color-text-tertiary)' }}>
                  BUILD_2026
                </span>
              </p>
            </Reveal>
            <Reveal stagger={1}>
              <h1
                className="section-title"
                style={{ lineHeight: 0.95, letterSpacing: 'var(--tracking-tight)' }}
              >
                HOÀI
                <br />
                AN
              </h1>
            </Reveal>
            <Reveal stagger={2}>
              <p
                className="font-editorial"
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--color-text-secondary)',
                  marginTop: 'var(--space-6)',
                  maxWidth: '32ch',
                  lineHeight: 'var(--leading-snug)',
                }}
              >
                {profile.shortIntroduction}
              </p>
            </Reveal>
            <Reveal stagger={3}>
              <div className="flex gap-2" style={{ marginTop: 'var(--space-6)', flexWrap: 'wrap' }}>
                <span className="badge badge--accent">C#</span>
                <span className="badge">.NET</span>
                <span className="badge">SQL Server</span>
                <span className="badge">React</span>
              </div>
            </Reveal>
            <Reveal stagger={4}>
              <div className="flex gap-4" style={{ marginTop: 'var(--space-8)', flexWrap: 'wrap' }}>
                <a href="#work" className="btn btn--accent">
                  Selected work ↓
                </a>
                <Link to="/contact" className="btn btn--ghost">
                  Contact →
                </Link>
              </div>
            </Reveal>
            <Reveal stagger={4}>
              <div className="hero-meta-grid">
                <MetaBlock label="SYSTEM" value="001" sub="LOCAL_INSTANCE" />
                <MetaBlock
                  label="LOCATION"
                  value="HO CHI MINH CITY / VN"
                  sub={hcmTime ? `${hcmTime} LOCAL` : undefined}
                />
                <MetaBlock label="FOCUS" value="BACKEND / .NET" sub="BACKEND_MODE" />
                <MetaBlock label="STACK" value="C# / SQL / API" sub="STACK_LOADED" />
              </div>
            </Reveal>
          </div>

          <div className="hero-visual">
            <Reveal stagger={2}>
              <div className="hero-frame">
                <span
                  className="hero-annotation hero-annotation--hide-mobile"
                  aria-hidden="true"
                  style={{ top: '-10px', right: 'var(--space-6)', backgroundColor: 'var(--color-bg)', paddingInline: 'var(--space-2)' }}
                >
                  NODE_03 ↗
                </span>
                <div className="hero-3d-container" aria-label="Procedural workshop artifact">
                  <Suspense
                    fallback={
                      <div
                        style={{
                          height: '100%',
                          backgroundColor: 'var(--color-bg-subtle)',
                          borderRadius: 'var(--radius-lg)',
                        }}
                      />
                    }
                  >
                    <Hero3D />
                  </Suspense>
                </div>
                <span
                  className="hero-annotation"
                  aria-hidden="true"
                  style={{ bottom: '-10px', left: 'var(--space-6)', backgroundColor: 'var(--color-bg)', paddingInline: 'var(--space-2)' }}
                >
                  FIG. 01 — WORKSHOP ARTIFACT
                </span>
              </div>
            </Reveal>
            <Reveal stagger={3}>
              <p
                className="text-tertiary"
                style={{
                  fontFamily: 'var(--font-technical)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: 'var(--tracking-wider)',
                  marginTop: 'var(--space-4)',
                }}
              >
                ARTIFACT_01 — PROCEDURAL / R3F / LAZY ·{' '}
                <span aria-hidden="true" style={{ float: 'right' }}>
                  SIGNAL_ACTIVE
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 01 IDENTITY + technical profile ────────────────────────── */}
      <section
        style={{
          paddingBlock: 'var(--section-gap)',
          paddingInline: 'var(--page-gutter)',
          borderTop: 'var(--border-width-thin) solid var(--color-border-subtle)',
        }}
      >
        <Reveal>
          <p className="section-number" style={{ marginBottom: 'var(--space-8)' }}>
            01 — Identity
          </p>
        </Reveal>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-12)',
          }}
        >
          <Reveal stagger={1}>
            <div style={{ maxWidth: 'var(--max-width-text)' }}>
              <p
                style={{
                  fontFamily: 'var(--font-technical)',
                  fontSize: 'var(--text-sm)',
                  letterSpacing: 'var(--tracking-widest)',
                  color: 'var(--color-accent)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                {profile.name.toUpperCase()}
              </p>
              <p
                className="font-editorial"
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--color-text-primary)',
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                Interested in building practical software, understanding how systems work, and
                learning through implementation.
              </p>
            </div>
          </Reveal>
          <Reveal stagger={2}>
            <div className="profile-grid">
              <MetaBlock label="FOCUS" value="Backend Engineering" />
              <MetaBlock label="PRIMARY" value="C# / .NET" />
              <MetaBlock label="DATABASE" value="SQL Server" />
              <MetaBlock label="EDUCATION" value="IT / 2026" />
              <MetaBlock label="GPA" value={profile.gpa ?? '—'} />
              <MetaBlock label="CERTIFICATION" value="TOEIC 830" sub="ENGLISH" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 02 SELECTED WORK — editorial sequence ──────────────────── */}
      <section
        id="work"
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
              marginBottom: 'var(--space-4)',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--weight-black)',
              lineHeight: 'var(--leading-tight)',
            }}
          >
            Projects
          </h2>
        </Reveal>
        <Reveal stagger={1}>
          <p
            className="text-tertiary"
            style={{
              fontFamily: 'var(--font-technical)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-wider)',
              marginBottom: 'var(--space-16)',
            }}
          >
            {String(featured.length).padStart(2, '0')} VERIFIED · ARCHIVE_02
          </p>
        </Reveal>

        {featured.map((project, i) => {
          const flip = i % 2 === 1;
          const keywords = PROJECT_KEYWORDS[project.slug] ?? [];
          return (
            <article
              key={project.slug}
              className={flip ? 'feature-grid feature-grid--flip' : 'feature-grid'}
              style={{ marginBottom: i < featured.length - 1 ? 'var(--section-gap)' : 'var(--space-16)' }}
            >
              <Reveal>
                <div className={flip ? 'feature-visual-offset' : undefined}>
                  <ProjectVisual variant={PROJECT_VISUALS[project.slug] ?? 'cafe'} />
                </div>
              </Reveal>
              <Reveal stagger={1}>
                <div style={{ minWidth: 0 }}>
                  <p className="index-numeral" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3
                    style={{
                      fontSize: 'var(--text-2xl)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 'var(--weight-bold)',
                      marginTop: 'var(--space-2)',
                    }}
                  >
                    <Link
                      to={`/projects/${project.slug}`}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p
                    className="text-tertiary"
                    style={{
                      fontFamily: 'var(--font-technical)',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: 'var(--tracking-wider)',
                      marginTop: 'var(--space-2)',
                    }}
                  >
                    {project.technologies.join(' / ').toUpperCase()}
                  </p>
                  <p className="text-secondary" style={{ marginTop: 'var(--space-4)', maxWidth: '52ch' }}>
                    {project.shortDescription}
                  </p>
                  {keywords.length > 0 && (
                    <p className="keyword-strip" style={{ marginTop: 'var(--space-4)' }} aria-label="Key areas">
                      {keywords.map((k) => (
                        <span key={k}>{k}</span>
                      ))}
                    </p>
                  )}
                  <Link
                    to={`/projects/${project.slug}`}
                    className="text-accent"
                    style={{ display: 'inline-block', marginTop: 'var(--space-6)', fontSize: 'var(--text-sm)' }}
                  >
                    Open case study →
                  </Link>
                </div>
              </Reveal>
            </article>
          );
        })}
        <Reveal>
          <Link to="/projects" className="btn btn--lg">
            Full archive
          </Link>
        </Reveal>
      </section>

      {/* ── 03 CURRENTLY ───────────────────────────────────────────── */}
      <section
        style={{
          paddingBlock: 'var(--section-gap)',
          paddingInline: 'var(--page-gutter)',
          borderTop: 'var(--border-width-thin) solid var(--color-border-subtle)',
        }}
      >
        <Reveal>
          <p className="section-number" style={{ marginBottom: 'var(--space-8)' }}>
            03 — Currently
          </p>
        </Reveal>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: 'var(--space-8) var(--space-12)',
          }}
          className="currently-grid"
        >
          {CURRENTLY.map((item, i) => (
            <Reveal key={item.index} stagger={i as 0 | 1 | 2 | 3}>
              <div
                style={{
                  borderTop: 'var(--border-width-thick) solid var(--color-border)',
                  paddingTop: 'var(--space-3)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-technical)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-accent)',
                    letterSpacing: 'var(--tracking-widest)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  {item.index}
                </p>
                <p style={{ fontSize: 'var(--text-md)', color: 'var(--color-text-primary)' }}>
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 04 THINKING — lab + notes previews ─────────────────────── */}
      <section
        style={{
          paddingBlock: 'var(--section-gap)',
          paddingInline: 'var(--page-gutter)',
          borderTop: 'var(--border-width-thin) solid var(--color-border-subtle)',
        }}
      >
        <Reveal>
          <p className="section-number" style={{ marginBottom: 'var(--space-8)' }}>
            04 — Thinking
          </p>
        </Reveal>
        <Reveal stagger={1}>
          <div className="flex gap-8" style={{ flexWrap: 'wrap' }}>
            <div style={{ minWidth: '220px', flex: '1 1 220px' }}>
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
              {latestExperiments.length > 0 ? (
                latestExperiments.map((exp) => (
                  <p key={exp.slug} className="text-tertiary" style={{ fontSize: 'var(--text-sm)' }}>
                    {exp.title}
                  </p>
                ))
              ) : (
                <p className="text-tertiary" style={{ fontSize: 'var(--text-sm)' }}>
                  Bench empty — awaiting first experiment
                </p>
              )}
              <Link to="/lab" className="text-accent" style={{ fontSize: 'var(--text-sm)' }}>
                Experiments and prototypes →
              </Link>
            </div>
            <div style={{ minWidth: '220px', flex: '1 1 220px' }}>
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

      {/* ── 05 CONNECT ─────────────────────────────────────────────── */}
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
          <div className="flex gap-4" style={{ marginTop: 'var(--space-4)', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn--lg">
              Contact
            </Link>
            {profile.links.github && (
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn btn--lg btn--ghost">
                GitHub ↗
              </a>
            )}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
