"use client"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"

import { QuoteForm } from "@/components/quote-form"
import {
  QUOTE_EVENT,
  closeQuote,
  isQuoteOpen,
  readQuoteJob,
  type QuoteDetail,
} from "@/lib/quote"

export function QuoteSheet() {
  const [open, setOpen] = useState(false)
  const [job, setJob] = useState("")
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function sync() {
      const next = isQuoteOpen()
      setOpen(next)
      if (next) setJob(readQuoteJob())
      document.documentElement.toggleAttribute("data-quote-open", next)
      document.body.style.overflow = next ? "hidden" : ""
    }

    function onQuote(event: Event) {
      const detail = (event as CustomEvent<QuoteDetail>).detail
      if (detail?.job) setJob(detail.job)
      sync()
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape" && isQuoteOpen()) {
        event.preventDefault()
        closeQuote()
      }
    }

    sync()
    window.addEventListener("hashchange", sync)
    window.addEventListener("popstate", sync)
    window.addEventListener(QUOTE_EVENT, onQuote)
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("hashchange", sync)
      window.removeEventListener("popstate", sync)
      window.removeEventListener(QUOTE_EVENT, onQuote)
      window.removeEventListener("keydown", onKey)
      document.documentElement.removeAttribute("data-quote-open")
      document.body.style.overflow = ""
    }
  }, [])

  useEffect(() => {
    const nodes = [
      document.querySelector("header"),
      document.querySelector("main"),
      document.querySelector("footer"),
      document.querySelector("[data-thumb-dock]"),
    ]
    for (const node of nodes) {
      if (open) node?.setAttribute("inert", "")
      else node?.removeAttribute("inert")
    }
    if (open) closeRef.current?.focus()
  }, [open])

  return (
    <div
      id="quote"
      data-open={open ? "true" : "false"}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-title"
      aria-hidden={!open}
      className="quote-sheet"
    >
      <button
        type="button"
        className="quote-scrim"
        aria-label="Close quote sheet"
        onClick={closeQuote}
      />
      <div className="quote-panel sport-card">
        <div className="flex items-start justify-between gap-3 border-b-4 border-ink px-4 py-3">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-steel">
              Book it
            </p>
            <h2 id="quote-title" className="text-4xl md:text-5xl">
              Get a time
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={closeQuote}
            className="flex size-11 shrink-0 items-center justify-center border-2 border-ink bg-ground"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="max-h-[min(70dvh,32rem)] overflow-y-auto px-4 py-5">
          <p className="mb-5 text-base font-semibold text-steel">
            Name, phone, town, job. Or just call.
          </p>
          <QuoteForm jobPrefill={job} />
        </div>
      </div>
    </div>
  )
}
