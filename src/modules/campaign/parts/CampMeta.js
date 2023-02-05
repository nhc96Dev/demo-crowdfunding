import React from "react";
import PropTypes from "prop-types";

const CampMeta = ({
  amount = "$2,000",
  text = "Raised of $1,900",
  size = "small",
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h4
        className={`text-text2 ${
          size === "big" ? "text-xl font-bold" : "text-sm font-semibold"
        }`}
      >
        {amount}
      </h4>
      <span
        className={`text-text4 ${size === "big" ? "text-base" : "text-xs"}`}
      >
        {text}
      </span>
    </div>
  );
};
CampMeta.propTypes = {
  size: PropTypes.oneOf(["small", "big"]),
};

export default CampMeta;
