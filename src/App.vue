<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Card from 'primevue/card';

import AppHeader from './components/AppHeader.vue';
import Sidebar from './components/Sidebar.vue';
import ExperienceTimeline from './components/ExperienceTimeline.vue';
import EducationTimeline from './components/EducationTimeline.vue';
import { cv } from './data/cv.js';

const { t, locale } = useI18n();

const data = computed(() => cv[locale.value] ?? cv.en);
</script>

<template>
  <div class="cv-page">
    <div class="cv-container">
      <AppHeader :profile="data.profile" />

      <div class="cv-body">
        <Sidebar
          :skills="data.skills"
          :languages="data.languages"
          :hobbies="data.hobbies"
        />

        <main class="cv-main">
          <Card>
            <template #title>{{ t('sections.experience') }}</template>
            <template #content>
              <ExperienceTimeline :items="data.experience" />
            </template>
          </Card>

          <Card>
            <template #title>{{ t('sections.education') }}</template>
            <template #content>
              <EducationTimeline :items="data.education" />
            </template>
          </Card>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cv-page {
  min-height: 100vh;
  background:
    radial-gradient(1200px 600px at 100% -10%, var(--p-primary-50), transparent),
    var(--p-surface-100);
  padding: 2rem 1rem 3rem;
}

.cv-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.cv-body {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 1.75rem;
  align-items: start;
}

.cv-main {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

@media (max-width: 880px) {
  .cv-body {
    grid-template-columns: 1fr;
  }
}
</style>
