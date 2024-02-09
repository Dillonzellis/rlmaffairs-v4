"use client";

import Image from "next/image";
import { NavSheet } from "./NavSheet";
import { useToggleVisibility } from "@/hooks/useToggleVisibility";
import { AlignLeft } from "lucide-react";

export const NavMenu = () => {
  const { ref, isVisible, toggleVisibility } = useToggleVisibility();

  return (
    <>
      <div
        onClick={toggleVisibility}
        className="fixed left-2.5 top-7 z-20 flex w-full cursor-pointer items-center gap-2 md:left-7"
      >
        <AlignLeft strokeWidth={1} className="h-9 w-9 text-background" />
        <div className="text-lg text-background">MENU</div>
      </div>
      {isVisible && <NavSheet refProp={ref} handleClick={toggleVisibility} />}
    </>
  );
};
