import Link from "next/link"

import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-ink bg-ink text-ground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div className="flex flex-col gap-2">
          <p className="font-display text-4xl uppercase leading-none">
            Sharky&apos;s Lawn Care
          </p>
          <p className="text-sm font-semibold">{site.legalName}</p>
          <p className="text-sm">
            {site.town}
            <br />
            {site.serviceArea}
          </p>
          <p className="text-sm text-ground/80">
            Insured &amp; bonded. {site.yearsLine}. Locally owned.
          </p>
          <p className="font-display text-2xl uppercase text-hot">{site.domain}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm font-semibold">
          <p className="font-display text-3xl uppercase leading-none">Talk</p>
          <a href={site.phoneTel} className="hover:text-hot">
            {site.phoneDisplay}
          </a>
          <a href={site.emailMailto} className="hover:text-hot">
            {site.email}
          </a>
          <a href={site.facebook} target="_blank" rel="noreferrer" className="hover:text-hot">
            Facebook
          </a>
          <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-hot">
            Instagram {site.instagramHandle}
          </a>
          <p>
            {site.owner}, {site.ownerTitle}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm font-semibold">
          <p className="font-display text-3xl uppercase leading-none">Pages</p>
          <Link href="/" className="hover:text-hot">
            Home
          </Link>
          <Link href="/services/" className="hover:text-hot">
            Services
          </Link>
          <Link href="/work/" className="hover:text-hot">
            Work
          </Link>
        </div>
      </div>
    </footer>
  )
}
