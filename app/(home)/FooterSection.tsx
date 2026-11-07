import { ExternalLink, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const socials = [
  {
    name: 'Website',
    href: 'https://prodevopsguytech.com',
    icon: WebsiteIcon,
  },
  {
    name: 'Github',
    href: 'https://github.com/NotHarshhaa',
    icon: GithubIcon,
  },
  {
    name: 'Telegram',
    href: 'https://t.me/NotHarshhaa',
    icon: TelegramIcon,
  },
];

const exploreLinks = [
  { href: '/docs/getting-started', text: 'Getting Started' },
  { href: '/docs/core-concepts/getting-started', text: 'Core Concepts' },
  { href: '/docs/containers/getting-started', text: 'Containers' },
  { href: '/docs/ci-cd/getting-started', text: 'CI/CD' },
  { href: '/docs/mock-interviews/getting-started', text: 'Mock Interviews' },
];

function Socials() {
  return (
    <div className="flex gap-3">
      {socials.map((social) => (
        <a
          href={social.href}
          key={social.name}
          aria-label={social.name}
          className="group flex h-10 w-10 items-center justify-center rounded-xl border border-dashed border-fd-border/60 bg-fd-background/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-solid hover:border-fd-primary/40 hover:bg-fd-primary/10"
        >
          <social.icon className="h-4.5 w-4.5 fill-current text-fd-muted-foreground transition-colors duration-300 group-hover:text-fd-primary" />
        </a>
      ))}
    </div>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-fd-foreground">
        {title}
        <span className="h-px flex-1 bg-fd-border/60" />
      </h3>
      {children}
    </div>
  );
}

export default function FooterSection() {
  return (
    <footer id="footer" className="relative w-full max-w-fd-container mx-auto text-fd-muted-foreground">
      <div className="border-t border-dashed border-fd-border/60 bg-fd-background/50 backdrop-blur-lg">
        <div className="w-full max-w-fd-container mx-auto p-4 sm:p-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-12 lg:gap-6">
            {/* Brand */}
            <div className="col-span-2 flex flex-col gap-5 lg:col-span-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-dashed border-fd-border/60 bg-fd-background/60 p-1.5">
                  <Image
                    src="/favicon.ico"
                    alt="DevOps Interview Hub logo"
                    width={28}
                    height={28}
                    className="h-7 w-7"
                    priority
                  />
                </div>
                <div>
                  <span className="block font-display text-lg font-semibold text-fd-foreground">
                    DevOps Interview Hub
                  </span>
                  <span className="block font-mono text-xs text-fd-muted-foreground/70">
                    interviews.prodevopsguytech.com
                  </span>
                </div>
              </div>
              <p className="max-w-[42ch] text-sm leading-relaxed">
                Your comprehensive resource for DevOps interview preparation — curated
                questions, detailed answers, and practical insights. Free and open to
                everyone.
              </p>
              <Socials />
            </div>

            {/* Explore */}
            <div className="flex flex-col gap-3 lg:col-span-3">
              <FooterColumn title="Explore">
                <ul className="flex flex-col gap-1">
                  {exploreLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-primary/5 hover:text-fd-primary"
                      >
                        {link.text}
                        <ArrowRightSmall />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>

            {/* Community */}
            <div className="flex flex-col gap-3 lg:col-span-2">
              <FooterColumn title="Community">
                <ul className="flex flex-col gap-1">
                  <li>
                    <a
                      href="https://t.me/prodevopsguy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-primary/5 hover:text-fd-primary"
                    >
                      Learning Community
                      <ArrowRightSmall />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/devopsclassroom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-primary/5 hover:text-fd-primary"
                    >
                      DevOps Classroom
                      <ArrowRightSmall />
                    </a>
                  </li>
                </ul>
              </FooterColumn>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-3 lg:col-span-2">
              <FooterColumn title="Portals">
                <ul className="flex flex-col gap-1">
                  {[
                    { href: 'https://repos.prodevopsguytech.com', text: 'Repos Portal' },
                    { href: 'https://docs.prodevopsguytech.com', text: 'Resources Portal' },
                    { href: 'https://jobs.prodevopsguytech.com', text: 'Jobs Portal' },
                  ].map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-primary/5 hover:text-fd-primary"
                      >
                        {link.text}
                        <ExternalLink className="h-3 w-3 opacity-50 transition-opacity group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-dashed border-fd-border/60 py-4 text-xs text-fd-muted-foreground/70 sm:flex-row">
            <span>
              Copyright {new Date().getFullYear()} · DevOps Interview Hub · All rights
              reserved
            </span>
            <Link
              href="#"
              className="group inline-flex items-center gap-1.5 rounded-lg px-2 py-1 font-mono transition-colors hover:text-fd-primary"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ArrowRightSmall() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 -translate-x-1"
    >
      <path
        d="M1 8h12M9 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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
