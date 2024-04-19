import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { BodyText } from "@/components/common/typography/BodyText";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { SubHeader } from "@/components/common/typography/SubHeader";

export const VenuePackages = () => {
  return (
    <>
      <section id="venue">
        <MaxWidthWrapper className="py-12">
          <SubHeader>Premier Packages</SubHeader>
          <MainHeader>Venue Features</MainHeader>
          <BodyText className="">List the Features</BodyText>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper className="py-12">
          <MainHeader>Gallery</MainHeader>
        </MaxWidthWrapper>
      </section>
    </>
  );
};
