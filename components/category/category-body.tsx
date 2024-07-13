"use client";
import { Dancing_Script } from "next/font/google";
import { CategoryShadow } from "./category-shadow";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import qs from "query-string";
import { URL_API_CATEGORY } from "@/constants/url-constant";
import axios, { AxiosResponse } from "axios";

const dataCategoryFake = [
  {
    imageUrl: "/images/dashboard_1.PNG",
    content: "BÌNH HOA",
  },
  {
    imageUrl: "/images/dashboard_1.PNG",
    content: "TRÁI CÂY GIẢ",
  },
  {
    imageUrl: "/images/dashboard_1.PNG",
    content: "BÁNH GIẢ, KEM GIẢ",
  },
  {
    imageUrl: "/images/dashboard_1.PNG",
    content: "ĐÁ GIẢ",
  },
  {
    imageUrl: "/images/dashboard_1.PNG",
    content: "HOA LÁ GIẢ",
  },
  {
    imageUrl: "/images/dashboard_1.PNG",
    content: "CHIM BƯỚM",
  },
  {
    imageUrl: "/images/dashboard_1.PNG",
    content: "THIỆP",
  },
  {
    imageUrl: "/images/dashboard_1.PNG",
    content: "CHỮ, SỐ",
  },
  {
    imageUrl: "/images/dashboard_1.PNG",
    content: "KHỐI HÌNH HỌC",
  },
  {
    imageUrl: "/images/dashboard_1.PNG",
    content: "VÃI NỀN",
  },
  {
    imageUrl: "/images/dashboard_1.PNG",
    content: "TRÀ ĐẠO",
  },
  {
    imageUrl: "/images/dashboard_1.PNG",
    content: "LY CHEN ĐĨA",
  },
  {
    imageUrl: "/images/dashboard_1.PNG",
    content: "MUỖNG NĨA DAO",
  },
  {
    imageUrl: "/images/dashboard_1.PNG",
    content: "KHAY, NHỚT",
  },
];
export const CategoryBody = () => {
  const [datas, setDatas] = useState<any>([]);
  useEffect(() => {
    const getCategories = async () => {
      const url = qs.stringifyUrl({ url: `${URL_API_CATEGORY}/get-all-name` });

      const datas = await axios.get(url);
      setDatas(datas.data.items);
    };

    getCategories();
  }, []);

  return (
    <div
      className={cn(
        "grid grid-cols-2 ms:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2  row-span-3 px-2 md:px-20"
      )}
    >
      {datas.map((t: any) => (
        <CategoryShadow key={t.id} id={t.id} imageUrl={t.imageUrl} content={t.contentMenuChild} />
      ))}
    </div>
  );
};
