<script setup lang="ts">
const colorMode = useColorMode();
const color = computed(() => colorMode.value === "dark" ? "#09090b" : "#ffffff");

useHead({
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: { lang: "en" },
});

useSeoMeta({
  ogImage: "https://landing-template.stackhacker.io/screenshots/landing-light.png",
  twitterImage: "https://landing-template.stackhacker.io/screenshots/landing-light.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="isolate min-h-dvh bg-background text-foreground antialiased">
    <AppHeader />
    <main class="border-grid border-y">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
