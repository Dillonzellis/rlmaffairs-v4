import { BackgroundImage } from "@/components/common/BackgroundImage";
import { Icons } from "@/components/common/Icons";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import Link from "next/link";

type PackageBtnProps = {
  href: string;
  children: React.ReactNode;
  green?: boolean;
};

const PackageBtn = ({ href, children, green }: PackageBtnProps) => {
  return (
    <Link href={href} className="max-w-xl">
      <div
        className={cn(
          "item-center inline-flex cursor-pointer flex-col justify-center rounded-2xl border-b-[7px] px-6 pb-3 pt-4 text-center font-serif text-3xl text-white transition-colors active:border-b-0 active:pt-3 md:h-[21rem] md:px-8 md:py-4 md:text-7xl lg:text-8xl",
          green
            ? "border-b-brandGreen-800 bg-brandGreen-400 hover:bg-brandGreen-300"
            : "border-b-brandGold-800 bg-brandGold-400 hover:bg-brandGold-300",
        )}
      >
        {children}
        <Icons.lgRightArrow className="hidden md:w-[10.5rem]" />
      </div>
    </Link>
  );
};

export const HomePackages = () => {
  return (
    <section>
      <MaxWidthWrapper className="py-12">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-16">
          <PackageBtn href="/wedding-packages">Wedding Packages</PackageBtn>
          <PackageBtn href="/event-packages" green>
            Event Packages
          </PackageBtn>
        </div>
      </MaxWidthWrapper>
      <BackgroundImage imageUrl="venue-1.jpg" />
    </section>
  );
};
