<script setup lang="ts">
defineProps<{ icon: string; label: string }>();
</script>

<template>
  <div class="section-title">
    <i :class="icon" aria-hidden="true" />
    <h2>{{ label }}</h2>
  </div>
</template>
