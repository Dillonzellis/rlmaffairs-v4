interface SubHeaderProps {
  children: React.ReactNode;
}

export const SubHeader = ({ children }: SubHeaderProps) => {
  return (
    <div className="text-sm font-light italic tracking-tighter text-primary/70">
      {children}
    </div>
  );
};
