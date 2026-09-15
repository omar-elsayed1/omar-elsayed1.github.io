import type { ReactNode } from 'react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-content ${className}`}>{children}</div>
}

export function SectionHeading({
  title,
  lead,
  id,
}: {
  title: string
  lead?: string
  id?: string
}) {
  return (
    <div className="mb-12 max-w-2xl" id={id}>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
      {lead && <p className="mt-4 text-paper-400 text-lg leading-relaxed">{lead}</p>}
    </div>
  )
}

export function ScreenshotPlaceholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`Placeholder for ${label} screenshot`}
      className={`flex min-h-[220px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-ink-600 bg-ink-800/40 px-6 text-center ${className}`}
    >
      <span className="font-mono text-xs text-paper-500">Screenshot placeholder</span>
      <span className="text-sm text-paper-400">{label}</span>
      <span className="text-xs text-paper-500">Replace with a dashboard screenshot or GIF</span>
    </div>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-ink-600 bg-ink-800/60 px-3 py-1 text-sm text-paper-300">
      {children}
    </span>
  )
}
