import { MainHeader } from "@/components/common/typography/MainHeader";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { Package } from "@/components/sections/packages/Package";
import { eventPackages, smallEventPackages } from "@/data/packages";
import { SmallPackage } from "@/components/sections/packages/SmallPackage";

export default function EventPackagePage() {
  return (
    <main>
      <section>
        <div className="h-[350px] bg-[url('/package-feat-sm.jpg')] bg-cover bg-center">
          <MaxWidthWrapper className="flex h-full items-center">
            <MainHeader className="text-white">Event Packages</MainHeader>
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
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
