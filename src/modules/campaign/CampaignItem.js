import React from "react";
import CampAuthor from "./parts/CampAuthor";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignItem = () => {
  const shadow =
    "shadow-[0px_2px_4px_rgba(184,_184,_184,_0.03),_0px_6px_12px_rgba(184,_184,_184,_0.02),_0px_12px_20px_rgba(184,_184,_184,_0.03)]";

  return (
    <div className={`rounded-15 bg-white ${shadow}`}>
      <CampImage></CampImage>
      <div className="px-5 py-15px">
        <CampCategory to="/" text="Education"></CampCategory>
        <CampTitle>Powered Kits Learning Boxes</CampTitle>
        <CampDesc>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampDesc>
        <div className="flex items-center justify-between mb-5 gap-x-5">
          <CampMeta amount="$2,000" text="Raised of $1,900"></CampMeta>
          <CampMeta amount={173} text="Total backers"></CampMeta>
        </div>
        <CampAuthor name="Adom Shafi"></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
