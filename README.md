# Evan Jester — Portfolio

Personal portfolio for Evan Jester — AI systems builder, founder of Hoosier AI Solutions,
co-founder of Plaibook, and AI/ML grad student at CU Boulder.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (base-ui)
- **Remotion** (`@remotion/player`) for the animated hero "AI pipeline"
- **next-themes** for dark/light mode (dark default)

## Develop

```bash
npm run dev          # site at http://localhost:3000
npm run remotion     # Remotion Studio to edit the hero composition
npm run build        # production build (deploy-ready for Vercel)
```

## Editing content

All copy lives in [`lib/data.ts`](lib/data.ts) — profile, ventures, clients, lab projects,
skills, education, and timeline. Edit there without touching components.

Assets are in [`public/`](public): `resume.pdf`, `headshot.jpg`, and `logos/`.

## Structure

- `app/` — layout (fonts, SEO/OG), page composition, `globals.css` (design tokens)
- `components/` — section components (nav, hero, ventures, clients, lab, about, contact, footer)
- `remotion/` — Remotion compositions (`HeroPipeline`) and Studio entry
- `lib/data.ts` — all site content

## Notes

- Remotion is free for individuals and small companies; review the
  [Remotion license](https://remotion.dev/license) for company use.
- Confirm the GitHub handle in `lib/data.ts` (currently `evjester`) before publishing.
