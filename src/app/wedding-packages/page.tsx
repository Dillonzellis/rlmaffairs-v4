import { MainHeader } from "@/components/common/typography/MainHeader";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { Package } from "@/components/sections/packages/Package";
import { weddingPackages, smallWeddingPackages } from "@/data/packages";
import { SmallPackage } from "@/components/sections/packages/SmallPackage";
import { ArrowBtn } from "@/components/common/ArrowBtn";
import { Button } from "@/components/common/ui/button";
import Link from "next/link";

export default function WeddingPackagePage() {
  return (
    <main>
      <section>
        <div className="h-[350px] bg-[url('/package-feat-sm.jpg')] bg-cover bg-center">
          <MaxWidthWrapper className="flex h-full items-center">
            <MainHeader className="text-white">Wedding Packages</MainHeader>
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
          <div className="flex gap-8">
            {smallWeddingPackages.map((pkg, i) => (
              <SmallPackage key={i} {...pkg} />
            ))}
          </div>
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
