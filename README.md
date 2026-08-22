# Sharky's Lawn Care

Marketing site for **Sharky's Lawn Care LLC** in Springfield, Oregon.
Static export. No CMS. No admin. No backend.

Printed domain: [sharkyslawncare.com](https://sharkyslawncare.com) — add it on Cloudflare Pages when DNS exists. Do not invent DNS.

## Stack

- Next.js App Router (`output: 'export'`)
- TypeScript, Tailwind
- Publish folder: `out/`

## Local

```bash
npm install
npm run dev
npm run build
```

Open the build with any static server on `out/`.

## Deploy on Cloudflare Pages (free)

This is the handoff host. Not Render.

1. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git
2. Repo: `RemyCastle/sharkys-lawn-care`
3. Build command: `npm ci && npm run build`
4. Build output directory: `out`
5. Framework preset: None / static. Next already writes `out/`.
6. After the first deploy you get a `*.pages.dev` URL.
7. Custom domain `sharkyslawncare.com` later, when DNS exists.

Direct upload after a local build:

```bash
npm ci && npm run build
npx wrangler pages deploy out --project-name=sharkys-lawn-care
```

`wrangler.jsonc` sets `pages_build_output_dir` to `./out`.

The quote form POSTs from the page to FormSubmit. Pages can do that. No server on the host.

## Contact on the site

- Primary CTA: Call [(541) 579-0726](tel:+15415790726)
- Email [sharkyslawncare.541@gmail.com](mailto:sharkyslawncare.541@gmail.com)
- Facebook: [Sharky's Lawn Care LLC](https://www.facebook.com/people/Sharkys-Lawn-Care-LLC/61590475589390/)
- Instagram: [@sharkyslawnmowingservice](https://www.instagram.com/sharkyslawnmowingservice/)
- Owner: Jonathan Lopez
- Address: 5172 A St, Springfield, OR 97478
- Area: Eugene / Springfield, OR

No hours. No star scores. No Google URL. No Sparky's.

## Look

White ground like the polo mark. Ink `#0B0F0C`. Lime `#3F8C10` / `#2E590F`. Steel `#36414C`. Teko + Barlow.

- `public/logo-profile.jpg` — polo-shark mark in the header
- `public/cover-polo.jpg` — printed card on the home page
- `public/work/pressure-wash-siding.jpg` — real job photo
