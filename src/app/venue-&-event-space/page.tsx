import { PageHero } from "@/components/common/PageHero";
import { VenuePackages } from "@/components/sections/venue/VenuePackages";
import { VenueHashLinks } from "@/data/navLinks";
import venueHero from "/public/venue-hero.jpg";

export default function VenuePage() {
  return (
    <main>
      <PageHero imgSrc={venueHero} imgAlt="" hashLinks={VenueHashLinks} />

      {/* Packages */}
      <VenuePackages />

      {/* Venue Features */}
      {/* Suites */}
      {/* Preferred Vendors */}
      {/* Gallery */}
      {/* FAQs */}
      {/* Floor Plan */}
    </main>
  );
}
