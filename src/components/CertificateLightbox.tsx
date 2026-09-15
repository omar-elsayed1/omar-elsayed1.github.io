import { useEffect, useRef } from 'react'
import { ExternalLink, X } from 'lucide-react'

export function CertificateLightbox({
  title,
  pdfPath,
  onClose,
}: {
  title: string
  pdfPath: string
  onClose: () => void
}) {
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
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} certificate preview`}
      onClick={onClose}
    >
      <div
        className="flex h-full w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-ink-700 bg-ink-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-ink-700 px-5 py-3.5">
          <h3 className="truncate text-sm font-medium text-paper-100">{title}</h3>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={pdfPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-ink-600 px-3 py-1.5 text-xs text-paper-300 transition-colors hover:border-gold-500 hover:text-gold-300"
            >
              <ExternalLink size={13} />
              Open in new tab
            </a>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close certificate preview"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-ink-600 text-paper-300 hover:border-gold-500 hover:text-gold-300"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-ink-950">
          <iframe
            src={pdfPath}
            title={`${title} certificate PDF`}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  )
}
