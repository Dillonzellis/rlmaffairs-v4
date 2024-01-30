import { cn } from "@/lib/utils";

interface BodyTextProps {
  children: React.ReactNode;
  className?: string;
}

export const BodyText = ({ children, className }: BodyTextProps) => {
  return (
    <div
      className={cn(
        "font-light text-lg tracking-tighter text-muted-foreground leading-8",
        className,
      )}
    >
      {children}
    </div>
  );
};
