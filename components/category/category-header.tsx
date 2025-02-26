"use client";
import { useEffect } from "react";
import { BreadCrumbs } from "../breadcrumbs";

const dataBreadCum = [
  {
    value: "Trang chủ",
    url: "/dashboard",
  },
];

interface CategoryItem {
  value: string;
  url: string;
}
interface CatgegoryHeaderPageProps {
  category: CategoryItem[];
}
export const CategoryHeader = ({ category }: CatgegoryHeaderPageProps) => {
  useEffect(() => {
    category.forEach( t =>{
      const exists = dataBreadCum.some((item) => item.value === t.value);
      if(!exists){
        dataBreadCum.push({
          value: t.value,
          url: t.url,
        });
      }
    })
  }, []);
  return <BreadCrumbs items={dataBreadCum} />;
};
