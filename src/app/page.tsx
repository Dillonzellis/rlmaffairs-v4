import { HomeFloral } from "@/components/sections/home/HomeFloral";
import { HomeVenue } from "@/components/sections/home/HomeVenue";
import { HomeCatering } from "@/components/sections/home/HomeCatering";
import { LoveLetters } from "@/components/sections/home/LoveLetters";
import { PageHero } from "@/components/common/PageHero";
import { HomePackages } from "@/components/sections/home/HomePackages";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <PageHero videoSrc="/home-hero.webm" link="#venue" />
      <HomeVenue />
      <HomeFloral />
      <HomePackages />
      <HomeCatering />
      <LoveLetters />
    </main>
  );
}
