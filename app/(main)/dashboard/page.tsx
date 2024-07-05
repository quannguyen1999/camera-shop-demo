import { CarouselToggle } from "@/components/carousel-toggle";
import { DashboardCarousel } from "@/components/dashboard/dashboard-carousel";
import { ProductBody } from "@/components/product/product-body";
import { SeparatorItem } from "@/components/separator/separator-item";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // specify the weights you need
  display: "swap", // optional: controls the font-display value
});

const DashboardPage = () => {
  return (
    <div className={cn("flex flex-col gap-4 bg-gray-100", dancingScript.className)}>
      <DashboardCarousel />
      <div className="px-4">
        <SeparatorItem name="SẢN PHẨM BÁN CHẠY" />
      </div>
      <ProductBody />
      <div className="px-4">
        <SeparatorItem name="PHÔNG NỀN CHỤP ẢNH" />
      </div>
    </div>
  );
};
export default DashboardPage;
