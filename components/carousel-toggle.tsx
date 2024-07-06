'use client'
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay"
 
interface CarouselToggleProps {
  items: React.ReactNode[]
}

export const CarouselToggle = ({
  items
}: CarouselToggleProps) => {
  const plugin = React.useRef(
    Autoplay({ delay: 7000, stopOnInteraction: true })
  )
  return (
      <Carousel className="w-full"
      plugins={[plugin.current]}
    
     
      >
      <CarouselContent>

        {
          items.map((t, index)=> (
            <CarouselItem key={index} className="flex h-screen w-screen">
            <div className="p-1 flex-1 ">
              {t}
            </div>
          </CarouselItem>
          ))
        }
       
      </CarouselContent>
    </Carousel>
  );
};
