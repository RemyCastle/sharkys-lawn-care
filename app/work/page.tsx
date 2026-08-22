import type { Metadata } from "next"

import { WorkStream } from "@/components/work-stream"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Work",
  description: site.seoDescription,
  alternates: { canonical: "/work/" },
}

export default function WorkPage() {
  return (
    <div className="bg-ground">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-6xl">Work</h1>
        <WorkStream />
        <a href={site.phoneTel} className="cta cta-call mt-10">
          {site.ctaPrimary}
        </a>
      </div>
    </div>
  )
}
