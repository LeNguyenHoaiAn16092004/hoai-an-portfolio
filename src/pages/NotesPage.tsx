import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { notes } from '../data/notes';
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

function NoteDetail({ slug }: { slug: string }) {
  const note = notes.find((n) => n.slug === slug);

  if (!note) {
    return (
      <div>
        <section style={{ paddingBlock: 'var(--section-gap)', paddingInline: 'var(--page-gutter)' }}>
          <p className="section-number">07</p>
          <h1 className="section-title">Not Found</h1>
          <p className="text-secondary" style={{ marginTop: 'var(--space-4)' }}>
            The note you are looking for does not exist.
          </p>
          <Link to="/notes" className="btn" style={{ marginTop: 'var(--space-6)' }}>
            ← Back to notes
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section
        style={{
          paddingBlock: 'var(--section-gap)',
          paddingInline: 'var(--page-gutter)',
          maxWidth: 'var(--max-width-text)',
        }}
      >
        <div className="flex gap-2" style={{ marginBottom: 'var(--space-4)', flexWrap: 'wrap' }}>
          <span className="badge badge--accent">{note.category}</span>
          <span className="badge">Draft</span>
        </div>
        <h1 className="section-title" style={{ marginBottom: 'var(--space-4)' }}>
          {note.title}
        </h1>
        <p
          className="text-tertiary"
          style={{ fontFamily: 'var(--font-technical)', fontSize: 'var(--text-sm)' }}
        >
          {note.date}
          {typeof note.readingTime === 'number' ? ` · ${String(note.readingTime)} min read` : ''}
        </p>
        <p
          className="font-editorial"
          style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--color-text-secondary)',
            marginTop: 'var(--space-8)',
            lineHeight: 'var(--leading-relaxed)',
          }}
        >
          {note.summary}
        </p>
        <div className="flex gap-2" style={{ marginTop: 'var(--space-6)', flexWrap: 'wrap' }}>
          {note.tags.map((tag) => (
            <span key={tag} className="badge">
              #{tag}
            </span>
          ))}
        </div>
        <hr />
        <p className="text-tertiary" style={{ fontSize: 'var(--text-sm)' }}>
          The full article body is a draft and has not been published yet. The summary above
          describes the intended topic — no claims are made beyond it.
        </p>
        <Link
          to="/notes"
          style={{
            display: 'inline-block',
            marginTop: 'var(--space-8)',
            fontFamily: 'var(--font-technical)',
            fontSize: 'var(--text-sm)',
            color: 'var(--color-accent)',
          }}
        >
          ← Back to notes
        </Link>
      </section>
    </div>
  );
}

export function NotesPage() {
  const { slug } = useParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');

  const categories = useMemo(() => Array.from(new Set(notes.map((n) => n.category))), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return notes.filter((note) => {
      if (activeCategory !== 'all' && note.category !== activeCategory) return false;
      if (!q) return true;
      const haystack = [note.title, note.summary, ...note.tags].join(' ').toLowerCase();
      return haystack.includes(q);
    });
  }, [activeCategory, query]);

  if (slug) {
    return <NoteDetail slug={slug} />;
  }

  return (
    <div>
      <section style={{ paddingBlock: 'var(--section-gap)', paddingInline: 'var(--page-gutter)' }}>
        <Reveal>
          <p className="section-number">07</p>
        </Reveal>
        <Reveal stagger={1}>
          <h1 className="section-title" style={{ marginBottom: 'var(--space-8)' }}>
            Notes
          </h1>
        </Reveal>

        <Reveal stagger={2}>
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <label
              htmlFor="notes-search"
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
              id="notes-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter by title, summary, tag…"
              style={{ maxWidth: 'var(--max-width-text)' }}
            />
          </div>
        </Reveal>

        <Reveal stagger={3}>
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

        <p
          className="text-tertiary"
          role="status"
          style={{ fontFamily: 'var(--font-technical)', fontSize: 'var(--text-xs)', marginBottom: 'var(--space-4)' }}
        >
          {filtered.length} of {notes.length} notes
        </p>

        <div className="flex flex-col gap-4">
          {filtered.map((note) => (
            <Reveal key={note.slug}>
              <Link
                to={`/notes/${note.slug}`}
                style={{
                  display: 'block',
                  padding: 'var(--space-6) 0',
                  borderBottom: 'var(--border-width-thin) solid var(--color-border-subtle)',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div className="flex gap-2" style={{ marginBottom: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span className="badge">{note.category}</span>
                  <span className="badge badge--accent">Draft</span>
                </div>
                <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)' }}>
                  {note.title}
                </h2>
                <p className="text-secondary" style={{ fontSize: 'var(--text-sm)', marginTop: 'var(--space-2)' }}>
                  {note.summary}
                </p>
                <p className="text-tertiary" style={{ fontSize: 'var(--text-sm)', marginTop: 'var(--space-1)' }}>
                  {note.date}
                  {typeof note.readingTime === 'number'
                    ? ` · ${String(note.readingTime)} min read`
                    : ''}
                </p>
              </Link>
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <div style={{ padding: 'var(--space-8) 0' }}>
              <p className="text-secondary">No notes match the current filters.</p>
              <button
                type="button"
                className="btn btn--ghost"
                style={{ marginTop: 'var(--space-4)' }}
                onClick={() => {
                  setActiveCategory('all');
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
