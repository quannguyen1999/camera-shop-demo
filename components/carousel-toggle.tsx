import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface CarouselToggleProps {
  items: React.ReactNode[]
}

export const CarouselToggle = ({
  items
}: CarouselToggleProps) => {
  return (
      <Carousel className="w-full">
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
