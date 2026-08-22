import type { Metadata } from "next"
import { Barlow, Teko } from "next/font/google"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { StickyCall } from "@/components/sticky-call"
import { site } from "@/lib/site"

import "./globals.css"

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
})

const teko = Teko({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-teko",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} · ${site.townShort}`,
    template: `%s · ${site.name}`,
  },
  description: `${site.name} in ${site.town}. ${site.tagline}. Free estimates. ${site.serviceArea}. Message on Facebook.`,
  applicationName: site.name,
  icons: {
    icon: "/mark.svg",
  },
  openGraph: {
    title: `${site.name} · ${site.townShort}`,
    description: `${site.tagline}. Free estimates. Message on Facebook.`,
    url: site.siteUrl,
    siteName: site.domain,
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${teko.variable} h-full`}>
      <body className="flex min-h-full flex-col pb-16 md:pb-0">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <StickyCall />
      </body>
    </html>
  )
}
