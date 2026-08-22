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
        "relative block h-16 w-24 overflow-hidden bg-white",
        className,
      )}
    >
      <Image
        src={marks.card}
        alt="Sharky's Lawn Care"
        fill
        className="object-cover object-[64%_15%]"
        unoptimized
        priority={priority}
      />
    </span>
  )
}
