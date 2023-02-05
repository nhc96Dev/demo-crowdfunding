import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const Input = ({
  control,
  type = "text",
  placeholder = "",
  name = "",
  className = "",
  error = "",
  children,
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        type={type}
        className={`w-full py-15px px-25px border  rounded-10 text-text1 text-sm bg-transparent dark:text-white ${
          error
            ? "border-error placeholder:text-error text-error"
            : "border-strock dark:border-darkStroke placeholder:text-text4 dark:placeholder:text-text2"
        } ${children ? "pr-16" : ""} ${className}`}
        id={name}
        placeholder={error || placeholder}
        {...field}
      />
      <span className="absolute right-[25px] top-2/4 -translate-y-2/4 cursor-pointer select-none">
        {children}
      </span>
    </div>
  );
};
Input.propTypes = {
  control: PropTypes.any.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
