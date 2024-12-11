import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { SubHeader } from "@/components/common/typography/SubHeader";
import { ArrowBtn } from "@/components/common/ArrowBtn";
import { BackgroundImage } from "@/components/common/BackgroundImage";
import { BodyText } from "@/components/common/typography/BodyText";

export const HomeVenue = () => {
  return (
    <section id="venue" className="scroll-mt-[4.25rem]">
      <MaxWidthWrapper className="py-12">
        <div className="space-y-4">
          <SubHeader>All-inclusive wedding venue</SubHeader>
          <MainHeader>Venue Gallery</MainHeader>
          <ArrowBtn href="venue-&-event-space">View Gallery</ArrowBtn>
          <div className="flex flex-col gap-2">
            <BodyText>
              Choose RLM Affairs to host your dream wedding or event. Our
              Elegant Spaces for Your Unforgettable Moments are at the heart of
              our Wedding venue, a breathtaking space that exudes elegance and
              charm. With its thoughtfully curated interior design, with our one
              of a kind garden-ceiling decor, elegant fireplace, and twinkle
              light lit romantic views this stunning wedding venue delivers a
              lasting impression. Always at an affordable price.
            </BodyText>
            <BodyText>
              Every detail has been meticulously crafted, from the customizable
              lighting, full venue sound system, Donut Wall &amp; Victorian
              Donut Ladder, Custom Built Catering Station, Exquisite circular
              silver leafed Bar, fully chilled Champagne Wall with flutes and
              Cocktail Room, live digital Photo Wall, covered Outdoor Ceremony
              Space with sound system, Vintage estate Tables &amp; Chairs,
              Private Dressing Rooms with separate entrance and our custom Dance
              Floor with accent lighting. This magnificent rustic luxe venue can
              host an intimate event of 25 up to 100 guests comfortably ensuring
              an unforgettable experience for all.
            </BodyText>
          </div>
        </div>
      </MaxWidthWrapper>
      <BackgroundImage imageUrl="/home-venue-hero.jpg" />
    </section>
  );
};
