import { Database, FileSpreadsheet, LayoutDashboard, Sparkles } from 'lucide-react'
import { Container, SectionHeading } from './ui'
import { services } from '../data/services'
import { workflowSteps } from '../data/profile'

const icons = [LayoutDashboard, Database, FileSpreadsheet, Sparkles]

export function Services() {
  return (
    <section id="services" className="section-px bg-ink-900/50 py-24">
      <Container>
        <SectionHeading
          title="Services"
          lead="If you have a dataset, dashboard, or reporting problem, this is roughly how I help."
        />

        <div className="mb-14 flex flex-wrap items-center gap-2 rounded-xl border border-ink-700 bg-ink-900 p-5">
          {workflowSteps.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-md bg-ink-800 px-3 py-2 text-sm text-paper-200">{step}</span>
              {i < workflowSteps.length - 1 && <span className="text-gold-500">&rarr;</span>}
            </div>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div
                key={service.title}
                className="rounded-xl border border-ink-700 bg-ink-900 p-6 transition-colors hover:border-gold-500/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-400/10 text-gold-400">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-medium text-paper-100">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-400">{service.description}</p>
              </div>
            )
          })}
        </div>

        <p className="mt-10 max-w-2xl text-paper-400">
          I work best with small businesses, startups, and teams sitting on Excel or CSV data they haven&rsquo;t
          had time to make sense of &mdash; especially if you need it cleaned, analyzed, and turned into a
          dashboard you can keep coming back to.
        </p>
      </Container>
    </section>
  )
}
