# Sharky's Lawn Care

Marketing site for **Sharky's Lawn Care LLC** in Springfield, Oregon.
Static export. No CMS. No admin. No fake backend.

Printed domain: [sharkyslawncare.com](https://sharkyslawncare.com)

## Stack

- Next.js App Router (`output: 'export'`)
- TypeScript, Tailwind, shadcn/ui, Motion
- Publish folder: `out/`

## Local

```bash
npm install
npm run dev
npm run build
```

Open the build with any static server on `out/`.

## Deploy on Render (Static Site)

Do **not** create a Web Service. Free web services sleep. This build is files only.

1. New → Static Site
2. Connect this GitHub repo
3. Build command: `npm ci && npm run build`
4. Publish directory: `out`
5. Add the custom domain `sharkyslawncare.com` when DNS is ready

`render.yaml` in the repo describes the same Static Site (`runtime: static`, `staticPublishPath: out`).

## Contact on the site

Only facts from the business card and Facebook:

- Primary CTA: Call [(541) 579-0726](tel:+15415790726)
- Email [sharkyslawncare.541@gmail.com](mailto:sharkyslawncare.541@gmail.com)
- Facebook: [Sharky's Lawn Care LLC](https://www.facebook.com/people/Sharkys-Lawn-Care-LLC/61590475589390/)
- Owner: Jonathan Lopez
- Area: Eugene / Springfield, OR

No shop street on the site. No Instagram. No Google URL. The quote sheet is mailto.

## Look

Sport card. Hard midday sun. Four colors only: ground `#F4F5F3`, ink `#0B0F0C`, hot `#3F8C10`, steel `#36414C`. Type: Teko + Barlow.

Art:

- `public/mark.svg` — original SVG mark (polo shark, walk-behind). Cover used as brand reference only.
- `public/cover-polo.jpg` — local copy of their cover. Brand reference only. Not the hero.
- `public/work/pressure-wash-siding.jpg` — real pressure-wash job. This is the hero and the before/after swipe.

Quote is an in-page `#quote` sheet (name, phone, town, what you need, optional street). No Typeform. Submit is mailto. Sticky thumb dock: Call, Email, Facebook.
