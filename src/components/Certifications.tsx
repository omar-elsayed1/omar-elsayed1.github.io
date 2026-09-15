import { useState } from 'react'
import { Award, ExternalLink, FileText } from 'lucide-react'
import { Container, SectionHeading } from './ui'
import { certifications } from '../data/certifications'
import type { Certification } from '../types'
import { CertificateLightbox } from './CertificateLightbox'

export function Certifications() {
  const [active, setActive] = useState<Certification | null>(null)

  return (
    <section id="certifications" className="section-px py-24">
      <Container>
        <SectionHeading
          title="Certifications & Learning"
          lead="Click a certificate to view the real credential."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => setActive(cert)}
              aria-label={`View certificate: ${cert.name}`}
              className="flex flex-col gap-3 rounded-xl border border-ink-700 bg-ink-900 p-6 text-left transition-colors hover:border-gold-500/50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-400/10 text-gold-400">
                <Award size={18} />
              </div>

              <div>
                <h3 className="text-base font-medium leading-snug text-paper-100">{cert.name}</h3>
                <p className="mt-1 text-sm text-paper-400">{cert.provider}</p>
              </div>

              {cert.description && <p className="text-sm text-paper-500">{cert.description}</p>}

              {cert.skills && (
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-ink-700 bg-ink-800/70 px-2 py-0.5 text-xs text-paper-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-paper-500">
                  {cert.date && <span className="font-mono">{cert.date}</span>}
                  {cert.credentialId && (
                    <span className="font-mono text-paper-600">#{cert.credentialId}</span>
                  )}
                </div>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-xs text-paper-400 hover:text-gold-300"
                  >
                    Verify
                    <ExternalLink size={11} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs text-paper-500">
                    <FileText size={12} />
                    View PDF
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </Container>

      {active && (
        <CertificateLightbox title={active.name} pdfPath={active.pdfPath} onClose={() => setActive(null)} />
      )}
    </section>
  )
}
