import { Plus } from "lucide-react";

export const ProductSaleOff = () => {
  return (
    <div className="w-full rounded-md gap-5 h-full flex flex-col border-2 p-5 border-red-600 bg-gray-200">
      <div className="font-bold text-xl">
        <p>Phiếu Ưu Đãi</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row">
          <div className="flex  text-center items-center justify-center">
            <Plus size={10} />
          </div>
          <div className="text-center items-center justify-center">
            Nhập Mã GMH500K Giảm thêm 10% cho đơn từ 500k
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex  text-center items-center justify-center">
            <Plus size={10} />
          </div>
          <div className="text-center items-center justify-center">
            Freeship Toàn Quốc Cho đơn từ 300k khi thanh toán Online
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex  text-center items-center justify-center">
            <Plus size={10} />
          </div>
          <div className="text-center items-center justify-center">
            Nhập Mã GTD300K Giảm thêm 5% cho đơn từ 300k
          </div>
        </div>
      </div>
    </div>
  );
};
