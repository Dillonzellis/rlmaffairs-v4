import Image from "next/image";
import { NavMenu } from "@/components/layout/header/NavMenu";

export const HomeHero = () => {
  return (
    <section>
      <Image
        src="/hero-placeholder.jpg"
        alt=""
        height={834}
        width={1280}
        className="h-dvh w-full object-cover"
      />
      <NavMenu />
      {/* TODO: add anchor link to next section */}
      <Image
        src="/down-arr.svg"
        alt=""
        width={20}
        height={55}
        className="absolute bottom-8 right-2.5 md:right-7"
      />
      {/* <HeroNav /> */}
    </section>
  );
};
