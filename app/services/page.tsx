import type { Metadata } from "next"

import { QuoteLink } from "@/components/quote-link"
import { SectionHead } from "@/components/section-head"
import { buttonVariants } from "@/components/ui/button"
import { services, site } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Work",
  description: `${site.heroLead} ${site.workNote}`,
}

export default function ServicesPage() {
  return (
    <div className="sun-field">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12">
        <SectionHead kicker="The list" title="Work" note={site.workNote} />
        <div className="flex flex-col gap-4">
          {services.map((service, index) => (
            <article key={service.slug} className="sport-card grid gap-3 p-5 md:grid-cols-[88px_1fr]">
              <p className="font-display text-6xl leading-none text-hot">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="text-4xl md:text-5xl">{service.name}</h3>
                {service.card ? (
                  <p className="mt-1 text-lg font-semibold">— {service.card}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={site.phoneTel}
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-14 w-fit rounded-sm px-5 text-lg font-extrabold"
            )}
          >
            Call {site.phoneDisplay}
          </a>
          <QuoteLink
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-14 w-fit rounded-sm border-2 px-5 text-lg font-extrabold"
            )}
          >
            Get a time
          </QuoteLink>
        </div>
      </div>
    </div>
  )
}
