import React from "react";
import { NavLink } from "react-router-dom";
import IconCampaign from "components/icons/IconCampaign";
import IconDarkmode from "components/icons/IconDarkmode";
import IconDashboard from "components/icons/IconDashboard";
import IconLogout from "components/icons/IconLogout";
import IconPayment from "components/icons/IconPayment";
import IconProfile from "components/icons/IconProfile";
import IconWithdraw from "components/icons/IconWithdraw";

const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/logout",
    onClick: () => {},
  },
  {
    icon: <IconDarkmode></IconDarkmode>,
    title: "Light/Dark",
    url: "/darkmode",
    onClick: () => {},
  },
];
const DashboardSidebar = () => {
  const navLinkClass =
    "flex items-center md:justify-center gap-x-5 md:w-12 md:h-12 md:rounded-10 md:mb-30px last:mt-auto last:mb-0 last:shadow-sdprimary";
  return (
    <div className="mt-4 w-full md:w-[76px] h-[733px] rounded-20 bg-white shadow-sdprimary px-[14px] py-10 flex flex-col flex-shrink-0">
      {sidebarLinks.map((link) => (
        <NavLink
          key={link.title}
          to={link.url}
          className={({ isActive }) =>
            isActive
              ? `${navLinkClass} text-primary bg-primaryExtra2`
              : `${navLinkClass} text-icon-color`
          }
        >
          <span>{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
