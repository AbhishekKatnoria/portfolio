"use client";
import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Header = () => {
  const items = new Array(10).fill(null);

  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 10,
    },
    loop: true,
  });

  return (
    <div className="p-8">
      <div
        ref={sliderRef}
        className="p-7 flex gap-1 border rounded-4xl keen-slider"
      >
        {items.map((_, index) => (
          <div
            key={index}
            className="keen-slider__slide p-4 flex justify-center items-center"
          >
            <Image src="/loader.svg" alt="logo" width={20} height={20} />
            <h2 className="text-[22px]">Portfolio</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
