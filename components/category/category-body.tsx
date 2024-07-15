"use client";
import { Dancing_Script } from "next/font/google";
import { CategoryShadow } from "./category-shadow";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import qs from "query-string";
import { URL_API_CATEGORY } from "@/constants/url-constant";
import axios, { AxiosResponse } from "axios";
import { LoadingItem } from "../loading-item";
export const CategoryBody = () => {
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState<any>([]);
  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const url = qs.stringifyUrl({ url: `${URL_API_CATEGORY}/get-all-name` });

      const datas = await axios.get(url);
      setDatas(datas.data.items);
      setLoading(false);
    };

    getCategories();
  }, []);

  return (
    <>
    {
      loading && <LoadingItem></LoadingItem>
    }
     <div
      className={cn(
        "grid grid-cols-2 ms:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2  row-span-3 px-2 md:px-20"
      )}
    >
      {datas.map((t: any) => (
        <CategoryShadow key={t.id} id={t.id} imageUrl={t.imageUrl} content={t.contentMenuChild} />
      ))}
    </div>
    </>
   
  );
};
