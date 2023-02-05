import { defaultImage } from "constants/global";
import React from "react";

const CampViewAuthor = () => {
  return (
    <div className="flex items-center gap-x-5 mb-35px">
      <img
        src={defaultImage}
        alt="avatar"
        className="w-[60px] h-[60px] rounded-full"
      />
      <div className="flex flex-col flex-1 gap-y-[2px]">
        <div className="flex items-center gap-x-15px">
          <h3 className="text-lg font-medium text-text1">Saiful Islam</h3>
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#F5A623]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
          </div>
        </div>
        <div className="flex items-center text-sm gap-x-10px text-text3">
          <strong className="font-semibold text-primary">02 Campaign</strong>
          <div className="w-[6px] h-[6px] bg-text3 rounded-full"></div>
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>
    </div>
  );
};

export default CampViewAuthor;
