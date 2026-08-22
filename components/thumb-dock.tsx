import { FacebookButton, InstagramButton } from "@/components/social-icons"
import { site } from "@/lib/site"

export function ThumbDock() {
  return (
    <nav
      data-thumb-dock
      aria-label="Call, email, Instagram, Facebook"
      className="fixed inset-x-0 bottom-0 z-50 border-t-4 border-ink bg-white text-ink pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="grid grid-cols-4">
        <a
          href={site.phoneTel}
          className="flex min-h-16 flex-col items-center justify-center bg-hot px-1 py-2 text-center"
        >
          <span className="font-display text-2xl uppercase leading-none">Call</span>
          <span className="text-[10px] font-extrabold">{site.phoneDisplay}</span>
        </a>
        <a
          href={site.emailMailto}
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
