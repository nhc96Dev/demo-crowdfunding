import React from "react";
import { useDropdown } from "./dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className="absolute left-0 z-50 w-full bg-white rounded-lg shadow-md top-full">
          {children}
        </div>
      )}
    </>
  );
};

export default List;