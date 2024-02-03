"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface NavSheetProps {
  refProp: React.RefObject<HTMLDivElement>;
}

const NavSheet = ({ refProp }: NavSheetProps) => {
  return (
    <div
      ref={refProp}
      className="fixed left-0 top-0 z-20 h-screen w-52 bg-white"
    >
      <div>Sheet Menu</div>
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
        className="fixed left-2.5 top-7 flex cursor-pointer gap-4 md:left-7"
      >
        <Image src="/hamburger.svg" alt="" width={45} height={20} />
        <div className="text-lg text-background">MENU</div>
      </div>
      {sheetActive && <NavSheet refProp={menuRef} />}
    </>
  );
};
