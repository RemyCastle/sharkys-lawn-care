import type { Metadata } from "next"
import { Phone } from "lucide-react"

import { SectionHead } from "@/components/section-head"
import { buttonVariants } from "@/components/ui/button"
import { services, site } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Services",
  description: `Lawn work from ${site.name}: mowing, clean-ups, mulch, debris, blackberries, pressure wash, thatch and aerate.`,
}

export default function ServicesPage() {
  return (
    <div className="sun-field">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12">
        <SectionHead
          kicker={`${site.townShort} · card back`}
          title="Services"
          note="Jonathan Lopez put this list on the business card. Same list as the Facebook cover."
        />
        <div className="flex flex-col gap-4">
          {services.map((service, index) => (
            <article key={service.slug} className="sport-card grid gap-3 p-5 md:grid-cols-[88px_1fr]">
              <p className="font-display text-6xl leading-none text-hot">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="text-4xl md:text-5xl">{service.name}</h3>
                <p className="mt-1 text-sm font-extrabold uppercase tracking-wider text-steel">
                  {service.card}
                </p>
                <p className="mt-3 max-w-2xl text-lg">{service.blurb}</p>
              </div>
            </article>
          ))}
        </div>
        <a
          href={site.phoneTel}
          className={cn(
            buttonVariants({ variant: "default" }),
            "h-14 w-fit rounded-sm px-5 text-lg font-extrabold"
          )}
        >
          <Phone data-icon="inline-start" />
          Call {site.phoneDisplay}
        </a>
      </div>
    </div>
  )
}
