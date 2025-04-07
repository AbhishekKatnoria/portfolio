"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Header = () => {
  const items = new Array(15).fill(null);

  return (
    <div className="m-8">
      <div className="p-6 flex gap-1 border border-borderColor rounded-[32px] keen-slider">
        <Marquee pauseOnHover={true}>
          {items.map((_, index) => (
            <div
              key={index}
              className="flex justify-center items-center px-1 gap-1"
            >
              <Image src="/loader.svg" alt="logo" width={20} height={20} />
              <h2 className="text-[22px]">Portfolio</h2>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
