export interface NavLink {
  label: string;
  href: string;
}

export interface NavCTA {
  label: string;
  href: string;
  variant: "ghost" | "primary";
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}
