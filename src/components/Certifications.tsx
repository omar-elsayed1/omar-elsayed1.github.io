import { Award } from 'lucide-react'
import { Container, SectionHeading } from './ui'
import { certifications } from '../data/certifications'

export function Certifications() {
  return (
    <section id="certifications" className="section-px py-24">
      <Container>
        <SectionHeading title="Certifications & Training" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col gap-3 rounded-xl border border-ink-700 bg-ink-900 p-6"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-400/10 text-gold-400">
                <Award size={18} />
              </div>
              <div>
                <h3 className="text-base font-medium leading-snug text-paper-100">{cert.name}</h3>
                <p className="mt-1 text-sm text-paper-400">{cert.provider}</p>
              </div>
              {cert.focus && <p className="text-sm text-paper-500">{cert.focus}</p>}
              {cert.date && <p className="mt-auto pt-1 font-mono text-xs text-paper-500">{cert.date}</p>}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
