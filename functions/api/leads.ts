import { FORM_SUBMIT, type Env } from "../_lib/env"
import { json } from "../_lib/http"
import { ready } from "../_lib/ready"

export async function onRequestPost({ request, env }: { request: Request; env: Env }) {
  await ready(env)
  const incoming = await request.formData()
  const name = String(incoming.get("name") || "").trim()
  const phone = String(incoming.get("phone") || "").trim()
  const town = String(incoming.get("town") || "").trim()
  const need = String(incoming.get("need") || incoming.get("What you need") || "").trim()
  const street = String(incoming.get("street") || "").trim()
  if (!name || !phone || !town || !need) {
    return json({ error: "Name, phone, town, and what you need are required." }, 400)
  }

  const files = incoming
    .getAll("attachment")
    .filter((item): item is File => item instanceof File && item.size > 0)

  const created = await env.DB.prepare(
    `INSERT INTO leads (created_at, name, phone, town, need, street, has_photos, photo_note, status)
     VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'New')`,
  )
    .bind(
      name,
      phone,
      town,
      need,
      street || null,
      files.length ? 1 : 0,
      files.length ? `${files.length} photo(s)` : null,
    )
    .run()
  const leadId = created.meta.last_row_id

  const stored: string[] = []
  for (const [i, file] of files.entries()) {
    const key = `leads/${leadId}/${i}-${file.name.replace(/[^\w.\-]+/g, "_")}`
    try {
      await env.PHOTOS.put(key, await file.arrayBuffer(), {
        httpMetadata: { contentType: file.type || "image/jpeg" },
      })
      stored.push(key)
    } catch {
      // R2 may be off; still keep the lead and email the files.
    }
  }
  if (files.length) {
    const note = stored.length
      ? `${files.length} photo(s); ${stored.length} stored`
      : `${files.length} photo(s) emailed`
    await env.DB.prepare("UPDATE leads SET photo_note = ? WHERE id = ?")
      .bind(note, leadId)
      .run()
  }

  const outbound = new FormData()
  outbound.set("_subject", "Sharky's Lawn Care — job")
  outbound.set("_template", "table")
  outbound.set("_captcha", "false")
  outbound.set("name", name)
  outbound.set("phone", phone)
  outbound.set("town", town)
  outbound.set("What you need", need)
  if (street) outbound.set("street", street)
  for (const file of files) outbound.append("attachment", file)

  let emailed = false
  try {
    const mail = await fetch(FORM_SUBMIT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: outbound,
    })
    emailed = mail.ok
  } catch {
    emailed = false
  }

  return json({ ok: true, emailed })
}
