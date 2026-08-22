import Link from "next/link"
import { Mail, Phone } from "lucide-react"

import { HeroCard } from "@/components/hero-card"
import { QuoteForm } from "@/components/quote-form"
import { SectionHead } from "@/components/section-head"
import { Ticker } from "@/components/ticker"
import { buttonVariants } from "@/components/ui/button"
import { facts, services, site } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function HomePage() {
  return (
    <div>
      <section className="sun-field border-b-4 border-ink">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-[1.1fr_0.9fr] md:py-14">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-steel">
              {site.town}
            </p>
            <h1 className="text-6xl text-ink sm:text-7xl md:text-8xl">
              Sharky&apos;s
              <br />
              Lawn Care
            </h1>
            <p className="max-w-md text-xl font-medium text-ink">
              {site.serviceArea}. Free estimates. Call Jonathan Lopez if the
              grass got ahead of you.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
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
                  "h-14 rounded-sm border-2 px-5 text-lg font-extrabold"
                )}
              >
                <Mail data-icon="inline-start" />
                Email
              </a>
            </div>
            <p className="font-display text-2xl uppercase text-steel">
              {site.owner}, {site.ownerTitle}
            </p>
          </div>

          <HeroCard />
        </div>
      </section>

      <Ticker />

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
            note="Same work as the card back and the Facebook cover."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href="/services/"
                className="sport-card flex items-start gap-4 p-4 hover:bg-hot hover:text-ground"
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
            note="We do not keep a photo set on this site yet. The public shots live on Facebook and Instagram."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {["Cut and edge", "Haul and clean", "Wash and reset"].map((label, index) => (
              <div key={label} className="sport-card-ink p-5">
                <p className="font-display text-5xl uppercase text-hot">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-4xl uppercase">{label}</p>
                <p className="mt-2 text-sm font-semibold text-ground/80">
                  Graphic lane. Not a stock yard. Real pictures are on Facebook
                  and Instagram.
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "h-12 w-fit rounded-sm px-5 text-base font-extrabold"
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
                "h-12 w-fit rounded-sm border-2 px-5 text-base font-extrabold"
              )}
            >
              {site.instagramHandle}
            </a>
          </div>
        </div>
      </section>

      <section id="quote" className="sun-field">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2">
          <SectionHead
            kicker="Book it"
            title="Get a time"
            note="Four fields. We write you back. Or skip the form and call."
          />
          <div className="sport-card p-5">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  )
}
