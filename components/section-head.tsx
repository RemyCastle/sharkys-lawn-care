import { cn } from "@/lib/utils"

export function SectionHead({
  kicker,
  title,
  note,
  invert = false,
}: {
  kicker: string
  title: string
  note?: string
  invert?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <p
        className={cn(
          "text-xs font-extrabold uppercase tracking-[0.2em]",
          invert ? "text-ground/70" : "text-steel"
        )}
      >
        {kicker}
      </p>
      <h2 className={cn("text-5xl md:text-6xl", invert ? "text-ground" : "text-ink")}>
        {title}
      </h2>
      {note ? (
        <p className={cn("max-w-xl text-lg", invert ? "text-ground/85" : "text-steel")}>
          {note}
        </p>
      ) : null}
    </div>
  )
}
