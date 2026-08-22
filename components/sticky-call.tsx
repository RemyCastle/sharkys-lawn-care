import { Phone } from "lucide-react"

import { site } from "@/lib/site"

export function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t-4 border-ink bg-hot text-ground md:hidden">
      <a
        href={site.phoneTel}
        className="flex h-16 items-center justify-center gap-2 font-display text-3xl uppercase tracking-wide"
      >
        <Phone className="size-5" />
        Call {site.phoneDisplay}
      </a>
    </div>
  )
}
