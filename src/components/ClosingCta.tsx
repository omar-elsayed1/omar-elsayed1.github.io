import { Container } from './ui'

export function ClosingCta() {
  return (
    <section className="section-px pb-4">
      <Container>
        <div className="flex flex-col items-center gap-5 rounded-xl border border-gold-500/30 bg-gradient-to-b from-ink-900 to-ink-950 px-8 py-16 text-center">
          <h2 className="max-w-xl text-3xl font-semibold text-paper-100 sm:text-4xl">
            Let&rsquo;s turn your data into something useful.
          </h2>
          <p className="max-w-md text-paper-400">
            Have a dataset, dashboard, or reporting problem? I&rsquo;m available for Data Analysis and Power
            BI projects.
          </p>
          <a
            href="#contact"
            className="mt-2 rounded-md bg-gold-400 px-7 py-3 font-medium text-ink-950 transition-colors hover:bg-gold-300"
          >
            Get In Touch
          </a>
        </div>
      </Container>
    </section>
  )
}
