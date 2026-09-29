import type { NavLink, FooterColumn } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export const footerColumns: FooterColumn[] = [
  {
    heading: "Explore",
    links: [
      { label: "Featured Courses", href: "#" },
      { label: "Featured Categories", href: "#" },
      { label: "Business", href: "#" },
      { label: "IT & Software", href: "#" },
      { label: "Design", href: "#" },
    ],
  },
  {
    heading: "Categories",
    links: [
      { label: "Development", href: "#" },
      { label: "Marketing", href: "#" },
      { label: "Photography", href: "#" },
      { label: "Finance", href: "#" },
      { label: "Sport", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Become a Creator", href: "#" },
      { label: "Affiliate Program", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Help", href: "#" },
      { label: "About", href: "#" },
    ],
  },
];
