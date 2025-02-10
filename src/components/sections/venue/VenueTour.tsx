import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { SubHeader } from "@/components/common/typography/SubHeader";

export const VenueTour = () => {
  return (
    <>
      <section id="tour" className="scroll-mt-[4.25rem]">
        <MaxWidthWrapper className="py-12">
          <MainHeader>Virtual Tour</MainHeader>
        </MaxWidthWrapper>
        <MaxWidthWrapper>
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/4Umn9ClORJc?si=bfSqBGJywYrPABH9"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};
