"use client";

import Link from "next/link";
import { NavSheet } from "./NavSheet";
import { useToggleVisibility } from "@/hooks/useToggleVisibility";
import { AlignLeft } from "lucide-react";

export const NavMenu = () => {
  const { ref, isVisible, toggleVisibility } = useToggleVisibility();

  return (
    <>
      <div className="fixed left-0 top-0 z-20 flex w-full justify-between border-b border-b-background/30 text-background">
        <div
          onClick={toggleVisibility}
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
      {isVisible && <NavSheet refProp={ref} handleClick={toggleVisibility} />}
    </>
  );
};
