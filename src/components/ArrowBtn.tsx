import { Button } from "./ui/button";
import Link from "next/link";

interface ArrowBtnProps {
  children: React.ReactNode;
  href: string;
}

export const ArrowBtn = ({ href, children }: ArrowBtnProps) => {
  return (
    <Button
      asChild
      variant="link"
      size="none"
      fontSize="lg"
      className="font-light"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};
