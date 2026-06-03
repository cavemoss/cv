<script setup>
import ExperienceTimeline from './ExperienceTimeline.vue';

defineProps({
  items: { type: Array, required: true }
});
</script>

<template>
  <ExperienceTimeline :items="items" />
</template>
