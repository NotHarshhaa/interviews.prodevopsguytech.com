import type { Metadata } from "next"
import { evaluate } from "@mdx-js/mdx"
import * as runtime from "react/jsx-runtime"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

import { DocsPager } from "@/components/docs/pager"
import { docMdxComponents } from "@/components/docs/mdx-components"
import { TopicsGrid } from "@/components/docs/topics-grid"
import { docPages, parseFrontmatter, readDoc } from "@/lib/docs/content"
import { pageMeta } from "@/lib/seo"

export const dynamic = "force-static"
export const dynamicParams = false

type Params = { params: Promise<{ slug?: string[] }> }

function pathOf(slug: string[] | undefined) {
  return (slug ?? []).join("/")
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return (await docPages()).map((page) => ({
    slug: page.slug === "" ? [] : page.slug.split("/"),
  }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const path = pathOf(slug)
  const page = (await docPages()).find((entry) => entry.slug === path)

  return pageMeta({
    title: page?.title,
    description:
      page?.description ??
      "DevOps interview questions with detailed answers.",
    path: `/docs${path === "" ? "" : `/${path}`}`,
  })
}

/**
 * One content page from `content/docs/**`. The MDX source stays on disk
 * exactly as it is written; tags resolve through `docMdxComponents`.
 */
export default async function DocPage({ params }: Params) {
  const { slug } = await params
  const path = pathOf(slug)
  const raw = await readDoc(path)
  // Frontmatter is metadata, not content; leading import lines are satisfied
  // by `docMdxComponents` — `evaluate` runs as a function body and cannot
  // resolve module imports.
  const { body } = parseFrontmatter(raw)
  const source = body
    .trimStart()
    .replace(/^(?:import[\s\S]*?from\s+["'][^"']+["'];?\s*\n+)+/, "")
    .trim()

  const { default: Content } = await evaluate(source, {
    ...runtime,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  } as Parameters<typeof evaluate>[1])

  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      <div className="flex flex-col gap-4">
        <Content components={docMdxComponents} />
      </div>
      {path === "" ? <TopicsGrid /> : null}
      <DocsPager slug={path} />
    </div>
  )
}
