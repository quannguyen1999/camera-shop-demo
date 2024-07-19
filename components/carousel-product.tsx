import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useModal } from "@/modal/popup/use-modal-store";
interface ImageModal {
  id: string;
  imageUrl: string;
}

interface CarouselProductProsp {
  images: ImageModal[];
}

const CarouselProduct = ({ images }: CarouselProductProsp) => {
  const {onOpen} = useModal();
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return (
    <div className="slider-container">
      {images.length <= 1 && (
        <>
          {images.map((t, index) => (
            <div key={index} className="w-full h-full">
              <Image onClick={() => onOpen("detailImage", "", t.imageUrl)}
                className="w-full h-full cursor-pointer"
                height={300}
                width={300}
                alt="hehe"
                src={t.imageUrl}
              />
            </div>
          ))}
        </>
      )}
      {images.length > 1 && (
        <>
          <Slider
            asNavFor={nav2 || undefined}
            ref={(slider) => {
              if (slider) {
                sliderRef1.current = slider;
              }
            }}
          >
            {images != null &&
              images.map((t, index) => (
                <div key={index} className="w-full h-full">
                  <Image onClick={() => onOpen("detailImage", "", t.imageUrl)}
                    className="w-full h-full cursor-pointer"
                    height={300}
                    width={300}
                    alt="hehe"
                    src={t.imageUrl}
                  />
                </div>
              ))}
          </Slider>
          <Slider
            asNavFor={nav1 || undefined}
            ref={(slider) => {
              if (slider) {
                sliderRef2.current = slider;
              }
            }}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {images != null &&
              images.map((t, index) => (
                <div key={index} className="w-full h-full">
                  <Image height={200} width={200} alt="hehe" src={t.imageUrl} />
                </div>
              ))}
          </Slider>
        </>
      )}
    </div>
  );
};

export default CarouselProduct;
