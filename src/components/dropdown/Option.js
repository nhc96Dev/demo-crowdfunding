import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = (props) => {
  const { onClick } = props;
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      className="flex items-center justify-between px-5 py-3 text-sm transition-all cursor-pointer text-text1 hover:text-primary"
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
};

export default Option;
