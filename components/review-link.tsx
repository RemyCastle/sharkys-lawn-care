import { site } from "@/lib/site"

export function ReviewLink({ className }: { className?: string }) {
  return (
    <a
      href={site.googleMaps}
      className={className ?? "cta cta-mail"}
      target="_blank"
      rel="noopener noreferrer"
    >
      {site.ctaReview}
    </a>
  )
}
