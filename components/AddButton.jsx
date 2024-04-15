"use client";

import { myNotesContext } from "@/context/NotesContext";

const AddButton = () => {
  const { handleNewNote } = myNotesContext();
  return (
    <button
      className=" font-semibold rounded-full py-2 px-3 lg:py-3 lg:px-4  transition-all delay-100 ease-in-out custom-btn text-xs md:text-sm"
      onClick={handleNewNote}
    >
      New Note
    </button>
  );
};

export default AddButton;
