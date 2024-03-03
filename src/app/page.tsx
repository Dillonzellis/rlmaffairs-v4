import { HomeFloral } from "@/components/sections/home/HomeFloral";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeVenue } from "@/components/sections/home/HomeVenue";
import { HomeCatering } from "@/components/sections/home/HomeCatering";
import { LoveLetters } from "@/components/sections/home/LoveLetters";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <HomeHero />
      <HomeVenue />
      <HomeFloral />
      <HomeCatering />
      <LoveLetters />
    </main>
  );
}
