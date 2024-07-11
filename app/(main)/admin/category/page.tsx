"use client";
import { Button } from "@/components/ui/button";
import { useScrollStore } from "@/hook/use-scroll-store";
import CategoryTablePage from "@/modal/table/category/table-page";
import { useModal } from "@/modal/popup/use-modal-store";
import { Info } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const CategoryPage = () => {
  const { setIsAdminPage, setIsMainPage } = useScrollStore();
  const pathName = usePathname();
  const { onOpen } = useModal();

  useEffect(() => {
    setIsAdminPage(true);
    setIsMainPage(false);
  }, [pathName]);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row items-end justify-end px-5  pt-5">
        <div className="flex flex-row gap-2 rounded-md border-gray-500 border-2 p-2">
          <div>
            <Info size={20} />
          </div>
          <p>Quản lý mặt hàng</p>
        </div>
        <div className="flex-1 items-end justify-end flex">
          <Button onClick={() => onOpen("addCategory", "")}>
            Thêm Mặt Hàng
          </Button>
        </div>
      </div>
      <CategoryTablePage />
    </div>
  );
};

export default CategoryPage;
