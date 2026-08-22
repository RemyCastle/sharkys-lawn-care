import { jobPhotos } from "@/lib/site"

export function WorkStack() {
  return (
    <div className="mt-8 flex max-w-xl flex-col gap-6">
      {jobPhotos.map((photo, index) => (
        <figure key={photo.src} className="vinyl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            className="h-auto w-full"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
          <figcaption className="work-cap border-t-4 border-ink px-3 py-2 font-display text-2xl">
            {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
