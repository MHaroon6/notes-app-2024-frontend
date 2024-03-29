"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";
import { myNotesContext } from "@/context/NotesContext";

const RefreshIcon = () => {
  const { fetchNotesList } = myNotesContext();
  return (
    <>
      <FontAwesomeIcon
        icon={faRotate}
        className="w-6 h-6 text-cyan-500 cursor-pointer border-0 outline-none"
        id="refresh"
        onClick={fetchNotesList}
      />
      <Tooltip
        anchorSelect={`#refresh`}
        content="Refresh List"
        place="bottom"
      />
    </>
  );
};

export default RefreshIcon;
