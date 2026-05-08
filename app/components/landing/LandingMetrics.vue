<script setup lang="ts">
import { Motion } from "motion-v";
import PageCard from "~/components/ui/page-card/PageCard.vue";
import PageSection from "~/components/ui/page-section/PageSection.vue";

defineProps<{
  metrics: {
    headline?: string;
    title: string;
    description: string;
    items: Array<{
      value: string;
      label: string;
      class: string;
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
  <PageSection id="metrics">
    <template #headline>
      <Motion
        as="span"
        v-bind="scrollMotion()"
        class="inline-block"
      >
        {{ metrics.headline }}
      </Motion>
    </template>
    <template #title>
      <Motion
        as="span"
        v-bind="scrollMotion(0.1)"
        class="inline-block"
      >
        {{ metrics.title }}
      </Motion>
    </template>
    <template #description>
      <Motion
        as="span"
        v-bind="scrollMotion(0.2)"
        class="inline-block"
      >
        {{ metrics.description }}
      </Motion>
    </template>
    <div class="overflow-hidden rounded-2xl border bg-border/60">
      <div class="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
        <Motion
          v-for="(metric, index) in metrics.items"
          :key="metric.label"
          v-bind="staggerMotion(index)"
        >
          <PageCard
            :title="metric.value"
            :description="metric.label"
            :title-class="['text-3xl font-semibold tracking-tight leading-none tabular-nums', metric.class].join(' ')"
            description-class="font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground mt-3"
            class="h-full text-center"
          />
        </Motion>
      </div>
    </div>
  </PageSection>
</template>
