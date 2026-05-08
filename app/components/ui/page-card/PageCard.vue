<script setup lang="ts">
withDefaults(defineProps<{
  icon?: string;
  title: string;
  description: string;
  titleClass?: string;
  descriptionClass?: string;
  href?: string;
  target?: "_blank" | "_self";
}>(), {
  target: "_self",
});
</script>

<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="href"
    :target="href ? target : undefined"
    :rel="href && target === '_blank' ? 'noopener noreferrer' : undefined"
    :class="[
      'block bg-card p-5 sm:p-6',
      href ? 'transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring' : undefined,
    ]"
  >
    <div
      v-if="icon"
      class="mb-5 flex size-9 items-center justify-center rounded-lg bg-primary/10"
    >
      <Icon
        :name="icon"
        class="size-5 text-primary"
      />
    </div>
    <h3 :class="titleClass || 'text-base font-semibold tracking-tight text-balance sm:text-sm'">
      {{ title }}
    </h3>
    <p :class="descriptionClass || 'mt-2 text-base text-pretty text-muted-foreground sm:line-clamp-2 sm:text-sm lg:line-clamp-3'">
      {{ description }}
    </p>
  </component>
</template>
