import type { ComponentProps, ElementType, ReactNode } from "react"

import { SectionHeading } from "@/components/docs/section-heading"
import { Callout as RegistryCallout } from "@/components/graphs"
import * as graphs from "@/components/graphs"
import { Button } from "@/components/ui/button"
import { InlineCode, ProseP, TextLink } from "@/components/site/prose"
import {
  ArrowRight02Icon,
  BookIcon,
  GlobeIcon,
  HeartIcon,
  LayersIcon,
  MegaphoneIcon,
  RocketIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"

import { Graph, GraphBody } from "@/registry/default/graph-frame/graph-frame"
import { textOf } from "@/registry/default/graph-frame/graph-markdown"
import { withMdxcn } from "@/registry/default/mdx/mdx"
import { cn } from "@/lib/utils"

/** The docs content uses the old fumadocs type names; map them to ours. */
const CALLOUT_TYPE = {
  info: "note",
  note: "note",
  tip: "tip",
  warn: "warning",
  warning: "warning",
  error: "danger",
  danger: "danger",
} as const

function Callout({
  type,
  ...props
}: ComponentProps<typeof RegistryCallout> & {
  type?: keyof typeof CALLOUT_TYPE
}) {
  return <RegistryCallout type={CALLOUT_TYPE[type ?? "note"]} {...props} />
}

/**
 * `<InteractiveHoverButton text="..." href="..."/>` in the content — renders
 * the site's own Button (hero CTA style) instead of the old pill button.
 */
function DocButton({
  text = "Button",
  className,
  href,
}: {
  text?: string
  className?: string
  href?: string
}) {
  if (!href) {
    return <Button className={className}>{text}</Button>
  }

  return (
    <Button
      className={cn("self-start h-10 gap-2 px-4 text-sm", className)}
      nativeButton={false}
      render={<Link href={href} />}
    >
      {text}
      <HugeiconsIcon icon={ArrowRight02Icon} size={16} strokeWidth={2} />
    </Button>
  )
}

/** Known headings get a quiet icon instead of the emojis the content used. */
const HEADING_ICONS: {
  match: RegExp
  icon: typeof MegaphoneIcon
}[] = [
  { match: /contribute|stay updated/i, icon: MegaphoneIcon },
  { match: /community|connect with us|connect/i, icon: GlobeIcon },
  { match: /contributing/i, icon: HeartIcon },
  { match: /master collection/i, icon: LayersIcon },
  { match: /getting started/i, icon: RocketIcon },
  { match: /question categories|how the content|what.*cover|inside/i, icon: BookIcon },
]

function headingIcon(children: ReactNode) {
  const text =
    typeof children === "string"
      ? children
      : Array.isArray(children)
        ? children.filter((node) => typeof node === "string").join(" ")
        : ""

  const hit = HEADING_ICONS.find((entry) => entry.match.test(text))
  if (!hit) {
    return null
  }

  return (
    <HugeiconsIcon
      aria-hidden="true"
      className="mr-2 inline-block size-4 shrink-0 translate-y-[-1px] text-graph-accent"
      icon={hit.icon}
      size={16}
      strokeWidth={1.5}
    />
  )
}

function H1(props: ComponentProps<"h1">) {
  const icon = headingIcon(props.children)
  return (
    <h1
      className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
      {...props}
    >
      {icon}
      {props.children}
    </h1>
  )
}

/** `h2[id]` is what the on-this-page rail reads, so ids must survive. */
function H2({ id, className, children }: ComponentProps<"h2">) {
  const icon = headingIcon(children)
  if (!id) {
    return (
      <h2
        className={cn(
          "text-xl font-semibold tracking-tight text-balance",
          className
        )}
      >
        {icon}
        {children}
      </h2>
    )
  }

  return (
    <SectionHeading id={id}>
      {icon}
      {children}
    </SectionHeading>
  )
}

function H3(props: ComponentProps<"h3">) {
  const icon = headingIcon(props.children)
  return (
    <h3 className="text-lg font-semibold tracking-tight" {...props}>
      {icon}
      {props.children}
    </h3>
  )
}

/** Dash-marker lists, matching the frame prose. */
function Ul(props: ComponentProps<"ul">) {
  return (
    <ul
      className="m-0 flex list-none flex-col gap-1.5 p-0 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-graph-muted [&>li]:before:content-['-']"
      {...props}
    />
  )
}

function Ol(props: ComponentProps<"ol">) {
  return (
    <ol
      className="m-0 flex list-decimal flex-col gap-1.5 pl-5 marker:text-graph-muted"
      {...props}
    />
  )
}

/** `language-yaml` on the code child → `yaml`. */
function languageOf(pre: { children?: ReactNode }) {
  const nodes = (Array.isArray(pre.children)
    ? pre.children
    : [pre.children]) as ReactNode[]

  for (const node of nodes) {
    if (typeof node === "object" && node !== null && "props" in node) {
      const className = (node as { props?: { className?: unknown } }).props
        ?.className
      if (typeof className === "string") {
        const match = className.match(/language-(\S+)/)
        if (match?.[1]) {
          return match[1].toLowerCase()
        }
      }
    }
  }

  return ""
}

/** Fenced code in the frame design. Shell sessions become Terminal via withMdxcn. */
function Pre(props: ComponentProps<"pre">) {
  const language = languageOf(props)
  const text = textOf(props.children).replace(/\n$/, "")

  return (
    <Graph title={language || "code"}>
      <GraphBody className="overflow-x-auto overflow-y-hidden">
        <pre className="m-0 font-mono text-[0.8125rem] leading-relaxed text-foreground/90 whitespace-pre">
          <code>{text}</code>
        </pre>
      </GraphBody>
    </Graph>
  )
}

function Blockquote(props: ComponentProps<"blockquote">) {
  return (
    <blockquote
      className="border-graph-frame border-l-2 pl-4 text-muted-foreground"
      {...props}
    />
  )
}

function Hr(props: ComponentProps<"hr">) {
  return <hr className="border-graph-frame" {...props} />
}

/** Rich-content tables (links, code, bold in cells), on the graph-table grid. */
function Table(props: ComponentProps<"table">) {
  return (
    <div className="max-w-full overflow-x-auto">
      <table
        className="w-full border-separate border-spacing-0 text-sm [&_td]:border-b [&_td]:border-graph-frame [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_td]:text-foreground/88 [&_th]:border-b [&_th]:border-graph-frame [&_th]:px-3 [&_th]:pb-2 [&_th]:text-left [&_th]:font-normal [&_th]:text-foreground"
        {...props}
      />
    </div>
  )
}

type MdxComponentsMap = Record<string, ElementType>

/** The registry barrel also exports parse helpers; the map is used loosely. */
const palette = {
  a: TextLink,
  blockquote: Blockquote,
  code: InlineCode,
  h1: H1,
  h2: H2,
  h3: H3,
  hr: Hr,
  ol: Ol,
  p: ProseP,
  pre: Pre,
  table: Table,
  ul: Ul,
  InteractiveHoverButton: DocButton,
  ...graphs,
  // The old content's fumadocs callout type names ride on the barrel export.
  Callout,
} as unknown as MdxComponentsMap

/**
 * Element map for the docs MDX. Content tags resolve to the site's prose and
 * graph components, and the whole registry palette is in scope, so a doc can
 * use `<Terminal>`, `<Quote>`, `<GraphCheck>`, `<Faq>` … without import lines.
 * `withMdxcn` then upgrades plain markdown on top: GitHub alerts, byline
 * quotes and shell-session fences become frames.
 */
export const docMdxComponents = withMdxcn(palette) as unknown as MdxComponentsMap
