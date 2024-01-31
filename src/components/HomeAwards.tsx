import { awards } from "@/data/awards";
import Image from "next/image";

export const HomeAwards = () => {
  return (
    <div className="flex justify-center flex-col gap-8">
      <div className="text-center font-serif font-medium max-w-[1000px] mx-auto tracking-tighter text-6xl">
        Excellence in Service: Celebrating Our Prestigious Wedding Industry
        Awards
      </div>
      <div className="flex gap-8 justify-center">
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
