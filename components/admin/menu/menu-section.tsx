"use client";

import { MobileToggle } from "@/components/mobile-toggle";
import { Button } from "@/components/ui/button";
import {
  URL_ADMIN_CATEGORY,
  URL_ADMIN_ORDER,
  URL_ADMIN_PRODUCT,
  URL_DASHBOARD,
} from "@/constants/url-constant";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const data = [
  {
    name: "Quản lý mặt hàng",
    url: URL_ADMIN_CATEGORY,
  },
  {
    name: "Quản lý sản phẩm",
    url: URL_ADMIN_PRODUCT,
  },
  {
    name: "Quản lý Order",
    url: URL_ADMIN_ORDER,
  },
];
export const MenuSection = () => {
  const rouer = useRouter();
  const redirectToPage = (url: string) => {
    rouer.push(url);
  };

  const redirectToPageClient = () => {
    rouer.push(URL_DASHBOARD);
  };
  return (
    <>
      <div className="bg-black flex md:hidden items-start">
        <MobileToggle
          isScrolled={false}
          body={
            <>
              <div className=" p-10 gap-4 flex flex-row  items-end justify-center">
                <div className="flex justify-center items-center">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "h-32 w-32",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                {data.map((t, index) => (
                  <div
                    key={index}
                    onClick={() => redirectToPage(t.url)}
                    className="text-center cursor-pointer p-5 bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all"
                  >
                    {t.name}
                  </div>
                ))}
                <div className="flex-1 flex items-end justify-end">
                  <Button
                    className="w-full m-5"
                    onClick={() => redirectToPageClient()}
                  >
                    Trang Client
                  </Button>
                </div>
              </div>
            </>
          }
        />
      </div>
      <div className="w-60 h-full z-10 fixed md:flex flex-col hidden bg-gray-100 text-black">
        <div className=" p-10 gap-4 flex flex-row  items-end justify-center">
          <div className="flex justify-center items-center">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-32 w-32",
                },
              }}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          {data.map((t, index) => (
            <div
              key={index}
              onClick={() => redirectToPage(t.url)}
              className="text-center cursor-pointer p-5 bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all"
            >
              {t.name}
            </div>
          ))}
          <div className="flex-1 flex items-end justify-end">
            <Button
              className="w-full m-5"
              onClick={() => redirectToPageClient()}
            >
              Trang Client
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
