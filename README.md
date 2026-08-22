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

Open `/admin`. First visit: create owner. Then Site / Requests / Photos / Reviews / Users.

Work stills stay a vertical stack. Before/After is optional: add a pair (two real photos + job type + Show on Work) on the Photos tab. Public Work only renders a pair that is on and complete. Zero pairs is the default. Do not invent a pair.

Admin picks a job type from the live services list, or types a custom title. Public Work only shows a still that has a photo, and only shows that title once the photo is there. Empty slots stay off the public page.

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
- Review us: [Jonathan’s official Google write-review link](https://g.page/r/CYJwY4dVqqhBEBE/review)
- See reviews: [Sharky's Lawn Care LLC on Google Maps](https://maps.google.com/maps/place/sharky's+lawn+care+llc/data=!4m2!3m1!1s0x20df45491a8efc19:0x41a8aa5587637082)
- Owner: Jonathan Lopez
- Area: Eugene and Springfield area

Street is optional on quote requests only. No street on the public site. No hours. No invented star badge. Featured quotes are optional in `/admin` — paste real ones only. Zero featured = Review us / See reviews buttons only. No Sparky's.

## Look

Ground `#F4F5F3`. Ink `#0B0F0C`. Lime `#3F8C10` / `#2E590F`. Steel `#36414C`. Teko + Barlow.

- `public/logo-mark.png` — header/footer polo mark
- `public/cover-polo.jpg` — Services lock
