import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="sun-field mx-auto flex max-w-3xl flex-col gap-5 px-4 py-16">
      <h1 className="text-7xl">Wrong turn</h1>
      <p className="text-lg text-steel">That page is not on {site.domain}.</p>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "default" }),
          "h-12 w-fit rounded-sm px-5 font-extrabold"
        )}
      >
        Home
      </Link>
    </div>
  )
}
