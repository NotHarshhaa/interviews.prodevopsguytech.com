"use client"

import dynamic from "next/dynamic"

const GraphFlow = dynamic(
  () =>
    import("@/components/graphs").then((mod) => ({
      default: mod.GraphFlow,
    })),
  { ssr: false }
)

function PracticeFlowDemo() {
  return (
    <GraphFlow
      rows={[
        {
          nodes: [
            { label: "read the question" },
            { label: "answer out loud" },
            { label: "compare the model answer", tone: "accent" },
          ],
        },
        {
          nodes: [
            { label: "expect the follow-up" },
            { label: "name the trap" },
            { label: "move on, confident", tone: "accent" },
          ],
        },
      ]}
      title="loop"
    />
  )
}

export { PracticeFlowDemo }
