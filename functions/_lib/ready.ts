import type { Env } from "./env"

const SCHEMA = `
CREATE TABLE IF NOT EXISTS admins (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS site (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  hero_title TEXT NOT NULL,
  hero_lead TEXT NOT NULL,
  about TEXT NOT NULL,
  phone_display TEXT NOT NULL,
  email TEXT NOT NULL,
  towns TEXT NOT NULL,
  cta_primary TEXT NOT NULL,
  cta_secondary TEXT NOT NULL,
  quote_heading TEXT NOT NULL,
  quote_submit TEXT NOT NULL,
  quote_photos TEXT NOT NULL,
  quote_helper TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL,
  name TEXT NOT NULL,
  sort_order INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS photos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  src TEXT NOT NULL,
  r2_key TEXT,
  alt TEXT NOT NULL,
  caption TEXT NOT NULL,
  width INTEGER,
  height INTEGER,
  sort_order INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  town TEXT NOT NULL,
  need TEXT NOT NULL,
  street TEXT,
  has_photos INTEGER NOT NULL DEFAULT 0,
  photo_note TEXT,
  status TEXT NOT NULL DEFAULT 'New'
);
`

const SITE_SEED = {
  hero_title: "All jobs, big or small, shoot us a message, we do them all.",
  hero_lead:
    "Mow, edge, trim, blow. Mulch, blackberries, thatch, cleanup, pressure wash. Eugene and Springfield area.",
  about:
    "Jonathan Lopez owns it. Insured and bonded. More than ten years on lawns. Estimates are free.",
  phone_display: "(541) 579-0726",
  email: "sharkyslawncare.541@gmail.com",
  towns: "Eugene and Springfield area",
  cta_primary: "Call (541) 579-0726",
  cta_secondary: "Email us",
  quote_heading: "Email the job",
  quote_submit: "Send",
  quote_photos: "Photos of the yard, optional",
  quote_helper: "Or call (541) 579-0726.",
}

const SERVICE_SEED = [
  { slug: "general-maintenance", name: "General Maintenance (Edging, Blowing, Trimming, Mowing)" },
  { slug: "mulch-installation", name: "Mulch Installation" },
  { slug: "blackberry-removal", name: "Blackberry Removal" },
  { slug: "thatch-aerate", name: "Thatch and Aerate" },
  { slug: "seasonal-cleanups", name: "Seasonal Clean-Ups and Debris Removal" },
  { slug: "pressure-washing", name: "Pressure Washing" },
]

const PHOTO_SEED = [
  {
    src: "/work/photo1-pressure-wash-house.jpg",
    alt: "House siding mid pressure washing: left still oxidized, right cleaned, mulch bed in front",
    caption: "Pressure Washing",
    width: 720,
    height: 540,
  },
  {
    src: "/work/fb-09.jpg",
    alt: "Backyard job with a curved stone wall, a leaning tree, and overgrown beds",
    caption: "Seasonal Clean-Ups and Debris Removal",
    width: 1080,
    height: 1080,
  },
  {
    src: "/work/fb-10-hires.jpg",
    alt: "Overgrown side yard between a house and a wood fence, with an HVAC unit",
    caption: "Seasonal Clean-Ups and Debris Removal",
    width: 1080,
    height: 1080,
  },
  {
    src: "/work/fb-11-hires.jpg",
    alt: "Small backyard with a young tree, clover, and a stone wall",
    caption: "General Maintenance",
    width: 1080,
    height: 1080,
  },
  {
    src: "/work/fb-12-hires.jpg",
    alt: "Side yard after clearing, bare earth along the fence and house",
    caption: "Seasonal Clean-Ups and Debris Removal",
    width: 1080,
    height: 1080,
  },
  {
    src: "/work/fb-13-hires.jpg",
    alt: "Front yard cleared to dirt and straw beside a tan house",
    caption: "Seasonal Clean-Ups and Debris Removal",
    width: 1080,
    height: 1080,
  },
  {
    src: "/work/fb-14-hires.jpg",
    alt: "Backyard job with a chainsaw, gas can, and tools on a stone wall",
    caption: "General Maintenance",
    width: 1080,
    height: 1080,
  },
  {
    src: "/work/fb-15-hires.jpg",
    alt: "Cleared dirt along a house wall, fence, and metal gate",
    caption: "Seasonal Clean-Ups and Debris Removal",
    width: 1080,
    height: 1080,
  },
  {
    src: "/work/fb-16-hires.jpg",
    alt: "Sunken backyard after a cut, stone wall and wood fence behind it",
    caption: "General Maintenance",
    width: 1080,
    height: 1080,
  },
  {
    src: "/work/ig-03.jpg",
    alt: "Overgrown lawn with tall weeds against a grey fence and a sleeper wall",
    caption: "General Maintenance",
    width: 640,
    height: 640,
  },
]

export async function ready(env: Env) {
  for (const statement of SCHEMA.split(";").map((s) => s.trim()).filter(Boolean)) {
    await env.DB.prepare(statement).run()
  }
  const site = await env.DB.prepare("SELECT id FROM site WHERE id = 1").first()
  if (!site) {
    await env.DB.prepare(
      `INSERT INTO site (id, hero_title, hero_lead, about, phone_display, email, towns,
        cta_primary, cta_secondary, quote_heading, quote_submit, quote_photos, quote_helper, updated_at)
       VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`,
    )
      .bind(
        SITE_SEED.hero_title,
        SITE_SEED.hero_lead,
        SITE_SEED.about,
        SITE_SEED.phone_display,
        SITE_SEED.email,
        SITE_SEED.towns,
        SITE_SEED.cta_primary,
        SITE_SEED.cta_secondary,
        SITE_SEED.quote_heading,
        SITE_SEED.quote_submit,
        SITE_SEED.quote_photos,
        SITE_SEED.quote_helper,
      )
      .run()
  }
  const serviceCount = await env.DB.prepare("SELECT COUNT(*) AS n FROM services").first<{ n: number }>()
  if (!serviceCount || serviceCount.n === 0) {
    for (const [i, row] of SERVICE_SEED.entries()) {
      await env.DB.prepare("INSERT INTO services (slug, name, sort_order) VALUES (?, ?, ?)")
        .bind(row.slug, row.name, i)
        .run()
    }
  }
  const photoCount = await env.DB.prepare("SELECT COUNT(*) AS n FROM photos").first<{ n: number }>()
  if (!photoCount || photoCount.n === 0) {
    for (const [i, row] of PHOTO_SEED.entries()) {
      await env.DB.prepare(
        "INSERT INTO photos (src, alt, caption, width, height, sort_order) VALUES (?, ?, ?, ?, ?, ?)",
      )
        .bind(row.src, row.alt, row.caption, row.width, row.height, i)
        .run()
    }
  }
}

export function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60) || "service"
}
