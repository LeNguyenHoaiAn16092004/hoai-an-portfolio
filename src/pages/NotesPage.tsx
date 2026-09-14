import { notes } from '../data/notes';

export function NotesPage() {
   return (
      <div>
         <section style={{ paddingBlock: 'var(--section-gap)', paddingInline: 'var(--page-gutter)' }}>
            <p className="section-number">07</p>
            <h1 className="section-title" style={{ marginBottom: 'var(--space-8)' }}>Notes</h1>
            <div className="flex flex-col gap-4">
               {notes.map((note) => (
                  <div
                     key={note.slug}
                     style={{
                        padding: 'var(--space-6) 0',
                        borderBottom: 'var(--border-width-thin) solid var(--color-border-subtle)',
                     }}
                  >
                     <span className="badge" style={{ marginBottom: 'var(--space-2)' }}>{note.category}</span>
                     <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)' }}>{note.title}</h2>
                     <p className="text-tertiary" style={{ fontSize: 'var(--text-sm)' }}>{note.date}</p>
                  </div>
               ))}
            </div>
         </section>
      </div>
   );
}
