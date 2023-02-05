import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
import ErrorComponent from "components/common/ErrorComponent";

const Button = ({
  children,
  type = "button",
  className = "",
  isLoading = false,
  href = "",
  kind = "primary",
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-[27px] h-[27px] border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );

  let defaultClassName =
    "flex items-center justify-center lg:p-13px lg:text-base font-semibold rounded-10 lg:min-h-[52px]";
  switch (kind) {
    case "primary":
      defaultClassName = defaultClassName + " bg-primary text-white";
      break;
    case "secondary":
      defaultClassName = defaultClassName + " bg-secondary20% text-white";
      break;
    case "ghost":
      defaultClassName = defaultClassName + " bg-[#EEEAFD]  text-secondary";
      break;
    default:
      break;
  }

  if (href)
    return (
      <Link to={href} className={`${defaultClassName} ${className}`}>
        {child}
      </Link>
    );

  return (
    <button
      type={type}
      className={`${defaultClassName} ${
        !!isLoading ? "opacity-80 pointer-events-none" : ""
      } ${className}`}
      {...rest}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default withErrorBoundary(Button, {
  FallbackComponent: ErrorComponent,
});
