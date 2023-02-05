import React from "react";
import PropTypes from "prop-types";
import { useDropdown } from "./dropdown-context";

const Select = ({
  placeholder = "",
  className = "",
  selectedCategory = "",
}) => {
  const { toggle, show } = useDropdown();
  return (
    <div
      className={`flex items-center justify-between py-15px px-25px bg-transparent text-text1 border border-strock rounded-10 cursor-pointer text-sm ${className}`}
      onClick={toggle}
    >
      {selectedCategory ? (
        <span className="font-medium text-primary">{selectedCategory}</span>
      ) : (
        <span className="text-text4">{placeholder}</span>
      )}

      <span className="text-text4">
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </span>
    </div>
  );
};
Select.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default Select;
