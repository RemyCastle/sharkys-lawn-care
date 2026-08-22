"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { jobPhotos } from "@/lib/site"

export function WorkStream() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const updateActive = useCallback(() => {
    const root = scrollerRef.current
    if (!root) return
    const slides = Array.from(root.children) as HTMLElement[]
    const mid = root.scrollLeft + root.clientWidth / 2
    let best = 0
    let bestDist = Number.POSITIVE_INFINITY
    slides.forEach((slide, index) => {
      const center = slide.offsetLeft + slide.clientWidth / 2
      const dist = Math.abs(center - mid)
      if (dist < bestDist) {
        bestDist = dist
        best = index
      }
    })
    setActive(best)
  }, [])

  useEffect(() => {
    const root = scrollerRef.current
    if (!root) return
    updateActive()
    root.addEventListener("scroll", updateActive, { passive: true })
    return () => root.removeEventListener("scroll", updateActive)
  }, [updateActive])

  const goTo = (index: number) => {
    const root = scrollerRef.current
    const slide = root?.children[index] as HTMLElement | undefined
    slide?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" })
  }

  return (
    <div className="mt-8">
      <div
        ref={scrollerRef}
        className="work-stream"
        role="region"
        aria-roledescription="carousel"
        aria-label="Job photos"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault()
            goTo(Math.min(active + 1, jobPhotos.length - 1))
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault()
            goTo(Math.max(active - 1, 0))
          }
        }}
      >
        {jobPhotos.map((photo, index) => (
          <figure key={photo.src} className="work-slide vinyl overflow-hidden">
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
      <div className="mt-4 flex flex-wrap items-center gap-2" role="tablist" aria-label="Job photo dots">
        {jobPhotos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className="work-dot"
            aria-label={`Show photo ${index + 1}: ${photo.caption}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
