import BackgroundImage from "@/components/BackgroundImage";
import { HeroNav } from "@/components/HeroNav";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SmallSlider } from "@/components/SmallSlider";
import { BodyText } from "@/components/typography/BodyText";
import { MainHeader } from "@/components/typography/MainHeader";
import { SubHeader } from "@/components/typography/SubHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section>
        <Image
          src="/hero-placeholder.jpg"
          alt=""
          height={834}
          width={1280}
          className="h-screen object-cover w-full"
        />
        <div className="top-7 left-7 flex gap-4 fixed">
          <Image src="/hamburger.svg" alt="" width={45} height={20} />
          <div className="text-white text-lg">MENU</div>
        </div>
        <h1 className="font-serif absolute left-1/2 top-[10%] text-8xl text-white font-semibold -translate-x-1/2">
          RLM
        </h1>
        <Image
          src="/down-arr.svg"
          alt=""
          width={20}
          height={55}
          className="absolute bottom-8 right-7"
        />
        <HeroNav />
      </section>
      <section>
        <MaxWidthWrapper className="py-12">
          <div className="space-y-4">
            <SubHeader>Venue & Event Space</SubHeader>
            <MainHeader>Venue & Event Space</MainHeader>

            <div className="flex gap-8">
              <Image src="/right-arr.svg" alt="" width={58} height={20} />
              <Button asChild variant="link" size="none" fontSize="lg">
                <Link href="/">Schedule a Tour</Link>
              </Button>
            </div>
          </div>
          <BodyText className="max-w-prose ml-auto">
            Rlm is an all inclusive wedding and event venue. We believe in
            stress-free events. Always bringing a comfortable and luxuriously
            tailored gathering space together for sharing in life's
            celebrations. Our goal is to elegantly bring your vision to life. As
            we plan, design and fully execute beautiful event. Focus on your
            celebration of love. We’ll handle all the important details. You
            deserve to radiate confidence on one of the most important days of
            your life.
          </BodyText>
        </MaxWidthWrapper>
      </section>
      <section>
        <BackgroundImage imageUrl="/venue-feat.jpg" />
      </section>
      <section>
        <MaxWidthWrapper className="py-12">
          <div className="space-y-4">
            <div className="grid grid-cols-7">
              <div className="space-y-4 col-span-4">
                <SubHeader>Venue & Event Space</SubHeader>
                <MainHeader>Floral Designs</MainHeader>

                <div className="flex gap-8">
                  <Image src="/right-arr.svg" alt="" width={58} height={20} />
                  <Button asChild variant="link" size="none" fontSize="lg">
                    <Link href="/">Schedule a Tour</Link>
                  </Button>
                </div>
              </div>

              <BodyText className="max-w-prose ml-auto col-span-3">
                Rlm is an all inclusive wedding and event venue. We believe in
                stress-free events. Always bringing a comfortable and
                luxuriously tailored gathering space together for sharing in
                life's celebrations. Our goal is to elegantly bring your vision
                to life. As we plan, design and fully execute beautiful event.
                Focus on your celebration of love. We’ll handle all the
                important details. You deserve to radiate confidence on one of
                the most important days of your life.
              </BodyText>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <BackgroundImage imageUrl="/floral-feat.jpg" />
      </section>
      <section className="relative">
        <div>
          <MaxWidthWrapper className="py-16">
            <div className="space-y-4">
              <SubHeader>Venue & Event Space</SubHeader>
              <MainHeader>Premiere Catering</MainHeader>
              <div className="flex gap-8 pb-16">
                <Image src="/right-arr.svg" alt="" width={58} height={20} />
                <Button asChild variant="link" size="none" fontSize="lg">
                  <Link href="/">Schedule a Tour</Link>
                </Button>
              </div>
              <BodyText className="max-w-[55ch]">
                Savor the magic of your wedding day with our exceptional
                in-house catering. Our culinary experts have curate a menu that
                combines exquisite flavors from the first bite to the last, our
                catering promises to be a delightful journey for your taste
                buds. Let the celebration be as delicious as your love, making
                every moment a flavorful memory. Indulge in a feast that
                reflects the joy of your union, creating a culinary experience
                that is as unique as your love story
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
            className="absolute right-0 top-0 -z-10 object-cover"
          />
        </div>
        <SmallSlider />
      </section>
      <section>
        <div className="grid grid-cols-6 gap-6">
          <Image
            src="/love-letters.jpg"
            alt=""
            height={758}
            width={423}
            className="col-span-2"
          />
          <div className="col-span-4 px-8 py-12">
            <div className="space-y-4">
              <SubHeader>Share Your Love Story</SubHeader>
              <MainHeader>Love Letters</MainHeader>
              <BodyText>
                We invite you to contribute to our Love Letters, a heartfelt
                space where brides and cherished guests can pen down their
                experiences and memories from your special day. Your words are a
                testament to the magic that unfolds within our walls. Whether
                you're a bride reminiscing about your dream wedding or a guest
                touched by the love in the air, we'd be honored to feature your
                unique tale in our gallery of cherished moments. Let your love
                story inspire others and become a part of the lasting legacy of
                joy and celebration at RLM Affairs
              </BodyText>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
