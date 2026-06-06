<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import CvHeader from "./components/CvHeader.vue";
import SkillsCard from "./components/SkillsCard.vue";
import LanguagesCard from "./components/LanguagesCard.vue";
import HobbiesCard from "./components/HobbiesCard.vue";
import SectionTitle from "./components/SectionTitle.vue";
import ExperienceTimeline from "./components/ExperienceTimeline.vue";
import type { ExperienceItem } from "./locales/types";

const { t, tm } = useI18n();

const work = computed(() => tm("work") as unknown as ExperienceItem[]);
const education = computed(() => tm("education") as unknown as ExperienceItem[]);
</script>

<template>
  <div class="page">
    <div class="cv">
      <CvHeader />

      <div class="cv-body">
        <aside class="sidebar">
          <SkillsCard />
          <LanguagesCard />
          <HobbiesCard />
        </aside>

        <main class="main">
          <section class="card pad">
            <SectionTitle icon="pi pi-briefcase" :label="t('sections.work')" />
            <ExperienceTimeline :items="work" fallback-icon="pi pi-users" />
          </section>

          <section class="card pad">
            <SectionTitle
              icon="pi pi-graduation-cap"
              :label="t('sections.education')"
            />
            <ExperienceTimeline
              :items="education"
              fallback-icon="pi pi-graduation-cap"
            />
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pad {
  padding: 20px 22px 22px;
}
</style>
