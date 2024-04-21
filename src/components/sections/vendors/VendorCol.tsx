type VendorColProps = {
  title: string;
  children: React.ReactNode;
};

export const VendorCol = ({ title, children }: VendorColProps) => {
  return (
    <div className="space-y-4 rounded-sm bg-[#d5d5d5]/15 p-8 shadow">
      <div className="border-b font-nav text-3xl">{title}</div>
      {children}
    </div>
  );
};
