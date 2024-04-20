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
          <SubHeader>The Stage for Lifelong Memories</SubHeader>
          <MainHeader>Venue Gallery</MainHeader>
          <ArrowBtn href="/">Book a Tour</ArrowBtn>
        </div>
      </MaxWidthWrapper>
      <BackgroundImage imageUrl="/venue-1.jpg" />
    </section>
  );
};
