"use client";

import React, { useState } from "react";
import Bananas from "../../../public/BCATBananas.png";
import UpOnly from "../../../public/BCATUpOnly.png";
import Windows from "../../../public/BCATWindows.png";

interface BananaImageProps {
  sr: string;
}

const BananaImage = ({ sr }: BananaImageProps) => {
  const imageList = [Bananas, UpOnly, Windows];

  const [imageNum, setImageNum] = useState(0);
  const handleIncrease = () => {
    if (imageNum == 2) setImageNum(0);
    else setImageNum(imageNum + 1);
  };
  const handleDecrease = () => {
    if (imageNum == 0) setImageNum(2);
    else setImageNum(imageNum - 1);
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <button
        onClick={handleIncrease}
        className="w-[100px] h-[100px] text-yellow-500 text-7xl font-bold"
      >
        {" "}
        {"<"}
      </button>
      <div className="relative" id="image-to-save">
        <img
          src={imageList[imageNum].src}
          alt="/"
          className="z-10 md:w-[500px] md:h-[500px] w-[200px] h-[200px] "
        />
        {sr && (
          <img
            src={sr}
            alt="/"
            className="absolute top-1/2 left-1/2 transform -translate-x-[52%] -translate-y-1/2 md:w-[150px] md:h-[135px] w-[55px] h-[51px] "
          />
        )}
      </div>
      <button
        onClick={handleDecrease}
        className="w-[100px] h-[100px] text-yellow-500 text-7xl font-bold"
      >
        {" "}
        {">"}
      </button>
    </div>
  );
};

export default BananaImage;
