export const mainNav = [
  { label: "Venue & Event Space", href: "/venue-&-event-space" },
  { label: "Floral Designs", href: "/venue" },
  { label: "Catering", href: "/venue" },
  { label: "Love Letters", href: "/venue" },
] as const;

export type TypeMainNav = (typeof mainNav)[number];

export const hashLinks = [
  { label: "Venue & Event Space", href: "/#venue" },
  { label: "Florals Designs", href: "/#florals" },
  { label: "Catering", href: "/#catering" },
  { label: "Love Letters", href: "/#love-letters" },
] as const;

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
