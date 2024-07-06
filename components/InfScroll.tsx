"use client";
import Image from "next/image";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ImageShadow } from "./image/image-shadow";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CarouselToggle } from "./carousel-toggle";
const dataFakes = [1, 2, 3, 4, 5];
const items = [
  <div className=" flex h-full p-9 text-center justify-center items-center">
    <div className="items-center justify-center text-center flex">
      <Image
        src="./dashboard_2.svg"
        alt="hehe"
        width={100}
        height={100}
        className="w-3/4 h-3/4"
      />
    </div>
  </div>,
  <div className=" bg-transparent flex h-full text-center justify-center items-center">
    <div className="items-center justify-center text-center flex">
      <Image
        src="./dashboard_1.svg"
        alt="hehe"
        width={100}
        height={100}
        className="w-full h-full"
      />
    </div>
  </div>,
  <div className=" flex h-full p-9 text-center justify-center items-center">
    <div className="items-center justify-center text-center flex">
      <Image
        src="./dashboard_2.svg"
        alt="hehe"
        width={100}
        height={100}
        className="w-3/4 h-3/4"
      />
    </div>
  </div>,
  <div className=" bg-transparent flex h-full text-center justify-center items-center">
    <div className="items-center justify-center text-center flex">
      <Image
        src="./dashboard_1.svg"
        alt="hehe"
        width={100}
        height={100}
        className="w-full h-full"
      />
    </div>
  </div>,

  <div className=" flex h-full p-9 text-center justify-center items-center">
    <div className="items-center justify-center text-center flex">
      <Image
        src="./dashboard_2.svg"
        alt="hehe"
        width={100}
        height={100}
        className="w-3/4 h-3/4"
      />
    </div>
  </div>,
  <div className=" bg-transparent flex h-full text-center justify-center items-center">
    <div className="items-center justify-center text-center flex">
      <Image
        src="./dashboard_1.svg"
        alt="hehe"
        width={100}
        height={100}
        className="w-full h-full"
      />
    </div>
  </div>,
  <div className=" flex h-full p-9 text-center justify-center items-center">
    <div className="items-center justify-center text-center flex">
      <Image
        src="./dashboard_2.svg"
        alt="hehe"
        width={100}
        height={100}
        className="w-3/4 h-3/4"
      />
    </div>
  </div>,
  <div className=" bg-transparent flex h-full text-center justify-center items-center">
    <div className="items-center justify-center text-center flex">
      <Image
        src="./dashboard_1.svg"
        alt="hehe"
        width={100}
        height={100}
        className="w-full h-full"
      />
    </div>
  </div>,
  <div className=" flex h-full p-9 text-center justify-center items-center">
    <div className="items-center justify-center text-center flex">
      <Image
        src="./dashboard_2.svg"
        alt="hehe"
        width={100}
        height={100}
        className="w-3/4 h-3/4"
      />
    </div>
  </div>,
  <div className=" bg-transparent flex h-full text-center justify-center items-center">
    <div className="items-center justify-center text-center flex">
      <Image
        src="./dashboard_1.svg"
        alt="hehe"
        width={100}
        height={100}
        className="w-full h-full"
      />
    </div>
  </div>,
];
export const InfScroll = () => {
  return (
    <CarouselToggle items={items} deplay={2000} isMainScreenDashboard={false} />
  );
};
