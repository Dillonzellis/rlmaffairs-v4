import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

const footerNav = [
  {
    linksCol: [
      { label: "Venue", href: "/venue" },
      { label: "Florals", href: "/florals" },
      { label: "Love Letters", href: "/event-planning" },
      { label: "Our Story", href: "/our-story" },
    ],
  },
  {
    linksCol: [
      { label: "Catering Menu", href: "/venue" },
      { label: "Floor Plan", href: "/florals" },
      { label: "FAQ", href: "/event-planning" },
    ],
  },
  {
    linksCol: [
      { label: "Instagram", href: "/venue" },
      { label: "Facebook", href: "/event-planning" },
      { label: "The Knot", href: "/our-story" },
    ],
  },
];

interface FooterLinkProps {
  label: string;
  href: string;
}

const FooterCol = ({ children }: { children: React.ReactNode }) => {
  return <ul className="space-y-3">{children}</ul>;
};

const FooterLink = ({ label, href }: FooterLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        className="hover:underline underline-offset-4 text-3xl font-light"
      >
        {label}
      </Link>
    </li>
  );
};

export const FooterLinks = () => {
  return (
    <MaxWidthWrapper>
      <div className="font-serif text-7xl tracking-tighter pb-12">
        RLM Affairs
      </div>
      <div className="flex gap-20 pb-16">
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
        <small>&copy; 2023 RLM Affairs</small>
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
  );
};
