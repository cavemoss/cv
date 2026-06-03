# CV Website

A single-page, multilingual (Russian / English / Chinese) CV built with **Vue 3 + Vite + PrimeVue v4**.

All component styling is driven by PrimeVue's design-token theming (`definePreset`) instead of hand-written CSS, and all CV content lives in config/data files.

## Tech stack

- [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/)
- [PrimeVue v4](https://primevue.org/) with [`@primeuix/themes`](https://primevue.org/theming/styled/) (Aura preset, customized)
- [vue-i18n](https://vue-i18n.intlify.dev/) for RU / EN / ZH switching
- [PrimeIcons](https://primevue.org/icons/)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (default http://localhost:5173).

```bash
npm run build      # production build into dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
  main.js                  App bootstrap (PrimeVue plugin + preset + i18n)
  App.vue                  Page layout (header + sidebar + main)
  theme/preset.js          Design-token theme (all visual styling)
  i18n/                    vue-i18n setup + en/ru/zh UI labels
  data/cv.js               CV content per locale (single source of truth)
  components/
    AppHeader.vue          Photo, name, profession, contacts, language switcher
    LanguageSwitcher.vue   RU / EN / ZH toggle
    Sidebar.vue            Skills (tags), Languages, Hobbies
    ExperienceTimeline.vue Work-experience timeline
    EducationTimeline.vue  Education timeline
  styles/base.css          Minimal reset + base font only
public/assets/             Placeholder photo, company/university logos, favicon
```

## Customizing content

Edit [`src/data/cv.js`](src/data/cv.js). The `cv` object is keyed by locale (`en`, `ru`, `zh`); each holds `profile`, `skills`, `languages`, `hobbies`, `experience`, and `education`.

## Customizing styling

Edit [`src/theme/preset.js`](src/theme/preset.js). Colors, radii, shadows, and per-component tokens (card, tag, timeline, button, etc.) are configured there as plain objects.

## Swapping images

Replace the placeholder SVGs in `public/assets/` (keeping the same file names), or update the paths in `src/data/cv.js`.
