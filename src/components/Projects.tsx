import { useState } from 'react'
import { ArrowRight, Github } from 'lucide-react'
import { Container, SectionHeading, Tag } from './ui'
import { projects } from '../data/projects'
import type { Project } from '../types'
import { ProjectModal } from './ProjectModal'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-px py-24">
      <Container>
        <SectionHeading
          title="Featured Projects"
          lead="Case studies from real projects — how each dataset moved from raw to analyzed to visualized."
        />

        {featured && (
          <div className="mb-6 overflow-hidden rounded-xl border border-gold-500/40 bg-ink-900">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 text-sm text-gold-300">
                  <span className="font-mono">0{featured.index}</span>
                  <span className="h-px flex-1 bg-gold-500/30" />
                  <span>Newest project</span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-paper-100 sm:text-3xl">{featured.name}</h3>
                <p className="mt-3 text-paper-400">{featured.description}</p>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                  {featured.stats.map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-ink-700 bg-ink-800/60 px-3 py-2.5">
                      <div className="font-mono num-tabular text-lg text-paper-100">{stat.value}</div>
                      <div className="mt-0.5 text-xs text-paper-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tools.map((tool) => (
                    <Tag key={tool}>{tool}</Tag>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setActive(featured)}
                    className="inline-flex items-center gap-1.5 rounded-md bg-gold-400 px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-gold-300"
                  >
                    View Case Study
                    <ArrowRight size={15} />
                  </button>
                  {featured.githubUrl && (
                    <a
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-ink-600 px-5 py-2.5 text-sm font-medium text-paper-200 transition-colors hover:border-gold-500 hover:text-gold-300"
                    >
                      <Github size={15} />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActive(featured)}
                className="group relative flex items-center bg-ink-950/60 p-8 text-left sm:p-10"
                aria-label={`View ${featured.name} case study`}
              >
                <img
                  src={featured.screenshots[0].src}
                  alt={featured.screenshots[0].alt}
                  loading="lazy"
                  className="w-full rounded-lg border border-ink-700 shadow-xl shadow-black/40 transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </button>
            </div>
          </div>
        )}

        <div className="divide-y divide-ink-700 rounded-xl border border-ink-700 bg-ink-900">
          {rest.map((project) => (
            <div key={project.id} className="flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-5">
                <span className="hidden font-mono text-sm text-paper-500 sm:block">0{project.index}</span>
                <div>
                  <h3 className="text-lg font-medium text-paper-100">{project.name}</h3>
                  <p className="mt-1.5 max-w-xl text-sm text-paper-400">{project.tagline}</p>
                  <p className="mt-3 text-xs text-paper-500">{project.tools.slice(0, 4).join('  ·  ')}</p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActive(project)}
                  className="inline-flex items-center gap-1.5 rounded-md border border-ink-600 px-4 py-2 text-sm text-paper-200 transition-colors hover:border-gold-500 hover:text-gold-300"
                >
                  View Case Study
                  <ArrowRight size={14} />
                </button>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-600 text-paper-300 transition-colors hover:border-gold-500 hover:text-gold-300"
                  >
                    <Github size={16} />
                  </a>
                ) : (
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-800 text-paper-600"
                    title="Repository link coming soon"
                    aria-label="GitHub repository link not yet available"
                  >
                    <Github size={16} />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}
