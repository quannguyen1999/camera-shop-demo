import { InfScroll } from "@/components/InfScroll";
import { CarouselToggle } from "@/components/carousel-toggle";
import { CategoryBody } from "@/components/category/category-body";
import { DashboardCarousel } from "@/components/dashboard/dashboard-carousel";
import { ImageShadow } from "@/components/image/image-shadow";
import { ProductBody } from "@/components/product/product-body";
import { SeparatorItem } from "@/components/separator/separator-item";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Dancing_Script } from "next/font/google";

const DashboardPage = () => {
  return (
    <div className={cn("flex flex-col gap-4 bg-gray-100")}>
      <DashboardCarousel />
      <div className="px-4">
        <SeparatorItem name="ĐỒ TRANG TRÍ" />
      </div>
      <CategoryBody />
      <div className="px-4">
        <SeparatorItem name="SẢN PHẨM BÁN CHẠY" />
      </div>
      <ProductBody />
      <Separator />
      <InfScroll />
      <div className="px-4">
        <SeparatorItem name="PHÔNG NỀN CHỤP ẢNH" />
      </div>
      <ProductBody />
      <ImageShadow
        body={
          <div className="flex h-96">
            <p>.</p>
          </div>
        }
        key={2}
        imageUrl="bg-[url('/images/dashboard_2.PNG')] "
      />
    </div>
  );
};
export default DashboardPage;
