import { experiments } from '../data/experiments';

export function LabPage() {
   return (
      <div>
         <section style={{ paddingBlock: 'var(--section-gap)', paddingInline: 'var(--page-gutter)' }}>
            <p className="section-number">06</p>
            <h1 className="section-title" style={{ marginBottom: 'var(--space-8)' }}>Lab</h1>
            <p
               className="font-editorial"
               style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--space-16)',
               }}
            >
               Experiments and unfinished ideas.
            </p>
            <div className="flex flex-col gap-4">
               {experiments.map((exp) => (
                  <div
                     key={exp.slug}
                     style={{
                        padding: 'var(--space-6) 0',
                        borderBottom: 'var(--border-width-thin) solid var(--color-border-subtle)',
                     }}
                  >
                     <div className="flex items-center gap-2" style={{ marginBottom: 'var(--space-2)' }}>
                        <span className="badge">{exp.category}</span>
                        <span className="badge badge--accent">{exp.status}</span>
                     </div>
                     <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)' }}>{exp.title}</h2>
                     <p className="text-tertiary" style={{ fontSize: 'var(--text-sm)', marginTop: 'var(--space-1)' }}>{exp.date}</p>
                  </div>
               ))}
            </div>
         </section>
      </div>
   );
}
