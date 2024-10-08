import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import Link from "next/link";
import { footerNav } from "@/data/navLinks";
import { getYear } from "@/lib/getYear";
import { HomeAwards } from "@/components/common/HomeAwards";

interface FooterLinkProps {
  label: string;
  href: string;
  target?: string;
}

const FooterCol = ({ children }: { children: React.ReactNode }) => {
  return <ul className="space-y-3 text-center md:text-start">{children}</ul>;
};

const FooterLink = ({ label, href, target }: FooterLinkProps) => {
  return (
    <li className="transition-transform duration-200 hover:translate-x-1 hover:text-background/90">
      {target ? (
        <a
          href={href}
          target={target}
          className="text-2xl font-light md:text-xl"
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {label}
        </a>
      ) : (
        <Link href={href} className="text-2xl font-light md:text-xl">
          {label}
        </Link>
      )}
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
                  target={(link as { target?: string }).target}
                />
              ))}
            </FooterCol>
          ))}
          <div>
            <HomeAwards />
          </div>
        </div>
        <div className="flex justify-between">
          <small>&copy; {getYear()} RLM Affairs</small>
          <div className="flex gap-4">
            <small>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </small>
            <small>
              <Link href="/terms-of-service">Terms of Service</Link>
            </small>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
