import Link from "next/link";

export default function CTA() {
  return (
    <Link href="/docs/getting-started" className="group relative box-content pl-4 pr-3 py-2.5 -my-[1px] text-fd-background">
      <div className="flex items-center gap-2">
        <span>Get Started</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
          <path d="M1 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="-z-10 absolute top-0 left-0 h-[80%] w-full bg-gradient-to-r from-fd-foreground/90 to-fd-foreground/80 group-hover:translate-1 duration-300 border-t border-dashed"/>
      <div className="-z-10 absolute top-0.5 left-0.5 h-[80%] w-full bg-gradient-to-r from-fd-foreground/90 to-fd-foreground/80 group-hover:translate-0.5 duration-300"/>
      <div className="-z-10 absolute top-1.5 left-1.5 h-[80%] w-full bg-gradient-to-r from-fd-foreground/90 to-fd-foreground/80 group-hover:-translate-0.5 duration-300"/>
      <div className="-z-10 absolute top-2 left-2 h-[80%] w-full bg-gradient-to-r from-fd-foreground/90 to-fd-foreground/80 group-hover:-translate-1 duration-300 border-b border-dashed"/>

      <div className="-z-10 group-hover:border-fd-background border-transparent border-y border-dashed absolute top-1 left-1 h-[80%] w-full bg-gradient-to-r from-fd-foreground/90 to-fd-primary/90 group-hover:scale-y-120 duration-300"/>
    </Link>
  )
}