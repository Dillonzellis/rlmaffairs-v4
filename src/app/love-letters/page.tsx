import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { testimonials, TypeTestimonial } from "@/data/testimonials";

const TestimonialCard = ({
  name,
  title,
  quote,
  details,
  bgColor,
  textColor,
  gridArea,
}: TypeTestimonial) => (
  <div
    className={cn("rounded-xl px-6 py-3 shadow-lg", bgColor, textColor)}
    style={{ gridArea: gridArea }}
  >
    <div className="flex items-center gap-4 pb-4">
      <Image
        src=""
        alt="Reviewer Name"
        className="rounded-full border-2"
        width={45}
        height={45}
      />
      <div className="space-y-1-">
        <h3 className="font-inter text-sm font-bold">{name}</h3>
        <p className="text-sm opacity-75">{title}</p>
      </div>
    </div>
    <p className="pb-4 font-inter text-lg font-bold">{quote}</p>
    <p className="text-sm italic">"{details}"</p>
  </div>
);

const Testimonials = () => (
  <div className="review-grid-area md:review-grid-area-md lg:review-grid-area-lg grid gap-6 p-4">
    {testimonials.map((testimonial, index) => (
      <TestimonialCard key={index} {...testimonial} />
    ))}
  </div>
);

export default function LoveLettersHome() {
  return (
    <main className="bg-zinc-100">
      <section>
        <div className="h-[350px] bg-[url('/package-feat-sm.jpg')] bg-cover bg-center">
          <MaxWidthWrapper className="flex h-full items-center">
            <MainHeader className="text-white">Love Letters</MainHeader>
          </MaxWidthWrapper>
        </div>
      </section>
      <section className="py-12 md:px-20">
        <Testimonials />
      </section>
    </main>
  );
}
