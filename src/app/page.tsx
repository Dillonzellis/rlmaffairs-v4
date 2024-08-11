import { HomeFloral } from "@/components/sections/home/HomeFloral";
import { HomeVenue } from "@/components/sections/home/HomeVenue";
import { HomeCatering } from "@/components/sections/home/HomeCatering";
import { LoveLetters } from "@/components/sections/home/LoveLetters";
import { PageHero } from "@/components/common/PageHero";
import { HomePackages } from "@/components/sections/home/HomePackages";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import Image from "next/image";
import { BodyText } from "@/components/common/typography/BodyText";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <PageHero videoSrc="/home-hero.webm" link="#venue" />
      <HomeVenue />
      <HomeFloral />
      <HomePackages />
      <HomeCatering />
      <LoveLetters />

      <section>
        <div className="h-[350px] bg-[url('/package-feat-sm.jpg')] bg-cover bg-center">
          <MaxWidthWrapper className="flex h-full items-center">
            <MainHeader className="text-white">Our Story</MainHeader>
          </MaxWidthWrapper>
        </div>

        {/* Add logo like RLM Venue */}
        <MaxWidthWrapper className="">
          <div className="flex items-center justify-center gap-12 py-8">
            <Image
              src="/RLMAffairs_Logo_Gold_FNL.png"
              alt="RLM Affairs Logo"
              width={200}
              height={200}
            />
            <BodyText>
              RLM Affairs offers all the services you may need for your event.
              Our staff works directly with our clients to tailor each event to
              your specific needs. Whether you need just catering, or a complete
              event design, we will work with you as much as you need, or we
              will provide you with A la carte services based specifically on
              your needs and budget. Our award winning catering, wedding
              planning, cakes, and floral design are available every day,
              breakfast, lunch, dinner, or in between.
            </BodyText>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
