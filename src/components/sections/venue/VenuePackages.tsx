import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { SubHeader } from "@/components/common/typography/SubHeader";

export const VenuePackages = () => {
  return (
    <>
      <section id="venue" className="scroll-mt-[4.25rem]">
        <MaxWidthWrapper className="py-12">
          <SubHeader>Premier Packages</SubHeader>
          <MainHeader>Venue Features</MainHeader>
          <div className="text-sm font-light italic tracking-tighter text-primary/70">
            Features depend upon chosen package and additional services added.
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};
