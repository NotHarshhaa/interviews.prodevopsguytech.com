"use client"

import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"
import { HitArea } from "@/components/site/hit-area"

function HeaderButton({
  label,
  className,
  children,
  ...props
}: ComponentProps<"button"> & { label: string }) {
  return (
    <button
      aria-label={label}
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center text-muted-foreground hover:text-foreground",
        className
      )}
      type="button"
      {...props}
    >
      <HitArea />
      {children}
    </button>
  )
}

export { HeaderButton }
