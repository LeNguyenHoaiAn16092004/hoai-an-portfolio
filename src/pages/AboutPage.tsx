import { profile } from '../data/profile';

export function AboutPage() {
   return (
      <div>
         <section style={{ paddingBlock: 'var(--section-gap)', paddingInline: 'var(--page-gutter)' }}>
            <p className="section-number">05</p>
            <h1 className="section-title" style={{ marginBottom: 'var(--space-8)' }}>About</h1>

            <div style={{ marginBottom: 'var(--space-16)' }}>
               <p className="font-editorial" style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)' }}>
                  {profile.longIntroduction !== '[PLACEHOLDER — write verified longer bio]'
                     ? profile.longIntroduction
                     : profile.shortIntroduction !== '[PLACEHOLDER — write verified personal introduction]'
                        ? profile.shortIntroduction
                        : 'A developer based in Vietnam, working with backend systems and distributed architecture.'}
               </p>
            </div>

            <div style={{ marginBottom: 'var(--space-16)' }}>
               <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-4)' }}>Background</h2>
               {profile.education.map((edu, i) => (
                  <div key={i} style={{ marginBottom: 'var(--space-4)' }}>
                     <p style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)' }}>{edu.institution}</p>
                     <p className="text-tertiary" style={{ fontSize: 'var(--text-sm)' }}>{edu.degree}</p>
                     <p className="text-tertiary" style={{ fontSize: 'var(--text-sm)' }}>{edu.period}</p>
                  </div>
               ))}
            </div>

            <div style={{ marginBottom: 'var(--space-16)' }}>
               <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-4)' }}>Skills</h2>
               <div className="flex flex-col gap-4">
                  {Object.entries(profile.skills).map(([category, skills]) => (
                     <div key={category}>
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
                           {category}
                        </p>
                        <div className="flex gap-2 flex-wrap">
                           {skills.map((skill) => (
                              <span key={skill} className="badge">{skill}</span>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div style={{ marginBottom: 'var(--space-16)' }}>
               <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-4)' }}>Technical Interests</h2>
               <div className="flex gap-2 flex-wrap">
                  {profile.technicalInterests.map((interest) => (
                     <span key={interest} className="badge badge--accent">{interest}</span>
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
}
