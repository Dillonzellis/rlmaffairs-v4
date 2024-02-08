import Image from "next/image";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { SubHeader } from "@/components/common/typography/SubHeader";
import { ArrowBtn } from "@/components/common/ArrowBtn";
import { BodyText } from "@/components/common/typography/BodyText";
import { SmallSlider } from "@/components/common/SmallSlider";

export const HomeCatering = () => {
  return (
    <section className="relative">
      <div>
        <MaxWidthWrapper className="py-12 md:py-36">
          <div className="space-y-4">
            <SubHeader>Crafting Your Culinary Story</SubHeader>
            <MainHeader>Premiere Catering</MainHeader>
            <ArrowBtn href="/">Reserve a Tasting Experience</ArrowBtn>
            <BodyText className="max-w-[55ch]">
              Savor the magic of your event with our exceptional in-house
              catering. We offer all the catering services you may need for your
              event. Our staff works directly with each client to tailor every
              detail.
            </BodyText>
          </div>
        </MaxWidthWrapper>
      </div>
      <div>
        <Image
          src="/catering-feat.jpg"
          alt=""
          height={700}
          width={620}
          className="right-0 top-0 -z-10 hidden object-cover md:absolute md:block"
        />
      </div>
      <SmallSlider />
    </section>
  );
};
