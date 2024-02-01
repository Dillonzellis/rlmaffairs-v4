import Image from "next/image";
import { FooterCTA } from "./FooterCTA";

export const Footer = () => {
  return (
    <footer className="bg-[#07111F]">
      <FooterCTA />
      <div>Footer links</div>
      <div>
        <Image src="/footer-bg.png" alt="logo" width={1280} height={517} />
      </div>
    </footer>
  );
};
