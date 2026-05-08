<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import type { LinkItem } from "~/lib/link-item";
import { isExternalHref, resolveLinkHref } from "~/lib/link-item";

const items: LinkItem[] = [
  { label: "Starter", href: "https://starter-template.stackhacker.io/", icon: "i-lucide-rocket" },
  { label: "Chat", href: "https://chat-template.stackhacker.io/", icon: "i-lucide-messages-square" },
  { label: "Docs", href: "https://docs-template.stackhacker.io/", icon: "i-lucide-book-open" },
  { label: "Landing", href: "https://landing-template.stackhacker.io/", icon: "i-lucide-panels-top-left", current: true },
  { label: "Portfolio", href: "https://portfolio-template.stackhacker.io/", icon: "i-lucide-id-card" },
  { label: "SaaS", href: "https://saas-template.stackhacker.io/", icon: "i-lucide-briefcase-business" },
  { label: "Changelog", href: "https://changelog-template.stackhacker.io/", icon: "i-lucide-scroll-text" },
];

const open = ref(false);
</script>

<template>
  <DropdownMenu v-model:open="open">
    <DropdownMenuTrigger as-child>
      <button
        type="button"
        class="inline-flex cursor-pointer items-center rounded-full bg-muted/80 px-3 py-1 text-xs font-semibold transition-colors hover:bg-muted"
        aria-label="Open template menu"
      >
        Landing
        <span
          class="ml-1 inline-block text-[10px] transition-transform duration-200"
          :class="open ? 'rotate-180' : undefined"
          aria-hidden="true"
        >
          ▾
        </span>
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="start"
      class="z-20 min-w-fit"
    >
      <DropdownMenuItem
        v-for="item in items"
        :key="item.label"
        as-child
        :class="(item.current ? 'bg-muted font-medium' : undefined)"
      >
        <a
          v-if="isExternalHref(resolveLinkHref(item))"
          :href="resolveLinkHref(item)"
          :target="item.target || '_blank'"
          rel="noopener noreferrer"
        >
          <Icon
            v-if="item.icon"
            :name="item.icon"
            class="size-4 text-muted-foreground"
            aria-hidden="true"
          />
          <span>{{ item.label }}</span>
        </a>
        <NuxtLink
          v-else
          :to="resolveLinkHref(item)"
        >
          <Icon
            v-if="item.icon"
            :name="item.icon"
            class="size-4 text-muted-foreground"
            aria-hidden="true"
          />
          <span>{{ item.label }}</span>
        </NuxtLink>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
