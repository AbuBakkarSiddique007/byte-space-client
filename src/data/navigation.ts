import type {
  NavLink,
  FooterBottom,
  FooterColumn,
  FooterNewsletter,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
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

export const footerNewsletter: FooterNewsletter = {
  prompt:
    "Stay Up to date with our latest features and releases by joining our newsletter.",
  placeholder: "Enter your email",
  buttonLabel: "Subscribe",
  disclaimer:
    "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.",
};

export const footerBottom: FooterBottom = {
  copyright: "© 2023 ByteSpace. All rights reserved.",
  links: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookies Settings", href: "#" },
  ],
};
