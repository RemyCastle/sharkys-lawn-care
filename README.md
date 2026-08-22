# Sharky's Lawn Care

Marketing site for **Sharky's Lawn Care LLC** in Springfield, Oregon.
Public site is a Next.js static export on Cloudflare Pages. Admin is `/admin` (bookmark only, not linked in chrome).

Printed domain: [sharkyslawncare.com](https://sharkyslawncare.com) — add it on Cloudflare Pages when DNS exists. Do not invent DNS.

## Stack

- Next.js App Router (`output: 'export'`), publish `out/`
- Cloudflare Pages Functions in `/functions` (APIs + session)
- D1 `sharkys-lawn-care` (binding `DB`)
- R2 `sharkys-lawn-care-photos` (binding `PHOTOS`)

## Local public static

```bash
npm install
npm run build
```

## Local admin (Pages Functions + D1)

```bash
cp .dev.vars.example .dev.vars
# put SESSION_SECRET in .dev.vars (do not commit it)
npm run build
npx wrangler d1 execute sharkys-lawn-care --local --file=schema.sql
npx wrangler d1 execute sharkys-lawn-care --local --file=seed.sql
npx wrangler pages dev ./out
```

Open `/admin`. First visit: create owner. Then Site / Requests / Photos / Users.

Remote D1 (after deploy):

```bash
npx wrangler d1 execute sharkys-lawn-care --remote --file=schema.sql
npx wrangler d1 execute sharkys-lawn-care --remote --file=seed.sql
npx wrangler pages secret put SESSION_SECRET --project-name=sharkys-lawn-care
```

## Deploy

Same Pages project `sharkys-lawn-care`. Build: `npm ci && npm run build`. Output: `out`.

Do not create another Pages project. Do not invent DNS. Not Render.

## Contact on the site

- Primary CTA: Call [(541) 579-0726](tel:+15415790726)
- Email [sharkyslawncare.541@gmail.com](mailto:sharkyslawncare.541@gmail.com)
- Facebook: [Sharky's Lawn Care LLC](https://www.facebook.com/people/Sharkys-Lawn-Care-LLC/61590475589390/)
- Instagram: [@sharkyslawnmowingservice](https://www.instagram.com/sharkyslawnmowingservice/)
- Owner: Jonathan Lopez
- Area: Eugene and Springfield area

Street is optional on quote requests only. No street on the public site. No hours. No star scores. No Google URL. No Sparky's.

## Look

Ground `#F4F5F3`. Ink `#0B0F0C`. Lime `#3F8C10` / `#2E590F`. Steel `#36414C`. Teko + Barlow.

- `public/logo-mark.png` — header/footer polo mark
- `public/cover-polo.jpg` — Services lock
