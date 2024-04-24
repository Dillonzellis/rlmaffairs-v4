import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { PageLetter } from "@/components/sections/love-letters/PageLetter";
import { reviews } from "@/data/reviews";

export default function LoveLettersHome() {
  return (
    <main>
      <section>
        <div className="h-[350px] bg-[url('/package-feat-sm.jpg')] bg-cover bg-center">
          <MaxWidthWrapper className="flex h-full items-center">
            <MainHeader className="text-white">Love Letters</MainHeader>
          </MaxWidthWrapper>
        </div>
      </section>
      <section className="py-12">
        <MaxWidthWrapper>
          <div className="flex flex-wrap justify-center gap-8">
            {reviews.map((review, index) => (
              <PageLetter {...review} key={index} />
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
