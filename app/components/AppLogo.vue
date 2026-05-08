<script setup lang="ts">
defineProps<{ class?: string }>();
</script>

<template>
  <NuxtLink
    to="/"
    aria-label="Homepage"
    :class="['inline-flex items-center gap-2 font-semibold tracking-tight', $props.class]"
  >
    <img
      src="/logo.png"
      alt="Stackhacker UI"
      class="size-6 rounded-sm invert dark:invert-0"
    >
    <span>Stackhacker UI</span>
  </NuxtLink>
</template>
