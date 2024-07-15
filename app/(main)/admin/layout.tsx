"use client";
import { MenuSection } from "@/components/admin/menu/menu-section";
import { currentProfile } from "@/lib/current-profile";
import { AddCategoryModal } from "@/modal/popup/category-modal";
import { ImageModal } from "@/modal/popup/image-modal";
import { AddProductModal } from "@/modal/popup/product-modal";
import { useSession } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import qs from "query-string";
import axios, { AxiosResponse } from "axios";
import { URL_API_PROFILE, URL_DASHBOARD } from "@/constants/url-constant";
import { useRouter } from "next/navigation";
import { LoadingFullScreen } from "@/components/loading-full-screen";
import { LoadingItem } from "@/components/loading-item";
export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const getProfile = async () => {
      setLoading(true);
      const datas = await axios.get(URL_API_PROFILE);

      if (datas.data.profile.role != "ADMIN") {
        setTimeout(() => {
          router.push(URL_DASHBOARD);
        }, 1000);
      }else{
        setLoading(false);
      }
    
    };
    getProfile();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingFullScreen />
      ) : (
        <>
          <AddCategoryModal />
          <AddProductModal />
          <ImageModal />
          <div className="flex flex-row h-full w-full">
            <MenuSection />
            {loading ? (
              <LoadingItem />
            ) : (
              <div className="flex-1 pl-0 md:pl-64">{children}</div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default AdminLayout;
