import { access, readFile, readdir } from "node:fs/promises"
import path from "node:path"

export type NavLink = {
  href: string
  label: string
  isNew?: boolean
  /** A folder node: the row toggles open instead of navigating. */
  items?: NavLink[]
}
export type NavGroup = { label: string; items: NavLink[] }

export type DocPage = {
  /** Path under `/docs`. Empty string is the docs root (`index.mdx`). */
  slug: string
  title: string
  description: string
}

export type DocMeta = {
  title?: string
  description?: string
}

const DOCS_DIR = path.join(process.cwd(), "content/docs")

type MetaEntry = string | { folder: string; title: string }

/** Preferred order of level files inside a section folder. */
const LEVEL_ORDER = ["getting-started", "beginner", "intermediate", "advanced"]

function levelRank(name: string) {
  const index = LEVEL_ORDER.indexOf(name)
  return index === -1 ? LEVEL_ORDER.length : index
}

/**
 * `""` → `index.mdx`. `"core-concepts/beginner"` → that file. A folder
 * slug (`getting-started`) falls back to its `index.mdx`, so the URL
 * `/docs/getting-started` serves `getting-started/index.mdx`.
 */
async function fileOf(slug: string) {
  if (slug === "") {
    return path.join(DOCS_DIR, "index.mdx")
  }

  const direct = path.join(DOCS_DIR, `${slug}.mdx`)
  try {
    await access(direct)
    return direct
  } catch {
    return path.join(DOCS_DIR, slug, "index.mdx")
  }
}

/**
 * The content frontmatter is flat `key: value` lines between `---` rules,
 * so a small parser is enough — no YAML dependency.
 */
export function parseFrontmatter(source: string): {
  meta: DocMeta
  body: string
} {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (!match) {
    return { meta: {}, body: source }
  }

  const meta: DocMeta = {}
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":")
    if (separator === -1) {
      continue
    }
    const key = line.slice(0, separator).trim()
    const value = line.slice(separator + 1).trim()
    if (key === "title" || key === "description") {
      meta[key] = value
    }
  }

  return { meta, body: source.slice(match[0].length) }
}

export async function readDoc(slug: string): Promise<string> {
  return readFile(await fileOf(slug), "utf8")
}

/** Frontmatter of one doc, read from disk. */
async function metaOf(slug: string): Promise<DocMeta> {
  const { meta } = parseFrontmatter(await readDoc(slug))
  return meta
}

/** `getting-started/index` is stored as a file path but routes as a folder. */
function slugOf(entry: string) {
  return entry === "index" ? "" : entry.replace(/\/index$/, "")
}

/** The `.mdx` file names in a section folder, in level order. */
async function folderFiles(folder: string): Promise<string[]> {
  const entries = await readdir(path.join(DOCS_DIR, folder))
  return entries
    .filter((entry) => entry.endsWith(".mdx"))
    .map((entry) => entry.slice(0, -".mdx".length))
    .sort((a, b) => levelRank(a) - levelRank(b) || a.localeCompare(b))
}

/**
 * The docs sidebar, from `content/docs/meta.json`. A `"---Label---"` entry
 * starts a group, a string entry is one page, and a `{ folder, title }`
 * entry becomes an expandable folder holding that folder's pages in level
 * order.
 */
export async function docsNav(): Promise<NavGroup[]> {
  const raw = await readFile(path.join(DOCS_DIR, "meta.json"), "utf8")
  const { pages } = JSON.parse(raw) as { pages: MetaEntry[] }

  const groups: NavGroup[] = []
  let current: NavGroup | undefined
  for (const entry of pages) {
    if (typeof entry === "string") {
      const separator = entry.match(/^---(.+)---$/)
      if (separator) {
        current = { label: separator[1].toLowerCase(), items: [] }
        groups.push(current)
        continue
      }

      const meta = await metaOf(entry)
      current?.items.push({
        href: `/docs/${slugOf(entry)}`.replace(/\/$/, ""),
        label: meta.title ?? entry,
      })
      continue
    }

    const items: NavLink[] = []
    for (const file of await folderFiles(entry.folder)) {
      const meta = await metaOf(`${entry.folder}/${file}`)
      items.push({
        href: `/docs/${entry.folder}/${file}`,
        label: meta.title ?? file,
      })
    }

    current?.items.push({
      // Folder rows don't navigate; the href keys the node and anchors
      // the section prefix for active matching.
      href: `/docs/${entry.folder}`,
      label: entry.title,
      items,
    })
  }

  return groups
}

/** Folder nodes flattened to their pages, in sidebar order. */
function flattenItems(items: NavLink[]): NavLink[] {
  return items.flatMap((item) =>
    item.items ? flattenItems(item.items) : [item]
  )
}

/** Every docs page in sidebar order — drives params, the pager, the sitemap. */
export async function docPages(): Promise<DocPage[]> {
  const pages: DocPage[] = []
  for (const group of await docsNav()) {
    for (const item of flattenItems(group.items)) {
      const slug = item.href.replace(/^\/docs\/?/, "")
      const meta = await metaOf(slug)
      pages.push({
        slug,
        title: meta.title ?? item.label,
        description: meta.description ?? "",
      })
    }
  }
  return pages
}

export type SearchHit = {
  href: string
  title: string
  detail: string
  group: string
  haystack: string
}

/** The header search index: one hit per docs page, grouped like the sidebar. */
export async function searchHits(): Promise<SearchHit[]> {
  const hits: SearchHit[] = []

  for (const group of await docsNav()) {
    for (const item of flattenItems(group.items)) {
      const meta = await metaOf(item.href.replace(/^\/docs\/?/, ""))
      hits.push({
        href: item.href,
        title: item.label,
        detail: item.href,
        group: group.label,
        haystack:
          `${item.label} ${item.href} ${meta.description ?? ""}`.toLowerCase(),
      })
    }
  }

  return hits
}

export type DocSection = {
  /** Display title from the meta.json folder entry. */
  title: string
  items: NavLink[]
}

/**
 * The section folders, with their meta.json titles and page lists — the
 * building blocks for the docs index grid.
 */
export async function docSections(): Promise<DocSection[]> {
  const raw = await readFile(path.join(DOCS_DIR, "meta.json"), "utf8")
  const { pages } = JSON.parse(raw) as { pages: MetaEntry[] }

  const sections: DocSection[] = []
  for (const entry of pages) {
    if (typeof entry === "string" || !("folder" in entry)) {
      continue
    }

    const items: NavLink[] = []
    for (const file of await folderFiles(entry.folder)) {
      const meta = await metaOf(`${entry.folder}/${file}`)
      items.push({
        href: `/docs/${entry.folder}/${file}`,
        label: meta.title ?? file,
      })
    }

    sections.push({ title: entry.title, items })
  }

  return sections
}
