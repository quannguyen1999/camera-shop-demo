import Image from "next/image";
import { CarouselToggle } from "../carousel-toggle";
import { DashboardItemCarousel } from "./dashboard-item-carousel";
import { ImageShadow } from "../image/image-shadow";
import { Button } from "../ui/button";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // specify the weights you need
  display: "swap", // optional: controls the font-display value
});
const items = [
  <ImageShadow
    body={
      <>
        <div className={cn(" flex flex-col items-center text-white font-bold text-2xl", dancingScript.className)}>
          <p>Đạo cụ</p>
          <p>Phông nền, đồ trang trí,...</p>
        </div>
        <div>
          {/* <Button
            variant="outline"
            className="border-none hover:bg-yellow-800 hover:text-white transition-all"
          >
            Xem ngay{" "}
          </Button> */}
        </div>
      </>
    }
    key={1}
    imageUrl="https://utfs.io/f/999a91d1-b8d0-40cd-84da-30dd5b260a1a-wlvu0q.png"
  />,
  <ImageShadow
    body={
      <>
         <div className={cn("flex flex-col items-center text-white font-bold text-2xl", dancingScript.className)}>
          <p>Dụng cụ</p>
          <p>Decor,...</p>
        </div>
        <div>
          {/* <Button
            variant="outline"
            className="border-none hover:bg-yellow-800 hover:text-white transition-all"
          >
            Xem ngay{" "}
          </Button> */}
        </div>
      </>
    }
    key={2}
    imageUrl="https://utfs.io/f/e2489f97-e7cb-41ef-9fd5-8f6ca91696ad-wlvu0p.png"
  />,
];
export const DashboardCarousel = () => {
  return <CarouselToggle items={items} deplay={5000}/>;
};
