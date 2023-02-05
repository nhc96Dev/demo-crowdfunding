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
      className="flex items-center justify-between text-sm font-medium transition-all cursor-pointer py-15px px-25px hover:text-primary text-text1"
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
};

export default Option;
