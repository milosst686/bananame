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
    <div className="flex justify-center items-center">
      <button
        onClick={handleIncrease}
        className="w-[100px] h-[100px] text-white text-7xl font-bold"
      >
        {" "}
        {"<"}
      </button>
      <div className="relative" id="image-to-save">
        <img
          src={imageList[imageNum].src}
          alt="/"
          className="z-10 w-[500px] h-[500px]"
        />
        {sr && (
          <img
            src={sr}
            alt="/"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px]"
          />
        )}
      </div>
      <button
        onClick={handleDecrease}
        className="w-[100px] h-[100px] text-white text-7xl font-bold"
      >
        {" "}
        {">"}
      </button>
    </div>
  );
};

export default BananaImage;
