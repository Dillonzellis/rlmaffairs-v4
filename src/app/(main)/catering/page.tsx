import { BackgroundImage } from "@/components/common/BackgroundImage";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { PageHero } from "@/components/common/PageHero";
import { BodyText } from "@/components/common/typography/BodyText";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { SubHeader } from "@/components/common/typography/SubHeader";
import { MenuSection } from "@/components/sections/catering/MenuSection";
import {
  appetizerMenu,
  mainCourseMenu,
  saladMenu,
  sideDishMenu,
} from "@/data/menus";
import { CateringHashLinks } from "@/data/navLinks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering",
};

export default function CateringPage() {
  return (
    <main className="min-h-dvh">
      <PageHero
        imgSrc="/catering-page-hero.jpg"
        imgAlt=""
        hashLinks={CateringHashLinks}
        link="#appetizers"
      />
      <section>
        <MaxWidthWrapper className="py-12">
          <div className="space-y-4">
            <div className="grid-cols-7 items-center gap-8 md:flex">
              <div className="col-span-4 space-y-4">
                <SubHeader>Artistry in Every Petal</SubHeader>
                <MainHeader>Catering</MainHeader>
              </div>
              <BodyText className="col-span-3 md:ml-auto md:max-w-prose">
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
        <div className="hidden md:block">
          <BackgroundImage imageUrl="catering-page-1.jpg" />
        </div>
      </section>
      <section className="py-8 text-center">
        <MaxWidthWrapper className="border-l border-r">
          <MenuSection
            id="appetizers"
            menuTitle="Hors D'oeuvres Stations"
            menuItems={appetizerMenu}
          />
          <MenuSection
            id="salads"
            menuTitle="Salad Selections"
            menuItems={saladMenu}
          />
          <MenuSection
            id="main-course"
            menuTitle="Buffet Main Course Options"
            menuItems={mainCourseMenu}
          />
          <MenuSection
            id="side-dishes"
            menuTitle="Side Dishes"
            menuItems={sideDishMenu}
          />
          <div className="pt-8">
            *All red meat and seafood are upgrades with any package*
          </div>
          <div>
            *Menu availability and pricing subject to change without notice*
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
