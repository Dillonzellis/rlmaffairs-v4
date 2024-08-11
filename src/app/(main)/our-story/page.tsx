import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { SubHeader } from "@/components/common/typography/SubHeader";

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
          <p className="max-w-[50rem]">
            RLM Affairs offers all the services you may need for your event. Our
            staff works directly with our clients to tailor each event to your
            specific needs. Whether you need just catering, or a complete event
            design, we will work with you as much as you need, or we will
            provide you with A la carte services based specifically on your
            needs and budget. Our award winning catering, wedding planning,
            cakes, and floral design are available every day, breakfast, lunch,
            dinner, or in between
          </p>
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
