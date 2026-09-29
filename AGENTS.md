# Project Rules — HK Aerospace Foundation Website

## Engine & Language
- **Astro 5 + Tailwind CSS** (static site, multilingual)
- TypeScript for components
- No CMS; content lives in repo

## Content & Copy

### All visible text must be editable via `src/i18n/dicts.ts`

**Hard rule:** No hardcoded user-facing strings inside `.astro` components or `.md` frontmatter.

| Text source | Where it lives | Editable by |
|---|---|---|
| UI strings (nav, buttons, headings, labels, captions, placeholders, form copy, footer copy, hero/section text) | `src/i18n/dicts.ts` (3 langs: `hk`, `zh`, `en`) | direct edit |
| Article body content | `src/content/news/{hk,zh,en}/*.md` | direct edit |
| Article metadata (title/excerpt/category/date) | frontmatter of those `.md` files | direct edit |
| Page route / URL structure | `src/pages/[lang]/]/...` | developer only (CEO review required) |
| Brand assets (logo, hero photos, event photos) | `public/img/` | direct file drop |

### When adding new visible text:

1. **First**, add the new key to `src/i18n/dict.ts` `Dict` type
2. **Then**, add the value to all 3 langs in `src/i18n/dicts.ts`
3. **Finally**, use `d.<section>.<key>` in the component — never a string literal

```ts
// ❌ WRONG
<h2>About the Foundation</h2>

// ✅ CORRECT
<h2>{d.about.pageTitle}</h2>
```

### News articles:
- Same slug across 3 langs (one file per `hk`, `zh`, `en` folder)
- Frontmatter `title` may need quotes if it contains `:` or `'` (YAML gotcha)
- `keywords` frontmatter is for SEO; keep 2-4 terms

### When removing / changing visible text:
- If a string in `dicts.ts` is no longer used, ask before removing
- Maintain consistency across all 3 langs — never leave one lang behind

## Tech

- Static site, no runtime backend
- Multi-language: `/hk/` (繁中, default), `/zh/` (简中), `/en/`
- GitHub Pages deployment via `.github/workflows/deploy.yml`
- Repo URL prefix `/hk-aerospace-foundation/` handled via `astro.config.mjs` `base` + `import.meta.env.BASE_URL`
- Never commit `.env` or secrets

## Version Control

- **No auto-commit** — wait for explicit CEO instruction
- Commit messages + staging are CEO-controlled
- Use `npm run dev` for local preview
- `npm run build` before push (verifies typecheck + build)

## SEO

- JSON-LD `Organization` schema on every page (via `BaseLayout`)
- JSON-LD `Article` schema on news detail pages
- `hreflang` for 3 langs + `x-default` → `hk/`
- Multilingual `sitemap-index.xml` auto-generated
- Per-article `keywords` frontmatter for SEO targeting