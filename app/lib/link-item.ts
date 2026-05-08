export type LinkTarget = "_blank" | "_self";

export type LinkItem = {
  label: string;
  href?: string;
  icon?: string;
  current?: boolean;
  target?: LinkTarget;
  size?: "xs" | "sm" | "lg" | "xl";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
};

export function resolveLinkHref(link: Pick<LinkItem, "href">) {
  return link.href || "#";
}

export function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}
