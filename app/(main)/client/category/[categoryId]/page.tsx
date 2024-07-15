"use client";
import { CategoryHeader } from "@/components/category/category-header";
import { CategorySection } from "@/components/category/category-section";
import { ProductBody } from "@/components/product/product-body";
import { RatioGroupItem } from "@/components/ratio-group-item";
import { useScrollStore } from "@/hook/use-scroll-store";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { URL_CATEGORY, URL_DASHBOARD } from "@/constants/url-constant";
import { ProductInfiniteScroll } from "@/components/product/product-infinite-scroll";

interface CatgegoryHeaderPageProps {
  params: {
    categoryId: string;
  };
}
export const CategoryIdPage = ({ params }: CatgegoryHeaderPageProps) => {
  const [menuParent, setMenuParent] = useState("");
  const values = [
    {
      value: "Trang chủ",
      url: URL_DASHBOARD,
    },
    {
      value: "Mặt Hàng",
      url: `${URL_CATEGORY}/${params.categoryId}`,
    },
  ];

  const pathName = usePathname();
  const { setIsMainPage } = useScrollStore();
  useEffect(() => {
    if (pathName.includes(URL_DASHBOARD)) {
      setIsMainPage(false);
    } else {
      setIsMainPage(true);
    }
  }, [pathName, setIsMainPage]);

  return (
    <div className="flex flex-col md:px-20 px-2 pt-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 row-span-3  pt-40">
        <div className="justify-start flex flex-row gap-2">
          <CategoryHeader category={values} />
        </div>
        <div className="items-center justify-start md:justify-end flex flex-row gap-2">
          <RatioGroupItem
            onSetValue={(value: any) => setMenuParent(value)}
            content={menuParent}
            menu={[
              {
                value: "Mới nhất",
              },
              {
                value: "Tăng dần",
              },
              {
                value: "Giảm dần",
              },
            ]}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-row">
        <div className="">
          <CategorySection categoryId={params.categoryId} />
        </div>

        <div className="flex-1 pt-12">
          <ProductInfiniteScroll categoryId={params.categoryId} />
        </div>
      </div>
    </div>
  );
};

export default CategoryIdPage;
