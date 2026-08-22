"use client"

import Image from "next/image"

import { useLive } from "@/components/live-public"
import { WorkCompares } from "@/components/work-compares"
import { WorkStack } from "@/components/work-stack"
import { marks } from "@/lib/site"
import { phoneTel } from "@/lib/public"

export function HomeView() {
  const { site, services } = useLive()
  return (
    <div className="bg-ground">
      <section className="border-b-4 border-ink bg-ground">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl text-ink sm:text-6xl md:text-7xl">{site.hero_title}</h1>
            <p className="max-w-lg text-xl font-medium">{site.hero_lead}</p>
            <div className="flex flex-col gap-3 sm:max-w-sm">
              <a href={phoneTel(site.phone_display)} className="cta cta-call">
                {site.cta_primary}
              </a>
              <a href="#quote" className="cta cta-mail">
                {site.cta_secondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-4 border-ink bg-ground">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-5xl">Services</h2>
          <div className="vinyl mt-8 max-w-xl overflow-hidden">
            <Image
              src={marks.coverPolo}
              alt="Sharky's Lawn Care polo-shark service list"
              width={960}
              height={400}
              className="h-auto w-full object-contain"
              unoptimized
            />
          </div>
          <ul className="mt-8 max-w-xl list-disc space-y-2 pl-5 text-xl font-medium">
            {services.map((service) => (
              <li key={service.slug}>{service.name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work" className="border-b-4 border-ink bg-ground">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-5xl">Work</h2>
          <WorkCompares />
          <WorkStack />
        </div>
      </section>

      <section className="bg-ground">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-5xl">About</h2>
          <p className="mt-6 max-w-xl text-xl font-medium">{site.about}</p>
        </div>
      </section>
    </div>
  )
}
