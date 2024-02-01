export const navItems = [
  { label: "Venue & Event Space", href: "/venue" },
  { label: "Floral Designs", href: "/venue" },
  { label: "Catering", href: "/venue" },
  { label: "Love Letters", href: "/venue" },
] as const;

export type TypenavItems = (typeof navItems)[number];

export const HeroNav = () => {
  return (
    <div className="absolute bottom-8 left-2.5 lg:left-7">
      <ul>
        {navItems.map((item) => (
          <li
            key={item.label}
            className="pb-2 font-serif text-4xl font-semibold italic text-white md:text-5xl"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
