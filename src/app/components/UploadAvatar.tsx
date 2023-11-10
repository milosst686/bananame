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
    <div className="h-[34px] bg-white text-center items-center">
      <div className="static">
        <Avatar
          width={120}
          height={34}
          src={src}
          label="Choose"
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
