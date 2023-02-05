import ContributionSummury from "modules/payment/ContributionSummury";
import Payment from "modules/payment/Payment";
import React from "react";

const CheckoutPage = () => {
  return (
    <div className="max-w-[891px] flex items-start flex-col lg:flex-row">
      <div className="mb-30px lg:mb-0">
        <h2 className="mb-5 text-lg font-bold leading-normal lg:mb-10 lg:text-30px">
          Payment
        </h2>
        <Payment></Payment>
      </div>
      <div className="flex-1 max-w-[462px] ml-auto">
        <ContributionSummury></ContributionSummury>
      </div>
    </div>
  );
};

export default CheckoutPage;
