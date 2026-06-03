<script setup>
import { useI18n } from 'vue-i18n';
import SelectButton from 'primevue/selectbutton';

const { locale } = useI18n();

const options = [
  { label: 'RU', value: 'ru' },
  { label: 'EN', value: 'en' },
  { label: '中文', value: 'zh' }
];
</script>

<template>
  <SelectButton
    v-model="locale"
    :options="options"
    optionLabel="label"
    optionValue="value"
    :allowEmpty="false"
    aria-label="Language"
  />
</template>
