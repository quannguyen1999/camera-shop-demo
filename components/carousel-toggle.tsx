"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CarouselToggleProps {
  items: React.ReactNode[];
  deplay: number;
  isMainScreenDashboard?: boolean;
}

export const CarouselToggle = ({
  items,
  deplay,
  isMainScreenDashboard = true,
}: CarouselToggleProps) => {
  const plugin = React.useRef(
    Autoplay({ delay: deplay, stopOnInteraction: true })
  );
  return (
    <Carousel className="w-full" plugins={[plugin.current]}>
      <CarouselContent>
        {items.map((t, index) => (
          <CarouselItem
            key={index}
            className={cn(
              isMainScreenDashboard
                ? "flex h-screen w-screen"
                : "pl-1 md:basis-3/12 lg:basis-3/12"
            )}
          >
            <div className="p-1 flex-1 ">{t}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
