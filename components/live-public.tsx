"use client"

import { createContext, useContext, useEffect, useState } from "react"

import {
  fallbackPhotos,
  fallbackServices,
  fallbackSite,
  type LivePhoto,
  type LiveService,
  type LiveSite,
} from "@/lib/public"

type Live = {
  site: LiveSite
  services: LiveService[]
  photos: LivePhoto[]
}

const LiveContext = createContext<Live>({
  site: fallbackSite,
  services: fallbackServices,
  photos: fallbackPhotos,
})

export function useLive() {
  return useContext(LiveContext)
}

export function LivePublicProvider({ children }: { children: React.ReactNode }) {
  const [live, setLive] = useState<Live>({
    site: fallbackSite,
    services: fallbackServices,
    photos: fallbackPhotos,
  })

  useEffect(() => {
    let gone = false
    Promise.all([
      fetch("/api/public/site").then((r) => (r.ok ? r.json() : null)),
      fetch("/api/public/photos").then((r) => (r.ok ? r.json() : null)),
    ])
      .then(([siteRes, photoRes]) => {
        if (gone) return
        setLive({
          site: siteRes?.site
            ? {
                hero_title: siteRes.site.hero_title,
                hero_lead: siteRes.site.hero_lead,
                about: siteRes.site.about,
                phone_display: siteRes.site.phone_display,
                email: siteRes.site.email,
                towns: siteRes.site.towns,
                cta_primary: siteRes.site.cta_primary,
                cta_secondary: siteRes.site.cta_secondary,
                quote_heading: siteRes.site.quote_heading,
                quote_submit: siteRes.site.quote_submit,
                quote_photos: siteRes.site.quote_photos,
                quote_helper: siteRes.site.quote_helper,
              }
            : fallbackSite,
          services: Array.isArray(siteRes?.services) && siteRes.services.length
            ? siteRes.services
            : fallbackServices,
          photos: Array.isArray(photoRes?.photos) && photoRes.photos.length
            ? photoRes.photos
            : fallbackPhotos,
        })
      })
      .catch(() => {
        // keep fallback so the lawn site never goes blank
      })
    return () => {
      gone = true
    }
  }, [])

  return <LiveContext.Provider value={live}>{children}</LiveContext.Provider>
}
