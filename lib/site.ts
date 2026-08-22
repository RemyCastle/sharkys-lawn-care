export const site = {
  name: "Sharky's Lawn Care",
  legalName: "Sharky's Lawn Care LLC",
  owner: "Jonathan Lopez",
  ownerTitle: "Owner",
  town: "Springfield, Oregon",
  townShort: "Springfield, OR",
  serviceArea: "Eugene / Springfield and surrounding areas",
  phoneDisplay: "(541) 579-0726",
  phoneTel: "tel:+15415790726",
  email: "sharkyslawncare.541@gmail.com",
  emailMailto: "mailto:sharkyslawncare.541@gmail.com",
  domain: "sharkyslawncare.com",
  siteUrl: "https://sharkyslawncare.com",
  facebook:
    "https://www.facebook.com/people/Sharkys-Lawn-Care-LLC/61590475589390/",
  instagram: "https://www.instagram.com/sharkyslawnmowingservice/",
  instagramHandle: "@sharkyslawnmowingservice",
  tagline: "Reliable. Professional. Affordable.",
  years: "10+ years",
  yearsLine: "10+ years",
  heroKicker: "Sharky's Lawn Care",
  heroTitle: "Springfield lawns. We cut them.",
  heroLead:
    "Mow, edge, trim, blow. Then the jobs that wait: mulch, blackberries, thatch, cleanup, pressure wash. Eugene and Springfield.",
} as const

export const facts = [
  "Free estimates",
  "Insured & bonded",
  "10+ years",
  "Locally owned",
  "Residential and commercial",
] as const

export const services = [
  {
    slug: "general-maintenance",
    name: "General maintenance",
    card: "Edging, blowing, trimming, mowing",
    blurb:
      "The weekly cut. We edge, blow, trim, and mow so the lot looks finished, not just shorter.",
  },
  {
    slug: "seasonal-cleanups",
    name: "Clean-ups",
    card: "Seasonal",
    blurb:
      "Leaves, sticks, and the mess after a season turns. We bag it and haul it.",
  },
  {
    slug: "mulch-installation",
    name: "Mulch installation",
    card: "Beds and borders",
    blurb: "We bring the mulch and spread it. Beds look clean. Weeds slow down.",
  },
  {
    slug: "debris-removal",
    name: "Debris removal",
    card: "Haul-off",
    blurb: "Yard junk, storm fall, the pile you have been walking around. It leaves.",
  },
  {
    slug: "blackberry-removal",
    name: "Blackberry removal",
    card: "Canes and thickets",
    blurb:
      "Blackberries eat fences out here. We cut them back and pull what we can get to.",
  },
  {
    slug: "pressure-wash",
    name: "Pressure wash",
    card: "Hard surfaces",
    blurb: "Driveways, walks, and grimy siding. Water, surface cleaner, and time.",
  },
  {
    slug: "thatch-aerate",
    name: "Thatch / aerate",
    card: "Turf",
    blurb:
      "Pull the dead mat. Punch holes so water and air reach the roots.",
  },
] as const
