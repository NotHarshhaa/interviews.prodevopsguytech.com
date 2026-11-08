"use client"

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react"
import { useRouter } from "next/navigation"
import { Dialog } from "@base-ui/react/dialog"
import { Search01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { HeaderButton } from "@/components/site/header-button"
import { SiteCorners } from "@/components/site/corners"
import type { SearchHit } from "@/lib/docs/content"
import { cn } from "@/lib/utils"
import { HitArea } from "@/components/site/hit-area"

function SiteSearch({ hits }: { hits: SearchHit[] }) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [active, setActive] = useState(0)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.repeat || event.defaultPrevented) {
        return
      }

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpen((current) => !current)
        setQuery("")
        setActive(0)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) {
      return hits
    }

    return hits.filter((item) => item.haystack.includes(needle))
  }, [hits, query])

  useEffect(() => {
    if (!open) {
      return
    }

    requestAnimationFrame(() => inputRef.current?.focus())
  }, [open])

  useEffect(() => {
    if (!open) {
      return
    }

    document
      .getElementById(`search-hit-${active}`)
      ?.scrollIntoView({ block: "nearest" })
  }, [active, open])

  function go(href: string) {
    setOpen(false)
    setQuery("")
    router.push(href)
  }

  function onInputKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault()
      setActive((index) => Math.min(index + 1, Math.max(results.length - 1, 0)))
    }

    if (event.key === "ArrowUp") {
      event.preventDefault()
      setActive((index) => Math.max(index - 1, 0))
    }

    if (event.key === "Enter") {
      event.preventDefault()
      const hit = results[active]
      if (hit) {
        go(hit.href)
      }
    }
  }

  const groups = useMemo(() => {
    const seen: { label: string; items: { hit: SearchHit; index: number }[] }[] = []

    results.forEach((hit, index) => {
      const last = seen[seen.length - 1]
      if (last?.label === hit.group) {
        last.items.push({ hit, index })
        return
      }

      seen.push({ label: hit.group, items: [{ hit, index }] })
    })

    return seen
  }, [results])

  return (
    <Dialog.Root
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) {
          setQuery("")
          setActive(0)
        }
      }}
      open={open}
    >
      <Dialog.Trigger
        render={
          <HeaderButton
            aria-keyshortcuts="Meta+K Control+K"
            className="lg:w-auto lg:gap-2 lg:px-2"
            label="Search"
          />
        }
      >
        <HugeiconsIcon
          className="size-5 shrink-0 sm:size-4"
          icon={Search01Icon}
          size={20}
          strokeWidth={1.5}
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop
          className={cn(
            "graph-motion fixed inset-0 z-50 bg-background/80",
            "transition-opacity duration-200 ease-out-cubic",
            "data-ending-style:opacity-0 data-starting-style:opacity-0"
          )}
        />
        <Dialog.Popup
          className={cn(
            "graph-motion fixed inset-0 z-50 flex flex-col bg-background",
            "sm:inset-auto sm:top-[18%] sm:left-1/2 sm:w-full sm:max-w-lg sm:-translate-x-1/2",
            "sm:site-rail",
            "origin-top transition-[opacity,transform] duration-200 ease-out-cubic",
            "data-starting-style:scale-95 data-starting-style:opacity-0",
            "data-ending-style:scale-95 data-ending-style:opacity-0 data-ending-style:duration-150"
          )}
        >
          <SiteCorners className="max-sm:hidden" />
          <Dialog.Title className="sr-only">Search</Dialog.Title>
          <div className="flex items-center gap-3 border-b border-dashed border-site-rail px-4">
            <HugeiconsIcon
              className="size-5 shrink-0 text-graph-muted sm:size-4"
              icon={Search01Icon}
              size={20}
              strokeWidth={1.5}
            />
            <input
              aria-activedescendant={
                results[active] ? `search-hit-${active}` : undefined
              }
              aria-autocomplete="list"
              aria-controls="search-results"
              aria-expanded={open}
              aria-label="Search"
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              className="h-14 min-w-0 flex-1 bg-transparent text-base outline-none sm:h-12"
              onChange={(event) => {
                setQuery(event.target.value)
                setActive(0)
              }}
              onKeyDown={onInputKeyDown}
              placeholder="Search"
              ref={inputRef}
              role="combobox"
              spellCheck={false}
              type="search"
              value={query}
            />
            <Dialog.Close className="relative shrink-0 py-2 text-muted-foreground hover:text-foreground sm:hidden">
              <HitArea />
              Cancel
            </Dialog.Close>
          </div>
          <div
            className="scrollbar-graph min-h-0 flex-1 overflow-y-auto p-2 sm:max-h-[min(24rem,60vh)]"
            id="search-results"
            role="listbox"
          >
            {results.length === 0 ? (
              <p className="px-3 py-6 text-muted-foreground">
                Nothing matches.
              </p>
            ) : (
              groups.map((group) => (
                <div className="flex flex-col gap-1 py-2" key={group.label}>
                  <p className="px-3 font-mono tracking-wide text-graph-muted">
                    {group.label}
                  </p>
                  <ul className="flex flex-col" role="presentation">
                    {group.items.map(({ hit, index }) => {
                      const selected = index === active

                      return (
                        <li key={hit.href} role="presentation">
                          <button
                            aria-selected={selected}
                            className={cn(
                              "flex w-full flex-col gap-0.5 px-3 py-2.5 text-left sm:py-2",
                              selected
                                ? "bg-muted text-foreground"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                            id={`search-hit-${index}`}
                            onClick={() => go(hit.href)}
                            onMouseEnter={() => setActive(index)}
                            role="option"
                            type="button"
                          >
                            <span className="text-foreground">{hit.title}</span>
                            <span className="font-mono text-graph-muted">
                              {hit.detail}
                            </span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))
            )}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export { SiteSearch }
