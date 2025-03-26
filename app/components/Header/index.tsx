"use client";
import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Header = () => {
  const items = new Array(15).fill(null);

  const animation = {
    duration: 14000,
    easing: (t) => t,
  };

  const looping = true;

  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 10,
    },
    loop: true,
    created(s) {
      looping && s.moveToIdx(5, true, animation);
    },
    updated(s) {
      looping && s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      looping && s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1 },
      },
    },
  });

  return (
    <div className="p-8">
      <div
        ref={sliderRef}
        className="p-7 flex gap-1 border border-borderColor rounded-[32px] keen-slider"
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
