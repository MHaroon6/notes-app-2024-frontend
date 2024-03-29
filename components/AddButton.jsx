"use client";

import { myNotesContext } from "@/context/NotesContext";

const AddButton = () => {
  const { handleNewNote } = myNotesContext();
  return (
    <button
      className=" font-semibold rounded-full py-3 px-4 transition-all delay-100 ease-in-out custom-btn text-sm"
      onClick={handleNewNote}
    >
      New Note
    </button>
  );
};

export default AddButton;
