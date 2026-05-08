<script setup lang="ts">
const activeSection = ref<string>();
const menuOpen = ref(false);
let observer: IntersectionObserver | null = null;

const navItems = [
  { id: "features", label: "Features" },
  { id: "metrics", label: "Metrics" },
];

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    const visible = entries.find(entry => entry.isIntersecting);
    if (visible) {
      activeSection.value = visible.target.id;
      return;
    }

    if (entries.every(entry => !entry.isIntersecting)) {
      activeSection.value = undefined;
    }
  }, { rootMargin: "-50% 0px -50% 0px" });

  for (const item of navItems) {
    const el = document.getElementById(item.id);
    if (el) observer.observe(el);
  }
});

onBeforeUnmount(() => {
  observer?.disconnect();
});

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
}
</script>

<template>
  <header class="border-grid sticky top-0 z-30 border-b bg-background/75 backdrop-blur">
    <div class="container relative flex h-16 items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <AppLogo class="h-6 shrink-0" />
        <TemplateMenu />
      </div>
      <nav class="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-sm md:flex">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          :class="[
            'transition-colors',
            activeSection === item.id ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground',
          ]"
        >
          {{ item.label }}
        </a>
      </nav>
      <div class="hidden items-center gap-2 lg:flex">
        <button
          type="button"
          class="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          Sign in
        </button>
        <a
          href="https://landing-template.stackhacker.io"
          class="rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground"
          target="_blank"
          rel="noreferrer"
        >
          Get started
        </a>
      </div>
      <button
        type="button"
        class="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground lg:hidden"
        :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'"
        :aria-expanded="menuOpen"
        @click="toggleMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <line
            x1="4"
            y1="6"
            x2="20"
            y2="6"
            class="origin-center transition duration-200"
            :class="menuOpen ? 'translate-y-1.5 rotate-45' : ''"
          />
          <line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            class="origin-center transition duration-200"
            :class="menuOpen ? 'opacity-0' : ''"
          />
          <line
            x1="4"
            y1="18"
            x2="20"
            y2="18"
            class="origin-center transition duration-200"
            :class="menuOpen ? '-translate-y-1.5 -rotate-45' : ''"
          />
        </svg>
      </button>
    </div>
    <div
      v-if="menuOpen"
      class="border-grid absolute inset-x-0 top-full border-t bg-background/95 backdrop-blur lg:hidden"
    >
      <div class="container py-3">
        <nav class="flex flex-col gap-1">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            :class="[
              'rounded-md px-2 py-2 text-sm transition-colors',
              activeSection === item.id ? 'bg-muted text-foreground font-medium' : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground',
            ]"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
        </nav>
        <div class="mt-3 flex flex-col gap-2">
          <button
            type="button"
            class="rounded-md bg-muted px-3 py-2 text-center text-sm text-foreground"
            @click="closeMenu"
          >
            Sign in
          </button>
          <a
            href="https://landing-template.stackhacker.io"
            class="rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
            target="_blank"
            rel="noreferrer"
            @click="closeMenu"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
