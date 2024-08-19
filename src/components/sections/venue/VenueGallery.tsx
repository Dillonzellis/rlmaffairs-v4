import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import fs from "fs";
import Image from "next/image";
import path from "path";

export const VenueGallery = () => {
  const galleryDir = path.join(process.cwd(), "public/venue-gallery");

  const images = fs
    .readdirSync(galleryDir)
    .map((file) => `/venue-gallery/${file}`);

  return (
    <section className="scroll-mt-[6.25rem]" id="gallery">
      <MaxWidthWrapper className="py-24">
        <MainHeader className="text-center">Gallery</MainHeader>
      </MaxWidthWrapper>
      <div className="grid grid-cols-1 gap-1.5 pb-12 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="aspect-square h-full w-full object-cover"
            height={300}
            width={300}
          />
        ))}
      </div>
    </section>
  );
};
