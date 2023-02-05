import React from "react";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-30px w-full max-w-[1048px]">
      <CampImage size="big" className="flex-1"></CampImage>
      <div className="flex-1 max-w-[435px]">
        <CampCategory size="big" text="Architecture"></CampCategory>
        <CampTitle size="big">
          Remake - We Make architecture exhibition
        </CampTitle>
        <CampDesc size="big">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampDesc>
        <div className="w-full h-[5px] rounded-full bg-[#EFEFEF] mb-22px">
          <div className="w-4/6 h-full rounded-full bg-primary20%"></div>
        </div>
        <div className="flex items-center justify-between mb-5 gap-x-65px">
          <CampMeta
            size="big"
            amount="$2,000"
            text="Raised of $2,500"
          ></CampMeta>
          <CampMeta size="big" amount={173} text="Total backers"></CampMeta>
          <CampMeta size="big" amount={30} text="Days left"></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
