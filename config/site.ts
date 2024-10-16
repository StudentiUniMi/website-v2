export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  author: "Network StudentiUniMi",
  navbarItems: [
    {
      id: "home",
      href: "/",
    },
    {
      id: "services",
      href: "/services",
    },
    {
      id: "rules",
      href: "/rules",
    },
    {
      id: "organization",
      href: "/organization",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    email: "mailto:info@studentiunimi.it",
  },
};
