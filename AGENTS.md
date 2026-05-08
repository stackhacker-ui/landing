# AGENTS

## Fast start

- Use ~pnpm~ (repo pins ~pnpm@10.15.1~ in ~package.json~).
- Install once: ~pnpm install~ (runs ~nuxt prepare~ via ~postinstall~ to generate ~.nuxt/~ files used by ESLint/type tooling).
- Dev server: ~pnpm dev~.

## Required verification order (matches CI)

- Run checks in this order: ~pnpm lint~ -> ~pnpm typecheck~ -> ~pnpm build~.
- There is no test script/workflow in this repo right now; do not invent ~pnpm test~.
- CI uses Node 22 on Ubuntu (~.github/workflows/ci.yml~); prefer reproducing issues with Node 22 when versions matter.

## Project wiring (where edits usually belong)

- App shell/SEO defaults: ~app/app.vue~.
- Landing page composition and data fetch: ~app/pages/index.vue~ (loads the ~content~ collection with ~queryCollection("content").first()~).
- Main editable page content: ~content/index.yml~.
- Content schema/validation: ~content.config.ts~ (keep YAML in sync with this schema or build/typecheck will fail).
- Global styles/theme tokens: ~app/assets/css/main.css~ (Nuxt ~css~ points here).

## UI/tooling conventions that are easy to miss

- Shadcn Nuxt components are configured with no prefix and live under ~app/components/ui~ (~nuxt.config.ts~: ~shadcn.componentDir~, ~shadcn.prefix=""~).
- Tailwind v4 is wired through the Vite plugin (~@tailwindcss/vite~) and CSS directives in ~app/assets/css/main.css~ (including ~@source ../../../content/**/*~ for content scanning).
- Color mode uses class strategy with empty suffix (~@nuxtjs/color-mode~, ~classSuffix: ""~), so dark mode selectors expect ~.dark~.

## Boundaries

- Single-package repo (root package only; ~pnpm-workspace.yaml~ does not declare workspace packages).
- Treat ~.nuxt/~, ~.output/~, and ~.data/~ as generated artifacts; do not hand-edit.
