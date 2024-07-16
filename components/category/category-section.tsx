import Image from "next/image";
import { useEffect, useState } from "react";
import qs from "query-string";
import axios, { AxiosResponse } from "axios";
import { URL_API_CATEGORY } from "@/constants/url-constant";
import { useMenuStore } from "@/hook/use-menu-store";
import { CircleAlert } from "lucide-react";

const listMenu = [
  {
    id: 1,
    menuHeader: "Phụ kiện chụp ảnh",
    listChild: [
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
    ],
  },
  {
    id: 2,
    menuHeader: "Đồ trang trí",
    listChild: [
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
    ],
  },
  {
    id: 3,
    menuHeader: "Blog",
    listChild: [
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
    ],
  },
];
interface CategorySection {
  categoryId: string;
}
export const CategorySection = ({ categoryId }: CategorySection) => {
  const { data, setData } = useMenuStore();
  const [imageUrl, setImageUrl] = useState<string>();
  useEffect(() => {
    const getAllCategories = async () => {
      const url = qs.stringifyUrl({ url: `${URL_API_CATEGORY}/get-all-menu` });
      const datas = await axios.get(url);
      setData(datas.data.items);
    };

    const getById = async () => {
      const url = qs.stringifyUrl({ url: `${URL_API_CATEGORY}/${categoryId}` });
      const datas = await axios.get(url);
      setImageUrl(datas.data.categories.imageUrl);
      console.log(datas.data.categories);
    };

    getById();
    getAllCategories();
  }, []);
  return (
    <div className="flex-col hidden md:flex">
      <div className="relative h-40 w-40">
        <div className=" absolute w-full h-full mt-5">
          {imageUrl == undefined || imageUrl.trim().length <= 0 ? (
            <div className="rounded-full border border-gray-200 flex w-full h-full items-center justify-center">
              <CircleAlert />
            </div>
          ) : (
            <Image
              src={imageUrl}
              height={500}
              width={500}
              alt="tt"
              className="w-full h-full rounded-full"
            />
          )}
        </div>
      </div>
      <div className="pt-8">
      {data.map((t) => {
        return (
          <div key={t.menuHeader}>
            <p className="font-bold">{t.menuHeader}</p>
            <div className="flex flex-col p-3 ">
              {t.listChild.map((value: any) => {
                return (
                  <div
                    key={value.name}
                    className="border-gray-700 border-b-2 p-3 cursor-pointer hover:text-amber-800"
                  >
                    <p>{value.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      </div>
      
    </div>
  );
};
