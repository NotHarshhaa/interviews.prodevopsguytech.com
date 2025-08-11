'use client';
import { type ComponentProps, type HTMLAttributes, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import Link, { type LinkProps } from 'fumadocs-core/link';
import { cn } from '../../lib/cn';
import { BaseLinkItem } from '../links';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '../ui/navigation-menu';
import { useNav } from 'fumadocs-ui/provider';
import type {
  NavigationMenuContentProps,
  NavigationMenuTriggerProps,
} from '@radix-ui/react-navigation-menu';
import { buttonVariants } from '../ui/button';

const navItemVariants = cva(
  'inline-flex items-center gap-1 p-2 text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground data-[active=true]:text-fd-primary [&_svg]:size-4',
);

export function Navbar(props: HTMLAttributes<HTMLElement>) {
  const [value, setValue] = useState('');
  const { isTransparent } = useNav();

  return (
    <NavigationMenu value={value} onValueChange={setValue} asChild>
      <header
        id="nd-nav"
        {...props}
        className={cn(
          'fixed left-1/2 top-(--fd-banner-height) z-40 backdrop-blur-lg bg-fd-background/60 box-content w-full max-w-fd-container -translate-x-1/2 border-b border-dashed border-fd-border/60 transition-all duration-300 lg:w-[calc(100%-1rem)] lg:border-x lg:border-dashed',
          value.length > 0 ? 'bg-fd-background/90 backdrop-blur-xl' : '',
          (!isTransparent || value.length > 0) &&
            'bg-fd-background/80 backdrop-blur-xl shadow-lg',
          props.className,
        )}
      >
        {/* Enhanced background with gradient */}
        <div className="absolute inset-0 -z-10 w-full h-full bg-gradient-to-b from-fd-background/80 via-fd-background/60 to-fd-background/40 backdrop-blur-lg" />
        
        {/* Corner decorations with improved styling */}
        <svg className="absolute -left-[6.5px] -top-[5.5px] z-[1] text-cyan-500/30 dark:text-cyan-400/30" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke">
          <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.5"></path>
        </svg>
        <svg className="absolute -left-[6.5px] -bottom-[5.5px] z-[1] text-cyan-500/30 dark:text-cyan-400/30" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke">
          <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.5"></path>
        </svg>
        <svg className="absolute -right-[6.5px] -top-[5.5px] z-[1] text-cyan-500/30 dark:text-cyan-400/30" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke">
          <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.5"></path>
        </svg>
        <svg className="absolute -right-[6.5px] -bottom-[5.5px] z-[1] text-cyan-500/30 dark:text-cyan-400/30" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke">
          <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.5"></path>
        </svg>
        
        <NavigationMenuList
          className="flex h-14 w-full flex-row items-center px-4 lg:h-12"
          asChild
        >
          <nav>{props.children}</nav>
        </NavigationMenuList>
        <NavigationMenuViewport />
      </header>
    </NavigationMenu>
  );
}

export const NavbarMenu = NavigationMenuItem;

export function NavbarMenuContent(props: NavigationMenuContentProps) {
  return (
    <NavigationMenuContent
      {...props}
      className={cn(
        'grid grid-cols-1 gap-3 px-4 pb-4 md:grid-cols-2 lg:grid-cols-3 bg-fd-background/95 backdrop-blur-xl border border-dashed border-fd-border/60 rounded-xl shadow-xl',
        props.className,
      )}
    >
      {props.children}
    </NavigationMenuContent>
  );
}

export function NavbarMenuTrigger(props: NavigationMenuTriggerProps) {
  return (
    <NavigationMenuTrigger
      {...props}
      className={cn(navItemVariants(), 'rounded-md hover:bg-fd-accent/50 transition-all duration-200', props.className)}
    >
      {props.children}
    </NavigationMenuTrigger>
  );
}

export function NavbarMenuLink(props: LinkProps) {
  return (
    <NavigationMenuLink asChild>
      <Link
        {...props}
        className={cn(
          'flex flex-col gap-2 rounded-lg border border-dashed border-fd-border/60 bg-fd-card/50 backdrop-blur-sm p-3 transition-all duration-200 hover:bg-fd-accent/80 hover:text-fd-accent-foreground hover:scale-[1.02] hover:shadow-lg',
          props.className,
        )}
      >
        {props.children}
      </Link>
    </NavigationMenuLink>
  );
}

const linkVariants = cva('', {
  variants: {
    variant: {
      main: cn(navItemVariants(), 'hover:bg-fd-accent/50 rounded-md transition-all duration-200'),
      button: buttonVariants({
        variant: 'secondary',
        className: 'gap-1.5 [&_svg]:size-4 bg-gradient-to-r from-cyan-500/10 to-cyan-400/5 hover:from-cyan-500/20 hover:to-cyan-400/10 border border-dashed border-cyan-500/20 transition-all duration-200',
      }),
      icon: buttonVariants({
        variant: 'ghost',
        size: 'icon',
        className: 'hover:bg-cyan-500/10 transition-all duration-200',
      }),
    },
  },
  defaultVariants: {
    variant: 'main',
  },
});

export function NavbarLink({
  item,
  variant,
  ...props
}: ComponentProps<typeof BaseLinkItem> & VariantProps<typeof linkVariants>) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <BaseLinkItem
          {...props}
          item={item}
          className={cn(linkVariants({ variant }), props.className)}
        >
          {props.children}
        </BaseLinkItem>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
