"use client";
import { Button } from "@/components/ui/button";
import CategoryTablePage from "@/modal/table/category/table-page";
import { useModal } from "@/modal/popup/use-modal-store";
import { Info } from "lucide-react";
import NavigationInput from "@/components/navigation/navigation-input";

export const CategoryPage = () => {
  const { onOpen, setIsRefresh } = useModal();
  const refreshPage = () => {
    setIsRefresh(true);
    setTimeout(() => setIsRefresh(false), 1000);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-end justify-end px-5 gap-5  pt-5">
        <div className="flex flex-1  flex-row gap-2 rounded-md  p-2">
          <div className="flex flex-row gap-4 p-2 border-2 border-gray-600">
            <div>
              <Info size={20} />
            </div>
            <p>Quản lý mặt hàng</p>
          </div>
        </div>
        {/* <div className="flex-1">
          <NavigationInput placehodler="Tìm kiếm" />
        </div> */}
        <div className=" flex">
          <Button onClick={() => onOpen("addCategory", "")}>
            Thêm Mặt Hàng
          </Button>
        </div>
        <div className="items-end justify-end flex">
          <Button onClick={() => refreshPage()}>Refresh</Button>
        </div>
      </div>
      <div className="">
        <CategoryTablePage />
      </div>
    
    </div>
  );
};

export default CategoryPage;
