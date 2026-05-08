<script setup lang="ts">
defineProps<{ title: string; items: string[] }>();
</script>

<template>
  <div>
    <p class="text-muted-foreground text-center text-xs uppercase tracking-[0.12em]">
      {{ title }}
    </p>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
      <Icon
        v-for="item in items"
        :key="item"
        :name="item"
        size="22"
        class="text-muted-foreground sm:size-6"
      />
    </div>
  </div>
</template>
