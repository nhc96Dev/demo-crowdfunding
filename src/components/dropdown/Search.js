import React from "react";
import { useDropdown } from "./dropdown-context";

const Search = ({ placeholder, ...props }) => {
  const { onChange } = useDropdown();

  return (
    <div className="sticky top-0 z-10 p-2 bg-white">
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full py-3 text-sm border border-gray-200 outline-none px-25px rounded-10 `}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Search;
