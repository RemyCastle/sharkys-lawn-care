import { site } from "@/lib/site"

export function QuoteForm() {
  return (
    <form
      action={site.formSubmit}
      method="POST"
      encType="multipart/form-data"
      className="flex max-w-xl flex-col gap-4"
    >
      <input type="hidden" name="_subject" value="Sharky's Lawn Care — job" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <label className="flex flex-col gap-1 text-sm font-extrabold uppercase tracking-wide">
        Name
        <input
          id="quote-name"
          name="name"
          autoComplete="name"
          required
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
        <textarea id="quote-job" name="What you need" required rows={4} className="field-ink" />
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
        {site.quotePhotos}
        <input
          id="quote-photos"
          name="attachment"
          type="file"
          accept="image/*"
          multiple
          className="field-ink py-2"
        />
      </label>
      <button type="submit" className="cta cta-mail w-fit">
        {site.quoteSubmit}
      </button>
      <p className="text-sm font-semibold text-steel">{site.quoteHelper}</p>
    </form>
  )
}
