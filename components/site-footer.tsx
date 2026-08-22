import Link from "next/link"

import { BrandMark } from "@/components/brand-mark"
import { SocialButtons } from "@/components/social-icons"
import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-ink bg-ink text-ground">
      <div className="mx-auto flex max-w-5xl flex-col gap-5 px-4 py-10">
        <BrandMark className="h-20 bg-white" />
        <p className="max-w-2xl text-base font-semibold leading-relaxed">
          {site.address}
          <br />
          <a href={site.phoneTel} className="underline decoration-hot underline-offset-4">
            {site.phoneDisplay}
          </a>
          {" · "}
          <a href={site.emailMailto} className="underline decoration-hot underline-offset-4">
            {site.email}
          </a>
          {" · "}
          {site.domain}
        </p>
        <SocialButtons />
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
          <Link href="/" className="hover:text-hot">
            Home
          </Link>
          <Link href="/services/" className="hover:text-hot">
            Services
          </Link>
          <Link href="/work/" className="hover:text-hot">
            Work
          </Link>
          <a href="#quote" className="hover:text-hot">
            Email the job
          </a>
        </div>
      </div>
    </footer>
  )
}
