'use client'
import { Dancing_Script } from "next/font/google";
import { CategoryShadow } from "./category-shadow";
import { cn } from "@/lib/utils";

const dataCategoryFake = [
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "BÌNH HOA",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "TRÁI CÂY GIẢ",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "BÁNH GIẢ, KEM GIẢ",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "ĐÁ GIẢ",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "HOA LÁ GIẢ",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "CHIM BƯỚM",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "THIỆP",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "CHỮ, SỐ",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "KHỐI HÌNH HỌC",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "VÃI NỀN",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "TRÀ ĐẠO",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "LY CHEN ĐĨA",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "MUỖNG NĨA DAO",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "KHAY, NHỚT",
  },
];
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // specify the weights you need
  display: "swap", // optional: controls the font-display value
});
export const CategoryBody = () => {
  return (
    <div className={cn(dancingScript.className, "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2  row-span-3 px-2 md:px-20")}>
      {dataCategoryFake.map((t, index) => (
        <CategoryShadow
          key={index}
          imageUrl={t.imageUrl}
          content={t.content}
        />
      ))}
    </div>
  );
};
