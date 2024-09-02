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
          <MainHeader>Staging Env Big change</MainHeader>
          <ArrowBtn href="https://hello.dubsado.com/public/form/view/5afe45144f411345f6129204">
            Book a Tour
          </ArrowBtn>
        </div>
      </MaxWidthWrapper>
      <BackgroundImage imageUrl="/home-venue-hero.jpg" />
    </section>
  );
};
