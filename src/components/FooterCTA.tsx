import { MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

export const FooterCTA = () => {
  return (
    <div className="bg-[#07111F]">
      <Image src="/footer-cta.jpg" alt="footer cta" width={1920} height={647} />
      <div className="mx-auto text-background md:-mt-24">
        <MaxWidthWrapper>
          <div className="mx-auto max-w-[1000px] pb-4 text-center font-serif text-5xl font-medium tracking-tight md:text-6xl md:tracking-tighter">
            Create Your Perfect Day with Our All-Inclusive Wedding Packages.
          </div>
          <div className="mx-auto max-w-2xl pb-2 text-center text-2xl font-light text-background/70 md:text-4xl">
            Packages start at $4,100 with flexible payment plans available.
          </div>
          <div className="flex justify-center py-8">
            <Button variant="secondary" size="lg" className="text-lg">
              Book A Tour!
            </Button>
          </div>
          <div className="flex flex-col items-center">
            <small className="text-background/70">
              Not finding what you&apos;re looking for?
            </small>
            <small>
              <Button
                asChild
                variant="link"
                className="h-auto p-0 text-background"
              >
                <Link href="">
                  Tell us about your dream wedding
                  <MoveRight className="pl-2" />
                </Link>
              </Button>
            </small>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};
