import { awards } from "@/data/awards";
import Image from "next/image";

export const HomeAwards = () => {
  return (
    <div className="flex flex-col justify-center gap-8">
      <div className="mx-auto max-w-[1000px] text-center font-sans text-xl font-medium tracking-tighter md:text-3xl">
        Excellence in Service: Celebrating Our Prestigious Wedding Industry
        Awards
      </div>
      <div className="mx-auto flex max-w-[100px] flex-col items-center justify-center gap-4 md:flex-row md:gap-8 lg:max-w-full">
        {awards.map((award, idx) => (
          <Image
            key={idx}
            src={award.src}
            alt={award.alt}
            width={150}
            height={150}
          />
        ))}
      </div>
    </div>
  );
};
