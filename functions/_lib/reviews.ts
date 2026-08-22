export function reviewStars(value: unknown) {
  const stars = Number(value)
  if (!Number.isInteger(stars) || stars < 1 || stars > 5) return 0
  return stars
}

export function reviewLooksLikeSparky(text: string) {
  return /sparky/i.test(text)
}

export function reviewIsPublic(row: {
  featured?: number | boolean | null
  name?: string | null
  body?: string | null
  stars?: number | null
}) {
  const name = String(row.name || "").trim()
  const body = String(row.body || "").trim()
  const stars = reviewStars(row.stars)
  return Boolean(row.featured) && Boolean(name) && Boolean(body) && stars > 0
}
