import { Mail, Phone } from "lucide-react"

import { site } from "@/lib/site"

export function ThumbDock() {
  return (
    <nav
      data-thumb-dock
      aria-label="Call, email, Facebook"
      className="fixed inset-x-0 bottom-0 z-50 border-t-4 border-ink bg-ink text-ground pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="grid grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)_minmax(0,0.9fr)]">
        <a
          href={site.phoneTel}
          className="flex min-h-16 flex-col items-center justify-center gap-0.5 bg-hot px-2 py-2 text-center"
        >
          <span className="inline-flex items-center gap-1 font-display text-2xl uppercase leading-none sm:text-3xl">
            <Phone className="size-4" />
            Call
          </span>
          <span className="text-[11px] font-extrabold leading-none sm:text-xs">
            {site.phoneDisplay}
          </span>
        </a>
        <a
          href={site.emailMailto}
          className="flex min-h-16 flex-col items-center justify-center gap-0.5 border-l-2 border-ink px-1.5 py-2 text-center"
        >
          <span className="inline-flex items-center gap-1 font-display text-2xl uppercase leading-none">
            <Mail className="size-4" />
            Email
          </span>
          <span className="max-w-full truncate text-[10px] font-bold leading-tight">
            {site.email}
          </span>
        </a>
        <a
          href={site.facebook}
          rel="noreferrer"
          className="flex min-h-16 flex-col items-center justify-center border-l-2 border-ink px-2 py-2 text-center text-ground/80"
        >
          <span className="font-display text-2xl uppercase leading-none">Facebook</span>
        </a>
      </div>
    </nav>
  )
}
