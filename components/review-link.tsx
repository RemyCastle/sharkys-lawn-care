import { site } from "@/lib/site"

export function ReviewLink({ className }: { className?: string }) {
  return (
    <a
      href={site.googleReview}
      className={className ?? "cta cta-mail"}
      target="_blank"
      rel="noopener noreferrer"
    >
      {site.ctaReview}
    </a>
  )
}

export function SeeReviewsLink({ className }: { className?: string }) {
  return (
    <a
      href={site.googleMaps}
      className={className ?? "cta cta-mail"}
      target="_blank"
      rel="noopener noreferrer"
    >
      {site.ctaSeeReviews}
    </a>
  )
}

export function ReviewButtons({ className }: { className?: string }) {
  return (
    <div className={className ?? "flex flex-col gap-3 sm:max-w-sm"}>
      <ReviewLink />
      <SeeReviewsLink />
    </div>
  )
}
