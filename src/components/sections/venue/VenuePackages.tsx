import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import type { TypeWeddingPackages } from "@/data/packages";
import { WeddingPackages } from "@/data/packages";
import { CheckIcon } from "lucide-react";

const Package = ({
  title,
  desc,
  feats,
  price,
  reducedPrice,
}: TypeWeddingPackages) => {
  return (
    <div className="rounded-md border">
      <div className="px-8 py-6">
        <h3 className="pb-4 text-2xl font-bold">{title}</h3>
        <p className="pb-6">{desc}</p>
        <ul className="space-y-3 pb-4">
          {feats.map((feat) => (
            <li key={feat} className="flex items-center gap-4 text-sm">
              <CheckIcon className="h-5" /> {feat}
            </li>
          ))}
        </ul>
        <div className="text-2xl font-bold">${price}</div>
        <div>{reducedPrice}</div>
      </div>
    </div>
  );
};

export const VenuePackages = () => {
  return (
    <section id="venue">
      <MaxWidthWrapper className="py-12">
        <MainHeader>Packages</MainHeader>
        <h2 className="pb-8 text-center text-3xl">Wedding Packages</h2>
        <div className="flex flex-col justify-center gap-8 md:flex-row">
          {WeddingPackages.map((pkg) => (
            <Package key={pkg.title} {...pkg} />
          ))}
        </div>
        {/* <div>Sapphire Package</div> */}
        {/* <div>Emerald Package</div> */}
        {/* <div>Ruby Package</div> */}
        {/* <div>Diamond Package</div> */}
        <div>Micro Wedding Package</div>
        <div>Wedding Reception Only</div>
        <h2 className="text-3xl font-bold">Event Packages</h2>
        <div>Premier Event Package</div>
        <div>Elegant Event Package</div>
        <div>Exquisitt Event Package</div>
        <div>Venue Only</div>
      </MaxWidthWrapper>
    </section>
  );
};
