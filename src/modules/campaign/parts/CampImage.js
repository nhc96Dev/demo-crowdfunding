import { defaultImage } from "constants/global";
import React from "react";

const CampImage = ({
  image = defaultImage,
  size = "small",
  className = "",
}) => {
  return (
    <div
      className={`${size === "big" ? "h-[266px]" : "h-[158px]"} ${className}`}
    >
      <img
        src={image}
        alt=""
        className={`object-cover w-full h-full ${
          size === "big" ? "rounded-25" : "rounded-15"
        }`}
      />
    </div>
  );
};

export default CampImage;
