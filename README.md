# ADV Website

Next.js site for ADV — built from the locked copy, brand, and animation
work from our chat. Ready to deploy on Vercel.

## What's in here

- `app/page.tsx` — assembles all five sections (Hero, What We Do, How We
  Work, Who, CTA)
- `components/` — one file per section
- `app/api/contact/route.ts` — handles the CTA form submission (currently
  just logs it — see "Wire up the contact form" below before going live)
- `app/sitemap.ts` / `app/robots.ts` — auto-generated SEO files
- `app/privacy/page.tsx` — privacy policy page
- `app/globals.css` — brand tokens (near-black `#141415`, warm sand
  `#E7DFCF`)

## Analytics & SEO

- Google Analytics 4 (`G-5Q0PLQYSCL`) loads in `app/layout.tsx` via
  `next/script`.
- Title, description, canonical, Open Graph, Twitter card, and
  `ProfessionalService` JSON-LD structured data are set in
  `app/layout.tsx`.
- Canonical domain is `https://www.advhq.com.au`.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy to Vercel

1. Push this project to a GitHub repo
2. Go to vercel.com → New Project → import that repo
3. Vercel auto-detects Next.js — no config needed, just click Deploy
4. Once live, go to Project Settings → Domains → add `advhq.com.au` and
   follow the DNS instructions Vercel gives you

Every future `git push` to your main branch auto-deploys. Every pull
request gets its own preview URL before you merge.

## Before going fully live — one thing still to do

1. **Wire up the contact form.** `app/api/contact/route.ts` currently just
   logs submissions to the server console — nobody actually receives them
   yet. Sign up for [Resend](https://resend.com) (free tier is generous),
   add `RESEND_API_KEY` as an environment variable in Vercel, and uncomment
   the example code in that file.

## Legal

ADV Consulting Pty Ltd | ABN 65 699 875 833

## Notes on the animation

The Hero logo animation builds its own SVG `transform` attribute manually
(see `components/Hero.tsx`) rather than relying on CSS `transform-origin`,
which proved unreliable for SVG groups across browsers during development.
If you ever need to adjust timing, the whole sequence is one GSAP timeline
near the top of that file — durations and offsets are in seconds.
