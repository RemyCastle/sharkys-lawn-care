"use client"

import { FormEvent, useEffect, useState } from "react"
import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { site } from "@/lib/site"

export function QuoteForm({ jobPrefill = "" }: { jobPrefill?: string }) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [town, setTown] = useState("")
  const [job, setJob] = useState(jobPrefill)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (jobPrefill) setJob(jobPrefill)
  }, [jobPrefill])

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent(`Estimate — ${town || "yard"} — ${name || "new"}`)
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nTown: ${town}\nJob: ${job}`
    )
    const mailbox = document.createElement("a")
    mailbox.href = `${site.emailMailto}?subject=${subject}&body=${body}`
    mailbox.rel = "noreferrer"
    document.body.appendChild(mailbox)
    mailbox.click()
    mailbox.remove()
    setSent(true)
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="quote-name">Name</FieldLabel>
          <Input
            id="quote-name"
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="h-12 rounded-sm border-2 bg-ground"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="quote-phone">Phone</FieldLabel>
          <Input
            id="quote-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="h-12 rounded-sm border-2 bg-ground"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="quote-town">Town</FieldLabel>
          <Input
            id="quote-town"
            name="town"
            autoComplete="address-level2"
            required
            value={town}
            onChange={(event) => setTown(event.target.value)}
            className="h-12 rounded-sm border-2 bg-ground"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="quote-job">Job</FieldLabel>
          <Textarea
            id="quote-job"
            name="job"
            required
            rows={4}
            value={job}
            onChange={(event) => setJob(event.target.value)}
            placeholder="Mow, blackberries, mulch, cleanup…"
            className="rounded-sm border-2 bg-ground"
          />
        </Field>
      </FieldGroup>
      <Button
        type="submit"
        className="h-12 rounded-sm px-4 text-base font-extrabold"
      >
        <Mail data-icon="inline-start" />
        Email the job
      </Button>
      <p className="text-sm text-steel">
        {sent
          ? `Stays here. Your mail app should open to ${site.email}.`
          : `Stays in this sheet. Writes to ${site.email}. Or call ${site.phoneDisplay}.`}
      </p>
    </form>
  )
}
