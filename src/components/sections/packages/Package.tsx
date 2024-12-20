import type { TypeWeddingPackages } from "@/data/packages";

export const Package = ({
  title,
  mainPrice,
  feats,
  reducedPrice,
  offSeasonPrice,
}: TypeWeddingPackages) => {
  return (
    <div className="rounded-sm bg-[#d5d5d5]/15 px-3 py-6 font-light shadow md:px-6 md:py-10">
      <div className="flex flex-col items-baseline justify-between md:flex-row md:gap-20">
        <div className="pb-4">
          <div className="font-serif text-4xl md:text-7xl">{title}</div>
          <hr className="border-t-1 w-[120%] border-[#d5d5d5]"></hr>
        </div>
        <div className="flex items-baseline gap-2 pb-4 md:gap-4">
          <div className="font-serif text-3xl md:text-5xl">{mainPrice}</div>
          <div className="text-xs font-light italic md:text-sm">
            Friday - Sunday
          </div>
        </div>
      </div>
      <div className="pb-4">
        Guests may be added to your package | Please Inquire
      </div>
      <ul className="list-inside list-disc space-y-2 pb-6">
        {feats.map((feat, i) => (
          <li key={i}>{feat}</li>
        ))}
      </ul>
      <div className="flex gap-2 pb-2 text-xs md:text-sm">
        <div className="font-normal italic">Monday - Thursday</div>
        <div>{reducedPrice}</div>
      </div>

      <div className="flex gap-2 text-xs md:text-sm">
        <div className="font-normal italic">
          Off season pricing: January, February, July &amp; August
        </div>
        <div>{offSeasonPrice}</div>
        <div>Monday – Sunday</div>
      </div>
    </div>
  );
};
