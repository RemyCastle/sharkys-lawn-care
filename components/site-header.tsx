import Link from "next/link"

import { BrandMark } from "@/components/brand-mark"
import { site } from "@/lib/site"

const nav = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/work/", label: "Work" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-ink bg-ground">
      <div className="stripe" />
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2">
        <Link href="/" className="shrink-0">
          <BrandMark priority />
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-extrabold uppercase tracking-wider md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-hot">
              {item.label}
            </Link>
          ))}
          <a href="#quote" className="hover:text-hot">
            Email the job
          </a>
        </nav>
        <a href={site.phoneTel} className="cta cta-call" style={{ minHeight: "2.75rem", fontSize: "1.25rem" }}>
          Call {site.phoneDisplay}
        </a>
      </div>
      <nav className="flex items-center justify-around border-t-2 border-ink px-2 py-2 text-xs font-extrabold uppercase tracking-wider md:hidden">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <a href="#quote">Email</a>
      </nav>
    </header>
  )
}
