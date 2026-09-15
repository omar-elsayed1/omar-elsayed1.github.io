import { useEffect, useRef } from 'react'
import { Github, X } from 'lucide-react'
import { Tag } from './ui'
import type { Project } from '../types'

const sections: { key: keyof Project['caseStudy']; label: string }[] = [
  { key: 'problem', label: 'The problem' },
  { key: 'dataset', label: 'Dataset' },
  { key: 'cleaning', label: 'Data cleaning' },
  { key: 'transformation', label: 'Data transformation' },
  { key: 'modeling', label: 'Data modeling' },
  { key: 'measures', label: 'DAX / measures' },
  { key: 'dashboard', label: 'Dashboard design' },
  { key: 'interactivity', label: 'Interactive features' },
  { key: 'insights', label: 'Intended analytical use' },
]

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-10 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-xl border border-ink-700 bg-ink-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-ink-700 p-7">
          <div>
            <span className="font-mono text-sm text-gold-400">0{project.index}</span>
            <h2 id="project-modal-title" className="mt-1 text-2xl font-semibold text-paper-100">
              {project.name}
            </h2>
            <p className="mt-1 text-paper-400">{project.tagline}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-ink-600 text-paper-300 hover:border-gold-500 hover:text-gold-300"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-8 p-7">
          <div className={`grid gap-3 ${project.screenshots.length > 1 ? 'sm:grid-cols-2' : ''}`}>
            {project.screenshots.map((shot) => (
              <img
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                className="w-full rounded-lg border border-ink-700"
                loading="lazy"
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {project.stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-ink-700 bg-ink-800/60 px-3 py-2.5">
                <div className="font-mono num-tabular text-lg text-paper-100">{stat.value}</div>
                <div className="mt-0.5 text-xs text-paper-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>

          <ul className="grid gap-2 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm text-paper-300">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                {h}
              </li>
            ))}
          </ul>

          <div className="space-y-6">
            {sections.map(({ key, label }) => (
              <div key={key}>
                <h3 className="text-sm font-medium text-gold-300">{label}</h3>
                <p className="mt-1.5 leading-relaxed text-paper-300">{project.caseStudy[key]}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-ink-700 bg-ink-800/50 p-5">
            <h3 className="text-sm font-medium text-paper-200">What I learned</h3>
            <p className="mt-1.5 leading-relaxed text-paper-400">{project.learned}</p>
          </div>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-gold-400 px-5 py-2.5 text-sm font-medium text-ink-950 hover:bg-gold-300"
            >
              <Github size={16} />
              View on GitHub
            </a>
          ) : (
            <p className="text-sm text-paper-500">Repository link coming soon.</p>
          )}
        </div>
      </div>
    </div>
  )
}
