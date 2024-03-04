export const WeddingPackages = [
  {
    title: "Sapphire Package",
    desc: "This is the Sapphire Package",
    feats: [
      "50 Guests",
      "6 hour Venue Rental Included",
      "Reception Décor: Silk Greens & Organza",
      "Ceremony Décor: organza draping",
      "Flower girl petals",
      "Bridal bouquet",
      "3 Bridesmaids",
      "Groom & 3 Groomsmen boutonnières",
      "One entrée buffet with 2 side dishes and bread Or Heavy Hors d’Oeuvres with 3 choices",
      "Tea and Water beverages",
      "Disposable Flatware Glasses and Paper Napkins",
      "2 tier Cake with Cake stand, Staff will cut & serve",
      "Staff for event 4 hours",
      "Rehearsal Day of Event",
    ],
    price: 4100.0,
    reducedPrice: "Monday - Thursday: $3900.00",
  },
  {
    title: "Ruby Package",
    desc: "This is the Ruby Package",
    feats: ["Feature 1", "Feature 2", "Feature 3"],
    price: 2000,
    reducedPrice: "Monday - Thursday: 3900.00",
  },
  {
    title: "Emerald Package",
    desc: "This is the Emerald Package",
    feats: ["Feature 1", "Feature 2", "Feature 3"],
    price: 3000,
    reducedPrice: "Monday - Thursday: 3900.00",
  },
  {
    title: "Diamond Package",
    desc: "This is the Diamond Package",
    feats: ["Feature 1", "Feature 2", "Feature 3"],
    price: 4000,
    reducedPrice: "Monday - Thursday: 3900.00",
  },
] as const;

export type TypeWeddingPackages = (typeof WeddingPackages)[number];
