"use client"
import React, { useCallback, useRef, useState } from 'react'
import Image from 'next/image';
import BananaMe from '../../public/BananaMe.png';
import Link from 'next/link';
import Bananas from '../../public/BCATBananas.png';
import UpOnly from '../../public/BCATUpOnly.png';
import Windows from '../../public/BCATWindows.png';
import { TwitterIcon, TwitterShareButton } from 'react-share';

export default function Home() {
  const imageList = [
    Bananas,
    UpOnly,
    Windows,
]
const [file , setFile] = useState<File>();
const [imageUrl , setImageUrl] = useState("");

const [imageNum, setImageNum] = useState(0);
const handleIncrease = () => {
  if(imageNum == 2)
    setImageNum(0);
  else
  setImageNum(imageNum +1)
}
const handleDecrease = () => {
  if(imageNum == 0)
    setImageNum(2);
  else
  setImageNum(imageNum -1)
}
const [currentPageUrl, setCurrentUrl] = useState("") ;

const combinedImageRef = useRef<HTMLCanvasElement>(null);




  return (
    <main >
       <div className="flex min-h-screen items-center flex-col w-full bg-black">
       <div className='flex justify-center pt-5'>
       <Image src={BananaMe} id="BananaMeText" alt="BananaMe" width={329} height={96}/>
        </div>
        <div className='flex justify-center items-center'>
        <button onClick={handleIncrease} className='w-[100px] h-[100px] text-white text-7xl font-bold' > {"<"}</button>
        <Image src={imageList[imageNum]} width={500} height={500} alt='/' className='z-10'/>
        <Image src={imageUrl} width={200} height={200} layout='-1' alt='/' className='absolute rounded-full'/>
        <button onClick={handleDecrease} className='w-[100px] h-[100px] text-white text-7xl font-bold' > {">"}</button>
        </div>
        <h2 className='p-5 text-white'>Upload your face and adjust it to fit the banana costume!</h2>
       <div className='flex justify-center items-center'>
      <form action="" onClick={() => document.querySelector(".input")}>
      <input id='imageInput' onChange={({target}) =>{
            if(target.files)
            {
                const file = target.files[0];
                setImageUrl (URL.createObjectURL(file));
                setFile(file);
                const reader = new FileReader();
               reader.addEventListener("load", () => {
                console.log(reader.result);
               })
               reader.readAsDataURL(file);
            }
            else setImageUrl("");
          }            
         } 
    type="file" className='text-lg font-bold w-[120px] mx-10'/>
      </form>
        <button onClick={async () => {
  if (imageList[imageNum] && imageUrl) {
    const formData = new FormData();
    formData.append('image1', imageList[imageNum].src );
    formData.append('image2', imageUrl);

    const response = await fetch('/api/combineImages', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'combined_image.png';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    }
  }}}
className='w-[120px] text-lg font-bold h-[34px] bg-slate-50 mx-10'  >Save</button>
        <canvas
        ref={combinedImageRef}
        style={{ display: 'none' }}
        width="128" // Width of the combined image
        height="128" // Height of the combined image
      ></canvas>
       </div>
        <TwitterShareButton url={imageUrl} >
          <button className='w-[120px] text-lg font-bold h-[34px] bg-slate-50 my-10'  >Share on X</button>
        </TwitterShareButton>
        <Link href="https://swap.defillama.com/?chain=ethereum&from=0x0000000000000000000000000000000000000000&to=0x0590cc9232ebf68d81f6707a119898219342ecb9" target="_blank" >
        <button className='w-[120px] text-lg font-bold h-[34px] bg-slate-50 '>Buy $BCAT</button>
        </Link>
       
       </div>
      
    </main>
  )
}
