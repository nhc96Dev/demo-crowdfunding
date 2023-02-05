import React from "react";
import PropTypes from "prop-types";

const CampTitle = ({ children, size = "small", className = "" }) => {
  return (
    <h3
      className={`text-text1  ${
        size === "big"
          ? "text-xl font-bold mb-15px"
          : "text-base font-semibold mb-5px"
      } } ${className}`}
    >
      {children}
    </h3>
  );
};
CampTitle.propTypes = {
  size: PropTypes.oneOf(["small", "big"]),
};

export default CampTitle;
