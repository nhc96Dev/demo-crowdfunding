import React, { Fragment } from "react";
import CampImage from "./parts/CampImage";
import CampCategory from "./parts/CampCategory";
import CampTitle from "./parts/CampTitle";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";
import CampViewAuthor from "./parts/CampViewAuthor";
import { Button } from "components/button";
import CampaignSupport from "./CampaignSupport";
import CampaignPerk from "./CampaignPerk";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";
import { v4 } from "uuid";

const CampaignView = () => {
  return (
    <Fragment>
      <div className="h-[140px] rounded-25 bg-cover bg-center bg-no-repeat flex items-center justify-center text-white text-40px font-bold mb-10 gradient-banner">
        Education
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampImage size="big" className="!h-[400px] mb-30px"></CampImage>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  key={index}
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="w-[89px] h-[70px] rounded-5 object-cover"
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampCategory
            size="big"
            text="Film"
            className="py-[3px]"
          ></CampCategory>
          <CampTitle size="big">
            Meet - AI Virtual Background 4K Webcam
          </CampTitle>
          <CampDesc size="big" className="!mb-25px leading-6">
            The first-ever 4K webcam that embeded AI technology to protect your
            background during video calls.
          </CampDesc>
          <CampViewAuthor></CampViewAuthor>
          <div className="w-full h-[5px] rounded-full bg-[#EFEFEF] mb-5">
            <div className="w-4/6 h-full rounded-full bg-primary20%"></div>
          </div>
          <div className="flex items-center justify-between mb-15px gap-x-65px">
            <CampMeta
              size="big"
              amount="$2,000"
              text="Raised of $2,500"
            ></CampMeta>
            <CampMeta size="big" amount={173} text="Total backers"></CampMeta>
            <CampMeta size="big" amount={30} text="Days left"></CampMeta>
          </div>
          <Button kind="primary" className="w-full">
            Back this project
          </Button>
        </div>
      </div>

      <div className="mt-[165px] flex items-center justify-between bg-white h-[90px] shadow-sm mb-25px">
        <div className="flex items-center text-sm font-medium gap-x-60px text-text3">
          <span className="cursor-pointer text-secondary">Campgain</span>
          <span className="cursor-pointer">Campgain</span>
          <span className="cursor-pointer">Campgain</span>
          <span className="cursor-pointer">Campgain</span>
        </div>
        <Button kind="primary" className="px-35px">
          Back this project
        </Button>
      </div>

      <div className="w-[1170px] mx-auto grid gap-x-[124px] grid-cols-[605px,441px] mb-[70px]">
        <div>
          <h2 className="mb-5 text-lg font-semibold uppercase ">Story</h2>
          <div className="text-base bg-white text-text3"></div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-60px"></div>
          <div className="flex flex-col gap-y-30px">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-10 text-xl font-semibold text-text1">
          You also may be interested in
        </h2>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItem key={v4()}></CampaignItem>
            ))}
        </CampaignGrid>
      </div>
    </Fragment>
  );
};

export default CampaignView;
