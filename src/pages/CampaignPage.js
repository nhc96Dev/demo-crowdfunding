import { Button } from "components/button";
import Heading from "components/common/Heading";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import React, { Fragment, useEffect } from "react";

const CampaignPage = () => {
  useEffect(() => {
    document.title = "Campaign";
  }, []);
  return (
    <Fragment>
      <div className="mb-10 bg-white rounded-20 flex items-center justify-between py-[31px] px-10">
        <div className="flex items-start gap-x-25px">
          <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center bg-secondary40% text-white">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12H19"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="mb-2 font-semibold text-22px text-text1">
              Create Your Campaign
            </h1>
            <p className="mb-2 text-sm text-text3">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <a href="/" className="text-sm text-primary">
              Need any help? Learn More...
            </a>
          </div>
        </div>
        <Button className="px-30px" kind="ghost" href="/start-campaign">
          Create campaign
        </Button>
      </div>
      <Heading number={4}>Your Campaign</Heading>
      <CampaignGrid type="secondary">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
      <Button kind="ghost" className="mx-auto mt-10 px-14">
        See more+
      </Button>
    </Fragment>
  );
};

export default CampaignPage;
