import type { Metadata } from "next"

import { SectionHead } from "@/components/section-head"
import { buttonVariants } from "@/components/ui/button"
import { services, site } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Work",
  description: `See ${site.name} yard photos on Facebook and Instagram. This page does not invent a gallery.`,
}

const lanes = [
  {
    title: "Weekly cut",
    copy: "Mow, edge, trim, blow. The general maintenance lane.",
  },
  {
    title: "Season dump",
    copy: "Clean-ups and debris. The pile leaves the lot.",
  },
  {
    title: "Hard reset",
    copy: "Mulch, blackberries, pressure wash, thatch and aerate.",
  },
]

export default function WorkPage() {
  return (
    <div className="bg-ground">
      <div className="jersey-band h-4" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12">
        <SectionHead
          kicker="No fake gallery"
          title="Work"
          note="We did not grab stock yards and slap a logo on them. Photos that exist are on Facebook and Instagram."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {lanes.map((lane, index) => (
            <article key={lane.title} className="sport-card overflow-hidden">
              <div className="jersey-band h-10" />
              <div className="flex flex-col gap-3 p-5">
                <p className="font-display text-5xl uppercase text-hot">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-4xl">{lane.title}</h3>
                <p className="text-steel">{lane.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="sport-card-steel p-6">
          <p className="font-display text-4xl uppercase">The public hubs</p>
          <p className="mt-2 max-w-xl text-ground/90">
            Facebook and Instagram hold the yard shots. No Google listing URL
            on this site.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "inline-flex h-12 rounded-sm px-5 text-base font-extrabold"
              )}
            >
              Open Facebook
            </a>
            <a
              href={site.instagram}
              target="_blank"
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
