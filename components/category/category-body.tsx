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
      // Define the base URL and query parameters separately
      const baseUrl = `${URL_API_CATEGORY}/get-all-name`;
      const queryParams = { timestamp: new Date().getTime() };

      // Use qs.stringify to properly serialize query parameters
      const url = `${baseUrl}?${qs.stringify(queryParams)}`;

      const response = await axios.get(url, {
        // Query URL without using browser cache
        headers: {
          "Cache-Control": "no-cache",
        },
      });
      setDatas(response.data.items);
      setLoading(false);
    };

    getCategories();
  }, []);

  return (
    <>
      {loading && <LoadingItem></LoadingItem>}
      <div
        className={cn(
          "grid grid-cols-2 sm:grid-cols-3 ms:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2  row-span-3 px-2 md:px-20"
        )}
      >
        {datas.map((t: any) => (
          <CategoryShadow
            key={t.id}
            id={t.id}
            imageUrl={t.imageUrl}
            content={t.contentMenuChild}
          />
        ))}
      </div>
    </>
  );
};
