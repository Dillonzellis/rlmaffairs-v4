interface MainHeaderProps {
  children: React.ReactNode;
}

export const MainHeader = ({ children }: MainHeaderProps) => {
  return (
    <div className="font-serif text-7xl tracking-tighter lg:text-9xl">
      {children}
    </div>
  );
};
