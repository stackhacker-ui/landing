<script setup lang="ts">
const links = [
  { label: "Demo", href: "https://landing-template.stackhacker.io" },
  { label: "Docs", href: "https://ui.stackhacker.io/docs/getting-started" },
  { label: "GitHub", href: "https://github.com/stackhacker-ui/landing" },
];
</script>

<template>
  <footer class="border-grid border-t">
    <div class="container flex flex-col items-center justify-between py-4 text-sm text-muted-foreground sm:flex-row sm:py-5 lg:py-8">
      <p class="text-sm text-muted-foreground">
        Built with Stackhacker UI • © {{ new Date().getFullYear() }}
      </p>
      <div class="mt-1 flex flex-wrap items-center justify-center gap-x-0 sm:mt-0 sm:justify-end">
        <a
          v-for="l in links"
          :key="l.label"
          :href="l.href"
          target="_blank"
          rel="noreferrer"
          class="px-2 py-1 text-sm font-light transition-colors hover:text-foreground"
        >
          {{ l.label }}
        </a>
      </div>
    </div>
  </footer>
</template>
