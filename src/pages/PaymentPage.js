import { Button } from "components/button";
import React from "react";

const PaymentPage = () => {
  return (
    <div className="pt-[66px]">
      <div className="w-full max-w-[624px] mx-auto text-center">
        <h1 className="mb-3 font-bold text-25px">
          Connect Your Payment Processor
        </h1>
        <p className="text-base text-text3 mb-60px">
          To Start Processing credit card payments and donations, you will need
          to select either Paypal or Payoneer{" "}
        </p>
        <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] space-x-10">
          <div className="flex flex-col items-center justify-center w-full px-6 pb-6 bg-white shadow-2 pt-35px rounded-15">
            <img srcSet="paypal2x.png 2x" alt="" className="mb-10" />
            <p className="mb-6 text-sm text-text3">
              Get paid directly via Paypal.
            </p>
            <Button className="w-full bg-secondary bg-opacity-20 text-secondary">
              Connect
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center w-full px-6 pb-6 bg-white shadow-2 pt-35px rounded-15">
            <img srcSet="payoneer2x.png 2x" alt="" className="mb-10" />
            <p className="mb-6 text-sm text-text3">
              Get paid worldwide your Work.
            </p>
            <Button className="w-full text-white bg-secondary">Connect</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
