"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { mainNav } from "@/data/navLinks";
import { X } from "lucide-react";
import Link from "next/link";
import { AlignLeft } from "lucide-react";
import Image from "next/image";

interface NavSheetProps {
  isOpen: boolean;
  toggleSheet: () => void;
}

const NavSheet = ({ isOpen, toggleSheet }: NavSheetProps) => {
  const navSheetClasses = cn(
    "fixed top-0 z-30 flex h-dvh w-full flex-col bg-background/70 p-4 backdrop-blur-md md:w-[30rem] transition-transform duration-800 ease-in-out",
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
        className="flex cursor-pointer items-center gap-2 pb-4"
      >
        <X strokeWidth={1.5} className="h-9 w-9" />
        <span className="font-bold">CLOSE</span>
      </div>
      <nav className="flex h-full flex-col justify-center">
        <ul>
          {mainNav.map((item, index) => (
            <li
              onClick={toggleSheet}
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
  const transparentHeaderClasses = "bg-transparent text-background";
  const solidHeaderClasses = "bg-background/70 backdrop-blur-md text-primary";

  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState(transparentHeaderClasses);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= 200) {
        setBgColor(solidHeaderClasses);
      } else {
        setBgColor(transparentHeaderClasses);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed left-0 top-0 z-20 flex w-full justify-between transition-colors duration-300 ease-in-out",
          bgColor,
        )}
      >
        <div
          onClick={toggleSheet}
          className="flex cursor-pointer items-center gap-2 p-4"
        >
          {/* FIX: hamburger background  */}
          <AlignLeft
            strokeWidth={1.5}
            className={cn("h-9 w-9 text-background", bgColor)}
          />
          <div className="hidden font-bold md:block">MENU</div>
        </div>
        <div className="flex items-center pr-3 md:pr-0">
          <Link href="/">
            <Image
              src="/RLMAffairs_Logo_Gold_FNL.png"
              alt="RLM Affairs Logo"
              width={100}
              height={100}
              className="max-w-[3.125rem] py-2 drop-shadow-xl md:max-w-[6.25rem]"
            />
          </Link>
        </div>
        <div className="hidden items-center transition-transform duration-200 hover:scale-105 md:flex ">
          <div>
            <a
              href="https://hello.dubsado.com/public/form/view/5afe45144f411345f6129204"
              className="p-4 font-bold"
            >
              RESERVE A TOUR
            </a>
          </div>
        </div>
      </div>
      <NavSheet isOpen={isOpen} toggleSheet={toggleSheet} />
    </>
  );
};
