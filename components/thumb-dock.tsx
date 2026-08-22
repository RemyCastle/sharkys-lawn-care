import { site } from "@/lib/site"

export function ThumbDock() {
  return (
    <nav
      data-thumb-dock
      aria-label="Call, email, Instagram, Facebook"
      className="fixed inset-x-0 bottom-0 z-50 border-t-4 border-ink bg-ink text-ground pb-[env(safe-area-inset-bottom,0px)]"
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
        <a
          href={site.instagram}
          rel="noreferrer"
          className="flex min-h-16 flex-col items-center justify-center border-l-2 border-ink px-1 py-2 text-center"
        >
          <span className="font-display text-2xl uppercase leading-none">IG</span>
          <span className="max-w-full truncate text-[10px] font-extrabold">
            {site.instagramHandle}
          </span>
        </a>
        <a
          href={site.facebook}
          rel="noreferrer"
          className="flex min-h-16 flex-col items-center justify-center border-l-2 border-ink px-1 py-2 text-center"
        >
          <span className="font-display text-2xl uppercase leading-none">Facebook</span>
        </a>
      </div>
    </nav>
  )
}
