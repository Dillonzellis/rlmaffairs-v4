import type { TypeWeddingPackages } from "@/data/packages";

export const Package = ({
  title,
  mainPrice,
  feats,
  reducedPrice,
}: TypeWeddingPackages) => {
  return (
    <div className="rounded-sm bg-[#d5d5d5]/15 px-6 py-10 shadow">
      <div className="flex items-baseline justify-between gap-20">
        <div className="pb-8">
          <div className="font-serif text-7xl">{title}</div>
          <hr className="border-t-1 w-[120%] border-[#d5d5d5]"></hr>
        </div>
        <div className="flex items-baseline gap-4">
          <div className="font-serif text-7xl">{mainPrice}</div>
          <div className="font-bold italic">Friday - Sunday</div>
        </div>
      </div>

      <ul className="list-inside list-disc space-y-2 pb-6">
        {feats.map((feat, i) => (
          <li key={i}>{feat}</li>
        ))}
      </ul>
      <div className="flex gap-2">
        <div className="font-bold italic">Monday - Thursday</div>
        <div>{reducedPrice}</div>
      </div>
    </div>
  );
};
