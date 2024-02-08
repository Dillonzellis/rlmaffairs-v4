"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { mainNav } from "@/data/navLinks";
import Link from "next/link";

interface NavSheetProps {
  refProp: React.RefObject<HTMLDivElement>;
  handleClick: () => void;
}

const NavSheet = ({ refProp, handleClick }: NavSheetProps) => {
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

export const NavMenu = () => {
  const [sheetActive, setSheetActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setSheetActive(!sheetActive);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setSheetActive(false);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setSheetActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div
        onClick={handleClick}
        className="fixed left-2.5 top-7 z-20 flex cursor-pointer gap-4 md:left-7"
      >
        <Image src="/hamburger.svg" alt="" width={45} height={20} />
        <div className="text-lg text-background">MENU</div>
      </div>
      {sheetActive && <NavSheet refProp={menuRef} handleClick={handleClick} />}
    </>
  );
};
