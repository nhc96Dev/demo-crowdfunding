import { defaultImage } from "constants/global";
import React from "react";

const CampAuthor = ({ image = defaultImage, name = "" }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        src={image}
        alt=""
        className="w-[30px] h-[30px] rounded-full object-cover"
      />
      <p className="text-xs text-text3">
        by
        <span className="ml-1 font-semibold text-text2">{name}</span>
      </p>
    </div>
  );
};

export default CampAuthor;
