import { PageHero } from "@/components/common/PageHero";
import { CateringHashLinks } from "@/data/navLinks";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { SubHeader } from "@/components/common/typography/SubHeader";
import { BodyText } from "@/components/common/typography/BodyText";
import {
  appetizerMenu,
  mainCourseMenu,
  saladMenu,
  sideDishMenu,
} from "@/data/menus";
import appetizers from "/public/appetizers.png";
import { MenuSection } from "@/components/sections/catering/MenuSection";

export default function CateringPage() {
  return (
    <main className="min-h-dvh">
      <PageHero
        imgSrc="/hero-placeholder.jpg"
        imgAlt=""
        hashLinks={CateringHashLinks}
        link="#appetizers"
      />
      <section>
        <MaxWidthWrapper className="py-12">
          <div className="space-y-4">
            <div className="grid-cols-7 items-center md:flex">
              <div className="col-span-4 space-y-4">
                <SubHeader>Artistry in Every Petal</SubHeader>
                <MainHeader>Catering</MainHeader>
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
        <div className="hidden md:block">
          <BackgroundImage imageUrl="catering-page-1.jpg" />
        </div>
      </section>
      <section>
        <MenuSection
          id="appetizers"
          imgSrc={appetizers}
          imgAlt=""
          menuTitle="Hors D'oeuvres Stations"
          menuItems={appetizerMenu}
        />
        <MenuSection
          id="salads"
          imgSrc={appetizers}
          imgAlt=""
          menuTitle="Salad Selections"
          menuItems={saladMenu}
          rightVariant
        />
        <MenuSection
          id="main-course"
          imgSrc={appetizers}
          imgAlt=""
          menuTitle="Buffet Main Course Options"
          menuItems={mainCourseMenu}
        />
        <MenuSection
          id="side-dishes"
          imgSrc={appetizers}
          imgAlt=""
          menuTitle="Side Dishes"
          menuItems={sideDishMenu}
          rightVariant
        />
      </section>
    </main>
  );
}
