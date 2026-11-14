# Jagić Law

Website for the law firm of Luka and Damjan Jagić. Plain-language guides on Serbian misdemeanors (prekršaji), written so people find them through Google and AI assistants like ChatGPT and Gemini.

Built with [Astro](https://astro.build), deployed on Vercel.

## Running locally

```bash
npm install
npm run dev
```

## Status

v1 is a draft and is marked `noindex` (`INDEXABLE` in `src/pages/index.astro`). Turn indexing on only after the lawyers review the content.

## Plan

1. Basic home page (done)
2. Deploy to Vercel, connect the jagiclaw.rs domain
3. Guides as a content collection: one question per page, direct answer first, legal basis, named author, last-updated date
4. English section for foreigners (`/en/`)
5. SEO and AI search setup: sitemap, schema markup, Google Search Console, Bing Webmaster Tools + IndexNow, Google Business Profile
6. Lawyers review every guide, then turn indexing on

## Design

- Colors: sign blue `#0f4c9c`, white, asphalt `#262b30`, concrete `#e7e9ec`, deadline red `#c8102e` (used only for deadlines and focus)
- Type: Barlow Semi Condensed (headings, road-sign feel), Source Serif 4 (body text)
- The one bold element is the blue road direction sign in the hero. Everything else stays quiet.
