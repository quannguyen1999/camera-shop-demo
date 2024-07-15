'use client'
import { MenuSection } from "@/components/admin/menu/menu-section";
import { currentProfile } from "@/lib/current-profile";
import { AddCategoryModal } from "@/modal/popup/category-modal";
import { ImageModal } from "@/modal/popup/image-modal";
import { AddProductModal } from "@/modal/popup/product-modal";
import { useSession } from "@clerk/nextjs";
import { useEffect } from "react";

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {

  
 
  return (
    <>
      <AddCategoryModal />
      <AddProductModal />
      <ImageModal />
      <div className="flex flex-row h-full w-full">
        <MenuSection />
        <div className="flex-1 pl-0 md:pl-64">{children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
