export const site = {
  name: "Sharky's Lawn Care LLC",
  legalName: "Sharky's Lawn Care LLC",
  owner: "Jonathan Lopez",
  ownerTitle: "Owner",
  town: "Springfield, Oregon",
  townShort: "Springfield, OR",
  address: "5172 A St, Springfield, OR 97478",
  serviceArea: "Eugene / Springfield, OR",
  phoneDisplay: "(541) 579-0726",
  phoneTel: "tel:+15415790726",
  email: "sharkyslawncare.541@gmail.com",
  emailMailto: "mailto:sharkyslawncare.541@gmail.com",
  formSubmit: "https://formsubmit.co/sharkyslawncare.541@gmail.com",
  domain: "sharkyslawncare.com",
  siteUrl: "https://sharkyslawncare.com",
  facebook:
    "https://www.facebook.com/people/Sharkys-Lawn-Care-LLC/61590475589390/",
  instagram: "https://www.instagram.com/sharkyslawnmowingservice/",
  instagramHandle: "@sharkyslawnmowingservice",
  heroTitle: "Springfield lawns. We cut them.",
  heroLead:
    "Mow, edge, trim, blow. Then the jobs that wait: mulch, blackberries, thatch, cleanup, pressure wash. Eugene and Springfield, and around here.",
  ctaPrimary: "Call (541) 579-0726",
  ctaSecondary: "Email us",
  about:
    "Jonathan Lopez owns it. Insured and bonded. More than ten years on lawns. Estimates are free.",
  quoteHeading: "Email the job",
  quoteSubmit: "Send",
  quotePhotos: "Photos of the yard, optional",
  quoteHelper: "Or call (541) 579-0726.",
} as const

export const marks = {
  logoProfile: "/logo-profile.jpg",
  logoMark: "/logo-mark.png",
  coverPolo: "/cover-polo.jpg",
  card: "/card.jpg",
} as const

export const jobPhotos = [
  {
    src: "/work/pressure-wash-siding.jpg",
    alt: "Pressure-wash job: house siding, part washed, part still oxidized",
    caption: "Pressure wash",
    width: 720,
    height: 540,
  },
] as const

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
