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
      alt="Sharky's Lawn Care LLC"
      width={220}
      height={220}
      className={cn("bg-white object-contain", className)}
      unoptimized
      priority={priority}
    />
  )
}
