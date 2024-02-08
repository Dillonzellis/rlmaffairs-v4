import { mainNav } from "@/data/navLinks";

export const HeroNav = () => {
  return (
    <div className="absolute bottom-4 left-2.5 md:bottom-8 md:left-7">
      <ul>
        {mainNav.map((item) => (
          <li
            key={item.label}
            className="pb-2 font-serif text-4xl font-semibold italic text-background md:text-5xl"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
