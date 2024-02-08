"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { NavSheet } from "./NavSheet";
import { useToggleVisibility } from "@/hooks/useToggleVisibility";

export const NavMenu = () => {
  const { ref, isVisible, toggleVisibility } = useToggleVisibility();

  return (
    <>
      <div
        onClick={toggleVisibility}
        className="fixed left-2.5 top-7 z-20 flex cursor-pointer gap-4 md:left-7"
      >
        <Image src="/hamburger.svg" alt="" width={45} height={20} />
        <div className="text-lg text-background">MENU</div>
      </div>
      {isVisible && <NavSheet refProp={ref} handleClick={toggleVisibility} />}
    </>
  );
};
