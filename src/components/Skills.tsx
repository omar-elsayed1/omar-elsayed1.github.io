import { Container, SectionHeading } from './ui'
import { skillGroups } from '../data/skills'

const levelStyles: Record<string, string> = {
  core: 'border-gold-500/50 bg-ink-900 lg:col-span-2',
  strong: 'border-ink-700 bg-ink-900',
  growing: 'border-ink-800 bg-ink-900/60',
}

const levelBadge: Record<string, string> = {
  core: 'Strongest',
  strong: 'Working knowledge',
  growing: 'Actively building',
}

export function Skills() {
  return (
    <section id="skills" className="section-px py-24">
      <Container>
        <SectionHeading
          title="Skills"
          lead="Power BI is where I spend most of my time. SQL and Excel come right after, with Python supporting the analysis when spreadsheets and BI tools aren't enough."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`rounded-xl border p-6 transition-colors ${levelStyles[group.level]}`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-medium text-paper-100">{group.title}</h3>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-xs ${
                    group.level === 'core'
                      ? 'bg-gold-400/15 text-gold-300'
                      : 'bg-ink-800 text-paper-500'
                  }`}
                >
                  {levelBadge[group.level]}
                </span>
              </div>

              {group.description && (
                <p className="mt-2 text-sm text-paper-500">{group.description}</p>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-ink-700 bg-ink-800/70 px-2.5 py-1.5 text-sm text-paper-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
