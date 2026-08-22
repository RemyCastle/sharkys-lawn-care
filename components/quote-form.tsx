"use client"

import { FormEvent, useState } from "react"
import { Mail } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function QuoteForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [town, setTown] = useState("")
  const [job, setJob] = useState("")

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent(`Estimate — ${town || "yard"} — ${name || "new"}`)
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nTown: ${town}\nJob: ${job}`
    )
    const mailbox = document.createElement("a")
    mailbox.href = `${site.emailMailto}?subject=${subject}&body=${body}`
    mailbox.rel = "noreferrer"
    mailbox.click()
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
          <FieldDescription>Springfield, Eugene, or nearby.</FieldDescription>
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
            placeholder="Mow, blackberries, mulch, clean-up…"
            className="rounded-sm border-2 bg-ground"
          />
        </Field>
      </FieldGroup>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          type="submit"
          className="h-12 flex-1 rounded-sm px-4 text-base font-extrabold"
        >
          <Mail data-icon="inline-start" />
          Email the job
        </Button>
        <a
          href={site.facebook}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-12 flex-1 rounded-sm border-2 px-4 text-base font-extrabold"
          )}
        >
          Facebook message
        </a>
      </div>
      <p className="text-sm text-steel">
        Opens your mail app. Writes to {site.email}. No form backend. Facebook
        is faster if you want a back-and-forth.
      </p>
    </form>
  )
}
