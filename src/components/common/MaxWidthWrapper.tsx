import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1400px] px-4 md:px-6", className)}
    >
      {children}
    </div>
  );
};
