/* eslint-disable @next/next/no-img-element */
import React, {useState} from 'react'
import Avatar from 'react-avatar-edit'

 const UploadAvatar = () => {
    const [src, setSrc] = useState(null);
    const [sr, setSr] = useState(null);
    const [prewie, setPreview] = useState(null)

    const onClose = () => {
      setPreview(null);
    }
    const onCrop = view =>{
      setPreview(view);
      setSr(view)
    }
  return (
    <div className=" h-[34px] bg-white text-center items-center">
       <div className='static'>
       <Avatar 
            width={120}
            height={34}
            src={src}
            borderStyle={null}
            label="Choose"
            onClose={onClose}
            onCrop={onCrop}
            imageHeight={100}
            imageWidth={200}
        />
       </div>
      <div className='relative top-[-420px] left-[95px]'>
      <img src={sr} width={150} height={150}  alt='/'/>     
      </div>
    </div>
  )
}

export default UploadAvatar;