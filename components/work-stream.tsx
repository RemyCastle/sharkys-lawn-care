"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { jobPhotos } from "@/lib/site"

const DRAG_PX = 8

export function WorkStream() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const pointer = useRef({ x: 0, dragging: false })

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

  const goTo = (index: number, instant = false) => {
    const root = scrollerRef.current
    const slide = root?.children[index] as HTMLElement | undefined
    if (!slide) return
    const reduce =
      instant ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    slide.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      inline: "start",
      block: "nearest",
    })
  }

  return (
    <div id="work" className="mt-8">
      <div
        ref={scrollerRef}
        className="work-stream"
        role="region"
        aria-roledescription="carousel"
        aria-label="Job photos"
        tabIndex={0}
        onPointerDown={(event) => {
          pointer.current = { x: event.clientX, dragging: false }
        }}
        onPointerMove={(event) => {
          if (Math.abs(event.clientX - pointer.current.x) >= DRAG_PX) {
            pointer.current.dragging = true
          }
        }}
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
              draggable={false}
              onClick={() => {
                if (pointer.current.dragging) return
                document.getElementById("quote")?.scrollIntoView({
                  behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                    .matches
                    ? "auto"
                    : "smooth",
                })
              }}
            />
            <figcaption className="work-cap border-t-4 border-ink px-3 py-2 font-display text-2xl">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2" aria-label="Job photo dots">
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
