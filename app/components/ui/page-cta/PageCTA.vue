<template>
  <section class="relative isolate overflow-hidden rounded-xl py-18 sm:py-24 lg:py-32">
    <slot name="top" />
    <div class="container relative z-10">
      <div class="mx-auto flex w-full max-w-3xl flex-col gap-8 px-5 py-10 text-center sm:gap-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div>
          <h2 class="text-4xl font-semibold tracking-tighter text-balance whitespace-pre-line lg:text-5xl">
            <slot name="title" />
          </h2>
          <p class="mx-auto mt-4 max-w-sm text-pretty text-muted-foreground">
            <slot name="description" />
          </p>
          <div class="mt-10">
            <slot name="links" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
