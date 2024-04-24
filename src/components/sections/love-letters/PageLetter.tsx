import Image from "next/image";
import type { reviewType } from "@/data/reviews";

export const PageLetter = ({ review, avatar, reviewer, date }: reviewType) => {
  return (
    <div className="max-w-lg rounded-lg border bg-card px-4 py-5 text-card-foreground shadow-sm">
      <div className="flex flex-col gap-6">
        <p>{review}</p>
        <div className="flex gap-2">
          <Image
            src={avatar}
            alt="Reviewer Name"
            className="rounded-full"
            width={50}
            height={50}
          />
          <div className="flex flex-col justify-center">
            <div className="text-sm font-medium italic">{reviewer}</div>
            <div className="text-xs text-muted-foreground">{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
