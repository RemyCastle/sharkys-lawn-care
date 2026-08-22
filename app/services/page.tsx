import type { Metadata } from "next"

import { services, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Services",
  description: `${site.heroLead} ${site.workNote}`,
}

export default function ServicesPage() {
  return (
    <div className="bg-ground">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-6xl">Services</h1>
        <p className="mt-3 text-lg font-medium">{site.workNote}</p>
        <ul className="mt-8 max-w-xl list-disc space-y-2 pl-5 text-xl font-medium">
          {services.map((service) => (
            <li key={service.slug}>
              {service.name}
              {service.card ? ` (${service.card})` : null}
            </li>
          ))}
        </ul>
        <a href={site.phoneTel} className="cta cta-call mt-10">
          Call {site.phoneDisplay}
        </a>
      </div>
    </div>
  )
}
