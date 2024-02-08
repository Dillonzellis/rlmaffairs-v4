import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { SubHeader } from "@/components/common/typography/SubHeader";
import { ArrowBtn } from "@/components/common/ArrowBtn";
import { BodyText } from "@/components/common/typography/BodyText";
import { BackgroundImage } from "@/components/common/BackgroundImage";

export const HomeVenue = () => {
  return (
    <section>
      <MaxWidthWrapper className="py-12">
        <div className="space-y-4">
          <SubHeader>The Stage for Lifelong Memories</SubHeader>
          <MainHeader>Venue & Event Space</MainHeader>
          <ArrowBtn href="/">Book a Tour</ArrowBtn>
        </div>
        <BodyText className="ml-auto max-w-prose">
          RLM is an all inclusive wedding and event venue. Offering amazing
          pricing, full catering services, beautiful florals and coordination.
          We are committed to always bringing a comfortable and luxuriously
          tailored gathering space together for sharing in life&apos;s
          celebrations.
        </BodyText>
      </MaxWidthWrapper>
      <BackgroundImage imageUrl="/venue-feat.jpg" />
    </section>
  );
};
