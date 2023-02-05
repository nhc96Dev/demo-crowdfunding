import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const Textarea = (props) => {
  const {
    control,
    placeholder = "",
    name = "",
    className = "",
    error = "",
    children,
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      className={`w-full min-h-[141px] py-15px px-25px border  rounded-10 text-text1 text-sm bg-transparent dark:text-white resize-none ${
        error
          ? "border-error placeholder:text-error text-error"
          : "border-strock dark:border-darkStroke placeholder:text-text4 dark:placeholder:text-text2"
      } ${children ? "pr-16" : ""} ${className}`}
      id={name}
      placeholder={error || placeholder}
      {...field}
    ></textarea>
  );
};
Textarea.propTypes = {
  control: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
};

export default withErrorBoundary(Textarea, {
  FallbackComponent: ErrorComponent,
});
