import { PageHero } from "@/components/common/PageHero";
import { VenuePackages } from "@/components/sections/venue/VenuePackages";
import { VenueHashLinks } from "@/data/navLinks";
import venueHero from "/public/venue-hero.jpg";
import { VenueFeatGrid } from "@/components/sections/venue/VenueFeat";
import { VenueGallery } from "@/components/sections/venue/VenueGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Venue & Event Space",
};

export default function VenuePage() {
  return (
    <main>
      <PageHero
        imgSrc={venueHero}
        imgAlt="bride with friends"
        hashLinks={VenueHashLinks}
        link="#venue"
      />
      <VenuePackages />
      <VenueFeatGrid />
      <VenueGallery />
    </main>
  );
}
