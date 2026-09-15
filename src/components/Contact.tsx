import { useRef, useState, type FormEvent } from 'react'
import { CheckCircle2, Github, Linkedin, Mail, XCircle } from 'lucide-react'
import { Container } from './ui'
import { profile } from '../data/profile'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'submitting') return // guard against duplicate submissions

    setStatus('submitting')
    setErrorMessage(null)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch(profile.formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        const result = await response.json().catch(() => null)
        const fieldError = result?.errors?.[0]?.message as string | undefined
        setErrorMessage(fieldError ?? null)
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-px py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Have data that needs to make sense? Let&rsquo;s work with it.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-paper-400">
              I&rsquo;m available for Data Analysis and Power BI projects &mdash; dashboards, data cleaning,
              SQL analysis, and reporting.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-ink-600 px-5 py-2.5 text-sm font-medium text-paper-200 transition-colors hover:border-gold-500 hover:text-gold-300"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-ink-600 px-5 py-2.5 text-sm font-medium text-paper-200 transition-colors hover:border-gold-500 hover:text-gold-300"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md border border-ink-600 px-5 py-2.5 text-sm font-medium text-paper-200 transition-colors hover:border-gold-500 hover:text-gold-300"
              >
                View My Projects
              </a>
            </div>

            <p className="mt-8 text-sm text-paper-500">
              Prefer email? Contact me directly at{' '}
              <a href={`mailto:${profile.email}`} className="text-paper-300 underline decoration-ink-600 underline-offset-4 hover:text-gold-300 hover:decoration-gold-400">
                {profile.email}
              </a>
            </p>
          </div>

          <div className="rounded-xl border border-ink-700 bg-ink-900 p-7 sm:p-8">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-400/10 text-gold-400">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-lg font-medium text-paper-100">Message sent successfully!</h3>
                <p className="max-w-sm text-sm leading-relaxed text-paper-400">
                  Thanks for reaching out. I&rsquo;ll get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-sm text-paper-500 hover:text-paper-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
                {status === 'error' && (
                  <div
                    role="alert"
                    className="flex items-start gap-2.5 rounded-md border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-paper-300"
                  >
                    <XCircle size={16} className="mt-0.5 shrink-0 text-red-400" />
                    <span>
                      {errorMessage ?? 'Something went wrong. Please try again.'} You can also reach me directly
                      at{' '}
                      <a href={`mailto:${profile.email}`} className="text-gold-300 hover:underline">
                        {profile.email}
                      </a>
                      .
                    </span>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-paper-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={status === 'submitting'}
                    className="w-full rounded-md border border-ink-600 bg-ink-800 px-3.5 py-2.5 text-paper-100 placeholder:text-paper-500 focus:border-gold-500 disabled:opacity-60"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm text-paper-300">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    disabled={status === 'submitting'}
                    className="w-full rounded-md border border-ink-600 bg-ink-800 px-3.5 py-2.5 text-paper-100 placeholder:text-paper-500 focus:border-gold-500 disabled:opacity-60"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="project_details" className="mb-1.5 block text-sm text-paper-300">
                    Project details
                  </label>
                  <textarea
                    id="project_details"
                    name="project_details"
                    required
                    rows={4}
                    disabled={status === 'submitting'}
                    className="w-full resize-none rounded-md border border-ink-600 bg-ink-800 px-3.5 py-2.5 text-paper-100 placeholder:text-paper-500 focus:border-gold-500 disabled:opacity-60"
                    placeholder="Tell me a bit about your data and what you need."
                  />
                </div>

                {/* Formspree subject line + reply-to, hidden from the visible form */}
                <input type="hidden" name="_subject" value="New Portfolio Inquiry" />

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold-400 px-5 py-3 font-medium text-ink-950 transition-colors hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Mail size={16} className={status === 'submitting' ? 'animate-pulse' : ''} />
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
