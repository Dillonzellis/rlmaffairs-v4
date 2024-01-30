interface BodyTextProps {
  children: React.ReactNode;
}

export const BodyText = ({ children }: BodyTextProps) => {
  return (
    <div className="font-light text-lg tracking-tighter text-muted-foreground leading-8">
      {children}
    </div>
  );
};
