import { Button } from "components/button";
import { defaultImage } from "constants/global";
import React from "react";

const CampaignPerk = ({ showButton = false }) => {
  return (
    <div className={showButton ? "mb-10px" : ""}>
      <div className="bg-white shadow-1 rounded-10">
        <img
          src={defaultImage}
          alt=""
          className="h-[232px] w-full object-cover rounded-10"
        />
        <div className="p-5">
          <span className="text-white px-[14px] pt-[6px] pb-[4px] bg-secondary20% text-xs font-medium rounded-sm inline-block mb-5">
            Featured
          </span>
          <h3 className="text-xl font-semibold mb-5px">Special One Camera</h3>
          <div className="flex items-center gap-x-10px mb-15px">
            <span className="text-xl font-bold">$2,724 USD</span>
            <span className="text-sm font-medium text-error">
              <span className="line-through">$1,504 USD</span> (12% OFF)
            </span>
          </div>
          <div className="flex flex-col mb-15px">
            <strong className="text-base font-medium text-text1">
              Estimated Shipping
            </strong>
            <span className="text-sm text-text2">October 2022</span>
          </div>
          <p className="text-sm text-text2 mb-15px">
            <strong>05</strong> claimed
          </p>
          <span className="text-sm text-text2">Ships worldwide</span>
        </div>
      </div>
      {showButton && (
        <div className="mt-25px">
          <Button kind="secondary" className="w-full">
            Get this perk
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampaignPerk;
