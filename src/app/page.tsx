import { HeroNav } from "@/components/HeroNav";
import { MainHeader } from "@/components/typography/MainHeader";
import { SubHeader } from "@/components/typography/SubHeader";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section>
        <Image
          src="/hero-placeholder.jpg"
          alt=""
          height={834}
          width={1280}
          className="h-screen object-cover w-full"
        />
        <div className="top-7 left-7 flex gap-4 fixed">
          <Image src="/hamburger.svg" alt="" width={45} height={20} />
          <div className="text-white text-lg">MENU</div>
        </div>
        <h1 className="font-serif absolute left-1/2 top-[10%] text-8xl text-white font-semibold -translate-x-1/2">
          RLM
        </h1>
        <Image
          src="/down-arr.svg"
          alt=""
          width={20}
          height={55}
          className="absolute bottom-8 right-7"
        />
        <HeroNav />
      </section>
      <section>
        <SubHeader>Venue & Event Space</SubHeader>
        <MainHeader>Venue & Event Space</MainHeader>
      </section>
    </main>
  );
}
