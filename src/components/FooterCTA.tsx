import Image from "next/image";
import { Button } from "./ui/button";

export const FooterCTA = () => {
  return (
    <div className="bg-[#07111F]">
      <Image src="/footer-cta.jpg" alt="footer cta" width={1920} height={647} />
      <div className="text-white -mt-24">
        <div className="text-center pb-4 font-serif font-medium max-w-[1000px] mx-auto tracking-tighter text-6xl">
          Create Your Perfect Day with Our All-Inclusive Wedding Packages.
        </div>
        <div className="font-light text-4xl pb-4 text-center max-w-2xl mx-auto">
          Packages start at $4,100 with flexible payment plans available.
        </div>
        <div className="flex justify-center pb-6">
          <Button>Book A Tour!</Button>
        </div>
        <div className="flex flex-col items-center">
          <small>Not finding what you&apos;re looking for?</small>
          <small>Tell us about your dream wedding</small>
        </div>
      </div>
    </div>
  );
};
