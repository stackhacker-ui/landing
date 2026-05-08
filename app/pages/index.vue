<script setup lang="ts">
definePageMeta({
  colorMode: "dark",
});

const { data: page } = await useAsyncData("index", () => queryCollection("content").first());
if (!page.value) throw createError({ statusCode: 404, fatal: true });

const title = page.value.seo?.title || page.value.title;
const description = page.value.seo?.description || page.value.description;
useSeoMeta({ title, description, ogTitle: title, ogDescription: description });
</script>

<template>
  <div v-if="page">
    <LandingHero
      :title="page.title"
      :description="page.description"
      :hero="page.hero"
      :terminal="page.terminal"
      :logos="page.logos"
    />
    <LandingFeatures :features="page.features" />
    <LandingMetrics :metrics="page.metrics" />
    <LandingCTA :cta="page.cta" />
  </div>
</template>
