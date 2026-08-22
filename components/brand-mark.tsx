import Image from "next/image"

import { marks } from "@/lib/site"
import { cn } from "@/lib/utils"

export function BrandMark({
  className,
  priority = false,
}: {
  className?: string
  priority?: boolean
}) {
  return (
    <Image
      src={marks.logoProfile}
      alt="Sharky's Lawn Care"
      width={220}
      height={220}
      className={cn("h-16 w-auto bg-white object-contain", className)}
      unoptimized
      priority={priority}
    />
  )
}
