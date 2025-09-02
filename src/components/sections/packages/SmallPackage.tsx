import { TypeSmallPackages } from "@/data/packages";

export const SmallPackage = ({
  title,
  mainPrice,
  feats,
}: TypeSmallPackages) => {
  return (
    <div className="rounded-sm bg-[#d5d5d5]/15 px-3 py-6 font-light shadow md:px-6 md:py-10">
      <div className="flex flex-col items-baseline justify-between md:flex-row md:gap-20">
        <div className="pb-4 md:pb-8">
          <div className="font-serif text-4xl">{title}</div>
          <hr className="border-t-1 w-full border-[#d5d5d5] md:w-[120%]"></hr>
        </div>
        <div className="">
          {mainPrice ? (
            <div className="pb-4 font-serif text-xl md:pb-2 md:text-3xl">
              {mainPrice}
            </div>
          ) : null}
        </div>
      </div>
      <ul className="list-inside list-disc space-y-2">
        {feats.map((feat, i) => (
          <li key={i}>{feat}</li>
        ))}
      </ul>
    </div>
  );
};
