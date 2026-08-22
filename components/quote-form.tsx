"use client"

import { useState } from "react"

import { useLive } from "@/components/live-public"

export function QuoteForm() {
  const { site } = useLive()
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle")
  const [message, setMessage] = useState("")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")
    const form = event.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch("/api/leads", { method: "POST", body: data })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus("err")
        setMessage(body.error || "Could not send.")
        return
      }
      form.reset()
      setStatus("ok")
      setMessage("Sent. We will get back to you.")
    } catch {
      setStatus("err")
      setMessage("Could not send.")
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex max-w-xl flex-col gap-4" encType="multipart/form-data">
      <label className="flex flex-col gap-1 text-sm font-extrabold uppercase tracking-wide">
        Name
        <input id="quote-name" name="name" autoComplete="name" required className="field-ink" />
      </label>
      <label className="flex flex-col gap-1 text-sm font-extrabold uppercase tracking-wide">
        Phone
        <input
          id="quote-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          className="field-ink"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-extrabold uppercase tracking-wide">
        Town
        <input
          id="quote-town"
          name="town"
          autoComplete="address-level2"
          required
          className="field-ink"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-extrabold uppercase tracking-wide">
        What you need
        <textarea id="quote-job" name="need" required rows={4} className="field-ink" />
      </label>
      <label className="flex flex-col gap-1 text-sm font-extrabold uppercase tracking-wide">
        Optional street
        <input
          id="quote-street"
          name="street"
          autoComplete="street-address"
          className="field-ink"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-extrabold uppercase tracking-wide">
        {site.quote_photos}
        <input
          id="quote-photos"
          name="attachment"
          type="file"
          accept="image/*"
          multiple
          className="field-ink py-2"
        />
      </label>
      <button type="submit" className="cta cta-mail w-fit" disabled={status === "sending"}>
        {status === "sending" ? "Sending" : site.quote_submit}
      </button>
      <p className="text-sm font-semibold text-steel">{site.quote_helper}</p>
      {message ? (
        <p className="text-sm font-extrabold">{message}</p>
      ) : null}
    </form>
  )
}
