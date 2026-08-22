"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { jobPhotos } from "@/lib/site"

const DRAG_PX = 8
const SNAP_RATIO = 0.22
const FLICK_PX_MS = 0.45

function prefersReduce() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function WorkStream() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const gesture = useRef({
    x: 0,
    t: 0,
    index: 0,
    dragging: false,
    pointerId: -1,
  })

  const slideAt = useCallback((left: number) => {
    const root = scrollerRef.current
    if (!root) return 0
    const slides = Array.from(root.children) as HTMLElement[]
    let best = 0
    let bestDist = Number.POSITIVE_INFINITY
    slides.forEach((slide, index) => {
      const dist = Math.abs(slide.offsetLeft - left)
      if (dist < bestDist) {
        bestDist = dist
        best = index
      }
    })
    return best
  }, [])

  const goTo = useCallback((index: number, instant = false) => {
    const root = scrollerRef.current
    const slide = root?.children[index] as HTMLElement | undefined
    if (!root || !slide) return
    const next = Math.max(0, Math.min(index, jobPhotos.length - 1))
    const target = (root.children[next] as HTMLElement).offsetLeft
    root.scrollTo({
      left: target,
      behavior: instant || prefersReduce() ? "auto" : "smooth",
    })
    setActive(next)
  }, [])

  useEffect(() => {
    const root = scrollerRef.current
    if (!root) return
    const onScroll = () => setActive(slideAt(root.scrollLeft))
    onScroll()
    root.addEventListener("scroll", onScroll, { passive: true })
    return () => root.removeEventListener("scroll", onScroll)
  }, [slideAt])

  const endGesture = (clientX: number) => {
    const root = scrollerRef.current
    const g = gesture.current
    if (!root) return
    if (g.pointerId >= 0 && root.hasPointerCapture(g.pointerId)) {
      root.releasePointerCapture(g.pointerId)
    }
    if (!g.dragging) return

    const dx = g.x - clientX
    const dt = Math.max(1, performance.now() - g.t)
    const velocity = dx / dt
    const far = Math.abs(dx) > root.clientWidth * SNAP_RATIO
    const flick = Math.abs(velocity) >= FLICK_PX_MS
    let next = g.index
    if (far || flick) {
      next = dx > 0 ? g.index + 1 : g.index - 1
    }
    goTo(next)
    g.dragging = false
    g.pointerId = -1
  }

  return (
    <div className="mt-8">
      <div
        id="work"
        ref={scrollerRef}
        className="work-stream"
        role="region"
        aria-roledescription="carousel"
        aria-label="Job photos"
        tabIndex={0}
        onPointerDown={(event) => {
          gesture.current = {
            x: event.clientX,
            t: performance.now(),
            index: active,
            dragging: false,
            pointerId: event.pointerId,
          }
        }}
        onPointerMove={(event) => {
          const g = gesture.current
          if (g.pointerId !== event.pointerId) return
          if (!g.dragging && Math.abs(event.clientX - g.x) >= DRAG_PX) {
            g.dragging = true
            event.currentTarget.setPointerCapture(event.pointerId)
          }
        }}
        onPointerUp={(event) => endGesture(event.clientX)}
        onPointerCancel={(event) => endGesture(event.clientX)}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault()
            goTo(active + 1)
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault()
            goTo(active - 1)
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
                if (gesture.current.dragging) return
                document.getElementById("quote")?.scrollIntoView({
                  behavior: prefersReduce() ? "auto" : "smooth",
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
