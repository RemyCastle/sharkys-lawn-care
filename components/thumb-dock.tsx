"use client"

import { useLive } from "@/components/live-public"
import { FacebookButton, InstagramButton } from "@/components/social-icons"
import { emailMailto, phoneTel } from "@/lib/public"

export function ThumbDock() {
  const { site } = useLive()
  return (
    <nav
      data-thumb-dock
      aria-label="Call, email, Instagram, Facebook"
      className="fixed inset-x-0 bottom-0 z-50 border-t-4 border-ink bg-ground text-ink pb-[env(safe-area-inset-bottom,0px)] md:hidden"
    >
      <div className="grid grid-cols-4">
        <a
          href={phoneTel(site.phone_display)}
          className="flex min-h-16 flex-col items-center justify-center bg-hot px-1 py-2 text-center"
        >
          <span className="font-display text-2xl uppercase leading-none">Call</span>
          <span className="text-[10px] font-extrabold">{site.phone_display}</span>
        </a>
        <a
          href={emailMailto(site.email)}
          className="flex min-h-16 flex-col items-center justify-center border-l-2 border-ink px-1 py-2 text-center"
        >
          <span className="font-display text-2xl uppercase leading-none">Email</span>
        </a>
        <InstagramButton
          gradientId="ig-official-dock"
          className="flex min-h-16 items-center justify-center border-l-2 border-ink px-1 py-2"
          markClassName="size-10"
        />
        <FacebookButton
          className="flex min-h-16 items-center justify-center border-l-2 border-ink px-1 py-2"
          markClassName="size-10"
        />
      </div>
    </nav>
  )
}
