<script setup>
import Avatar from 'primevue/avatar';
import Chip from 'primevue/chip';
import LanguageSwitcher from './LanguageSwitcher.vue';

defineProps({
  profile: { type: Object, required: true }
});
</script>

<template>
  <header class="cv-header">
    <div class="cv-header__lang">
      <LanguageSwitcher />
    </div>

    <div class="cv-header__main">
      <Avatar
        :image="profile.photo"
        size="xlarge"
        shape="circle"
        class="cv-header__photo"
      />

      <div class="cv-header__identity">
        <h1 class="cv-header__name">{{ profile.name }}</h1>
        <p class="cv-header__title">{{ profile.title }}</p>

        <div class="cv-header__contacts">
          <a
            v-for="contact in profile.contacts"
            :key="contact.label"
            :href="contact.href || undefined"
            :target="contact.href && contact.href.startsWith('http') ? '_blank' : undefined"
            rel="noopener"
            class="cv-header__contact-link"
          >
            <Chip :label="contact.label" :icon="contact.icon" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.cv-header {
  position: relative;
  border-radius: var(--p-border-radius-xl, 20px);
  padding: 2rem;
  background: linear-gradient(135deg, var(--p-primary-600), var(--p-primary-400));
  color: #ffffff;
  box-shadow: 0 12px 32px -16px rgba(15, 23, 42, 0.5);
}

.cv-header__lang {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
}

.cv-header__main {
  display: flex;
  align-items: center;
  gap: 1.75rem;
  flex-wrap: wrap;
}

.cv-header__photo {
  width: 7rem !important;
  height: 7rem !important;
  border: 3px solid rgba(255, 255, 255, 0.85);
  box-shadow: 0 8px 24px -12px rgba(0, 0, 0, 0.6);
}

.cv-header__identity {
  flex: 1 1 16rem;
  min-width: 14rem;
}

.cv-header__name {
  margin: 0;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.cv-header__title {
  margin: 0.35rem 0 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.95;
}

.cv-header__contacts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.cv-header__contact-link {
  text-decoration: none;
}
</style>
