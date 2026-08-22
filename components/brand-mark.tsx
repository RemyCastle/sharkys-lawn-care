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
        "hoodie-mark relative block h-16 w-40 overflow-hidden bg-white",
        className,
      )}
    >
      <Image
        src={marks.card}
        alt="Sharky's Lawn Care"
        width={1200}
        height={1600}
        className="hoodie-mark-img absolute top-[-4%] left-[-4%] h-auto w-[250%] max-w-none"
        unoptimized
        priority={priority}
      />
    </span>
  )
}
