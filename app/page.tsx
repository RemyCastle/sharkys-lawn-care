import Image from "next/image"

import { WorkGrid } from "@/components/work-grid"
import { marks, services, site } from "@/lib/site"

export default function HomePage() {
  return (
    <div className="bg-ground">
      <section className="border-b-4 border-ink bg-ground">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <div className="vinyl mx-auto w-full max-w-xl overflow-hidden">
            <Image
              src={marks.coverPolo}
              alt="Sharky's Lawn Care printed card: polo shark, walk-behind mower, and the service list"
              width={960}
              height={400}
              className="h-auto w-full object-contain"
              unoptimized
              priority
            />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <h1 className="text-5xl text-ink sm:text-6xl md:text-7xl">
              {site.heroTitle}
            </h1>
            <p className="max-w-lg text-xl font-medium">{site.heroLead}</p>
            <div className="flex flex-col gap-3 sm:max-w-sm">
              <a href={site.phoneTel} className="cta cta-call">
                {site.ctaPrimary}
              </a>
              <a href="#quote" className="cta cta-mail">
                {site.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-4 border-ink bg-ground">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-5xl">Services</h2>
          <ul className="mt-8 max-w-xl list-disc space-y-2 pl-5 text-xl font-medium">
            {services.map((service) => (
              <li key={service.slug}>{service.name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b-4 border-ink bg-ground">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-5xl">Work</h2>
          <WorkGrid />
        </div>
      </section>

      <section className="bg-ground">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-5xl">About</h2>
          <p className="mt-6 max-w-xl text-xl font-medium">{site.about}</p>
        </div>
      </section>
    </div>
  )
}
