import { Container, SectionHeading } from './ui'
import { workflowSteps } from '../data/profile'

export function About() {
  return (
    <section id="about" className="section-px py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionHeading title="About" />
            <div className="space-y-5 text-lg leading-relaxed text-paper-300">
              <p>
                I&rsquo;m an Artificial Intelligence student who became especially interested in one part of
                that field: taking raw, messy data and turning it into something a person can actually use to
                make a decision.
              </p>
              <p>
                I built my practical skills through Python, SQL, Excel, and Power BI &mdash; and over time,
                the part I enjoy most turned out to be the full path from a raw dataset to a finished
                dashboard: cleaning it, modeling it, analyzing it, and presenting it clearly.
              </p>
              <p>
                I&rsquo;ve built Power BI projects covering global sales, retail and mountain bike sales, and
                railway performance, and I&rsquo;m continuing to build out my SQL and broader data skills.
                Data Analysis is my current focus; Data Engineering is where I&rsquo;m headed long-term.
              </p>
              <p className="text-paper-400">
                I&rsquo;m currently open to freelance projects &mdash; particularly Power BI dashboards, Excel
                data cleaning, and SQL-based analysis.
              </p>
            </div>
          </div>

          <div className="lg:pt-1">
            <div className="rounded-xl border border-ink-700 bg-ink-900 p-7">
              <h3 className="text-base font-medium text-paper-200">How I work with a dataset</h3>
              <p className="mt-2 text-sm text-paper-500">
                The same path, every time &mdash; whether it&rsquo;s a messy CSV or a full client dataset.
              </p>

              <ol className="mt-7 space-y-0">
                {workflowSteps.map((step, i) => (
                  <li key={step} className="relative flex gap-4 pb-7 last:pb-0">
                    {i < workflowSteps.length - 1 && (
                      <span
                        className="absolute left-[15px] top-8 h-full w-px bg-ink-700"
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-500/60 bg-ink-900 font-mono text-xs text-gold-300">
                      {i + 1}
                    </span>
                    <span className="pt-1 text-paper-200">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
