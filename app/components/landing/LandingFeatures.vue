<script setup lang="ts">
import { Motion } from "motion-v";
import PageCard from "~/components/ui/page-card/PageCard.vue";
import PageSection from "~/components/ui/page-section/PageSection.vue";

defineProps<{
  features: {
    headline?: string;
    title: string;
    description: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
}>();

function scrollMotion(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    inViewOptions: { once: true, amount: 0.4 },
    transition: { duration: 0.6, delay },
  };
}

function staggerMotion(index = 0) {
  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    inViewOptions: { once: true, amount: 0.3 },
    transition: { duration: 0.6, delay: index * 0.08 },
  };
}
</script>

<template>
  <PageSection id="features">
    <template #headline>
      <Motion
        as="span"
        v-bind="scrollMotion()"
        class="inline-block"
      >
        {{ features.headline }}
      </Motion>
    </template>
    <template #title>
      <Motion
        as="span"
        v-bind="scrollMotion(0.1)"
        class="inline-block"
      >
        {{ features.title }}
      </Motion>
    </template>
    <template #description>
      <Motion
        as="span"
        v-bind="scrollMotion(0.2)"
        class="inline-block"
      >
        {{ features.description }}
      </Motion>
    </template>
    <div class="overflow-hidden rounded-2xl border bg-border/60">
      <div class="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
        <Motion
          v-for="(feature, index) in features.items"
          :key="feature.title"
          v-bind="staggerMotion(index)"
        >
          <PageCard
            :icon="feature.icon"
            :title="feature.title"
            :description="feature.description"
            class="h-full"
          />
        </Motion>
      </div>
    </div>
  </PageSection>
</template>
