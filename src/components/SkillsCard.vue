<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SectionTitle from "./SectionTitle.vue";
import { skillGroups } from "../data/profile";

const { t } = useI18n();
</script>

<template>
  <section class="card pad">
    <SectionTitle icon="pi pi-code" :label="t('sections.skills')" />
    <div class="skill-groups">
      <div v-for="group in skillGroups" :key="group.key" class="skill-group">
        <h3 class="group-label">{{ t(`sections.${group.key}`) }}</h3>
        <ul class="tags">
          <li v-for="s in group.items" :key="s" class="tag">{{ s }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pad {
  padding: 18px 18px 20px;
}

.skill-groups {
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.group-label {
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.06em;
  margin: 0 0 8px;
  color: var(--cv-accent);
}

.tags {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.tag {
  font-size: 0.76rem;
  color: var(--cv-text);
  background: var(--cv-card);
  border: 1px solid var(--cv-border-strong);
  border-radius: 8px;
  padding: 4px 10px;
  transition:
    border-color 0.15s ease,
    color 0.15s ease;
}

.tag:hover {
  border-color: var(--cv-accent);
  color: var(--cv-accent);
}
</style>
