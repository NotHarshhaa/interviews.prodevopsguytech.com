'use client';
import { BaseLinkItem, type LinkItemType } from '../links';
import { cn } from '../../lib/cn';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import Link from 'fumadocs-core/link';
import { cva } from 'class-variance-authority';
import { buttonVariants } from '../ui/button';
import type { ComponentPropsWithoutRef } from 'react';

const menuItemVariants = cva('', {
  variants: {
    variant: {
      main: 'inline-flex items-center gap-2 py-1.5 transition-all duration-200 hover:text-fd-popover-foreground/50 hover:bg-fd-accent/30 rounded-md px-2 data-[active=true]:font-medium data-[active=true]:text-fd-primary data-[active=true]:bg-cyan-500/10 [&_svg]:size-4',
      icon: buttonVariants({
        size: 'icon',
        variant: 'ghost',
        className: 'hover:bg-cyan-500/10 transition-all duration-200',
      }),
      button: buttonVariants({
        variant: 'secondary',
        className: 'gap-1.5 [&_svg]:size-4 bg-gradient-to-r from-cyan-500/10 to-cyan-400/5 hover:from-cyan-500/20 hover:to-cyan-400/10 border border-dashed border-cyan-500/20 transition-all duration-200',
      }),
    },
  },
  defaultVariants: {
    variant: 'main',
  },
});

export function MenuLinkItem({
  item,
  ...props
}: {
  item: LinkItemType;
  className?: string;
}) {
  if (item.type === 'custom')
    return <div className={cn('grid', props.className)}>{item.children}</div>;

  if (item.type === 'menu') {
    const header = (
      <>
        {item.icon}
        {item.text}
      </>
    );

    return (
      <div className={cn('mb-4 flex flex-col', props.className)}>
        <p className="mb-1 text-sm text-fd-muted-foreground font-medium">
          {item.url ? (
            <NavigationMenuLink asChild>
              <Link href={item.url} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200">{header}</Link>
            </NavigationMenuLink>
          ) : (
            header
          )}
        </p>
        {item.items.map((child, i) => (
          <MenuLinkItem key={i} item={child} />
        ))}
      </div>
    );
  }

  return (
    <NavigationMenuLink asChild>
      <BaseLinkItem
        item={item}
        className={cn(
          menuItemVariants({ variant: item.type }),
          props.className,
        )}
        aria-label={item.type === 'icon' ? item.label : undefined}
      >
        {item.icon}
        {item.type === 'icon' ? undefined : item.text}
      </BaseLinkItem>
    </NavigationMenuLink>
  );
}

export const Menu = NavigationMenuItem;

export function MenuTrigger({
  enableHover = false,
  ...props
}: ComponentPropsWithoutRef<typeof NavigationMenuTrigger> & {
  /**
   * Enable hover to trigger
   */
  enableHover?: boolean;
}) {
  return (
    <NavigationMenuTrigger
      {...props}
      onPointerMove={enableHover ? undefined : (e) => e.preventDefault()}
      className={cn(
        buttonVariants({
          size: 'icon',
          variant: 'ghost',
          className: 'hover:bg-cyan-500/10 transition-all duration-200',
        }),
        props.className,
      )}
    >
      {props.children}
    </NavigationMenuTrigger>
  );
}

export function MenuContent(
  props: ComponentPropsWithoutRef<typeof NavigationMenuContent>,
) {
  return (
    <NavigationMenuContent
      {...props}
      className={cn('flex flex-col p-4 bg-fd-background/95 backdrop-blur-xl border border-dashed border-fd-border/60 rounded-xl shadow-xl', props.className)}
    >
      {props.children}
    </NavigationMenuContent>
  );
}
