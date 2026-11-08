"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dialog } from "@base-ui/react/dialog"
import {
  ArrowRight02Icon,
  Cancel01Icon,
  MenuIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { SiteRule } from "@/components/site/corners"
import { MonoLabel } from "@/components/docs/mono-label"
import { OnThisPage } from "@/components/docs/on-this-page"
import type { NavGroup, NavLink } from "@/lib/docs/content"
import { cn } from "@/lib/utils"
import { HitArea } from "@/components/site/hit-area"

function DocsNav({
  nav,
  onNavigate,
  railClassName,
}: {
  /** Docs pages in sidebar order, read from `content/docs/meta.json`. */
  nav: NavGroup[]
  onNavigate?: () => void
  /** Hides what the right rail already shows, once the rail is on screen. */
  railClassName?: string
}) {
  return (
    <div className="flex flex-col gap-8">
      <nav aria-label="Docs" className="text-base sm:text-sm">
        <div className="flex flex-col gap-8">
          {nav.map((group) => (
            <NavGroup key={group.label} label={group.label}>
              {group.items.map((item) =>
                item.items ? (
                  <NavFolder
                    item={item}
                    key={item.href}
                    onNavigate={onNavigate}
                    sectionsClassName={railClassName}
                  />
                ) : (
                  <NavItem
                    href={item.href}
                    isNew={item.isNew}
                    key={item.href}
                    onNavigate={onNavigate}
                    sectionsClassName={railClassName}
                  >
                    {item.label}
                  </NavItem>
                )
              )}
            </NavGroup>
          ))}
        </div>
      </nav>
    </div>
  )
}

function NavGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <MonoLabel className="px-4 py-3">{label}</MonoLabel>
      <ul className="flex flex-col" role="list">
        {children}
      </ul>
    </div>
  )
}

function NavItem({
  href,
  children,
  isNew = false,
  onNavigate,
  sectionsClassName,
}: {
  href: string
  children: ReactNode
  isNew?: boolean
  onNavigate?: () => void
  sectionsClassName?: string
}) {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <li>
      <Link
        aria-current={active ? "page" : undefined}
        className={cn(
          "flex items-center justify-between gap-2 px-4 py-2 text-muted-foreground hover:bg-muted/50 hover:text-foreground",
          active && "bg-muted text-foreground hover:bg-muted"
        )}
        href={href}
        onClick={onNavigate}
        prefetch={false}
      >
        <span className="min-w-0 truncate">{children}</span>
        {isNew ? (
          <span className="shrink-0 font-mono text-xs tracking-wide text-graph-accent">
            new
          </span>
        ) : null}
      </Link>
      {active ? (
        <OnThisPage className={sectionsClassName} onNavigate={onNavigate} />
      ) : null}
    </li>
  )
}

/**
 * A section folder: the row toggles its level pages open, and it starts
 * open when the current page lives inside it.
 */
function NavFolder({
  item,
  onNavigate,
  sectionsClassName,
}: {
  item: NavLink
  onNavigate?: () => void
  sectionsClassName?: string
}) {
  const pathname = usePathname()
  const containsActive = (item.items ?? []).some(
    (child) =>
      pathname === child.href || pathname.startsWith(`${child.href}/`)
  )
  // Open unless the user toggled it themselves; navigating into the section
  // opens it, navigating away closes it.
  const [manual, setManual] = useState<boolean | null>(null)
  const open = manual ?? containsActive

  return (
    <li>
      <button
        aria-expanded={open}
        className={cn(
          "flex w-full items-center justify-between gap-2 px-4 py-2 text-muted-foreground hover:bg-muted/50 hover:text-foreground",
          containsActive && "text-foreground"
        )}
        onClick={() => setManual(!open)}
        type="button"
      >
        <span className="min-w-0 truncate">{item.label}</span>
        <HugeiconsIcon
          className={cn(
            "size-3.5 shrink-0 text-graph-muted transition-transform duration-150 ease-out",
            open && "rotate-90"
          )}
          icon={ArrowRight02Icon}
          size={16}
          strokeWidth={1.5}
        />
      </button>
      {open ? (
        <ul
          aria-label={typeof item.label === "string" ? item.label : undefined}
          className="relative ml-4 flex flex-col"
          role="list"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 site-rule-y"
          />
          {(item.items ?? []).map((child) => (
            <NavItem
              href={child.href}
              isNew={child.isNew}
              key={child.href}
              onNavigate={onNavigate}
              sectionsClassName={sectionsClassName}
            >
              {child.label}
            </NavItem>
          ))}
        </ul>
      ) : null}
    </li>
  )
}

function ScrollFade({ edge }: { edge: "top" | "bottom" }) {
  const isTop = edge === "top"
  const mask = `linear-gradient(to ${isTop ? "bottom" : "top"}, black, transparent)`

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 z-10 h-10",
        isTop ? "top-0" : "bottom-0"
      )}
    >
      <div
        className={cn(
          "absolute inset-0",
          isTop
            ? "bg-linear-to-b from-background from-20% to-background/0"
            : "bg-linear-to-t from-background from-20% to-background/0"
        )}
      />
      <div
        className="absolute inset-0 backdrop-blur-[8px]"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      />
    </div>
  )
}

/** Keep the current page's link in view when the sidebar is taller than the screen. */
function useRevealCurrent() {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroller = ref.current
    const link = scroller?.querySelector<HTMLElement>('[aria-current="page"]')
    if (!scroller || !link) {
      return
    }

    const box = scroller.getBoundingClientRect()
    const item = link.getBoundingClientRect()
    if (item.top < box.top + 48 || item.bottom > box.bottom - 48) {
      scroller.scrollTop += item.top - box.top - box.height / 3
    }
  }, [pathname])

  return ref
}

function DocsSidebar({ nav }: { nav: NavGroup[] }) {
  const scrollerRef = useRevealCurrent()

  return (
    <aside className="sticky top-16 isolate flex h-[calc(100dvh-4rem)] w-64 shrink-0 flex-col max-lg:hidden">
      <SiteRule className="right-0" orientation="y" />
      <div className="relative min-h-0 flex-1">
        <div
          className="scrollbar-none h-full max-h-full overflow-y-auto py-10"
          data-docs-scroller=""
          ref={scrollerRef}
        >
          <DocsNav nav={nav} railClassName="xl:hidden" />
        </div>
        <ScrollFade edge="top" />
        <ScrollFade edge="bottom" />
      </div>
    </aside>
  )
}

function DocsMobileNav({ nav }: { nav: NavGroup[] }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root onOpenChange={setOpen} open={open}>
      <Dialog.Trigger
        aria-label="Open docs menu"
        className="relative flex items-center gap-2 py-1 text-foreground"
      >
        <HitArea />
        <HugeiconsIcon
          className="size-4 shrink-0"
          icon={MenuIcon}
          size={16}
          strokeWidth={1.5}
        />
        <span>docs</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Popup
          className={cn(
            "graph-motion fixed inset-0 z-50 flex flex-col gap-8 overflow-y-auto bg-background p-4",
            "origin-top-left transition-[opacity,transform] duration-200 ease-out-cubic",
            "data-starting-style:scale-95 data-starting-style:opacity-0",
            "data-ending-style:scale-95 data-ending-style:opacity-0 data-ending-style:duration-150"
          )}
        >
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-foreground">docs</Dialog.Title>
            <Dialog.Close
              aria-label="Close docs menu"
              className="relative size-8 text-foreground"
            >
              <HitArea />
              <HugeiconsIcon
                className="size-4 shrink-0"
                icon={Cancel01Icon}
                size={16}
                strokeWidth={1.5}
              />
            </Dialog.Close>
          </div>
          <DocsNav nav={nav} onNavigate={() => setOpen(false)} />
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

/** Right rail on wide screens: the two display choices, then the page's sections. */
function DocsRail() {
  return (
    <aside className="sticky top-16 isolate flex max-h-[calc(100dvh-4rem)] w-64 shrink-0 flex-col gap-8 py-10 text-sm max-xl:hidden">
      <SiteRule className="left-0" orientation="y" />
      <div
        className="scrollbar-none min-h-0 shrink overflow-y-auto px-4"
        data-docs-scroller=""
      >
        <OnThisPage variant="rail" />
      </div>
    </aside>
  )
}

export { DocsMobileNav, DocsNav, DocsRail, DocsSidebar }
