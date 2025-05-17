import type { ReactNode } from 'react';
import { HomeLayout } from '@/components/home';
import { Book, Cpu, Layout as LayoutIcon, LayoutTemplate, Server } from 'lucide-react';

import Image from 'next/image';

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout
    themeSwitch={{
      mode: 'light-dark-system',
    }}
    githubUrl='https://github.com/NotHarshhaa'
    nav={{
      transparentMode: 'always',
      title: (
        <div className="flex items-center gap-2">
          <Image 
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
      ),
    }}
    
    links={[
      // NOTE: docs link is separate to only show in home layout and not in docs layout, linkItems are passed to docs/layout.tsx
      {
        // NOTE: for /layouts/notebook option https://fumadocs.vercel.app/docs/ui/layouts/docs#nav-mode
        // on: 'nav',
        type: 'menu',
        text: 'Docs',
        url: '/docs',
        // active: 'nested-url',
        // NOTE: homepage hover items
        items: [
          {
            menu: {
              banner: (
                <div className="-mx-3 -mt-3">
                  <Image
                    src="/og.png"
                    alt="Banner image"
                    width={1200}
                    height={256}
                    className="w-full h-64 object-cover rounded-t-xl"
                  />
                </div>
              ),
              className: 'md:row-span-2',
            },
            text: 'Overview',
            description: 'Welcome to DevOps Interview Hub',
            url: '/docs/',
          },
          {
            icon: <Book />,
            text: 'Get Started',
            description: 'Get Started with DevOps Interview Hub',
            url: '/docs/get-started',
          },
          {
            icon: <Book />,
            text: 'Automation & Scripting',
            description: 'Automation & Scripting',
            url: '/docs/automation-scripting/get-started',
          },
          {
            icon: <Cpu />,
            text: 'Best Practices',
            description: 'Best Practices',
            url: '/docs/best-practices/get-started',
          },
          {
            icon: <Server />,
            text: 'Cloud',
            description: 'Cloud',
            url: '/docs/cloud/get-started',
          },
          {
            icon: <LayoutIcon />,
            text: 'CI/CD',
            description: 'CI/CD',
            url: '/docs/ci-cd/get-started',
          },
          {
            icon: <LayoutIcon />,
            text: 'Containers',
            description: 'Containers',
            url: '/docs/containers/get-started',
          },
          {
            icon: <LayoutIcon />,
            text: 'Core Concepts',
            description: 'Core Concepts',
            url: '/docs/core-concepts/get-started',
          },
          {
            icon: <LayoutIcon />,
            text: 'Infrastructure as Code',
            description: 'Infrastructure as Code',
            url: '/docs/infrastructure-as-code/get-started',
          },
          {
            icon: <LayoutIcon />,
            text: 'Mock Interviews',
            description: 'Mock Interviews',
            url: '/docs/mock-interviews/get-started',
          },
          {
            icon: <LayoutIcon />,
            text: 'Networking & Security',
            description: 'Networking & Security',
            url: '/docs/networking-security/get-started',
          }
        ],
      },
      // {
      //   icon: <BookText />,
      //   text: 'Blog',
      //   url: '/blog',
      //   active: 'nested-url',
      // },
      // {
      //   text: 'Community',
      //   // TODO: GH Discussions / Discord Link?
      //   url: '/community',
      //   icon: <UsersRound />,
      //   external: true,
      // },
      {
        text: 'Projects',
        url: 'https://projects.prodevopsguytech.com',
        icon: <LayoutTemplate />,
        active: 'url',
      },
      // {
      //   text: 'Sponsors',
      //   url: '/sponsors',
      //   icon: <Heart />,
      // },
    ]}
  >
    { children }
  </HomeLayout >;
}
