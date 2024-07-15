"use client";
import { Button } from "@/components/ui/button";
import { useModal } from "@/modal/popup/use-modal-store";
import { Info } from "lucide-react";
import TablePage from "@/modal/table/table-page";
import { columns } from "@/modal/table/category/columns";
const CategoryPage = () => {
  const { onOpen, setIsRefresh } = useModal();

  const refreshPage = () => {
    setIsRefresh(true);
    setTimeout(() => setIsRefresh(false), 1000);
  };

  return (
    <div className="flex flex-col">
      <div className="flex md:flex-row flex-col items-end justify-end px-5 gap-5  pt-5">
        <div className="w-full md:w-fit flex flex-row gap-2 rounded-md">
          <div className="flex flex-auto flex-row gap-4 p-2 border-2 border-gray-600">
            <div>
              <Info size={20} />
            </div>
            <p>Quản lý mặt hàng</p>
          </div>
        </div>

        <div className="flex w-full md:w-fit">
          <Button className=" w-full md:w-fit"  onClick={() => onOpen("addCategory", "", "")}>
            Thêm Mặt Hàng
          </Button>
        </div>
        <div className="items-end justify-end flex  w-full md:w-fit">
          <Button className=" w-full md:w-fit" onClick={() => refreshPage()}>Refresh</Button>
        </div>
      </div>
      <div className="">
        <TablePage urlApi="/api/category" columns={columns} />
      </div>
    </div>
  );
};

export default CategoryPage;
