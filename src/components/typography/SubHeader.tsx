interface SubHeaderProps {
  children: React.ReactNode;
}

export const SubHeader = ({ children }: SubHeaderProps) => {
  return (
    <div className="text-muted-foreground italic font-light tracking-tighter text-sm">
      {children}
    </div>
  );
};
