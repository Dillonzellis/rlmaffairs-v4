import { awards } from "@/data/awards";
import Image from "next/image";

export const HomeAwards = () => {
  return (
    <div className="flex flex-col justify-center gap-8">
      <div className="mx-auto max-w-[1000px] text-center font-sans text-xl font-medium tracking-tighter md:text-3xl">
        Excellence in Service: Celebrating Our Prestigious Wedding Industry
        Awards
      </div>
      <div className="mx-auto flex max-w-[150px] flex-col items-center justify-center gap-2 md:max-w-full md:flex-row md:gap-8">
        {awards.map((award, idx) => (
          <Image
            key={idx}
            src={award.src}
            alt={award.alt}
            width={175}
            height={175}
          />
        ))}
      </div>
    </div>
  );
};
