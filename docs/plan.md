# 香港航天人才發展慈善基金會 — 網站建置計劃 v0.3

> CEO approval ready · 純前端 · PR/Marketing 角度
> 4 頁面 · 三語 · 不接受捐款 · 新聞+Blog 為 SEO/GEO 主力

---

## 1. 範圍（v0.3 修訂）

- ✅ 4 頁面：Home / 關於 / 新聞&Blog / 聯絡
- ✅ 三語（繁 / 簡 / EN），繁中為預設主語言
- ✅ PR / Marketing 文案 — 簡潔、宣傳式、含數據
- ✅ 不引述 / 不詳列十五五與施政報告原文，僅做概念性對齊
- ✅ 新聞 & Blog = SEO/GEO 引擎
- ❌ 不做捐款功能
- ❌ 不做表單後端（mailto）
- ❌ 不做部署（dev server 給 CEO 看）

---

## 2. 4 頁面資訊架構

| # | 頁 | 路由 | 內容定位 |
|---|---|---|---|
| 1 | 主頁 | `/[lang]/` | Hero + 數據 + 政策紅利 + 最新洞察 |
| 2 | 關於 | `/[lang]/about` | 我們是誰 + 為何是 HK + 為何是現在 + 對齊政策（短 bullets）|
| 3 | 新聞 & Blog | `/[lang]/news` | 列表 + `/[lang]/news/[slug]` 內頁，SEO/GEO 主力 |
| 4 | 聯絡 | `/[lang]/contact` | mailto + 地址 + 社群連結 |

---

## 3. 品牌（沿用 v0.2）

| | |
|---|---|
| 中文全名 | 香港航天人才發展慈善基金會 |
| 中文簡稱 | 航天人才基金會 |
| 英文 | Hong Kong Aerospace Talent Development Foundation |
| 英文簡稱 | HATDF |
| 標語（中） | 啟程 · 探索 · 同行 |
| Tagline (EN) | Launch · Discover · Together |

---

## 4. 文案角度（PR / Marketing 為主）

### 4.1 寫作原則
- **數據先行**：每頁 hero 至少有 2-3 個數字錨點
- **政策紅利概念**：用「香港正迎來航天黃金時代」「政策窗口已打開」等口號式表達，**不堆砌政策原文**
- **對齊只做暗示**：用「對齊國家戰略」「響應施政報告」等概括詞，不展開政策細節
- **CTA 導向「了解 / 閱讀」**：因不收捐款，CTA 為「了解我們」「閱讀最新洞察」「與我們對話」

### 4.2 三語預設角色
| 語言 | 用途 | 預設主語言 |
|---|---|---|
| 繁中 (zh-Hant) | 主力 — 香港本地繁體中文 | ✅ 是 |
| 簡中 (zh-Hans) | 內地 / 跨境受眾 |  |
| EN | 國際 / 學術 / 媒體 |  |

---

## 5. 技術棧（沿用 v0.2）

| | |
|---|---|
| 框架 | Astro 5 |
| 樣式 | Tailwind CSS |
| 內容 | Astro Content Collections（Markdown for news） |
| 多語 | Astro 內建 i18n |
| 部署 | 本地 dev 即可 |

---

## 6. 設計系統

- Primary 深藍 `#0A1F44` + Accent 星金 `#D4A24C` + 白底
- 字型：Noto Sans TC + Inter
- 無障礙：WCAG 2.1 AA

---

## 7. 交付

1. 本地 `npm run dev` 可跑，三語切換正常
2. 4 頁面齊全，含 3-5 篇 seed news articles
3. README 說明如何跑、改文案、加新文章

---

## 8. 開發步驟

1. **M1** — 清理舊 16 頁結構 → 改為 4 頁 routing
2. **M2** — 三語文案（PR 角度）+ seed news 5 篇
3. **M3** — 共用 layout + 元件（NavBar / Hero / StatBlock / NewsCard / Footer）
4. **M4** — dev server 跑通 + README + 截圖