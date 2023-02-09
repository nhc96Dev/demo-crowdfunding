import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ name = "", checked, onClick = () => {}, children }) => {
  return (
    <label>
      <input
        type="checkbox"
        id={name}
        checked={checked}
        onChange={() => {}}
        className="hidden"
        onClick={onClick}
      />
      <div className="flex items-start gap-x-5">
        <div
          className={`flex items-center justify-center w-5 h-5 border rounded cursor-pointer text-white mt-[2px] ${
            checked
              ? "bg-primary border-primary "
              : "border-text4 dark:border-text3"
          }`}
        >
          <span className={checked ? "" : "opacity-0 invisible"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        {children && <div className="cursor-pointer">{children}</div>}
      </div>
    </label>
  );
};
Checkbox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Checkbox;
