import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import { TypeMenu } from "@/data/menus";
import { cn } from "@/lib/utils";

type MenuSectionProps = {
  id: string;
  menuTitle: string;
  menuItems: TypeMenu[];
};

const MenuCol = ({
  menuTitle,
  menuItems,
}: Pick<MenuSectionProps, "menuTitle" | "menuItems">) => {
  return (
    <div>
      <MaxWidthWrapper className="py-12">
        <MainHeader className="font-serif" size="medium">
          {menuTitle}
        </MainHeader>
        <hr className="pb-2" />
        {menuItems.map((item) => (
          <div key={item.title} className="flex justify-center py-2">
            <div className="flex flex-col">
              <div className="font-nav text-xl font-medium">{item.title}</div>
              {item.desc ? (
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              ) : null}
            </div>
          </div>
        ))}
      </MaxWidthWrapper>
    </div>
  );
};

export const MenuSection = ({ id, menuTitle, menuItems }: MenuSectionProps) => {
  return (
    <div
      id={id}
      className={cn(
        "flex scroll-mt-[4.25rem] flex-col justify-center md:flex-row md:gap-8",
      )}
    >
      <MenuCol menuTitle={menuTitle} menuItems={menuItems} />
    </div>
  );
};
