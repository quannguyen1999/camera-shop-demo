import Image from "next/image";
import { CarouselToggle } from "../carousel-toggle";
import { DashboardItemCarousel } from "./dashboard-item-carousel";
import { ImageShadow } from "../image/image-shadow";
import { Button } from "../ui/button";

const items = [
  <ImageShadow
    body={
      <>
        <div className="flex flex-col items-center text-white font-bold text-2xl">
          <p>Đạo cụ chụp ảnh</p>
          <p>Phồng nền, đồ trang trí,...</p>
        </div>
        <div>
          <Button
            variant="outline"
            className="border-none hover:bg-yellow-800 hover:text-white transition-all"
          >
            Xem ngay{" "}
          </Button>
        </div>
      </>
    }
    key={1}
    imageUrl="bg-[url('/images/dashboard_1.PNG')] "
  />,
  <ImageShadow
    body={
      <>
        <div className="flex flex-col items-center text-white font-bold text-2xl">
          <p>Đạo cụ xx ảnh</p>
          <p>Phồng nền, đồ trang trí,...</p>
        </div>
        <div>
          <Button
            variant="outline"
            className="border-none hover:bg-yellow-800 hover:text-white transition-all"
          >
            Xem ngay{" "}
          </Button>
        </div>
      </>
    }
    key={2}
    imageUrl="bg-[url('/images/dashboard_1.PNG')] "
  />,
];
export const DashboardCarousel = () => {
  return <CarouselToggle items={items} />;
};
