import { profile } from '../data/profile';

export function ContactPage() {
   return (
      <div>
         <section style={{ paddingBlock: 'var(--section-gap)', paddingInline: 'var(--page-gutter)' }}>
            <p className="section-number">08</p>
            <h1 className="section-title" style={{ marginBottom: 'var(--space-8)' }}>Contact</h1>
            <p
               className="font-editorial"
               style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--space-16)',
                  maxWidth: 'var(--max-width-text)',
               }}
            >
               Let's work together.
            </p>
            <div style={{ maxWidth: 'var(--max-width-text)' }}>
               <div style={{ marginBottom: 'var(--space-8)' }}>
                 <label
                    style={{
                       fontFamily: 'var(--font-technical)',
                       fontSize: 'var(--text-xs)',
                       letterSpacing: 'var(--tracking-wider)',
                       textTransform: 'uppercase',
                       color: 'var(--color-accent)',
                       display: 'block',
                       marginBottom: 'var(--space-2)',
                    }}
                 >
                    Email
                 </label>
                 <a href={`mailto:${profile.links.email || '[PLACEHOLDER]'}`} style={{ color: 'var(--color-text-primary)' }}>
                    {profile.links.email || '[PLACEHOLDER — verify email]'}
                 </a>
               </div>
               <div style={{ marginBottom: 'var(--space-8)' }}>
                 <label
                    style={{
                       fontFamily: 'var(--font-technical)',
                       fontSize: 'var(--text-xs)',
                       letterSpacing: 'var(--tracking-wider)',
                       textTransform: 'uppercase',
                       color: 'var(--color-accent)',
                       display: 'block',
                       marginBottom: 'var(--space-2)',
                    }}
                 >
                    GitHub
                 </label>
                 <a href={profile.links.github || '#'} style={{ color: 'var(--color-text-primary)' }}>
                    {profile.links.github || '[PLACEHOLDER — verify GitHub]'}
                 </a>
               </div>
               <div style={{ marginBottom: 'var(--space-8)' }}>
                 <label
                    style={{
                       fontFamily: 'var(--font-technical)',
                       fontSize: 'var(--text-xs)',
                       letterSpacing: 'var(--tracking-wider)',
                       textTransform: 'uppercase',
                       color: 'var(--color-accent)',
                       display: 'block',
                       marginBottom: 'var(--space-2)',
                    }}
                 >
                    LinkedIn
                 </label>
                 <a href={profile.links.linkedin || '#'} style={{ color: 'var(--color-text-primary)' }}>
                    {profile.links.linkedin || '[PLACEHOLDER — verify LinkedIn]'}
                 </a>
               </div>
               <div style={{ marginBottom: 'var(--space-8)' }}>
                 <label
                    style={{
                       fontFamily: 'var(--font-technical)',
                       fontSize: 'var(--text-xs)',
                       letterSpacing: 'var(--tracking-wider)',
                       textTransform: 'uppercase',
                       color: 'var(--color-accent)',
                       display: 'block',
                       marginBottom: 'var(--space-2)',
                    }}
                 >
                    CV
                 </label>
                 <a href={profile.links.cv || '#'} style={{ color: 'var(--color-text-primary)' }}>
                    {profile.links.cv || '[PLACEHOLDER — verify CV]'}
                 </a>
               </div>
            </div>
         </section>
      </div>
   );
}
