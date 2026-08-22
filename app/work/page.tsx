import type { Metadata } from "next"
import Image from "next/image"

import { SectionHead } from "@/components/section-head"
import { buttonVariants } from "@/components/ui/button"
import { services, site } from "@/lib/site"
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
          note="One job photo on this site. More live on Facebook."
        />
        <figure className="sport-card overflow-hidden">
          <Image
            src="/work/pressure-wash-siding.jpg"
            alt="Pressure-wash job: house siding after a wash"
            width={720}
            height={540}
            className="w-full object-cover"
            unoptimized
            priority
          />
          <figcaption className="border-t-4 border-ink px-4 py-3">
            <p className="font-display text-3xl uppercase">Pressure wash</p>
            <p className="text-sm font-semibold text-steel">
              A pressure-wash job. Their photo.
            </p>
          </figcaption>
        </figure>
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
              target="_blank"
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
