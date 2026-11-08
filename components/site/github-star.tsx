import { GithubIcon } from "@/components/icons/github"
import { Button } from "@/components/ui/button"
import { GITHUB_URL } from "@/lib/github"
import { UTM_PARAMS } from "@/lib/site"
import { addQueryParams } from "@/lib/url"
import { cn } from "@/lib/utils"

function GithubStarLink({
  stars,
  className,
}: {
  stars: number | null
  className?: string
}) {
  const count =
    stars === null ? null : new Intl.NumberFormat("en-US").format(stars)

  return (
    <Button
      aria-label={count ? `Star on GitHub, ${count} stars` : "Star on GitHub"}
      className={cn(
        "text-sm font-normal text-muted-foreground hover:text-foreground",
        className
      )}
      nativeButton={false}
      render={
        <a href={addQueryParams(GITHUB_URL, UTM_PARAMS)} rel="noreferrer" />
      }
      variant="ghost"
    >
      <GithubIcon className="size-4 shrink-0" />
      {count ? <span className="tabular-nums">[{count}]</span> : null}
    </Button>
  )
}

export { GithubStarLink }
