import { HashLinksType } from "@/data/navLinks";
import Link from "next/link";

interface HeroNavProps {
  links: HashLinksType[];
}

export const HeroNav = ({ links }: HeroNavProps) => {
  return (
    <div className="absolute bottom-4 left-2.5 md:bottom-8 md:left-7">
      <ul>
        {links.map((item) => (
          <li
            key={item.label}
            className="group pb-2 font-serif text-4xl font-semibold italic text-background transition-transform duration-200 hover:translate-x-1 md:text-5xl"
          >
            <Link href={item.href} className="group-hover:text-background/90">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
