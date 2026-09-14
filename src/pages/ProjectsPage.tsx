import { useMemo, useState } from 'react';
import { getProjectBySlug, projects } from '../data/projects';
import { useParams, Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

const FILTER_BUTTON_STYLE = {
  fontFamily: 'var(--font-technical)',
  fontSize: 'var(--text-xs)',
  letterSpacing: 'var(--tracking-wider)',
  textTransform: 'uppercase' as const,
  padding: 'var(--space-2) var(--space-4)',
  minHeight: '44px',
  border: 'var(--border-width-thin) solid var(--color-border-subtle)',
  borderRadius: 'var(--radius-full)',
  backgroundColor: 'var(--color-bg)',
  color: 'var(--color-text-secondary)',
  cursor: 'pointer',
};

export function ProjectsPage() {
  const { slug } = useParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTechnology, setActiveTechnology] = useState('all');
  const [query, setQuery] = useState('');

  const categories = useMemo(
    () => Array.from(new Set(projects.map((p) => p.category))),
    [],
  );
  const technologies = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.technologies))),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((project) => {
      if (activeCategory !== 'all' && project.category !== activeCategory) return false;
      if (activeTechnology !== 'all' && !project.technologies.includes(activeTechnology)) {
        return false;
      }
      if (!q) return true;
      const haystack = [project.title, project.shortDescription, project.description, ...project.technologies]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [activeCategory, activeTechnology, query]);

  if (slug) {
    const project = getProjectBySlug(slug);
    if (!project) {
      return (
        <div>
          <section style={{ paddingBlock: 'var(--section-gap)', paddingInline: 'var(--page-gutter)' }}>
            <p className="section-number">04</p>
            <h1 className="section-title">Not Found</h1>
            <p className="text-secondary" style={{ marginTop: 'var(--space-4)' }}>
              The project you are looking for does not exist.
            </p>
            <Link to="/projects" className="btn" style={{ marginTop: 'var(--space-6)' }}>
              ← Back to projects
            </Link>
          </section>
        </div>
      );
    }
    return (
      <div>
        <section style={{ paddingBlock: 'var(--section-gap)', paddingInline: 'var(--page-gutter)' }}>
          <p className="section-number">{String(project.year)}</p>
          <h1 className="section-title" style={{ marginTop: 'var(--space-2)' }}>
            {project.title}
          </h1>
          <div
            className="flex gap-2"
            style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-8)', flexWrap: 'wrap' }}
          >
            <span className="badge badge--accent">{project.category}</span>
            <span className="badge">{project.status}</span>
            {project.technologies.map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
          <p
            className="font-editorial"
            style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)' }}
          >
            {project.description}
          </p>
          <p className="text-tertiary" style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)' }}>
            Role — {project.role}
          </p>
          {project.problem && (
            <div style={{ marginTop: 'var(--space-16)' }}>
              <h2
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--weight-semibold)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Problem
              </h2>
              <p>{project.problem}</p>
            </div>
          )}
          {project.solution && (
            <div style={{ marginTop: 'var(--space-16)' }}>
              <h2
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--weight-semibold)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Solution
              </h2>
              <p>{project.solution}</p>
            </div>
          )}
          {project.architecture && (
            <div style={{ marginTop: 'var(--space-16)' }}>
              <h2
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--weight-semibold)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Architecture
              </h2>
              <p>{project.architecture}</p>
            </div>
          )}
          {project.challenges && project.challenges.length > 0 && (
            <div style={{ marginTop: 'var(--space-16)' }}>
              <h2
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--weight-semibold)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Challenges
              </h2>
              <ul className="list">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="list-item">
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.decisions && project.decisions.length > 0 && (
            <div style={{ marginTop: 'var(--space-16)' }}>
              <h2
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--weight-semibold)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Decisions &amp; trade-offs
              </h2>
              <ul className="list">
                {project.decisions.map((decision) => (
                  <li key={decision} className="list-item">
                    {decision}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex gap-4" style={{ marginTop: 'var(--space-8)', flexWrap: 'wrap' }}>
            {project.github && (
              <a href={project.github} className="btn">
                Repository →
              </a>
            )}
            {project.demo && (
              <a href={project.demo} className="btn btn--ghost">
                Demo →
              </a>
            )}
          </div>
          <Link
            to="/projects"
            style={{
              display: 'inline-block',
              marginTop: 'var(--space-16)',
              fontFamily: 'var(--font-technical)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-accent)',
            }}
          >
            ← Back to projects
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section style={{ paddingBlock: 'var(--section-gap)', paddingInline: 'var(--page-gutter)' }}>
        <Reveal>
          <p className="section-number">04</p>
        </Reveal>
        <Reveal stagger={1}>
          <h1 className="section-title" style={{ marginBottom: 'var(--space-8)' }}>
            Projects
          </h1>
        </Reveal>

        <Reveal stagger={2}>
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <label
              htmlFor="project-search"
              style={{
                display: 'block',
                fontFamily: 'var(--font-technical)',
                fontSize: 'var(--text-xs)',
                letterSpacing: 'var(--tracking-wider)',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                marginBottom: 'var(--space-2)',
              }}
            >
              Search
            </label>
            <input
              id="project-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter by title, description, technology…"
              style={{ maxWidth: 'var(--max-width-text)' }}
            />
          </div>
        </Reveal>

        <Reveal stagger={3}>
          <div style={{ marginBottom: 'var(--space-4)' }}>
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
              Category
            </p>
            <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
              <button
                type="button"
                aria-pressed={activeCategory === 'all'}
                onClick={() => setActiveCategory('all')}
                style={{
                  ...FILTER_BUTTON_STYLE,
                  borderColor: activeCategory === 'all' ? 'var(--color-accent)' : undefined,
                  color: activeCategory === 'all' ? 'var(--color-accent)' : undefined,
                }}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  style={{
                    ...FILTER_BUTTON_STYLE,
                    borderColor: activeCategory === category ? 'var(--color-accent)' : undefined,
                    color: activeCategory === category ? 'var(--color-accent)' : undefined,
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {technologies.length > 0 && (
          <Reveal stagger={4}>
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
                Technology
              </p>
              <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                <button
                  type="button"
                  aria-pressed={activeTechnology === 'all'}
                  onClick={() => setActiveTechnology('all')}
                  style={{
                    ...FILTER_BUTTON_STYLE,
                    borderColor: activeTechnology === 'all' ? 'var(--color-accent)' : undefined,
                    color: activeTechnology === 'all' ? 'var(--color-accent)' : undefined,
                  }}
                >
                  All
                </button>
                {technologies.map((technology) => (
                  <button
                    key={technology}
                    type="button"
                    aria-pressed={activeTechnology === technology}
                    onClick={() => setActiveTechnology(technology)}
                    style={{
                      ...FILTER_BUTTON_STYLE,
                      borderColor:
                        activeTechnology === technology ? 'var(--color-accent)' : undefined,
                      color: activeTechnology === technology ? 'var(--color-accent)' : undefined,
                    }}
                  >
                    {technology}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <p
          className="text-tertiary"
          role="status"
          style={{
            fontFamily: 'var(--font-technical)',
            fontSize: 'var(--text-xs)',
            marginBottom: 'var(--space-4)',
          }}
        >
          {filtered.length} of {projects.length} projects
        </p>

        <div className="flex flex-col gap-4">
          {filtered.map((project) => (
            <Reveal key={project.slug}>
              <Link
                to={`/projects/${project.slug}`}
                style={{
                  display: 'block',
                  padding: 'var(--space-6) 0',
                  borderBottom: 'var(--border-width-thin) solid var(--color-border-subtle)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'border-color var(--duration-fast) var(--ease-out-soft)',
                }}
              >
                <div
                  className="flex items-center gap-4"
                  style={{ marginBottom: 'var(--space-2)', flexWrap: 'wrap' }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-technical)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    {String(project.year)}
                  </span>
                  <span className="badge">{project.category}</span>
                  {project.featured && <span className="badge badge--accent">Featured</span>}
                </div>
                <h2
                  style={{
                    fontSize: 'var(--text-2xl)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 'var(--weight-bold)',
                  }}
                >
                  {project.title}
                </h2>
                <p className="text-secondary" style={{ fontSize: 'var(--text-sm)', marginTop: 'var(--space-2)' }}>
                  {project.shortDescription}
                </p>
              </Link>
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <div style={{ padding: 'var(--space-8) 0' }}>
              <p className="text-secondary">No projects match the current filters.</p>
              <button
                type="button"
                className="btn btn--ghost"
                style={{ marginTop: 'var(--space-4)' }}
                onClick={() => {
                  setActiveCategory('all');
                  setActiveTechnology('all');
                  setQuery('');
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
