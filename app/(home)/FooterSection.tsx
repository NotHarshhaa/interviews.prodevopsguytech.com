import { Wordmark } from "../assets";
import Link from "next/link";
import SectionLink from "./SectionLink";
import { ExternalLink } from "lucide-react";

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
    <div className="flex gap-3">
      {socials.map((social) => (
        <a href={social.href} key={social.name} className="h-8 w-8 relative group grid place-items-center hover:text-fd-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="absolute -top-0.25 -right-0.25 z-10 duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"><path d="M21 8V5a2 2 0 0 0-2-2h-3" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute -bottom-0.25 -left-0.25 duration-300 group-hover:translate-y-0.5 group-hover:-translate-x-0.5 z-10 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"><path d="M3 16v3a2 2 0 0 0 2 2h3" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute -bottom-0.25 -right-0.25 z-10 duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"><path d="M16 21h3a2 2 0 0 0 2-2v-3" /></svg>
          {/* duration-300 group-hover:-translate-8 group-hover:scale-200 */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute -top-0.25 -left-0.25 z-10 duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"><path d="M8 3H5a2 2 0 0 0-2 2v3" /></svg>
          {/* duration-300 group-hover:translate-8 group-hover:scale-200 */}
          <div className="bg-grid-lines absolute inset-0 ease-out duration-300 group-hover:opacity-50 opacity-0 ![background-position:-15px_-15px]" />
          <social.icon className="w-4 h-4 fill-current transform-3d perspective-distant backface-hidden group-hover:rotate-x-180 group-hover:rotate-z-180 group-hover:-rotate-y-180 duration-1000" />
        </a>
      ))}
    </div>
  )
}

export default function FooterSection() {
  return (
    <>
      <footer id="footer" className="relative w-full max-w-fd-container mx-auto text-fd-muted-foreground">
        <div className="-z-10 h-24 w-[33rem] bg-cyan-500/50 rounded-[100%] max-w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl"/>
        <SectionLink className="-mb-[calc(1.25rem+1px)] z-30" href="#footer" name="border-t p-12 grid grid-cols-2 sm:flex justify-around" border />
        <div className="border-t bg-fd-background/50 backdrop-blur-lg w-full max-w-fd-container mx-auto p-12 grid grid-cols-2 sm:flex justify-between">
          
          <div className="flex-col gap-3 hidden sm:flex my-auto">
            <div className="flex items-center gap-2">
              <img
                src="/favicon.ico"
                alt="logo"
                width={32} 
                height={32}
                className="h-8 w-8"
              />
              <span className="font-medium text-xl">
                DevOps Interview Hub
              </span>
            </div>
            <Socials />
            <div className="text-xs">
              <div className="inline-block -scale-x-100 mr-1">©</div>
              Copyright {new Date().getFullYear()}
            </div>
          </div>

          <div className="flex flex-col gap-3 text-xs lg:text-sm">
            <b className="text-fd-foreground font-semibold">Learning Hub</b>
            <Link className="hover:decoration-fd-primary hover:underline-offset-2 hover:text-fd-foreground decoration-transparent underline duration-300" href="https://t.me/prodevopsguy"> Free DevOps/Cloud Learning Community</Link>
            <Link className="hover:decoration-fd-primary hover:underline-offset-2 hover:text-fd-foreground decoration-transparent underline duration-300" href="https://t.me/devopsclassroom">The DevOps Classroom</Link>
            {/* <a>Blog</a> */}
            {/* <a>Playground</a> */}
          </div>

          <div className="flex flex-col gap-3 text-xs lg:text-sm">
            <b className="text-fd-foreground font-semibold">DevOps Resources</b>
            <a href="https://repos.prodevopsguytech.com" target="_blank" rel="noopener noreferrer" className="group flex gap-1 hover:decoration-fd-primary hover:underline-offset-2 hover:text-fd-foreground decoration-transparent underline duration-300">Important DevOps/Cloud Repos <ExternalLink className="h-4 w-4 group-hover:opacity-100 group-hover:translate-0 -translate-x-2 translate-y-2 scale-50 group-hover:scale-100 opacity-0 duration-300"/></a>
            <a href="https://docs.prodevopsguytech.com" target="_blank" rel="noopener noreferrer" className="group flex gap-1 hover:decoration-fd-primary hover:underline-offset-2 hover:text-fd-foreground decoration-transparent underline duration-300">DevOps/Cloud Resources Portal <ExternalLink className="h-4 w-4 group-hover:opacity-100 group-hover:translate-0 -translate-x-2 translate-y-2 scale-50 group-hover:scale-100 opacity-0 duration-300"/></a>
            <a href="https://jobs.prodevopsguytech.com" target="_blank" rel="noopener noreferrer" className="group flex gap-1 hover:decoration-fd-primary hover:underline-offset-2 hover:text-fd-foreground decoration-transparent underline duration-300">DevOps/Cloud Jobs Portal <ExternalLink className="h-4 w-4 group-hover:opacity-100 group-hover:translate-0 -translate-x-2 translate-y-2 scale-50 group-hover:scale-100 opacity-0 duration-300"/></a>
          </div>
          
          <div className="flex-col items-start gap-3 flex sm:hidden">
            <Socials />
            <Wordmark className="text-fd-foreground h-7" />
            <div className="text-xs">
              <div className="inline-block -scale-x-100 mr-1">©</div>
              Copyright {new Date().getFullYear()}
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