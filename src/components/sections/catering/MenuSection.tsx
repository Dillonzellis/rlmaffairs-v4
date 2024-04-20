import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import Image, { StaticImageData } from "next/image";
import { TypeMenu } from "@/data/menus";

type MenuSectionProps = {
  imgSrc: StaticImageData;
  imgAlt: string;
  menuTitle: string;
  menuItems: TypeMenu[];
  rightVariant?: boolean;
};

const ImgCol = ({
  imgSrc,
  imgAlt,
}: Pick<MenuSectionProps, "imgSrc" | "imgAlt">) => {
  return (
    <div>
      <Image src={imgSrc} alt={imgAlt} className="h-full object-cover" />
    </div>
  );
};

const MenuCol = ({
  menuTitle,
  menuItems,
}: Pick<MenuSectionProps, "menuTitle" | "menuItems">) => {
  return (
    <div>
      <MaxWidthWrapper className="py-12">
        <MainHeader size="medium">{menuTitle}</MainHeader>
        <hr className="pb-2" />
        {menuItems.map((item) => (
          <div key={item.title} className="flex justify-between py-2">
            <div className="flex flex-col">
              <div className="text-xl font-bold">{item.title}</div>
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

export const MenuSection = ({
  imgSrc,
  imgAlt,
  menuTitle,
  menuItems,
  rightVariant,
}: MenuSectionProps) => {
  return (
    <div className="flex gap-8">
      {rightVariant ? (
        <>
          <MenuCol menuTitle={menuTitle} menuItems={menuItems} />
          <ImgCol imgSrc={imgSrc} imgAlt={imgAlt} />
        </>
      ) : (
        <>
          <ImgCol imgSrc={imgSrc} imgAlt={imgAlt} />
          <MenuCol menuTitle={menuTitle} menuItems={menuItems} />
        </>
      )}
    </div>
  );
};
