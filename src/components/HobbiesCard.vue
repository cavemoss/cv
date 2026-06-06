<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import SectionTitle from "./SectionTitle.vue";
import type { HobbyItem } from "../locales/types";

const { t, tm } = useI18n();

const hobbies = computed<HobbyItem[]>(() => tm("hobbies"));
</script>

<template>
  <section class="card pad">
    <SectionTitle icon="pi pi-palette" :label="t('sections.hobbies')" />
    <ul class="hobbies">
      <li v-for="(h, i) in hobbies" :key="i" class="hobby">
        <div class="hobby-body">
          <span class="hobby-title">{{ h.title }}</span>
          <span class="hobby-desc">{{ h.desc }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.pad {
  padding: 18px 18px 20px;
}

.hobbies {
  list-style: none;
  margin: 14px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hobby {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.hobby > i {
  color: var(--cv-accent);
  font-size: 0.95rem;
  margin-top: 2px;
  width: 18px;
  text-align: center;
  flex: 0 0 auto;
}

.hobby-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.hobby-title {
  color: var(--cv-heading);
  font-weight: 600;
  font-size: 0.84rem;
}

.hobby-desc {
  color: var(--cv-text);
  font-size: 0.79rem;
}
</style>
