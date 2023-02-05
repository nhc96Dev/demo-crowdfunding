import { defaultImage } from "constants/global";
import React from "react";
import { useState } from "react";

const DashboardSearch = () => {
  // eslint-disable-next-line no-unused-vars
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="relative z-50 flex-1">
      <div className="w-full max-w-[458px] bg-white rounded-full shadow-sdprimary px-[7px] py-[6px] flex items-center">
        <div className="flex-1 px-[18px]">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="w-full text-sm bg-transparent text-text1 placeholder:text-text4"
          />
        </div>
        <button className="w-[72px] h-10 rounded-full bg-primary20% text-white flex items-center justify-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      {showSearch && (
        <div className="search-result lg:w-[843px] bg-white absolute left-0 top-full translate-y-5 z-50 pb-25px rounded-20">
          <div className="flex items-center justify-between p-10px bg-graySoft rounded-20">
            <h4 className="text-sm font-medium underline text-text1 pl-15px">
              See all 10,124 fundraisier
            </h4>
            <button className="flex items-center justify-center w-[72px] h-[50px] rounded-10 bg-redSoft text-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="pb-0 p-25px">
            <div className="flex flex-col gap-y-5 mb-25px">
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
            </div>
            <h3 className="text-sm font-semibold text-text1 mb-15px">
              Releted searchs
            </h3>
            <div className="flex flex-col text-sm gap-y-10px text-text2">
              <p>
                <strong>education</strong> fund
              </p>
              <p>schoralship fund</p>
              <p>
                <strong>education</strong> and schools fund
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SearchItem = () => {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src={defaultImage}
        alt=""
        className="w-[50px] h-[50px] object-cover rounded-10"
      />
      <div className="flex-1 text-sm">
        <h3 className="font-medium text-text1 mb-5px">
          <strong>Education</strong> fund for Durgham Family
        </h3>
        <p className="text-text3">By Durgham Family</p>
      </div>
    </div>
  );
};

export default DashboardSearch;
