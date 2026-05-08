<script setup lang="ts">
import { Motion } from "motion-v";

interface TerminalSegment {
  text: string;
  style: string;
}

interface TerminalLine {
  segments: TerminalSegment[];
}

const { lines } = defineProps<{
  lines: TerminalLine[];
}>();

const segmentStyles: Record<string, string> = {
  "prompt": "text-muted-foreground",
  "cmd": "text-foreground",
  "flag": "text-lime-400",
  "dim": "text-muted-foreground",
  "success": "text-lime-400",
  "url": "text-blue-400",
  "metric-good": "text-lime-400",
};

function lineMotion(index: number) {
  return {
    initial: { opacity: 0, x: -4 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, delay: 1.4 + index * 0.4 },
  };
}
</script>

<template>
  <div class="overflow-hidden rounded-xl border bg-card/40 text-left backdrop-blur ring-1 ring-border/50">
    <div class="flex items-center gap-1.5 border-b p-4 sm:px-6">
      <span class="size-2.5 rounded-full border bg-muted" />
      <span class="size-2.5 rounded-full border bg-muted" />
      <span class="size-2.5 rounded-full border bg-muted" />
    </div>
    <div class="min-h-50 overflow-x-auto p-5 font-mono text-[0.8125rem] leading-[1.8] sm:p-6">
      <Motion
        v-for="(line, i) in lines"
        :key="i"
        v-bind="lineMotion(i)"
      >
        <span
          v-for="(segment, j) in line.segments"
          :key="j"
          :class="segmentStyles[segment.style]"
        >
          {{ segment.text }}
        </span>
      </Motion>
    </div>
  </div>
</template>
