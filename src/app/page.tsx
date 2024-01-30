import { HeroNav } from "@/components/HeroNav";
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
        <Image
          src="/down-arr.svg"
          alt=""
          width={20}
          height={55}
          className="absolute bottom-8 right-7"
        />
        <HeroNav />
      </section>
    </main>
  );
}
