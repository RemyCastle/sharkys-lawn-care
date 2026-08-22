"use client"

import type { MouseEvent, ReactNode } from "react"

import { openQuote } from "@/lib/quote"

export function QuoteLink({
  job,
  className,
  children,
}: {
  job?: string
  className?: string
  children: ReactNode
}) {
  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    openQuote(job)
  }

  return (
    <a href="#quote" className={className} onClick={onClick}>
      {children}
    </a>
  )
}
