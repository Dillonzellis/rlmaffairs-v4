import Image from "next/image";
import { NavMenu } from "@/components/layout/header/NavMenu";
import { HeroNav } from "@/components/common/HeroNav";

export const HomeHero = () => {
  return (
    <section>
      <Image
        src="/hero-placeholder.jpg"
        alt=""
        height={834}
        width={1280}
        className="h-screen w-full object-cover"
      />
      <NavMenu />
      {/* <h1 className="absolute left-1/2 top-[10%] -translate-x-1/2 font-serif text-8xl font-semibold text-background"> */}
      {/*   RLM */}
      {/* </h1> */}
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
