'use client'

import { URL_CATEGORY } from "@/constants/url-constant";
import { useRouter } from "next/navigation";

interface MenuItemProps {
  name: string,
  id: string
}
export const MenuItem = ({  name, id }: MenuItemProps) => {
  const rouer = useRouter();
  const navigateToListProduct = () => {
    rouer.push(`${URL_CATEGORY}/${id}`)
  }
  return (
     <div onClick={() => navigateToListProduct()} className="hover:bg-gray-200 hover:text-black   p-6  flex h-5 cursor-pointer text-center items-center justify-center">
        <p>{name}</p>
     </div>
  );
};
