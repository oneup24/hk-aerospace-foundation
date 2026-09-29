export const LANGS = ['hk', 'zh', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'hk';

export const LANG_LABEL: Record<Lang, string> = {
  hk: '繁體',
  zh: '简体',
  en: 'English',
};

export const LANG_HTML: Record<Lang, string> = {
  hk: 'zh-HK',
  zh: 'zh-CN',
  en: 'en',
};

export const LANG_OG: Record<Lang, string> = {
  hk: 'zh_HK',
  zh: 'zh_CN',
  en: 'en_US',
};

export const SITE_BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function langPath(lang: Lang, suffix: string = ''): string {
  const trimmed = suffix ? (suffix.startsWith('/') ? suffix : `/${suffix}`) : '';
  return `${SITE_BASE}/${lang}${trimmed}`;
}