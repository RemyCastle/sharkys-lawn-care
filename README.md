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

Only facts from the business card, Facebook, and Instagram:

- Primary CTA: [Message on Facebook](https://www.facebook.com/people/Sharkys-Lawn-Care-LLC/61590475589390/)
- Email [sharkyslawncare.541@gmail.com](mailto:sharkyslawncare.541@gmail.com)
- Instagram: [@sharkyslawnmowingservice](https://www.instagram.com/sharkyslawnmowingservice/)
- Owner: Jonathan Lopez
- Area: Eugene / Springfield and surrounding areas

No street address. No Google URL. The quote form opens a mailto. Facebook cover is brand reference only — not hotlinked.

## Look

Sport card. Hard midday sun. Four colors only: ground `#F4F5F3`, ink `#0B0F0C`, hot `#3F8C10`, steel `#36414C`. Type: Teko + Barlow.

Art:

- `public/mark.svg` — original SVG mark (polo shark, walk-behind). Cover used as brand reference only.
- `public/cover-polo.jpg` — local copy of their cover for the hero banner. Not a Facebook hotlink.
- `public/work/pressure-wash-siding.jpg` — real pressure-wash job from their Facebook.
