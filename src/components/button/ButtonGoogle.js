import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const ButtonGoogle = ({
  text = "Sign up with google",
  onClick = () => {},
  className = "",
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-x-10px w-full p-13px border border-strock dark:border-darkStroke rounded-10 mb-5 ${className}`}
    >
      <img srcSet="icon-google.png 2x" alt="" />
      <span className="font-semibold text-text2 dark:text-white ">{text}</span>
    </button>
  );
};
ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent,
});
