import Link from "next/link"

import { MonoLabel } from "@/components/docs/mono-label"
import { FrameBox } from "@/components/site/corners"
import { docSections } from "@/lib/docs/content"

/**
 * The docs index grid: one frame per section folder, listing its levels —
 * the interview-topics equivalent of the component grid the docs intro had.
 */
async function TopicsGrid() {
  const sections = await docSections()

  return (
    <section className="flex flex-col gap-6">
      <MonoLabel>interview sections</MonoLabel>
      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((section) => (
          <FrameBox key={section.title} className="flex flex-col gap-3 p-5">
            <MonoLabel>{section.title}</MonoLabel>
            <ul className="flex flex-col gap-1" role="list">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-muted-foreground underline-offset-[0.2em] transition-colors duration-150 ease-out hover:text-foreground hover:underline"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FrameBox>
        ))}
      </div>
    </section>
  )
}

export { TopicsGrid }
