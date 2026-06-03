<script setup>
import { useI18n } from 'vue-i18n';
import Card from 'primevue/card';
import Tag from 'primevue/tag';

defineProps({
  skills: { type: Array, required: true },
  languages: { type: Array, required: true },
  hobbies: { type: Array, required: true }
});

const { t } = useI18n();
</script>

<template>
  <aside class="cv-sidebar">
    <Card>
      <template #title>{{ t('sections.skills') }}</template>
      <template #content>
        <div class="cv-sidebar__tags">
          <Tag v-for="skill in skills" :key="skill" :value="skill" severity="secondary" />
        </div>
      </template>
    </Card>

    <Card>
      <template #title>{{ t('sections.languages') }}</template>
      <template #content>
        <ul class="cv-sidebar__list">
          <li v-for="lang in languages" :key="lang.name" class="cv-sidebar__item">
            <i :class="lang.icon" class="cv-sidebar__icon" />
            <span>
              <strong>{{ lang.name }}</strong>
              <span class="cv-sidebar__muted"> — {{ lang.level }}</span>
            </span>
          </li>
        </ul>
      </template>
    </Card>

    <Card>
      <template #title>{{ t('sections.hobbies') }}</template>
      <template #content>
        <ul class="cv-sidebar__list">
          <li v-for="(hobby, idx) in hobbies" :key="idx" class="cv-sidebar__item">
            <i :class="hobby.icon" class="cv-sidebar__icon" />
            <span>{{ hobby.text }}</span>
          </li>
        </ul>
      </template>
    </Card>
  </aside>
</template>

<style scoped>
.cv-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cv-sidebar__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.cv-sidebar__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.cv-sidebar__item {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  line-height: 1.45;
}

.cv-sidebar__icon {
  color: var(--p-primary-color);
  margin-top: 0.2rem;
}

.cv-sidebar__muted {
  color: var(--p-text-muted-color);
}
</style>
