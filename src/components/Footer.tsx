import Image from "next/image";
import { FooterCTA } from "./FooterCTA";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
  return (
    <footer className="space-y-12 bg-[#07111F] md:space-y-28">
      <FooterCTA />
      <FooterLinks />
    </footer>
  );
};
