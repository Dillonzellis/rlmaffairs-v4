import { TypeSmallWeddingPackages } from "@/data/packages";

export const SmallPackage = ({
  title,
  mainPrice,
  feats,
}: TypeSmallWeddingPackages) => {
  return (
    <div className="rounded-sm bg-[#d5d5d5]/15 px-6 py-10 shadow">
      <div className="flex items-baseline justify-between gap-20">
        <div className="pb-8">
          <div className="font-serif text-4xl">{title}</div>
          <hr className="border-t-1 w-[120%] border-[#d5d5d5]"></hr>
        </div>
        <div className="">
          <div className="font-serif text-3xl">{mainPrice}</div>
        </div>
      </div>

      <ul className="list-inside list-disc space-y-2 pb-6">
        {feats.map((feat, i) => (
          <li key={i}>{feat}</li>
        ))}
      </ul>
    </div>
  );
};
