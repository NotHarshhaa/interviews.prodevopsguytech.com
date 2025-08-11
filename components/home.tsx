import { Fragment, type HTMLAttributes } from 'react';
import { type NavOptions, replaceOrDefault } from './shared';
import { cn } from '../lib/cn';
import { getLinks, type BaseLayoutProps } from './shared';
import { NavProvider } from 'fumadocs-ui/provider';
import {
  Navbar,
  NavbarLink,
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from './home/navbar';
import { type LinkItemType } from './links';
import {
  SearchToggle,
} from './layout/search-toggle';
import { ThemeToggle } from './layout/theme-toggle';
import {
  LanguageToggle,
  LanguageToggleText,
} from './layout/language-toggle';
import { ChevronDown, Languages } from 'lucide-react';
import Link from 'fumadocs-core/link';
import {
  Menu,
  MenuContent,
  MenuLinkItem,
  MenuTrigger,
} from './home/menu';

export interface HomeLayoutProps
  extends BaseLayoutProps,
    HTMLAttributes<HTMLElement> {
  nav?: Partial<
    NavOptions & {
      /**
       * Open mobile menu when hovering the trigger
       */
      enableHoverToOpen?: boolean;
    }
  >,
  afterTitle?: React.ReactNode;
}

export function HomeLayout(props: HomeLayoutProps) {
  const {
    nav,
    links,
    githubUrl,
    themeSwitch,
    ...rest
  } = props;

  const finalLinks = getLinks(links, githubUrl);

  return (
    <NavProvider transparentMode={nav?.transparentMode}>
      <main
        id="nd-home-layout"
        {...rest}
        className={cn('flex flex-1 flex-col', rest.className)}
      >
        {replaceOrDefault(nav, <Header finalLinks={finalLinks} themeSwitch={themeSwitch} {...props} />, {
          items: finalLinks,
        })}
        {props.children}
      </main>
    </NavProvider>
  );
}

function Header({
  nav: { enableSearch = true, ...nav } = {},
  afterTitle,
  i18n = false,
  finalLinks,
  themeSwitch,
}: HomeLayoutProps & {
  finalLinks: LinkItemType[];
}) {
  const navItems = finalLinks.filter((item) =>
    ['nav', 'all'].includes(item.on ?? 'all'),
  );
  const menuItems = finalLinks.filter((item) =>
    ['menu', 'all'].includes(item.on ?? 'all'),
  );

  return (
    <Navbar>
      <Link
        href={nav.url ?? '/'}
        className="inline-flex items-center gap-2.5 font-semibold group hover:scale-105 transition-transform duration-200"
      >
        {nav.title}
      </Link>
      {afterTitle}
      {nav.children}
      <ul className="flex flex-row items-center justify-center flex-1 gap-2 pr-12 max-sm:hidden">
        {navItems
          .filter((item) => !isSecondary(item))
          .map((item, i) => (
            <NavbarLinkItem key={i} item={item} className="text-sm" />
          ))}
      </ul>
      <div className="flex flex-row items-center justify-end gap-1.5 max-lg:flex-1">
        {enableSearch ? (
          <>
            <SearchToggle className="hover:bg-cyan-500/10 transition-all duration-200" hideIfDisabled />
            {/* <SearchToggle className="lg:hidden" hideIfDisabled /> */}
            {/* <LargeSearchToggle
              className="w-full max-w-[240px] max-lg:hidden"
              hideIfDisabled
            /> */}
          </>
        ) : null}
        {i18n ? (
          <LanguageToggle className="max-lg:hidden hover:bg-cyan-500/10 transition-all duration-200">
            <Languages className="size-5" />
          </LanguageToggle>
        ) : null}
      </div>
      <ul className="flex flex-row items-center">
        {replaceOrDefault(
          themeSwitch,
          <ThemeToggle className="max-lg:hidden mx-2 hover:bg-cyan-500/10 transition-all duration-200" mode={themeSwitch?.mode} />,
        )}
        {navItems.filter(isSecondary).map((item, i) => (
          <NavbarLinkItem
            key={i}
            item={item}
            className="border border-dashed border-cyan-500/20 rounded-full -mr-2 max-lg:hidden bg-gradient-to-r from-cyan-500/10 to-cyan-400/5 hover:from-cyan-500/20 hover:to-cyan-400/10 transition-all duration-200"
          />
        ))}
        <Menu className="lg:hidden">
          <MenuTrigger
            aria-label="Toggle Menu"
            className="group -me-2"
            enableHover={nav.enableHoverToOpen}
          >
            <ChevronDown className="size-3 transition-transform duration-300 group-data-[state=open]:rotate-180" />
          </MenuTrigger>
          <MenuContent className="sm:flex-row sm:items-center sm:justify-end">
            {menuItems
              .filter((item) => !isSecondary(item))
              .map((item, i) => (
                <MenuLinkItem key={i} item={item} className="sm:hidden" />
              ))}
            <div className="-ms-1.5 flex flex-row items-center gap-1.5 max-sm:mt-2">
              {menuItems.filter(isSecondary).map((item, i) => (
                <MenuLinkItem key={i} item={item} className="-me-1.5" />
              ))}
              <div role="separator" className="flex-1" />
              {i18n ? (
                <LanguageToggle>
                  <Languages className="size-5" />
                  <LanguageToggleText />
                  <ChevronDown className="size-3 text-fd-muted-foreground" />
                </LanguageToggle>
              ) : null}
              {replaceOrDefault(
                themeSwitch,
                <ThemeToggle mode={themeSwitch?.mode} />,
              )}
            </div>
          </MenuContent>
        </Menu>
      </ul>
    </Navbar>
  );
}

function NavbarLinkItem({
  item,
  ...props
}: {
  item: LinkItemType;
  className?: string;
}) {
  if (item.type === 'custom') return item.children;

  if (item.type === 'menu') {
    const children = item.items.map((child, j) => {
      if (child.type === 'custom')
        return <Fragment key={j}>{child.children}</Fragment>;

      const { banner, footer, ...rest } = child.menu ?? {};

      return (
        <NavbarMenuLink key={j} href={child.url} {...rest}>
          {banner ??
            (child.icon ? (
              <div className="w-fit rounded-md border border-dashed border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 p-1 [&_svg]:size-4">
                {child.icon}
              </div>
            ) : null)}
          <p className="-mb-1 text-sm font-medium">{child.text}</p>
          {child.description ? (
            <p className="text-[13px] text-fd-muted-foreground">
              {child.description}
            </p>
          ) : null}
          {footer}
        </NavbarMenuLink>
      );
    });

    return (
      <NavbarMenu>
        <NavbarMenuTrigger {...props}>
          {item.url ? <Link href={item.url}>{item.text}</Link> : item.text}
        </NavbarMenuTrigger>
        <NavbarMenuContent>{children}</NavbarMenuContent>
      </NavbarMenu>
    );
  }

  return (
    <NavbarLink
      {...props}
      item={item}
      variant={item.type}
      aria-label={item.type === 'icon' ? item.label : undefined}
    >
      {item.type === 'icon' ? item.icon : item.text}
    </NavbarLink>
  );
}

function isSecondary(item: LinkItemType): boolean {
  return (
    ('secondary' in item && item.secondary === true) || item.type === 'icon'
  );
}
