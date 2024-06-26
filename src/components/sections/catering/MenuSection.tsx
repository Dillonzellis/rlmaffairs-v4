import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { MainHeader } from "@/components/common/typography/MainHeader";
import Image, { StaticImageData } from "next/image";
import { TypeMenu } from "@/data/menus";
import { cn } from "@/lib/utils";

type MenuSectionProps = {
  id: string;
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
      <Image
        src={imgSrc}
        alt={imgAlt}
        className="md:w-unset max-h-[200px] min-w-full object-cover md:min-h-full"
      />
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
        <MainHeader className="font-serif" size="medium">
          {menuTitle}
        </MainHeader>
        <hr className="pb-2" />
        {menuItems.map((item) => (
          <div key={item.title} className="flex justify-between py-2">
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

export const MenuSection = ({
  id,
  imgSrc,
  imgAlt,
  menuTitle,
  menuItems,
  rightVariant,
}: MenuSectionProps) => {
  return (
    <div
      id={id}
      className={cn(
        "flex scroll-mt-[4.25rem] flex-col justify-between md:flex-row md:gap-8",
        rightVariant ? "flex-col-reverse" : "",
      )}
    >
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
