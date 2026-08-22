import type { Env } from "../../_lib/env"
import { json } from "../../_lib/http"
import { ready } from "../../_lib/ready"
import { reviewIsPublic } from "../../_lib/reviews"

export async function onRequestGet({ env }: { env: Env }) {
  try {
    await ready(env)
    const rows = await env.DB.prepare(
      `SELECT id, name, stars, body, source, featured
       FROM reviews ORDER BY stars DESC, id DESC`,
    ).all<{
      id: number
      name: string
      stars: number
      body: string
      source: string | null
      featured: number
    }>()
    const reviews = (rows.results || [])
      .filter(reviewIsPublic)
      .map((row) => ({
        id: row.id,
        name: row.name,
        stars: row.stars,
        body: row.body,
        source: String(row.source || ""),
        featured: row.featured,
      }))
    return json({ reviews })
  } catch {
    return json({ reviews: [] })
  }
}
