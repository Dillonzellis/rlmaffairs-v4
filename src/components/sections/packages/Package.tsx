import type { TypeWeddingPackages } from "@/data/packages";

export const Package = ({
  title,
  mainPrice,
  feats,
  reducedPrice,
}: TypeWeddingPackages) => {
  return (
    <div className="rounded-sm bg-[#d5d5d5]/15 px-3 py-6 shadow md:px-6 md:py-10">
      <div className="flex flex-col items-baseline justify-between md:flex-row md:gap-20">
        <div className="pb-2 md:pb-8">
          <div className="font-serif text-4xl md:text-7xl">{title}</div>
          <hr className="border-t-1 w-[120%] border-[#d5d5d5]"></hr>
        </div>
        <div className="flex flex-row-reverse items-baseline gap-2 pb-4 md:flex-row md:gap-4">
          <div className="text-lg md:font-serif md:text-5xl">{mainPrice}</div>
          <div className="text-sm font-bold italic md:text-base">
            Friday - Sunday
          </div>
        </div>
      </div>

      <ul className="list-inside list-disc space-y-2 pb-6">
        {feats.map((feat, i) => (
          <li key={i}>{feat}</li>
        ))}
      </ul>
      <div className="flex gap-2 text-sm">
        <div className="font-bold italic">Monday - Thursday</div>
        <div>{reducedPrice}</div>
      </div>
    </div>
  );
};
