import Link from "next/link";

export default function CTA() {
  return (
    <Link
      href="/docs/getting-started"
      className="group relative inline-flex h-11 items-center justify-center gap-2 rounded-md bg-fd-foreground px-5 text-[15px] font-medium text-fd-background shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-px hover:shadow-xl hover:shadow-black/15 active:translate-y-0 dark:shadow-black/40"
    >
      <span className="absolute inset-0 rounded-md border border-dashed border-fd-border/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:border-solid -z-10" />
      Start Reading
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        <path
          d="M1 8h12M9 3l5 5-5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
