import { MainHeader } from "@/components/common/typography/MainHeader";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { Package } from "@/components/sections/packages/Package";
import { eventPackages, smallEventPackages } from "@/data/packages";
import { SmallPackage } from "@/components/sections/packages/SmallPackage";
import { Button } from "@/components/common/ui/button";
import Link from "next/link";
import { PackageDisclaimer } from "@/components/sections/packages/PackageDisclaimer";

export default function EventPackagePage() {
  return (
    <main>
      <section>
        <div className="h-[350px] bg-[url('/event-hero.jpg')] bg-cover bg-center">
          <MaxWidthWrapper className="flex h-full items-center">
            <MainHeader className="header-text-shadow text-white">
              Event Packages
            </MainHeader>
          </MaxWidthWrapper>
        </div>
      </section>
      <section className="py-12">
        <MaxWidthWrapper>
          <div className="flex flex-col gap-12 pb-12">
            {eventPackages.map((pkg, i) => (
              <Package key={i} {...pkg} />
            ))}
          </div>
          <div className="flex gap-8">
            {smallEventPackages.map((pkg, i) => (
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
