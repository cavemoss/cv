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

function getInitialLocale(): LocaleCode {
  const saved = localStorage.getItem(STORAGE_KEY) as LocaleCode | null;
  if (saved && availableLocales.some((l) => l.code === saved)) return saved;
  const browser = navigator.language.slice(0, 2);
  if (browser === "zh") return "zh";
  if (browser === "ru") return "ru";
  return "en";
}

export const i18n = createI18n<false>({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: "en",
  messages: { en, zh, ru },
});

export function setLocale(code: LocaleCode) {
  i18n.global.locale.value = code;
  localStorage.setItem(STORAGE_KEY, code);
  document.documentElement.setAttribute("lang", code);
}

document.documentElement.setAttribute("lang", i18n.global.locale.value);
