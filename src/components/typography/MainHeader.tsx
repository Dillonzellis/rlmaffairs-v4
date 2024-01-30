interface MainHeaderProps {
  children: React.ReactNode;
}

export const MainHeader = ({ children }: MainHeaderProps) => {
  return <div className="font-serif text-9xl tracking-tighter">{children}</div>;
};
