import Link from "next/link";
import SectionLink from "./SectionLink";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const socials = [
  {
    name: "Website",
    href: "https://prodevopsguytech.com",
    icon: WebsiteIcon,
  },
  {
    name: "Github",
    href: "https://github.com/NotHarshhaa",
    icon: GithubIcon,
  },
  {
    name: "Telegram",
    href: "https://t.me/NotHarshhaa",
    icon: TelegramIcon,
  }
]

function Socials() {
  return (
    <div className="flex gap-4">
      {socials.map((social) => (
        <a 
          href={social.href} 
          key={social.name} 
          className="relative group flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 hover:from-cyan-500/20 hover:to-cyan-400/10 transition-all duration-300 hover:scale-110"
        >
          <div className="absolute inset-0 rounded-xl bg-grid-dots opacity-30 dark:opacity-20 group-hover:opacity-40" />
          <div className="absolute inset-0 rounded-xl border border-dashed border-fd-border/60 group-hover:border-cyan-500/30 transition-colors duration-300" />
          <social.icon className="w-5 h-5 fill-current text-fd-muted-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300" />
        </a>
      ))}
    </div>
  )
}

export default function FooterSection() {
  return (
    <>
      <footer id="footer" className="relative w-full max-w-fd-container mx-auto text-fd-muted-foreground">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem]">
            <div className="-z-10 bg-gradient-to-b from-cyan-500/20 via-cyan-400/10 to-transparent rounded-full w-full h-full blur-3xl opacity-30 dark:opacity-20" />
            <div className="absolute inset-0 bg-grid-dots opacity-30 dark:opacity-20" />
          </div>
        </div>

        <div className="relative border-t border-dashed border-fd-border/60 bg-fd-background/50 backdrop-blur-lg">
          <div className="w-full max-w-fd-container mx-auto p-4 sm:p-6">
            {/* Main Footer Content */}
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
              {/* Brand Section - Desktop */}
              <div className="hidden lg:flex flex-col gap-4 lg:col-span-4">
                <div className="flex items-center gap-2 group">
                  <div className="p-1.5 rounded-lg bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 transition-all duration-300 group-hover:from-cyan-500/20 group-hover:to-cyan-400/10">
                    <Image
                      src="/favicon.ico"
                      alt="logo"
                      width={28}
                      height={28}
                      className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                      priority
                    />
                  </div>
                  <span className="font-semibold text-lg text-fd-foreground whitespace-nowrap">
                    DevOps Interview Hub
                  </span>
                </div>
                <p className="text-xs text-fd-muted-foreground/80 leading-relaxed">
                  Your comprehensive resource for DevOps interview preparation, featuring curated questions, detailed answers, and practical insights.
                </p>
                <Socials />
                <div className="text-xs text-fd-muted-foreground/70 flex items-center gap-2">
                  <div className="inline-block -scale-x-100">©</div>
                  <span>Copyright {new Date().getFullYear()} • All rights reserved</span>
                </div>
              </div>

              {/* Learning Hub Section */}
              <div className="flex flex-col gap-3 lg:col-span-4">
                <h3 className="text-base font-semibold text-fd-foreground flex items-center gap-2">
                  Learning Hub
                  <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/20 to-transparent"></div>
                </h3>
                <div className="flex flex-col gap-2">
                  <Link 
                    href="https://t.me/prodevopsguy" 
                    className="group flex items-center gap-2 text-fd-muted-foreground/80 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-1.5 px-2 rounded-lg hover:bg-cyan-500/5 text-sm"
                  >
                    Free DevOps/Cloud Learning Community
                    <div className="w-4 h-0.5 bg-cyan-600/30 dark:bg-cyan-400/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                  <Link 
                    href="https://t.me/devopsclassroom" 
                    className="group flex items-center gap-2 text-fd-muted-foreground/80 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-1.5 px-2 rounded-lg hover:bg-cyan-500/5 text-sm"
                  >
                    The DevOps Classroom
                    <div className="w-4 h-0.5 bg-cyan-600/30 dark:bg-cyan-400/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                </div>
              </div>

              {/* Resources Section */}
              <div className="flex flex-col gap-3 lg:col-span-4">
                <h3 className="text-base font-semibold text-fd-foreground flex items-center gap-2">
                  DevOps Resources
                  <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/20 to-transparent"></div>
                </h3>
                <div className="flex flex-col gap-2">
                  {[
                    { href: "https://repos.prodevopsguytech.com", text: "Important DevOps/Cloud Repos" },
                    { href: "https://docs.prodevopsguytech.com", text: "DevOps/Cloud Resources Portal" },
                    { href: "https://jobs.prodevopsguytech.com", text: "DevOps/Cloud Jobs Portal" }
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-fd-muted-foreground/80 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-1.5 px-2 rounded-lg hover:bg-cyan-500/5 text-sm"
                    >
                      {link.text}
                      <ExternalLink className="h-3.5 w-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Brand Section - Mobile */}
              <div className="lg:hidden flex flex-col gap-4 col-span-2">
                <div className="flex items-center gap-2 group">
                  <div className="p-1.5 rounded-lg bg-gradient-to-br from-cyan-500/10 to-cyan-400/5">
                    <Image
                      src="/favicon.ico"
                      alt="logo"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                      priority
                    />
                  </div>
                  <span className="font-semibold text-base text-fd-foreground whitespace-nowrap">
                    DevOps Interview Hub
                  </span>
                </div>
                <p className="text-xs text-fd-muted-foreground/80 leading-relaxed">
                  Your comprehensive resource for DevOps interview preparation.
                </p>
                <Socials />
                <div className="text-xs text-fd-muted-foreground/70 flex items-center gap-2">
                  <div className="inline-block -scale-x-100">©</div>
                  <span>Copyright {new Date().getFullYear()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
  )
}

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
  )
}

function WebsiteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Website</title>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  )
}