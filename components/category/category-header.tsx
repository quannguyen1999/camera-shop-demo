"use client";
import { useEffect } from "react";
import { BreadCrumbs } from "../breadcrumbs";

const dataBreadCum = [
  {
    value: "Trang chủ",
    url: "/dashboard",
  },
];
interface CatgegoryHeaderPageProps {
  value: string;
}
export const CategoryHeader = ({ value }: CatgegoryHeaderPageProps) => {
  useEffect(() => {
    // Check if the item is already in the array to avoid duplicates
    const exists = dataBreadCum.some((item) => item.url === "/category/xnss");
    if (!exists) {
      dataBreadCum.push({
        value: "Phụ kiện chụp ảnh",
        url: "/category/xnss",
      });
    }
  }, []);

  return <BreadCrumbs items={dataBreadCum} />;
};
