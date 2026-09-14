import { profile } from '../data/profile';
import { Reveal } from '../components/Reveal';

const NOW_FOCUS = ['System Design', 'Databases'];

export function AboutPage() {
  return (
    <div>
      <section style={{ paddingBlock: 'var(--section-gap)', paddingInline: 'var(--page-gutter)' }}>
        <Reveal>
          <p className="section-number">05</p>
        </Reveal>
        <Reveal stagger={1}>
          <h1 className="section-title" style={{ marginBottom: 'var(--space-8)' }}>
            About
          </h1>
        </Reveal>

        <Reveal stagger={2}>
          <div style={{ marginBottom: 'var(--space-16)' }}>
            <p
              className="font-editorial"
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
              }}
            >
              {profile.longIntroduction}
            </p>
            <p
              className="text-tertiary"
              style={{
                fontFamily: 'var(--font-technical)',
                fontSize: 'var(--text-sm)',
                marginTop: 'var(--space-4)',
              }}
            >
              {profile.location}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ marginBottom: 'var(--space-16)' }}>
            <h2
              style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--weight-semibold)',
                marginBottom: 'var(--space-4)',
              }}
            >
              Direction
            </h2>
            <p style={{ maxWidth: 'var(--max-width-text)' }}>
              Backend-first: C#, ASP.NET Core, Entity Framework, and SQL Server. I like systems
              where the data layer is designed deliberately — queries, procedures, and schemas
              that stay readable as the application grows.
            </p>
          </div>
        </Reveal>

        {profile.education.some((edu) => edu.institution || edu.degree || edu.period) && (
          <div style={{ marginBottom: 'var(--space-16)' }}>
            <h2
              style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--weight-semibold)',
                marginBottom: 'var(--space-4)',
              }}
            >
              Background
            </h2>
            {profile.education.map((edu, i) => (
              <div key={i} style={{ marginBottom: 'var(--space-4)' }}>
                {edu.institution && (
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)' }}>
                    {edu.institution}
                  </p>
                )}
                {edu.degree && (
                  <p className="text-tertiary" style={{ fontSize: 'var(--text-sm)' }}>
                    {edu.degree}
                    {edu.period ? ` — ${edu.period}` : ''}
                    {profile.gpa ? ` · GPA ${profile.gpa}` : ''}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {profile.certifications.length > 0 && (
          <div style={{ marginBottom: 'var(--space-16)' }}>
            <h2
              style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--weight-semibold)',
                marginBottom: 'var(--space-4)',
              }}
            >
              Certifications
            </h2>
            <ul className="list">
              {profile.certifications.map((cert) => (
                <li key={cert.name} className="list-item">
                  <span style={{ fontWeight: 'var(--weight-semibold)' }}>{cert.name}</span>
                  {cert.detail && <span className="text-tertiary"> — {cert.detail}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Reveal>
          <div style={{ marginBottom: 'var(--space-16)' }}>
            <h2
              style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--weight-semibold)',
                marginBottom: 'var(--space-4)',
              }}
            >
              Stack
            </h2>
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
                  <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                    {skills.map((skill) => (
                      <span key={skill} className="badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-tertiary" style={{ fontSize: 'var(--text-sm)', marginTop: 'var(--space-4)' }}>
              Only what I use and can discuss — nothing decorative.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ marginBottom: 'var(--space-16)' }}>
            <h2
              style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--weight-semibold)',
                marginBottom: 'var(--space-4)',
              }}
            >
              Now
            </h2>
            <p style={{ marginBottom: 'var(--space-4)', maxWidth: 'var(--max-width-text)' }}>
              Currently going deeper into:
            </p>
            <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
              {NOW_FOCUS.map((focus) => (
                <span key={focus} className="badge badge--accent">
                  {focus}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <h2
              style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--weight-semibold)',
                marginBottom: 'var(--space-4)',
              }}
            >
              Interests
            </h2>
            <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
              {profile.technicalInterests.map((interest) => (
                <span key={interest} className="badge">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
