import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { VendorCol } from "@/components/sections/vendors/VendorCol";
import { VendorInfo } from "@/components/sections/vendors/VendorInfo";
import {
  photoVendors,
  DJVendors,
  officiantVendors,
  hairAndMakeupVendors,
  eventTravelAndInsuranceVendors,
} from "@/data/vendors";

export default function VendorsHome() {
  return (
    <main>
      <section>
        <div className="h-[350px] bg-[url('/package-feat-sm.jpg')] bg-cover bg-center">
          <MaxWidthWrapper className="flex h-full items-center">
            <MainHeader className="text-white">Vendors</MainHeader>
          </MaxWidthWrapper>
        </div>
      </section>

      <section className="py-12">
        <MaxWidthWrapper>
          <MainHeader size="small" className="text-center font-nav">
            Our Preferred Vendors
          </MainHeader>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <VendorCol title="Photography">
              {photoVendors.map((vendor, i) => (
                <VendorInfo key={i} {...vendor} />
              ))}
            </VendorCol>
            <VendorCol title="DJ Services">
              {DJVendors.map((vendor, i) => (
                <VendorInfo key={i} {...vendor} />
              ))}
            </VendorCol>
            <VendorCol title="Officiants">
              {officiantVendors.map((vendor, i) => (
                <VendorInfo key={i} {...vendor} />
              ))}
            </VendorCol>
            <VendorCol title="Hair & Make Up">
              {hairAndMakeupVendors.map((vendor, i) => (
                <VendorInfo key={i} {...vendor} />
              ))}
            </VendorCol>
            <VendorCol title="Event Travel & Insurance">
              {eventTravelAndInsuranceVendors.map((vendor, i) => (
                <VendorInfo key={i} {...vendor} />
              ))}
            </VendorCol>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
