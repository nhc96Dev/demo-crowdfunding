import React from "react";
import { Outlet } from "react-router-dom";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import Overlay from "components/common/Overlay";
import ReactModal from "react-modal";
import { Button } from "components/button";
import CampaignPerk from "modules/campaign/CampaignPerk";

const LayoutDashboard = () => {
  return (
    <div className="min-h-screen p-6 lg:p-10 bg-lite">
      <ReactModal
        isOpen={false}
        overlayClassName="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-text1"
        className="modal-content relative w-full max-w-[521px] bg-white rounded-20 outline-none p-10 max-h-[90vh] overflow-y-auto scroll-hidden"
      >
        <button className="absolute z-10 flex items-center justify-center cursor-pointer right-10 top-2 w-11 h-11 text-text3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h2 className="font-bold text-25px text-text1 text-center mt-[14px] mb-10">
          Back this project
        </h2>
        <div className="mb-60px">
          <p className="text-sm font-medium mb-10px text-text2">
            Enter the contribute amount
          </p>
          <input
            type="text"
            className="w-full mb-5 text-sm border py-15px px-25px border-strock rounded-10 text-text1"
            placeholder="$10"
          />
          <p className="mb-5 text-sm text-text3">
            Contribution are not associatied with perks
          </p>
          <Button kind="primary" className="px-11">
            Continue
          </Button>
        </div>
        <div className="flex flex-col gap-y-30px">
          <CampaignPerk showButton></CampaignPerk>
          <CampaignPerk showButton></CampaignPerk>
          <CampaignPerk showButton></CampaignPerk>
        </div>
      </ReactModal>
      <Overlay></Overlay>
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
