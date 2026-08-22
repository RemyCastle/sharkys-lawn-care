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
  const [street, setStreet] = useState("")
  const [job, setJob] = useState(jobPrefill)

  useEffect(() => {
    if (jobPrefill) setJob(jobPrefill)
  }, [jobPrefill])

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
          <FieldLabel htmlFor="quote-job">What you need</FieldLabel>
          <Textarea
            id="quote-job"
            name="job"
            required
            rows={4}
            value={job}
            onChange={(event) => setJob(event.target.value)}
            className="rounded-sm border-2 bg-ground"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="quote-street">Street</FieldLabel>
          <Input
            id="quote-street"
            name="street"
            autoComplete="street-address"
            value={street}
            onChange={(event) => setStreet(event.target.value)}
            placeholder="Customer's, for the crew"
            className="h-12 rounded-sm border-2 bg-ground"
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
      <p className="text-sm text-steel">{site.quoteHelper}</p>
    </form>
  )
}
