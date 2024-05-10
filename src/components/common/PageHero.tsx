import Image, { StaticImageData } from "next/image";
import { HeroNav } from "@/components/common/HeroNav";
import { DownArrow } from "./DownArrow";
import { HashLinksType } from "@/data/navLinks";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  imgSrc?: string | StaticImageData;
  imgAlt?: string;
  hashLinks?: HashLinksType[];
  videoSrc?: string;
  small?: boolean;
  link: string;
}

export const PageHero = ({
  imgSrc,
  imgAlt,
  hashLinks,
  videoSrc,
  small,
  link,
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
            // className="h-dvh w-full object-cover"
            className={cn("w-full object-cover", small ? "h-96" : "h-dvh")}
          />
        ) : null}
        <DownArrow link={link} />
        {hashLinks && <HeroNav links={hashLinks} />}
      </>
    </section>
  );
};
