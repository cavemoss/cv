<script setup lang="ts">
import { useI18n } from "vue-i18n";
import LanguageSwitcher from "./LanguageSwitcher.vue";
import { contacts } from "../data/profile";
import profileImg from "../assets/photo.jpg";

const { t } = useI18n();
</script>

<template>
  <header class="card header">
    <div class="header-top">
      <LanguageSwitcher />
    </div>

    <div class="header-main">
      <div class="avatar">
        <img :src="profileImg" alt="Profile photo" />
      </div>

      <div class="identity">
        <h1 class="name">{{ t("profile.name") }}</h1>
        <p class="profession">{{ t("profile.profession") }}</p>

        <ul class="contacts">
          <li v-for="c in contacts" :key="c.id">
            <a
              :href="c.href"
              :target="
                c.id === 'email' || c.id === 'phone' ? undefined : '_blank'
              "
              rel="noopener"
            >
              <i :class="c.icon" aria-hidden="true" />
              <span>{{ c.text }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: relative;
  padding: 24px 28px 26px;
}

.header-top {
  position: absolute;
  top: 18px;
  right: 22px;
}

.header-main {
  display: flex;
  gap: 26px;
  align-items: center;
}

.avatar {
  flex: 0 0 auto;
  width: 116px;
  height: 116px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid var(--cv-border-strong);
  background: var(--cv-bg);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.identity {
  min-width: 0;
}

.name {
  font-size: 1.85rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.1;
}

.profession {
  margin: 6px 0 16px;
  color: var(--cv-text);
  font-weight: 500;
  font-size: 0.95rem;
}

.contacts {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px 22px;
}

.contacts a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--cv-text);
  font-size: 0.84rem;
  transition: color 0.15s ease;
}

.contacts a:hover {
  color: var(--cv-accent);
}

.contacts i {
  color: var(--cv-muted);
  font-size: 0.85rem;
  width: 16px;
  text-align: center;
  flex: 0 0 auto;
}

.contacts span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (max-width: 760px) {
  .header-main {
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: 28px;
  }
  .contacts {
    grid-template-columns: 1fr;
    text-align: left;
    justify-items: start;
  }
  .header-top {
    right: 50%;
    transform: translateX(50%);
  }
}
</style>
