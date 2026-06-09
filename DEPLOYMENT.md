# The Engine — Deployment & Production Handoff

Complete instructions for deploying **The Engine** landing page to production.

---

## 1. At a glance

| Item | Value |
|------|-------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Fonts** | Inter + JetBrains Mono (via `next/font`, self-hosted at build) |
| **Node version** | 18.x or 20.x LTS recommended |
| **Package manager** | npm (a `package-lock.json` is included) |
| **Database** | **None required** |
| **Environment variables** | **None required** to build or run |
| **Contact form** | Client-side `mailto:` to `jeff@hdhp-theengine.com` (no backend) |
| **Recommended host** | **Vercel** (primary) |
| **Source root** | `nextjs_space/` |

The handoff package: **`the_engine_handoff.zip`** (complete source, excludes
`node_modules/` and `.next/` — both are regenerated on install/build).

---

## 2. Database requirements

**None.** The site is a fully static/server-rendered marketing page with no
data layer:

- No database, ORM, or migrations.
- No persistent storage of any kind.
- The contact form does not write anywhere — it opens the visitor's email
  client (see §7).

No database provisioning, connection string, or backup strategy is needed.

---

## 3. Environment variables

**None are required.** The project builds and runs with zero configuration.

A documented `.env.example` is included for **optional / future** use only:

| Variable | Required? | Purpose |
|----------|-----------|---------|
| `NEXT_PUBLIC_SITE_URL` | No | Canonical/OG base URL for metadata. Defaults to `https://hdhp-theengine.com` in `app/layout.tsx`. |
| `RESEND_API_KEY` | No (Phase 2) | Only if you replace the `mailto:` form with a real email backend. |
| `CONTACT_TO_EMAIL` | No (Phase 2) | Recipient address for a backend email service. |

> Any variable that must be readable in the browser **must** be prefixed
> `NEXT_PUBLIC_`. Secrets (API keys) must **not** use that prefix.

There are no secrets in the repository, and none need to be set for a standard
deploy.

---

## 4. Vercel deployment (primary, recommended)

Vercel is the company behind Next.js; it auto-detects this project and applies
optimal build settings. No custom configuration is needed.

### Option A — Git-based (recommended for ongoing updates)

1. Push the source to a Git provider (GitHub / GitLab / Bitbucket). If you only
   have the ZIP, unzip it and run:
   ```bash
   cd nextjs_space
   git init && git add -A && git commit -m "Initial commit: The Engine landing page"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to <https://vercel.com/new> and **Import** the repository.
3. Vercel auto-detects the settings — confirm:
   - **Framework Preset:** `Next.js`
   - **Root Directory:** `nextjs_space` *(important if the repo root contains the folder)*
   - **Build Command:** `next build` (default)
   - **Output Directory:** `.next` (default — leave as-is)
   - **Install Command:** `npm install` (default)
4. **Environment Variables:** none required — skip this step.
5. Click **Deploy**. First build takes ~1–2 minutes.
6. Every subsequent `git push` to the production branch auto-deploys; pull
   requests get preview URLs automatically.

### Option B — Vercel CLI (no Git required)

```bash
npm i -g vercel
cd nextjs_space
vercel          # follow prompts → creates a preview deployment
vercel --prod   # promote to production
```

### Notes

- Do **not** add `output: 'standalone'` or a custom server — Vercel handles
  serverless/edge packaging automatically.
- `poweredByHeader` is already disabled in `next.config.js`.

---

## 5. Alternative hosting platforms

The app is a standard Next.js 14 build and runs anywhere Node 18+ is available.

### Netlify
1. Connect the repo at <https://app.netlify.com>.
2. Install the official **Next.js Runtime** (auto-suggested).
3. Build command: `npm run build` · Publish handled by the runtime.
4. Set **Base directory** to `nextjs_space` if the folder is nested.

### Cloudflare Pages
1. Create a Pages project from your Git repo.
2. Framework preset: **Next.js**.
3. Build command: `npx @cloudflare/next-on-pages@1` (or use the Pages Next.js
   preset) · Build output directory: `.vercel/output/static`.
4. Set the project root to `nextjs_space` if nested.

### Render / Railway / Fly.io / any Node host
Run as a long-lived Node service:
```bash
npm install
npm run build
npm run start        # serves on PORT (default 3000)
```
- **Start command:** `npm run start`
- **Port:** respects the `PORT` env var; defaults to `3000`.

### Docker (self-hosted / any cloud)
```dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS run
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app ./
EXPOSE 3000
CMD ["npm", "run", "start"]
```
```bash
docker build -t the-engine . && docker run -p 3000:3000 the-engine
```
> For the smallest image you may optionally enable `output: 'standalone'` in
> `next.config.js` and copy only `.next/standalone`. This is **not** needed for
> Vercel and is only worth it for Docker.

### Static export (only if you drop the interactive form)
The contact form is a client component but does not require a server, so the
site can be statically exported if desired:
```bash
# add `output: 'export'` to next.config.js, then:
npm run build   # emits an `out/` folder you can host on any static CDN
```
Use this only if you want pure static hosting (S3, GitHub Pages, etc.).

---

## 6. Local development setup

**Prerequisites:** Node.js 18.x or 20.x LTS and npm.

```bash
# 1. Unzip the handoff package (or clone the repo)
unzip the_engine_handoff.zip -d the-engine && cd the-engine
#    (or: cd nextjs_space)

# 2. Install dependencies
npm install

# 3. Start the dev server (hot reload)
npm run dev
#    → http://localhost:3000

# 4. Production build + run locally
npm run build
npm run start        # → http://localhost:3000

# 5. Lint
npm run lint
```

No `.env` file is needed. (If you adopt an optional variable from §3,
copy `.env.example` to `.env.local`.)

> The build self-hosts the Google fonts at build time, so the **build machine
> needs internet access** the first time. Hosts like Vercel handle this
> automatically.

---

## 7. Contact form implementation notes

**Current implementation (Phase 1 — shipping):**
- File: `components/sections/contact-section.tsx` (a client component).
- Fields: **Name, Organization, Email, Message**.
- On submit it composes a structured `mailto:` link and opens the visitor's
  default email client, pre-filled and addressed to **`jeff@hdhp-theengine.com`**.
- **No backend, no server, no API keys, no database.** This is intentional for
  the initial launch and keeps the site fully static/serverless.

**Limitations to be aware of:**
- Requires the visitor to have a configured email client (desktop or webmail
  handler). Visitors without one will see no email window open.
- No submission is stored, logged, or confirmed server-side.
- No spam protection (none needed, since nothing is received server-side).

**To change the recipient address:** edit the `CONTACT_EMAIL` constant at the
top of `contact-section.tsx` (also update the footer link in
`components/site-footer.tsx` and the contact link).

**Phase 2 — backend email service (recommended future upgrade):**
Replace the `mailto:` handler with a real form submission so you capture leads
reliably and don't depend on the visitor's mail client:
1. Add an API route, e.g. `app/api/contact/route.ts`.
2. Integrate an email/transactional provider — e.g. **Resend**, **SendGrid**,
   or **Postmark**.
3. Store the provider key as a server-side env var (`RESEND_API_KEY`, etc. —
   **not** `NEXT_PUBLIC_`) and the recipient as `CONTACT_TO_EMAIL`.
4. Update `handleSubmit` to `fetch('/api/contact', { method: 'POST', ... })`
   and show success/error states.
5. Optionally add spam protection (honeypot field or a CAPTCHA) and basic
   server-side validation.

---

## 8. Domain configuration guidance

The intended production domain is **`hdhp-theengine.com`** (the contact email
already uses this domain).

### On Vercel
1. In the project → **Settings → Domains**, add `hdhp-theengine.com` and
   `www.hdhp-theengine.com`.
2. Vercel shows the DNS records to set at your registrar. Typical setup:
   - **Apex (`hdhp-theengine.com`):** an `A` record to Vercel's IP
     `76.76.21.21`, **or** use Vercel's nameservers / an `ALIAS`/`ANAME` if
     your DNS provider supports it.
   - **`www`:** a `CNAME` to `cname.vercel-dns.com`.
3. Choose a primary domain and let Vercel auto-redirect the other (commonly
   redirect `www` → apex, or vice-versa).
4. **HTTPS/SSL** is provisioned automatically by Vercel (Let's Encrypt) — no
   action needed once DNS propagates (minutes to a few hours).
5. Update `metadataBase` in `app/layout.tsx` if the final domain differs from
   `https://hdhp-theengine.com` (it is currently set to that value).

### On other hosts
- Point the apex/`www` DNS records to the host per their docs (Netlify,
  Cloudflare Pages, etc. all provide the target records).
- Ensure automatic TLS/SSL is enabled (all listed hosts offer free certs).
- Set `www` ↔ apex redirect to one canonical host.

---

## 9. Production checklist

Before go-live:

- [ ] `npm install` completes cleanly on the deploy host.
- [ ] `npm run build` succeeds with no type or lint errors.
- [ ] `npm run lint` passes (currently: **no warnings or errors**).
- [ ] Site renders correctly at the preview URL (all 10 sections, header,
      footer).
- [ ] Contact form opens an email to `jeff@hdhp-theengine.com` with the fields
      pre-filled.
- [ ] All in-page anchor links (header nav, CTAs) scroll to the right sections.
- [ ] Mobile / responsive layout verified (≤640px and ≥1024px).
- [ ] `prefers-reduced-motion` respected (animations disabled when set).
- [ ] Page metadata/title correct; `metadataBase` matches the live domain.
- [ ] Custom domain added and DNS records set; HTTPS active.
- [ ] `www` ↔ apex redirect configured to a single canonical URL.
- [ ] Favicon / OG image reviewed (add brand assets if desired).
- [ ] No secrets committed to the repo (none currently exist).

Post-launch (optional / Phase 2):
- [ ] Add analytics (Vercel Analytics, Plausible, or GA4).
- [ ] Implement the backend contact form (§7) for reliable lead capture.
- [ ] Add `sitemap.xml` / `robots.txt` if SEO is a priority.

---

## 10. No Abacus AI dependencies

This codebase contains **no Abacus AI–specific dependencies, SDKs, API keys, or
service calls**. Runtime dependencies are limited to:

```
next, react, react-dom
```

It is a clean, standard Next.js project that runs on any Node 18+ host with no
proprietary tooling.

---

## 11. Package contents

- **`the_engine_handoff.zip`** — complete source code (excludes
  `node_modules/` and `.next/`, both regenerated on install/build).
- **`FILE_TREE.txt`** — full file/folder listing of the project.
- **`DEPLOYMENT.md`** — this document.

Project source lives under `nextjs_space/`. Start with `README.md` inside it
for a quick orientation.
