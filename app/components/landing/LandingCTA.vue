<script setup lang="ts">
import { Motion } from "motion-v";
import { Button } from "~/components/ui/button";
import LinkButton from "~/components/LinkButton.vue";
import PageCTA from "~/components/ui/page-cta/PageCTA.vue";
import type { LinkItem } from "~/lib/link-item";

defineProps<{
  cta: {
    title: string;
    description: string;
    command: string;
    links: LinkItem[];
  };
}>();

const { copy, copied } = useClipboard();

function scrollMotion(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    inViewOptions: { once: true, amount: 0.4 },
    transition: { duration: 0.6, delay },
  };
}
</script>

<template>
  <PageCTA>
    <template #top>
      <GradientGlow class="bottom-0 h-1/2 w-2/3" />
    </template>
    <template #title>
      <Motion
        as="span"
        v-bind="scrollMotion()"
        class="inline-block"
      >
        {{ cta.title }}
      </Motion>
    </template>
    <template #description>
      <Motion
        as="span"
        v-bind="scrollMotion(0.1)"
        class="inline-block"
      >
        {{ cta.description }}
      </Motion>
    </template>
    <template #links>
      <Motion
        class="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:gap-6"
        v-bind="scrollMotion(0.2)"
      >
        <LinkButton
          v-for="link in cta.links"
          :key="link.label"
          :link="link"
        />
        <Button
          variant="secondary"
          size="xl"
          class="w-full font-mono font-light text-muted-foreground sm:w-auto"
          @click="copy(cta.command)"
        >
          {{ copied ? 'Copied' : cta.command }}
        </Button>
      </Motion>
    </template>
  </PageCTA>
</template>
