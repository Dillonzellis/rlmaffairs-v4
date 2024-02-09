import { cn } from "@/lib/utils";

interface BodyTextProps {
  children: React.ReactNode;
  className?: string;
}

export const BodyText = ({ children, className }: BodyTextProps) => {
  return (
    <div
      className={cn(
        "font-light leading-7 tracking-tighter text-primary/70 md:text-lg md:leading-8",
        className,
      )}
    >
      {children}
    </div>
  );
};
