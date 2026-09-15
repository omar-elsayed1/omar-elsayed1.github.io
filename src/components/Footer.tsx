import { Github, Linkedin } from 'lucide-react'
import { Container } from './ui'
import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="section-px border-t border-ink-800 py-10">
      <Container className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm text-paper-500">
          &copy; {new Date().getFullYear()} {profile.name}. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-paper-500 transition-colors hover:text-gold-300"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-paper-500 transition-colors hover:text-gold-300"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </Container>
    </footer>
  )
}
