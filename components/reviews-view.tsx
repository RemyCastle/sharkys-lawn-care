"use client"

import { ReviewButtons } from "@/components/review-link"
import { useLive } from "@/components/live-public"
import { reviewIsPublic, sortReviewsHighestFirst } from "@/lib/reviews"

function StarLine({ stars }: { stars: number }) {
  return (
    <p className="font-display text-2xl leading-none" aria-label={`${stars} stars`}>
      {"★".repeat(stars)}
      <span className="text-steel">{"★".repeat(5 - stars)}</span>
    </p>
  )
}

export function ReviewsView() {
  const { reviews } = useLive()
  const shown = sortReviewsHighestFirst(reviews.filter(reviewIsPublic))
  return (
    <section id="reviews" className="border-b-4 border-ink bg-ground">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-5xl">Reviews</h2>
        <p className="mt-4 max-w-xl font-semibold">
          Sharky&apos;s Lawn Care LLC. Read them on Google and sort highest there, or leave one.
        </p>
        <ReviewButtons className="mt-6 flex flex-col gap-3 sm:max-w-sm" />
        {shown.length > 0 ? (
          <ul className="mt-8 flex max-w-xl flex-col gap-4">
            {shown.map((review) => (
              <li key={review.id} className="vinyl p-4">
                <StarLine stars={review.stars} />
                <p className="mt-3 text-lg font-medium">“{review.body}”</p>
                <p className="mt-3 font-extrabold">
                  {review.name}
                  {review.source ? ` · ${review.source}` : ""}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}
