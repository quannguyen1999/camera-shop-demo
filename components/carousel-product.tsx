import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
interface ImageModal {
  id: string;
  imageUrl: string;
}

interface CarouselProductProsp {
  images: ImageModal[];
}

const CarouselProduct = ({ images }: CarouselProductProsp) => {
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
      <Slider
        asNavFor={nav2 || undefined}
        ref={(slider) => {
          if (slider) {
            sliderRef1.current = slider;
          }
        }}
      >
        {images.map((t, index) => (
          <div key={index} className="w-full h-full">
            <Image
              className="w-full h-full"
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
        {images.map((t, index) => (
          <div key={index} className="w-full h-full">
            <Image height={200} width={200} alt="hehe" src={t.imageUrl} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselProduct;
