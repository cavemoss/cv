import { createI18n } from "vue-i18n";
import { en } from "./locales/en";
import { zh } from "./locales/zh";
import { ru } from "./locales/ru";

export type LocaleCode = "en" | "zh" | "ru";

export const availableLocales: { code: LocaleCode; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
  { code: "ru", label: "Русский" },
];

const STORAGE_KEY = "cv-locale";

function isValidLocale(code: string): code is LocaleCode {
  return availableLocales.some((l) => l.code === code);
}

function getLocaleFromPath(): LocaleCode | null {
  const seg = window.location.pathname.split("/").filter(Boolean)[0] ?? "";
  return isValidLocale(seg) ? seg : null;
}

function buildLocalePath(code: LocaleCode): string {
  const segments = window.location.pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isValidLocale(segments[0])) {
    segments[0] = code;
  } else {
    segments.unshift(code);
  }
  return "/" + segments.join("/");
}

function getInitialLocale(): LocaleCode {
  const fromPath = getLocaleFromPath();
  if (fromPath) return fromPath;
  const saved = localStorage.getItem(STORAGE_KEY) as LocaleCode | null;
  if (saved && isValidLocale(saved)) return saved;
  const browser = navigator.language.slice(0, 2);
  if (browser === "zh") return "zh";
  if (browser === "ru") return "ru";
  return "en";
}

const initialLocale = getInitialLocale();

// Normalise the URL on first load so the locale is always in the path.
if (!getLocaleFromPath()) {
  history.replaceState(null, "", buildLocalePath(initialLocale));
}

export const i18n = createI18n<false>({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: "en",
  messages: { en, zh, ru },
});

export function setLocale(code: LocaleCode) {
  i18n.global.locale.value = code;
  localStorage.setItem(STORAGE_KEY, code);
  document.documentElement.setAttribute("lang", code);
  history.pushState(null, "", buildLocalePath(code));
}

// Sync locale when the user navigates back / forward.
window.addEventListener("popstate", () => {
  const fromPath = getLocaleFromPath();
  if (fromPath && fromPath !== i18n.global.locale.value) {
    i18n.global.locale.value = fromPath;
    localStorage.setItem(STORAGE_KEY, fromPath);
    document.documentElement.setAttribute("lang", fromPath);
  }
});

document.documentElement.setAttribute("lang", initialLocale);
