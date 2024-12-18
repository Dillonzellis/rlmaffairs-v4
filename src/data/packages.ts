export type TypeSmallPackages = {
  title: string;
  mainPrice?: string;
  feats: string[];
};

export const weddingPackages = [
  {
    title: "Sapphire Package",
    mainPrice: "$4,100",
    feats: [
      "40 Guests",
      "6-hour Venue Rental Included",
      "Reception Décor: Silk Greens & Organza",
      "Ceremony Décor: organza draping",
      "Bride bouquet, 3 Bridesmaids bouquets, Flower girl petals, Groom & 3 groomsmen boutonnières",
      "Catering: 1 entrée buffet with 2 side dishes, bread or 3 Hors d’Oeuvres",
      "Tea and Water",
      "Disposable Flatware, Cups, and Paper Napkins",
      "2 tier Cake with Cake stand, Staff will cut & serve cake Vanilla or Chocolate, Rough, Smooth or Naked iced",
      "Staff for event 4 hours",
      "Rehearsal Day of Event",
    ],
    reducedPrice: "$3,900",
  },
  {
    title: "Emerald Package",
    mainPrice: "$5,100",
    feats: [
      "50 Guests",
      "7-hour Venue Rental Included",
      "Reception Décor: Silk Greens & Organza entry table decor",
      "Ceremony Décor: Organza draping with optional greens",
      "Bride bouquet, 3 Bridesmaids bouquets, Flower girl petals, Groom & 3 groomsmen boutonnières ",
      "Catering: Cocktail hour with 1 hors d’oeuvres, 1 entrée buffet, salad, dinner rolls, 2 side dishes",
      "Beverages Displayed in Decanters: Tea and Water",
      "Silver flatware glasses charger and plates with signature paper napkins",
      "2 tier cake with Cake stand Staff will cut & serve cake Vanilla or Chocolate, Rough, Smooth or Naked iced",
      "Staff for event 4 hours",
      "Day of Coordinator: Wedding Ceremony Coordination/ Dinner service/ Cake Cutting",
      "Rehearsal Day of Event",
    ],
    reducedPrice: "$4,800",
  },
  {
    title: "Ruby Package",
    mainPrice: "$6,700",
    feats: [
      "60 Guests",
      "8-hour Venue Rental Included",
      "Ceremony Décor: Organza draping with Florals",
      "Reception Décor: Lanterns, Greens, Organza, and entry table, mantle florals",
      "Bride bouquet, 3 Bridesmaids bouquets, Flower girl petals, Groom & 3 groomsmen boutonnières ",
      "Catering: Cocktail hour with 2 hors d’oeuvres, 2 entrée buffet, salad, dinner rolls, 2 side dishes",
      "Beverages Displayed in Decanters: Tea and Water",
      "Silver flatware, Goblets, Charger, Dinner Plates, and Signature Paper Napkins",
      "2 tier cake with Cake stand, staff will cut & serve cake Vanilla or Chocolate, Rough, Smooth, or Naked iced",
      "Photo Booth Wall",
      "Staff for event 5 hours",
      "Day of Coordinator: Wedding Ceremony Coordination/Dinner service/Toasts/Cake Cutting",
      "Rehearsal Day of Event",
      "Clean up",
    ],
    reducedPrice: "$6,300",
  },
  {
    title: "Diamond Package",
    mainPrice: "$8,700",
    feats: [
      "70 Guests",
      "9-hour Venue Rental Included",
      "Ceremony Décor: Organza draping with Florals & with aisle pew decor",
      "Reception Décor: Floral Centerpieces flowers for food display & reception",
      "Bride bouquet, 4 Bridesmaids bouquets, Flower girl petals, Groom & 4 groomsmen boutonnières",
      "3 Corsages (Moms Grandmothers Etc.) 3 Boutioneres (Fathers Grandfathers Etc)",
      "Catering: Cocktail hour with 2 hors d’oeuvres, 2 entrée buffet, signature salad, dinner rolls, 2 side dishes",
      "Beverages Displayed in Elegant Decanters: Tea and Water",
      "Silver or Gold flatware, Goblets and Dinner Plates with Signature Paper Napkin.",
      "3-tier cake with Cake stand, staff will cut & serve cake Vanilla or Chocolate, Rough, Smooth or Naked iced",
      "Staff for event 6 hours",
      "Full wedding Coordination service",
      "Photo Booth Wall",
      "Day of Coordinator: Wedding Ceremony Coordination/Dances/Dinner Service/Toasts/Cake Cutting/Send off",
      "Rehearsal with Coordinator",
      "Full set-up & Clean-up",
    ],
    reducedPrice: "$8,400",
  },
  {
    title: "Platinum Package",
    mainPrice: "$11,500",
    feats: [
      "90 Guests",
      "10-hour Venue Rental Included",
      "Ceremony Décor: Organza draping with Florals & also Aisle pew décor",
      "Reception Décor: Floral Centerpieces flowers for food display & reception",
      "Bride bouquet, 5 Bridesmaids bouquets, Flower girl petals, Groom & 5 groomsmen boutonnières",
      "3 Corsages (Moms, Grandmothers, etc.) 3 Boutonnieres (Fathers, Grandfathers, etc.)",
      "Catering: Cocktail hour with 3 hors d’oeuvres, 2 entrée buffet, signature salad, dinner rolls, 2 side dishes",
      "Beverages Displayed in Elegant Decanters: Tea and Water",
      "Silver or Gold flatware, Goblets and Dinner Plates, with Signature Paper Napkin or linen Napkin",
      "3-tier cake with Cake stand, staff will cut & serve cake Vanilla or Chocolate, Rough, Smooth or Naked iced",
      "Staff for event 8 hours",
      "Full wedding Coordination service throughout planning",
      "Photo Booth Wall",
      "Day of Coordinator: Wedding Ceremony Coordination/Dances/Dinner Service/Toasts/Cake Cutting/Send off",
      "Rehearsal with Coordinator",
      "Full set-up & Clean-up",
    ],
    reducedPrice: "$11,000",
  },
];

export type TypeWeddingPackages = (typeof weddingPackages)[number];

export const smallWeddingPackages = [
  {
    title: "Micro Wedding",
    mainPrice: "$3,600",
    feats: [
      "25 Guests",
      "4-hour Venue Rental included",
      "Ceremony Décor: organza draping",
      "Bride bouquet & Groom boutonnière",
      "Catering: 1 entrée buffet with 2 side dishes, bread or 3 Hors d’Oeuvres",
      "Tea and Water ",
      "Disposable Flatware, Cups, and Paper Napkins",
      "2 tier Cake with stand, Staff will cut & serve cake Vanilla or Chocolate, Rough, Smooth or Naked iced",
      "Staff for event 2 hours",
    ],
  },
  {
    title: "Wedding Reception Only",
    mainPrice: "$3,800",
    feats: [
      "40 Guests",
      "4-hour Venue Rental included",
      "Reception tables & chairs",
      "Catering: 1 Entrée, 2 sides, dinner rolls, & salad",
      "Beverages Displayed in Decanters: Tea and Water",
      "Disposable Flatware, Cups, and Paper Napkins",
      "2-tier cake with Cake stand Vanilla or Chocolate, Rough, Smooth, or Naked iced",
      "Staff for event 4 hours",
    ],
    reducedPrice: "$3,200",
  },
];

export type TypeSmallWeddingPackages = (typeof smallWeddingPackages)[number];

export const eventPackages = [
  {
    title: "Premier Event",
    mainPrice: "$3,800",
    feats: [
      "40 Guests:",
      "4-hour Venue Rental included",
      "Event Décor: greens and lanterns",
      "Set Up & display of your personal items",
      "Catering: 1 entrée buffet with 2 side dishes, bread or 3 Hors d’Oeuvres",
      "Beverages Displayed in Decanters: Tea and water beverages",
      "Disposable Flatware, Cups, and Paper Napkins",
      "2 tier Cake for dessert with stand, Staff will cut & serve cake Vanilla or Chocolate, Rough, Smooth, or Naked iced",
      "Staff for event 4 hours",
    ],
    reducedPrice: "$3,700",
  },
  {
    title: "Elegant Event",
    mainPrice: "$6,300",
    feats: [
      "65 Guests:",
      "6-hour Venue Rental Included",
      "Set Up & display of your personal items",
      "Event Décor: table runners, greens and lanterns for tables, flowers for entry table and mantle",
      "Catering: Cocktail hour with 2 hors d’oeuvres, 2 entrée buffet, salad, dinner rolls, 2 side dishes",
      "Beverages Displayed in Elegant Decanters: Tea and water beverages",
      "Charger, Silver flatware, Goblets and Dinner Plates with Napkins",
      "2 tier cake with stand, staff will cut & serve cake Vanilla or Chocolate, Rough, Smooth, or Naked iced",
      "Staff for event 6 hours",
    ],
    reducedPrice: "$6,000",
  },
  {
    title: "Exquisite Event",
    mainPrice: "$8,300",
    feats: [
      "75 guests",
      "8-hour Venue Rental Included",
      "Set Up & display of your personal items",
      "Event Décor: table runners, greens & lanterns with florals for tables, florals for food display, mantle & entry table",
      "Catering: Cocktail hour with 3 hors d’oeuvres, 2 entrée buffet, signature salad, dinner rolls, 2 side dishes",
      "Beverages Displayed in Elegant Decanters: Tea and water beverages",
      "Charger, Silver flatware, Goblets and Dinner Plates with Napkins",
      "3 tier cake with stand, staff will cut & serve cake Vanilla or Chocolate, Rough, Smooth or Naked iced",
      "Staff for event 6 hours",
      "Photo Booth Wall",
      "Day of Coordinator: Timeline/Dinner Service/Toasts/Cake Cutting/etc.",
    ],
    reducedPrice: "$8,100",
  },
];

export const smallEventPackages = [
  {
    title: "Venue Only",
    feats: [
      "Fridays, Saturdays & Sundays - $2,100 Rental Time: 8 hours",
      "Monday-Thursday - $1,500 Rental Time: 6 hours",
      "With any package $350/hour",
    ],
  },
];
