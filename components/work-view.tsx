"use client"

import { useLive } from "@/components/live-public"
import { WorkStack } from "@/components/work-stack"
import { phoneTel } from "@/lib/public"

export function WorkView() {
  const { site } = useLive()
  return (
    <div className="bg-ground">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-6xl">Work</h1>
        <WorkStack />
        <a href={phoneTel(site.phone_display)} className="cta cta-call mt-10">
          {site.cta_primary}
        </a>
      </div>
    </div>
  )
}
