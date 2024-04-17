import { PageHero } from "@/components/common/PageHero";
import { CateringHashLinks } from "@/data/navLinks";
import { ArrowBtn } from "@/components/common/ArrowBtn";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { SubHeader } from "@/components/common/typography/SubHeader";
import { BodyText } from "@/components/common/typography/BodyText";
import { appetizerMenu } from "@/data/menus";
import Image from "next/image";
import appetizers from "/public/appetizers.png";

export default function CateringPage() {
  return (
    <main className="min-h-dvh">
      <PageHero
        imgSrc="/hero-placeholder.jpg"
        imgAlt=""
        hashLinks={CateringHashLinks}
      />
      <section>
        <MaxWidthWrapper className="py-12">
          <div className="space-y-4">
            <div className="grid-cols-7 items-center md:flex">
              <div className="col-span-4 space-y-4">
                <SubHeader>Artistry in Every Petal</SubHeader>
                <MainHeader>Catering</MainHeader>
                <ArrowBtn href="/">See Our Menu</ArrowBtn>
              </div>
              <BodyText className="col-span-3 ml-auto max-w-prose">
                RLM Affairs offers all the services you may need for your event.
                Our staff works directly with our clients to tailor each event
                to your specific needs. Whether you need just catering, or a
                complete event design, we will work with you as much as you
                need, or we will provide you with A la carte services based
                specifically on your needs and budget. Our award winning
                catering, wedding planning, cakes, and floral design are
                available every day, breakfast, lunch, dinner, or in between.
              </BodyText>
            </div>
          </div>
        </MaxWidthWrapper>
        <BackgroundImage imageUrl="/floral-feat.jpg" />
      </section>
      <section>
        <div className="flex gap-8">
          <div>
            <Image src={appetizers} alt="Catering Image" />
          </div>
          <div>
            <MaxWidthWrapper className="py-12">
              <MainHeader size="medium">Hors D'oeuvres Stations</MainHeader>
              <hr />
              {appetizerMenu.map((item) => (
                <div key={item.name} className="flex justify-between py-2">
                  <div className="flex items-center gap-2">
                    <div className="text-lg font-bold">{item.name}:</div>
                    <div>{item.description}</div>
                  </div>
                </div>
              ))}
            </MaxWidthWrapper>
          </div>
        </div>
      </section>
    </main>
  );
}
