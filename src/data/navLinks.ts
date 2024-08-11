export const mainNav = [
  { label: "Venue Gallery", href: "/venue-&-event-space" },
  { label: "Wedding Packages", href: "/wedding-packages" },
  { label: "Event Packages", href: "/event-packages" },
  { label: "Catering", href: "/catering" },
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
  { label: "Venue Features", href: "/#florals" },
  { label: "Gallery", href: "/#love-letters" },
];

// export const FloralHashLinks = [
//   { label: "Venue & Event Space", href: "/#venue" },
//   { label: "Florals Designs", href: "/#florals" },
//   { label: "Catering", href: "/#catering" },
//   { label: "Love Letters", href: "/#love-letters" },
// ];

export const CateringHashLinks = [
  { label: "Hors D'oeuvres Stations", href: "#appetizers" },
  { label: "Salad Selections", href: "#salads" },
  { label: "Buffet Main Course Options", href: "#main-course" },
  { label: "Side Dishes", href: "#side-dishes" },
];

export const footerNav = [
  {
    linksCol: [
      { label: "Venue", href: "/venue" },
      { label: "Florals", href: "/florals" },
      { label: "Catering Menu", href: "/venue" },
      // { label: "Love Letters", href: "/event-planning" },
      // { label: "Our Story", href: "/our-story" },
    ],
  },
  {
    linksCol: [
      // { label: "Catering Menu", href: "/venue" },
      // { label: "Floor Plan", href: "/florals" },
      // { label: "FAQ", href: "/event-planning" },
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
