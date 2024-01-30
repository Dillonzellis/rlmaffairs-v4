export const navItems = [
  { label: "Venue & Event Space", href: "/venue" },
  { label: "Floral Designs", href: "/venue" },
  { label: "Catering", href: "/venue" },
  { label: "Love Letters", href: "/venue" },
] as const;

export type TypenavItems = (typeof navItems)[number];

export const HeroNav = () => {
  return (
    <div className="absolute left-7 bottom-8">
      <ul className="text-white">
        {navItems.map((item) => (
          <li key={item.label} className="italic text-5xl pb-2">
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};