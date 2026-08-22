import Image from "next/image"
import Link from "next/link"

import { QuoteLink } from "@/components/quote-link"
import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-ink bg-ink text-ground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10">
        <div className="flex items-center gap-4">
          <Image
            src="/mark.svg"
            alt=""
            width={72}
            height={72}
            className="size-16 bg-white object-contain"
            unoptimized
          />
          <p className="font-display text-4xl uppercase leading-none">
            Sharky&apos;s Lawn Care
          </p>
        </div>
        <p className="max-w-3xl text-base font-semibold leading-relaxed">
          Sharky&apos;s Lawn Care · Eugene / Springfield ·{" "}
          <a href={site.phoneTel} className="underline decoration-hot underline-offset-4">
            {site.phoneDisplay}
          </a>{" "}
          · Insured and bonded · 10+ years
        </p>
        <div className="flex flex-col gap-2 text-sm font-semibold sm:flex-row sm:flex-wrap sm:gap-x-6">
          <a href={site.emailMailto} className="hover:text-hot">
            {site.email}
          </a>
          <a href={site.facebook} target="_blank" rel="noreferrer" className="hover:text-hot">
            Facebook message
          </a>
          <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-hot">
            Instagram {site.instagramHandle}
          </a>
          <span>{site.owner}</span>
          <Link href="/" className="hover:text-hot">
            Home
          </Link>
          <Link href="/services/" className="hover:text-hot">
            Services
          </Link>
          <Link href="/work/" className="hover:text-hot">
            Work
          </Link>
          <QuoteLink className="hover:text-hot">Get a time</QuoteLink>
        </div>
        <p className="text-sm text-ground/70">{site.domain}</p>
      </div>
    </footer>
  )
}
