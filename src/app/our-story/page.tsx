import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { FAQAccordion } from "@/components/sections/our-story/FAQAccordion";

export default function OurStoryHome() {
  return (
    <main>
      <section>
        <div className="h-[350px] bg-[url('/package-feat-sm.jpg')] bg-cover bg-center">
          <MaxWidthWrapper className="flex h-full items-center">
            <MainHeader className="text-white">Our Story</MainHeader>
          </MaxWidthWrapper>
        </div>
      </section>
      <section className="py-12">
        <MaxWidthWrapper>
          <div>About Us</div>
        </MaxWidthWrapper>
      </section>
      <section className="py-12">
        <MaxWidthWrapper>
          <div>FAQ</div>
          <FAQAccordion />
        </MaxWidthWrapper>
      </section>
      <section className="py-12">
        <MaxWidthWrapper>
          <div>Contact</div>
        </MaxWidthWrapper>
      </section>
      <section className="py-12">
        <MaxWidthWrapper>
          <div>Google Maps</div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
