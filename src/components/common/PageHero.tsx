import Image from "next/image";
import { HeroNav } from "@/components/common/HeroNav";
import { DownArrow } from "./DownArrow";
import { HashLinksType } from "@/data/navLinks";

interface PageHeroProps {
  imgSrc: string;
  imgAlt: string;
  hashLinks?: HashLinksType[];
}

export const PageHero = ({ imgSrc, imgAlt, hashLinks }: PageHeroProps) => {
  return (
    <section>
      <Image
        src={imgSrc}
        alt={imgAlt}
        height={834}
        width={1280}
        className="h-dvh w-full object-cover"
      />
      <DownArrow />
      {hashLinks && <HeroNav links={hashLinks} />}
    </section>
  );
};
