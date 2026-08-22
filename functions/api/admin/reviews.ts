import type { Env } from "../../_lib/env"
import { json } from "../../_lib/http"
import { reviewLooksLikeSparky, reviewStars } from "../../_lib/reviews"

type Incoming = {
  id?: number
  name?: string
  stars?: number
  body?: string
  source?: string
  featured?: number | boolean
}

function readReview(body: Incoming) {
  const name = String(body.name || "").trim()
  const text = String(body.body || "").trim()
  const source = String(body.source || "").trim()
  const stars = reviewStars(body.stars)
  const featured = body.featured === true || body.featured === 1 ? 1 : 0
  if (!name || !text) return { error: "Name and the review text are required." }
  if (!stars) return { error: "Stars must be 1 to 5." }
  if (reviewLooksLikeSparky(`${name} ${text} ${source}`)) {
    return { error: "Do not paste a Sparky's review." }
  }
  return { name, body: text, source, stars, featured }
}

export async function onRequestGet({ env }: { env: Env }) {
  const rows = await env.DB.prepare(
    `SELECT id, name, stars, body, source, featured
     FROM reviews ORDER BY featured DESC, stars DESC, id DESC`,
  ).all()
  return json({ reviews: rows.results || [] })
}

export async function onRequestPost({ request, env }: { request: Request; env: Env }) {
  const parsed = readReview((await request.json()) as Incoming)
  if ("error" in parsed) return json({ error: parsed.error }, 400)
  const created = await env.DB.prepare(
    `INSERT INTO reviews (name, stars, body, source, featured, created_at)
     VALUES (?, ?, ?, ?, ?, datetime('now'))`,
  )
    .bind(parsed.name, parsed.stars, parsed.body, parsed.source, parsed.featured)
    .run()
  return json({ id: Number(created.meta.last_row_id), ...parsed })
}

export async function onRequestPatch({ request, env }: { request: Request; env: Env }) {
  const incoming = (await request.json()) as Incoming
  const id = Number(incoming.id)
  if (!id) return json({ error: "Missing review." }, 400)
  const existing = await env.DB.prepare(
    "SELECT id, name, stars, body, source, featured FROM reviews WHERE id = ?",
  )
    .bind(id)
    .first<Incoming>()
  if (!existing) return json({ error: "Missing review." }, 404)
  const parsed = readReview({
    name: incoming.name !== undefined ? incoming.name : existing.name,
    stars: incoming.stars !== undefined ? incoming.stars : existing.stars,
    body: incoming.body !== undefined ? incoming.body : existing.body,
    source: incoming.source !== undefined ? incoming.source : existing.source,
    featured: incoming.featured !== undefined ? incoming.featured : existing.featured,
  })
  if ("error" in parsed) return json({ error: parsed.error }, 400)
  await env.DB.prepare(
    "UPDATE reviews SET name = ?, stars = ?, body = ?, source = ?, featured = ? WHERE id = ?",
  )
    .bind(parsed.name, parsed.stars, parsed.body, parsed.source, parsed.featured, id)
    .run()
  return json({ ok: true, ...parsed })
}

export async function onRequestDelete({ request, env }: { request: Request; env: Env }) {
  const url = new URL(request.url)
  const id = Number(url.searchParams.get("id"))
  if (!id) return json({ error: "Missing review." }, 400)
  await env.DB.prepare("DELETE FROM reviews WHERE id = ?").bind(id).run()
  return json({ ok: true })
}
