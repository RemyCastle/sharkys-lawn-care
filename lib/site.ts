export const site = {
  name: "Sharky's Lawn Care LLC",
  legalName: "Sharky's Lawn Care LLC",
  owner: "Jonathan Lopez",
  ownerTitle: "Owner",
  town: "Springfield, Oregon",
  townShort: "Springfield, OR",
  serviceArea: "Eugene / Springfield, OR",
  phoneDisplay: "(541) 579-0726",
  phoneTel: "tel:+15415790726",
  email: "sharkyslawncare.541@gmail.com",
  emailMailto: "mailto:sharkyslawncare.541@gmail.com",
  domain: "sharkyslawncare.com",
  siteUrl: "https://sharkyslawncare.com",
  facebook:
    "https://www.facebook.com/people/Sharkys-Lawn-Care-LLC/61590475589390/",
  tagline: "Reliable. Professional. Affordable.",
  heroKicker: "Sharky's Lawn Care LLC",
  heroTitle: "Eugene and Springfield lawns. We cut them.",
  heroLead:
    "Mow, edge, trim, blow. Then the jobs that wait: mulch, blackberries, thatch, cleanup, pressure wash.",
  workNote: "Houses and businesses. Eugene, Springfield, and around here.",
  about:
    "Jonathan Lopez. Locally owned. Insured and bonded. More than ten years on lawns. Estimates are free. Call if you want a number on the work.",
  quoteHelper: "Or call (541) 579-0726.",
} as const

export const jobPhoto = {
  src: "/work/pressure-wash-siding.jpg",
  alt: "Pressure-wash job: house siding, part washed, part still oxidized",
  job: "Pressure wash",
  width: 720,
  height: 540,
} as const

export const services = [
  {
    slug: "general-maintenance",
    name: "General maintenance",
    card: "edging, blowing, trimming, mowing",
  },
  {
    slug: "mulch-installation",
    name: "Mulch installation",
    card: "",
  },
  {
    slug: "blackberry-removal",
    name: "Blackberry removal",
    card: "",
  },
  {
    slug: "thatch-aerate",
    name: "Thatch and aerate",
    card: "",
  },
  {
    slug: "seasonal-cleanups",
    name: "Seasonal clean-ups and debris removal",
    card: "",
  },
  {
    slug: "pressure-wash",
    name: "Pressure wash",
    card: "",
  },
] as const
