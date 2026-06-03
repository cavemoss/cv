<script setup>
import Timeline from 'primevue/timeline';
import Avatar from 'primevue/avatar';

defineProps({
  items: { type: Array, required: true }
});
</script>

<template>
  <Timeline :value="items" align="left" class="cv-timeline">
    <template #marker="{ item }">
      <Avatar :image="item.logo" shape="circle" class="cv-timeline__logo" />
    </template>
    <template #content="{ item }">
      <article class="cv-timeline__card">
        <div class="cv-timeline__head">
          <h3 class="cv-timeline__company">{{ item.company }}</h3>
          <span class="cv-timeline__period">{{ item.period }}</span>
        </div>
        <p class="cv-timeline__role">{{ item.role }}</p>
        <p class="cv-timeline__desc">{{ item.description }}</p>
      </article>
    </template>
  </Timeline>
</template>

<style scoped>
.cv-timeline {
  margin-top: 0.5rem;
}

.cv-timeline__logo {
  width: 2.6rem !important;
  height: 2.6rem !important;
  background: var(--p-surface-0);
  border: 2px solid var(--p-surface-200);
  box-shadow: 0 2px 8px -3px rgba(15, 23, 42, 0.4);
}

.cv-timeline__card {
  background: var(--p-surface-0);
  border: 1px solid var(--p-surface-200);
  border-radius: var(--p-border-radius-lg, 14px);
  padding: 1.1rem 1.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 6px 18px -14px rgba(15, 23, 42, 0.5);
}

.cv-timeline__head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
}

.cv-timeline__company {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
}

.cv-timeline__period {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--p-primary-color);
  white-space: nowrap;
}

.cv-timeline__role {
  margin: 0.25rem 0 0.5rem;
  font-weight: 600;
  color: var(--p-text-color);
}

.cv-timeline__desc {
  margin: 0;
  color: var(--p-text-muted-color);
  line-height: 1.55;
}
</style>
