import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { BodyText } from "@/components/common/typography/BodyText";
import { SubHeader } from "@/components/common/typography/SubHeader";

export const HomeAbout = () => {
  return (
    <section>
      <MaxWidthWrapper className="">
        <div className="flex flex-col gap-4 py-12">
          <MainHeader size="medium">RLM Affairs Wedding Venue</MainHeader>
          <BodyText className="">
            RLM Affairs offers all the services you may need for your event. Our
            staff works directly with our clients to tailor each event to your
            specific needs. Whether you need just catering, or a complete event
            design, we will work with you as much as you need, or we will
            provide you with A la carte services based specifically on your
            needs and budget. Our award winning catering, wedding planning,
            cakes, and floral design are available every day, breakfast, lunch,
            dinner, or in between.
          </BodyText>
        </div>
      </MaxWidthWrapper>

      <div className="h-[350px] bg-[url('/home-story-hero.jpg')] bg-cover bg-[2rem]"></div>
    </section>
  );
};
