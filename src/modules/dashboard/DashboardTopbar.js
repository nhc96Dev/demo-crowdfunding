import { Button } from "components/button";
import React from "react";
import { Link } from "react-router-dom";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-30px">
      <div className="flex items-center gap-x-[53px] flex-1">
        <Link to="/">
          <img
            srcSet="/logo.png 2x"
            alt="crowdfunding-app"
            className="w-10 object-cover lg:w-[52px] ml-[11px]"
          />
        </Link>
        <DashboardSearch></DashboardSearch>
      </div>
      <div className="flex items-center gap-x-10">
        <DashboardFund></DashboardFund>
        <Button kind="secondary" className="px-[26px]" href="/start-campaign">
          Start a campaign
        </Button>
        <img
          srcSet="/logo.png 2x"
          alt="crowdfunding-app"
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;
