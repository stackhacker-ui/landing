<script setup lang="ts">
import { Button } from "~/components/ui/button";
import type { LinkItem } from "~/lib/link-item";
import { resolveLinkHref } from "~/lib/link-item";

const props = defineProps<{
  link: LinkItem;
}>();

const buttonSize = computed(() => {
  if (props.link.size) return props.link.size;
  return "default";
});

const rel = computed(() => {
  if (props.link.target === "_blank") return "noopener noreferrer";
  return undefined;
});

const href = computed(() => resolveLinkHref(props.link));
</script>

<template>
  <Button
    as="a"
    :href="href"
    :target="link.target"
    :rel="rel"
    :variant="link.variant || 'default'"
    :size="buttonSize"
    class="w-full sm:w-auto"
  >
    <Icon
      v-if="link.icon"
      :name="link.icon"
      class="size-4"
      aria-hidden="true"
    />
    <span>{{ link.label }}</span>
    <Icon
      v-if="link.variant === 'default'"
      name="i-lucide-arrow-right"
      class="size-4"
      aria-hidden="true"
    />
  </Button>
</template>
