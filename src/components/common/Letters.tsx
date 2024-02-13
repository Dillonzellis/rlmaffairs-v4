"use client";

import Image from "next/image";
import { letterSlider } from "@/data/sliders";
import { cn } from "@/lib/utils";
import { Icons } from "./Icons";
import { Typewriter } from "react-simple-typewriter";

const Star = () => {
  return <Icons.star className="h-10 w-10 text-background md:h-12 md:w-12" />;
};

interface LetterProps {
  src: string;
  alt: string;
  isCenter?: boolean;
}

const Letter = ({ src, alt, isCenter }: LetterProps) => {
  return (
    <div
      className={cn(
        "relative inset-0 shadow-md",
        isCenter
          ? "h-96 w-full max-w-[550px] md:h-[475px]"
          : "hidden h-[358px] w-[284px] md:block",
      )}
    >
      <Image className="object-cover" src={src} alt={alt} fill />
      {isCenter && (
        <div className="absolute inset-0 p-4 md:p-8">
          <div className="flex h-full flex-col gap-8 bg-primary/40 px-4 pt-16 text-white backdrop-blur-sm md:pb-8 md:pt-12">
            <div className="flex justify-center gap-2 pb-8 md:gap-3 md:pb-12">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} />
              ))}
            </div>
            <div className="flex flex-col justify-center text-center text-lg font-light italic md:text-2xl">
              <Typewriter
                words={[
                  '"...Our wedding here was absolutely perfect."',
                  "I love everything about this place...",
                  "Amazing, Amazing, Amazing!",
                  "Just wow!",
                  "You will be taken care of here!",
                ]}
                cursor
                loop={0}
                typeSpeed={60}
                deleteSpeed={30}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Letters = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-8">
        {letterSlider.map((letter, idx) => (
          <Letter
            isCenter={letter.isCenter}
            key={idx}
            src={letter.src}
            alt={letter.alt}
          />
        ))}
      </div>
    </div>
  );
};
