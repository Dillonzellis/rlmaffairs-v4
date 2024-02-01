import Image from "next/image";
import { FooterCTA } from "./FooterCTA";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
  return (
    <footer className="bg-[#07111F]">
      <FooterCTA />
      <div>Footer links</div>
      <div className="relative">
        <Image src="/footer-bg.png" alt="logo" width={1280} height={517} />
        <div className="absolute bottom-4 text-white w-full">
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
};
