<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import SelectButton from "primevue/selectbutton";
import { availableLocales, setLocale, type LocaleCode } from "../i18n";

const { locale } = useI18n();

const options = availableLocales.map((l) => ({
  label: l.label,
  value: l.code,
}));

const model = computed<LocaleCode>({
  get: () => locale.value as LocaleCode,
  set: (value: LocaleCode) => {
    if (value) setLocale(value);
  },
});
</script>

<template>
  <SelectButton
    v-model="model"
    :options="options"
    option-label="label"
    option-value="value"
    :allow-empty="false"
    aria-label="Language"
    class="lang-switcher"
  />
</template>

<style scoped>
.lang-switcher :deep(.p-togglebutton) {
  font-size: 0.78rem;
  padding: 3px 3px;
}
</style>
