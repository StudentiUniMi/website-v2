import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";

/*
  TODO:
  - https://nextui.org/docs/components/navbar#with-dropdown-menu for Home element, per mostrare una lista riassuntiva di ciò che si può raggiungere (ricerca, gruppi ecc.)
*/

export const Navbar = () => {
  const t = useTranslations("Navbar");
  const router = useRouter();

  return (
    <NextUINavbar
      isBordered
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      maxWidth="xl"
      position="sticky"
    >
      {/* Desktop */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Network StudentiUnimi</p>
          </NextLink>
        </NavbarBrand>
        <div className="hidden h-full lg:flex gap-5 justify-start ml-2">
          {siteConfig.navbarItems.map((item) => (
            <NavbarItem key={item.href} isActive={router.route === item.href}>
              <NextLink
                color={router.route === item.href ? "primary" : "foreground"}
                href={item.href}
              >
                {t(`navItems.${item.id}.label`)}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <NextLink href={router.pathname} locale="it">
            IT
          </NextLink>
          <NextLink href={router.pathname} locale="en">
            EN
          </NextLink>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.email}
            variant="flat"
          >
            Contattaci
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navbarItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              isActive={router.route === item.href}
            >
              <Link
                color={router.route === item.href ? "primary" : "foreground"}
                href={item.href}
                size="lg"
              >
                {t(`navItems.${item.id}.label`)}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
