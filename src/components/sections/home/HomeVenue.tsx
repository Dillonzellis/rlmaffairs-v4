import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { SubHeader } from "@/components/common/typography/SubHeader";
import { ArrowBtn } from "@/components/common/ArrowBtn";
import { BackgroundImage } from "@/components/common/BackgroundImage";

export const HomeVenue = () => {
  return (
    <section id="venue" className="scroll-mt-[4.25rem]">
      <MaxWidthWrapper className="py-12">
        <div className="space-y-4">
          <SubHeader>All inclusive wedding venue</SubHeader>
          <MainHeader>Venue Gallery</MainHeader>
          <ArrowBtn href="venue-&-event-space">View Gallery</ArrowBtn>
        </div>
      </MaxWidthWrapper>
      <BackgroundImage imageUrl="/home-venue-hero.jpg" />
    </section>
  );
};
