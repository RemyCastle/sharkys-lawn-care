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
- Instagram: [@sharkyslawnmowingservice](https://www.instagram.com/sharkyslawnmowingservice/)
- Owner: Jonathan Lopez (from the card; not listed on Facebook)
- Address on Facebook: 5172 A St, Springfield, OR 97478 (no suite)
- Area: Eugene / Springfield, OR
- Domain on the card: sharkyslawncare.com (not listed on Facebook)

No hours (none public). No star scores. No Google URL. No Sparky's. The quote sheet is mailto. One real job photo on the site; more live on Facebook.

## Look

Sport card. Hard midday sun. Four colors only: ground `#F4F5F3`, ink `#0B0F0C`, hot `#3F8C10`, steel `#36414C`. Type: Teko + Barlow.

Art (two official rasters only — no third shark, no 3D, no rider logo):

- `public/logo-profile.jpg` — polo-shark mark. Header and footer.
- `public/cover-polo.jpg` — Facebook cover reference.
- `public/card.jpg` — printed card photo (not a logo).
- `public/work/pressure-wash-siding.jpg` — real pressure-wash job. Hero and swipe.

Quote is an in-page `#quote` sheet (name, phone, town, what you need, optional street). No Typeform. Submit is mailto. Sticky thumb dock: Call, Email, Facebook.
