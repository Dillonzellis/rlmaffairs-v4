import { ArrowBtn } from "@/components/common/ArrowBtn";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { SubHeader } from "@/components/common/typography/SubHeader";
import { BodyText } from "@/components/common/typography/BodyText";

export const HomeFloral = () => {
  return (
    <section id="florals">
      <MaxWidthWrapper className="py-12">
        <div className="space-y-4">
          <div className="grid-cols-7 items-center md:grid">
            <div className="col-span-4 space-y-4">
              <SubHeader>Artistry in Every Petal</SubHeader>
              <MainHeader>Floral Designs</MainHeader>
              <ArrowBtn href="/">Connect with Our Designers</ArrowBtn>
            </div>
            <BodyText className="col-span-3 ml-auto max-w-prose">
              RLM Affairs award winning designers offer exquisite attention to
              detail. Whether it’s a single rose or decor for an entire Gala
              every bloom is hand picked. We have had many different influences
              in the floral industry, affording us the opportunity to always
              create something unique.
            </BodyText>
          </div>
        </div>
      </MaxWidthWrapper>
      <BackgroundImage imageUrl="/floral-feat.jpg" />
    </section>
  );
};
