import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { BodyText } from "@/components/common/typography/BodyText";
import { SubHeader } from "@/components/common/typography/SubHeader";

export const HomeAbout = () => {
  return (
    <section id="about" className="scroll-mt-[4.25rem]">
      <MaxWidthWrapper className="">
        <div className="flex flex-col gap-4 py-12">
          <SubHeader>North Georgia | Gainesville, GA</SubHeader>
          <MainHeader as="h1" size="medium">
            RLM Affairs Wedding Venue
          </MainHeader>
          <div className="flex flex-col gap-2">
            <BodyText>
              RLM Affairs offers all the services you may need for your event.
              Our staff works directly with our clients to tailor each event to
              your specific needs. Whether you need just catering, or a complete
              event design, we will work with you as much as you need, or we
              will provide you with A la carte services based specifically on
              your needs and budget. Our award winning catering, wedding
              planning, cakes, and floral design are available every day,
              breakfast, lunch, dinner, or in between.
            </BodyText>
            <BodyText>
              RLM Affairs, is located in the quintessentially charming town of
              Oakwood, Georgia, 40 minutes north of Atlanta. Host your wedding
              or event at RLM Affairs and you and your guests will create
              memories to last a lifetime.
            </BodyText>
            <BodyText>
              With our romantic allure, this backdrop sets the stage for your
              wedding ceremony &amp; reception, rehearsal, cocktail hour, indoor
              &amp; outdoor celebration, quinceañera, company party, birthday
              celebration, anniversary party, or a beautiful photoshoot.
            </BodyText>
          </div>
        </div>
      </MaxWidthWrapper>

      <div className="h-[350px] bg-[url('/home-story-hero.jpg')] bg-cover bg-[2rem]"></div>
    </section>
  );
};
