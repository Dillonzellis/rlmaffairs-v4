import Image from "next/image";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

export const FooterCTA = () => {
  return (
    <div className="bg-[#07111F]">
      <Image src="/footer-cta.jpg" alt="footer cta" width={1920} height={647} />
      <div className="mx-auto text-white md:-mt-24">
        <MaxWidthWrapper>
          <div className="mx-auto max-w-[1000px] pb-4 text-center font-serif text-5xl font-medium tracking-tight md:text-6xl md:tracking-tighter">
            Create Your Perfect Day with Our All-Inclusive Wedding Packages.
          </div>
          <div className="mx-auto max-w-2xl pb-4 text-center text-2xl font-light md:text-4xl">
            Packages start at $4,100 with flexible payment plans available.
          </div>
          <div className="flex justify-center pb-6">
            <Button>Book A Tour!</Button>
          </div>
          <div className="flex flex-col items-center">
            <small>Not finding what you&apos;re looking for?</small>
            <small>Tell us about your dream wedding</small>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};
