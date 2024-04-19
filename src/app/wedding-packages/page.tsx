import { MainHeader } from "@/components/common/typography/MainHeader";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { Package } from "@/components/sections/packages/Package";
import { weddingPackages } from "@/data/packages";

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
          <div className="flex flex-col gap-12">
            {weddingPackages.map((pkg, i) => (
              <Package key={i} {...pkg} />
            ))}
          </div>
          <div>Smaller Packages</div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
