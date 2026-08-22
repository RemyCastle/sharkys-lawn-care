import { services, site } from "@/lib/site"

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    founder: {
      "@type": "Person",
      name: site.owner,
    },
    telephone: site.telephoneE164,
    email: site.email,
    url: site.siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Springfield",
      addressRegion: "OR",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Eugene" },
      { "@type": "City", name: "Springfield" },
    ],
    sameAs: [site.facebook, site.instagram, site.googleMaps],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
        },
      })),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
