# Hong Kong Aerospace Talent Development Foundation — Website

> 香港航天人才發展慈善基金會 · 官方網站
> Aligning with China's 15th Five-Year Plan & HK 2026 Policy Address — cultivating Hong Kong's aerospace talent.

A static, multilingual, SEO/GEO-optimised website for the Hong Kong Aerospace Talent Development Foundation. Built with Astro + Tailwind CSS.

## Stack

- **Astro 5** — static site framework
- **Tailwind CSS 3** — utility CSS
- **Markdown (Content Collections)** — news articles
- **3 languages**: 繁體中文 (`/hk/`) · 简体中文 (`/zh/`) · English (`/en/`)
- **JSON-LD** — `Organization` schema on every page + `Article` schema on news pages
- **Open Graph + Twitter Card** — per-page metadata
- **hreflang + sitemap** — auto-generated multilingual sitemap

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:4321/ — you'll be redirected to `/hk/`.

## Pages (4)

| Route | Purpose |
| --- | --- |
| `/[lang]/` | Home — hero, 4 stat anchors, Why Now, 4 pillars, latest insights, CTA |
| `/[lang]/about` | About — mission quote, Why HK, Why Now, 4 work areas, policy alignment |
| `/[lang]/news` | News & Insights — SEO/GEO engine, lists 5 seed articles per language |
| `/[lang]/news/[slug]` | Article — breadcrumb, hero, JSON-LD Article, body, back-link |
| `/[lang]/contact` | Contact — direct contact details + mailto form |
| `/` | Redirects to `/hk/` |
| `/404` | Not-found page |

## Content strategy

- **PR / Marketing angle** — promotional copy, data-led, no policy dump
- **Aligned with national strategy** — concept-level, not paragraph-level
- **SEO keywords per article** — see front-matter `keywords` field
- **JSON-LD Article** — auto-generated for every news page
- **JSON-LD Organization** — on every page (name, address, logo, contact)

## Project structure

```
src/
├─ components/
│  ├─ Home.astro           # Home page (PR hero + stat strip + pillars + insights)
│  ├─ About.astro          # About page (mission + why HK + why now + work)
│  ├─ Contact.astro        # Contact page (details + mailto form)
│  ├─ NewsList.astro       # News list
│  ├─ NavBar.astro         # 4-item sticky nav + lang switcher
│  ├─ Footer.astro         # 4-column footer
│  ├─ Container.astro / Section.astro / StatBlock.astro / NewsCard.astro
├─ content/
│  └─ news/{hk,zh,en}/    # 5 seed articles × 3 langs
├─ i18n/
│  ├─ dict.ts              # Dict type + dict(lang) lookup
│  ├─ dicts.ts             # Strings (繁/簡/EN)
│  └─ config.ts            # Lang codes + HTML/OG locale map
├─ layouts/BaseLayout.astro
├─ pages/
│  ├─ [lang]/news/         # Dynamic news list + slug
│  ├─ {hk,zh,en}/          # Per-lang index, about, contact
│  ├─ index.astro          # / → /hk/ redirect
│  └─ 404.astro
└─ styles/global.css
```

## Editing content

### Add a news article

Create 3 markdown files (繁 / 簡 / EN), one per language folder:

```
src/content/news/hk/my-new-post.md
src/content/news/zh/my-new-post.md
src/content/news/en/my-new-post.md
```

Frontmatter:

```markdown
---
title: 我的新文章標題
excerpt: 簡短摘要，會顯示在列表卡片（最多 ~120 字）。
category: 政策解讀            # 政策解讀 / 趨勢分析 / 深度分析
date: 2026-09-30
author: HATDF 編輯部          # optional
readingMinutes: 4              # optional, auto-calculated if omitted
keywords:                       # optional, for SEO
  - 香港航天人才
  - 航天政策
---

文章內文（Markdown）...
```

> **Tip:** YAML keys with colons or apostrophes must be quoted:
> `title: "Title with: a colon"`
> `title: 'Title with apostrophe'`

## Editing UI strings

Edit `src/i18n/dicts.ts` — three objects (`hk`, `zh`, `en`) sharing the same key shape (typed in `src/i18n/dict.ts`).

## Adding a new page

1. Create the content component at `src/components/MyPageContent.astro` (accepts `lang: 'hk' | 'zh' | 'en'`).
2. Create three thin wrappers:
   - `src/pages/hk/my-page.astro`
   - `src/pages/zh/my-page.astro`
   - `src/pages/en/my-page.astro`
3. Add the nav link in `src/components/NavBar.astro` and `Footer.astro`.
4. Update `src/i18n/dict.ts` and `dicts.ts` with the new strings.

## Scripts

```bash
npm run dev       # Dev server with HMR
npm run build     # Static production build → dist/
npm run preview   # Serve the built dist/
```

## Build for production

```bash
npm run build
```

28 pages built (~8s). Output: `dist/` with `sitemap-index.xml` (multilingual, via `@astrojs/sitemap`).

## Deploy

Recommended: **Cloudflare Pages** (free, edge, Asia-fast) or **Vercel**.

- Cloudflare Pages → connect repo → build command `npm run build` → output `dist`
- Custom domain: configure DNS for the foundation's official domain (e.g. `hatdf.org`)

## Accessibility

- WCAG 2.1 AA target
- Skip-to-content link
- Focus-visible gold outline
- `aria-current` on active nav
- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`)
- Sufficient colour contrast (canvas `#0A0F1F` + ink `#FFFFFF` + gold `#D4A24C`)

## Roadmap (post CEO approval)

- [ ] Real logos (replace `/logo.png` with designed VI)
- [ ] Open Graph image generation (per page or per article)
- [ ] Form backend (Resend / Formspree) for contact form submissions
- [ ] Newsletter signup (Buttondown / ESP)
- [ ] RSS feed for news
- [ ] Search (Pagefind)
- [ ] Article cover images (currently SVG placeholder)
- [ ] CMS (Sanity / Decap) for non-technical content editors

## License

© 2026 Hong Kong Aerospace Talent Development Foundation. All rights reserved.