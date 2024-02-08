interface MainHeaderProps {
  children: React.ReactNode;
}

export const MainHeader = ({ children }: MainHeaderProps) => {
  return (
    <h2 className="font-serif text-7xl tracking-tighter lg:text-9xl">
      {children}
    </h2>
  );
};
