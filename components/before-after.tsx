"use client"

import {
  PointerEvent,
  useCallback,
  useRef,
  useState,
} from "react"

import { openQuote } from "@/lib/quote"
import { jobPhoto } from "@/lib/site"

const HANDLE_PX = 44

export function BeforeAfter({
  job = jobPhoto.job,
  caption = "Same job. Slide the handle. Tap the photo to get a time.",
}: {
  job?: string
  caption?: string
}) {
  const box = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const dragged = useRef(false)
  const [pct, setPct] = useState(52)

  const moveTo = useCallback((clientX: number) => {
    const el = box.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPct(Math.min(100, Math.max(0, next)))
  }, [])

  function onHandleDown(event: PointerEvent<HTMLDivElement>) {
    event.preventDefault()
    dragging.current = true
    dragged.current = false
    event.currentTarget.setPointerCapture(event.pointerId)
    moveTo(event.clientX)
  }

  function onHandleMove(event: PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return
    dragged.current = true
    moveTo(event.clientX)
  }

  function onHandleUp(event: PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return
    dragging.current = false
    try {
      event.currentTarget.releasePointerCapture(event.pointerId)
    } catch {
      /* already released */
    }
  }

  function onPhotoTap() {
    if (dragged.current) {
      dragged.current = false
      return
    }
    openQuote(job)
  }

  return (
    <figure className="sport-card overflow-hidden">
      <div
        ref={box}
        className="relative aspect-[4/3] select-none overflow-hidden bg-ink"
      >
        <img
          src={jobPhoto.src}
          alt=""
          draggable={false}
          className="absolute inset-0 size-full object-cover object-[58%_center]"
        />
        <div
          className="ba-clip absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        >
          <img
            src={jobPhoto.src}
            alt=""
            draggable={false}
            className="absolute inset-0 size-full object-cover object-[12%_center]"
          />
        </div>
        <button
          type="button"
          className="absolute inset-0 z-0 cursor-pointer bg-transparent"
          onClick={onPhotoTap}
          aria-label={`Tap to get a time for ${job}`}
        />
        <div
          role="slider"
          aria-label="Before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pct)}
          tabIndex={0}
          data-handle
          className="absolute inset-y-0 z-10 flex -translate-x-1/2 touch-none items-center justify-center"
          style={{ left: `${pct}%`, width: HANDLE_PX }}
          onPointerDown={onHandleDown}
          onPointerMove={onHandleMove}
          onPointerUp={onHandleUp}
          onPointerCancel={onHandleUp}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") setPct((value) => Math.max(0, value - 4))
            if (event.key === "ArrowRight") setPct((value) => Math.min(100, value + 4))
          }}
        >
          <span className="h-full w-1 bg-ground shadow-[2px_0_0_#0b0f0c]" />
          <span className="absolute size-11 border-2 border-ink bg-hot font-display text-2xl leading-none text-ground">
            ‹›
          </span>
        </div>
        <span className="pointer-events-none absolute left-2 top-2 z-10 border-2 border-ink bg-ground px-2 py-0.5 font-display text-xl uppercase leading-none">
          Before
        </span>
        <span className="pointer-events-none absolute right-2 top-2 z-10 border-2 border-ink bg-hot px-2 py-0.5 font-display text-xl uppercase leading-none text-ground">
          After
        </span>
      </div>
      <figcaption className="border-t-4 border-ink bg-ink px-4 py-3 text-ground">
        <p className="font-display text-3xl uppercase">{job}</p>
        <p className="text-sm font-semibold text-ground/80">{caption}</p>
      </figcaption>
    </figure>
  )
}
