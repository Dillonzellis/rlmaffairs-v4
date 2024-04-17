import { BackgroundImage } from "@/components/common/BackgroundImage";
import { cn } from "@/lib/utils";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { BodyText } from "@/components/common/typography/BodyText";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { SubHeader } from "@/components/common/typography/SubHeader";
import type { TypeWeddingPackages } from "@/data/packages";
import { WeddingPackages } from "@/data/packages";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/common/ui/button";

// TODO: Add isDiamond to where diamond package is black and the text or card sparkles
// TODO: simpilify package feats

const Package = ({
  title,
  color,
  desc,
  feats,
  price,
  reducedPrice,
}: TypeWeddingPackages) => {
  return (
    <div className="rounded-sm border shadow-sm transition duration-200 hover:-translate-y-2 hover:shadow-lg">
      <div className="px-8 py-14">
        <h3
          className={cn("pb-4 text-center text-2xl font-bold uppercase", color)}
        >
          {title}
        </h3>
        <p className="pb-6">{desc}</p>
        <div className="text-2xl font-bold">${price}</div>
        <div>{reducedPrice}</div>
        <Button>Book A Tour</Button>
        <ul className="space-y-3 pb-4">
          {feats.map((feat) => (
            <li key={feat} className="flex items-center gap-4 text-sm">
              <CheckIcon className="h-5" /> {feat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const VenuePackages = () => {
  return (
    <>
      <section id="venue">
        <MaxWidthWrapper className="py-12">
          <SubHeader>Premier Packages</SubHeader>
          <MainHeader>Packages</MainHeader>
          <BodyText className="">
            RLM Affairs offers all the services you may need for your event. Our
            staff works directly with our clients to tailor each event to your
            specific needs. Whether you need just catering, or a complete event
            design, we will work with you as much as you need, or we will
            provide you with A la carte services based specifically on your
            needs and budget. Our award winning catering, wedding planning,
            cakes, and floral design are available every day, breakfast, lunch,
            dinner, or in between.
          </BodyText>
        </MaxWidthWrapper>
        <BackgroundImage imageUrl="/venue-feat.jpg" />
      </section>
      <section id="wedding-packages">
        <MaxWidthWrapper>
          <h2 className="py-14 pb-8 text-center font-serif text-6xl">
            Wedding Packages
          </h2>
          <div className="flex flex-col justify-center gap-8 md:flex-row">
            {WeddingPackages.map((pkg) => (
              <Package key={pkg.title} {...pkg} />
            ))}
          </div>
        </MaxWidthWrapper>
        <div>Micro Wedding Package</div>
        <div>Wedding Reception Only</div>
        <h2 className="text-3xl font-bold">Event Packages</h2>
        <div>Premier Event Package</div>
        <div>Elegant Event Package</div>
        <div>Exquisitt Event Package</div>
        <div>Venue Only</div>
      </section>
    </>
  );
};
