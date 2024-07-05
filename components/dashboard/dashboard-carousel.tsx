import Image from "next/image";
import { CarouselToggle } from "../carousel-toggle";
import { DashboardItemCarousel } from "./dashboard-item-carousel";

const items = [
  <DashboardItemCarousel key={1}/>,
  <DashboardItemCarousel key={2}/>,
];
export const DashboardCarousel = () => {
  return <CarouselToggle items={items} />
};
