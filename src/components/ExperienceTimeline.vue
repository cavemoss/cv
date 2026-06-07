<script setup lang="ts">
import type { ExperienceItem } from "../locales/types";
import { logoLabels, logoUrls } from "../data/profile";

defineProps<{
  items: ExperienceItem[];
  fallbackIcon: string;
}>();
</script>

<template>
  <ol class="timeline">
    <li v-for="(item, i) in items" :key="i" class="entry">
      <span class="marker" :class="{ 'has-logo': item.logo }">
        <template v-if="item.logo">
          <img v-if="logoUrls[item.logo]" :src="logoUrls[item.logo]" />
          <span v-else class="logo">{{ logoLabels[item.logo] || "•" }}</span>
        </template>
        <i v-else :class="fallbackIcon" aria-hidden="true" />
      </span>

      <div class="content">
        <div class="head">
          <h3 class="company">{{ item.company }}</h3>
          <div class="period">
            <span>{{ item.period }}</span>
          </div>
        </div>

        <p v-if="item.role" class="role">{{ item.role }}</p>

        <ul class="bullets">
          <li v-for="(b, bi) in item.bullets" :key="bi">{{ b }}</li>
        </ul>
      </div>
    </li>
  </ol>
</template>

<style scoped>
.timeline {
  list-style: none;
  margin: 16px 0 0;
  padding: 0;
}

.entry {
  position: relative;
  display: grid;
  grid-template-columns: 34px 1fr;
  gap: 14px;
  padding-bottom: 26px;
}

.entry:last-child {
  padding-bottom: 0;
}

/* vertical connecting line */
.entry::before {
  content: "";
  position: absolute;
  left: 16px;
  top: 30px;
  bottom: -4px;
  width: 1.5px;
  background: var(--cv-border-strong);
}

.entry:last-child::before {
  display: none;
}

.marker {
  position: relative;
  z-index: 1;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--cv-card);
  border: 1.5px solid var(--cv-border-strong);
  color: var(--cv-muted);
  overflow: hidden;
}

.marker i {
  font-size: 0.85rem;
}

.marker img {
  max-width: 100%;
}

.marker.has-logo {
  border-color: var(--cv-border);
  background: var(--cv-accent-soft);
}

.logo {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--cv-accent);
}

.content {
  padding-top: 2px;
  min-width: 0;
}

.head {
  display: flex;
  align-items: baseline;
  gap: 14px;
}

.company {
  font-size: 1rem;
  font-weight: 700;
  color: var(--cv-heading);
}

.period {
  text-align: right;
  flex: 0 0 auto;
  color: var(--cv-muted);
  font-size: 0.78rem;
  line-height: 1.35;
}

.period .note {
  display: block;
}

.role {
  margin: 4px 0 8px;
  color: var(--cv-accent);
  font-weight: 600;
  font-size: 0.85rem;
}

.bullets {
  margin: 6px 0 0;
  padding-left: 13px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: square;
}

.bullets li {
  font-size: 0.83rem;
  color: var(--cv-text);
}

.bullets li::marker {
  color: var(--cv-muted);
}

@media (max-width: 480px) {
  .head {
    flex-direction: column;
    gap: 2px;
  }
  .period {
    text-align: left;
  }
  .period .note {
    display: inline;
  }
  .period .note::before {
    content: " · ";
  }
}
</style>
