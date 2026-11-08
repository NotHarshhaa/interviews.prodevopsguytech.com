import Link from "next/link"

import { docPages } from "@/lib/docs/content"
import { cn } from "@/lib/utils"

function PagerLink({
  slug,
  title,
  direction,
}: {
  slug: string
  title: string
  direction: "previous" | "next"
}) {
  const next = direction === "next"

  return (
    <Link
      className={cn(
        "group flex min-w-0 flex-col gap-1 py-4 transition-colors duration-150 ease-out",
        next ? "col-start-2 items-end text-right" : "items-start"
      )}
      href={`/docs/${slug}`}
      rel={next ? "next" : "prev"}
    >
      <span className="font-mono text-sm text-graph-muted">
        {next ? "next →" : "← previous"}
      </span>
      <span className="text-lg font-semibold tracking-tight text-foreground underline decoration-transparent decoration-dashed underline-offset-[0.2em] transition-[text-decoration-color] duration-150 ease-out group-hover:decoration-graph-frame">
        {title}
      </span>
    </Link>
  )
}

/** Previous and next docs page, in sidebar order. */
async function DocsPager({ slug }: { slug: string }) {
  const pages = await docPages()
  const index = pages.findIndex((item) => item.slug === slug)

  if (index === -1) {
    return null
  }

  const previous = pages[index - 1]
  const next = pages[index + 1]

  return (
    <nav
      aria-label="Previous and next page"
      className="relative grid grid-cols-2 gap-x-8"
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 site-rule" />
      {previous ? (
        <PagerLink
          direction="previous"
          slug={previous.slug}
          title={previous.title}
        />
      ) : null}
      {next ? (
        <PagerLink direction="next" slug={next.slug} title={next.title} />
      ) : null}
    </nav>
  )
}

export { DocsPager }
