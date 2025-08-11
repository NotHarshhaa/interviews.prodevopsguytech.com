import { LargeSearchToggle } from "@/components/layout/search-toggle";
import VectorField from './VectorField';
import CTA from "./CTA";
import SectionLink from "./SectionLink";
import HeroSectionVisual from "./HeroSectionVisual";
import { Code2, Cpu, GitBranch, GraduationCap, Server, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="flex relative flex-col box-content overflow-clip min-h-[90vh]">
      <div className="flex flex-col gap-6 sm:gap-10 justify-center box-content h-full flex-1 pb-6 pt-20 sm:pb-28 sm:pt-40">
      {/* Background elements */}
      <div className="absolute -z-10 inset-0 w-full h-full overflow-x-clip [mask-size:100%_100%] [mask-repeat:no-repeat] [mask-position:center_top] [mask-composite:exclude] [mask-mode:alpha] [mask-origin:content-box] [mask-clip:content-box] [mask-border-mode:match-source] [mask-image:linear-gradient(to_bottom,red,transparent_88%)]">
        <div className="-z-10 bg-gradient-to-b from-white via-white/90 to-white/80 dark:from-neutral-800 dark:via-neutral-800/90 dark:to-neutral-800/80 rounded-full w-[55rem] h-[55rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border dark:blur-3xl animate-pulse-slow max-sm:scale-75"/>
        <div className="bg-grid-dots opacity-70 dark:opacity-50 rounded-full w-[55rem] h-[55rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(red,transparent_80%)] animate-float max-sm:scale-75"></div>
      </div>

      <VectorField />
        
      <SectionLink border className="z-30 hidden sm:block lg:hidden !relative -translate-y-6 max-lg:px-6" href="#" name="px-4 text-4xl text-balance tracking-tight leading-tight" />
      <SectionLink border className="z-30 hidden lg:block !relative -translate-y-6 max-lg:px-6" href="#" name="text-5xl text-balance tracking-tight leading-tight" />

      <div className="space-y-8">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold dark:opacity-90 bg-gradient-to-br from-black/80 via-black/70 to-cyan-800/90 bg-clip-text text-transparent dark:from-white/90 dark:via-white/80 dark:to-cyan-400/90 border-y border-dashed border-fd-border/60 bg-fd-background backdrop-blur tracking-tight leading-tight py-6 sm:py-8">
          <div className="max-w-fd-container text-start mx-auto max-lg:px-4 text-balance w-full">
            Welcome to DevOps Interview Preparation Space
          </div>
        </h1>

        <div className="flex justify-center border-y border-dashed border-fd-border/60 relative backdrop-blur dark:opacity-90 py-6 sm:py-8 transition-opacity hover:opacity-100"> 
          <div className="w-full max-w-fd-container mx-auto relative">
            <div className="max-w-[65ch] max-lg:px-4 space-y-3 sm:space-y-4">
              <p className="text-fd-muted-foreground/90 dark:text-fd-muted-foreground/80 text-pretty text-base sm:text-lg leading-relaxed font-light">
                Your one-stop destination for mastering <span className="text-cyan-700 dark:text-cyan-400 font-normal">DevOps</span>, <span className="text-cyan-700 dark:text-cyan-400 font-normal">Cloud</span>, and <span className="text-cyan-700 dark:text-cyan-400 font-normal">SRE</span> interviews!
              </p>
              <p className="text-fd-muted-foreground text-pretty text-base sm:text-lg leading-relaxed">
                Contains <span className="font-medium">550+</span> carefully curated interview questions with detailed answers, covering all major DevOps tools, cloud platforms, and best practices. Whether you're a beginner preparing for your first DevOps job or an experienced engineer aiming for top-tier roles, this resource will help you understand core concepts, ace technical interviews, and build confidence.
              </p>
            </div>
          </div>
        </div>

        <div className="border-y border-dashed border-fd-border/60 box-content backdrop-blur dark:opacity-90 transition-all hover:backdrop-blur-lg">
          <div className="w-full max-w-fd-container mx-auto flex flex-col sm:flex-row gap-4 sm:gap-6 max-lg:px-6 py-4">
            <LargeSearchToggle
              className="w-full max-w-none sm:max-w-[280px] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              onHeroSection
              hideIfDisabled
            />
            <CTA />
          </div>
          <div className="text-center py-2 text-sm text-fd-muted-foreground/70 border-t border-dashed border-fd-border/60">
            Start exploring our comprehensive DevOps interview resources
          </div>
        </div>

        {/* Key Features Section */}
        <div className="border-y border-dashed border-fd-border/60 backdrop-blur bg-fd-background/30 py-8 sm:py-12 mt-8">
          <div className="w-full max-w-fd-container mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 px-4">
            <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl transition-all hover:bg-fd-background/50">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="font-medium">550+ Questions</h3>
              <p className="text-sm text-fd-muted-foreground/80">Comprehensive coverage of DevOps concepts</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl transition-all hover:bg-fd-background/50">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 flex items-center justify-center">
                <Server className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="font-medium">Cloud Platforms</h3>
              <p className="text-sm text-fd-muted-foreground/80">AWS, Azure, and GCP covered</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl transition-all hover:bg-fd-background/50">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 flex items-center justify-center">
                <GitBranch className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="font-medium">CI/CD Pipelines</h3>
              <p className="text-sm text-fd-muted-foreground/80">Modern deployment practices</p>
            </div>
          </div>
        </div>

        {/* Learning Path Section */}
        <div className="border-y border-dashed border-fd-border/60 backdrop-blur py-8 sm:py-12">
          <div className="w-full max-w-fd-container mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-8 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-600 to-cyan-800 dark:from-cyan-400 dark:to-cyan-600 bg-clip-text text-transparent">
                  Structured Learning Path
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-fd-background/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Beginner to Advanced</h3>
                      <p className="text-sm text-fd-muted-foreground/80">Progressive difficulty levels</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-fd-background/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Hands-on Practice</h3>
                      <p className="text-sm text-fd-muted-foreground/80">Real-world scenarios</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-fd-background/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 flex items-center justify-center">
                      <Users className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Community Support</h3>
                      <p className="text-sm text-fd-muted-foreground/80">Learn from peers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-cyan-400/30 blur-xl opacity-20 rounded-xl" />
                <div className="relative bg-fd-background/40 backdrop-blur-sm border border-dashed border-fd-border/60 rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="h-2 w-24 bg-cyan-500/20 rounded-full" />
                    <div className="space-y-2">
                      <div className="h-4 w-3/4 bg-fd-muted-foreground/10 rounded-full" />
                      <div className="h-4 w-1/2 bg-fd-muted-foreground/10 rounded-full" />
                    </div>
                    <div className="pt-4 flex gap-3">
                      <div className="h-8 w-8 rounded-lg bg-cyan-500/20" />
                      <div className="h-8 w-8 rounded-lg bg-cyan-500/15" />
                      <div className="h-8 w-8 rounded-lg bg-cyan-500/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
      <HeroSectionVisual />
    </section>
  )
}