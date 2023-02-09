import React from "react";
import { NavLink } from "react-router-dom";
import IconCampaign from "components/icons/IconCampaign";
import IconDarkmode from "components/icons/IconDarkmode";
import IconDashboard from "components/icons/IconDashboard";
import IconLogout from "components/icons/IconLogout";
import IconPayment from "components/icons/IconPayment";
import IconProfile from "components/icons/IconProfile";
import IconWithdraw from "components/icons/IconWithdraw";
import { useDispatch } from "react-redux";
import { authLogOut } from "store/auth/auth-slice";

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
  },
  {
    icon: <IconDarkmode></IconDarkmode>,
    title: "Light/Dark",
    url: "/darkmode",
    onClick: () => {},
  },
];
const DashboardSidebar = () => {
  const navlinkClass =
    "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-10 md:mb-30px last:mt-auto last:mb-0 last:bg-white last:shadow-sdprimary";
  const dispatch = useDispatch();
  return (
    <div className="mt-4 w-full md:w-[76px] h-[733px] rounded-20 bg-white shadow-sdprimary px-[14px] py-10 flex flex-col flex-shrink-0">
      {sidebarLinks.map((link) => {
        if (link.url === "/logout") {
          return (
            <button
              onClick={() => dispatch(authLogOut())}
              className={navlinkClass}
              key={link.title}
            >
              <span className="text-icon-color">{link.icon}</span>
              <span className="md:hidden">{link.title}</span>
            </button>
          );
        }
        return (
          <NavLink
            to={link.url}
            key={link.title}
            className={({ isActive }) =>
              isActive
                ? `${navlinkClass} text-primary bg-primary bg-opacity-20`
                : `${navlinkClass} text-icon-color`
            }
          >
            <span>{link.icon}</span>
            <span className="md:hidden">{link.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default DashboardSidebar;
