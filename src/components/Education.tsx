import { GraduationCap } from 'lucide-react'
import { Container } from './ui'
import { education } from '../data/profile'

export function Education() {
  return (
    <section id="education" className="section-px bg-ink-900/50 py-20">
      <Container>
        <div className="flex flex-col items-start gap-6 rounded-xl border border-ink-700 bg-ink-900 p-8 sm:flex-row sm:items-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold-400/10 text-gold-400">
            <GraduationCap size={22} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-medium text-paper-100">{education.school}</h3>
            <p className="mt-1 text-paper-400">{education.degree}</p>
          </div>
          <div className="flex gap-8 text-sm sm:border-l sm:border-ink-700 sm:pl-8">
            <div>
              <p className="text-paper-500">Period</p>
              <p className="mt-0.5 text-paper-200">{education.period}</p>
            </div>
            <div>
              <p className="text-paper-500">CGPA</p>
              <p className="mt-0.5 font-mono text-paper-200">{education.gpa}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
