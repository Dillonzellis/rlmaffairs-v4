import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

interface ArrowBtnProps {
  children: React.ReactNode;
  href: string;
}

export const ArrowBtn = ({ href, children }: ArrowBtnProps) => {
  return (
    <div className="flex items-center gap-4 pb-8 md:gap-8 md:pb-0">
      <Image
        src="/right-arr.svg"
        alt=""
        width={58}
        height={20}
        className="h-3.5 w-10 md:h-5 md:w-14"
      />
      <Button
        asChild
        variant="link"
        size="none"
        fontSize="lg"
        className="font-light"
      >
        <Link href={href}>{children}</Link>
      </Button>
    </div>
  );
};
