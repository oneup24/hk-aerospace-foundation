// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const siteUrl = process.env.SITE_URL ?? (isGitHubPages ? 'https://oneup24.github.io' : 'https://hatdf.org');

export default defineConfig({
  site: siteUrl,
  base: isGitHubPages ? '/hk-aerospace-foundation' : '/',
  i18n: {
    defaultLocale: 'hk',
    locales: ['hk', 'zh', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: 'hk',
        locales: { hk: 'zh-HK', zh: 'zh-CN', en: 'en' },
      },
    }),
  ],
});