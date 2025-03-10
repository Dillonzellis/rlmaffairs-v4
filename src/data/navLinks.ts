export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Venue Gallery", href: "/venue-&-event-space" },
  { label: "Wedding Packages", href: "/wedding-packages" },
  { label: "Event Packages", href: "/event-packages" },
  { label: "Catering", href: "/catering" },
  {
    label: "Book A Tour",
    href: "https://hello.dubsado.com/public/form/view/5afe45144f411345f6129204",
  },

  {
    label: "Take A Virtual Tour",
    href: "/venue-&-event-space#tour",
  },
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
  { label: "Virtual Tour", href: "#tour" },
  { label: "Venue Features", href: "#venue" },
  { label: "Gallery", href: "#gallery" },
];

export const CateringHashLinks = [
  { label: "Hors D'oeuvres Stations", href: "#appetizers" },
  { label: "Salad Selections", href: "#salads" },
  { label: "Buffet Main Course Options", href: "#main-course" },
  { label: "Side Dishes", href: "#side-dishes" },
];

export const footerNav = [
  {
    linksCol: [
      { label: "Venue", href: "/venue-&-event-space" },
      { label: "Florals", href: "https://rlmflorist.com/", target: "_blank" },
      { label: "Catering Menu", href: "/catering" },
    ],
  },
  {
    linksCol: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/rlmaffairs/",
        target: "_blank",
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/rlmaffairs/",
        target: "_blank",
      },
      {
        label: "The Knot",
        href: "https://www.theknot.com/marketplace/rlm-affairs-estate-room-and-gardens-wysteria-room-gainesville-ga-2014225",
        target: "_blank",
      },
    ],
  },
];
