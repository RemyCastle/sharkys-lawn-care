import Image from "next/image"

import { jobPhotos } from "@/lib/site"

export function WorkGrid({ priority = false }: { priority?: boolean }) {
  return (
    <div className="mt-8 grid items-start gap-5 md:grid-cols-2">
      <svg aria-hidden className="absolute h-0 w-0">
        <clipPath id="shark-bite" clipPathUnits="objectBoundingBox">
          <path d="M0,0 H1 V0.16 C0.84,0.16 0.84,0.36 1,0.36 V0.64 C0.84,0.64 0.84,0.84 1,0.84 V1 H0 Z" />
        </clipPath>
      </svg>
      {jobPhotos.map((photo) => (
        <figure key={photo.src} className="vinyl overflow-hidden">
          {photo.fill ? (
            <div className="shark-bite relative aspect-[4/3] w-full bg-hot">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                unoptimized
                priority={priority}
              />
            </div>
          ) : (
            <div className="shark-bite">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="h-auto w-full"
                unoptimized
                priority={priority}
              />
            </div>
          )}
          <figcaption className="work-cap border-t-4 border-ink px-3 py-2 font-display text-2xl">
            {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
