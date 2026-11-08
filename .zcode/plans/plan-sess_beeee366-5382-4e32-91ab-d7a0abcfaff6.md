# Migrate interview docs into NEW_UI (mdxcn) and make it the root project

## Context

The repo root is the old Fumadocs site with 43 MDX interview docs in `content/docs/`. `NEW_UI/` is the "mdxcn" Next.js 16 template whose design you want to keep **exactly** — but its docs section is a demo catalog for its own 48 graph components, which you don't need. Goal: same NEW_UI design + your interview docs rendered through an **MDX pipeline that keeps your exact `content/docs/` folder structure** (easy future MDX edits), all mdxcn demo pages removed, old UI deleted, NEW_UI moved to repo root, branding kept as-is for now.

## Core design: MDX pipeline (no conversion of your files)

Proven feasible — NEW_UI's own test `lib/docs/mdx-render.test.tsx` already compiles MDX with `evaluate()` from `@mdx-js/mdx` + `react/jsx-runtime` + `remark-gfm`.

- **Your files stay verbatim** in `content/docs/` with identical structure (`index.mdx`, `getting-started/index.mdx`, 10 × `<section>/{getting-started,beginner,intermediate,advanced}.mdx`, `meta.json`). Only change: strip the 30 dead `import { Step, Steps } from "fumadocs-ui/components/steps";` lines and normalize `./section/level` relative links → `/docs/section/level`.
- **`app/docs/[[...slug]]/page.tsx`** (new, replaces `app/docs/page.tsx` + `app/docs/[slug]`): optional catch-all → URL structure identical to old site (`/docs`, `/docs/getting-started`, `/docs/core-concepts/beginner`, …). `force-static`, `generateStaticParams` scans `content/docs`, `generateMetadata` from frontmatter, renders via `evaluate()` with `remark-gfm` + `rehype-slug` (h2 ids → the existing `OnThisPage` rail works unchanged).
- **`content/docs/meta.json`** stays the nav config, near-identical format: separators become sidebar groups; folder entries become `{ "folder": "core-concepts", "title": "Core Concepts" }` so section names are explicit and future section additions = add MDX folder + one meta.json line.
- **`lib/docs/content.ts`** (new): parses meta.json, reads MDX files + frontmatter, exports sidebar nav data + flattened page order (drives sidebar, pager, sitemap).
- **Components map** (new `components/docs/mdx-components.tsx`) wires your MDX to NEW_UI's existing components — UI untouched: `Steps`/`Step` → registry `Steps` (your bold-question-in-Step format renders as numbered steps; visual check after build, with a title-hoisting wrapper as fallback if needed); `Callout` → registry `Callout` via a tiny prop-adapter (info→note, warn→warning) without modifying the registry component; `InteractiveHoverButton` → ported verbatim as `components/ui/InteractiveHoverButton.tsx` (only old-UI component the content requires); `h2` → existing `SectionHeading`; `p`/`a`/`code` → existing `ProseP`/`TextLink`/`InlineCode`; plus minimal styled `pre`/`table`/`h1`/`h3` in the same design tokens. Existing `DocsPager` gets prev/next from the manifest order.

## Phase 1 — Inside `NEW_UI/`: migrate + remove unwanted files

**Delete (mdxcn demo/product + template infra):**
- Pages: `app/{about,agents,comark,contact,developers,knap,privacy,shadcn-labs}`, `app/docs/{page.tsx,[slug],installation,mdx,grammar,comark,knap,skill,examples}`, `app/api/`, `app/.well-known/`, routes `llms.txt`, `agents.md`, `openapi.json`, `skill.md`, `skill/recipes.md`
- Lib: `lib/docs/{catalog,chooser,grammar,recipes,mdx-wiring,comark,comark-props,knap,skill,skill-files,ascii,new,origin,yaml,prompt,mdx}.ts` + all `*.test.*`, `lib/agent/`, `lib/site/showcase.ts`, `lib/shadcn-labs.ts`
- Components: mdxcn-only ones (`component-guide`, `examples`, `install`, `namespace`, `recipe-card`, `skill-install`, `props-table`, `search`, `copy-page`, etc.) — determined by grep; anything still imported by kept files stays
- Infra: `proxy.ts`, `vitest.config.ts`, `skills/`, `.claude/`, `AGENTS.md` (root + `registry/default/` + `lib/docs/`), `.github/` (its CI runs the deleted tests), `knap`+`vitest` devDeps and `test` script

**Keep 100% untouched (the UI):** `registry/` + `registry.json` + `public/r/` + `shadcn build` step, app shell (`layout.tsx`, `globals.css`, errors, icons), docs chrome (`nav.tsx`, `on-this-page.tsx`, `section-heading.tsx`, `layout.tsx`), site chrome (header/footer/hero/home sections/theme/accent), all branding constants (per your choice).

**Small data-only edits (design unchanged):** `nav.tsx` imports nav data from `lib/docs/content.ts` instead of catalog; footer/`SITE_NAV`/home-Faq/AgentsSection dead links trimmed or retargeted to `/docs`; `next.config.ts` drops the two mdxcn.dev host redirects (registry rewrites stay); `sitemap.ts` rebuilt from manifest; `lib/seo.ts` drops catalog usage.

**Dependencies:** move `@mdx-js/mdx` + `remark-gfm` to `dependencies`, add `rehype-slug` → `pnpm install` inside NEW_UI.

## Phase 2 — Verify NEW_UI in place

`pnpm build` (shadcn build + next build) must pass: it flushes out every leftover import from deleted files. Then `pnpm dev` + browser check: homepage sections, `/docs`, `/docs/getting-started`, `/docs/core-concepts/beginner` (Steps + tables + code blocks), `/docs/automation-scripting/getting-started` (Callout types + InteractiveHoverButton), sidebar groups, on-this-page rail, mobile nav.

## Phase 3 — Remove old UI, move NEW_UI to root

Only after Phase 2 passes:
1. Delete everything at root except `.git/` and `NEW_UI/` — including old `app/ components/ content/ hooks/ lib/ scripts/ public/`, `node_modules/ .next/ .source/`, all old config files, `README.md` and `vercel.json` (per "nothing from old UI"; the `/discord` redirect dies with it — easy to re-add later if you need it).
2. Move all `NEW_UI/` contents (including dotfiles) to root; delete the empty `NEW_UI/` folder.
3. Leave git changes **uncommitted** for your review.

## Final verification (at root)

`pnpm install` → `pnpm build` → `pnpm dev`; browse `/`, `/docs`, several section/level pages; confirm visuals identical to NEW_UI and all 43 doc pages render. Typecheck + lint clean.

Risks/notes: `pnpm install` needs network (rehype-slug). Content has no image references, so no asset migration needed. If any MDX file trips the MDX parser (rare stray JSX-like text), I'll fix only that file minimally.