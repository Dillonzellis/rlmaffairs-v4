export const mainNav = [
  { label: "Venue & Event Space", href: "/venue" },
  { label: "Floral Designs", href: "/venue" },
  { label: "Catering", href: "/venue" },
  { label: "Love Letters", href: "/venue" },
] as const;

export type TypeMainNav = (typeof mainNav)[number];
