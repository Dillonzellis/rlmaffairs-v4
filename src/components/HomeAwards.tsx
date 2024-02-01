import { awards } from "@/data/awards";
import Image from "next/image";

export const HomeAwards = () => {
  return (
    <div className="flex flex-col justify-center gap-8">
      <div className="mx-auto max-w-[1000px] text-center font-serif font-medium tracking-tighter md:text-6xl">
        Excellence in Service: Celebrating Our Prestigious Wedding Industry
        Awards
      </div>
      <div className="flex justify-center gap-8">
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
