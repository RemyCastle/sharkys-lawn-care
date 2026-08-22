"use client"

import { useState } from "react"

import { marks } from "@/lib/site"
import { cn } from "@/lib/utils"

export function BrandMark({
  className,
}: {
  className?: string
  priority?: boolean
}) {
  const [ok, setOk] = useState(true)
  if (!ok) return null

  return (
    // Official card mark only. Hidden if the jpg is not on disk yet.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={marks.hoodieRider}
      alt="Sharky's Lawn Care LLC"
      width={220}
      height={124}
      className={cn("bg-white object-contain", className)}
      onError={() => setOk(false)}
    />
  )
}
