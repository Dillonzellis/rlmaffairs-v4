import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { Button } from "@/components/common/ui/button";
import Image from "next/image";
import Link from "next/link";

export const FooterCTA = () => {
  return (
    <div className="bg-[#07111F]">
      <Image src="/footer-cta.jpg" alt="footer cta" width={1920} height={647} />
      <div className="mx-auto text-background md:-mt-24">
        <MaxWidthWrapper>
          <div className="mx-auto max-w-[1000px] pb-4 text-center font-serif text-3xl font-medium tracking-tight md:text-6xl md:tracking-tighter">
            Create Your Perfect Day with Our All-Inclusive Wedding Packages.
          </div>
          <div className="mx-auto max-w-2xl pb-2 text-center text-2xl font-light text-background/70 md:text-4xl">
            Packages start at $4,100 with flexible payment plans available.
          </div>
          <div className="flex justify-center py-8">
            <Button asChild variant="secondary" size="lg" className="text-lg">
              <Link href="https://hello.dubsado.com/public/form/view/5afe45144f411345f6129204">
                Book A Tour!
              </Link>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5 md:text-lg">
            <div>
              <a
                className="flex text-center hover:underline"
                href="https://www.google.com/maps/place/RLM+Affairs+Wedding+Venue/@34.2644018,-83.8879582,17z/data=!4m6!3m5!1s0x88f5f30b4abeaadb:0xc36e0382d9c6cd07!8m2!3d34.2643974!4d-83.8853833!16s%2Fg%2F11j37qrzvv?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                3575 McEver Rd, Gainesville, GA 30504
              </a>
            </div>
            <div>
              <a className="hover:underline" href="tel:+17705367306">
                (770)-536-7306
              </a>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};
