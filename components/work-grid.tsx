import Image from "next/image"

import { jobPhotos } from "@/lib/site"

export function WorkGrid({ priority = false }: { priority?: boolean }) {
  return (
    <div className="mt-8 grid items-start gap-4 md:grid-cols-2">
      {jobPhotos.map((photo) => (
        <figure key={photo.src} className="vinyl overflow-hidden">
          {photo.fill ? (
            <div className="relative aspect-[4/3] w-full">
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
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="h-auto w-full"
              unoptimized
              priority={priority}
            />
          )}
          <figcaption className="work-cap border-t-4 border-ink px-3 py-2 font-display text-2xl">
            {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
