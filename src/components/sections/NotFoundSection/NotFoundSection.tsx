import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { BodyText } from "@/components/common/typography/BodyText";
import Link from "next/link";

export const NotFoundSection = () => {
  return (
    <section className="py-6">
      <MaxWidthWrapper className="">
        <div className="flex flex-col gap-4 py-12">
          <MainHeader as="h1" size="medium">
            Not Found
          </MainHeader>
          <div className="flex flex-col gap-2">
            <BodyText>
              <p>Could not find requested resource</p>
              <Link
                href="/"
                className="underline transition-transform duration-200 hover:text-foreground/90"
              >
                Return Home
              </Link>
            </BodyText>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
