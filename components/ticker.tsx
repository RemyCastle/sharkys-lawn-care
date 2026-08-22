import { site } from "@/lib/site"

export function Ticker() {
  const items = Array.from({ length: 10 }, () => site.taglineParts).flat()

  return (
    <div className="overflow-hidden border-y-4 border-ink bg-hot text-ground">
      <div className="ticker-track flex w-max gap-3 py-1.5 pr-6">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-display text-3xl uppercase leading-none tracking-wide"
          >
            {item}
            <span className="mx-3 text-ink">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
