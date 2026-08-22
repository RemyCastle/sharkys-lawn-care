import type { Env } from "../../_lib/env"
import { json } from "../../_lib/http"
import { ready } from "../../_lib/ready"

export async function onRequestGet({ env }: { env: Env }) {
  try {
    await ready(env)
    const photos = await env.DB.prepare(
      "SELECT id, src, alt, caption, width, height, sort_order FROM photos ORDER BY sort_order, id",
    ).all()
    return json({ photos: photos.results || [] })
  } catch {
    return json({ error: "unavailable" }, 503)
  }
}
