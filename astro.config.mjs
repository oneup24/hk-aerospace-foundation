// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hatdf.org',
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
