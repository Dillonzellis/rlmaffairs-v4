import Link from "next/link";
import { mainNav } from "@/data/navLinks";
import { X } from "lucide-react";

interface NavSheetProps {
  refProp: React.RefObject<HTMLDivElement>;
  handleClick: () => void;
}

export const NavSheet = ({ refProp, handleClick }: NavSheetProps) => {
  return (
    <div
      ref={refProp}
      className="fixed left-0 top-0 z-30 flex h-screen w-full flex-col border-r-8 border-r-muted-foreground bg-background/90 py-7 pl-2.5 backdrop-blur-md md:w-[30rem] md:pl-7"
    >
      <div
        onClick={handleClick}
        className="flex cursor-pointer items-center gap-2"
      >
        <X strokeWidth={1.5} className="h-9 w-9" />
        <span className="text-lg">CLOSE</span>
      </div>
      <nav className="flex h-full flex-col justify-center">
        <ul>
          {mainNav.map((item, index) => (
            <li key={index} className="py-2">
              <Link
                href={item.href}
                className="font-serif text-4xl font-bold text-primary hover:text-primary/70"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
