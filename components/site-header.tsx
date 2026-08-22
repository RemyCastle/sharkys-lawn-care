import Link from "next/link"
import { Phone } from "lucide-react"

import { BrandMark } from "@/components/brand-mark"
import { QuoteLink } from "@/components/quote-link"
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
      <div className="mx-auto flex h-[4.75rem] max-w-6xl items-center justify-between gap-3 px-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <BrandMark
            priority
            className="h-14 w-auto max-w-[9.5rem] shrink-0 border-2 border-ink"
          />
          <span className="min-w-0">
            <span className="block font-display text-2xl leading-none uppercase">
              Sharky&apos;s
            </span>
            <span className="block truncate text-[11px] font-extrabold uppercase tracking-[0.16em] text-steel">
              Lawn Care LLC
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-extrabold uppercase tracking-wider md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-hot">
              {item.label}
            </Link>
          ))}
          <QuoteLink className="text-hot">Get a time</QuoteLink>
        </nav>
        <a
          href={site.phoneTel}
          className={cn(
            buttonVariants({ variant: "default" }),
            "h-11 rounded-sm px-3 text-sm font-extrabold"
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
        <QuoteLink className="text-hot">Get a time</QuoteLink>
      </nav>
    </header>
  )
}
