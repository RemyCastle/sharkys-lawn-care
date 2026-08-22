import Image from "next/image"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"

import { BeforeAfter } from "@/components/before-after"
import { QuoteLink } from "@/components/quote-link"
import { SectionHead } from "@/components/section-head"
import { buttonVariants } from "@/components/ui/button"
import { facts, jobPhoto, services, site } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function HomePage() {
  return (
    <div>
      <section className="relative border-b-4 border-ink">
        <div className="relative flex min-h-[85svh] flex-col justify-end">
          <Image
            src={jobPhoto.src}
            alt={jobPhoto.alt}
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-[42%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
          <div className="relative z-10 px-4 pb-6 pt-28 text-ground">
            <div className="mx-auto flex max-w-6xl flex-col gap-4">
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-ground/75">
                {site.heroKicker}
              </p>
              <h1 className="text-5xl text-ground sm:text-6xl md:text-7xl">
                Springfield lawns.
                <br />
                We cut them.
              </h1>
              <p className="max-w-lg text-lg font-medium sm:text-xl">{site.heroLead}</p>
              <p className="text-lg font-extrabold">{site.tagline}</p>
              <div className="flex flex-col gap-3 sm:max-w-md">
                <a
                  href={site.phoneTel}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "h-14 rounded-sm px-5 text-lg font-extrabold"
                  )}
                >
                  <Phone data-icon="inline-start" />
                  Call {site.phoneDisplay}
                </a>
                <a
                  href={site.emailMailto}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "h-12 rounded-sm border-2 border-ground bg-transparent px-5 text-base font-extrabold text-ground hover:bg-ground hover:text-ink"
                  )}
                >
                  <Mail data-icon="inline-start" />
                  {site.email}
                </a>
                <QuoteLink
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "h-12 rounded-sm border-2 border-ground bg-transparent px-5 text-base font-extrabold text-ground hover:bg-ground hover:text-ink"
                  )}
                >
                  Get a time
                </QuoteLink>
                <a
                  href={site.facebook}
                  rel="noreferrer"
                  className="text-sm font-extrabold uppercase tracking-wider text-ground/80 hover:text-ground"
                >
                  Facebook message
                </a>
              </div>
              <p className="font-display text-2xl uppercase text-ground/80">
                {site.owner}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-4 border-ink bg-ground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-6 md:grid-cols-5">
          {facts.map((fact) => (
            <div
              key={fact}
              className="sport-card px-3 py-4 text-center font-display text-2xl uppercase leading-none md:text-3xl"
            >
              {fact}
            </div>
          ))}
        </div>
      </section>

      <section className="border-b-4 border-ink bg-ground">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12">
          <SectionHead
            kicker="The list"
            title="Services"
            note="Same work as the card back."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href="/services/"
                className="desk-lift sport-card flex items-start gap-4 p-4"
              >
                <span className="font-display text-4xl leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display text-3xl uppercase leading-none">
                    {service.name}
                  </span>
                  <span className="mt-1 block text-sm font-semibold">
                    {service.card}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-4 border-ink bg-steel text-ground">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12">
          <SectionHead
            invert
            kicker="Yards"
            title="Work"
            note="One job photo. Slide before and after. Tap to book."
          />
          <BeforeAfter />
          <QuoteLink
            job={jobPhoto.job}
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-12 w-fit rounded-sm px-5 text-base font-extrabold"
            )}
          >
            Get a time
          </QuoteLink>
        </div>
      </section>
    </div>
  )
}
