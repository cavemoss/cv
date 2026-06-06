<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import SectionTitle from "./SectionTitle.vue";
import type { LanguageItem } from "../locales/types";

const { t, tm } = useI18n();

const languages = computed<LanguageItem[]>(() => tm("languages"));
</script>

<template>
  <section class="card pad">
    <SectionTitle icon="pi pi-globe" :label="t('sections.languages')" />
    <ul class="langs">
      <li v-for="(l, i) in languages" :key="i" class="lang">
        <div class="lang-row">
          <span class="lang-name">{{ l.name }}</span>
          <span class="lang-level">{{ l.level }}</span>
        </div>
        <span v-if="l.note" class="lang-note">{{ l.note }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.pad {
  padding: 18px 18px 20px;
}

.langs {
  list-style: none;
  margin: 14px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.lang-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
}

.lang-name {
  color: var(--cv-heading);
  font-weight: 600;
  font-size: 0.86rem;
}

.lang-level {
  color: var(--cv-text);
  font-size: 0.8rem;
  white-space: nowrap;
}

.lang-note {
  display: block;
  margin-top: 2px;
  color: var(--cv-muted);
  font-size: 0.76rem;
}
</style>
