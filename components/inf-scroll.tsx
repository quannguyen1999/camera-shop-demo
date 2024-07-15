"use client";
import Image from "next/image";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ImageShadow } from "./image/image-shadow";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CarouselToggle } from "./carousel-toggle";
const items = [
  <div key='1' className=" flex h-full text-center justify-center items-center">
    <div className="items-center h-32 justify-center text-center flex">
      <Image
        src="/images/dashboard_1.png"
        alt="hehe"
        width={100}
        height={100}
        className="w-full h-full"
      />
    </div>
  </div>,
  <div key='2' className="flex h-full text-center justify-center items-center">
    <div className="items-center h-32 justify-center text-center flex">
      <Image
        src="/images/dashboard_2.png"
        alt="hehe"
        width={100}
        height={100}
        className="w-full h-full"
      />
    </div>
  </div>,
  <div key='3'  className=" flex h-full text-center justify-center items-center">
    <div className="items-center h-32 justify-center text-center flex">
      <Image
        src="/images/dashboard_1.png"
        alt="hehe"
        width={100}
        height={100}
        className="w-full h-full"
      />
    </div>
  </div>,
  <div key='4'  className="flex h-full text-center justify-center items-center">
    <div className="items-center h-32 justify-center text-center flex">
      <Image
        src="/images/dashboard_2.png"
        alt="hehe"
        width={100}
        height={100}
        className="w-full h-full"
      />
    </div>
  </div>,
   <div key='5'  className="flex h-full text-center justify-center items-center">
    <div className="items-center h-32 justify-center text-center flex">
      <Image
        src="/images/dashboard_1.png"
        alt="hehe"
        width={100}
        height={100}
        className="w-full h-full"
      />
    </div>
  </div>,
  <div key='6'  className="flex h-full text-center justify-center items-center">
    <div className="items-center h-32 justify-center text-center flex">
      <Image
        src="/images/dashboard_2.png"
        alt="hehe"
        width={100}
        height={100}
        className="w-full h-full"
      />
    </div>
  </div>,
  <div key='7'  className="flex h-full text-center justify-center items-center">
    <div className="items-center h-32 justify-center text-center flex">
      <Image
        src="/images/dashboard_1.png"
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
