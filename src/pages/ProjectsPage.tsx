import { getFeaturedProjects, getProjectBySlug } from '../data/projects';
import { useParams, Link } from 'react-router-dom';

export function ProjectsPage() {
   const { slug } = useParams();

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
               <h1 className="section-title" style={{ marginTop: 'var(--space-2)' }}>{project.title}</h1>
               <div className="flex gap-2" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
                  {project.technologies.map((tech) => (
                     <span key={tech} className="badge">{tech}</span>
                  ))}
               </div>
               <p className="font-editorial" style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)' }}>
                  {project.description}
               </p>
               {project.problem && (
                  <div style={{ marginTop: 'var(--space-16)' }}>
                     <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-4)' }}>Problem</h2>
                     <p>{project.problem}</p>
                  </div>
               )}
               {project.solution && (
                  <div style={{ marginTop: 'var(--space-16)' }}>
                     <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-4)' }}>Solution</h2>
                     <p>{project.solution}</p>
                  </div>
               )}
               {project.architecture && (
                  <div style={{ marginTop: 'var(--space-16)' }}>
                     <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-4)' }}>Architecture</h2>
                     <p>{project.architecture}</p>
                  </div>
               )}
               {project.github && (
                  <a href={project.github} className="btn" style={{ marginTop: 'var(--space-8)' }}>
                     Repository →
                  </a>
               )}
               {project.demo && (
                  <a href={project.demo} className="btn btn--ghost" style={{ marginTop: 'var(--space-4)', marginLeft: 'var(--space-4)' }}>
                     Demo →
                  </a>
               )}
            </section>
         </div>
      );
   }

   const featured = getFeaturedProjects();

   return (
      <div>
         <section style={{ paddingBlock: 'var(--section-gap)', paddingInline: 'var(--page-gutter)' }}>
            <p className="section-number">04</p>
            <h1 className="section-title" style={{ marginBottom: 'var(--space-8)' }}>Projects</h1>
            <div className="flex flex-col gap-4">
               {featured.map((project) => (
                  <Link
                     key={project.slug}
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
                     <div className="flex items-center gap-4" style={{ marginBottom: 'var(--space-2)' }}>
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
                     <p
                        className="text-secondary"
                        style={{
                           fontSize: 'var(--text-sm)',
                           marginTop: 'var(--space-2)',
                        }}
                     >
                        {project.shortDescription}
                     </p>
                  </Link>
               ))}
            </div>
         </section>
      </div>
   );
}
