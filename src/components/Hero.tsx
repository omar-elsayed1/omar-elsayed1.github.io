import { ArrowUpRight, Github, MapPin } from 'lucide-react'
import { Container } from './ui'
import { profile } from '../data/profile'
import profilePhoto from '../assets/profile-photo.jpg'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* subtle background grid, kept quiet */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #E7B84A 1px, transparent 1px), linear-gradient(to bottom, #E7B84A 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      <Container className="section-px relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-800/50 px-3 py-1.5 text-sm text-paper-300">
            <MapPin size={14} className="text-gold-400" />
            {profile.location}
            <span className="mx-1 h-1 w-1 rounded-full bg-paper-500" />
            Open for freelance work
          </div>

          <h1 className="max-w-xl font-display leading-[1.1]">
            <span className="block text-2xl font-medium text-paper-400 sm:text-3xl">Hi, I&rsquo;m Omar.</span>
            <span className="mt-1 block text-4xl font-semibold text-paper-100 sm:text-5xl lg:text-[3.25rem]">
              Data Analyst turning raw data into clear, actionable insights.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper-400">
            Specializing in Power BI, SQL, Excel and Python &mdash; cleaning messy data, modeling it, and
            presenting it through interactive dashboards and business reporting.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-md bg-gold-400 px-6 py-3 font-medium text-ink-950 transition-colors hover:bg-gold-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-md border border-ink-600 px-6 py-3 font-medium text-paper-200 transition-colors hover:border-gold-500 hover:text-gold-300"
            >
              Let&rsquo;s Work Together
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-paper-400">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-gold-300"
            >
              <Github size={16} />
              github.com/omar-elsayed1
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-gold-300"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <PhotoCard />
          <AnalyticsPanel />
        </div>
      </Container>
    </section>
  )
}

function PhotoCard() {
  return (
    <div className="mx-auto flex w-full max-w-md items-center gap-4 rounded-xl border border-ink-700 bg-ink-900 p-5 shadow-2xl shadow-black/40">
      <img
        src={profilePhoto}
        alt="Portrait of Omar Elsayed Mokhtar"
        className="h-24 w-24 shrink-0 rounded-lg border border-ink-600 object-cover sm:h-28 sm:w-28"
      />
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 shrink-0 rounded-full bg-gold-400" />
          <span className="truncate text-sm font-medium text-paper-100">Omar Elsayed Mokhtar</span>
        </div>
        <p className="mt-1 text-xs text-paper-500">{profile.title}</p>
        <p className="mt-2.5 text-sm text-paper-400">{profile.location}</p>
      </div>
    </div>
  )
}

function AnalyticsPanel() {
  const bars = [38, 62, 45, 78, 55, 90, 68]

  return (
    <div className="relative mx-auto w-full max-w-md rounded-xl border border-ink-700 bg-ink-900 shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between border-b border-ink-700 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-gold-400" />
          <span className="text-sm font-medium text-paper-200">Sales Overview</span>
        </div>
        <span className="text-xs text-paper-500">Demo data</span>
      </div>

      <div className="grid grid-cols-3 gap-px bg-ink-700">
        {[
          { label: 'Revenue', value: '1.2K' },
          { label: 'Orders', value: '384' },
          { label: 'Growth', value: '+6.4%' },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-ink-900 px-4 py-4">
            <div className="font-mono num-tabular text-xl text-paper-100">{kpi.value}</div>
            <div className="mt-1 text-xs text-paper-500">{kpi.label}</div>
          </div>
        ))}
      </div>

      <div className="px-5 pb-5 pt-6">
        <div className="flex h-32 items-end gap-2.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-gold-600/60 to-gold-400 opacity-90"
              style={{
                height: `${h}%`,
                animation: `hero-bar-grow 900ms cubic-bezier(0.22,1,0.36,1) ${i * 70}ms backwards`,
              }}
            />
          ))}
        </div>
        <div className="mt-3 flex justify-between text-xs text-paper-500">
          <span>Q1</span>
          <span>Q2</span>
          <span>Q3</span>
          <span>Q4</span>
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-ink-700 px-5 py-3.5">
        {['Region', 'Category', 'Year'].map((chip) => (
          <span key={chip} className="rounded-full border border-ink-600 px-2.5 py-1 text-xs text-paper-400">
            {chip}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes hero-bar-grow {
          from { transform: scaleY(0); transform-origin: bottom; }
          to { transform: scaleY(1); transform-origin: bottom; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="hero-bar-grow"] { animation: none !important; }
        }
      `}</style>
    </div>
  )
}
