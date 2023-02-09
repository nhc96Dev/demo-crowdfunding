import axios from "axios";
import { imgbbAPI } from "config/config";
import React from "react";
import { toast } from "react-toastify";

const ImageUpload = ({ onChange, name = "" }) => {
  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    const response = await axios({
      method: "post",
      url: imgbbAPI,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imageData = response.data.data;
    if (!imageData) {
      toast.error("Image upload failed", {
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
      return;
    }
    const imageObj = {
      url: imageData.url,
      medium: imageData?.medium?.url,
      thumb: imageData?.thumb?.url,
    };
    onChange(name, imageObj);
  };
  return (
    <label className="w-full h-[200px] border border-dashed rounded-10 border-strock cursor-pointer flex items-center justify-center">
      <input type="file" className="hidden" onChange={handleUploadImage} />

      <div className="flex flex-col items-center gap-y-5px text-text3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-sm">Choose photo</span>
      </div>
    </label>
  );
};

export default ImageUpload;
