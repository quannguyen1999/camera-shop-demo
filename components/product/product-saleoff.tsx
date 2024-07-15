import { ChevronRight, Plus } from "lucide-react";

export const ProductSaleOff = () => {
  return (
    <div className="w-full rounded-md gap-5 flex flex-col border-2 p-5 border-red-600 bg-gray-200">
      <div className="font-bold text-xl">
        <p>Phiếu Ưu Đãi</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row">
          <div className="flex  text-center items-center justify-center">
            <ChevronRight size={20} className="font-bold text-2xl" />
          </div>
          <div>Nhập Mã GMH500K Giảm thêm 10% cho đơn từ 500k</div>
        </div>
        <div className="flex flex-row">
          <div className="flex  text-center items-center justify-center">
            <ChevronRight size={20} className="font-bold text-2xl" />
          </div>
          <div>
            Freeship Toàn Quốc Cho đơn từ 300k khi thanh toán Online
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex  text-center items-center justify-center">
            <ChevronRight size={20} className="font-bold text-2xl" />
          </div>
          <div>
            Nhập Mã GTD300K Giảm thêm 5% cho đơn từ 300k
          </div>
        </div>
      </div>
    </div>
  );
};
