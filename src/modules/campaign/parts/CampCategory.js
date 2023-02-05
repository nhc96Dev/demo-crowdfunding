import IconFolder from "components/icons/IconFolder";
import React from "react";
import { Link } from "react-router-dom";

const CampCategory = ({
  text = "Education",
  to = "/",
  size = "small",
  className = "",
}) => {
  return (
    <Link
      to={to}
      className={`flex items-stretch font-medium gap-x-3 text-text3 mb-15px ${
        size === "big" ? "text-sm" : "text-xs"
      } ${className}`}
    >
      <IconFolder size={size}></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampCategory;
