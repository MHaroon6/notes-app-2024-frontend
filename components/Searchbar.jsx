"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { myNotesContext } from "@/context/NotesContext";

const Searchbar = () => {
  const { fetchNotesList, currentPage, searchString, setSearchString } =
    myNotesContext();

  const initiateSearch = (text) => {
    setSearchString(text);

    if (text?.length > 0) {
      fetchNotesList(currentPage, text, true);
    } else if (text?.length === 0) {
      fetchNotesList(currentPage, text, false);
    }
  };

  return (
    <div className="Searchbar  flex items-center gap-4 border border-gray-400 rounded-full py-1 px-2 lg:py-2 lg:px-4 bg-white">
      <FontAwesomeIcon icon={faMagnifyingGlass} className=" fa-1x text-cyan-500" />
      <input
        type="text"
        name="searchString"
        placeholder="Search"
        className="border-none border-0 outline-none w-24 lg:w-96 bg-transparent text-xs lg:text-base"
        value={searchString}
        onChange={(e) => {
          initiateSearch(e.target.value);
        }}
        autoComplete="off"
        // title="Type at least 3 characters to search"
      />

      <span
        className={`px-1 hover:cursor-pointer hover:bg-gray-200 rounded-full ${
          searchString.length === 0 && "invisible"
        }`}
        onClick={() => {
          setSearchString("");
          fetchNotesList(currentPage, "", false);
        }}
        title="Reset"
      >
        <FontAwesomeIcon icon={faTimes} className="fa-1x text-gray-400 " />
      </span>
    </div>
  );
};

export default Searchbar;
