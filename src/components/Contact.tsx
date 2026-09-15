import { useState, type FormEvent } from 'react'
import { Github, Linkedin, Send } from 'lucide-react'
import { Container } from './ui'
import { profile } from '../data/profile'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitted')
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
          </div>

          <div className="rounded-xl border border-ink-700 bg-ink-900 p-7 sm:p-8">
            {status === 'submitted' ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-400/10 text-gold-400">
                  <Send size={20} />
                </div>
                <h3 className="text-lg font-medium text-paper-100">Message ready &mdash; not sent yet</h3>
                <p className="max-w-sm text-sm leading-relaxed text-paper-400">
                  This form isn&rsquo;t connected to an email service yet, so nothing was actually sent. Reach
                  Omar directly on{' '}
                  <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="text-gold-300 hover:underline">
                    LinkedIn
                  </a>{' '}
                  for now.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-sm text-paper-500 hover:text-paper-200"
                >
                  Back to form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="rounded-md border border-gold-500/30 bg-gold-400/5 px-4 py-3 text-xs leading-relaxed text-paper-400">
                  This form is frontend-only for now. Connect it to an email service (e.g. Formspree, EmailJS,
                  or a small backend) before relying on it to receive real messages.
                </p>

                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-paper-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-ink-600 bg-ink-800 px-3.5 py-2.5 text-paper-100 placeholder:text-paper-500 focus:border-gold-500"
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
                    className="w-full rounded-md border border-ink-600 bg-ink-800 px-3.5 py-2.5 text-paper-100 placeholder:text-paper-500 focus:border-gold-500"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-paper-300">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full resize-none rounded-md border border-ink-600 bg-ink-800 px-3.5 py-2.5 text-paper-100 placeholder:text-paper-500 focus:border-gold-500"
                    placeholder="Tell me a bit about your data and what you need."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold-400 px-5 py-3 font-medium text-ink-950 transition-colors hover:bg-gold-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
