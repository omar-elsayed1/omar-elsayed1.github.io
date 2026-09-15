import { Container, SectionHeading } from './ui'
import { trainingPrograms } from '../data/certifications'

export function Experience() {
  return (
    <section id="experience" className="section-px bg-ink-900/50 py-24">
      <Container>
        <SectionHeading
          title="Experience & Training"
          lead="Structured training programs, not traditional employment — labeled here as what they actually were."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {trainingPrograms.map((program) => (
            <div key={program.program} className="rounded-xl border border-ink-700 bg-ink-900 p-7">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-medium text-paper-100">{program.program}</h3>
                <span className="text-xs text-paper-500">{program.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-gold-300">{program.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-paper-400">{program.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {program.focus.map((f) => (
                  <span key={f} className="rounded-md border border-ink-700 bg-ink-800/70 px-2.5 py-1 text-xs text-paper-300">
                    {f}
                  </span>
                ))}
              </div>

              {program.people && (
                <ul className="mt-6 space-y-2 border-t border-ink-700 pt-5">
                  {program.people.map((p) => (
                    <li key={p.name} className="flex justify-between text-sm">
                      <span className="text-paper-500">{p.role}</span>
                      <span className="text-paper-200">{p.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
