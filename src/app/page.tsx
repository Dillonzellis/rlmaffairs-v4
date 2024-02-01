import { MoveRight } from "lucide-react";
import BackgroundImage from "@/components/BackgroundImage";
import { HeroNav } from "@/components/HeroNav";
import { HomeAwards } from "@/components/HomeAwards";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SmallSlider } from "@/components/SmallSlider";
import { BodyText } from "@/components/typography/BodyText";
import { MainHeader } from "@/components/typography/MainHeader";
import { SubHeader } from "@/components/typography/SubHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowBtn } from "@/components/ArrowBtn";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <section>
        <Image
          src="/hero-placeholder.jpg"
          alt=""
          height={834}
          width={1280}
          className="h-screen w-full object-cover"
        />
        <div className="fixed left-2.5 top-7 flex gap-4 md:left-7">
          <Image src="/hamburger.svg" alt="" width={45} height={20} />
          <div className="text-lg text-white">MENU</div>
        </div>
        <h1 className="absolute left-1/2 top-[10%] -translate-x-1/2 font-serif text-8xl font-semibold text-white">
          RLM
        </h1>
        <Image
          src="/down-arr.svg"
          alt=""
          width={20}
          height={55}
          className="absolute bottom-8 right-2.5 md:right-7"
        />
        <HeroNav />
      </section>
      <section>
        <MaxWidthWrapper className="py-12">
          <div className="space-y-4">
            <SubHeader>Venue & Event Space</SubHeader>
            <MainHeader>Venue & Event Space</MainHeader>
            <ArrowBtn href="/">Schedule a Tour</ArrowBtn>
          </div>
          <BodyText className="ml-auto max-w-prose">
            RLM is an all inclusive wedding and event venue. Offering amazing
            pricing, full catering services, beautiful florals and coordination.
            We are committed to always bringing a comfortable and luxuriously
            tailored gathering space together for sharing in life&apos;s
            celebrations.
          </BodyText>
        </MaxWidthWrapper>
        <BackgroundImage imageUrl="/venue-feat.jpg" />
      </section>
      <section>
        <MaxWidthWrapper className="py-12">
          <div className="space-y-4">
            <div className="grid-cols-7 md:grid">
              <div className="col-span-4 space-y-4">
                <SubHeader>Venue & Event Space</SubHeader>
                <MainHeader>Floral Designs</MainHeader>
                <ArrowBtn href="/">Schedule a Tour</ArrowBtn>
              </div>
              <BodyText className="col-span-3 ml-auto max-w-prose">
                RLM Affairs award winning designers offer exquisite attention to
                detail. Whether it’s a single rose or decor for an entire Gala
                every bloom is hand picked. We have had many different
                influences in the floral industry, affording us the opportunity
                to always create something unique.
              </BodyText>
            </div>
          </div>
        </MaxWidthWrapper>
        <BackgroundImage imageUrl="/floral-feat.jpg" />
      </section>
      <section className="relative">
        <div>
          <MaxWidthWrapper className="py-12 md:py-16">
            <div className="space-y-4">
              <SubHeader>Venue & Event Space</SubHeader>
              <MainHeader>Premiere Catering</MainHeader>
              <ArrowBtn href="/">Schedule a Tour</ArrowBtn>
              <BodyText className="max-w-[55ch]">
                Savor the magic of your event with our exceptional in-house
                catering. We offer all the catering services you may need for
                your event. Our staff works directly with each client to tailor
                every detail.
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
            className="right-0 top-0 -z-10 hidden object-cover md:absolute md:block"
          />
        </div>
        <SmallSlider />
      </section>
      <section>
        <div className="grid-cols-6 gap-6 md:grid">
          <Image
            src="/love-letters.jpg"
            alt=""
            height={758}
            width={423}
            className="col-span-2 max-h-72 object-cover object-[0_12%] md:max-h-[800px]"
          />
          <div className="col-span-4 py-12">
            <MaxWidthWrapper>
              <div className="space-y-4">
                <SubHeader>Share Your Love Story</SubHeader>
                <MainHeader>Love Letters</MainHeader>
                <BodyText>
                  We invite you to contribute to our Love Letters, a heartfelt
                  space where brides and cherished guests can pen down their
                  experiences and memories from your special day. Your words are
                  a testament to the magic that unfolds within our walls.
                  Whether you&apos;re a bride reminiscing about your dream
                  wedding or a guest touched by the love in the air, we&apos;d
                  be honored to feature your unique tale in our gallery of
                  cherished moments. Let your love story inspire others and
                  become a part of the lasting legacy of joy and celebration at
                  RLM Affairs
                </BodyText>
              </div>
            </MaxWidthWrapper>
          </div>
        </div>
      </section>
      {/* <section className="py-12"> */}
      {/*   <HomeAwards /> */}
      {/* </section> */}
    </main>
  );
}
