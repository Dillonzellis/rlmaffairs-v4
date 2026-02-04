import { awards } from "@/data/awards";
import Image from "next/image";

export const HomeAwards = () => {
  return (
    <div className="flex flex-col justify-center gap-8">
      <div className="mx-auto max-w-[1000px] text-center font-sans text-xl font-medium tracking-tighter md:text-3xl">
        Excellence in Service: Celebrating Our Prestigious Wedding Industry
        Awards
      </div>
      <div className="mx-auto flex max-w-[100px] flex-col items-center justify-center gap-4 md:flex-row md:gap-5 lg:max-w-full">
        {awards.map((award, idx) => (
          <div key={idx}>
            <a
              href="https://www.theknot.com/marketplace/rlm-affairs-estate-room-and-gardens-wysteria-room-gainesville-ga-2014225"
              target="_blank"
            >
              <img src={award.src} alt={award.alt} width={125} height={125} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
