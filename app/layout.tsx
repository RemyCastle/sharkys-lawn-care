import type { Metadata } from "next"
import { Barlow, Teko } from "next/font/google"

import { QuoteBlock } from "@/components/quote-block"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ThumbDock } from "@/components/thumb-dock"
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
  description: `${site.heroTitle} ${site.heroLead} ${site.ctaPrimary}.`,
  applicationName: site.name,
  icons: {
    icon: "/logo-mark.png",
  },
  openGraph: {
    title: `${site.name} · ${site.townShort}`,
    description: `${site.heroTitle} ${site.ctaPrimary}.`,
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
      <body className="flex min-h-full flex-col bg-ground pb-40 md:pb-8">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <QuoteBlock />
        <SiteFooter />
        <ThumbDock />
      </body>
    </html>
  )
}
