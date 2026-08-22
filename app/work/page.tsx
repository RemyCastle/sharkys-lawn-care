import type { Metadata } from "next"
import Image from "next/image"

import { jobPhotos, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Work",
  description: `A real ${site.name} pressure-wash job.`,
}

export default function WorkPage() {
  return (
    <div className="bg-ground">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-6xl">Work</h1>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {jobPhotos.map((photo) => (
            <figure key={photo.src} className="vinyl overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="w-full object-cover"
                unoptimized
                priority
              />
              <figcaption className="border-t-4 border-ink px-3 py-2 font-display text-2xl uppercase">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <a href={site.phoneTel} className="cta cta-call mt-10">
          {site.ctaPrimary}
        </a>
      </div>
    </div>
  )
}
