import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

function FacebookMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="24" height="24" rx="4" fill="#1877F2" />
      <path
        fill="#ffffff"
        d="M16.671 15.863 17.074 13.24h-2.518v-1.702c0-.718.351-1.417 1.478-1.417h1.144V8.032s-1.039-.177-2.03-.177c-2.07 0-3.42 1.255-3.42 3.525v1.86H9.329v2.623h2.389V24h2.838v-8.137h2.115z"
      />
    </svg>
  )
}

function InstagramMark({
  className,
  gradientId,
}: {
  className?: string
  gradientId: string
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#f58529" />
          <stop offset="50%" stopColor="#dd2a7b" />
          <stop offset="100%" stopColor="#515bd4" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${gradientId})`} />
      <rect
        x="5.2"
        y="5.2"
        width="13.6"
        height="13.6"
        rx="4"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="#ffffff" strokeWidth="1.7" />
      <circle cx="16.15" cy="7.85" r="1" fill="#ffffff" />
    </svg>
  )
}

export function InstagramButton({
  className,
  markClassName,
  gradientId,
}: {
  className?: string
  markClassName?: string
  gradientId: string
}) {
  return (
    <a
      href={site.instagram}
      rel="noreferrer"
      aria-label="Instagram"
      className={className}
    >
      <InstagramMark className={markClassName} gradientId={gradientId} />
    </a>
  )
}

export function FacebookButton({
  className,
  markClassName,
}: {
  className?: string
  markClassName?: string
}) {
  return (
    <a
      href={site.facebook}
      rel="noreferrer"
      aria-label="Facebook"
      className={className}
    >
      <FacebookMark className={markClassName} />
    </a>
  )
}

export function SocialButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <InstagramButton
        gradientId="ig-official-footer"
        className="shrink-0 leading-none"
        markClassName="size-11"
      />
      <FacebookButton className="shrink-0 leading-none" markClassName="size-11" />
    </div>
  )
}
