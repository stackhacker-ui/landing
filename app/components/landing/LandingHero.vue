<script setup lang="ts">
import { Motion } from "motion-v";
import { Badge } from "~/components/ui/badge";
import Chip from "~/components/ui/chip/Chip.vue";
import LinkButton from "~/components/LinkButton.vue";
import PageHero from "~/components/ui/page-hero/PageHero.vue";
import PageLogos from "~/components/ui/page-logos/PageLogos.vue";
import type { LinkItem } from "~/lib/link-item";

interface TerminalSegment {
  text: string;
  style: string;
}

interface TerminalLine {
  segments: TerminalSegment[];
}

const props = defineProps<{
  title: string;
  description: string;
  hero: {
    headline?: string;
    links: LinkItem[];
  };
  terminal: {
    lines: TerminalLine[];
  };
  logos: {
    title: string;
    items: string[];
  };
}>();

const heroTitle = computed(() => {
  const [primary = "", ...rest] = props.title.split("\n");
  return { primary, secondary: rest.join(" ").trim() };
});

function enterMotion(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  };
}

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
  <PageHero>
    <template #top>
      <Motion v-bind="staggerMotion(0)">
        <HeroShaders class="absolute inset-x-0 top-0 h-full opacity-15" />
      </Motion>
      <GradientGlow class="top-0 h-1/2 w-2/3" />
    </template>

    <template #headline>
      <Motion v-bind="enterMotion(0.2)">
        <Badge
          variant="secondary"
          class="gap-1.5 border-transparent bg-secondary/50 px-3 py-1.5 backdrop-blur"
        >
          <Chip />{{ hero.headline }}
        </Badge>
      </Motion>
    </template>

    <template #title>
      <Motion
        as="span"
        v-bind="enterMotion(0.35)"
        class="inline-block"
      >
        {{ heroTitle.primary }}
        <br v-if="heroTitle.secondary">
        <span
          v-if="heroTitle.secondary"
          class="animate-shimmer bg-[linear-gradient(135deg,var(--color-primary),var(--color-muted-foreground),var(--color-primary))] bg-size-[200%_auto] bg-clip-text text-transparent"
        >
          {{ heroTitle.secondary }}
        </span>
      </Motion>
    </template>

    <template #description>
      <Motion
        as="span"
        v-bind="enterMotion(0.5)"
        class="inline-block"
      >
        {{ description }}
      </Motion>
    </template>

    <template #links>
      <Motion
        class="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-6"
        v-bind="enterMotion(0.65)"
      >
        <LinkButton
          v-for="link in hero.links"
          :key="link.label"
          :link="link"
        />
      </Motion>
    </template>

    <Motion
      as-child
      v-bind="enterMotion(0.85)"
    >
      <HeroTerminal :lines="terminal.lines" />
    </Motion>

    <template #bottom>
      <Motion
        class="w-full"
        v-bind="scrollMotion(0.95)"
      >
        <PageLogos
          :title="logos.title"
          :items="logos.items"
        />
      </Motion>
    </template>
  </PageHero>
</template>
