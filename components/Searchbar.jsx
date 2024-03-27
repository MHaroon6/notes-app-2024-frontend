"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Searchbar = () => {
  const [searchString, setSearchString] = useState("");

  return (
    <div className="Searchbar  flex items-center gap-4 border border-gray-400 rounded-full py-2 px-4 bg-white">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4 text-cyan-500" />
      <input
        type="text"
        name="searchString"
        placeholder="Search"
        className="border-none border-0 outline-none w-24 lg:w-96 bg-transparent"
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
        autoComplete="off"
      />

      <span
        className={`px-1 hover:cursor-pointer hover:bg-gray-200 rounded-full ${
          searchString.length === 0 && "invisible"
        }`}
        onClick={() => {
          setSearchString("");
        }}
        title="Reset"
      >
        <FontAwesomeIcon
          icon={faTimes}
          className="w-4 text-gray-400 "
        
        />
      </span>
    </div>
  );
};

export default Searchbar;
