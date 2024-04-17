export const mainNav = [
  { label: "Venue & Event Space", href: "/venue-&-event-space" },
  // { label: "Floral Designs", href: "/floral-designs" },
  { label: "Catering", href: "/catering" },
  { label: "Gallery", href: "/gallery" },
  { label: "Wedding Packages", href: "/venue-&-event-space#wedding-packages" },
  { label: "Event Packages", href: "/venue-&-event-space#packages" },
  // { label" },
] as const;

export type TypeMainNav = (typeof mainNav)[number];

export interface HashLinksType {
  label: string;
  href: string;
}

export const HomeHashLinks = [
  { label: "Venue & Event Space", href: "/#venue" },
  { label: "Florals Designs", href: "/#florals" },
  { label: "Catering", href: "/#catering" },
  { label: "Love Letters", href: "/#love-letters" },
];

export const VenueHashLinks = [
  { label: "Wedding Packages", href: "/venue-&-event-space/#wedding-packages" },
  { label: "Event Packages", href: "/#venue" },
  { label: "Venue Features", href: "/#florals" },
  { label: "Gallery", href: "/#love-letters" },
  { label: "Floor Plan", href: "/#love-letters" },
  { label: "Preferred Vendors", href: "/#catering" },
];

export const FloralHashLinks = [
  { label: "Venue & Event Space", href: "/#venue" },
  { label: "Florals Designs", href: "/#florals" },
  { label: "Catering", href: "/#catering" },
  { label: "Love Letters", href: "/#love-letters" },
];

export const CateringHashLinks = [
  { label: "Hors D'oeuvres Stations", href: "/#appetizers" },
  { label: "Salad Selections", href: "/#salads" },
  { label: "Buffet Main Course Options", href: "/#catering" },
  { label: "Side Dishes", href: "/#love-letters" },
];

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
