import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import Link from "next/link";
import { footerNav } from "@/data/navLinks";
import { getYear } from "@/lib/getYear";

interface FooterLinkProps {
  label: string;
  href: string;
}

const FooterCol = ({ children }: { children: React.ReactNode }) => {
  return <ul className="space-y-3 text-center md:text-start">{children}</ul>;
};

const FooterLink = ({ label, href }: FooterLinkProps) => {
  return (
    <li className="transition-transform duration-200 hover:translate-x-1 hover:text-background/90">
      <Link href={href} className="text-2xl font-light md:text-3xl">
        {label}
      </Link>
    </li>
  );
};

export const FooterLinks = () => {
  return (
    <div className="bg-[url('/footer-bg.png')] bg-cover bg-no-repeat">
      <MaxWidthWrapper className="pb-4 text-background">
        <div className="pb-6 text-center font-serif text-5xl tracking-tighter md:text-start md:text-7xl">
          RLM Affairs
        </div>
        <div className="flex flex-col items-center gap-6 pb-16 md:flex-row md:items-baseline md:gap-20">
          {footerNav.map((col, idx) => (
            <FooterCol key={idx}>
              {col.linksCol.map((link) => (
                <FooterLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </FooterCol>
          ))}
        </div>
        <div className="flex justify-between">
          <small>&copy; {getYear()} RLM Affairs</small>
          <div className="flex gap-4">
            <small>
              <Link href="">Privacy Policy</Link>
            </small>
            <small>
              <Link href="">Terms of Service</Link>
            </small>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
