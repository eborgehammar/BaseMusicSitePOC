# Example Piano Studio (POC)

A public proof-of-concept for a piano studio website, built with Astro and Tailwind CSS. Every name, price, image, and link is a placeholder.

## Outline

**Stack:** Astro (static output), Tailwind CSS v4, `@astrojs/sitemap`, self-hosted fonts (Inter, Fraunces).

**Pages**

| Path | Purpose |
|---|---|
| `/` | Hero, services, sheet music "coming soon", location |
| `/about` | Teacher bio and portrait |
| `/lessons` | Programs, tuition, policies |
| `/onlinecoaching` | How it works, pricing tiers, intake link |
| `/live` | Live session description, weekly schedule, highlights |
| `/videos` | Performance video grid |
| `/contact` | Contact button (`mailto:` placeholder) and social links |
| `/404` | Not-found page |

**Layout:** `BaseLayout` sets the per-page title and description, canonical URL, JSON-LD, and GA4 (production only).

**Components:** Header (with mobile menu), Footer, SocialLinks, ButtonLink, PricingCard, VideoEmbed (click-to-load), PlaceholderImage.

**Data:** typed files in `src/content/` (lessons, coaching, schedule, videos).

**Out of scope for this POC:** real content and images, AWS hosting, CI/CD, DNS, Open Graph and Twitter tags, and video platform embeds.

## Commands

- `npm run dev`: start the dev server
- `npm run build`: build the static site into `dist/`
- `npm run preview`: preview the production build
- `npx astro check`: type-check the project

## Configuration

- Site identity (name, domain, email, navigation, social links): `src/config/site.ts`
- The canonical domain must also match `site` in `astro.config.mjs`.
- Google Analytics 4: copy `.env.example` to `.env` and set `PUBLIC_GA_ID`. The tag loads only in production builds.
