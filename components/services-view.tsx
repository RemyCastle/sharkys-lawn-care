"use client"

import Image from "next/image"

import { ReviewLink } from "@/components/review-link"
import { useLive } from "@/components/live-public"
import { marks } from "@/lib/site"
import { phoneTel } from "@/lib/public"

export function ServicesView() {
  const { site, services } = useLive()
  return (
    <div className="bg-ground">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-6xl">Services</h1>
        <div className="vinyl mt-8 max-w-xl overflow-hidden">
          <Image
            src={marks.coverPolo}
            alt="Sharky's Lawn Care polo-shark service list"
            width={960}
            height={400}
            className="h-auto w-full object-contain"
            unoptimized
            priority
          />
        </div>
        <ul className="mt-8 max-w-xl list-disc space-y-2 pl-5 text-xl font-medium">
          {services.map((service) => (
            <li key={service.slug}>{service.name}</li>
          ))}
        </ul>
        <div className="mt-10 flex max-w-sm flex-col gap-3">
          <a href={phoneTel(site.phone_display)} className="cta cta-call">
            {site.cta_primary}
          </a>
          <ReviewLink />
        </div>
      </div>
    </div>
  )
}
