export const mainNav = [
  { label: "Venue & Event Space", href: "/venue" },
  { label: "Floral Designs", href: "/venue" },
  { label: "Catering", href: "/venue" },
  { label: "Love Letters", href: "/venue" },
] as const;

export type TypeMainNav = (typeof mainNav)[number];

export const footerNav = [
  {
    linksCol: [
      { label: "Venue", href: "/venue" },
      { label: "Florals", href: "/florals" },
      { label: "Love Letters", href: "/event-planning" },
      { label: "Our Story", href: "/our-story" },
    ],
  },
  {
    linksCol: [
      { label: "Catering Menu", href: "/venue" },
      { label: "Floor Plan", href: "/florals" },
      { label: "FAQ", href: "/event-planning" },
    ],
  },
  {
    linksCol: [
      { label: "Instagram", href: "/venue" },
      { label: "Facebook", href: "/event-planning" },
      { label: "The Knot", href: "/our-story" },
    ],
  },
];
