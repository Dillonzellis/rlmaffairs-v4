import BackgroundImage from "@/components/BackgroundImage";
import { FixedImage } from "@/components/FixImage";
import { HeroNav } from "@/components/HeroNav";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { BodyText } from "@/components/typography/BodyText";
import { MainHeader } from "@/components/typography/MainHeader";
import { SubHeader } from "@/components/typography/SubHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
        <MaxWidthWrapper className="py-12">
          <div className="space-y-4">
            <SubHeader>Venue & Event Space</SubHeader>
            <MainHeader>Venue & Event Space</MainHeader>

            <div className="flex gap-8">
              <Image src="/right-arr.svg" alt="" width={58} height={20} />
              <Button asChild variant="link" size="none" fontSize="lg">
                <Link href="/">Schedule a Tour</Link>
              </Button>
            </div>
          </div>
          <BodyText className="max-w-prose ml-auto">
            Rlm is an all inclusive wedding and event venue. We believe in
            stress-free events. Always bringing a comfortable and luxuriously
            tailored gathering space together for sharing in life's
            celebrations. Our goal is to elegantly bring your vision to life. As
            we plan, design and fully execute beautiful event. Focus on your
            celebration of love. We’ll handle all the important details. You
            deserve to radiate confidence on one of the most important days of
            your life.
          </BodyText>
        </MaxWidthWrapper>
      </section>
      <section>
        <BackgroundImage imageUrl="/venue-feat.jpg" />
      </section>
    </main>
  );
}
