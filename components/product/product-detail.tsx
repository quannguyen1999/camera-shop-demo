import { Plus } from "lucide-react";
import { Button } from "../ui/button";

export const ProductDetail = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <p className="font-bold text-black text-2xl text-amber-700">
          Bánh mì Trang trí mô phỏng
        </p>
        <div className="pl-2 text-lg">
          <div className="flex flex-row">
            <div className="flex  text-center items-center justify-center">
              <Plus size={10} />
            </div>
            <div className="text-center items-center justify-center">
              Kích thước: 9.5x5x5cm
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex text-center items-center justify-center">
              <Plus size={10} />
            </div>
            <div className="text-center items-center justify-center">
              Chất liệu PVU
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 border-t-2 border-gray-300 font-bold text-lg">
        <p className="">Mức giá (Tùy theo phân loại): <span>38 000 đ</span></p>
       
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="grid-cols-1 flex flex-row gap-2">
          <div className="bg-gray-300 hover:bg-gray-400 transition-all w-full flex items-center justify-center cursor-pointer">
            <p className="text-2xl">-</p>
          </div>
          <div className="w-full flex items-center justify-center">
          <p className="text-2xl">-</p>
          </div>
          <div className="bg-gray-300 hover:bg-gray-400 transition-all w-full flex items-center justify-center cursor-pointer">
          <p className="text-2xl">+</p>
          </div>
        </div>
        <div className="grid-cols-3">
          <Button>Thêm Vào giỏ hàng</Button>
        </div>
      </div>
    </div>
  );
};
