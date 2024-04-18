import { PageHero } from "@/components/common/PageHero";
import { VenuePackages } from "@/components/sections/venue/VenuePackages";
import { VenueHashLinks } from "@/data/navLinks";
import venueHero from "/public/venue-hero.jpg";

export default function VenuePage() {
  return (
    <main>
      {/* TODO: Slider for Venue Feat imgs */}
      <PageHero imgSrc={venueHero} imgAlt="" hashLinks={VenueHashLinks} />
      <VenuePackages />
    </main>
  );
}
