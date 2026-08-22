"use client"

import { FormEvent, useState } from "react"

import { site } from "@/lib/site"

export function QuoteForm({ jobPrefill = "" }: { jobPrefill?: string }) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [town, setTown] = useState("")
  const [street, setStreet] = useState("")
  const [job, setJob] = useState(jobPrefill)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent(`Estimate — ${town || "yard"} — ${name || "new"}`)
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Town: ${town}`,
        street ? `Street: ${street}` : null,
        `What you need: ${job}`,
      ]
        .filter(Boolean)
        .join("\n")
    )
    const mailbox = document.createElement("a")
    mailbox.href = `${site.emailMailto}?subject=${subject}&body=${body}`
    mailbox.rel = "noreferrer"
    document.body.appendChild(mailbox)
    mailbox.click()
    mailbox.remove()
  }

  return (
    <form onSubmit={onSubmit} className="flex max-w-xl flex-col gap-4">
      <label className="flex flex-col gap-1 text-sm font-extrabold uppercase tracking-wide">
        Name
        <input
          id="quote-name"
          name="name"
          autoComplete="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="field-ink"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-extrabold uppercase tracking-wide">
        Phone
        <input
          id="quote-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
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
          value={town}
          onChange={(event) => setTown(event.target.value)}
          className="field-ink"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-extrabold uppercase tracking-wide">
        What you need
        <textarea
          id="quote-job"
          name="job"
          required
          rows={4}
          value={job}
          onChange={(event) => setJob(event.target.value)}
          className="field-ink"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-extrabold uppercase tracking-wide">
        Optional street
        <input
          id="quote-street"
          name="street"
          autoComplete="street-address"
          value={street}
          onChange={(event) => setStreet(event.target.value)}
          className="field-ink"
        />
      </label>
      <button type="submit" className="cta cta-mail w-fit">
        Email the job
      </button>
      <p className="text-sm font-semibold text-steel">{site.quoteHelper}</p>
    </form>
  )
}
