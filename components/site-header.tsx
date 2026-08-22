import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/work/", label: "Work" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-ink bg-ground">
      <div className="jersey-band h-2" />
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-3 px-4">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <Image
            src="/mark.svg"
            alt=""
            width={56}
            height={45}
            className="h-11 w-14 shrink-0 object-contain"
            unoptimized
          />
          <span className="min-w-0">
            <span className="block font-display text-[2rem] leading-none uppercase">
              Sharky&apos;s
            </span>
            <span className="block truncate text-[11px] font-extrabold uppercase tracking-[0.16em] text-steel">
              {site.domain}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-extrabold uppercase tracking-wider md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-hot">
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={site.phoneTel}
          className={cn(
            buttonVariants({ variant: "default" }),
            "h-11 rounded-sm px-3 text-base font-extrabold"
          )}
        >
          <Phone data-icon="inline-start" />
          <span className="hidden sm:inline">{site.phoneDisplay}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
      <nav className="flex items-center justify-around border-t-2 border-ink px-2 py-2 text-xs font-extrabold uppercase tracking-wider md:hidden">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/#quote" className="text-hot">
          Quote
        </Link>
      </nav>
    </header>
  )
}
