<template>
  <section class="relative pb-24 pt-24 sm:pb-32 sm:pt-32 lg:pb-32 lg:pt-0">
    <slot name="top" />
    <div class="container relative z-10 flex flex-col items-center text-center lg:py-32">
      <slot name="headline" />
      <h1 class="mt-4 text-5xl font-semibold tracking-tighter text-balance sm:text-6xl lg:text-7xl xl:text-[5rem]">
        <slot name="title" />
      </h1>
      <p class="mx-auto mt-5 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg">
        <slot name="description" />
      </p>
      <div class="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
        <slot name="links" />
      </div>
      <div class="mt-16 w-full max-w-2xl sm:mt-20 lg:mt-24">
        <slot />
      </div>
      <div class="mt-16 w-full max-w-lg sm:mt-24">
        <slot name="bottom" />
      </div>
    </div>
  </section>
</template>
