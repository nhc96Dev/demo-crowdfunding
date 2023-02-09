import React, { Fragment, useEffect } from "react";
import CampaignAddNew from "modules/campaign/CampaignAddNew";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StartCampaignPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  console.log("StartCampaignPage ~ user", user);
  useEffect(() => {
    if (!user || !user.email) {
      navigate("/login");
    }
  }, [navigate, user]);
  return (
    <Fragment>
      <CampaignAddNew></CampaignAddNew>
    </Fragment>
  );
};

export default StartCampaignPage;
