import React from "react";
import PropTypes from "prop-types";

const CampDesc = ({ children, size = "small", className = "" }) => {
  return (
    <p
      className={`text-text3 ${
        size === "big" ? "text-sm mb-22px" : "text-xs mb-15px"
      } ${className}`}
    >
      {children}
    </p>
  );
};
CampDesc.propTypes = {
  size: PropTypes.oneOf(["small", "big"]),
};

export default CampDesc;
