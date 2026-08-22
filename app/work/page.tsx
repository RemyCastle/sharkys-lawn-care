import type { Metadata } from "next"

import { BeforeAfter } from "@/components/before-after"
import { QuoteLink } from "@/components/quote-link"
import { SectionHead } from "@/components/section-head"
import { buttonVariants } from "@/components/ui/button"
import { jobPhoto, services, site } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Work",
  description: `A real ${site.name} pressure-wash job, plus Facebook and Instagram for more shots.`,
}

export default function WorkPage() {
  return (
    <div className="bg-ground">
      <div className="jersey-band h-4" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12">
        <SectionHead
          kicker="Yards"
          title="Work"
          note="One job photo. Slide before and after. Tap the photo to get a time."
        />
        <BeforeAfter />
        <QuoteLink
          job={jobPhoto.job}
          className={cn(
            buttonVariants({ variant: "default" }),
            "inline-flex h-12 w-fit rounded-sm px-5 text-base font-extrabold"
          )}
        >
          Get a time
        </QuoteLink>
        <div className="sport-card-steel p-6">
          <p className="font-display text-4xl uppercase">More shots</p>
          <p className="mt-2 max-w-xl text-ground/90">
            Facebook and Instagram hold the rest.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneTel}
              className={cn(
                buttonVariants({ variant: "default" }),
                "inline-flex h-12 rounded-sm px-5 text-base font-extrabold"
              )}
            >
              Call {site.phoneDisplay}
            </a>
            <a
              href={site.facebook}
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "inline-flex h-12 rounded-sm border-2 px-5 text-base font-extrabold"
              )}
            >
              Facebook message
            </a>
            <a
              href={site.instagram}
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "inline-flex h-12 rounded-sm border-2 px-5 text-base font-extrabold"
              )}
            >
              {site.instagramHandle}
            </a>
          </div>
        </div>
        <ul className="grid gap-2 md:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.slug}
              className="border-2 border-ink px-4 py-3 font-display text-3xl uppercase"
            >
              {service.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
