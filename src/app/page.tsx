"use client"
import React, {useState } from 'react'

import Image from 'next/image';
import Link from "next/link";
import dynamic from "next/dynamic";

import BananaMe from '../../public/BananaMe.png';

import { TwitterShareButton } from "react-share";

import html2canvas from "html2canvas";

const UploadAvatar = dynamic(() => import("./components/UploadAvatar"), {
  ssr: false,
});
const BananaImage = dynamic(() => import("./components/BananaImage"), {
  ssr: false,
});

export default function Home() {

const [imageUrl , setImageUrl] = useState("");
const [sr, setSr] = useState("");

  const handleSaveScreenshot = () => {
    const elementToCapture = document.getElementById("image-to-save");
    if (elementToCapture) {
      html2canvas(elementToCapture).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = base64image;
        link.download = "saved-image.png";
        link.click();
      });
    }
  };


  return (
    <main>
      <div className="flex min-h-screen items-center flex-col w-full bg-black text-black">
        <div className="flex justify-center pt-5">
          <Image
            src={BananaMe}
            id="BananaMeText"
            alt="BananaMe"
            width={329}
            height={96}
          />
        </div>

        <h2 className="p-5 text-white">
          Upload your face and adjust it to fit the banana costume!
        </h2>
        <BananaImage sr={sr} />
        <div className="flex justify-center items-center mt-6">
          <button>
            <UploadAvatar setSr={setSr} />
          </button>
          <button
            onClick={handleSaveScreenshot}
            className="w-[120px] text-lg font-bold h-[34px] bg-slate-50 mx-10"
          >
            Save
          </button>
        </div>
        <TwitterShareButton url={imageUrl}>
          <div className="w-[120px] text-lg font-bold h-[34px] bg-slate-50 my-10">
            Share on X
          </div>
        </TwitterShareButton>
        <Link
          href="https://swap.defillama.com/?chain=ethereum&from=0x0000000000000000000000000000000000000000&to=0x0590cc9232ebf68d81f6707a119898219342ecb9"
          target="_blank"
        >
          <button className="w-[120px] text-lg font-bold h-[34px] bg-slate-50 ">
            Buy $BCAT
          </button>
        </Link>
      </div>
    </main>
  );
}
