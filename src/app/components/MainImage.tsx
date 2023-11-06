import React, { useState } from 'react'
import Image from 'next/image';
import Bananas from '../../../public/BCATBananas.png';
import UpOnly from '../../../public/BCATUpOnly.png';
import Windows from '../../../public/BCATWindows.png';

export const MainImage = ()=> {
    const imageList = [
        Bananas,
        UpOnly,
        Windows
    ]
   const [imageNum, setImageNumber] = useState(0);

    const handleIncreaseClick = ()=>{
        setImageNumber( imageNum + 1);
            if(imageNum == imageList.length)
            setImageNumber(0);
    }
    const handleDecreaseClick= ()=>{
        setImageNumber( imageNum - 1);
            if(imageNum == 0)
            setImageNumber (imageList.length);
    }
  return (
   <section>
     <div className='container'>
        <button onClick={handleIncreaseClick} className='w-[100px] h-[100px] text-white text-7xl font-bold' > {"<"}</button>
        <Image src={imageList[imageNum]} alt='/'/>
        <button onClick={handleDecreaseClick}  className='w-[100px] h-[100px] text-white text-7xl font-bold' > {">"}</button>
        </div>
   </section>
  )
}
