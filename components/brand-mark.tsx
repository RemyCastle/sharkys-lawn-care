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
    <span
      className={cn(
        "relative block h-16 w-16 overflow-hidden bg-white",
        className,
      )}
    >
      <Image
        src={marks.cardMark}
        alt="Sharky's Lawn Care"
        fill
        className="object-contain"
        unoptimized
        priority={priority}
      />
    </span>
  )
}
