import Image, { StaticImageData } from "next/image";
import { HeroNav } from "@/components/common/HeroNav";
import { DownArrow } from "./DownArrow";
import { HashLinksType } from "@/data/navLinks";

interface PageHeroProps {
  imgSrc?: string | StaticImageData;
  imgAlt?: string;
  hashLinks?: HashLinksType[];
  videoSrc?: string;
}

export const PageHero = ({
  imgSrc,
  imgAlt,
  hashLinks,
  videoSrc,
}: PageHeroProps) => {
  return (
    <section>
      <>
        {videoSrc ? (
          <video autoPlay muted loop className="h-dvh w-full object-cover">
            <source src={videoSrc} type="video/webm" />
          </video>
        ) : null}
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={imgAlt || "Hero Image"}
            height={834}
            width={1280}
            className="h-dvh w-full object-cover"
          />
        ) : null}
        <DownArrow />
        {hashLinks && <HeroNav links={hashLinks} />}
      </>
    </section>
  );
};
