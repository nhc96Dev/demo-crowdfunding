import { Button } from "components/button";
import { Input } from "components/input";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignSupport = () => {
  const { control } = useForm({});
  return (
    <div>
      <h2 className="mb-5 text-lg font-semibold text-text1">Support</h2>
      <div className="bg-white px-25px py-30px rounded-10 shadow-1">
        <p className="text-xl font-medium text-center mb-30px text-text3">
          Pledge without reward
        </p>
        <Input
          control={control}
          placeholder="$10"
          name="pledge"
          className="!text-lg px-5 py-[11px] mb-5 placeholder:text-lg"
        ></Input>
        <div className="bg-[#F7F7F7] rounded-10 p-5 text-sm mb-5">
          <p className="mb-5 font-semibold text-text2">
            Back it because you believe in it.
          </p>
          <p className="text-text3">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button kind="secondary" className="w-full">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
