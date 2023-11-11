import { color } from "html2canvas/dist/types/css/types/color";
import React, { useState } from "react";
import Avatar from "react-avatar-edit";

interface UploadAvatarProps {
  setSr: React.Dispatch<React.SetStateAction<string>>;
}

const UploadAvatar = ({setSr}: UploadAvatarProps) => {
  const [src, setSrc] = useState<string>("");
  const [preview, setPreview] = useState<string | null>(null);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (preview: string) => {
    setPreview(preview);
    setSr(preview);
  };

  return (
    <div>
      <div  className="items-center text-center text-yellow-300">
        <Avatar
          width={120}
          height={20}
          src={src}
          label="Choose"
          labelStyle={{color: "rgb(254, 240, 138)", fontSize: '1.25em',fontWeight: '700',}}
          borderStyle={{ color: "black", width: 1 }}
          onClose={onClose}
          onCrop={onCrop}
          imageHeight={100}
          imageWidth={200}
        />
      </div>
    </div>
  );
};

export default UploadAvatar;
