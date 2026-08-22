import { QuoteForm } from "@/components/quote-form"

export function QuoteBlock() {
  return (
    <section id="quote" className="border-t-4 border-ink bg-white">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-5xl">Email the job</h2>
        <p className="mt-2 max-w-xl text-lg font-medium text-steel">
          Name, phone, town, what you need. Street is optional.
        </p>
        <div className="mt-8">
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}
