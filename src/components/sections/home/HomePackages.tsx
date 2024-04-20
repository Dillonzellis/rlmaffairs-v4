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
          "item-center inline-flex h-[21rem] cursor-pointer flex-col justify-center rounded-2xl border-b-[7px] px-8 py-4 font-serif text-9xl text-white transition-colors active:border-b-0",
          green
            ? "border-b-brandGreen-800 bg-brandGreen-400 hover:bg-brandGreen-300"
            : "border-b-brandGold-800 bg-brandGold-400 hover:bg-brandGold-300",
        )}
      >
        {children}
        <Icons.lgRightArrow className="" />
      </div>
    </Link>
  );
};

export const HomePackages = () => {
  return (
    <section>
      <MaxWidthWrapper className="py-12">
        <div className="flex flex-col justify-center gap-16 md:flex-row">
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
