import { Button } from "components/button";
import Term from "components/Term";
import { defaultImage } from "constants/global";
import React from "react";

const ContributionSummury = () => {
  return (
    <div className="w-full max-w-[462px] shadow-2 bg-white rounded-25 pt-25px pb-25px lg:pb-10 px-15px lg:px-5">
      <h3 className="mb-5 text-xs font-semibold leading-normal lg:text-lg lg:mb-25px text-text2 lg:ml-10px">
        Contribution Summury
      </h3>
      <div className="flex items-center px-15px py-[11px] lg:px-5 lg:py-4 mb-15px rounded-10 bg-secondary bg-opacity-5 gap-x-10px lg:gap-x-15px">
        <img
          src={defaultImage}
          alt=""
          className="flex-shrink-0 object-cover rounded-5 w-[64px] h-[50px] lg:w-[89px] lg:h-[70px]"
        />
        <h4 className="text-xs font-medium lg:text-base text-nowrap">
          Special One Camera
        </h4>
        <span className="ml-auto text-xs font-semibold whitespace-nowrap lg:font-bold lg:text-base">
          $2,724 USD
        </span>
      </div>
      <div className="px-5">
        <div className="flex items-center justify-between text-xs font-medium lg:text-base mb-10px text-text2">
          <span>Subtotal</span>
          <span>$2,724 USD</span>
        </div>
        <div className="flex items-center justify-between mb-5 text-xs font-medium lg:text-base lg:mb-25px text-text2">
          <span>Shipping</span>
          <span>$0 USD</span>
        </div>
        <div className="flex items-center justify-between mb-6 text-xs font-bold uppercase lg:text-base lg:mb-30px">
          <span>TOTAL</span>
          <span>$2,724 USD</span>
        </div>
        <Term></Term>
        <Button kind="primary" className="w-full text-sm p-10px">
          Submit Payment
        </Button>
      </div>
    </div>
  );
};

export default ContributionSummury;
