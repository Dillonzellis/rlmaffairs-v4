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
              <ArrowBtn targetBlank href="https://rlmflorist.com/">
                RLM Florist
              </ArrowBtn>
            </div>
            <div className="col-span-3 ml-auto max-w-prose space-y-2">
              <BodyText>
                Our award winning designers at RLM Affairs Wedding Venue offer
                exquisite attention to detail. Whether it&#39;s a bridal
                bouquet, corsage, boutonniere, stunning floral backdrops, or
                décor for an entire Gala, every bloom is hand picked to fit
                every budget. RLM Affairs Wedding Packages all include beautiful
                flowers in every All-Inclusive Wedding Packages.
              </BodyText>
              <BodyText>
                RLM Affairs Event Venue backdrop sets the stage for your wedding
                ceremony &amp; reception, rehearsal, cocktail hour, indoor &amp;
                outdoor celebration, quinceañera, company party, birthday
                celebration, anniversary party or a beautiful photoshoot.
              </BodyText>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <BackgroundImage imageUrl="/floral-1.jpg" />
    </section>
  );
};
