"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { mainNav } from "@/data/navLinks";
import { X } from "lucide-react";
import Link from "next/link";
import { AlignLeft } from "lucide-react";

interface NavSheetProps {
  isOpen: boolean;
  toggleSheet: () => void;
}

const NavSheet = ({ isOpen, toggleSheet }: NavSheetProps) => {
  const navSheetClasses = cn(
    "fixed top-0 z-30 flex h-dvh w-full flex-col border-r border-r-primary/30 bg-background/70 p-4 backdrop-blur-md md:w-[30rem] transition-transform duration-800 ease-in-out",
    "transition-transform duration-500 ease-in-out",
    {
      "transform translate-x-0": isOpen,
      "transform -translate-x-full": !isOpen,
    },
  );
  return (
    <div className={navSheetClasses}>
      <div
        onClick={toggleSheet}
        className="flex cursor-pointer items-center gap-2 border-b border-b-primary/30 pb-4"
      >
        <X strokeWidth={1.5} className="h-9 w-9" />
        <span className="font-bold">CLOSE</span>
      </div>
      <nav className="flex h-full flex-col justify-center">
        <ul>
          {mainNav.map((item, index) => (
            <li
              key={index}
              className="group transform py-1 transition-transform duration-200 hover:translate-x-1"
            >
              <Link
                href={item.href}
                className="font-nav text-2xl font-light text-primary group-hover:text-primary/80"
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

export const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="fixed left-0 top-0 z-20 flex w-full justify-between border-b border-b-background/30 text-background">
        <div
          onClick={toggleSheet}
          className="flex cursor-pointer items-center gap-2 border-r-background/30 p-4 md:border-r"
        >
          <AlignLeft strokeWidth={1.5} className="h-9 w-9 text-background" />
          <div className="hidden font-bold md:block">MENU</div>
        </div>
        <div className="flex items-center pr-3 md:pr-0">
          <Link href="/">RLM LOGO</Link>
        </div>
        <div className="hidden items-center border-l-background/30 md:flex md:border-l">
          <div>
            <a href="/" className="p-4 font-bold">
              RESERVE A TOUR
            </a>
          </div>
        </div>
      </div>
      <NavSheet isOpen={isOpen} toggleSheet={toggleSheet} />
    </>
  );
};
