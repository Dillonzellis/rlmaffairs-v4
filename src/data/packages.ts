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
      "50 Guests",
      "6 hour Venue Rental Included",
      "Reception Décor: Silk Greens & Organza",
      "Ceremony Décor: organza draping",
      "Wedding Party: flower girl petals Bride bouquet & 3 bridesmaids Groom & 3 groomsmen boutonnières",
      "One entrée buffet with 2 side dishes and bread Or Heavy Hors d’Oeuvres with 3 choices",
      "Tea and Water beverages",
      "Disposable Flatware Glasses and Paper Napkins",
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
      "60 Guests",
      "7 hour Venue Rental Included",
      "Reception Décor: Silk Greens & Organza entry table decor",
      "Ceremony Décor: Organza draping with optional greens",
      "Bride bouquet & 3 bridesmaids and flower girl petals Groom & 3 groomsmen boutonnières",
      "Cocktail hour 2 Hors d’Oeuvres",
      "1 entrée buffet, salad, rolls, 2 side dishes",
      "Tea and water beverages With display Decanters",
      "Silver flatware glasses, chargers and plates with signature paper napkins",
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
      "70 Guests",
      "8 hour Venue Rental Included",
      "Ceremony Décor: Organza draping with Florals",
      "Reception Décor: Lanterns, Greens, Organza, and entry table, mantle florals",
      "Bride bouquet & 3 bridesmaids and flower girl petals Groom & 3 groomsmen boutonnières",
      "Catering: Cocktail hour 2 Hors d’Oeuvres 2 entrée buffet, signature salad, dinner rolls, 2 side dishes",
      "Beverages Displayed in Elegant Decanters: Tea and water beverages",
      "Silver flatware, Goblets and Dinner Plates",
      "2 tier cake with Cake stand, staff will cut & serve cake Vanilla or Chocolate, Rough, Smooth or Naked iced",
      "Photo Booth Wall",
      "Staff for event 6 hours",
      "Day of Coordinator: Wedding Ceremony Coordination/Dinner service/ Toasts/ Cake Cutting",
      "Rehearsal with coordinator",
      "Clean up",
    ],
    reducedPrice: "$6,300",
  },
  {
    title: "Diamond Package",
    mainPrice: "$8,700",
    feats: [
      "75 Guests",
      "10 hour Venue Rental Included",
      "Ceremony Décor: Organza draping with Florals & with aisle pew decor",
      "Reception Décor: Floral Centerpieces flowers for food display & reception",
      "Bride bouquet & 5 bridesmaids and flower girl petals Groom & 5 groomsmen boutonnières",
      "3 Corsages (Moms Grandmothers Etc.) 3 Boutioneres (Fathers Grandfathers Etc)",
      "Catering: Cocktail hour 3 Hors d’Oeuvres 2 entrée buffet, signature salad, diner rolls, 2 side dishes",
      "Beverages Displayed in Elegant Decanters: Tea and water beverages",
      "Silver or Gold flatware, Goblets and Dinner Plates with Linen Napkins. White or cream linens for seating tables",
      "3 tier cake with Cake stand, staff will cut & serve cake Vanilla or Chocolate, Rough, Smooth or Naked iced",
      "Staff for event 6 hours",
      "Full wedding Coordination services",
      "Photo Booth Wall",
      "Day of Coordinator: Wedding Ceremony Coordination/ Dances /Dinner Service /Toasts/ Cake Cutting/ Send off",
      "Rehearsal with coordinator",
      "Full set up & Clean up",
    ],
    reducedPrice: "$8,400",
  },
];

export type TypeWeddingPackages = (typeof weddingPackages)[number];

export const smallWeddingPackages = [
  {
    title: "Micro Wedding",
    mainPrice: "$3,600",
    feats: [
      "25 Guests",
      "4 hour Venue Rental included",
      "Ceremony Décor: organza draping",
      "Bride bouquet & Groom boutonnière",
      "Set Up & display of couples personal items",
      "One entrée buffet with 2 side dishes and bread Or Heavy Hors d’Oeuvres with 3 choices",
      "Tea and Water beverages",
      "Disposable Flatware Glasses and Paper Napkins",
      "2 tier Cake with stand, Staff will cut & serve cake Vanilla or Chocolate, Rough, Smooth or Naked iced",
      "Staff for event 2 hours",
    ],
  },
  {
    title: "Wedding Reception Only",
    mainPrice: "$3,800",
    feats: [
      "50 Guests",
      "Venue Rental Included 4 hours",
      "Reception tables & chairs",
      "1 Entree 2 sides dinner roll & salad",
      "Set Up & clean up",
      "Beverages Displayed in Decanters: Tea and water beverages",
      "Disposable Flatware Glasses and Paper Napkins",
      "2 tier Cake with Cake stand, Staff will cut & serve cake Vanilla or Chocolate, Rough, Smooth or Naked iced",
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
      "50 Guests",
      "6 hour Venue Rental included",
      "Event Décor: greens and lanterns",
      "Set Up & display of your personal items",
      "One entrée buffet with 2 side dishes and bread Or Heavy Hors d’Oeuvres with 3 choices",
      "Beverages Displayed in Elegant Decanters: Tea and water beverages",
      "Disposable Flatware Glasses and Paper Napkins",
      "2 tier Cake for dessert with stand, Staff will cut & serve cake Vanilla or Chocolate, Rough, Smooth or Naked iced",
      "Staff for event 4 hours",
      "You may add additional guests",
    ],
    reducedPrice: "$3,700",
  },
  {
    title: "Elegant Event",
    mainPrice: "$6,300",
    feats: [
      "65 Guests",
      "8 hour Venue Rental Included",
      "Set Up & display of your personal items",
      "Event Décor: table runners, greens and lanterns for tables, flowers for entry table and mantle",
      "Catering: Cocktail hour 2 Hors d’Oeuvres 2 entrée buffet, signature salad, diner rolls, 2 side dishes",
      "Beverages Displayed in Elegant Decanters: Tea and water beverages",
      "Chargers, Silver flatware, Goblets and Dinner Plates with Napkins",
      "2 tier cake with stand, staff will cut & serve cake Vanilla or Chocolate, Rough, Smooth or Naked iced",
      "Staff for event 6 hours",
      "You may add additional guests",
    ],
    reducedPrice: "$6,000",
  },
  {
    title: "Exquisite Event",
    mainPrice: "$8,300",
    feats: [
      "75 guests",
      "10 hour Venue Rental Included",
      "Set Up & display of your personal items",
      "Event Décor: table runners, greens & lanterns with florals for tables, florals for food display, mantle & entry table",
      "Catering: Cocktail hour 3 Hors d’Oeuvres Dinner 2 entrée buffet, signature salad, diner rolls, 2 side dishes",
      "Beverages Displayed in Elegant Decanters: Tea and water beverages",
      "Chargers, Silver or Gold flatware, Goblets and Dinner Plates with Napkins",
      "3 tier cake with stand, staff will cut & serve cake Vanilla or Chocolate, Rough, Smooth or Naked iced",
      "Staff for event 6 hours",
      "You may add additional guests",
      "Photo Booth Wall",
      "Day of Coordinator: Timeline /Dinner Service /Toasts / Cake Cutting/ Etc.",
    ],
    reducedPrice: "$8,100",
  },
];

export const smallEventPackages = [
  {
    title: "Venue Only",
    feats: [
      "Fridays, Saturdays & Sundays - $2100.00 8 hours",
      "Monday-Thursday - $1,500 6 hours",
      "With any package 350.00/hour",
      "A $500 deposit is required to hold a date.",
      "This deposit is not refundable. The balance is due 40 days prior to your event.",
    ],
  },
];
