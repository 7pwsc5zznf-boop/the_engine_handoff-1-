# The Engine — Landing Page

A production-ready **Next.js 14** (App Router) marketing site for **The Engine** —
a workforce-health accountability and follow-through solution.

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Inter (sans) + JetBrains Mono (status labels) via `next/font`
- **Contact form:** client-side `mailto:` to `jeff@hdhp-theengine.com` (no backend)
- **Database:** none required
- **Environment variables:** none required to build or run

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build for production

```bash
npm run build
npm run start
```

## Deployment

See [`DEPLOYMENT.md`](../../DEPLOYMENT.md) for full deployment instructions
(Vercel, alternative hosts, local setup, domain config, and the production
checklist).

## Project structure

```
nextjs_space/
├── app/
│   ├── globals.css        # Tailwind layers + mission-control styles
│   ├── layout.tsx         # Root layout, fonts, metadata
│   └── page.tsx           # Renders <LandingPage />
├── components/
│   ├── animated-section.tsx   # IntersectionObserver fade-up wrapper
│   ├── landing-page.tsx       # Section assembly
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   └── sections/              # 10 page sections
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```
