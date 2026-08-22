"use client"

import { ReviewLink } from "@/components/review-link"
import { useLive } from "@/components/live-public"
import { WorkCompares } from "@/components/work-compares"
import { WorkStack } from "@/components/work-stack"
import { phoneTel } from "@/lib/public"

export function WorkView() {
  const { site } = useLive()
  return (
    <div className="bg-ground">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-6xl">Work</h1>
        <WorkCompares />
        <WorkStack />
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
