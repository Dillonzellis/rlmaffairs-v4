import Image from "next/image";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { BodyText } from "@/components/common/typography/BodyText";

export const HomeAbout = () => {
  return (
    <section>
      <div className="h-[350px] bg-[url('/package-feat-sm.jpg')] bg-cover bg-center">
        <MaxWidthWrapper className="flex h-full items-center">
          <MainHeader className="text-white">Our Story</MainHeader>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className="">
        <div className="flex flex-col items-center justify-center gap-12 py-8 md:flex-row">
          <Image
            src="/RLMAffairs_Logo_Gold_FNL.png"
            alt="RLM Affairs Logo"
            width={200}
            height={200}
          />
          <BodyText>
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
    </section>
  );
};
