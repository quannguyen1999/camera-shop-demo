import Image from "next/image";
import { Button } from "../ui/button";

export const DashboardItemCarousel = () => {
  return (
    <div className="h-full w-full bg-[url('/images/dashboard_1.PNG')] bg-repeat bg-cover">
      <div className="bg-black w-full h-full bg-opacity-30 gap-4 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center text-white font-bold text-2xl">
                <p>Đạo cụ chụp ảnh</p>
                <p>Phồng nền, đồ trang trí,...</p>
            </div>
            <div>
                <Button variant="outline" className="border-none hover:bg-yellow-800 hover:text-white transition-all">Xem ngay </Button>
            </div>
      </div>
    </div>
  );
};
