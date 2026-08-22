export const site = {
  name: "Sharky's Lawn Care LLC",
  legalName: "Sharky's Lawn Care LLC",
  owner: "Jonathan Lopez",
  ownerTitle: "Owner",
  town: "Springfield, Oregon",
  townShort: "Springfield, OR",
  towns: "Eugene/Springfield",
  serviceArea: "Eugene / Springfield, OR",
  phoneDisplay: "(541) 579-0726",
  phoneTel: "tel:+15415790726",
  email: "sharkyslawncare.541@gmail.com",
  emailMailto: "mailto:sharkyslawncare.541@gmail.com",
  formSubmit: "https://formsubmit.co/sharkyslawncare.541@gmail.com",
  domain: "sharkyslawncare.com",
  siteUrl: "https://sharkyslawncare.com",
  seoTitle: "Sharky's Lawn Care LLC | Lawn Care in Springfield and Eugene, OR",
    seoDescription:
    "Mow, edge, trim, blow, mulch, blackberry removal, thatch and aerate, cleanup, pressure washing. Jonathan Lopez. Call (541) 579-0726.",
  telephoneE164: "+1-541-579-0726",
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
  cardHoodie: "/card-hoodie.jpg",
} as const

export const jobPhotos = [
  {
    src: "/work/pressure-wash-siding.jpg",
    alt: "House siding mid pressure washing: left still oxidized, right cleaned, mulch bed in front",
    caption: "Pressure Washing",
    width: 720,
    height: 540,
    fill: true,
  },
  {
    src: "/work/ig-02.jpg",
    alt: "Six job photos: mowed yards, a worker blowing, a pool-side lawn, and a side yard",
    caption: "Before and After",
    width: 361,
    height: 640,
    fill: false,
  },
  {
    src: "/work/ig-panel-11.jpg",
    alt: "Mowed backyard against a grey wood fence and a stone edge",
    caption: "General Maintenance",
    width: 164,
    height: 164,
    fill: true,
  },
  {
    src: "/work/ig-panel-21.jpg",
    alt: "Mowed two-level backyard with a low retaining wall and wood fence",
    caption: "General Maintenance",
    width: 164,
    height: 165,
    fill: true,
  },
  {
    src: "/work/ig-panel-12.jpg",
    alt: "Worker in a neon shirt blowing a mowed backyard",
    caption: "General Maintenance",
    width: 162,
    height: 164,
    fill: true,
  },
  {
    src: "/work/ig-panel-22.jpg",
    alt: "Worker in a neon shirt on a cut lawn by a hedge",
    caption: "General Maintenance",
    width: 162,
    height: 165,
    fill: true,
  },
  {
    src: "/work/ig-panel-31.jpg",
    alt: "Mowed lawn beside a pool, metal fence, and a small shed",
    caption: "General Maintenance",
    width: 164,
    height: 161,
    fill: true,
  },
  {
    src: "/work/ig-panel-32.jpg",
    alt: "Narrow mowed side yard between a white wall and hedges",
    caption: "General Maintenance",
    width: 162,
    height: 161,
    fill: true,
  },
] as const

export const services = [
  {
    slug: "general-maintenance",
    name: "General Maintenance (Edging, Blowing, Trimming, Mowing)",
  },
  {
    slug: "mulch-installation",
    name: "Mulch Installation",
  },
  {
    slug: "blackberry-removal",
    name: "Blackberry Removal",
  },
  {
    slug: "thatch-aerate",
    name: "Thatch and Aerate",
  },
  {
    slug: "seasonal-cleanups",
    name: "Seasonal Clean-Ups and Debris Removal",
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
  },
] as const
