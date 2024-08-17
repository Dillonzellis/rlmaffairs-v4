import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { SubHeader } from "@/components/common/typography/SubHeader";
import { VenueFeatGrid } from "./VenueFeat";

export const VenuePackages = () => {
  return (
    <>
      <section id="venue">
        <MaxWidthWrapper className="py-12">
          <SubHeader>Premier Packages</SubHeader>
          <MainHeader>Venue Features</MainHeader>
        </MaxWidthWrapper>
      </section>
      <section>
        <VenueFeatGrid />
      </section>
      <section>
        <MaxWidthWrapper className="py-12">
          <MainHeader>Gallery</MainHeader>
        </MaxWidthWrapper>
      </section>
    </>
  );
};
