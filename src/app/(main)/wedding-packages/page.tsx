import { MainHeader } from "@/components/common/typography/MainHeader";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { Package } from "@/components/sections/packages/Package";
import { weddingPackages, smallWeddingPackages } from "@/data/packages";
import { SmallPackage } from "@/components/sections/packages/SmallPackage";
import { Button } from "@/components/common/ui/button";
import Link from "next/link";
import { PackageDisclaimer } from "@/components/sections/packages/PackageDisclaimer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Packages",
};

export default function WeddingPackagePage() {
  return (
    <main>
      <section>
        <div className="h-[350px] bg-[url('/wedding-hero.jpg')] bg-cover bg-center">
          <MaxWidthWrapper className="flex h-full items-center">
            <MainHeader className="header-text-shadow text-white">
              Wedding Packages
            </MainHeader>
          </MaxWidthWrapper>
        </div>
      </section>
      <section className="py-12">
        <MaxWidthWrapper>
          <div className="flex flex-col gap-12 pb-12">
            {weddingPackages.map((pkg, i) => (
              <Package key={i} {...pkg} />
            ))}
          </div>
          <div className="flex flex-col gap-8 md:flex-row">
            {smallWeddingPackages.map((pkg, i) => (
              <SmallPackage key={i} {...pkg} />
            ))}
          </div>
          <PackageDisclaimer />
          <Button
            variant="outline"
            size="lg"
            asChild
            className="mt-12 text-base"
          >
            <Link href="/vendors">Our Preferred Vendors</Link>
          </Button>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
