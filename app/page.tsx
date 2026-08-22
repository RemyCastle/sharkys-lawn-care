import Image from "next/image"

import { jobPhotos, marks, services, site } from "@/lib/site"

export default function HomePage() {
  return (
    <div className="bg-ground">
      <section className="border-b-4 border-ink bg-ground">
        <div className="mx-auto max-w-5xl px-4 py-6">
          <div className="vinyl overflow-hidden bg-white">
            <Image
              src={marks.coverPolo}
              alt="Sharky's Lawn Care printed card: polo shark, walk-behind mower, and the service list"
              width={960}
              height={400}
              className="w-full object-contain"
              unoptimized
              priority
            />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <h1 className="text-5xl text-ink sm:text-6xl md:text-7xl">
              Eugene and Springfield lawns.
              <br />
              We cut them.
            </h1>
            <p className="max-w-lg text-xl font-medium">{site.heroLead}</p>
            <p className="text-lg font-extrabold">{site.tagline}</p>
            <div className="flex flex-col gap-3 sm:max-w-sm">
              <a href={site.phoneTel} className="cta cta-call">
                Call {site.phoneDisplay}
              </a>
              <a href="#quote" className="cta cta-mail">
                Email the job
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-4 border-ink bg-ground">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-5xl">Services</h2>
          <p className="mt-3 text-lg font-medium">{site.workNote}</p>
          <ul className="mt-8 max-w-xl list-disc space-y-2 pl-5 text-xl font-medium">
            {services.map((service) => (
              <li key={service.slug}>
                {service.name}
                {service.card ? ` (${service.card})` : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b-4 border-ink bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-5xl">Work</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {jobPhotos.map((photo) => (
              <figure key={photo.src} className="vinyl overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="w-full object-cover"
                  unoptimized
                />
                <figcaption className="border-t-4 border-ink px-3 py-2 font-display text-2xl uppercase">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
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
