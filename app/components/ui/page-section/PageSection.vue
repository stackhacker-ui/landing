<template>
  <section class="py-18 sm:py-28 lg:py-32">
    <div class="container mx-auto flex max-w-5xl flex-col gap-8 py-10 sm:gap-14 sm:py-20 lg:py-24">
      <div class="text-center">
        <p class="font-mono text-xs uppercase tracking-wide text-primary">
          <slot name="headline" />
        </p>
        <h2 class="mx-auto mt-3 max-w-lg text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          <slot name="title" />
        </h2>
        <p class="mx-auto mt-6 max-w-md text-base text-pretty text-muted-foreground">
          <slot name="description" />
        </p>
      </div>
      <div class="text-left">
        <slot />
      </div>
    </div>
  </section>
</template>
