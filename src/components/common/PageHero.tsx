import Image from "next/image";
import { HeroNav } from "@/components/common/HeroNav";
import { DownArrow } from "./DownArrow";

interface PageHeroProps {
  imgSrc: string;
  imgAlt: string;
}

export const PageHero = ({ imgSrc, imgAlt }: PageHeroProps) => {
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
      <HeroNav />
    </section>
  );
};
