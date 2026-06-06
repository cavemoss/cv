# Daniil Sandy — CV

A single-page professional CV built with **Vue 3 + TypeScript + Vite**, styled with **PrimeVue** (flexible theme presets) and translated into **English, Chinese and Russian** via **vue-i18n**.

## Features

- Clean, low-key design with minimal color and small line icons (PrimeIcons).
- Language switcher (EN / 中文 / Русский) with the choice persisted to `localStorage`.
- Header with photo, profession and contact details.
- Sidebar: Skills (tags), Languages, Hobbies & Achievements.
- Main column: Work Experience and Education shown as a timeline.
- Responsive layout and a print-friendly stylesheet (use the browser's *Print → Save as PDF*).

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build
```

## Customizing

| What | Where |
| --- | --- |
| Profile photo | replace `src/assets/profile.svg` (or point `CvHeader.vue` to a `.jpg`) |
| Skills / contacts / logo labels | `src/data/profile.ts` |
| Translatable content | `src/locales/en.ts`, `zh.ts`, `ru.ts` |
| Add a language | add a locale file + register it in `src/i18n.ts` |
| Theme colors / preset | `src/theme.ts` (`definePreset` on the Aura preset) |

## Tech stack

- Vue 3 (`<script setup>`) + TypeScript
- Vite 6
- PrimeVue 4 + `@primevue/themes` (Aura preset, customized) + PrimeIcons
- vue-i18n 10
