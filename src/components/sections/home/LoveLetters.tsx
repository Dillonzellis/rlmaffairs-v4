import Image from "next/image";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { SubHeader } from "@/components/common/typography/SubHeader";
import { BodyText } from "@/components/common/typography/BodyText";
import { Letters } from "@/components/common/Letters";

export const LoveLetters = () => {
  return (
    <section id="love-letters" className="pb-8 md:pb-80">
      <div className="grid-cols-6 gap-6 md:grid">
        <Image
          // src="/love-letters.jpg"
          src="/love-note-feat.jpg"
          alt=""
          height={758}
          width={423}
          className="col-span-2 max-h-72 object-cover object-[0_12%] md:max-h-[800px]"
        />
        <div className="col-span-4 pb-12 pt-12 md:pb-36">
          <MaxWidthWrapper>
            <div className="space-y-4">
              <SubHeader>Share Your Love Story</SubHeader>
              <MainHeader>Love Letters</MainHeader>
              <BodyText>
                We invite you to contribute to our Love Letters, a heartfelt
                space where brides and cherished guests can pen down their
                experiences and memories from your special day. Your words are a
                testament to the magic that unfolds within our walls. Whether
                you&apos;re a bride reminiscing about your dream wedding or a
                guest touched by the love in the air, we&apos;d be honored to
                feature your unique tale in our gallery of cherished moments.
                Let your love story inspire others and become a part of the
                lasting legacy of joy and celebration at RLM Affairs
              </BodyText>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
      <MaxWidthWrapper>
        <div className="relative">
          <div className="-top-[16rem] w-full md:absolute">
            <Letters />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
