import Image from "next/image";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { SubHeader } from "@/components/common/typography/SubHeader";
import { ArrowBtn } from "@/components/common/ArrowBtn";
import { BodyText } from "@/components/common/typography/BodyText";
import { SmallSlider } from "@/components/common/SmallSlider";

export const HomeCatering = () => {
  return (
    <section id="catering" className="relative">
      <div>
        <MaxWidthWrapper className="py-12 md:py-36">
          <div className="space-y-4">
            <SubHeader>Crafting Your Culinary Story</SubHeader>
            <MainHeader>Premiere Catering</MainHeader>
            <ArrowBtn href="/catering">Catering Menu</ArrowBtn>
            <BodyText>
              RLM Affairs is a stunning wedding and event venue that offers
              gorgeous indoor and outdoor areas, rustic-luxe details, with an
              in-house, gourmet chef to oversee the most stunning menu options
              and unparalleled client services. This Beautiful Garden Wedding
              Ceremony venue in the foothills of North Georgia, offers local
              cuisine and seasonal favorites year round.
            </BodyText>
          </div>
        </MaxWidthWrapper>
      </div>
      <div>
        <Image
          src="/home-catering-feat.jpg"
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
